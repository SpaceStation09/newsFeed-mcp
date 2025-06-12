import { FastMCP } from "fastmcp";
import * as tools from "./tools/index";

export function registerTools(server: FastMCP) {
  tools.registerRss(server);
}
