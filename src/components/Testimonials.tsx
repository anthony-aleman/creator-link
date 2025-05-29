import { NextPage } from 'next'
import Carousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

interface Props {}
const options: EmblaOptionsType = {};
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Testimonials: NextPage<Props> = ({}) => {
  return <div><Carousel slides={SLIDES} options={options}/></div>
}

export default Testimonials