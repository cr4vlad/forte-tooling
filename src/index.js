import './style.css';
import Svg from './hello-world.svg'

const p = document.createElement("p");
p.innerHTML = 'Hello world!'
p.classList.add('hello');
document.body.appendChild(p);
const svg = new Image();
svg.src = Svg;
document.body.appendChild(svg);