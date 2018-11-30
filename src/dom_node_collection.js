class DOMNodeCollection {
    constructor(nodes) {
      this.nodes = nodes;
    } 
      
    html(str) {
      if (str === 'string') {
        for (let i = 0; i < this.nodes.length; i += 1) {
          let node = this.nodes[i];
          node.innerHTML = html;  
        }
      } else {
        return this.nodes[0].innerHTML; 
      }
    }
    
    empty() {
      
    }
    
}





export default DOMNodeCollection;