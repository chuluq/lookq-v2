import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full min-h-full bg-white dark:bg-dark">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
