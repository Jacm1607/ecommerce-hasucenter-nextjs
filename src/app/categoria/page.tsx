"use client"
import Category from "./views/Category";
import LayoutProject from "../layout/layoutProyect";
import TitleSectionBorder from "@/components/TitleSectionBorder";
import Feature from "../../components/Featured";

export default function Home() {
  return (
    <>
      <LayoutProject>
        <TitleSectionBorder title="Categoria" />
        <Category />
        <Feature />
      </LayoutProject>
    </>
  )
}
