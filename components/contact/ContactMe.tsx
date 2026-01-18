"use client";

import React, { useState, FormEvent } from "react";
import { Button } from "../ui/button";
import { InputField } from "../input/InputField";
import { Reveal } from "../ui/Reveal";
import { GradientText } from "../ui/GradientText";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Generic handler for input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 opacity-20" />

      <div className="max-w-3xl mx-auto px-4">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Let's <GradientText>Work Together</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card p-8 rounded-2xl border border-border/50 shadow-xl">
            {success ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSuccess(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    field="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    label="Name"
                    className="bg-background/50 focus:bg-background transition-colors"
                  />

                  <InputField
                    field="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    label="Email"
                    className="bg-background/50 focus:bg-background transition-colors"
                  />
                </div>

                <InputField
                  field="textarea"
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  label="Message"
                  className="min-h-[150px] bg-background/50 focus:bg-background transition-colors"
                />

                <Button
                  type="submit"
                  className="w-full text-lg py-6 group"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
