import Carousel from "@/components/Carousel";
import { TitleSection } from "@/components/TitleSection"

const ProductNewHome = () => {
    return (
        <div className="flex flex-col items-center my-16">
            <TitleSection title="DESCUBRE LAS" subtitle="NOVEDADES HAUS" />
            <Carousel/>
        </div>
    )
}

export default ProductNewHome;