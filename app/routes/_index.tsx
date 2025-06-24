import { MetaDescriptor } from "@remix-run/cloudflare";

const title = "Robb Currall - Senior Software Engineer";
const description =
  "Robb Currall. The man. The myth. The legend. Father, Software Engineer, and D&D nerd.";

export function meta(): MetaDescriptor[] {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
  ];
}

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%232563eb\" fill-opacity=\"0.08\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl text-center">
          <header className="mb-16">
            <div className="relative mb-10 inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-lg"></div>
              <div className="relative rounded-full bg-orange-600 p-2 ring-1 ring-orange-200 dark:bg-orange-600 dark:ring-orange-600" style={{ boxShadow: '0 0 20px rgba(251, 146, 60, 0.4)' }}>
                <img
                  src="/robb+mira.jpg"
                  alt="Robb and Mira"
                  width={200}
                  height={200}
                  className="h-48 w-48 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl/[1.1] font-bold text-gray-900 md:text-6xl/[1.1] dark:text-white">
                  Robb Currall
                </h1>
                <p className="text-xl/7 font-medium text-orange-600 md:text-2xl/8 dark:text-orange-400">
                  Digital Architect
                </p>
              </div>
              
              <div className="mx-auto max-w-2xl">
                <p className="text-lg/7 text-gray-600 dark:text-gray-300">
                  I build thoughtful software solutions that solve real problems. 
                  When I&apos;m not coding, I enjoy tabletop gaming and spending quality time with my family.
                </p>
              </div>
            </div>
          </header>

          <main>
            <SocialLinks />
          </main>
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-sm space-y-2">
        <SocialLink
          href="https://github.com/rlcurrall"
          icon={<GitHubIcon />}
          label="GitHub"
          description="View my projects"
          external
        />
        <SocialLink
          href="https://www.linkedin.com/in/robb-currall/"
          icon={<LinkedInIcon />}
          label="LinkedIn"
          description="Professional profile"
          external
        />
        <SocialLink
          href="https://twitter.com/robbcurrall"
          icon={<TwitterIcon />}
          label="Twitter"
          description="Thoughts & updates"
          external
        />
        <SocialLink
          href="/resume"
          icon={<ResumeIcon />}
          label="Resume"
          description="Experience & skills"
        />
      </div>
      
      <div className="flex justify-center">
        <a
          href="mailto:robb@currall.net"
          className="relative isolate inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-orange-600 px-[calc(1rem-1px)] py-[calc(0.75rem-1px)] text-base/6 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.5rem-1px)] before:bg-orange-500 before:shadow-sm after:absolute after:inset-0 after:-z-10 after:rounded-[calc(0.5rem-1px)] after:shadow-[inset_0_1px_theme(colors.white/15%)] hover:after:bg-white/10 dark:before:hidden dark:after:-inset-px dark:after:rounded-lg dark:hover:after:bg-white/5"
        >
          <EmailIcon />
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function SocialLink({ 
  href, 
  icon, 
  label, 
  description,
  external = false 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  description: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-base/6 font-medium text-zinc-950 transition-colors hover:bg-zinc-950/5 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 dark:text-white dark:hover:bg-white/5"
    >
      <div className="shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white" data-slot="icon">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold">{label}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{description}</div>
      </div>
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="24"
      height="24"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      data-icon="linkedin"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      ></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="24"
      height="24"
      data-icon="twitter"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
      ></path>
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
        clipRule="evenodd"
      />
      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}
