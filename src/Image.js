const Image = ({page}) => {
  return ( 
    <div>
      in Image
      {page.photos.map(photo=>(
        <div className="image">
           <img  key={photo.id} src={photo.img_src} alt="Surface of Mars"/>
           <div>Curiosity Rover - {photo.camera.full_name}</div>
           <div>{photo.earth_date}</div>
        </div>
      ))}
    </div>
   );
}
 
export default Image;