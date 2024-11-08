import type { Metadata } from "next";
import Layout from "../components/layout/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caique Marquez Blog",
  description: "Notícias e novidades de Gramado - Rio Grande do Sul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
