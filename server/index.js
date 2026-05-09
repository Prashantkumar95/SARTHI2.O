// import express from "express"
// import http from "http"
// import dotenv from "dotenv"
// import { Server } from "socket.io"
// import axios from "axios"

// dotenv.config()

// import mongoose from "mongoose"
// import User from "./models/user.models.js"

// await mongoose.connect(process.env.MONGODB_URL)
// const app=express()
// app.use(express.json())
// const server=http.createServer(app)
// const port=process.env.PORT || 5000

// const io=new Server(server,{
//     cors:{
//         origin:process.env.NEXT_BASE_URL
//     }
// })

// app.get("/", (req, res) => {
//   res.send("Server is running smoothly!");
// });


// app.post("/emit", async (req, res) => {
//   const { userId, event, data } = req.body;

//   try {
//     const user = await User.findById(userId);

//     if (user?.socketId) {
//       io.to(user.socketId).emit(event, data);
//     }

//     res.json({ success: true });
//   } catch (error) {
//     res.status(500).json({ success: false });
//   }
// });

// io.on("connection", (socket) => {

//   socket.on("identity", async (userId) => {

//     socket.userId = userId

//     await User.findByIdAndUpdate(userId, {
//       socketId: socket.id,
//       isOnline: true
//     })

//   })

// // server.js — sab jagah ek hi format rakho

// socket.on("join-booking", (bookingId) => {
//   console.log("joining room:", `booking-${bookingId}`);
//   socket.join(`booking-${bookingId}`);  // ← prefix add karo
// });

// socket.on("driver-location-update", (data) => {
//   io.to(`booking-${data.bookingId}`)   // ✅ already sahi
//     .emit("driver-location", {
//       latitude: data.latitude,
//       longitude: data.longitude,
//       status: "arriving"
//     });
// });

// socket.on("chat-message", (msg) => {
//   console.log("chat to room:", `booking-${msg.rideId}`);
//   io.to(`booking-${msg.rideId}`).emit("chat-message", msg);  // ← prefix add karo
// });

//   socket.on("update-location", async ({ latitude, longitude }) => {

//     if (!socket.userId) return

//     await User.findByIdAndUpdate(socket.userId, {
//       location: {
//         type: "Point",
//         coordinates: [longitude, latitude]
//       }
//     })

//   })
 

//   socket.on("disconnect", async () => {

//     if (!socket.userId) return

//     await User.findByIdAndUpdate(socket.userId, {
//       isOnline: false,
//       socketId: null
//     })

//   })

// })






// server.listen(port,()=>{
//     console.log("server started at",port)
// })


import express from "express";
import http from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import mongoose from "mongoose";

dotenv.config();

import User from "./models/user.models.js";

await mongoose.connect(process.env.MONGODB_URL);

const app = express();

app.use(express.json());

const server = http.createServer(app);

const port = process.env.PORT || 5000;

/* ---------------- SOCKET IO ---------------- */

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://sarthi-2-o-5nho.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

/* ---------------- TEST ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});

/* ---------------- EMIT EVENT API ---------------- */

app.post("/emit", async (req, res) => {
  const { userId, event, data } = req.body;

  try {
    const user = await User.findById(userId);

    if (user?.socketId) {
      io.to(user.socketId).emit(event, data);
    }

    res.json({ success: true });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Emit failed",
    });
  }
});

/* ---------------- SOCKET CONNECTION ---------------- */

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  /* ---------- USER IDENTITY ---------- */

  socket.on("identity", async (userId) => {
    try {
      socket.userId = userId;

      await User.findByIdAndUpdate(userId, {
        socketId: socket.id,
        isOnline: true,
      });

      console.log("Identity registered:", userId);
    } catch (error) {
      console.log(error);
    }
  });

  /* ---------- JOIN BOOKING ROOM ---------- */

  socket.on("join-booking", (bookingId) => {
    console.log("Joining room:", `booking-${bookingId}`);

    socket.join(`booking-${bookingId}`);
  });

  /* ---------- DRIVER LOCATION UPDATE ---------- */

  socket.on("driver-location-update", (data) => {
    io.to(`booking-${data.bookingId}`).emit("driver-location", {
      latitude: data.latitude,
      longitude: data.longitude,
      status: "arriving",
    });
  });

  /* ---------- CHAT MESSAGE ---------- */

  socket.on("chat-message", (msg) => {
    console.log("Chat room:", `booking-${msg.rideId}`);

    io.to(`booking-${msg.rideId}`).emit("chat-message", msg);
  });

  /* ---------- LIVE LOCATION ---------- */

  socket.on("update-location", async ({ latitude, longitude }) => {
    try {
      if (!socket.userId) return;

      await User.findByIdAndUpdate(socket.userId, {
        location: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  /* ---------- DISCONNECT ---------- */

  socket.on("disconnect", async () => {
    try {
      console.log("Disconnected:", socket.id);

      if (!socket.userId) return;

      await User.findByIdAndUpdate(socket.userId, {
        isOnline: false,
        socketId: null,
      });
    } catch (error) {
      console.log(error);
    }
  });
});

/* ---------------- START SERVER ---------------- */

server.listen(port, () => {
  console.log("Server started at", port);
});