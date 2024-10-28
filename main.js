import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { EnviromentsComponent } from './src/concepts/01-enviroments';
import { callbackComponent } from './src/concepts/02-callbacks';
import { promiseComponent } from './src/concepts/03-promises';
import { promesaRaceComponent } from './src/concepts/04 promise-race';
import { asyncComponent } from './src/concepts/05-async';
import { asyncAwaitComponent } from './src/concepts/06-async-await';
import { asyncAwait2Component } from './src/concepts/07-async-await';
import { forAwaitComponent } from './src/concepts/08-for-await';
import { generatorFunctionComponent } from './src/concepts/09-generator-function';
import { generatorAsyncComponent } from './src/concepts/10-generator-async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
    </p>
  </div>
`;

const element = document.querySelector('.card');

// EnviromentsComponent(element);
// callbackComponent(element);
// promiseComponent(element);
// promesaRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwait2Component(element);
// forAwaitComponent(element);
// generatorFunctionComponent(element);
generatorAsyncComponent(element);