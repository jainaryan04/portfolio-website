import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "VIT Model United Nations",
    description:
      "A responsive registration platform for one of the largest student-led conferences on campus.",
    image: "/images/vitmun.png",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://vitmun-25.vercel.app/",
    repo: "https://github.com/nervewastaken/vitmun-25",
  },
  {
    title: "Enrollments Website",
    description: "Designed fault-tolerant backend services using FastAPI and AWS DynamoDB to manage recruitment for 1000+ applicants.",
    image: "/images/enrollments.png",
    techStack: ["FastAPI", "DynamoDB", "S3"],
    link: "https://enrollments.ieeecsvit.com",
    repo: "https://github.com/IEEECS-VIT/enrollments-2025-backend",
  },
  {
    title: "UrjaCart",
    description: "An e-commerce experience for a growing retail brand, focusing on clarity, conversion, and storytelling.",
    image: "/images/urjacart.png",
    techStack: ["React", "Firebase", "Tailwind CSS", "Retool"],
    link: "https://shop.urjacart.com",
    repo: "https://github.com/CarbexOfficial/UrjacartWebsite",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-8 sm:px-6 md:px-8 md:pl-28 lg:px-8 lg:py-10 lg:pr-24">
        {/* <div className="mb-8 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-600 shadow-sm">
          Projects
        </div> */}

        {/* <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              Selected work shaped for clarity and impact.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each project here reflects a balance of strong visual direction, clear information hierarchy, and reliable implementation.
            </p>
          </div>
          <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Built with modern frontend and backend tooling
          </div>
        </div> */}

        <div className="w-full mt-6 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-slate-900">{project.title}</h2>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Visit site
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    View repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
