// // import express from "express"
// // import http from "http"
// // import dotenv from "dotenv"
// // import { Server } from "socket.io"
// // import axios from "axios"

// // dotenv.config()

// // import mongoose from "mongoose"
// // import User from "./models/user.models.js"

// // await mongoose.connect(process.env.MONGODB_URL)
// // const app=express()
// // app.use(express.json())
// // const server=http.createServer(app)
// // const port=process.env.PORT || 5000

// // const io=new Server(server,{
// //     cors:{
// //         origin:process.env.NEXT_BASE_URL
// //     }
// // })

// // app.get("/", (req, res) => {
// //   res.send("Server is running smoothly!");
// // });


// // app.post("/emit", async (req, res) => {
// //   const { userId, event, data } = req.body;

// //   try {
// //     const user = await User.findById(userId);

// //     if (user?.socketId) {
// //       io.to(user.socketId).emit(event, data);
// //     }

// //     res.json({ success: true });
// //   } catch (error) {
// //     res.status(500).json({ success: false });
// //   }
// // });

// // io.on("connection", (socket) => {

// //   socket.on("identity", async (userId) => {

// //     socket.userId = userId

// //     await User.findByIdAndUpdate(userId, {
// //       socketId: socket.id,
// //       isOnline: true
// //     })

// //   })

// // // server.js — sab jagah ek hi format rakho

// // socket.on("join-booking", (bookingId) => {
// //   console.log("joining room:", `booking-${bookingId}`);
// //   socket.join(`booking-${bookingId}`);  // ← prefix add karo
// // });

// // socket.on("driver-location-update", (data) => {
// //   io.to(`booking-${data.bookingId}`)   // ✅ already sahi
// //     .emit("driver-location", {
// //       latitude: data.latitude,
// //       longitude: data.longitude,
// //       status: "arriving"
// //     });
// // });

// // socket.on("chat-message", (msg) => {
// //   console.log("chat to room:", `booking-${msg.rideId}`);
// //   io.to(`booking-${msg.rideId}`).emit("chat-message", msg);  // ← prefix add karo
// // });

// //   socket.on("update-location", async ({ latitude, longitude }) => {

// //     if (!socket.userId) return

// //     await User.findByIdAndUpdate(socket.userId, {
// //       location: {
// //         type: "Point",
// //         coordinates: [longitude, latitude]
// //       }
// //     })

// //   })
 

// //   socket.on("disconnect", async () => {

// //     if (!socket.userId) return

// //     await User.findByIdAndUpdate(socket.userId, {
// //       isOnline: false,
// //       socketId: null
// //     })

// //   })

// // })






// // server.listen(port,()=>{
// //     console.log("server started at",port)
// // })


// import express from "express";
// import http from "http";
// import dotenv from "dotenv";
// import { Server } from "socket.io";
// import mongoose from "mongoose";

// dotenv.config();

// import User from "./models/user.models.js";

// await mongoose.connect(process.env.MONGODB_URL);

// const app = express();

// app.use(express.json());

// const server = http.createServer(app);

// const port = process.env.PORT || 5000;

// /* ---------------- SOCKET IO ---------------- */

// const io = new Server(server, {
//   cors: {
//     origin: [
     
//       "https://sarthi-2-o-5nho.vercel.app",
//     ],
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// /* ---------------- TEST ROUTE ---------------- */

// app.get("/", (req, res) => {
//   res.send("Server is running smoothly!");
// });

// /* ---------------- EMIT EVENT API ---------------- */

// app.post("/emit", async (req, res) => {
//   const { userId, event, data } = req.body;

//   try {
//     const user = await User.findById(userId);

//     if (user?.socketId) {
//       io.to(user.socketId).emit(event, data);
//     }

//     res.json({ success: true });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: "Emit failed",
//     });
//   }
// });

// /* ---------------- SOCKET CONNECTION ---------------- */

// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   /* ---------- USER IDENTITY ---------- */

//   socket.on("identity", async (userId) => {
//     try {
//       socket.userId = userId;

//       await User.findByIdAndUpdate(userId, {
//         socketId: socket.id,
//         isOnline: true,
//       });

//       console.log("Identity registered:", userId);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   /* ---------- JOIN BOOKING ROOM ---------- */

//   socket.on("join-booking", (bookingId) => {
//     console.log("Joining room:", `booking-${bookingId}`);

//     socket.join(`booking-${bookingId}`);
//   });

//   /* ---------- DRIVER LOCATION UPDATE ---------- */

//   socket.on("driver-location-update", (data) => {
//     io.to(`booking-${data.bookingId}`).emit("driver-location", {
//       latitude: data.latitude,
//       longitude: data.longitude,
//       status: "arriving",
//     });
//   });

//   /* ---------- CHAT MESSAGE ---------- */

//   socket.on("chat-message", (msg) => {
//     console.log("Chat room:", `booking-${msg.rideId}`);

//     io.to(`booking-${msg.rideId}`).emit("chat-message", msg);
//   });

//   /* ---------- LIVE LOCATION ---------- */

//   socket.on("update-location", async ({ latitude, longitude }) => {
//     try {
//       if (!socket.userId) return;

//       await User.findByIdAndUpdate(socket.userId, {
//         location: {
//           type: "Point",
//           coordinates: [longitude, latitude],
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   /* ---------- DISCONNECT ---------- */

//   socket.on("disconnect", async () => {
//     try {
//       console.log("Disconnected:", socket.id);

//       if (!socket.userId) return;

//       await User.findByIdAndUpdate(socket.userId, {
//         isOnline: false,
//         socketId: null,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   });
// });

// /* ---------------- START SERVER ---------------- */

