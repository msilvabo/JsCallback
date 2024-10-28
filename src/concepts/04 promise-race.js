/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promesaRaceComponent = ( element) =>{

    element.innerHTML = 'loading...';
    const renderValue = (value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then((value) =>{
        renderValue(value);
    });
}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('SlowPromise');
    }, 2000);
});
const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('MediumPromise');
    }, 2000);
});
const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('FastPromise');
    }, 3500);
});