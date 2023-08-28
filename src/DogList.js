import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

/** DogList - 
 * 
 * state: 
 * 
 * props: dogs
 * 
 */

const DogList = ( {dogs} ) => {

    return (
        <>
        {dogs.map(dog => (
            <Link key={uuid()}
                to={`/dogs/${dog.name}`}
            >
                <div className='dog-card'> 
                    <h4>{dog.name}</h4>
                    <img className='dog' src={dog.src} alt='dog'/>
                </div>
            </Link>
        ))}
        </>
    )
}

export default DogList;