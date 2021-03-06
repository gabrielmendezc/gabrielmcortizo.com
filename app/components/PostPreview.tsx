import Markdown from "react-markdown";
import markdownBreaks from "remark-breaks";
import markdownGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

interface PostPreviewProps {
  markdown: string;
}

function PostPreview({ markdown }: PostPreviewProps) {
  return (
    <div className="md:flex-1 md:self-start">
      <span className="font-medium text-lg pb-2 text-gray-900 block border-b border-gray-200">
        Preview
      </span>
      <div className="break-all prose prose-pink max-w-full mt-2 overflow-auto">
        <Markdown
          plugins={[markdownGfm, markdownBreaks]}
          renderers={{
            code: CodeBlock,
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
}

export default PostPreview;
