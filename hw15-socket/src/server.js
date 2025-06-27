import express from 'express';
import { createServer } from "node:http";
import { Server } from 'socket.io';


const startServer = () => {
  const app = express();
  const httpServer = createServer(app);
  const wsServer = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  });

  app.use(express.static("public")); 

  wsServer.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('chat message', (msg) => {
      console.log(`message: ${msg}`);
      socket.emit('message received', `Server confirms: ${msg}`);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

  const port = process.env.PORT || 3000;

  httpServer.listen(port, () => {
    console.log(`Server running on ${port} port`);
  });
};

export default startServer;
