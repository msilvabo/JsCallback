import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element) =>{
    const id1 = '5d86371f9f80b591f499df32';
    console.log('inicio');
    
    findHero(id1)
        .then( name => {
            console.log(name);
            element.innerHTML = name; 
        })
        .catch(err => element.innerHTML = `ERROR: ${err}`);
    console.log('fin');    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) =>{
    const hero = heroes.find( hero => hero.id === id);
    if (!hero) throw new Error(`Hero with id  ${id}  not found` );
    return hero.name;
}