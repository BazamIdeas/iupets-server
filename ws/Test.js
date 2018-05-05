module.exports = (socket) => {
    socket.on('test', msg => {
        socket.emit('test', msg);
    });
}
