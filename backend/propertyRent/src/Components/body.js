import { useEffect, useState } from 'react';
import '../Home.css'
import ImgMediaCard from './ImageCardComponent';
import * as React from 'react';
import axios from 'axios';
import { useCategoryState } from '../Context/CategoryProvider';

const Body = (props) => {
  const [products, setProducts] = useState([]);

  const [allCategories, setAllCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/apiRoutes/fetchCategories');
      setAllCategories(response.data.data);
    } catch {
      alert('something went wrong')
    }
  }


  const fetchAllProducts = async () => {

    try {

      const response = await axios.get('/api/apiRoutes/products')
      setProducts(response.data.data);
      console.log(products);

    } catch (err) {
      alert('error in fetching the products')
    }

  }

  const {categoySelected} = useCategoryState();

  useEffect(() => {
    fetchAllProducts();
    fetchCategories();
  }, [])

  function scrollToSection() {
    const targetSectionId = categoySelected;
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("Target Section not found.");
    }
  }
  

  useEffect(() => {
    scrollToSection()
  }, [categoySelected])
  

  return (

    <div className='whole_container'>
      <div className="Body_Outer">
        <div className="Body_Inner  ">
          {allCategories.map((category, idx) => (
            <div key={idx} style={{ width: '100%'}}>
              
              {products.find(product => product.category === category.name) && 
                <img style={{ width: '100%' }} src={category.offer} alt='Loading...'/>
                }
              {products.find(product => product.category === category.name) && <section id={category.name}><div style={{width: '100%', backgroundColor: 'black'}}><text className="textStyle">{category.name}</text></div></section>}

              <div className='displayCards' >
                {products
                  .filter((product) => product.category === category.name)
                  .map((product, i) => (
                    <ImgMediaCard key={i} product={product} />
                  ))}

              </div>

            </div>
          ))}
        </div>
        <div>
        </div>
      </div>
    </div>



  )
}

export default Body;
