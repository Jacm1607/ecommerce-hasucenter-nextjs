'use client'
import Image from "next/image";
import LayoutProject from "../layout/layoutProyect";
import { useRouter, useSearchParams } from 'next/navigation'
import { Api } from "@/services/api";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import ReactMarkdown from "react-markdown";

export default function Home() {

  function esDatoRegistrado() {
    const datoRegistrado = localStorage.getItem('datoRegistrado');
    return datoRegistrado === 'true';
  }

  function registrarDato() {
    if (!esDatoRegistrado()) {
      localStorage.setItem('product', '[]');

      localStorage.setItem('datoRegistrado', 'true');
    }
  }
  const router = useRouter()
  const [loading, setLoading] = useState<any>(true);
  const [response, setResponse] = useState<any>([]);
  const [oferta, setOferta] = useState(false);
  const [selectValue, setSelectValue] = useState('1');
  const [img, setImg] = useState('');
  const paramSearch = useSearchParams();
  const paramId = paramSearch.get('producto');

  useEffect(() => {
    registrarDato()
    const fetchData = async () => {
      try {
        const api = new Api();
        const data = await api.get(`https://www.dashboard.hauscenter.com.bo/api/productos/${paramId}?populate=*`);
        setResponse(data.data.data.attributes)
        const resultOferta = validarRangoFechaHora(data.data.data.attributes.inicio_oferta, data.data.data.attributes.limite_oferta)
        console.log(resultOferta)
        setOferta(resultOferta)

        setImg(`https://www.dashboard.hauscenter.com.bo${data.data.data.attributes.imagen.data[0].attributes.url}`);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectValue(selectedValue);
  };

  const btnCarrito = (prod: any) => {
    let obj = {
      id: paramId,
      nombre: prod.nombre,
      imagen: prod.imagen.data[0].attributes.url,
      modelo: prod.modelo.data !== null ? response.modelo.data.attributes.nombre : 'SIN MODELO',
      precio: prod.precio,
      precio_oferta: prod.precio_oferta,
      cantidad: selectValue
    }

    let product = localStorage.getItem('product')
    console.log(product)
    let arrayP = JSON.parse(`${product}`);


    const indiceObjetoExistente = arrayP.findIndex((objeto:any) => objeto.id === paramId);

    if (indiceObjetoExistente !== -1) {
      arrayP[indiceObjetoExistente] = obj;
      console.log(arrayP);
    } else {
      arrayP.push(obj)
    }

    localStorage.setItem('product', JSON.stringify(arrayP))
    const result = confirm('Producto añadido al carrito. Desea continuar agregando?...')
    result ? router.push('/lista-compra') : console.log('seguir comprando')
  }
  function validarRangoFechaHora(PfechaInicio: any, PfechaFinal: any) {
    const fechaHoraValidar = new Date();
    const fechaInicio = new Date(PfechaInicio);
    const fechaFinal = new Date(PfechaFinal);
    return (
      fechaHoraValidar >= fechaInicio && fechaHoraValidar <= fechaFinal
    );
  }


  return (
    <LayoutProject>
      <div className="grid grid-cols-6 mt-10 space-y-6">
        {
          loading ? <div className="col-span-6"><Loading /></div>
            :
            <>
              <div className="lg:col-span-4 col-span-6">
                <span className="text-4xl text-sky-900 font-extrabold">{response.nombre}</span> <br />
                <span className="text-5xl text-sky-900 font-medium">{response.nombre}</span> <span className="text-3xl text-sky-900 font-medium">{response.modelo.data !== null ? response.modelo.data.attributes.nombre : 'SIN MODELO'}</span>
                <div className="grid grid-cols-3 gap-4">
                  <div className="lg:col-span-1 col-span-3 lg:block space-y-2 mt-10 flex flex-wrap justify-center gap-4">
                    {response.imagen.data.map((element: any) => <div onClick={() => setImg(`https://www.dashboard.hauscenter.com.bo${element.attributes.url}`)} key={element.id} className="rounded-3xl border-2 border-solid border-sky-900 w-[150px] h-[150px] flex justify-center items-center"><Image src={`https://www.dashboard.hauscenter.com.bo${element.attributes.url}`} width={150} height={150} style={{ width: '100px', height: '100px', objectFit: 'contain' }} alt="" /></div>)}
                  </div>
                  <div className="lg:col-span-2 col-span-3 flex justify-center items-center"><Image src={img} width={500} height={500} style={{ width: '350px', height: '350px', objectFit: 'contain' }} alt="" /></div>
                </div>
              </div>
              <div className="lg:col-span-2 col-span-6">
                <div className="rounded-[60px] border-4 border-solid border-sky-900 p-10">
                  {
                    oferta
                      ? response.precio_oferta > 0
                        ? <><p className="text-xl text-gray-600 line-through decoration-red-600"><span>{response.precio}</span> <span>BS.</span></p><p className="text-5xl text-sky-800 font-extrabold uppercase"><span>{response.precio_oferta}</span> Bs.</p></>
                        : <p className="text-5xl text-sky-800 font-extrabold uppercase"><span>{response.precio}</span> Bs.</p>
                      : <p className="text-5xl text-sky-800 font-extrabold uppercase"><span>{response.precio}</span> Bs.</p>
                  }

                  <p className="my-2"><span className="text-sky-800 font-medium">ENVIÓ A DOMICILIO </span><span className="text-sky-800 font-extrabold">DISPONIBLE.</span></p>
                  <p className="border-2 border-solid border-sky-900"></p>
                  <p>{response.descripcion_corta}</p>
                  <div className="flex space-x-2 mt-4">
                    <select onChange={handleSelectChange} className="rounded-full border-2 border-solid border-sky-900 w-20 text-3xl text-center text-sky-900 font-bold" name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <button onClick={() => btnCarrito(response)} className="rounded-full border-2 border-solid border-sky-900 text-3xl text-center text-white font-bold bg-sky-900 px-5">Comprar</button>
                  </div>
                </div>
              </div>
              <div className="col-span-6 border-t-2 border-solid border-sky-900 my-6">
                <div className="grid grid-cols-2 my-10 space-y-6">
                  <div className="lg:col-span-1 col-span-6 border-r-2 border-solid border-sky-900 px-4">
                    <span className="text-3xl font-extrabold text-sky-900">CARACTERISTICAS</span>
                    <ReactMarkdown>{response.caracteristica}</ReactMarkdown>

                  </div>
                  <div className="lg:col-span-1 col-span-6 px-4">
                    <span className="text-3xl font-extrabold text-sky-900">ESPECIFICACIONES</span>
                    <ReactMarkdown>{response.especificacion}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </>
        }
      </div>
    </LayoutProject>
  )
}