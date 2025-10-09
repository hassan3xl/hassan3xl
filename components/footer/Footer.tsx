import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border text-center">
      <p className="text-primary mb-4">
        © 2025 Hassan Saidu. Built with Next.js, Shadcn UI, TypeScript &
        Tailwind CSS
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="#"
          className="text-primary hover:text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="#"
          className="text-primary hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-primary hover:text-primary transition-colors"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
