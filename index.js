import http from "http"
import SocketIO from 'socket.io'
import app from "./server"
import {conncetSocket} from './api/livesteraming/socket.io'
// const { Server } = require('ws');
let server = null;

if (process.env.NODE_ENV === "development") {
    server = http.createServer(app)
  } else {
    console.log("This is the production environment")
    server = http.createServer(app)
  }
export var io = SocketIO(server)
// const wss = new Server({ server });
conncetSocket();
// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client disconnected'));
// });
const PORT = process.env.PORT || 8000
server.listen(PORT, async () => {
  try {
    console.log(`Server listening on port ${PORT}`)
  } catch (err) {
    console.log("Server init error", err)
  }
})
