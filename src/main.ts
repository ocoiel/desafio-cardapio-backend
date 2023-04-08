import fastify from "fastify";

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
