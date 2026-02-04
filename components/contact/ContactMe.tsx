"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { Send, CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";

export function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <Section id="contact" className="pb-32">
      <Reveal width="100%">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Get In <GradientText animate>Touch</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-zinc-500 rounded-full" />
          <p className="text-muted-foreground mt-4 text-center max-w-lg">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
        {/* Contact Info */}
        <div className="space-y-8 w-full">
          <Reveal delay={0.1} className="w-full">
            <div className="glass-card p-8 rounded-3xl border-white/5 space-y-8">
              <div className="flex gap-4 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Me</h4>
                  <a
                    href="mailto:contact@hassan3xl.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@hassan3xl.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Available for Remote Work
                    <br />
                    (Worldwide)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Schedule a Call</h4>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Book a free consultation
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact Form */}
        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 rounded-3xl border-white/5 space-y-6 relative overflow-hidden"
          >
            {status === "success" && (
              <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium ml-1">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-muted/30 border-white/10 focus:border-primary/50 h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium ml-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-muted/30 border-white/10 focus:border-primary/50 h-12 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-muted/30 border-white/10 focus:border-primary/50 min-h-[150px] resize-none rounded-xl"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_20px_-10px_var(--color-primary)] hover:shadow-[0_0_25px_-5px_var(--color-primary)]"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
