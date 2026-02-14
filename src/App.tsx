import { ThemeProvider } from "@/context/ThemeProvider";
import { FeedbackProvider } from "@/context/FeedbackProvider";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
    <FeedbackProvider>
      <Navbar />
      <main
        className="
            min-h-screen
    overflow-x-hidden
    bg-linearto-br
    from-white
    via-zinc-50
    to-indigo-50
    dark:from-zinc-950
    dark:via-zinc-900
    dark:to-black
        "
      >
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <FeedbackModal />
    </FeedbackProvider>
    </ThemeProvider>
  );
}
