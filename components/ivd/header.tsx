"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* Left side: Logo and navigation */}
        <div className="flex gap-6 md:gap-10">
          <Link className="flex items-center space-x-2" href="/">
            <span className="inline-block font-bold">ivdblog</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              className="flex items-center text-sm font-medium text-muted-foreground"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-muted-foreground"
              href="/about"
            >
              About
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-muted-foreground"
              href="/posts"
            >
              Posts
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-muted-foreground"
              href="/contact-us"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right side: Theme toggle and other icons */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* Theme Toggle Button */}
            <ModeToggle />

            {/* Search Button */}
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search />
              <span className="sr-only">Search</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
