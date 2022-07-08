import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import '../assets/css/gifGrid.css'

export const GifGrid = ({category, removeCategory, index}) => {
  const {imagenes, loading} = useFetchGif(category);

  const handleRemove = ()=>{
      removeCategory(index);
  }

  return (
    <>
      {category && (
          <div className="category-title">
            <h3>{category}</h3>
            <button className="btn-eliminar" onClick={handleRemove}>X</button>
          </div>
        )}
        

        <div className="card-grid">
         {loading ? ( <h3>Cargando...</h3> 
         ) : (
          imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
         )}
        </div>
       
    </>
  );
};
