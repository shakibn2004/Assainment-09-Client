import { betterAuth } from "better-auth";

export const auth = betterAuth({

  emailAndPassword: {
    enabled: true,
  },
  baseURL: "http://localhost:3000",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

});


// baseURL: process.env.BETTER_AUTH_URL,
//   socialProviders: {
//   google: {
//     clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
//         },
// },