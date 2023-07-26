"use client"
import Image from "next/image";
import LayoutProject from "../layout/layoutProyect";
import TitleSectionBorder from "@/components/TitleSectionBorder";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function ListaCompraHome() {
    const router = useRouter();
    let productsString = localStorage.getItem('product');
    let products = JSON.parse(`${productsString}`);
    const [prod, setProd] = useState(products)
    const [total, setTotal] = useState(0);

    const updateTotal = () => {
        let subtotal = 0;
        prod.map((obj:any) => {
            if(obj.precio_oferta > 0) {
                subtotal += (obj.precio_oferta * obj.cantidad);
            } else {
                subtotal += (obj.precio * obj.cantidad);
            }
        })
        console.log(subtotal)
        setTotal(subtotal)
    }

    const removeProd = (key:any) => {
        let newProd = prod.filter((prod:any) => prod.id != key);
        console.log(newProd);
        localStorage.setItem('product', JSON.stringify(newProd));
        setProd(newProd)
    }

    useEffect(() => {
        if (prod !== null) {
            updateTotal()
        }
    },[])

    return (
        <>
            <LayoutProject>
                <div className="grid grid-cols-3">
                    <div className="col-span-3">
                        <TitleSectionBorder title="Lista de compras" />
                    </div>
                    <div className="col-span-2 divide-y divide-sky-700 px-2">
                        {/* Lista productos */}
                        {prod !== null
                        ? prod.length > 0 ? prod.map((prod:any, key:any) => <div key={prod.id} className="flex py-2">
                        <div className="imagen">
                            <Image className="border-solid border-2 border-sky-900 rounded-3xl" src={`https://www.dashboard.hauscenter.com.bo${prod.imagen}`} width={100} height={100} style={{ width: '180px', height: '180px', objectFit: 'contain' }} alt="12" />
                        </div>
                        <div className="contenido flex flex-col w-full px-10">
                            <p className="text-3xl uppercase font-bold text-sky-900">{prod.nombre}.</p>
                            <div className="flex justify-between">
                                <p className="text-normal uppercase font-medium text-sky-900">{prod.modelo}</p>
                                <select className="rounded-full border-2 border-solid border-sky-900 w-20 text-3xl text-center text-sky-900 font-bold" name="" id="">
                                    <option value={prod.cantidad}>{prod.cantidad}</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={() => removeProd(prod.id)} className=""> <Image src='/eliminar.png' width={42} height={42} style={{ width: '42px', height: '42px', objectFit: 'cover' }} alt="12" /></button>
                                <p className="text-[40px] uppercase font-extrabold h-[60px] text-sky-900"><span>{prod.precio_oferta > 0 ? prod.precio_oferta : prod.precio}</span> BS.</p>
                            </div>
                        </div>
                    </div>) : <></>
                    : <></>}
                        
                    </div>
                    <div className="col-span-1 px-2">
                        <div className="border-2 border-solid border-sky-900 w-full rounded-[60px] my-12 p-8">
                            <div className="">
                                {/* <p className="text-center text-[31px] uppercase font-bold h-[33px] text-gray-500"><span>Sub total</span></p>
                                <p className="text-center text-[40px] uppercase font-bold h-[60px] text-gray-500"><span>4000</span> <span>BS</span></p> */}
                                <p className="text-center text-[50px] uppercase font-bold h-[40px] text-sky-900"><span>Total</span></p>
                                <p className="text-center text-[70px] uppercase font-bold text-sky-900"><span>{total}</span> <span>BS</span></p>
                                <p className="text-center"><button onClick={() => router.push('/caja')} className="bg-sky-900 rounded-full text-white font-bold uppercase px-6 py-2 text-2xl">Ir a caja</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutProject>
        </>
    )
}
