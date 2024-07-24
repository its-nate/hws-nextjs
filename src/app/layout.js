import "./globals.css";

export const metadata = {
  title: "Holistic Web Solutions",
  description: "Creating comprehensive web solutions uniquely designed for you and your brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
