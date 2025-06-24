import { MetaDescriptor } from "@remix-run/cloudflare";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { format } from "date-fns/format";
import { createWorkExperienceStructuredData } from "~/utils/structured-data";

const title = "Robb Currall - Senior Software Engineer";
const description =
  "Robb Currall. The man. The myth. The legend. Father, Software Engineer, and D&D nerd.";

export function meta(): MetaDescriptor[] {
  const workExperienceData = createWorkExperienceStructuredData();

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
    {
      "script:ld+json": workExperienceData,
    },
  ];
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 print:min-h-0 print:bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12 print:max-w-full print:px-8 print:py-6">
        <header className="mb-12 rounded-xl border border-white/60 bg-white/40 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-white/80 hover:bg-white/60 dark:border-slate-700/60 dark:bg-slate-800/40 dark:hover:border-slate-700/80 dark:hover:bg-slate-800/60 print:mb-6 print:border-0 print:bg-transparent print:p-0 print:shadow-none">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start print:gap-4">
            <div className="space-y-3 print:space-y-1">
              <h1 className="text-5xl/[1.1] font-bold text-zinc-950 dark:text-white print:text-3xl print:text-black">
                Robb Currall
              </h1>
              <p className="text-2xl/8 font-medium text-orange-600 dark:text-orange-400 print:text-lg print:font-normal print:text-black">
                Senior Software Engineer
              </p>
            </div>

            <section id="contact">
              <h2 className="sr-only">Contact</h2>
              <ContactInfo
                email="robb@currall.net"
                linkedIn="https://www.linkedin.com/in/robb-currall/"
                location="Wilmington, NC, USA"
              />
            </section>
          </div>
        </header>

        <main className="rounded-xl border border-white/60 bg-white/40 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-white/80 hover:bg-white/60 dark:border-slate-700/60 dark:bg-slate-800/40 dark:hover:border-slate-700/80 dark:hover:bg-slate-800/60 print:border-0 print:bg-transparent print:p-0 print:shadow-none">
          <InternalSection id="summary" title="Summary">
            <p className="print:text-black">
              I am Robb Currall, a husband, father, and accomplished Full Stack
              Engineer known for my ability to drive projects from inception to
              delivery, all while prioritizing customer satisfaction and product
              maintainability. With a keen focus on crafting intuitive and
              scalable solutions, I leverage emerging technologies to push the
              boundaries of what&apos;s possible.
            </p>
            <p className="print:text-black">
              My passion for optimizing user experiences and streamlining
              development workflows is matched only by my enthusiasm for
              continuous learning and exploration. I thrive on challenges and
              constantly seek opportunities to expand my skill set and delve
              into new technology. In particular, I am drawn to the power and
              elegance of Rust and Go on the backend, integrating their
              innovative ideas and philosophies into my work across various
              languages.
            </p>
          </InternalSection>

          <InternalSeparator />

          <InternalSection id="experience" title="Experience">
            <Experience
              title="Senior Software Engineer"
              subtitle="Vantaca"
              startDate={new Date("2023-01-16")}
              showDateRange
            >
              <p>
                As a Senior Software Engineer on the &quot;Homeowner
                Experience&quot; team at Vantaca, I lead the technical design
                and implementation of a cutting-edge payment solution within our
                existing HOA management software, lead the rewrite of our
                homeowner portal, as well as the creation of an AI powered
                chatbot for answering homeowner questions related to their HOA
                and CC&amp;Rs.
              </p>
              <p>
                Working primarily in C# and leveraging the .NET framework, I
                designed multiple API services while also introducing serverless
                functions into our stack. These functions played a pivotal role
                in processing background queues and incoming webhooks, allowing
                our system to scale efficiently and independently of user-facing
                APIs.
              </p>
              <p>
                In the first 12 months after the launch of our payment solution
                we have processed over $313 million in gross volume. The robust
                retry mechanisms and alerting we implemented ensured that
                disruptions to payment processing was kept to a minimum. As a
                result, we were able to act quickly to any issues and reslove
                them before any customers were affected, which in turn reduced
                the support tickets generated related to payments.
              </p>
            </Experience>

            <Experience
              title="Engineering Lead"
              subtitle="Hip eCommerce"
              startDate={new Date("2021-12-11")}
              endDate={new Date("2023-03-12")}
              showDateRange
            >
              At Hip eCommerce, I lead the development of a comprehensive comic
              book collection tracker tool. This tool seamlessly integrates with
              our image recognition system, allowing comic book collectors to
              scan their comics effortlessly for cataloging purposes. Leveraging
              Kafka, we ingested live price updates to provide users with
              real-time valuations of their collections, enhancing the
              platform&apos;s utility and user experience.
            </Experience>

            <Experience
              title="Senior Software Engineer"
              subtitle="Hip eCommerce"
              startDate={new Date("2021-01-16")}
              endDate={new Date("2021-12-11")}
              showDateRange
            >
              As a Senior Software Engineer at Hip eCommerce, I worked on the
              development of an image recognition tool that revolutionized
              product listing processes, enabling merchants to list comics on
              the platform ten times faster. This innovative solution
              significantly increased user engagement and streamlined
              operations, contributing to Hip eCommerce&apos;s continued success
              in the collectibles industry.
            </Experience>

            <Experience
              title="Lead Software Engineer"
              subtitle="CastleBranch"
              startDate={new Date("2020-06-18")}
              endDate={new Date("2021-01-08")}
              showDateRange
            >
              I worked as the lead developer of the Infectious Disease Solutions
              team, managing 3 developers on the team. My team worked to create
              the Wellness Center, a product set for school and hospital
              administrators to monitor employee health in the midst of the
              COVID-19 pandemic. We built a JSON API using PHP, a Vue single
              page application for the web portal, and a Xamarin mobile
              application.
            </Experience>

            <Experience
              title="Software Engineer II"
              subtitle="CastleBranch"
              startDate={new Date("2019-06-12")}
              endDate={new Date("2020-06-18")}
              showDateRange
            >
              As a Software Engineer II, I worked as a mentor and trainer for
              new developers. Additionally, I worked as the lead developer on
              two projects, an external facing single sign-on solution utilizing
              SAML authentication and an e-signature solution for the Bridges
              platform.
            </Experience>

            <Experience
              title="Software Engineer"
              subtitle="CastleBranch"
              startDate={new Date("2019-01-07")}
              endDate={new Date("2019-06-12")}
              showDateRange
            >
              I joined CastleBranch as part of a team that was tasked with
              creating an internal unified authentication solution for all of
              the applications provided by CastleBranch. I implemented the
              front-end single page application using Vue. I also built the user
              management tool for internal users to diagnose and resolve user
              account issues.
            </Experience>

            <Experience
              title="Software Engineer"
              subtitle="Avtec"
              startDate={new Date("2018-08-12")}
              endDate={new Date("2018-12-16")}
              showDateRange
            />

            <Experience
              title="Software Engineer Intern"
              subtitle="Avtec"
              startDate={new Date("2018-05-08")}
              endDate={new Date("2018-08-12")}
              showDateRange
            />
          </InternalSection>

          <InternalSeparator />

          <InternalSection id="skills" title="Core Skills">
            <div className="space-y-6 print:space-y-2">
              <SkillCategory title="Languages & Frameworks" color="blue">
                <SkillBadge>JavaScript</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>SQL</SkillBadge>
                <SkillBadge>C# / .NET</SkillBadge>
                <SkillBadge>PHP</SkillBadge>
                <SkillBadge>Python</SkillBadge>
                <SkillBadge>Rust</SkillBadge>
                <SkillBadge>Go</SkillBadge>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Vue</SkillBadge>
              </SkillCategory>

              <SkillCategory title="Infrastructure & Tools" color="orange">
                <SkillBadge>CI/CD</SkillBadge>
                <SkillBadge>Kubernetes</SkillBadge>
                <SkillBadge>Helm</SkillBadge>
                <SkillBadge>Azure</SkillBadge>
                <SkillBadge>GCP</SkillBadge>
                <SkillBadge>Infrastructure as Code</SkillBadge>
                <SkillBadge>Terraform</SkillBadge>
              </SkillCategory>

              <SkillCategory title="Leadership & Soft Skills" color="zinc">
                <SkillBadge>Communication</SkillBadge>
                <SkillBadge>Software Architecture</SkillBadge>
                <SkillBadge>Strategic Planning</SkillBadge>
                <SkillBadge>Team Leadership</SkillBadge>
                <SkillBadge>Collaboration</SkillBadge>
              </SkillCategory>
            </div>
          </InternalSection>

          <InternalSeparator />

          <InternalSection id="education" title="Education">
            <Experience
              title="University of South Carolina"
              subtitle="Bachelor of Computational Science"
              startDate={new Date("2016-08-19")}
              endDate={new Date("2018-12-16")}
              showDateRange
            >
              Graduated Summa Cum Laude. General curriculum in computer science,
              with an emphasis on data science and high performance computing.
            </Experience>

            <Experience
              title="Coastal Carolina University"
              subtitle="Transferred | No Degree"
              startDate={new Date("2011-08-24")}
              endDate={new Date("2014-12-12")}
              showDateRange
            >
              Studied mathematics with a focus on pre-engineering courses.
            </Experience>
          </InternalSection>

          <InternalSeparator />

          <InternalSection id="interests" title="Interests">
            <List separator="dot">
              <li>Dungeons & Dragons</li>
              <li>Bourbon</li>
              <li>Dogs</li>
              <li>Home Lab</li>
              <li>Anime</li>
            </List>
          </InternalSection>
        </main>
      </div>
    </div>
  );
}

