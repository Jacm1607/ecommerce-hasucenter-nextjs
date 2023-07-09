"use client"
import Image from "next/image";
import LayoutProject from "../layout/layoutProyect";
import TitleSectionBorder from "@/components/TitleSectionBorder";
import { useRouter } from 'next/navigation'


export default function CajaHome() {
    const router = useRouter();
    return (
        <>
            <LayoutProject>
                <div className="grid grid-cols-3 mt-4">
                    <div className="col-span-3">
                        <TitleSectionBorder title="Caja" />
                    </div>
                    <div className="col-span-3 mt-4 px-2">
                        <p className="text-center uppercase text-sky-900 text-3xl font-bold">¿ya tienes cuenta<span className=" font-normal"> haus</span>?</p>
                        <p className="text-center mt-4"><button onClick={() => router.push('/mi-cuenta')} className="bg-sky-900 rounded-full text-white font-bold uppercase px-6 py-2 text-2xl">Iniciar sesion</button></p>
                    </div>
                    <div className="col-span-3 mt-4">
                        <div className="border-t-2 boder-solid border-sky-900"></div>
                    </div>

                    <div className="col-span-2 pt-6">
                        <form className="grid grid-cols-2 gap-6 px-6">


                            <div className="col-span-1">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Nombre completo</span>
                                    <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Número telefono</span>
                                    <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Carnet identidad</span>
                                    <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">correo electronico</span>
                                    <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Razon social / Nombre</span>
                                    <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Nit / Ci (Opcional)</span>
                                    <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                </div>
                            </div>

                            <div className="col-span-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Dirección</span>
                                    <input type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" />
                                </div>
                            </div>

                            <div className="col-span-2">
                                <TitleSectionBorder title="METODO ENVIO" />

                                <fieldset className="my-5">
                                    <div className="flex items-center">
                                        <input id="normal" aria-labelledby="normal" aria-describedby="normal" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                                        <label htmlFor={"normal"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">ENVIO NORMAL</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="tienda" aria-labelledby="tienda" aria-describedby="tienda" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                                        <label htmlFor={"tienda"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">RECOGER EN TIENDA</label>
                                    </div>

                                </fieldset>
                            </div>

                            <div className="col-span-2">
                                <TitleSectionBorder title="METODO PAGO" />

                                <fieldset className="my-5">
                                    <div className="flex items-center">
                                        <input id="contraEntrega" aria-labelledby="contraEntrega" aria-describedby="contraEntrega" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                                        <label htmlFor={"contraEntrega"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">contra entrega</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="transferencia" aria-labelledby="transferencia" aria-describedby="transferencia" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                                        <label htmlFor={"transferencia"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">Transferencia</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="qr" aria-labelledby="qr" aria-describedby="qr" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                                        <label htmlFor={"qr"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">QR</label>
                                    </div>

                                </fieldset>
                            </div>
                        </form>
                    </div>
                    <div className="col-span-1">
                        <div className="py-2">
                            <button onClick={() => router.push('/lista-compra')} className="rounded-full border-2 border-solid border-sky-900 text-xl text-center text-white font-bold bg-sky-900 px-5">Editar pedido</button>
                            <div className="flex gap-4 mt-6">
                                <div className="imagen-pedido">
                                    <Image className="border-2 border-solid border-sky-900 rounded-xl" src={'/facebook.png'} width={60} height={60} alt="producto" />
                                </div>
                                <div className="">
                                    <p className="text-xl font-extrabold text-sky-900 leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <div className="flex justify-between">
                                        <p>Modelo Lorem ipsum dolor sit.</p>
                                        <p className="text-xl font-extrabold text-sky-900">2000000 Bs.</p>
                                    </div>
                                    <p className="text-xl font-extrabold text-sky-900">X100</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-8">
                                <p className="text-xl font-extrabold text-sky-900">GASTO DE ENVIO</p>
                                <p className="text-xl font-extrabold text-sky-900">GRATIS</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-xl font-extrabold text-sky-900">TOTAL 325000 BS.</p>
                            </div>
                            <div className="flex justify-end mt-2">
                                <button onClick={() => router.push('/lista-compra')} className="rounded-full border-2 border-solid border-sky-900 text-xl text-center text-white font-bold bg-sky-900 px-5 uppercase">Comprar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutProject>
        </>
    )
}
