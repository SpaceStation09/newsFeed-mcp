import { XMLParser } from "fast-xml-parser";
import { processRssDescription } from "./utils";
import type { TextContent } from "fastmcp";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

async function getNewsFlash(): Promise<{ item: RssItem[] } | null> {
  const rssHubUri = `https://rsshub.app/theblockbeats/newsflash`;
  try {
    const response = await fetch(rssHubUri);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.statusText}`);
    }
    const xmlText = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const json = parser.parse(xmlText);
    let items = json?.rss?.channel?.item;
    items = items.map((item: any) => {
      const description = processRssDescription(item.description);
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description,
      };
    });
    return {
      item: items,
    };
  } catch (error) {
    console.error("Error fetching RSS:", error);
    return null;
  }
}

function formatFlash(rss: RssItem[]) {
  const result = rss.map((item) => {
    item.description = item.description.replace(/\n/g, "");
    return item;
  });
  const formattedRss = rss.map((item: RssItem) => {
    const itemText = [
      `title: ${item.title}`,
      `link: ${item.link}`,
      `pubDate: ${item.pubDate}`,
      `description: ${item.description}`,
      "--------------------------------",
    ].join("\n");
    return itemText;
  });
  const rssText = `Recent News Flash: \n\n${formattedRss.join("\n")}`;
  return rssText;
}

export async function rssFeed(feedType: string): Promise<TextContent> {
  if (feedType === "newsflash") {
    const result = await getNewsFlash();
    if (!result) {
      return {
        type: "text",
        text: "Failed to get news flash",
      };
    }
    const rssText = formatFlash(result!.item);
    return {
      type: "text",
      text: rssText,
    };
  }
  return {
    type: "text",
    text: "Invalid feed type",
  };
}
