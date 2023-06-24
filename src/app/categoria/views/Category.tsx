import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }: any) => {
   return (
      <>
         <div className="md:container md:mx-auto p-4">
            <div className="w-full gap-4 flex flex-wrap">
               <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href={'/categoria'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
            </div>
         </div>
      </>
   );
};

const HoverText = () => {
   return (
      <div className="md:container md:mx-auto p-4">
        <div className="w-full gap-4 flex flex-wrap">
               <Link href={'/categoria'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
         </div>
      </div>
   );
 };

const Category = () => {
   const list = [
      {key: 1,},
      {key: 2,},
      {key: 3,},
      {key: 4,},
      {key: 5,},
      {key: 6,},
   ]
   const [isHovering, setIsHovering] = useState(false);
   const handleMouseOver = () => {
      setIsHovering(true);
   };

   const handleMouseOut = () => {
      setIsHovering(false);
   };
   return (
      <div>
        {/* Hover over this div to hide/show <HoverText /> */}
        <HoverableDiv
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
        {isHovering && <HoverText />}
      </div>
    );
}

export default Category;