"use client"
import Image from "next/image";
import LayoutProject from "../layout/layoutProyect";
import TitleSectionBorder from "@/components/TitleSectionBorder";
import { useRouter } from 'next/navigation'

export default function ListaCompraHome() {
    const router = useRouter();
    return (
        <>
            <LayoutProject>
                <div className="grid grid-cols-3">
                    <div className="col-span-3">
                        <TitleSectionBorder title="Lista de compras" />
                    </div>
                    <div className="col-span-2 divide-y divide-sky-700 px-2">
                        {/* Lista productos */}
                        <div className="flex py-2">
                            <div className="imagen">
                                <Image className="border-solid border-2 border-sky-900 rounded-3xl" src={'https://placehold.co/180x180/png'} width={180} height={180} style={{ width: '180px', height: '180px', objectFit: 'cover' }} alt="12" />
                            </div>
                            <div className="contenido flex flex-col w-full px-10">
                                <p className="text-3xl uppercase font-bold text-sky-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <div className="flex justify-between">
                                    <p className="text-normal uppercase font-medium text-sky-900">Model.</p>
                                    <select className="rounded-full border-2 border-solid border-sky-900 w-20 text-3xl text-center text-sky-900 font-bold" name="" id="">
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <div className="flex justify-between">
                                    <button className=""> <Image src='/eliminar.png' width={42} height={42} style={{ width: '42px', height: '42px', objectFit: 'cover' }} alt="12" /></button>
                                    <p className="text-[40px] uppercase font-extrabold h-[60px] text-sky-900"><span>20000</span> BS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 px-2">
                        <div className="border-2 border-solid border-sky-900 w-full rounded-[60px] my-12 p-8">
                            <div className="">
                                <p className="text-center text-[31px] uppercase font-bold h-[33px] text-gray-500"><span>Sub total</span></p>
                                <p className="text-center text-[40px] uppercase font-bold h-[60px] text-gray-500"><span>4000</span> <span>BS</span></p>
                                <p className="text-center text-[50px] uppercase font-bold h-[40px] text-sky-900"><span>Total</span></p>
                                <p className="text-center text-[70px] uppercase font-bold text-sky-900"><span>3500</span> <span>BS</span></p>
                                <p className="text-center"><button onClick={() => router.push('/caja')} className="bg-sky-900 rounded-full text-white font-bold uppercase px-6 py-2 text-2xl">Ir a caja</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutProject>
        </>
    )
}
