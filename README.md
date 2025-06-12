# News feed mcp (WIP)

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
    "weather": {
      "command": "npx",
      "args": ["tsx","PATH/TO/PROJECT/src/index.ts"]
    }
  }
}
```

## TODO

- [ ] change rss feed source (for stability and up-to-date news)
- [ ] add article support
- [ ] support more news platform
