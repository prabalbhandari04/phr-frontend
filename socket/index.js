const io = require('socket.io')(8900 , {
    cors : {
        origin : '*'
    },
  });

// users empty array
let users = [];

// push users into array when user connects using user id and socket id 
const addUser = (userId,socketId) => {
    !users.some((user)=> user.userId === userId) &&
    users.push({userId,socketId});
};

const removeUser = (userId) => {
    users = users.filter((user)=> user.userId !== userId);
};

 io.on('connection', (socket) => {
    console.log('a user connected');
     socket.on("addUser",(userId)=>{
        addUser(userId,socket.id);
        io.emit("getUsers",users)
    });
    socket.on("disconnect",()=>{
      console.log("user disconnected");
        removeUser(socket.id);
        io.emit("getUsers",users)
    } )
  });