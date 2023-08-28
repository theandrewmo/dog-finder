import { Navigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';

/** DogDetails -
 * 
 * state:
 * 
 * props: dog
 * 
 */

const DogDetails = ({ dog }) => {
    
    if (!dog) return <Navigate to='/dogs' />
    
    return (
        <>
            <h1>{dog.name}</h1>
            <h2>{dog.age}</h2>
            <img src={dog.src} alt='dog'/>
            {dog.facts.map(fact => (<p key={uuid()}>{fact}</p>))}
        </>
    )
}

export default DogDetails;