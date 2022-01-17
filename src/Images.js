import { useState, useEffect } from "react";
import Image from './Image'

const Images = () => {

const [images, setImages] = useState([])
useEffect(()=>{
  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=vQhUdNX4zTKwT9WbUi3obFnHgWVxIiqd22jkjiyR')
  .then(r=>r.json())
  .then(data=>{
    setImages(data)
  })
  .catch((err) => console.log(err))
}, [])

  return ( 
    <div>
      {images && <Image page={images}/>}
    </div>
   );
}
 
export default Images;