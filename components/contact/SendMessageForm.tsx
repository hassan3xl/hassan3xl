"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { sendMessageEndpoint } from "@/services/apiService";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SendMessageFormProps {
  source?: string;
}

export default function SendMessageForm({
  source = "hassan3xl-portfolio",
}: SendMessageFormProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = { ...data, source };
      // Prefer the internal Next.js API route if backend url is unavailable, or try external first
      const endpoint = sendMessageEndpoint || "/api/contact";

      let res: Response;
      try {
        res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (networkErr) {
        // If external endpoint failed (e.g. Render sleeping/CORS), fallback to local /api/contact
        res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        throw new Error("Unable to deliver message right now. Please email directly.");
      }

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
      setErrorMessage(
        err?.message || "Failed to send message. Please send an email directly.",
      );
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm">
      <div className="mb-6 space-y-1">
        <h3 className="font-semibold text-lg text-foreground">
          Send a direct message
        </h3>
        <p className="text-xs text-muted-foreground">
          I typically respond within 24 hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-foreground text-base">
            Message dispatched!
          </h4>
          <p className="text-xs text-muted-foreground max-w-xs">
            Thank you for reaching out. I'll get back to your email shortly.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs rounded-xl"
          >
            Send another note
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-mono text-muted-foreground"
              >
                Your Name
              </label>
              <Input
                id="name"
                placeholder="Jane Doe"
                disabled={status === "loading"}
                className="rounded-xl bg-secondary/40 border-border/70 focus-visible:ring-1 focus-visible:ring-foreground"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-[11px] text-red-500 font-mono">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-mono text-muted-foreground"
              >
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                disabled={status === "loading"}
                className="rounded-xl bg-secondary/40 border-border/70 focus-visible:ring-1 focus-visible:ring-foreground"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500 font-mono">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="text-xs font-mono text-muted-foreground"
            >
              Subject / Topic
            </label>
            <Input
              id="subject"
              placeholder="e.g. Mercanest integration, Django contract, or full-time role"
              disabled={status === "loading"}
              className="rounded-xl bg-secondary/40 border-border/70 focus-visible:ring-1 focus-visible:ring-foreground"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-[11px] text-red-500 font-mono">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-mono text-muted-foreground"
            >
              Message
            </label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Tell me about your product requirements, timeline, or idea..."
              disabled={status === "loading"}
              className="rounded-xl bg-secondary/40 border-border/70 focus-visible:ring-1 focus-visible:ring-foreground resize-none"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-[11px] text-red-500 font-mono">
                {errors.message.message}
              </p>
            )}
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-mono">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl h-11 font-medium gap-2 cursor-pointer shadow-xs"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
