import "@/app/globals.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
