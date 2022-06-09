import { allDocs } from "../.contentlayer/generated";

export function useDoc(url?: string) {
  const doc = allDocs.find((doc) => doc.url === url);
  if (!doc) throw new Error(`No doc found for ${url}`);
  return doc;
}
