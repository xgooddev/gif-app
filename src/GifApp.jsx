import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Modal } from './components/Modal';

export const GifApp = () => {
  const [categories, setCategories] = useState(['']);
  
  const handleAddCategory = (value)=> {;
    setCategories([value, ...categories]);
  
};
const handleRemove = index => {
  const value = [...categories];
  value.splice(index, 1);
  setCategories(value);


};

const handleRemoveAll = ()=>{
    setCategories(['']);

}
return (
  <>
        <header className='header'>
        <h1>GiffApp</h1>
        <AddCategory addCategory={handleAddCategory} />
        <button className='btn-reset' onClick={handleRemoveAll}>Close All</button>
        </header>
        
  {
        categories.map((category, index) => (
        <GifGrid 
        key={category} 
        category={category} 
        removeCategory={handleRemove} 
        index={index}
      />)
      
    )}
    
  </>
  
);
};
