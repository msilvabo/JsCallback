/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async ( element) =>{

 console.time('Start');
 element.innerHTML = 'loading...';   
//  const value1 = await slowPromise();
//  const value2 = await mediumPromise();
//  const value3 = await fastPromise();
 
const [value1,value2,value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
]);
 element.innerHTML = `
      value1: ${value1} <br> 
      value2: ${value2} <br> 
      value3: ${value3} <br> 
 `;
 console.timeEnd('Start');    
 
}

const slowPromise = async() => new Promise( resolve => {
    setTimeout(() => {
        resolve('SlowPromise');
    }, 2000);
});
const mediumPromise = async() => new Promise( resolve => {
    setTimeout(() => {
        resolve('MediumPromise');
    }, 1500);
});
const fastPromise = async() => new Promise( resolve => {
    setTimeout(() => {
        resolve('FastPromise');
    }, 1000);
});