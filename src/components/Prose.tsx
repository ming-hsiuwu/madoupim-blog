import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-lg max-w-prose prose-headings:text-ink prose-headings:font-display prose-p:text-ink prose-strong:text-pomelo-800 prose-code:text-pomelo-700 prose-code:before:content-none prose-code:after:content-none prose-code:rounded prose-code:bg-pomelo-50 prose-code:px-1.5 prose-code:py-0.5 prose-a:text-pomelo-700">
      {children}
    </div>
  );
}
