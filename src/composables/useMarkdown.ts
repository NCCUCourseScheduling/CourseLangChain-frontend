import MarkdownIt from "markdown-it";

export const useMarkdown = () => {
  const md = MarkdownIt("commonmark");

  const render = (content: string) => {
    return md.render(content);
  };

  return {
    render,
  };
};
