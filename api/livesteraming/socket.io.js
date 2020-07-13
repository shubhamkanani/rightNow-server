import {io} from '../../index'
import { connect } from 'mongoose'
import FCM from 'fcm-node';
import serverKey from '../../config/test-cb583-firebase-adminsdk-7y92g-312fa47d88.json' 
import {FirebaseNotification} from '../realTimeAndNotification/notification.modal'
export const conncetSocket = ()=>{
var fcm = new FCM(serverKey)
var Liveusers = [];
io.on('connection', function (socket) {

  // start listening for coords
  // socket.on('newUser',(data)=>{
  //   //console.log("serverKey:",serverKey)
  //   socket.nickname = data.userId;
  //   Liveusers[socket.nickname] = {socket:socket};
  //   console.log(Liveusers.socket.nickname,'')
  // })
  socket.on('send:coords', (data) => {
    console.log("send:coords data perameter :",data)
    socket.nickname = data.userId;
    Liveusers[socket.nickname] = {socket:socket,latitude:data.lat,longitude:data.lon};
    console.log("Liveusers List",Liveusers);
  	//socket.broadcast.emit('load:coords', Liveusers);
  });
  //send a live stream request
    socket.on('request', (data) => {
      data.map( async item => {
        if(item!=socket.nickname){
          const notiToken = await FirebaseNotification.find({userId:item})
          var message = { 
            to: notiToken.mobileToken, 
            notification: {
                title: 'Title of your push notification', 
                body: 'Body of your push notification' 
            },
            data: {  
                request_userId:socket.nickname
            }
          }
          fcm.send(message, function(err, response){
            if (err) {
                console.log("Something has gone wrong!")
            } else {
                console.log("Successfully sent with response: ", response)
            }
        })
        }
      })
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