import HeaderHome from './sections/HeaderHome'
import BannerHome from './sections/BannerHome'
import CategoryHome from './sections/CategoryHome'
import AdsHome from './sections/AdsHome'
import ProductNewHome from './sections/ProductNewHome'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeaderHome/>
      <BannerHome/>
      <CategoryHome/>
      <AdsHome/>
      <ProductNewHome/>
      <ProductNewHome/>
      <Footer/>
    </>
  )
}
