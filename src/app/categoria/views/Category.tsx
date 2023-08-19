import Link from "next/link";
import { Api } from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Loading from "@/components/Loading";
import TitleSectionBorder from "@/components/TitleSectionBorder";

const handleFetch = async (id: number, page = 1) => {

   try {
      const api = new Api();
      const {data} = await api.get(`https://www.dashboard.hauscenter.com.bo/api/productos?populate[imagen][fields][0]=name&populate[imagen][fields][1]=url&populate[images]&populate[subcategoria]=*&filters[subcategoria][id][$eq]=${id}&pagination[page]=${page}`);
      return data
   } catch (error) {
      console.error('Error fetching data:', error);
   }
}

const LinkComponent = ({ subcategorias }: any) => {
   const [idSub, setIdSub] = useState<any>();
   const [response, setResponse] = useState<any>([]);
   const [count, setCount] = useState(1);
   const [loading, setLoading] = useState<any>(true);

   const getInfo = async (idSubcategoria:number , page = 1) => {
      setIdSub(idSubcategoria)
      let info = await handleFetch(idSubcategoria, page);
      setResponse(info)
   }

   const next = async () => {
      setLoading(true)
      setCount(count + 1);
      let info = await handleFetch(idSub, count);
      setResponse(info)
      setLoading(false)
   }

   const back = async () => {
      setLoading(true)
      setCount(count - 1);
      let info = await handleFetch(idSub, count);
      setResponse(info)
      setLoading(false)
   }

   useEffect(() => {
      const fetchData = async () => {
         try {
            const api = new Api();
            const {data} = await api.get(`https://www.dashboard.hauscenter.com.bo/api/productos?populate[subcategoria]=*&filters[subcategoria][id][$eq]=${subcategorias[0].id}&pagination[page]=1&populate[imagen][fields][0]=url`);
            console.log(response)
            setResponse(data);
            setLoading(false);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <div className="overflow-x-auto whitespace-nowrap scroll-category">
            <div className="inline-block min-w-full">
               {subcategorias.length < 1 ?
                  <> Sin subcategorias disponibles </> :
                  subcategorias.map((item: any) => <div onClick={() => getInfo(item.id)} key={item.id} className="inline-block cursor-pointer mx-4"><center><Image src={`https://www.dashboard.hauscenter.com.bo${item.attributes.imagen.data.attributes.url}`} width={150} height={150} alt={item.attributes.nombre} style={{width: 75, height: 100 , objectPosition: 'cover'}} />{item.attributes.nombre}</center></div>
                  )}
            </div>
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

               {loading
                  ? <>Cargando...</>
                  : response.data.length < 1 ? <>Sin productos disponibles</> : <>
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
                     <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                           Pagina <span className="font-semibold text-gray-900 dark:text-white">{count}</span> de <span className="font-semibold text-gray-900 dark:text-white">{response.meta.pagination.pageCount}</span> de <span className="font-semibold text-gray-900 dark:text-white">{response.meta.pagination.total}</span> Productos
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                           <button disabled={1 === count} onClick={back} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                              <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                              </svg>
                              Atras
                           </button>
                           <button disabled={response.meta.pagination.pageCount === count} onClick={next} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                              Siguiente
                              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </>
               }
            </div>
         </div>
      </>

   )
}

const Category = () => {
   const [loadingSubcategoria, setLoadingSubcategoria] = useState<any>(true);
   const [responseSubcategoria, setResponseSubcategoria] = useState<any>([]);
   const paramSearch = useSearchParams();
   const paramId = paramSearch.get('categoria');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const api = new Api();
            const data = await api.get(`https://www.dashboard.hauscenter.com.bo/api/categorias/${paramId}?populate[subcategorias][populate][fields][0]=nombre&populate[subcategorias][populate][imagen][fields][1]=url`);
            setResponseSubcategoria(data.data.data.attributes.subcategorias.data);
            console.log(responseSubcategoria);
            
            setLoadingSubcategoria(false);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);
   return (
      <>
         <div className="w-full gap-4 p-4 flex flex-wrap justify-start">
            {loadingSubcategoria ? <Loading /> : <LinkComponent subcategorias={responseSubcategoria} />}
         </div>
      </>
   )
}

export default Category;