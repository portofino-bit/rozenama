import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 xl:w-[1110px] sm:w-[393px] h-[54px] mt-32 xl:mt-16 '>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1>الفئات</h1>
        <p>
.اكتشف فئات متنوعة تناسب جميع احتياجات منزلك وأذواقك
</p>
      </div>
      <div className='grid grid-cols-3 xl:grid xl:grid-cols-6 gap-4 items-center justify-center'>

        
      <div>
        <Link href="/">  <Image src="/img/1.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
      
         المطبخ
        </div>
        
        <div>
          <Link href="/">      <Image src="/img/2.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
  
         غرفةالنوم
        </div>
        
        <div>
        <Link href="/">    <Image src="/img/3.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
    
         غرفة الطعام
        </div>
        
        <div>
        <Link href="/">  <Image src="/img/4.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
      
         أثاث خارجي
        </div>
        
        <div>
        <Link href="/"><Image src="/img/5.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
        
         الحمّام
        </div>
        
        <div>
        <Link href="/">      <Image src="/img/6.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
  
         غرفة الجلوس
        </div>


      </div>
    </div>
  )
}

export default Categories
