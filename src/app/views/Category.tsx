import Image from "next/image";
import Link from "next/link";

const Category = () => <div className="w-full gap-4 p-4 flex flex-wrap justify-center">
   <Link href={'/categoria'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
   <Link href={'/'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
   <Link href={'/'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
   <Link href={'/'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
   <Link href={'/'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
   <Link href={'/'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
   <Link href={'/'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
   <Link href={'/'}><Image src="https://placehold.co/150x150" width={150} height={150} alt="Picture of the author" /></Link>
</div>

export default Category;