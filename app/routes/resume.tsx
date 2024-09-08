import { MetaDescriptor } from "@remix-run/cloudflare";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { format } from "date-fns/format";

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

export default function Resume() {
  return (
    <>
      <header className="mx-auto mt-16 flex max-w-[800px] flex-col justify-between gap-4 p-4 sm:flex-row print:m-0 print:max-w-full">
        <div>
          <h1 className="text-4xl">Robb Currall</h1>
          <p className="text-2xl">Senior Software Engineer</p>
        </div>

        <section id="contact">
          <h2 className="sr-only">Contact</h2>
          <ContactInfo
            email="robb@currall.net"
            linkedIn="https://www.linkedin.com/in/robb-currall/"
            location="Wilmington, NC, USA"
          />
        </section>
      </header>

      <main className="mx-auto mb-16 max-w-[800px] p-4 print:max-w-full">
        <Section id="summary" title="Summary">
          <p>
            I am Robb Currall, a husband, father, and accomplished Full Stack
            Engineer known for my ability to drive projects from inception to
            delivery, all while prioritizing customer satisfaction and product
            maintainability. With a keen focus on crafting intuitive and
            scalable solutions, I leverage emerging technologies to push the
            boundaries of what&apos;s possible.
          </p>
          <p>
            My passion for optimizing user experiences and streamlining
            development workflows is matched only by my enthusiasm for
            continuous learning and exploration. I thrive on challenges and
            constantly seek opportunities to expand my skill set and delve into
            new technology. In particular, I am drawn to the power and elegance
            of Rust and Go on the backend, integrating their innovative ideas
            and philosophies into my work across various languages.
          </p>
        </Section>

        <Separator />

        <Section id="experience" title="Experience">
          <Experience
            title="Senior Software Engineer"
            subtitle="Vantaca"
            startDate={new Date("2023-01-16")}
            showDateRange
          >
            <p>
              As a Senior Software Engineer on the &quot;Rev-Up&quot; team at
              Vantaca, I lead the technical design and implementation of a
              cutting-edge payment solution within our existing HOA management
              software.
            </p>
            <p>
              Working primarily in C# and leveraging the .NET framework, I
              engineered multiple API services while also introducing Azure
              Functions into our stack. These functions played a pivotal role in
              processing background queues and incoming webhooks, allowing our
              system to scale efficiently and independently of user-facing APIs.
            </p>
            <p>
              In the first 12 months after the launch of our payment solution we
              have processed over $313 million in gross volume. The robust retry
              mechanisms and alerting we implemented ensured that disruptions to
              payment processing was kept to a minimum. As a result, we were
              able to act quickly to any issues and reslove them before any
              customers were affected, which in turn reduced the support tickets
              generated related to payments.
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
            our image recognition system, allowing comic book collectors to scan
            their comics effortlessly for cataloging purposes. Leveraging Kafka,
            we ingested live price updates to provide users with real-time
            valuations of their collections, enhancing the platform&apos;s
            utility and user experience.
          </Experience>

          <Experience
            title="Senior Software Engineer"
            subtitle="Hip eCommerce"
            startDate={new Date("2021-01-16")}
            endDate={new Date("2021-12-11")}
            showDateRange
          >
            As a Senior Software Engineer at Hip eCommerce, I worked on the
            development of an image recognition tool that revolutionized product
            listing processes, enabling merchants to list comics on the platform
            ten times faster. This innovative solution significantly increased
            user engagement and streamlined operations, contributing to Hip
            eCommerce&apos;s continued success in the collectibles industry.
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
            COVID-19 pandemic. We built a JSON API using PHP, a Vue single page
            application for the web portal, and a Xamarin mobile application.
          </Experience>

          <Experience
            title="Software Engineer II"
            subtitle="CastleBranch"
            startDate={new Date("2019-06-12")}
            endDate={new Date("2020-06-18")}
            showDateRange
          >
            As a Software Engineer II, I worked as a mentor and trainer for new
            developers. Additionally, I worked as the lead developer on two
            projects, an external facing single sign-on solution utilizing SAML
            authentication and an e-signature solution for the Bridges platform.
          </Experience>

          <Experience
            title="Software Engineer"
            subtitle="CastleBranch"
            startDate={new Date("2019-01-07")}
            endDate={new Date("2019-06-12")}
            showDateRange
          >
            I joined CastleBranch as part of a team that was tasked with
            creating an internal unified authentication solution for all of the
            applications provided by CastleBranch. I implemented the front-end
            single page application using Vue. I also built the user management
            tool for internal users to diagnose and resolve user account issues.
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
        </Section>

        <Separator />

        <Section id="skills" title="Core Skills">
          <div className="space-y-2">
            <List>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>SQL</li>
              <li>C#</li>
              <li>PHP</li>
              <li>Rust</li>
              <li>Go</li>
              <li>React</li>
              <li>Vue</li>
              <li>.NET</li>
            </List>

            <List>
              <li>CI/CD</li>
              <li>Kubernetes</li>
              <li>Helm</li>
              <li>Azure</li>
              <li>GCP</li>
              <li>Infrastructure as Code</li>
              <li>Terraform</li>
            </List>

            <List>
              <li>Communication</li>
              <li>Software Architecture</li>
              <li>Strategic Planning</li>
              <li>Team Leadership</li>
              <li>Collaboration</li>
            </List>
          </div>
        </Section>

        <Separator />

        <Section id="education" title="Education">
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
        </Section>

        <Separator />

        <Section id="interests" title="Interests">
          <List separator="dot">
            <li>Dungeons & Dragons</li>
            <li>Bourbon</li>
            <li>Dogs</li>
            <li>Home Lab</li>
            <li>Anime</li>
          </List>
        </Section>
      </main>
    </>
  );
}

function Section({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id?: string;
  title: string;
}) {
  return (
    <section id={id} className="space-y-6">
      <h2 className="text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function Separator() {
  return <hr className="my-6" />;
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
      ? "[&>li:not(:last-child)]:after:content-['•'] [&>li:not(:last-child)]:after:ml-1"
      : "[&>li:not(:last-child)]:after:content-[',']";
  return (
    <ul className={`flex flex-wrap gap-1 text-sm ${separatorClass}`}>
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
    <dl className="flex flex-col justify-end gap-[2px] text-sm italic sm:items-end">
      {email && (
        <>
          <dt className="sr-only">Email</dt>
          <dd>
            <a href={`email:${email}`}>{email}</a>
          </dd>
        </>
      )}
      {linkedIn && (
        <>
          <dt className="sr-only">LinkedIn</dt>
          <dd>
            <a className="text-blue-500" href={linkedIn}>
              {linkedIn}
            </a>
          </dd>
        </>
      )}
      {phone && (
        <>
          <dt className="sr-only">Phone</dt>
          <dd>
            <a href={`tel:${phone.replace(/( |-|\(|\))/, "")}`}>{phone}</a>
          </dd>
        </>
      )}
      {location && (
        <>
          <dt className="sr-only">Location</dt>
          <dd>{location}</dd>
        </>
      )}
    </dl>
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
    <div className="break-inside-avoid-page space-y-2">
      <div>
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <time
            className="text-xs font-light print:font-normal"
            dateTime={format(startDate, "yyyy-MM-dd")}
          >
            {format(startDate, "MMM yyyy")} -{" "}
            {format(endDate ?? new Date(), "MMM yyyy")}{" "}
            {showDateRange && <>({dateRange})</>}
          </time>
        </div>
        <h4>{subtitle}</h4>
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}
