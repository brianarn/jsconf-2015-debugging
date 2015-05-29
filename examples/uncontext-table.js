// Run this example in a console at
// http://www.uncontext.com/
// or it won't work :)

(function () {
  var messages = [];

  var socket = new WebSocket('ws://literature.uncontext.com:80');
  socket.onmessage = function (message) {
    var message = JSON.parse(message.data);
    console.log('Message received: ', message);
    messages.push(message);

    if (messages.length >= 10) {
      console.table(messages);
      socket.onmessage = null;
    }
  };
})();
