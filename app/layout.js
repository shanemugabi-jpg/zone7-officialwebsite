import "./globals.css";

export const metadata = {
  title: "Zone 7 | Food, Drinks & Events",
  description: "Zone 7 official website for food, drinks, events and entertainment in Mbuya, Kampala.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
