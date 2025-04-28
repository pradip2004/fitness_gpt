"use client"
import React, { useState } from 'react'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon, MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-24">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            fitness<span className="text-primary">gpt</span>
          </span>
        </Link>

        {/* Mobile Menu Button and User Button */}
        <div className="flex items-center gap-2 md:hidden">
          {isSignedIn && <UserButton />}
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {isSignedIn ? (
                <>
                  <Link
                    href="/"
                    className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <HomeIcon size={16} />
                    <span>Home</span>
                  </Link>

                  <Link
                    href="/generate-program"
                    className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <DumbbellIcon size={16} />
                    <span>Generate</span>
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <UserIcon size={16} />
                    <span>Profile</span>
                  </Link>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/generate-program">Get Started</Link>
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <SignInButton>
                    <Button
                      variant={"outline"}
                      className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </SignInButton>

                  <SignUpButton>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar