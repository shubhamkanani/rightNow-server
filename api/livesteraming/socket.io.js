import {io} from '../../index'
import { connect } from 'mongoose'
export const conncetSocket = ()=>{
var Liveusers = [];
io.on('connection', function (socket) {

  // start listening for coords
  socket.on('newUser',(data)=>{
    socket.nickname = data.userId;
    Liveusers[socket.nickname] = {socket:socket};
  })
  socket.on('send:coords', (data) => {
    console.log(data)
    socket.nickname = data.userId;
    Liveusers[socket.nickname] = {socket:socket,latitude:data.lat,longitude:ldata.lon};
  	// broadcast your coordinates to everyone except you
  	socket.broadcast.emit('load:coords', Liveusers);
  });
    socket.on('request', (data) => {
        //push notification to other users
    })
    socket.on('accept', (data)=>{
      //create stream
      //start stream
      //data:{rtmp usrl, HSL, userID, sendId}
      socket.emit('send:stream',data)
    })
});
io.sockets.on('disconnect',()=>{
  delete users[socket.nickname];
})
}