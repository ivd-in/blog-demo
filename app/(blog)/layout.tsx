// app/(blog)/layout.tsx
import { GeistSans } from "geist/font/sans";
import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Header from "@/components/ivd/header";
import Footer from "@/components/ivd/footer";
import { ThemeProvider } from "@/components/ivd/theme-provider";
import "@/styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const draft = await draftMode(); // Await `draftMode` outside return statement

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>ivd blog</title>
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="bg-white min-h-screen">
            {children}
            <SanityLive />
            {draft.isEnabled && (
              <>
                <DisableDraftMode />
                <VisualEditing />
              </>
            )}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