function InternalSection({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id?: string;
  title: string;
}) {
  return (
    <section id={id} className="space-y-6 print:space-y-3">
      <h2 className="text-2xl/8 font-bold text-zinc-950 dark:text-white print:border-b print:border-gray-300 print:pb-1 print:text-xl print:font-bold print:text-black">
        {title}
      </h2>
      <div className="space-y-6 print:space-y-3">{children}</div>
    </section>
  );
}

function InternalSeparator() {
  return (
    <div className="my-12 flex items-center justify-center print:hidden">
      <div className="flex items-center space-x-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-200/60 dark:to-white/40"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-blue-300/60 dark:bg-white/60"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-200/60 dark:to-white/40"></div>
      </div>
    </div>
  );
}

function List({
  separator = "comma",
  children,
}: {
  separator?: "dot" | "comma";
  children: React.ReactNode;
}) {
  const separatorClass =
    separator === "dot"
      ? "[&>li:not(:last-child)]:after:content-['•'] [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:text-slate-400"
      : "[&>li:not(:last-child)]:after:content-[',']";
  return (
    <ul
      className={`flex flex-wrap gap-2 text-sm/5 font-medium text-zinc-700 dark:text-zinc-300 print:text-black ${separatorClass}`}
    >
      {children}
    </ul>
  );
}

