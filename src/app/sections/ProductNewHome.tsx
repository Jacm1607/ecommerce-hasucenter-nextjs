import { CardProduct } from "@/components/CardProduct";
import Carousel from "@/components/Carousel";
import { TitleSection } from "@/components/TitleSection"

const ProductNewHome = () => {
    return (
        <div className="my-16">
            <TitleSection title="DESCUBRE LAS" subtitle="NOVEDADES HAUS" />
            <div className="flex flex-wrap justify-center">
            <div className='w-[300px] h-[350px] px-3'>
                <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
            </div>
            <div className='w-[300px] h-[350px] px-3'>
                <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
            </div>
            <div className='w-[300px] h-[350px] px-3'>
                <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
            </div>
            </div>
        </div>
    )
}

export default ProductNewHome;