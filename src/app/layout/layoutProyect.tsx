import Footer from "@/components/Footer";
import Header from "../../components/Header";

export default function LayoutProject({ children }: any) {
  return (
    <>
      <Header />
      <div className="md:container md:mx-auto">
        {children}
      </div>
      <Footer />
    </>
  )
}
