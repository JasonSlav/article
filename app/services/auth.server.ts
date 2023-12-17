import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { GoogleStrategy } from 'remix-auth-google'
import { generateFromEmail } from "unique-username-generator";
import { findOrCreateUser } from "./db.server";
type User = {
  name: string;
  username: string;
  email: string;
  picture: string|null;
};

export let authenticator = new Authenticator<User>(sessionStorage);

let url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://connectify.luki.my.id";


authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: `${url}/auth/google/callback`,
    },
    async ({ profile }) => {
      const data: User = {
        name: profile._json.name,
        username: generateFromEmail(profile._json.email),
        email: profile._json.email,
        picture: profile._json.picture,
      };
      console.log(profile);
      const user = await findOrCreateUser(data);
      return user;
    }
  )
);
