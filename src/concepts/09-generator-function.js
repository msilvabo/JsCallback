/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element) =>{

//  const myGenerator = myFirstGeneratorFunction();
//  console.log(myGenerator.next());

    const genId = idGenerator();

    const boton = document.createElement('button');
    boton.innerText = 'click';
    element.appendChild(boton);
    
    const texto = document.createElement('h3');
    element.appendChild(texto);

    const renderButton = () => {
        const { value} = genId.next();
        boton.innerText = `click ${value}`;
        texto.innerText = `${value}`;
    }

    boton.addEventListener('click', renderButton);
        
}

function* idGenerator(){
    let currentId = 0;
    while (true) {
        yield `2024-${++currentId}`;
    }
}


function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'sin valores';
    yield 'Invalido';
}