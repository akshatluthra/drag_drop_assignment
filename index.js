let dragindex = 0;
let dropindex = 0;
let clone = "";

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.setData("maindata", e.target.innerText);
}

function drop(e) {
  e.preventDefault();
  clone = e.target.cloneNode(true);
  let data = e.dataTransfer.getData("text");
  let maindata = e.dataTransfer.getData("maindata");
  if (clone.id !== data) {
    let nodelist = document.getElementById("parent").childNodes;
    for (let i = 0; i < nodelist.length; i++) {
      if (nodelist[i].id == data) {
        dragindex = i;
      }

    }

    e.target.innerText = maindata;
    document.getElementById("parent").childNodes[dragindex].innerText = clone.innerText;
    // document.getElementById("parent").childNodes[dragindex] = e.target.innerText;
    // document.getElementById("parent").replaceChild(document.getElementById(data), e.target);

    // document.getElementById("parent").insertBefore(clone, document.getElementById("parent").childNodes[dragindex]);
  }

}


function allowDrop(e) {
  e.preventDefault();
}