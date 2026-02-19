import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Let’s Connect
        </h2>

        <p className="mt-3 text-zinc-600 dark:text-white">
          Actively seeking full-time opportunities as a Full Stack, Frontend, or
          Backend Developer.
        </p>

        <div className="mt-12 space-y-6">
          <ContactCard
            id="email"
            active={active}
            setActive={setActive}
            href="mailto:amalthomaschennattu@gmail.com"
            icon={<Mail className="size-5 text-indigo-600" />}
            label="amalthomaschennattu@gmail.com"
          />

          <ContactCard
            id="phone"
            active={active}
            setActive={setActive}
            href="tel:+919895114935"
            icon={<Phone className="size-5 text-emerald-600" />}
            label="+91 98951 14935"
          />

          <ContactCard
            id="linkedin"
            active={active}
            setActive={setActive}
            href="https://www.linkedin.com/in/amalthomas26/"
            icon={<Linkedin className="size-5 text-blue-600" />}
            label="LinkedIn Profile"
            external
          />

          <ContactCard
            id="github"
            active={active}
            setActive={setActive}
            href="https://github.com/amalthomas26"
            icon={<Github className="size-5 text-zinc-800 dark:text-white" />}
            label="github.com/amalthomas26"
            external
          />
        </div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  id: string;
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
};

function ContactCard({
  id,
  active,
  setActive,
  href,
  icon,
  label,
  external,
}: ContactCardProps) {
  const isActive = active === id;

  return (
    <a
      onClick={(e) => {
        if (!isActive) {
          e.preventDefault();
          setActive(id);
        }
      }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative block rounded-2xl p-px cursor-pointer"
    >
      <div
        className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500
          transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}
        `}
      />

      <div
        className={`
          relative z-10 flex items-center gap-4
          rounded-2xl bg-white dark:bg-zinc-800
          border border-black/10 dark:border-white/10
          p-5 transition-all duration-300
          ${
            isActive
              ? "-translate-y-1 shadow-xl"
              : "md:group-hover:-translate-y-1 md:group-hover:shadow-xl"
          }
        `}
      >
        {icon}
        <span className="text-zinc-800 dark:text-white font-medium">
          {label}
        </span>
      </div>
    </a>
  );
}
