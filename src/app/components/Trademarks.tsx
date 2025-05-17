import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Treademarks = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-70'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1>العلامات التجارية</h1>
        <p>
        .شاهد المنتجات المتعلقة بهذه العلامات التجارية
</p>
      </div>
      <div className='grid grid-cols-4 gap-4 items-center justify-center'>

        
      <div>
        <Link href="/">
        <Image src="/img/Treademarks/1.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
      
        Zapier
        </div>
        
        <div>
          <Link href="/">      <Image src="/img/Treademarks/2.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
  
  Pipedrive
        </div>
        
        <div>
        <Link href="/">    <Image src="/img/Treademarks/3.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
    
    PandaDoc
        </div>
        
        <div>
        <Link href="/">  <Image src="/img/Treademarks/4.png" width={500}
      height={500} alt="Sofa" className='w-full h-auto'/></Link>
      
      Moz
        </div>
        
        


      </div>
    </div>
  )
}

export default Treademarks
