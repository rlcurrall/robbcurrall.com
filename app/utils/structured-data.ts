export interface PersonStructuredData {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  email: string;
  sameAs: string[];
  image: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  worksFor?: {
    "@type": "Organization";
    name: string;
  };
}

export interface WebsiteStructuredData {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  description: string;
  url: string;
  author: {
    "@type": "Person";
    name: string;
  };
}

export function createPersonStructuredData(): PersonStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robb Currall",
    jobTitle: "Senior Software Engineer",
    description:
      "Full Stack Engineer specializing in scalable solutions, payment systems, and modern web technologies. Experienced in C#/.NET, JavaScript/TypeScript, React, and cloud infrastructure.",
    url: "https://robbcurrall.com",
    email: "robb@currall.net",
    sameAs: [
      "https://github.com/rlcurrall",
      "https://www.linkedin.com/in/robb-currall/",
      "https://twitter.com/robbcurrall",
    ],
    image: "https://robbcurrall.com/robb+mira.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wilmington",
      addressRegion: "NC",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      name: "Vantaca",
    },
  };
}

export function createWebsiteStructuredData(): WebsiteStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Robb Currall - Senior Software Engineer",
    description:
      "Personal website and portfolio of Robb Currall, a Senior Software Engineer specializing in full-stack development and scalable solutions.",
    url: "https://robbcurrall.com",
    author: {
      "@type": "Person",
      name: "Robb Currall",
    },
  };
}

export interface WorkExperienceStructuredData {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  hasOccupation: Array<{
    "@type": "Occupation";
    name: string;
    occupationLocation: {
      "@type": "Place";
      name: string;
    };
    hiringOrganization: {
      "@type": "Organization";
      name: string;
    };
    startDate: string;
    endDate?: string;
    description: string;
  }>;
}

export function createWorkExperienceStructuredData(): WorkExperienceStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robb Currall",
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Senior Software Engineer",
        occupationLocation: {
          "@type": "Place",
          name: "Remote",
        },
        hiringOrganization: {
          "@type": "Organization",
          name: "Vantaca",
        },
        startDate: "2023-01-16",
        description:
          "Lead technical design and implementation of cutting-edge payment solutions, homeowner portal rewrite, and AI-powered chatbot development. Processed over $313 million in gross volume within first 12 months.",
      },
      {
        "@type": "Occupation",
        name: "Engineering Lead",
        occupationLocation: {
          "@type": "Place",
          name: "Remote",
        },
        hiringOrganization: {
          "@type": "Organization",
          name: "Hip eCommerce",
        },
        startDate: "2021-12-11",
        endDate: "2023-03-12",
        description:
          "Led development of comprehensive comic book collection tracker with image recognition system and real-time price updates using Kafka.",
      },
      {
        "@type": "Occupation",
        name: "Lead Software Engineer",
        occupationLocation: {
          "@type": "Place",
          name: "Wilmington, NC",
        },
        hiringOrganization: {
          "@type": "Organization",
          name: "CastleBranch",
        },
        startDate: "2020-06-18",
        endDate: "2021-01-08",
        description:
          "Led team of 3 developers creating Wellness Center product for COVID-19 health monitoring using PHP API, Vue.js, and Xamarin mobile app.",
      },
    ],
  };
}

// Remove this function - we'll pass the object directly to Remix
