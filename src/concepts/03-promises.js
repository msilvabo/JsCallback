import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element) =>{

    const renderHero = (avenger) =>{
        element.innerHTML = avenger.name;
    }

    const renderTwoHeros = (avenger1, avenger2) =>{
        element.innerHTML =     `<h3>${avenger1.name}</h3>
                                 <h3>${avenger2.name}</h3>`;
    }

    const renderError = (error) =>{
        element.innerHTML = `<h2>Error</h2><h3 style= 'color:red;'> ${error}<h3>`;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371f1efebc31def272e2';

    let hero1, hero2;

    //! Promise form 1

    // findHero(id1)
    //     .then( (hero1) => {
    //         findHero(id2)
    //             .then( (hero2) =>{
    //                 renderTwoHeros(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch( renderError );
    

    //! Promise form 2
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero => {
    //         hero2 = hero;
    //         renderTwoHeros(hero1,hero2);
    //     })
    //     .catch(renderError);

    //! Promise form 3 - promesas no dependientes entre si
    Promise.all([
        findHero(id1),
        findHero(id2)
            ]).then( ([hero1, hero2]) => renderTwoHeros(hero1,hero2))
            .catch(renderError);    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>} Promise}
 */
const findHero = (id) => {
    return new Promise( (resolve, reject) =>{
        const hero = heroes.find(hero => hero.id === id);
        if (hero){
           resolve(hero);
           return;
        } 
        
        reject(`Hero with id ${id} not found`);
    });
}