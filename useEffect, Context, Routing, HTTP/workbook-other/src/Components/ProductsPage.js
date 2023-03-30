import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet} from 'react-router-dom'; 

function ProductsPage() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

  const handleFetchPokemons = () => {
    setLoading(true);
    const request = fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals');
    request
    .then((response) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(response.json());}, 2000)
    })
  })
    .then((data) => {
      setMeals(data);
      console.log('pokemons quantity: ', meals.length);
    }).catch((err) => {
      console.log('catch error: ', err);
    }).finally(() => {
      setLoading(false);
    })
  }
  useEffect(() => {
    handleFetchPokemons();
  }, []);
  const generateId = () => Math.random();

  return (
    <div className='App'>
      React Meals! <br/>
      {loading ? 
        <>Loading data... </> : 
        <div>
            {meals.map((meal, index) => (
          <><Link to={`/products/product-${index+1}`} id={index+1} key={generateId()}>{index+1}- {meal.name}- {meal.description}- {meal.price}- {meal.image}</Link><br/></>
         ))}
         </div>
      }
    </div>
  );
  }
  
  export default ProductsPage;
  