"use client"
import Loading from "@/components/Loading";
import { Api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Category = () => {
  const [response, setResponse] = useState<any>([])
  const [loading, setLoading] = useState<any>(true)
   useEffect(() => {
     const fetchData = async () => {
       try {
        const api = new Api();
         const data = await api.get('https://www.dashboard.hauscenter.com.bo/api/categorias?populate=*');
         setLoading(false);
         setResponse(data.data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
 
     fetchData();
   },[]);
 
   return (
     <div>
       <div className="w-full gap-14 p-4 flex flex-wrap justify-center">
       {
        loading ? <Loading/> : response.data.map((item: any) => <Link className="flex flex-col items-center text-sky-900 font-bold" key={item.id} href={{ pathname: '/categoria', query: { categoria: item.id },}}><Image src={`https://www.dashboard.hauscenter.com.bo/${item.attributes.imagen.data.attributes.url}`} width={150} height={150} style={{width:100, height:100, objectFit: 'contain'}} alt="Picture of the author" />{item.attributes.nombre}</Link>)
       }
       </div>
     </div>
   );
}
export default Category;