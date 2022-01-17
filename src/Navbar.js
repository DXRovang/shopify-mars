const Navbar = () => {
  const myStyle = {
    textAlign: "center"
  }
  return ( 
    <>
    <div className="nav">
      <h1 style={myStyle}>Shopify-Mars: Bringing the Galaxy to You!</h1> 
    </div>
    <div>Brought to you by Nasa's image API</div>
    </>
   );
}
 
export default Navbar;