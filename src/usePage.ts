import { allPages } from "../.contentlayer/generated";

export function usePage(url?: string) {
  const page = allPages.find((page) => page.url === url);
  if (!page) throw new Error(`No page found for ${url}`);
  return page;
}
