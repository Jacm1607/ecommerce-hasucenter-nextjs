import Image from "next/image"
import Link from "next/link"

 const Footer = (): any => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 bg-sky-900 pt-14 pb-4 px-4">
                <div className="mb-20">
                    <Image src={'/hauscenter-blanco.png'} width={220} height={250} style={{width:220, height:200, objectPosition: 'cover'}} alt="" />
                </div>
                <div className="flex flex-col">
                    <TitleFooter title='¿QUIÉNES SOMOS?' img={'/quienes-somos.png'} />
                    <span className="text-white text-xl">Acerca de</span>
                    <span className="text-white text-xl">Sala de Prensa</span>
                    <span className="text-white text-xl">Politica de Privacidad</span>
                    <Link href={'https://www.trabajopolis.bo/empresa-con-ofertas-de-trabajo-y-empleo-en-bolivia/362914/Markas-S.R.L.'} className="text-white text-xl">Trabaja con Nosotros</Link>
                </div>
                <div className="flex flex-col">
                    <TitleFooter title='SERVICIO AL CLIENTE' img={'/servicio-cliente.png'}/>
                    <Link href={'terminos-condiciones'} className="text-white text-xl">Términos y Condiciones</Link>
                    <span className="text-white text-xl">Preguntas Frecuentes</span>
                    <span className="text-white text-xl">Centro de Ayuda</span>
                </div>
                <div className="flex flex-col">
                    <TitleFooter title='SUCURSALES' img={'/quienes-somos.png'}/>
                    <Link href={'https://goo.gl/maps/V5vMLQre2vnL4x298'} className="text-white text-xl">Central - Cañoto</Link>
                    <Link href={'https://goo.gl/maps/Vt54zY5bczzdMpyp9'} className="text-white text-xl">Las Brisas</Link>
                    <Link href={'https://goo.gl/maps/t3uDvZsbULxcHb3f9'} className="text-white text-xl">Mega Center</Link>
                    <Link href={'https://goo.gl/maps/QkkrR6LniQWxURhk9'} className="text-white text-xl">Isabela La Católica</Link>
                    <Link href={'https://goo.gl/maps/MUVLtJFfRsQ9xfXc8'} className="text-white text-xl">Ventura</Link>
                    <Link href={'https://goo.gl/maps/XKfsctoNGVm4E2z38'} className="text-white text-xl">Cochabamba</Link>
                </div>
            </div>
            <div className="w-full">
                <p className="text-center tracking-[.25em] text-2xl text-sky-800 font-bold my-2">

                <span >HAUSCENTER° TODOS LOS DERECHOS RESERVADOS 2023</span>
                </p>
            </div>
        </div>
    )
}

const TitleFooter = ({title, img}: any) => 
<div className="flex items-center gap-4 my-2">
    <Image src={img} width={50} height={50} alt="" />
    <span className="text-2xl font-extrabold text-white">{title}</span>
</div>

export default Footer;