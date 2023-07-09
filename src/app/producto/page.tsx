'use client'
import Image from "next/image";
import LayoutProject from "../layout/layoutProyect";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <LayoutProject>
      <div className="grid grid-cols-6 mt-10 space-y-6">
        <div className="lg:col-span-4 col-span-6">
          <span className="text-4xl text-sky-900 font-extrabold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> <br />
          <span className="text-5xl text-sky-900 font-medium">SONY</span> <span className="text-3xl text-sky-900 font-medium">X80J</span>
          <div className="grid grid-cols-3 gap-4">
            <div className="lg:col-span-1 col-span-3 lg:block space-y-2 mt-10 flex flex-wrap justify-center gap-4">
              <Image className="rounded-3xl border-2 border-solid border-sky-900" src={'https://placehold.co/500x500/png'} width={150} height={150} style={{margin: 0}} alt="" />
              <Image className="rounded-3xl border-2 border-solid border-sky-900" src={'https://placehold.co/500x500/png'} width={150} height={150} style={{margin: 0}} alt="" />
              <Image className="rounded-3xl border-2 border-solid border-sky-900" src={'https://placehold.co/500x500/png'} width={150} height={150} style={{margin: 0}} alt="" />
            </div>
            <div className="lg:col-span-2 col-span-3 flex justify-center"><Image src={'https://placehold.co/500x500/png'} width={500} height={500} alt="" /></div>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-6">
          <div className="rounded-[60px] border-4 border-solid border-sky-900 p-10">
            <p className="text-xl text-gray-600 line-through decoration-red-600"><span>0000</span> <span>BS.</span></p>
            <p className="text-5xl text-sky-800 font-extrabold uppercase"><span>0000</span> Bs.</p>
            <p className="my-2"><span className="text-sky-800 font-medium">ENVIÓ A DOMICILIO </span><span className="text-sky-800 font-extrabold">DISPONIBLE.</span></p>
            <p className="border-2 border-solid border-sky-900"></p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem distinctio suscipit delectus veniam culpa neque incidunt dignissimos rerum est magnam sed aspernatur cupiditate, magni quia facilis pariatur ab doloremque!</p>
            <div className="flex space-x-2 mt-4">
              <select className="rounded-full border-2 border-solid border-sky-900 w-20 text-3xl text-center text-sky-900 font-bold" name="" id="">
                <option value="1">1</option>
              </select>
              <button onClick={() => router.push('/lista-compra')} className="rounded-full border-2 border-solid border-sky-900 text-3xl text-center text-white font-bold bg-sky-900 px-5">Comprar</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-t-2 border-solid border-sky-900 my-6">
          <div className="grid grid-cols-2 my-10 space-y-6">
            <div className="lg:col-span-1 col-span-6 border-r-2 border-solid border-sky-900 px-4">
              <span className="text-3xl font-extrabold text-sky-900">CARACTERISTICAS</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique doloribus rem nulla laboriosam nisi optio, doloremque, non numquam dolor nam excepturi velit? Modi accusantium debitis deserunt, vel error explicabo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique doloribus rem nulla laboriosam nisi optio, doloremque, non numquam dolor nam excepturi velit? Modi accusantium debitis deserunt, vel error explicabo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique doloribus rem nulla laboriosam nisi optio, doloremque, non numquam dolor nam excepturi velit? Modi accusantium debitis deserunt, vel error explicabo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique doloribus rem nulla laboriosam nisi optio, doloremque, non numquam dolor nam excepturi velit? Modi accusantium debitis deserunt, vel error explicabo.</p>

            </div>
            <div className="lg:col-span-1 col-span-6 px-4">
              <span className="text-3xl font-extrabold text-sky-900">ESPECIFICACIONES</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique doloribus rem nulla laboriosam nisi optio, doloremque, non numquam dolor nam excepturi velit? Modi accusantium debitis deserunt, vel error explicabo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique doloribus rem nulla laboriosam nisi optio, doloremque, non numquam dolor nam excepturi velit? Modi accusantium debitis deserunt, vel error explicabo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique doloribus rem nulla laboriosam nisi optio, doloremque, non numquam dolor nam excepturi velit? Modi accusantium debitis deserunt, vel error explicabo.</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutProject>
  )
}
