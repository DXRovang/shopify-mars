import {useState}from 'react'

const Button = () => {
  const [heart, setHeart] = useState(false)

  const changeHeart = () =>{
    setHeart(!heart)
  }

  return ( 
    <div>
      <button onClick={changeHeart} className={heart ? "red": "grey"}>Like</button>

    </div>
   );
}
 
export default Button;