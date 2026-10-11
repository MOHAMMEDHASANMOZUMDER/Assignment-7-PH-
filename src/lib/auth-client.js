import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://assignment-7-ph-4yeu.vercel.app"
})

export const { signIn, signUp,signOut, useSession, getSession, updateUser, changeEmail } = authClient