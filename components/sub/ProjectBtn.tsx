import Image from 'next/image'
import Link from 'next/link'

import { HiArrowRight } from 'react-icons/hi'
const ProjectBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
    <Link href={`/`} className='relative w-[155px] h-[155px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
      <Image
        alt='rounded-text.png'
        src={`/rounded-text.png`}
        width={141}
        height={148}
        className='animate-spin-slow w-full h-full max-w-[140px] max-h-[148px]'
      />
      
      <HiArrowRight className='absolute text-white text-4xl' />
    </Link>
  </div>
  )
}

export default ProjectBtn