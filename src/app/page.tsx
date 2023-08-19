'use client'
import Category from './views/Category'
import LayoutHome from './layout/layoutHome'
import { useEffect, useState } from 'react'
import { Api } from '@/services/api'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TitleSection from '@/components/TitleSection'
import Carousela from '@/components/Carousel'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>([]);
  const [prod1, setProd1] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = new Api();
        const jsonData = await api.get('https://www.dashboard.hauscenter.com.bo/api/pagina-principal?populate=*');
        const { data } = await api.get('https://www.dashboard.hauscenter.com.bo/api/productos?populate[imagen][fields][0]=url&paginate[page]=2');
        setResponse(jsonData)
        setProd1(data.data)
        setLoading(false)

      } catch (error: any) {
        console.log('error fetch', error)
      }
    };

    fetchData();
  }, [])
  return (
    <LayoutHome>
      {loading ? <Skeleton height={468} baseColor='#b2b2b2' /> : <Image src={`https://www.dashboard.hauscenter.com.bo/${response.data.data.attributes.imgBanner.data.attributes.url}`} width={1920} height={468} style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
      }
      <div className="md:container md:mx-auto">
        <Category />
        <div className="flex flex-col items-center">
          <TitleSection title="DESCUBRE LAS" subtitle="NOVEDADES HAUS" />
          <div className="grid grid-rows-4 grid-cols-5 gap-4 w-full">
            {loading
              ? <div className="col-span-5 row-span-4"><Skeleton height={468} baseColor='#b2b2b2' /></div>
              : <>
                <div className="md:row-span-4 row-span-2 md:col-span-3 col-span-5">
                  <Image src={`https://www.dashboard.hauscenter.com.bo/${response.data.data.attributes.imgNovedad1.data.attributes.url}`} width={1920} height={468} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Picture of the author" />
                </div>

                <div className="md:row-span-2 row-span-2 md:col-span-2 col-span-5 bg-sky-500">
                  <Image src={`https://www.dashboard.hauscenter.com.bo/${response.data.data.attributes.imgNovedad2.data.attributes.url}`} width={1920} height={468} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Picture of the author" />
                </div>

                <div className="md:row-span-2 row-span-2 md:col-span-2 col-span-5 bg-sky-300">
                  <Image src={`https://www.dashboard.hauscenter.com.bo/${response.data.data.attributes.imgNovedad3.data.attributes.url}`} width={1920} height={468} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Picture of the author" />
                </div>

              </>}
          </div>
        </div>
      </div>
      <div className="mt-16">
      <TitleSection title="DESCUBRE LAS" subtitle="NOVEDADES HAUS" />
      <div className="flex justify-center">
        <div className="lg:w-7/12 w-full">
          <Carousela product={prod1} />
        </div>
      </div>
      </div>
      <div className="mt-16">
      <TitleSection title="CONOCE" subtitle="NUESTRAS MARCAS" />
      <div className="flex justify-center gap-10">
        <Image style={{width: 200, height: 160, objectFit:'contain'}} src={'/marca1.png'} alt='1' width={200} height={100} />
        <Image style={{width: 200, height: 160, objectFit:'contain'}} src={'/marca2.png'} alt='1' width={200} height={100} />
        <Image style={{width: 200, height: 160, objectFit:'contain'}} src={'/marca3.png'} alt='1' width={200} height={100} />
        <Image style={{width: 200, height: 160, objectFit:'contain'}} src={'/marca4.png'} alt='1' width={200} height={100} />
      </div>
      </div>
    </LayoutHome>
  )
}


export default Home;