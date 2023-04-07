import fastify from "fastify";
// import cors from 'fastify-cors';
// import jwt from '@fastify-jwt';
// import swagger from 'fastify-swagger';
// import routes from "./interface/routes";

const server = fastify({
  logger: true,
});

server.listen({ port: 3333 }, function (err) {
  console.log("Server listening on port 3333 🚀");
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
