import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("message", (user, message) => {
  console.log(`User: ${user} - Message: ${message}`);
});


const sendMessage = (user, message) => {
  emitter.emit("message", user, message);
};


sendMessage("Alissa", "Hi everyone!");
sendMessage("Roman", "Hi, are you done with the homework?");
sendMessage("Alex", "Yeah, I'm done. What about you guys?");