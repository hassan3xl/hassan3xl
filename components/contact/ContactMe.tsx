import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { Send, CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import SendMessageForm from "./SendMessageForm";

export function ContactMe() {
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
          <SendMessageForm source="hassan3xl" />
        </Reveal>
      </div>
    </Section>
  );
}
