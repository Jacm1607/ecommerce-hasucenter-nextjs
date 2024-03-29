import Image from "next/image";
import Link from "next/link";

const Feature = () => {
    return (
        <div className="grid grid-cols-2 w-full">
            <div className="lg:col-span-1 col-span-2">
                <Image src={"https://placehold.co/992x832/png"} width={992} height={832} style={{ width: '100%', height: '100%' }} alt="" />
            </div>
            <div className="lg:col-span-1 col-span-2 md:px-10 px-1">
                <div className="">
                    <p className="text-sky-900 md:text-[60px] text-[40px] h-[40px] uppercase w-full">PRODUCTO</p>
                    <p className="text-sky-900 md:text-[100px] text-[60px] font-extrabold mt-0 pt-0 uppercase">DESTACADO</p>
                </div>
                <div className="">
                    <p className="text-sky-900 font-extrabold text-[60px] mt-0 pt-0 uppercase leading-[50px] ">IPHONE 13</p>
                    <p className="text-sky-900 md:text-[60px] text-[40px] uppercase">PRO max</p>
                </div>
                <div className="">
                    <p className="text-sky-900 text-[30px] uppercase">CARACTERÍSTICAS:</p>
                    <p className="text-sky-900 text-[20px] uppercase md:px-8">- COLORES DISPONIBLES: AZUL, NEGRO, GOLD ROSE - ALMACENAMIENTO: 128GB / 256GB - PANTALLA AMOLED - PANTALLA DE 6 PULGADAS</p>
                </div>
                <center className="m-6"><Link className="md:text-[36px] text-white bg-sky-950 rounded-full px-8 py-2 font-bold tracking-wider" href={'/'}>ADQUIÉRELO YA</Link></center>
            </div>
        </div>
    )
}

export default Feature;