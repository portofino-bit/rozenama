import Link from 'next/link';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import React from 'react'
import Get from '../lib/api';

const LatestProducts = () => {

   const {data, error} =await Get();

  return (
     <div className="p-4 bg-gray-100 w-[400px] ">
      <h1 className="text-xl font-bold mb-4">Horizontal Scroll Menu</h1>
      <Link href="/">عرض الكل</Link>

        <ScrollMenu scrollContainerClassName='scrollbar-hide'>
        {data && data.map((item) => (
          <div className="overflow-x-auto scrollbar-hide" key={item.id}>
            <Card key={item.id} id={item.id} name={item.name} primary_image={item.primary_image}/>
          </div>
        ))}
      </ScrollMenu>
      

      </div>
  )
}

export default LatestProducts
