import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("resume", "routes/resume.tsx"),
] satisfies RouteConfig;