"use client"
import LayoutProject from "../layout/layoutProyect";
import { useEffect, useState } from "react";
import { Api } from "@/services/api";
import Link from "next/link";
import Image from "next/image";


export default function CategoryHome({searchParams}:any) {
    const { query } = searchParams;
    const [response, setResponse] = useState<any>([])
    const [loading, setLoading] = useState<any>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = new Api();
                const data = await api.get(`https://www.dashboard.hauscenter.com.bo/api/productos?filters[nombre][$contains]=${query}&populate[imagen][fields][0]=url&pagination[limit]=10`);
                console.log(data)
                setLoading(false);
                setResponse(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
            <LayoutProject>
                {loading
                  ? <div className="my-72 font-semibold text-sky-800 text-3xl">Buscando...</div>
                  : response.data.length < 1 ? <div className="my-72 font-semibold text-sky-800 text-3xl">No se encontro productos</div> : <div className="my-14">
                  <p className="text-3xl text-sky-800 font-semibold">Producto encontrados con la palabra: <span className="font-extrabold text-black">&quot;{searchParams.query}&quot;</span></p>
                  {response.data.map((element: any) =>
                     <div key={element.id} className="grid grid-cols-6 mt-5 ">
               
                        <Link key={element} href={{ pathname: `/producto`, query: { producto: element.id } }} className="grid grid-cols-5 lg:col-span-4 col-span-6">
                           <div className="md:col-span-2 col-span-5 w-[195px] h-[195px] border-solid border-2 border-sky-900 flex justify-center items-center rounded-3xl">
                              <Image src={`https://www.dashboard.hauscenter.com.bo/${element.attributes.imagen.data[0].attributes.url}`} width={500} height={500} style={{ width: '140px', height: '140px', objectFit: 'contain' }} alt="12" />
                           </div>
                           <div className="md:col-span-3 col-span-5">
                              <span className="upperacase text-[25px] font-bold text-sky-900 leading-6">{element.attributes.nombre}.</span><br />
                              <span className="leading-3 text-sm">{element.attributes.descripcion_corta}</span>
                           </div>
                        </Link>
                        <div className="lg:col-span-2 col-span-6 flex flex-col justify-between">
                           <div className="text-right">
                              <span className="upperacase text-[25px] font-bold text-sky-900">{element.attributes.precio}</span>
                              <span className="upperacase text-[25px] font-bold text-sky-900 uppercase text-right"> bs.</span>
                           </div>
                        </div>
                     </div>
                     )}
                  </div>
               }
            </LayoutProject>
    )
}
