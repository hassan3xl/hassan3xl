"use client";

import React from "react";
import { Button } from "../ui/button";
import { InputField } from "../input/InputField";

const ContactMe = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-lg text-foreground/70 mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <form className="space-y-6">
          <InputField
            onChange={() => {}}
            field="input"
            type="input"
            placeholder="Input your name"
          />

          <InputField
            onChange={() => {}}
            field="input"
            type="email"
            placeholder="Input your email"
          />
          <InputField
            onChange={() => {}}
            field="textarea"
            type="input"
            placeholder="Input your email"
            label="Message"
            className="input"
          />

          <Button className="w-full btn-primary text-lg py-6">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
