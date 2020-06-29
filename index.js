import http from "http"

import app from "./server"


let server = null;

if (process.env.NODE_ENV === "development") {
    server = http.createServer(app)
  } else {
    console.log("This is the production environment")
    server = app
  }
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {

  // start listening for coords
  socket.on('send:coords', function (data) {
    
  	// broadcast your coordinates to everyone except you
  	socket.broadcast.emit('load:coords', data);
  });
});
const PORT = process.env.PORT || 8000
server.listen(PORT, async () => {
  try {
    console.log(`Server listening on port ${PORT}`)
  } catch (err) {
    console.log("Server init error", err)
  }
})