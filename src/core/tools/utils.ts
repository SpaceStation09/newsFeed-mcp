import { htmlToText } from "html-to-text";

/**
 * convert html to text
 * @param html html string
 * @returns text string
 */
export function convertHtmlToText(html: string): string {
  return htmlToText(html, {
    wordwrap: false,
    preserveNewlines: true,
    selectors: [
      { selector: "p", format: "paragraph" },
      { selector: "br", format: "lineBreak" },
      { selector: "a", options: { hideLinkHrefIfSameAsText: true } },
    ],
  }).trim();
}

/**
 * process rss description
 * @param description html string
 * @returns text string
 */
export function processRssDescription(description: string): string {
  return convertHtmlToText(description);
}
