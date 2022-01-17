import { useState } from "react";
import Button from "./Button";

const Image = ({page}) => {



  return ( 
    <div>
      {page.photos ? page.photos.map(photo=>(
        <div key={photo.id}className="image">
           <img   src={photo.img_src} alt="Surface of Mars"/>
           <div>Curiosity Rover - {photo.camera.full_name}</div>
           <div>{photo.earth_date}</div>
           <Button/>
        </div>
      )):null}
    </div>
   );
}
 
export default Image;