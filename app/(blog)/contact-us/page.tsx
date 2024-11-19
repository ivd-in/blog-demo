// src/components/DeveloperContact.tsx

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function DeveloperContact() {
  return (
    <section className="container mx-auto my-16 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center text-gray-600 mb-8">
        I’d love to hear from you! Feel free to reach out for collaboration or just a friendly hello.
      </p>

      {/* Contact Form */}
      <form className="space-y-6 max-w-2xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
        </div>
        <Textarea placeholder="Your Message" rows={4} required />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
        <div className="flex justify-center gap-6">
          <Link
            href="mailto:your-email@example.com"
            className="text-gray-600"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>

          
        </div>
        <h1 className="text-9xl font-bold">@ivd.maran</h1>
      </div>
    </section>
  );
}
