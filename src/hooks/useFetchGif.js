import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {
    
    const [imagenes, setImagenes] = useState ([]);
    const [loading, setLoading] = useState(true);
  
    const getImages = async ()=>{
      const newImages = await getGifs(category);
      setImagenes(newImages);
      setLoading(false)
    }
  
    useEffect(() => {
      getImages();
    },[])
  
  return {
        imagenes,
        loading,
    };
}
