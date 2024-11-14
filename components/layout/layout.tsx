import { ReactNode } from "react";
import Footer from "./footer";
import MainNavigation from "./main-navigation";

interface LayoutProps {
  readonly children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
