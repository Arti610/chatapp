// import { app } from "../../app.js";

// export const userEvent = (userSocketMap) => {
//   try {
//     const userId = socket.handshake.query.userId;
//     if (userId != "undefined") userSocketMap[userId] = socket.id;

//     // io.emit() is used to send events to all the connected clients
//     app.Socket.emit("getOnlineUsers", Object.keys(userSocketMap));

//     // socket.on() is used to listen to the events. can be used both on client and server side
//     socket.on("disconnect", () => {
//       console.log("user disconnected", socket.id);
//       delete userSocketMap[userId];
//       app.Socket.emit("getOnlineUsers", Object.keys(userSocketMap));
//     });
//   } catch (error) {}
// };

// const userSocketMap = {}

// export const getReceiverSocketId = (receiverId) => {
// 	return userSocketMap[receiverId];
// };

// export const testEvent = (req) => {
//   return app.Socket.emit("getOnlineUsers", { userId: req.user._id });
// };
