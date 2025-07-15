const http = require('http').createServer()
const io = require('socket.io')(http,{
    cors:{origin:'*'}
})

io.on('connection',socket=>{
    console.log(`Client connected ${socket.id}`)
    socket.on('message',(msg)=>{
        socket.broadcast.emit("message",`${socket.id} : ${msg}`)
    })
    socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  })
})



http.listen(8000,()=>console.log("Server running on port 8000"))