"use client"
import Image from "next/image";
import LayoutProject from "../layout/layoutProyect";
import TitleSectionBorder from "@/components/TitleSectionBorder";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Link from "next/link";


export default function CajaHome() {
    const [tienda, setTienda] = useState(false);
    const [tipo, setTipo] = useState('')

    const handleCheckBoxChangeTienda = () => {
        setTienda(true);
    };
    const hideTienda = () => {
        setTienda(false);
    };
    const handleCheckBoxChangeTipo = (tipo: string) => {
        setTipo(tipo);
    };
    if (typeof window !== "undefined") {
        let productsString = localStorage.getItem('product');
        const token = sessionStorage.getItem('token');
        let products = JSON.parse(`${productsString}`);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [total, setTotal] = useState(0);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isToken, setToken] = useState(false);

        const updateTotal = () => {
            let subtotal = 0;
            products.map((obj: any) => {
                if (obj.precio_oferta > 0) {
                    subtotal += (obj.precio_oferta * obj.cantidad);
                } else {
                    subtotal += (obj.precio * obj.cantidad);
                }
            })
            console.log(subtotal)
            setTotal(subtotal)
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (products !== null) {
                updateTotal()
            }
            if (token !== null) {
                setToken(true)
            }
        }, [])
        return (
            <>
                <LayoutProject>
                    <form action="" method="post">
                        <div className="grid grid-cols-3 mt-4">
                            <div className="col-span-3">
                                <TitleSectionBorder title="Caja" />
                            </div>
                            {!isToken && (
                                <>
                                    <div className="col-span-3 mt-4 px-2">
                                        <p className="text-center uppercase text-sky-900 text-3xl font-bold">¿ya tienes cuenta<span className=" font-normal"> haus</span>?</p>
                                        <p className="text-center mt-4"><Link href={'/mi-cuenta'} className="bg-sky-900 rounded-full text-white font-bold uppercase px-6 py-2 text-2xl">Iniciar sesion</Link></p>
                                    </div>
                                    <div className="col-span-3 mt-4">
                                        <div className="border-t-2 boder-solid border-sky-900"></div>
                                    </div></>
                            )}

                            <div className="lg:col-span-2 col-span-3 pt-6">
                                <div className="grid grid-cols-2 gap-6 px-6">


                                    <div className="md:col-span-1 col-span-2">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-extrabold text-sky-900 uppercase ">Nombre completo</span>
                                            <input type="text" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 col-span-2">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-extrabold text-sky-900 uppercase ">Número telefono</span>
                                            <input type="number" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 col-span-2">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-extrabold text-sky-900 uppercase ">Carnet identidad</span>
                                            <input type="number" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 col-span-2">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-extrabold text-sky-900 uppercase ">correo electronico</span>
                                            <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 col-span-2">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-extrabold text-sky-900 uppercase ">Razon social / Nombre</span>
                                            <input type="text" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 col-span-2">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-extrabold text-sky-900 uppercase ">Nit / Ci (Opcional)</span>
                                            <input type="number" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-extrabold text-sky-900 uppercase ">Dirección</span>
                                            <input type="text" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <TitleSectionBorder title="METODO ENVIO" />

                                        <fieldset className="my-5">
                                            <div className="flex items-center">
                                                <input id="normal" onChange={hideTienda} aria-labelledby="normal" aria-describedby="normal" type="radio" name="envio" value="normal" className="h-4 w-4 border-sky-300 focus:ring-0" required />
                                                <label htmlFor={"normal"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">ENVIO NORMAL</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input onChange={handleCheckBoxChangeTienda} id="tienda" aria-labelledby="tienda" aria-describedby="tienda" type="radio" name="envio" value="tienda" className="h-4 w-4 border-sky-300 focus:ring-0" required />
                                                <label htmlFor={"tienda"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">RECOGER EN TIENDA</label>
                                            </div>

                                            {tienda ? <div>
                                                <select name="" id="" required={tienda} className="rounded-full border-2 border-solid border-sky-900 text-xl px-4 py-1 text-sky-900 font-bold">
                                                    <option value="">Selecciona una opcion</option>
                                                    <option value="Central">Central</option>
                                                    <option value="Ventura">Ventura</option>
                                                    <option value="Isabel La Catolica">Isabel La Catolica</option>
                                                    <option value="Las Brisas">Las Brisas</option>
                                                    <option value="Cbba">Cbba</option>
                                                </select>
                                            </div> : <></>}

                                        </fieldset>
                                    </div>

                                    <div className="col-span-2">
                                        <TitleSectionBorder title="METODO PAGO" />

                                        <fieldset className="my-5">
                                            <div className="flex items-center">
                                                <input onChange={() => handleCheckBoxChangeTipo('contra_entrega')} id="contraEntrega" aria-labelledby="contraEntrega" aria-describedby="contraEntrega" type="radio" name="pago" value="contra_entrega" className="h-4 w-4 border-sky-300 focus:ring-0" required />
                                                <label htmlFor={"contraEntrega"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">contra entrega</label>
                                            </div>

                                            {tipo === 'contra_entrega' && (
                                                <div>
                                                    {/* Aquí coloca el contenido que deseas mostrar cuando el checkbox está marcado */}
                                                    <p className="text-sky-900 w-full">Tenga en cuenta que el pedido puede demorar entre 24 a 48 hrs. dias hábiles.</p>
                                                </div>
                                            )}

                                            <div className="flex items-center">
                                                <input onChange={() => handleCheckBoxChangeTipo('transferencia')} id="transferencia" aria-labelledby="transferencia" aria-describedby="transferencia" type="radio" name="pago" value="Transferencia" className="h-4 w-4 border-sky-300 focus:ring-0" required />
                                                <label htmlFor={"transferencia"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">Transferencia</label>
                                            </div>

                                            {tipo === 'transferencia' && (
                                                <div>
                                                    <p className="text-sky-900 w-full">Tan pron­to como su pe­di­do sea com­proba­do y proce­sa­do por un agen­te de HausCenter, le en­via­re­mos una con­fir­ma­ción de pe­di­do con nues­tros datos ban­ca­rios. Por favor, tenga en cuen­ta que las trans­fe­ren­cias tar­dan aproxima­da­men­te 1 a 2 días la­bo­ra­bles en lle­gar y que su pe­di­do será en­via­do cuan­do re­ciba­mos la misma.</p>
                                                </div>
                                            )}

                                            <div className="flex items-center">
                                                <input onChange={() => handleCheckBoxChangeTipo('qr')} id="qr" aria-labelledby="qr" aria-describedby="qr" type="radio" name="pago" value="qr" className="h-4 w-4 border-sky-300 focus:ring-0" required />
                                                <label htmlFor={"qr"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">QR</label>
                                            </div>

                                            {tipo === 'qr' && (
                                                <div>
                                                    {/* Aquí coloca el contenido que deseas mostrar cuando el checkbox está marcado */}
                                                    <p><Image src={'/qr.jpeg'} width={600} height={600} style={{width:600, height: 600, objectFit: 'contain'}} alt="qr"></Image></p>
                                                </div>
                                            )}

                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-3 mx-4">
                                <div className="py-2">
                                    <Link href={'/lista-compra'} className="rounded-full border-2 border-solid border-sky-900 text-xl text-center text-white font-bold bg-sky-900 px-5">Editar pedido</Link>

                                    {products.map((prod: any) =>
                                        <div key={prod.id} className="grid grid-cols-6 gap-4 mt-6 w-full">
                                            <div className="imagen-pedido col-span-1">
                                                <Image className="border-2 border-solid border-sky-900 rounded-xl" src={`https://www.dashboard.hauscenter.com.bo${prod.imagen}`} width={60} height={60} alt="producto" />
                                            </div>
                                            <div className="col-span-5">
                                                <p className="text-xl font-extrabold text-sky-900 leading-5">{prod.nombre}</p>
                                                <div className="flex justify-between">
                                                    <p>{prod.modelo}</p>
                                                    <p className="text-xl font-extrabold text-sky-900">{prod.precio_oferta > 0 ? prod.precio_oferta : prod.precio} Bs.</p>
                                                </div>
                                                <p className="text-xl font-extrabold text-sky-900">X{prod.cantidad}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-between mt-8">
                                        <p className="text-xl font-extrabold text-sky-900">GASTO DE ENVIO</p>
                                        <p className="text-xl font-extrabold text-sky-900">GRATIS</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <p className="text-xl font-extrabold text-sky-900">TOTAL {total} BS.</p>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <button type="submit" className="rounded-full border-2 border-solid border-sky-900 text-xl text-center text-white font-bold bg-sky-900 px-5 uppercase">Comprar ahora</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </LayoutProject>
            </>
        )
    }

}
