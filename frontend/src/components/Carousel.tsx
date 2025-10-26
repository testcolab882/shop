import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useCallback } from "react"
import { DotButton, useDotButton } from './CarouselDotButton'

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    return <>
        <div className="embla relative" >
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className="relative pb-[40%]">
                            <img src={"https://picsum.photos/500/500"} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
                        </div>
                    </div>

                    <div className="embla__slide">
                        <div className="relative pb-[40%]">
                            <img src={"https://picsum.photos/500/500"} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
                        </div>
                    </div>

                    <div className="embla__slide">
                        <div className="relative pb-[40%]">
                            <img src={"https://picsum.photos/500/500"} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-between px-3">
                <div>
                    <button className="embla__prev cursor-pointer rounded-full bg-black/40 p-3 text-white" onClick={scrollPrev}>
                        <ChevronLeftIcon size={25} />
                    </button>
                </div>
                <div className="flex self-end">
                    <div className="embla__dots flex bg-black/40 rounded-full mb-2">
                        {scrollSnaps.map((_: any, index: any) => (
                            <button 
                                key={index} 
                                onClick={()=>{onDotButtonClick(index)}}
                                className={'embla__dot'.concat(
                                        index === selectedIndex ? ' embla__dot--selected' : ''
                                    )}
                            ></button>
                        ))}
                    </div>
                </div>
                <div>
                    <button className="embla__next cursor-pointer rounded-full bg-black/40 p-3 text-white" onClick={scrollNext}>
                        <ChevronRightIcon size={25} />
                    </button>
                </div>
            </div>
            
        </div>
    </>
}

export default Carousel