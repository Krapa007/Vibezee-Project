import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
// import path from "path";
import session from "express-session";
import passport from "passport";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import "./lib/passport.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 7000;
// const __dirname = path.resolve();

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// CORS Setup: Allow frontend origins
const allowedOrigins = ["http://localhost:5173", "https://vibezee.vercel.app"];
app.use((req, res, next) => {
  console.log("CORS origin: ", req.headers.origin);
  next();
});
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Handle preflight OPTIONS
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get(/^\/(?!api).*/, (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
