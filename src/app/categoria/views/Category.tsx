import Link from "next/link";
import { Api } from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Loading from "@/components/Loading";
import TitleSectionBorder from "@/components/TitleSectionBorder";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }: any) => {
   return (
      <>
         <div className="md:container md:mx-auto p-4">
            <div className="w-full gap-4 flex flex-wrap">
               <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href={'/categoria'}><Image src="https://placehold.co/150x150/png" width={150} height={150} alt="Picture of the author" /></Link>
            </div>
         </div>
      </>
   );
};

const HoverText = () => {
   return (
      <div className="md:container md:mx-auto p-4">
         <div className="w-full gap-4 flex flex-wrap">
            <Link href={'/categoria'}><Image src="https://placehold.co/150x150/png" width={150} height={150} alt="Picture of the author" /></Link>
         </div>
      </div>
   );
};

const LinkComponent = ({ data }: any) => {
   console.log(data.length)
   return data.length < 1 ? <>Sin subcategorias disponibles</> : data.map((item: any) => <Link className="flex flex-col items-center" key={item.id} href={'/categoria'}><Image src="https://placehold.co/150x150/png" width={150} height={150} alt="Picture of the author" />{item.attributes.nombre}</Link>)
}

const Category = () => {
   const [response, setResponse] = useState<any>([]);
   const [loading, setLoading] = useState<any>(true);
   const paramSearch = useSearchParams();
   const paramId = paramSearch.get('categoria') ?? 1;
   useEffect(() => {
      const fetchData = async () => {
         try {
            const api = new Api();
            const data = await api.get(`https://www.dashboard.hauscenter.com.bo/api/categorias/${paramId}?populate=*`);
            setResponse(data.data.data.attributes.subcategorias.data);
            setLoading(false);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);
   return (
      <>
         <div className="w-full gap-4 p-4 flex flex-wrap justify-start">
            {loading ? <Loading /> : <LinkComponent data={response} />}
         </div>
         <div className="grid grid-cols-6 gap-16 mt-16 mx-4">
            <div className="md:col-span-2 col-span-6">
               <TitleSectionBorder title="Filtros" />
               <div className="space-y-6 mt-10">
                  <div className="marca">
                     <span className="text-3xl font-extrabold text-sky-900 uppercase ">Marca</span>
                     <div className="max-w-lg mx-auto">

                        <fieldset className="my-5">
                           <div className="flex items-center">
                              <input id="opt1" aria-labelledby="opt1" aria-describedby="opt1" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                              <label htmlFor={"opt1"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">SAMSUNG</label>
                           </div>

                           <div className="flex items-center">
                              <input id="opt2" aria-labelledby="opt2" aria-describedby="opt2" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                              <label htmlFor={"opt2"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">SAMSUNG</label>
                           </div>

                        </fieldset>
                     </div>
                  </div>
                  <div className="precio">
                     <span className="text-3xl font-extrabold text-sky-900 uppercase ">Limite de precio</span>
                     <div className="grid grid-cols-2 gap-8 mt-4">
                        <div className="col-span-1">
                           <input type="text" name="" id="" className="h-[60px] px-10 w-full rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 placeholder:text-center placeholder:font-bold placeholder:text-3xl text-center font-bold text-3xl" placeholder="0" />
                        </div>
                        <div className="col-span-1">
                           <input type="text" name="" id="" className="h-[60px] px-10 w-full rounded-full border-solid border-2 border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 placeholder:text-center placeholder:font-bold placeholder:text-3xl text-center font-bold text-3xl" placeholder="1000" />
                        </div>
                     </div>
                  </div>
                  <div className="orden">
                     <span className="text-3xl font-extrabold text-sky-900 uppercase ">Precio</span>
                     <div className="max-w-lg mx-auto">

                        <fieldset className="my-5">
                           <div className="flex items-center">
                              <input id="precioAsc" aria-labelledby="precioAsc" aria-describedby="precioAsc" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                              <label htmlFor={"precioAsc"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">ascendente</label>
                           </div>

                           <div className="flex items-center">
                              <input id="precioDesc" aria-labelledby="precioDesc" aria-describedby="precioDesc" type="radio" name="countries" value="USA" className="h-4 w-4 border-sky-300 focus:ring-0" />
                              <label htmlFor={"precioDesc"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">descendente</label>
                           </div>

                        </fieldset>
                     </div>
                  </div>
               </div>
            </div>
            <div className="md:col-span-4 col-span-6">
               <TitleSectionBorder title="Productos" />

               <div className="grid grid-cols-6 mt-5 ">
                  <Link href={'producto'} className="grid grid-cols-5 lg:col-span-4 col-span-6">
                     <div className="md:col-span-2 col-span-5">
                        <Image className="border-solid border-2 border-sky-900 rounded-3xl" src={'https://placehold.co/500x500/png'} width={700} height={700} style={{ width: '195px', height: '195px', objectFit: 'cover' }} alt="12" />
                     </div>
                     <div className="md:col-span-3 col-span-5 pt-4">
                        <span className="upperacase text-[25px] font-bold text-sky-900 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br />
                        <span>- ANDROID 12 - 256GB ALMACENAMIENTO - 8 RAM + 3 RVIRTUAL - 5000 MAH</span>
                     </div>
                  </Link>
                  <div className="lg:col-span-2 col-span-6 flex flex-col justify-between">
                     <div className="text-right">
                        <span className="upperacase text-[25px] font-bold text-sky-900">1000000</span>
                        <span className="upperacase text-[25px] font-bold text-sky-900 uppercase text-right"> bs.</span>
                     </div>
                     <div className="flex justify-end">
                        <button onClick={() => alert('love')}>❤</button>
                        <button>🛍</button>
                        <button>🛒</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Category;