"use strict";
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const closeBtns = document.getElementsByClassName("close");
for (i = 0; i < closeBtns.length; i++) {
    let closeBtn = closeBtns[i];
    closeBtn.addEventListener('click', function (ev) {
        const target = ev.target;
        const div = target.parentElement;
        if (div) {
            div.style.display = "none";
        }
    }, false);
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        const target = ev.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const input = document.getElementById("myInput");
    const inputValue = input.value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        const myUL = document.getElementById("myUL");
        if (myUL) {
            myUL.appendChild(li);
        }
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {
        li.style.display = "none";
    };
}
