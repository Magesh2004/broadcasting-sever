const { io } = require("socket.io-client");
const readline = require('readline');
const { stdin, stdout } = require("process");

const socket = io('http://localhost:8000')

socket.on('connect',()=>{
    console.log(`Connected to server ${socket.id}`)
    const r1 = readline.createInterface({
    input:stdin,
    output:stdout
    });
    r1.on("line",(line)=>{
        socket.emit("message",line)
    });
});
socket.on('message',(msg)=>{
    console.log(msg)
})
socket.on('disconnect',()=>{
    console.log(`Client ${socket.id} is disconnected`)
})