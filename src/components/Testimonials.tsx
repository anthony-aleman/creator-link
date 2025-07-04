import { NextPage } from 'next'
import Carousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const options: EmblaOptionsType = {};
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Testimonials: NextPage = ({ }) => {
  return (
    <div className='text-center py-6'>
      <h2 className='text-3xl font-bold mb-4'>Testimonials</h2>
      <Carousel slides={SLIDES} options={options} />
    </div>
  )

}

export default Testimonials


