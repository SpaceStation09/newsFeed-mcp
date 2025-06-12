import startServer from "./server";

const PORT = parseInt(process.env.PORT || "3001", 10);

async function main() {
  try {
    const server = await startServer();

    server.start({
      transportType: "httpStream",
      httpStream: {
        port: PORT,
      },
    });

    console.error(`MCP Server running at http://localhost:${PORT}`);
    console.error(`SSE endpoint: http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

// Handle process termination gracefully
process.on("SIGINT", () => {
  console.error("Shutting down server...");
  process.exit(0);
});

// Start the server
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
