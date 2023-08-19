import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const HeaderOption = () => {
  return (
    <div className="grid grid-cols-2 pb-4 border-b-2 border-sky-800">
      <div className="col-span-2 lg:col-span-1 p-4">
        <Image src="/logo.jpg" width={464} height={130} style={{ width: '400px', height: 'auto' }} alt="Hauscenter" />
      </div>
      <div className="col-span-2 lg:col-span-1 m-4">
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 ">
          <Link className="font-bold text-sky-800" href={'/'}>INICIO</Link>
          <div className="border-l-2 border-sky-800 h-full">&nbsp;</div>
          <Link className="font-bold text-sky-800" href={'https://cdn.hauscenter.com.bo/CATALOGO%20AGOSTO%20AL%20COSTO.pdf'}>CATALOGO</Link>
          {/* <div className="border-l-2 border-sky-800 h-full">&nbsp;</div> */}
          {/* <Link className="font-bold text-sky-800" href={'/'}>CONTACTANOS</Link> */}
          {/* <div className="border-l-2 border-sky-800 h-full">&nbsp;</div> */}
          {/* <Link className="font-bold text-sky-800" href={'/'}>FAVORITOS</Link> */}
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 my-4">
          <Link href={'mi-cuenta'} className="uppercase py-1 px-4 border-2 border-sky-800 rounded-3xl text-sky-800  font-semibold place-items-center flex justify-center gap-2 h-12 w-40 text-start text-sm"><Image src={'/btn-cuenta.png'} width={30} height={30} alt={""} /> Mi cuenta</Link>
          {/* <Button label="SEGUIR MI PEDIDO" /> */}
          <Link href={'mi-cuenta'} className="uppercase py-1 px-4 border-2 border-sky-800 rounded-3xl text-sky-800  font-semibold place-items-center flex justify-center gap-2 h-12 w-40 text-start text-sm"><Image src={'/btn-credito.png'} width={30} height={30} alt={""} /> CREDI HAUS</Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderOption;