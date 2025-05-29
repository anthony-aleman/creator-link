import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { EmblaOptionsType } from 'embla-carousel';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import {
    DotButton, useDotButton
} from './EmblaCarouselDotButtons'
type CarouselPropType = {
    slides: number[]
    options?: EmblaOptionsType
};

export default function Carousel({ slides, options }: CarouselPropType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    //TODO: Finish implementing Carousel
    return (
        <div className="max-w-screen-md m-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex ml-[calc(var(1rem)_*_-1)] pan-y pinch-zoom">
                    {slides.map((index) => (
                        <div className="translate3d(0, 0, 0) flex-[0_0_70%] min-w-0 pl-[1rem]" key={index}>
                            <img
                                className="block h-[100%] w-full object-cover rounded-[1.8rem]"
                                src={`https://picsum.photos/600/350?v=${index}`}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
                <div className="grid grid-cols-[repeat(2,1fr)] gap-[0.6rem] items-center">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="flex flex-wrap justify-end items-center mr-[calc((2.6rem_-_1.4rem)_/_2_*_-1)]">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}