import { FastMCP } from "fastmcp";
import { registerTools } from "../core/tools";

async function startServer() {
  try {
    const server = new FastMCP({
      name: "weather-server",
      version: "1.0.0",
    });

    registerTools(server);

    console.log("Server ready for connections");

    return server;
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

export default startServer;
