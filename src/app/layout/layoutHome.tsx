import Footer from "@/components/Footer";
import HeaderHome from "../../components/HeaderHome";

export default function LayoutHome({children}: any) {
  return (
    <>
      <HeaderHome/>
        {children}
      <Footer/>
    </>
  )
}
