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
         const data = await api.get('https://www.dashboard.hauscenter.com.bo/api/categorias');
         setLoading(false);
         setResponse(data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
 
     fetchData();
   },[]);
 
   return (
     <div>
       <div className="w-full gap-4 p-4 flex flex-wrap justify-center">
       {
        loading ? <Loading/> : response.data.map((item: any) => <Link className="flex flex-col items-center" key={item.id} href={{ pathname: '/categoria', query: { categoria: item.id },}}><Image src="https://placehold.co/150x150/png" width={150} height={150} alt="Picture of the author" />{item.attributes.nombre}</Link>)
       }
       </div>
     </div>
   );
}
export default Category;