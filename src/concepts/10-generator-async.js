import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async ( element) =>{

    const heroGenerator = getHeroGenerator();
    let isFinished = true;
    do{
        const{value,done} = await heroGenerator.next();
        isFinished = done;
        if (isFinished) break;
        element.innerHTML = value;
    } while(!isFinished);
}

async function* getHeroGenerator() {
    for (const hero of heroes){
        await sleep();
        yield hero.name;
    }
    return;
}

const sleep = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve();
        }, 1000);
    })
}