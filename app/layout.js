import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ignacio Gea</title>
        <meta name="description" content="Ignacio's personal website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="py-8 px-12 bg-gray-300 min-h-screen flex flex-col">
        <header className="mb-12">
          <Navigation />
        </header>
        <main className="flex justify-center mb-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