function ContactInfo({
  email,
  linkedIn,
  phone,
  location,
}: {
  email?: string;
  linkedIn?: string;
  phone?: string;
  location?: string;
}) {
  return (
    <dl className="flex flex-col justify-end gap-1 text-sm/6 sm:items-end print:gap-1 print:text-sm">
      {email && (
        <>
          <dt className="sr-only">Email</dt>
          <dd>
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-right font-medium text-zinc-600 transition-all duration-200 hover:bg-blue-50/50 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-950/20 dark:hover:text-blue-400 print:bg-transparent print:px-0 print:py-0 print:font-normal print:text-black"
            >
              <EmailIcon className="shrink-0 text-zinc-400 transition-colors group-hover:text-blue-500 dark:text-zinc-500 dark:group-hover:text-blue-400 print:hidden" />
              <span>{email}</span>
            </a>
          </dd>
        </>
      )}
      {linkedIn && (
        <>
          <dt className="sr-only">LinkedIn</dt>
          <dd>
            <a
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-right font-medium text-blue-600 transition-all duration-200 hover:bg-blue-50/50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/20 dark:hover:text-blue-300 print:bg-transparent print:px-0 print:py-0 print:font-normal print:text-black"
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="shrink-0 text-blue-500 transition-colors group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-300 print:hidden" />
              <span className="print:after:content-[attr(href)]">LinkedIn</span>
            </a>
          </dd>
        </>
      )}
      {phone && (
        <>
          <dt className="sr-only">Phone</dt>
          <dd>
            <a
              href={`tel:${phone.replace(/( |-|\(|\))/g, "")}`}
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-right font-medium text-zinc-600 transition-all duration-200 hover:bg-blue-50/50 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-950/20 dark:hover:text-blue-400 print:bg-transparent print:px-0 print:py-0 print:font-normal print:text-black"
            >
              <PhoneIcon className="shrink-0 text-zinc-400 transition-colors group-hover:text-blue-500 dark:text-zinc-500 dark:group-hover:text-blue-400 print:hidden" />
              <span>{phone}</span>
            </a>
          </dd>
        </>
      )}
      {location && (
        <>
          <dt className="sr-only">Location</dt>
          <dd className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-right font-medium text-zinc-700 transition-all duration-200 hover:bg-zinc-50/50 dark:text-zinc-300 dark:hover:bg-zinc-950/20 print:bg-transparent print:px-0 print:py-0 print:font-normal print:text-black">
            <LocationIcon className="shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300 print:hidden" />
            <span>{location}</span>
          </dd>
        </>
      )}
    </dl>
  );
}

