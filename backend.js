const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const io = require("socket.io-client");

const app = express();
app.use(cors());

const server = http.createServer(app);

const serverUrl = "http://localhost:8001";
const socket = io(serverUrl);

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

app.use(bodyParser.json());

app.post("/ws-integration", (req, res) => {
  const { room, message } = req.body;

  console.log("room", room);
  console.log("message", message);
  console.log("entrei");

  socket.emit("fancy-message-name", { room, message });

  res.status(200).send("Message forwarded to WebSocket server");
});

server.listen(8000, () => {
  console.log("Backend server is running on port 8000");
});
