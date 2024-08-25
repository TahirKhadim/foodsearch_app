import React, { useContext } from 'react';
import { Globalvar } from '../../context/Index';
import { Link } from 'react-router-dom';

const Home = () => {
  const { recipielist } = useContext(Globalvar);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1320px] mx-auto mt-5 overflow-x-hidden">
        {recipielist && recipielist.length > 0 ? (
          recipielist.map((item, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className='rounded-lg overflow-hidden'>
                <img 
                  src={item.image_url} 
                  alt={item.title} 
                  className="w-full h-48 object-cover object-center hover:scale-125 duration-1000" 
                />
              </div>
              <div className="p-4">
                <h2 className="text-cyan-500 font-semibold text-lg">{item.publisher}</h2>
                <h3 className="text-gray-800 font-bold text-xl mt-2 mb-4">{item.title}</h3>
                <Link 
                  to={`/details/${item.id}`} 
                  className="block w-full text-center bg-cyan-400 text-white py-2 rounded-md transition duration-300 hover:bg-cyan-500"
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
         <div className='  col-span-12 place-content-center mx-auto'>
           <h3 className="text-2xl font-bold">
            No data found. Please search something.
          </h3>
         </div>
        )}
      </div>
    </>
  );
};

export default Home;
