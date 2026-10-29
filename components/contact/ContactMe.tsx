"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";
import SendMessageForm from "./SendMessageForm";

export function ContactMe() {
  const [copied, setCopied] = useState(false);
  const email = "contact@hassansaidu.me";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <Section id="contact" className="border-t border-border/60">
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Contact & Availability
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Let's discuss systems, products or collaborations
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Open to senior/junior full-stack engineering roles, technical
            advisory, and freelance contract work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-border/70 bg-card/40 space-y-5">
              <h3 className="font-semibold text-sm text-foreground">
                Direct Channels
              </h3>

              {/* Email item */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-secondary/50 border border-border/40">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-muted-foreground">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs font-mono text-foreground hover:underline break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 border border-border/40">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-muted-foreground">
                    Location & Timezone
                  </p>
                  <p className="text-xs text-foreground font-mono">
                    Abuja, Nigeria (WAT / UTC+1)
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Full remote availability worldwide
                  </p>
                </div>
              </div>

              {/* Social profiles */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://github.com/hassan3xl"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/40 hover:bg-secondary/90 transition-colors text-xs font-mono text-foreground"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hassan-saidu-318a2a229"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/40 hover:bg-secondary/90 transition-colors text-xs font-mono text-foreground"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Response Commitment Note */}
            <div className="p-4 rounded-xl border border-border/50 bg-secondary/20 text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">
                Response SLA:
              </span>{" "}
              Messages and project inquiries sent here are delivered directly to
              my primary inbox.
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <SendMessageForm source="portfolio-v2" />
          </div>
        </div>
      </div>
    </Section>
  );
}
