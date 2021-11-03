import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import './App.css';

import LazyLoading from "./components/LazyLoading"

const Image = React.lazy(() => import('./components/Image'));

const App = () => {

  const [imageData, setImageData] = useState([])

  useEffect(() => {

    const fetchImage = async () => {
      const { data } = await axios.get("https://food-pagination-default-rtdb.asia-southeast1.firebasedatabase.app/foods.json");
      
      let copy = [...data,...data,...data,...data,...data,...data,...data]

      setImageData(copy);
    }

    fetchImage();

  }, [])

  return (
    <Suspense fallback={<LazyLoading />}>
      <div className="container">
        <div className="image-gallery">
          {
            imageData?.map((item, index) => {
              return <Image item={item} key={index} />
            })}
        </div>
      </div>
    </Suspense>
  );
}

export default App;
