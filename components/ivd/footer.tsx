import { Input } from "@/components/ui/input"
import { GithubIcon, TwitterIcon, FacebookIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 py-5 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 ivd. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <TwitterIcon className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <form className="flex space-x-2">
              <Input
                className="max-w-[210px]"
                placeholder="Enter your email"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </footer>
  )
}
