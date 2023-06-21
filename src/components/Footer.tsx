import Link from "next/link"

export const Footer = (): any => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 bg-sky-900 pt-14 pb-4 px-4">
                <div className="">
                    <img src={"http://via.placeholder.com/350x250"} alt="" />
                </div>
                <div className="flex flex-col">
                    <TitleFooter title='¿QUIÉNES SOMOS?'/>
                    <Link href={'/'} className="text-white text-xl">Acerca de</Link>
                    <Link href={'/'} className="text-white text-xl">Sucursales</Link>
                    <Link href={'/'} className="text-white text-xl">Sala de Prensa</Link>
                    <Link href={'/'} className="text-white text-xl">Politica de Privacidad</Link>
                    <Link href={'/'} className="text-white text-xl">Trabaja con Nosotros</Link>
                </div>
                <div className="flex flex-col">
                    <TitleFooter title='SERVICIO AL CLIENTE'/>
                    <Link href={'/'} className="text-white text-xl">Términos y Condiciones</Link>
                    <Link href={'/'} className="text-white text-xl">Preguntas Frecuentes</Link>
                    <Link href={'/'} className="text-white text-xl">Centro de Ayuda</Link>
                </div>
                <div className="flex flex-col">
                    <TitleFooter title='METODOS DE PAGO'/>
                    <Link href={'/'} className="text-white text-xl">Código de QR</Link>
                    <Link href={'/'} className="text-white text-xl">Pago Online</Link>
                    <Link href={'/'} className="text-white text-xl">Transferencia Bancaria</Link>
                    <Link href={'/'} className="text-white text-xl">Politica de Privacidad</Link>
                    <TitleFooter title='PAGOS SEGUROS'/>
                    <TitleFooter title='ENVIÓ A DOMICILIO'/>
                </div>
            </div>
        </div>
    )
}

export const TitleFooter = ({title}: any) => 
    <div className="flex items-center gap-4 my-2">
        <img src={"http://via.placeholder.com/50x50"} alt="" />
        <span className="text-2xl font-extrabold text-white">{title}</span>
    </div>
