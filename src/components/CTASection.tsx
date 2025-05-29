import { NextPage } from 'next';
import Link from 'next/link';
import Button from './Button';

interface Props {}

const CTASection: NextPage<Props> = ({}) => {
  return(
    <section className='text-center py-20 bg-primary'>
      <h2 className='text-3xl font-bold mb-4'>start booking today</h2>
      <p className='mb-6'>Create account</p>
      <Link href="/signup" className="p-4 focus:border-sky-500 border-b-double rounded-xl shadow-sm hover:bg-red-400 ">Sign Up</Link>
    </section>
  )
}

export default CTASection