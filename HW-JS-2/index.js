const divCollection = document.querySelectorAll("div");
var rootElement = document.getElementsByClassName("first")[0];
function reset() {
    divCollection.forEach((node) => {
      node.classList.remove("odd");
      node.classList.remove("even");
    });
  }

function paint(selectedNode) {
    for (let index = 0; index < divCollection.length; index++) {
        const node = divCollection[index];
        if(selectedNode.classList[0] === node.classList[0]) {
            const colorClass = index % 2 === 0 ?  'odd' : 'even'
            node.classList.add(colorClass)
            return;
        } 
    }
}
rootElement.addEventListener("click", (event) => {
    reset();
    paint(event.target)
});
