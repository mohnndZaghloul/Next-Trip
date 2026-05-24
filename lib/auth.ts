// lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { nextCookies } from "better-auth/next-js";

const baseURL = process.env.BETTER_AUTH_URL!;

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL,
  trustedOrigins: [baseURL, "https://*.vercel.app"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignUpOnSignIn: false,
  },
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
