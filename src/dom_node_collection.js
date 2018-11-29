class DOMNodeCollection {
    constructor(args) {
      this.args = args;
    }
  
    
  function domArray() {  
    const domElements = []
    for(let i = 0; i < args.length; i++){
      domElements.push(this[i])
    }
    return domElements;  
  }
}





module.export = DOMNodeCollection;