module.exports = (io,socket) => {
    socket.on('subscribirse', function(room) {
        console.log('uniendose a ' + room + ', socket: ' + socket.id);
        socket.join(room);
    });
    
    socket.on('i', function(data) {
        console.log('enviando a ' + data.room + ', socket: ' + socket.id);
        io.sockets.in(data.room).emit('o', {
            message: data.message
        });
    });
}
