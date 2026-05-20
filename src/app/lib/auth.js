import { betterAuth } from "better-auth";

export const auth = betterAuth({

    emailAndPassword: { 
      enabled: true, 
    },  
    //... other config options
    // session: {
    //     expiresIn: 20,  // 7 days
    //     updateAge: 20, // 1 day (every 1 day the session expiration is updated)
    // },
});
