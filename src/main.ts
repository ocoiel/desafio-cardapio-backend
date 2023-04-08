import fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";

const server = fastify({
  logger: true,
});

server.register(jwt, {
  secret: "temp",
});

server.register(cors, {
  origin: "*",
});

server.listen({ port: 3333 }, function (err) {
  console.log("Server listening on port 3333 🚀");
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
