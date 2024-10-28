/**
 * 
 * @param {HTMLDivElement} element 
 */
export const EnviromentsComponent = ( element) =>{

    const html = `
        Enviroments:<BR>
        Dev: ${import.meta.env.DEV}</BR>
        Prod: ${import.meta.env.PROD}</BR>
        KEY: ${import.meta.env.VITE_API_KEY}</BR>
        URL: ${import.meta.env.VITE_BASE_URL}</BR>
    `;
    element.innerHTML = html;
}