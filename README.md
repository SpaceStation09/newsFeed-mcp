# News feed mcp (WIP)

[![smithery badge](https://smithery.ai/badge/@SpaceStation09/newsfeed-mcp)](https://smithery.ai/server/@SpaceStation09/newsfeed-mcp)

## Testing Server

You could use [`mcp-cli`](https://github.com/wong2/mcp-cli) for testing and debugging your MCP server in the terminal.

```bash
npx fastmcp dev src/index.ts
```

## Use in Cursor

Go to the `cursor setting - MCP Tools - New MCP Server`, and add your mcp in `mcp.json`

```json
{
  "mcpServers": {
    "news": {
      "command": "npx",
      "args": ["tsx","PATH/TO/PROJECT/src/index.ts"]
    }
  }
}
```

## Installing via Smithery

To install News Feed Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@SpaceStation09/newsfeed-mcp):

```bash
npx -y @smithery/cli install @SpaceStation09/newsfeed-mcp --client claude
```

## TODO

- [x] change rss feed source (for stability and up-to-date news)
- [x] add article support
- [ ] support more news platform
