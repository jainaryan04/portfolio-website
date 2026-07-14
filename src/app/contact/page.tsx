import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "aryanrameshjain@gmail.com",
    href: "mailto:aryanrameshjain@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jainaryan04",
    href: "https://www.linkedin.com/in/jainaryan04",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/jainaryan04",
    href: "https://github.com/jainaryan04",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-8 lg:py-28 lg:pr-24">
        {/* <div className="mb-8 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-600 shadow-sm">
          Contact
        </div> */}

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              Let’s make something thoughtful and useful.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Whether it is a launch, a redesign, or a fresh product idea, I would love to hear what you are building.
            </p>
            {/* <Link
              href="mailto:jainaryan04@gmail.com"
              className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start a conversation
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link> */}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
              {links.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-slate-900 hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        <p className="text-sm text-slate-600">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
