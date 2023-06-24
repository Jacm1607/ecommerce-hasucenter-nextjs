
import CardProduct from "@/components/CardProduct";
import TitleSection from "@/components/TitleSection";
import Link from "next/link";

const ProductNewHome = () => {
    return (
        <div className="my-16">
            <TitleSection title="DESCUBRE LAS" subtitle="NOVEDADES HAUS" />
            <div className="flex flex-wrap justify-center">
                <div className='w-[300px] h-[350px] px-3'>
                    <Link href={'/producto'}><CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' /></Link>
                </div>
                <div className='w-[300px] h-[350px] px-3'>
                    <Link href={'/producto'}><CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' /></Link>
                </div>
                <div className='w-[300px] h-[350px] px-3'>
                    <Link href={'/producto'}><CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductNewHome;