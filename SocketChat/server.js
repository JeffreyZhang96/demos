const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io").listen(server);

users = [];
connections = [];

server.listen(process.env.PROT || 3000);
console.log("Server running on port 3000");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", function(socket) {
  connections.push(socket);
  console.log("User connected: %s online", connections.length);

  socket.on("disconnect", function(data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log("User disconnected: %s online", connections.length);
  });

  socket.on("send message", function(data) {
    io.sockets.emit("new message", { msg: data });
  });
});
