import { useState, useEffect } from "react";

const Images = () => {

const [images, setImages] = useState([])
useEffect(()=>{
  fetch('https://api.nasa.gov/planetary/apod?api_key=vQhUdNX4zTKwT9WbUi3obFnHgWVxIiqd22jkjiyR')
  .then(r=>r.json())
  .then(data=>(
    setImages(data)
  ))
}, [])

  return ( 
    <div>
      in Images
    </div>
   );
}
 
export default Images;