// server.listen(port, () => {
//   console.log("Server started at", port);
// });


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
      "https://sarthi-2-o-5nho.vercel.app",
      "http://localhost:3000", // For local development
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

/* ---------------- TEST ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});

/* ---------------- DEBUG ROUTE ---------------- */

app.get("/debug/user/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("socketId isOnline lastConnected lastDisconnected");
    res.json({
      success: true,
      user: {
        socketId: user?.socketId,
        isOnline: user?.isOnline,
        lastConnected: user?.lastConnected,
        lastDisconnected: user?.lastDisconnected
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ---------------- EMIT EVENT API ---------------- */

app.post("/emit", async (req, res) => {
  const { userId, event, data } = req.body;

  try {
    const user = await User.findById(userId);

    if (user?.socketId) {
      io.to(user.socketId).emit(event, data);
      res.json({ success: true, message: "Event emitted" });
    } else {
      res.json({ success: false, message: "User socket not found" });
    }
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
  console.log("📡 User connected:", socket.id);

  /* ---------- USER IDENTITY ---------- */
  socket.on("identity", async (userId) => {
    try {
      if (!userId) {
        console.error("❌ No userId provided");
        socket.emit("identity-error", { message: "No userId provided" });
        return;
      }

      console.log(`🆔 Identity received for user: ${userId}`);

      // Store userId in socket object
      socket.userId = userId;

      // Update user in database with proper options
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          socketId: socket.id,
          isOnline: true,
          lastConnected: new Date()
        },
        {
          new: true,           // Returns updated document
          runValidators: true,  // Run schema validators
        }
      );

      if (!updatedUser) {
        console.error(`❌ User not found with ID: ${userId}`);
        socket.emit("identity-error", { message: "User not found" });
        return;
      }

      console.log(`✅ Identity registered - User: ${userId}, Socket: ${socket.id}`);
      console.log(`📦 SocketId saved in DB: ${updatedUser.socketId}`);
      
      // Send confirmation back to client
      socket.emit("identity-confirmed", { 
        success: true, 
        socketId: socket.id,
        userId: userId 
      });

    } catch (error) {
      console.error("❌ Identity update error:", error);
      socket.emit("identity-error", { message: "Failed to register identity" });
    }
  });

  /* ---------- JOIN BOOKING ROOM ---------- */
  socket.on("join-booking", (bookingId) => {
    if (!bookingId) {
      console.error("❌ No bookingId provided");
      return;
    }
    
    const room = `booking-${bookingId}`;
    socket.join(room);
    console.log(`✅ Socket ${socket.id} joined room: ${room}`);
    
    // Confirm to client
    socket.emit("joined-booking", { bookingId, room });
  });

  /* ---------- DRIVER LOCATION UPDATE ---------- */
  socket.on("driver-location-update", (data) => {
    if (!data?.bookingId || !data?.latitude || !data?.longitude) {
      console.error("❌ Invalid location update data:", data);
      return;
    }

    const room = `booking-${data.bookingId}`;
    console.log(`📍 Location update for room: ${room}`, { latitude: data.latitude, longitude: data.longitude });
    
    io.to(room).emit("driver-location", {
      latitude: data.latitude,
      longitude: data.longitude,
      status: data.status || "arriving",
      timestamp: new Date().toISOString()
    });
  });

  /* ---------- CHAT MESSAGE ---------- */
  socket.on("chat-message", (msg) => {
    if (!msg?.rideId || !msg?.message) {
      console.error("❌ Invalid chat message:", msg);
      return;
    }

    const room = `booking-${msg.rideId}`;
    console.log(`💬 Chat message for room: ${room}`);
    
    io.to(room).emit("chat-message", {
      ...msg,
      timestamp: new Date().toISOString()
    });
  });

  /* ---------- LIVE LOCATION ---------- */
  socket.on("update-location", async ({ latitude, longitude }) => {
    try {
      if (!socket.userId) {
        console.error("❌ No userId for location update");
        return;
      }

      if (!latitude || !longitude) {
        console.error("❌ Invalid coordinates", { latitude, longitude });
        return;
      }

      const updatedUser = await User.findByIdAndUpdate(
        socket.userId,
        {
          location: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          lastLocationUpdate: new Date()
        },
        {
          new: true,
          runValidators: true
        }
      );

      if (!updatedUser) {
        console.error(`❌ User not found for location update: ${socket.userId}`);
      } else {
        console.log(`📍 Location updated for user ${socket.userId}`);
      }

    } catch (error) {
      console.error("❌ Location update error:", error);
    }
  });

  /* ---------- DISCONNECT ---------- */
  socket.on("disconnect", async () => {
    try {
      console.log(`🔌 Disconnected: ${socket.id}`);

      if (!socket.userId) {
        console.log("⚠️ No userId associated with disconnected socket");
        return;
      }

      console.log(`📝 Marking user ${socket.userId} as offline`);

      const updatedUser = await User.findByIdAndUpdate(
        socket.userId,
        {
          isOnline: false,
          socketId: null,
          lastDisconnected: new Date()
        },
        {
          new: true,
          runValidators: true
        }
      );

      if (!updatedUser) {
        console.error(`❌ User not found on disconnect: ${socket.userId}`);
      } else {
        console.log(`✅ User ${socket.userId} marked offline`);
      }

    } catch (error) {
      console.error("❌ Disconnect update error:", error);
    }
  });
});

/* ---------------- START SERVER ---------------- */

server.listen(port, () => {
  console.log(`🚀 Server started at port ${port}`);
  console.log(`📡 Socket.IO server ready`);
  console.log(`🔗 MongoDB connected`);
});