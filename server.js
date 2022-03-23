const express = require('express')
const { Socket } = require('socket.io')

const app =express()

app.set("view engine", "ejs")

app.use(express.static('public'))
app.use(express.static())
app.get('/',(req,res)=> {
    res.render('index')
    })

const server =app.listen(4000, () => {
    console.log("server is listening on port 4000")

})
// includes socket.io

const io = require('socket.io')(server)

io.on('connection',(Socket) =>{
    console.log("a new client has been connected")
    Socket.username="sanjana"
    Socket.on('new_message',(data)=>{
        io.Socket.emit('new_message',{
            message:data.message,})
            username:Socket.username

    });
    Socket.on('change_username',(data) => {
        Socket.username = data.username;
    })
});
Socket.on('typing',(data) =>{
    Socket.broadcast.emit('typing')
})
