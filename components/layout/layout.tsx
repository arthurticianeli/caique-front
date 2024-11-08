import { ReactNode } from "react";
import MainNavigation from "./main-navigation";

interface LayoutProps {
  readonly children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
}

export default Layout;