function SkillCategory({
  title,
  color,
  children,
}: {
  title: string;
  color: "blue" | "orange" | "zinc";
  children: React.ReactNode;
}) {
  const colorClasses = {
    blue: "text-blue-700 dark:text-blue-400",
    orange: "text-orange-700 dark:text-orange-400",
    zinc: "text-zinc-700 dark:text-zinc-400",
  };

  return (
    <div className="space-y-3 print:space-y-1">
      <h3
        className={`text-sm/6 font-semibold uppercase tracking-wide ${colorClasses[color]} print:text-sm print:font-semibold print:normal-case print:tracking-normal print:text-black`}
      >
        {title}:
      </h3>
      <div className="flex flex-wrap gap-2 print:inline print:text-black">
        {children}
      </div>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-sm/5 font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 print:bg-transparent print:px-0 print:py-0 print:text-xs print:text-black print:after:content-[',_'] print:last:after:content-['']">
      {children}
    </span>
  );
}

function Experience({
  title,
  subtitle,
  startDate,
  endDate,
  children,
  showDateRange = false,
}: {
  title: string;
  subtitle: string;
  startDate: Date;
  endDate?: Date;
  children?: React.ReactNode;
  showDateRange?: boolean;
}) {
  const totalMonths = differenceInCalendarMonths(
    endDate ?? new Date(),
    startDate,
  );
  const months = totalMonths % 12;
  const years = totalMonths >= 12 ? Math.floor(totalMonths / 12) : 0;
  const yearPostfix = years === 1 ? "yr" : "yrs";
  const monthPostfix = months === 1 ? "mo" : "mos";
  const yearString = years > 0 ? `${years} ${yearPostfix}` : "";
  const monthString = months > 0 ? `${months} ${monthPostfix}` : "";
  const dateRange = `${yearString} ${monthString}`.trim();

  return (
    <div className="group relative break-inside-avoid-page space-y-4 border-l-4 border-transparent pl-6 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50/30 dark:hover:border-blue-700 dark:hover:bg-blue-950/20 print:space-y-2 print:border-l-0 print:bg-transparent print:pl-0 print:hover:bg-transparent">
      <div className="space-y-2 print:space-y-1">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start print:gap-1">
          <h3 className="text-lg/7 font-bold text-zinc-950 transition-colors group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-100 print:text-base print:font-bold print:text-black print:group-hover:text-black">
            {title}
          </h3>
          <time
            className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400 print:text-sm print:font-normal print:text-black"
            dateTime={format(startDate, "yyyy-MM-dd")}
          >
            {format(startDate, "MMM yyyy")} -{" "}
            {format(endDate ?? new Date(), "MMM yyyy")}{" "}
            {showDateRange && (
              <span className="text-zinc-400 print:text-black">
                ({dateRange})
              </span>
            )}
          </time>
        </div>
        <h4 className="text-lg/6 font-bold text-orange-600 transition-colors group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300 print:text-sm print:font-semibold print:italic print:text-black print:group-hover:text-black">
          {subtitle}
        </h4>
      </div>

      {children && (
        <div className="space-y-4 text-base/7 text-zinc-600 dark:text-zinc-300 print:space-y-2 print:text-sm print:leading-relaxed print:text-black">
          {children}
        </div>
      )}
    </div>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-4 ${className || ""}`}
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      data-icon="linkedin"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
    >
      <path
        fill="currentColor"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-4 ${className || ""}`}
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-4 ${className || ""}`}
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
