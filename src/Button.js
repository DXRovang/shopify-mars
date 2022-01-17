import {useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from "@fortawesome/free-solid-svg-icons"

const Button = () => {
  const [heart, setHeart] = useState(false)

  const changeHeart = () =>{
    setHeart(!heart)
  }

  const element = <FontAwesomeIcon icon={faHeart} />

  return ( 
    <div>
      
      <button onClick={changeHeart}  
      className={heart ? "red": "grey"}
      >{element}</button>

    </div>
   );
}
 
export default Button;