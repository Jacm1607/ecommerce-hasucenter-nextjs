import Banner from './views/Banner'
import Category from './views/Category'
import Ads from './views/Ads'
import ProductNew from './views/ProductNew'
import LayoutHome from './layout/layoutHome'

const Home = () => (
  <LayoutHome>
    <Banner />
    <div className="md:container md:mx-auto">
      <Category />
      <Ads />
    </div>
    <ProductNew />
    <ProductNew />
  </LayoutHome>
)

export default Home;