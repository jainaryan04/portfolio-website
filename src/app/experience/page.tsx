import Link from "next/link";
import { Briefcase, Code2, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Focus",
    description: "Product-minded development with a strong eye for usability and detail.",
    icon: Sparkles,
  },
  {
    title: "Craft",
    description: "Pixel-precise interfaces combined with reliable full-stack implementation.",
    icon: Code2,
  },
  {
    title: "Experience",
    description: "Building client-facing products and internal platforms across fast-moving teams.",
    icon: Briefcase,
  },
];

const experiences = [
  // {
  //   role: "PRISM Project Intern",
  //   company: "Samsung R&D Institute India - Bangalore",
  //   date: "Aug 25 - Present",
  //   description:
  //     "Worked on scalable web features using React and TypeScript, helping improve product quality and performance for a large application surface.",
  //   technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Figma"],
  // },
  {
    role: "Full-Stack Web Developer Intern",
    company: "Urjacart Energy Labs Pvt Ltd",
    date: "Dec 24 - Aug 25",
    description:
      "Built responsive, accessible user interfaces and reusable components for client websites, shaping a polished digital presence across launches.",
    bulletPoints: [
      "Developed and scaled a full-stack eCommerce platform (UrjaCart) using React, Node.js, PostgreSQL, and Razorpay APIs, contributing to 8× revenue growth (240M → 1.92B INR annually).",
      "Built and maintained admin dashboards for product, order, and user management, improving operational efficiency across multiple internal teams.",
      "Implemented backend REST APIs for technician task assignment, workflow tracking, and status updates, enabling seamless coordination between call center, vendors, and technicians.",
    ],
    technologies: [ "TypeScript",  "Tailwind CSS", "Next.js", "Node.js", "Firebase", "Razorpay APIs"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <section className="mx-auto flex max-w-6xl flex-col px-6 py-20 sm:px-10 lg:px-8 lg:py-28 lg:pr-24">
        {/* <div className="mb-8 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-600 shadow-sm">
          About
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              I build thoughtful products that feel as good as they perform.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I am a full-stack developer with a strong appreciation for elegant interfaces,
              clear systems, and experiences that feel effortless from the first click.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Explore my work
              </Link>
              <a
                href="mailto:jainaryan04@gmail.com"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Say hello
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Experience
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Recent work and growth</h2>
            </div>
            <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Available for select freelance and contract work
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {experiences.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">{item.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500">{item.date}</span>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                {item.bulletPoints && item.bulletPoints.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.bulletPoints.map((bulletPoint) => (
                      <li key={bulletPoint} className="flex gap-2 text-sm leading-7 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{bulletPoint}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

