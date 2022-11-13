import passport from "passport";
import googleAuth from "passport-google-oauth20";
import { API_URL } from "../../../client/src/key";

// database models

import { UserModel } from "../database/allModels";

const GoogleAuthStatergy = googleAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleAuthStatergy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${API_URL}auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };

        try {
          const user = await UserModel.findOne({ email: newUser.email });

          if (user) {
            const token = user.generateJwtToken();
            return done(null, { user, token }); // signing - in
          } else {
            const user = await UserModel.create(newUser); // signing - up
            const token = user.generateJwtToken();
            return done(null, { user, token });
          }
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};
