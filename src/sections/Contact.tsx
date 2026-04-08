import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useHasHover } from "@/hooks/useHasHover";

export function Contact() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="contact" className="bg-zinc-50 py-24 dark:bg-zinc-900">
      <div className="container mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Let’s Connect
        </h2>

        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          Actively seeking full-time opportunities.
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
  setActive: Dispatch<SetStateAction<string | null>>;
  href: string;
  icon: ReactNode;
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
  external = false,
}: ContactCardProps) {
  const hasHover = useHasHover();
  const isActive = active === id;

  function handleClick() {
    if (!hasHover) {
      setActive((prev) => (prev === id ? null : id));
    }
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className="group relative block rounded-2xl p-px transition-transform duration-200 active:scale-[0.98]"
      aria-label={label}
    >
      <div
        className={`
          absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-500 via-fuchsia-500 to-cyan-500
          transition-opacity duration-300
          ${
            hasHover
              ? "opacity-0 group-hover:opacity-100"
              : isActive
                ? "opacity-100"
                : "opacity-0"
          }
        `}
      />

      <div
        className={`
          relative z-10 flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5
          transition-all duration-300 dark:border-white/10 dark:bg-zinc-800
          ${
            hasHover
              ? "group-hover:-translate-y-1 group-hover:shadow-xl"
              : isActive
                ? "-translate-y-1 shadow-xl"
                : ""
          }
        `}
      >
        <span className="shrink-0">{icon}</span>
        <span className="break-all font-medium text-zinc-800 dark:text-white">
          {label}
        </span>
      </div>
    </a>
  );
}
