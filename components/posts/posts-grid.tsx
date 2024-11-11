import { ReactNode } from "react";

interface PostsGridProps {
  readonly children: ReactNode;
  readonly horizontal?: boolean;
}

function PostsGrid({ children, horizontal = true }: PostsGridProps) {
  return (
    <div
      className="container grid-content"
      style={{
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        flexWrap: horizontal ? "wrap" : "nowrap",
      }}
    >
      {children}
    </div>
  );
}

export default PostsGrid;
