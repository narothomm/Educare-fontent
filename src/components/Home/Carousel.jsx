import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import carouselImage1 from'../../assets/carousel-image/campus-1.jpg'
import carouselImage2 from'../../assets/carousel-image/campus-2.jpg'
import carouselImage3 from'../../assets/carousel-image/campus-3.jpg'
import carouselImage4 from'../../assets/carousel-image/campus-4.jpg'

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const CarouselSlides=[
      {image:carouselImage1},
      {image:carouselImage2},
      {image:carouselImage3},
      {image:carouselImage4}

    ]
  return (
    <div className="embla rounded-xl ml-28" ref={emblaRef}>
      <div className="embla__container rounded-xl">
       {
        CarouselSlides.map((slide,index)=>(
           <div className='embla__slide rounded-lg'>
            <img src={slide.image} alt={`image${index}`} className='h-[440px] w-full rounded-xl'/>
           </div>
        ))
       }
      </div>
    </div>
  )
}

export default Carousel