import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbackComponent = ( element) =>{

 console.log('callbackComponent');
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f233c9f2425f16916';
    findHero(id1, (error,avenger1) =>{
        // element.innerHTML = avenger?.name || 'No hay heroe';
        if (error) {
            element.innerHTML = error;    
            return;
        }    
        findHero(id2, (error,avenger2) =>{
            if (error) {
                element.innerHTML = error;    
                return;
            }            
            element.innerHTML = `${avenger1.name} / ${avenger2.name}`;
        });
    });
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object) => void} callback 
 */
const findHero = (id, callback) =>{
    const hero = heroes.find( hero => hero.id === id);
    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;  //undefined
    }
    callback(null,hero);
}
