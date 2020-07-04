import {io} from '../../index'
import { connect } from 'mongoose'
export const conncetSocket = ()=>{
var users = [];
io.sockets.on('connection', function (socket) {

  // start listening for coords
  socket.on('newUser',(data)=>{
    socket.nickname = data.userId;
    users[socket.nickname] = socket;
  })
  socket.on('send:coords', function (data) {
    //console.log(data)
  	// broadcast your coordinates to everyone except you
  	socket.broadcast.emit('load:coords', data);
  });
});
io.sockets.on('disconnect',()=>{
  delete users[socket.nickname];
})
}