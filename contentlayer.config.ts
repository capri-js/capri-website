import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The page title",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) =>
        `/${page._raw.flattenedPath}`.replace("index", "").replace(/\d+-/g, ""),
    },
    order: {
      type: "number",
      resolve: (page) => {
        const isIndex = page._raw.sourceFileName.startsWith("index.");
        return getOrder(
          isIndex ? page._raw.sourceFileDir : page._raw.sourceFileName
        );
      },
    },
  },
}));

function getOrder(name: string) {
  const [, order] = /\b(\d+)/.exec(name) ?? [];
  return order ? parseInt(order) : 0;
}

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      highlight,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeExternalLinks,
    ],
  },
});
