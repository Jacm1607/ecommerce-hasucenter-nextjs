import Image from "next/image";
import Link from "next/link";

const Feature = () => {
    return (
        <div className="grid grid-cols-2 h-[832px] w-full">
            <div className="col-span-1">
                <Image src={"https://placehold.co/992x832/png"} width={992} height={832} style={{ width: '100%', height: '100%' }} alt="" />
            </div>
            <div className="col-span-1 px-10">
                <div className="">
                    <p className="text-sky-900 text-[60px] h-[40px] uppercase">PRODUCTO</p>
                    <p className="text-sky-900 text-[100px] font-extrabold mt-0 pt-0 uppercase">DESTACADO</p>
                </div>
                <div className="">
                    <p className="text-sky-900 text-[100px] font-extrabold mt-0 pt-0 uppercase h-[100px]">IPHONE 13</p>
                    <p className="text-sky-900 text-[60px] uppercase">PRO max</p>
                </div>
                <div className="">
                    <p className="text-sky-900 text-[50px] uppercase">CARACTERÍSTICAS:</p>
                    <p className="text-sky-900 text-[30px] uppercase px-8">- COLORES DISPONIBLES: AZUL, NEGRO, GOLD ROSE - ALMACENAMIENTO: 128GB / 256GB - PANTALLA AMOLED - PANTALLA DE 6 PULGADAS</p>
                </div>
                <center className="m-6"><Link className="text-[36px] text-white bg-sky-950 rounded-full px-8 py-2 font-bold tracking-wider" href={'/'}>ADQUIÉRELO YA</Link></center>
            </div>
        </div>
    )
}

export default Feature;