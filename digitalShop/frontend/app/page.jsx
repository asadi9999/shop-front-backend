'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import '../../css/Content.css';

function Content() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      <div className="wrapper grid md:grid-cols-4 gap-0">
        <div className="sidebar-left bg-[#212223] mt-1">
          <h1>Sidebar left</h1>
          <p className=' text-justify p-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro magni nemo possimus, laborum corrupti amet illo architecto
            unde et ab impedit autem iste animi error cumque nihil asperiores ad quae incidunt officiis rem
            earum! Doloribus consequatur illum molestiae a! Eligendi recusandae ex aliquam perferendis nulla explicabo minima voluptas nobis.
          </p>
        </div>
        <div className="main md:col-span-3 p-3">
          <h1>products</h1>
          <div className="grid lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <div className="card rounded-md border-2 flex flex-col justify-center" key={product._id}>
                <div className=" w-full">
                  <img src={`data:${product.image.contentType};base64,${Buffer.from(product.image.data).toString('base64')}`} alt={product.name} width={250} height={150} className='object-cover w-full sm:h-48 overflow-hidden ' />
                </div>
                <div className="m-4 p-2">
                  <span>{product.name}</span>
                  <span className="block text-sm text-gray-400">Company: {product.company}</span>
                </div>
                <div className="badge p-2">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </i>
                  <span className=''>{product.name}</span>
                </div>
                <div className=" flex justify-center px-2 py-1">
                  <button className=' w-[10rem] bg-orange-400 px-3 py-2 hover:bg-orange-500 transition-all duration-300 rounded'>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
