import DOMNodeCollection from './dom_node_collection.js'; 

function $l (selector) {
  if (selector instanceof HTMLElement) {
    const htmlArgs = Array.from(document.querySelectorAll(selector));
    // return new DOMNodeCollection(htmlArgs);
    return new DOMNodeCollection([selector]); 
  } else {
    const htmlArgs = Array.from(document.querySelectorAll(selector));
    let cssArgs = Array.from(document.getElementsByClassName(selector)); 
    return new DOMNodeCollection(cssArgs); 
  }
}

window.$l = $l; 

