import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
    
    <main className="h-full w-full">

        {children}
    </main>
    <Footer />

   
    </>
  );
}
