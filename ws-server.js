const http = require("http");
const server = http.createServer();
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("joinRoom", (room) => {
    console.log("joinRoom: ", room);
    socket.join(room);
  });

  socket.on("fancy-message-name", (data) => {
    const { room, message } = data;
    console.log("fancy-message-name: ", data);
    socket.to(room).emit("newMessage", message);
  });
});

server.listen(8001, () => {
  console.log("WebSocket server is running on port 8001");
});
