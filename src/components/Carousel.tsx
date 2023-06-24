import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import CardProduct from './CardProduct';

function Carousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className=''>
            <ReactSimplyCarousel
                // containerProps={{
                //     style: {
                //       width: "100%",
                //       justifyContent: "space-between",
                //       userSelect: "none"
                //     }
                //   }}
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    children: <span className='lg:inline-block hidden' style={{
                                "width": 0,
                                "height": 0,
                                "borderLeft": "65px solid #8095ab",
                                "borderTop": "45px solid transparent",
                                "borderBottom": "45px solid transparent"
                            }} ></span>,
                    style: {
                      width: 60,
                      height: 60,
                      minWidth: 60,
                      alignSelf: "center"
                    }
                  }}
                // forwardBtnProps={{
                //     //here you can also pass className, or any other button element attributes
                //     style: {
                //         margin: 10,
                //     },

                //     children: <div className='lg:inline-block hidden' style={{
                //         "width": 0,
                //         "height": 0,
                //         "borderLeft": "65px solid #8095ab",
                //         "borderTop": "45px solid transparent",
                //         "borderBottom": "45px solid transparent"
                //     }} ></div>,
                // }}
                backwardBtnProps={{
                    children: <span className='lg:inline-block hidden' style={{
                        "width": 0,
                        "height": 0,
                        "borderRight": "65px solid #8095ab",
                        "borderTop": "45px solid transparent",
                        "borderBottom": "45px solid transparent"
                    }} ></span>,
                    style: {
                      width: 60,
                      height: 60,
                      minWidth: 60,
                      alignSelf: "center"
                    }
                  }}
                // backwardBtnProps={{
                //     //here you can also pass className, or any other button element attributes
                //     style: {
                //         margin: 10,
                //     },
                //     children: <div className='lg:inline-block hidden' style={{
                //         "width": 0,
                //         "height": 0,
                //         "borderRight": "65px solid #8095ab",
                //         "borderTop": "45px solid transparent",
                //         "borderBottom": "45px solid transparent"
                //     }} ></div>,
                // }}
                responsiveProps={[
                    {
                        itemsToShow: 3,
                        itemsToScroll: 2,
                        minWidth: 768,

                    },
                    // { maxWidth: 767, itemsToShow: 1 }
                ]}
                speed={400}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div className='w-[300px] h-[350px] px-3'>
                    <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
                </div>
                <div className='w-[300px] h-[350px] px-3'>
                    <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
                </div>
                <div className='w-[300px] h-[350px] px-3'>
                    <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
                </div>
                <div className='w-[300px] h-[350px] px-3'>
                    <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
                </div>
                <div className='w-[300px] h-[350px] px-3'>
                    <CardProduct title='NINTENDO SWITCH VER 1.0 SIN JUEGO INCLUIDO' />
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default Carousel;