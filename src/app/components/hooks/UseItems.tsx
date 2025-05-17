'use client'
import React, { createContext, useState } from 'react';
import {CardProps} from '../LatestProducts';

const UseItems = () => {
    const [items, setItems] = useState<CardProps>();

    type ActiveSectionContextType = {
  items:CardProps;
   setItems: React.Dispatch<React.SetStateAction<CardProps>>;
};

 const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

  return (
    
       <ActiveSectionContext.Provider
      value={{
       items, setItems,
      }}
    ></ActiveSectionContext.Provider>
  )
}

export default UseItems
