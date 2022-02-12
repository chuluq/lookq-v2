import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full min-h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
