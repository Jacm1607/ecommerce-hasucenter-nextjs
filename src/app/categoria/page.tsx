"use client"
import Category from "./views/Category";
import LayoutProject from "../layout/layoutProyect";
import TitleSectionBorder from "@/components/TitleSectionBorder";

export default function Home() {
  return (
    <>
      <LayoutProject>
        <TitleSectionBorder title="Categoria" />
        <Category />
      </LayoutProject>
    </>
  )
}
