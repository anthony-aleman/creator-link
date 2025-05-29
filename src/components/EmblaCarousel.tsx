import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { EmblaOptionsType } from 'embla-carousel';

type CarouselPropType ={
    slides: number[]
    options?: EmblaOptionsType
};

export default function Carousel({slides, options} : CarouselPropType){
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);
    
    //TODO: Finish implementing Carousel
    return(
        <div>
            <div>
                <div>slide 1</div>
                <div>slide 2</div>
            </div>
        </div>
    )
}