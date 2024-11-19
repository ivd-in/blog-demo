// components/DisableDraftMode.tsx

"use client";

import { cn } from "@/lib/utils";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <Link
      href="/api/draft-mode/disable"
      className={cn(buttonVariants({ variant: "default"}), "fixed font-bold bottom-4 right-4")}
    >
      Disable Draft Mode
    </Link>
  );
}