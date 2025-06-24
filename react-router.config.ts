import type { Config } from "@react-router/dev/config";

export default {
  // Enable server rendering
  ssr: true,
  
  // Configure for Cloudflare Pages
  buildDirectory: "build",
} satisfies Config;