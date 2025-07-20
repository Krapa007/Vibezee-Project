import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import crypto from "crypto";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://vibezee-backend.onrender.com/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const fullName = profile.displayName;

        let user = await User.findOne({ email });

        // Only create a new user if not found
        if (!user) {
          const idx = Math.floor(Math.random() * 100) + 1;
          const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

          user = await User.create({
            fullName,
            email,
            profilePic: randomAvatar,
            password: crypto.randomUUID(), // dummy password
          });

          console.log("New user created with random avatar:", randomAvatar);
        } else {
          const idx = Math.floor(Math.random() * 100) + 1;
          const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;
          user.profilePic = randomAvatar;
          await user.save();
          console.log("Existing user avatar updated:", randomAvatar);
          console.log("Existing user logged in:", user.fullName);
        }

        // Upsert to Stream
        await upsertStreamUser({
          id: user._id.toString(),
          name: user.fullName,
          image: user.profilePic || "",
        });

        return done(null, user);
      } catch (err) {
        console.error("Google OAuth error:", err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id); // save only the user id in session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // attach user to req.user
  } catch (err) {
    done(err, null);
  }
});

export default passport;
