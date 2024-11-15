import "./globals.css";

export const metadata = {
  title: "Architectus",
  description: "Architectus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
