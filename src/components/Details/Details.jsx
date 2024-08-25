import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Globalvar } from '../../context/Index';

const Details = () => {
  const { id } = useParams();
  const { recipedata, setrecipedata, API,handlewhishlist,whishlist } = useContext(Globalvar);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getdata() {
      try {
        const res = await fetch(`${API}/${id}`);
        const data = await res.json();
        if (data.data) {
          setrecipedata(data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getdata();
  }, [id, setrecipedata, API]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-auto my-8 px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-auto lg:h-96 overflow-hidden">
              <img src={recipedata.recipe.image_url} alt={recipedata.recipe.title} className="object-cover w-full h-full hover:scale-125 duration-1000" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4">{recipedata.recipe.title}</h1>
              <p className="text-gray-600 mb-4 text-xl">{recipedata.recipe.publisher}</p>
              <div className="button">
                <button onClick={() => handlewhishlist(recipedata.recipe)} className="bg-cyan-500 px-4 py-2 text-white rounded hover:bg-gray-600 duration-300">
                  {whishlist.findIndex((item) => item.id === recipedata.recipe.id) !== -1 ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
         
              </div>
              <span className='text-2xl font-semibold text-black mt-5'>Ingredients</span>
          <ul className='flex flex-col gap3'>

            {recipedata.recipe.ingredients.map((data)=>(
                <li ><span>{data.quantity}</span> <span>{data.unit}</span><span>{data.description}</span></li>
                
            ))}
          </ul>
            </div>
          
          </div>
          
        </div>
       

      )}
    </>
  );
};

export default Details;
