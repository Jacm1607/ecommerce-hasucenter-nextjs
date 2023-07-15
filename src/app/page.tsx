'use client'
import Banner from './views/Banner'
import Category from './views/Category'
import Ads from './views/Ads'
import ProductNew from './views/ProductNew'
import LayoutHome from './layout/layoutHome'
import { useEffect, useState } from 'react'
import { Api } from '@/services/api'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TitleSection from '@/components/TitleSection'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = new Api();
        const jsonData = await api.get('https://www.dashboard.hauscenter.com.bo/api/pagina-principal?populate=*');
        setResponse(jsonData)
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
      <ProductNew />
      <ProductNew />
    </LayoutHome>
  )
}


export default Home;