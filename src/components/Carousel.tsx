import CardProduct from './CardProduct';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { precioReal } from '@/utils/validarOferta';
import Link from 'next/link';

function Carousela({product}:any) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
    <Carousel responsive={responsive}>
        {product.map((element:any) => <div key={element.id} className='w-[300px] h-[350px] px-3'>
            <Link href={`/producto?producto=${element.id}`}>
              <CardProduct price={precioReal(element.attributes.inicio_oferta, element.attributes.limite_oferta, element.attributes.precio, element.attributes.precio_oferta)} title={element.attributes.nombre} img={`https:www.dashboard.hauscenter.com.bo${element.attributes.imagen.data[0].attributes.url}`} />
            </Link>
        </div>)}
    </Carousel>
    );
}

export default Carousela;