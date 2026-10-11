import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  baseURL: "https://assignment-7-ph-five.vercel.app",
  trustedOrigins: [
    "https://assignment-7-ph-five.vercel.app",
  ],
})

export const { signIn, signUp,signOut, useSession, getSession, updateUser, changeEmail } = authClient