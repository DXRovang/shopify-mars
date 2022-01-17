const Image = ({page}) => {
  return ( 
    <div>
      in Image
      {page.photos ? page.photos.map(photo=>(
        <div key={photo.id}>
           <img src={photo.img_src}/>
        </div>
      )):null}
    </div>
   );
}
 
export default Image;