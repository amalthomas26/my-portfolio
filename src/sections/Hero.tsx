import { Button } from "@/components/ui/button"
import { Mascot } from "@/components/mascot/Mascot"

export function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex items-center
        px-6
        overflow-hidden
        bg-white dark:bg-zinc-950
      "
    >

      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_65%_40%,rgba(168,85,247,0.18),transparent_45%)]
          dark:bg-[radial-gradient(circle_at_65%_40%,rgba(139,92,246,0.25),transparent_45%)]
        "
      />

      <div className="mx-auto w-full max-w-6xl">

     
        <div
          className="
            inline-flex items-center
            rounded-full
            border border-black/10
            dark:border-white/10
            bg-zinc-100 dark:bg-zinc-800
            px-4 py-1 text-sm
            text-zinc-700 dark:text-zinc-300
          "
        >
          Full Stack Developer
        </div>


        <h1
          className="
            mt-6
            text-5xl md:text-6xl lg:text-7xl
            font-bold
            leading-tight
            text-zinc-900 dark:text-white
          "
        >
          Hi, I’m Amal 👋
          <span
            className="
              block
              mt-2
              bg-linear-to-r
              from-indigo-500
              via-fuchsia-500
              to-cyan-500
              bg-clip-text text-transparent
            "
          >
            Building scalable digital products
          </span>
        </h1>

      
        <p
          className="
            mt-6
            max-w-2xl
            text-lg md:text-xl
            text-zinc-600 dark:text-zinc-400
          "
        >
          I design and develop full-stack applications using
          React, TypeScript, Node.js, GraphQL, Docker, and AWS.
        </p>

       
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects">
            <Button size="lg">
              View Projects
            </Button>
          </a>

          <a href="#contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </a>
        </div>

        
        <div className="relative mt-16">
          <Mascot />
        </div>

      </div>
    </section>
  )
}
