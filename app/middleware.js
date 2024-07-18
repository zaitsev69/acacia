// middleware.js
export { default } from "next-auth/middleware";

// To secure specific pages
export const config = { matcher: ["/backoffice"] };
