import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
function subscribeToTimer(cb) {
  console.log('inside client subscribe timer func')
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}
const subscribeToMessages = (cb) => {
  console.log('inside msg subscribe')
  socket.on('message', messages => cb(null, messages));
  socket.emit('subscribeToMessages', 1000)
}
export { subscribeToTimer, subscribeToMessages };