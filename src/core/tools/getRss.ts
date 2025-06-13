import { rssFeed } from "./request";
import { FastMCP } from "fastmcp";
import { z } from "zod";

export function registerRss(server: FastMCP) {
  server.addTool({
    name: "getNews",
    description: "Get the latest news or articles from theblockbeats",
    parameters: z.object({
      feedType: z
        .string()
        .describe("The type of feed to get, normally newsflash OR article"),
    }),
    execute: async (params) => {
      return await rssFeed(params.feedType);
    },
  });
}
