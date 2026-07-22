import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Australia 2026｜墨爾本 × 雪梨 16 天旅行指南",
  description: "2026 澳洲 16 天旅行隨身指南：完整行程、交通、住宿、咖啡與餐廳口袋名單。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
