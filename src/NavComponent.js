import { NavLink } from "react-router-dom";

/** NavComponent 
 * 
 * state: 
 * 
 * props: dogs
 */

const NavComponent = ( {dogs} ) => {
    
    const links = dogs.map(dog => (
        <NavLink 
            key={dog.name}
            to={`/dogs/${dog.name}`}
        >
        </NavLink>
    ));
    
    
    return (
        <nav>
            <NavLink to='/dogs'>
                Home
            </NavLink>
            {links}
        </nav>
    )
}

export default NavComponent;