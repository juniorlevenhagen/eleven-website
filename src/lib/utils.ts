import React from "react";

export function cn(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export function parseMarkdown(text: string): React.ReactNode[] {
  if (!text) return [];

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const markdownRegex =
    /(!\[([^\]]*)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let match;

  while ((match = markdownRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[0].startsWith("![")) {
      const altText = match[2] || "";
      const imageUrl = match[3] || "";

      if (imageUrl) {
        parts.push(
          React.createElement(
            "div",
            { key: key++, className: "my-8 flex justify-center" },
            React.createElement(
              "div",
              { className: "relative w-full max-w-4xl" },
              React.createElement("img", {
                src: imageUrl,
                alt: altText,
                className: "max-w-full h-auto rounded-lg shadow-lg",
                loading: "lazy",
                decoding: "async",
              }),
            ),
          ),
        );
      }
    } else if (match[0].startsWith("**")) {
      parts.push(
        React.createElement(
          "strong",
          { key: key++, className: "font-semibold" },
          match[4],
        ),
      );
    } else if (match[0].startsWith("*")) {
      parts.push(
        React.createElement("em", { key: key++, className: "italic" }, match[5]),
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length === 0 ? [text] : parts;
}
