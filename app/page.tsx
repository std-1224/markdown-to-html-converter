"use client"
import { useState } from "react";
import { marked } from "marked";

export default function Home() {
  const [markdown, setMarkdown] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  }

  const renderedHtml = marked(markdown);

  return (
    <div className="flex flex-col md:flex-row h-screen p-8 bg-gray-100">
      <div className="flex-1 mb-4 md:mr-4">
        <h1 className="text-2xl font-bold mb-4">Markdown Editor</h1>
        <textarea
          className="w-full h-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          value={markdown}
          onChange={handleInputChange}
          placeholder="Type your Markdown here..."
        />
      </div>
      <div className="flex-1 mb-4">
        <h1 className="text-2xl font-bold mb-4">HTML Preview</h1>
        <div
          className="markdown-preview w-full h-full p-4 border rounded-lg shadow-sm bg-white overflow-auto"
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
      </div>
    </div>
  );
}
