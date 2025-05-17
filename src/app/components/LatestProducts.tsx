
import Image from 'next/image';
import Link from 'next/link';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import UseItems from './hooks/UseItems';

// Define the shape of the data


export interface CardProps { 
   id: string;
  name: string;
  description: string;
  primary_image: string;
}

const Card: React.FC<CardProps> = ( item ) => {
 

  return (
    <div className="mx-2 p-4 min-w-[200px] bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.name}</p>
     
         
        
          <img   //should be Image by Nextjs
            src={`${item.primary_image}`}
            alt={`${item.name}`}
            width={500}
            height={300}
          />
        
      

    </div>
  );
};

const HorizontalMenu: React.FC = () => {
  const [items, setItems] = UseItems<CardProps[]>([]);

    const fetchData = async () => {
      try {
        // Replace with your real API
        const response = await fetch('https://store.rozenama.com/api/sandbox/cats');
        const data = await response.json();
       

        const mappedItems: CardProps[] = data.map((item: any) => ({
          id: item.id.toString(),
          title: item.name,
          description: item.body,
        }));

        setItems(mappedItems);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchData();
  
  console.log(items);
  return (
    <div className="p-4 bg-gray-100 w-[400px] ">
      <h1 className="text-xl font-bold mb-4">Horizontal Scroll Menu</h1>
      <Link href="/">عرض الكل</Link>
      {/* <div className="scrollbar-hide">   cant hide the scroll bar */}

      <ScrollMenu scrollContainerClassName='scrollbar-hide'>
        {items.map((item) => (
          <div className="overflow-x-auto scrollbar-hide" key={item.id}>
            <Card key={item.id} id={item.id} name={item.name} description={item.description} primary_image={item.primary_image}/>
          </div>
        ))}
      </ScrollMenu>
      
    </div>
  );
};

export default HorizontalMenu;
