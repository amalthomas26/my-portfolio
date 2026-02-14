import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="
     py-24
    bg-zinc-50
    dark:bg-zinc-900
    transition-colors duration-300"
    >
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.12),transparent_40%)]
        "
      />

      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Let’s Connect
        </h2>

        <p className="mt-3 text-zinc-600 dark:text-white">
          Actively seeking full-time opportunities as a Full Stack, Frontend, or
          Backend Developer. Open to impactful projects and collaborative teams.
        </p>

        <div className="mt-12 space-y-6">
          <ContactCard
            href="mailto:amalthomaschennattu@gmail.com"
            icon={<Mail className="size-5 text-indigo-600" />}
            label="amalthomaschennattu@gmail.com"
          />

          <ContactCard
            href="tel:+919895114935"
            icon={<Phone className="size-5 text-emerald-600" />}
            label="+91 98951 14935"
          />

          <ContactCard
            href="https://www.linkedin.com/in/amalthomas26/"
            external
            icon={<Linkedin className="size-5 text-blue-600" />}
            label="LinkedIn Profile"
          />

          <ContactCard
            href="https://github.com/amalthomas26"
            external
            icon={<Github className="size-5 text-zinc-800 dark:text-white" />}
            label="github.com/amalthomas26"
          />
        </div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
};

function ContactCard({ href, icon, label, external }: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group relative
        block
        rounded-2xl
        p-px
        transition-all duration-300
        
      "
    >
      <div
        className="
          absolute inset-0 rounded-2xl
          bg-linear-to-r
          from-indigo-500
          via-fuchsia-500
          to-cyan-500
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      <div
        className="
          relative z-10
          flex items-center gap-4
          rounded-2xl
          bg-white
          border border-black/10
          dark:border-white/10
          dark:bg-zinc-800
          p-5
          shadow-sm
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:shadow-xl
        "
      >
        {icon}
        <span className="text-zinc-800 font-medium dark:text-white">{label}</span>
      </div>
    </a>
  );
}
