import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { GetGithubEmail } from "../../../auth/GetGithubEmail";
import client from "../../../apollo-client";
import { REGISTER } from "../../../Apollo/RegisterMutation";
import { generateId } from "../../../utils/GenerateId";
import { LOGIN } from "../../../Apollo/LoginMutation";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "88b5e58c6963eabe7c32",
      clientSecret: "f1f564846030f4db7aa1e5f6df285609d48bb395",
    }),
    Providers.Google({
      clientId:
        "616685848377-kbf9edtomoejhed4abcdps2pm4sv4v9i.apps.googleusercontent.com",
      clientSecret: "fejVqW44M7g85ocH2YGsH3Vs",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
  debug: true,
  callbacks: {
    signIn: async (profile, account): Promise<any> => {
      await GetGithubEmail(profile, account);
      try {
        await client.mutate({
          mutation: REGISTER,
          variables: {
            username: profile.name,
            email: profile.email,
            profilePicture: profile.image,
            id: generateId(24),
          },
        });
        return true;
      } catch (error) {
        console.log(error);
        if (!error.message.includes("Account")) {
          await client.mutate({
            mutation: LOGIN,
            variables: {
              email: profile.email,
            },
          });
          return true;
        }
      }
    },
  },
});
