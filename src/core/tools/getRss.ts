import { newsflashFeed, articlesFeed } from "./request";
import { FastMCP } from "fastmcp";

export function registerRss(server: FastMCP) {
  server.addTool({
    name: "getNews",
    description:
      "Get the latest news flash about crypto (usually the up-to-date events). It can be used to query the latest happened event in crypto community. (e.g. the famous CEX launched a new activity, a trending project emerges in market, etc.)",
    execute: async () => {
      return await newsflashFeed();
    },
  });

  server.addTool({
    name: "getArticles",
    description:
      "Get the latest crypto-related articles. Articles are always about the deep research of an crypto project / a company. Besides this, they can also be about the analysis of the crypto market and etc.",
    execute: async () => {
      return await articlesFeed();
    },
  });
}
