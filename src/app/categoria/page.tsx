"use client"
import LayoutProject from "../layout/layoutProyect";
import TitleSectionBorder from "@/components/TitleSectionBorder";
import Feature from "../../components/Featured";
import ProductNew from "../views/ProductNew";
import Category from "./views/Category";


export default function CategoryHome() {

  return (
    <>
      <LayoutProject>
        <TitleSectionBorder title="Subcategorias" />
        <div>
            <Category />
        </div>
        <Feature />
      </LayoutProject>
    </>
  )
}
