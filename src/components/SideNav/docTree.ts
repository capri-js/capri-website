import { allDocs, Doc } from "../../../.contentlayer/generated";

export type TreeNode = {
  doc: Doc;
  childNodes?: TreeNode[];
};

export function docTree(parentUrl = "/docs/"): TreeNode[] {
  const level = parentUrl.split("/").length;
  const nodes = allDocs
    .filter(
      (doc) =>
        doc.url.split("/").length === level &&
        doc.url.startsWith(parentUrl) &&
        doc.url != parentUrl
    )
    .sort((a, b) => a.order - b.order)
    .map((doc) => ({
      doc,
      childNodes: docTree(doc.url + "/"),
    }));

  return nodes;
}

export const rootNodes = docTree();
