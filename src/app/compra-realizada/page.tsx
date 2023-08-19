"use client"
import Link from "next/link";
import LayoutProject from "../layout/layoutProyect";
import { useEffect } from "react";
import { Api } from "@/services/api";

function Home() {

    useEffect(() => { 
        if (typeof window !== "undefined") {
            localStorage.setItem('product','[]')
        }

        const fetchData = async () => {
            try {
                const api = new Api();
                await api.post(`https://www.email.hauscenter.com.bo/api/send-email`, {});
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        //
    },[])
    return (
        <LayoutProject>
            <div className="my-32">
            <p><span className=" font-extrabold text-4xl text-sky-900">Compra realizada</span></p>
            <p className="text-sky-900 text-lg mb-10">Tu pedido ha sido recibido y se esta procesando, te mantendremos informado. Esperamos que disfrutes de tus nuevos productos.</p>

            <Link className="font-extrabold text-2xl text-sky-900 border-2 border-sky-900 px-2 py-4 rounded-full" href={'/'}>Ir al inicio</Link>
            </div>
        </LayoutProject>
    );
}

export default Home;