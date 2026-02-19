import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/use-theme";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg">
        <div className="flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-white">
              Amal Thomas
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              MERN STACK
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#projects"
              className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="size-5 text-zinc-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="size-5 text-yellow-400" />
                </motion.div>
              )}
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="md:hidden rounded-xl"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="dark:bg-zinc-900">
                <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
                  <a href="#projects">Projects</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
