import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

/** FindDog 
 * 
 * state: 
 * 
 * props:  dogs
*/

const FindDog = ( { dogs }) => {
   
    const { name } = useParams();

    if(name) {
        const currDog = dogs.find(
            dog=> dog.name === name
        )
        return <DogDetails dog={currDog} />
    }
   
    return null;
}

export default FindDog;