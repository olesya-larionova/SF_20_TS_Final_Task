// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i: number;
for (i = 0; i < myNodelist.length; i++) {
    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeBtns: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
for (i = 0; i < closeBtns.length; i++) {
    let closeBtn: HTMLElement = <HTMLElement>closeBtns[i];
    closeBtn.addEventListener ('click', function (ev: MouseEvent): void {
        const target: HTMLElement = <HTMLElement>ev.target;
        const div: HTMLElement = <HTMLElement>target.parentElement;
        if (div) {
            div.style.display = "none";
        }
    }, false)
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev: MouseEvent): void {
        const target: HTMLElement = <HTMLElement> ev.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
    const li: HTMLLIElement = document.createElement("li");
    const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
    const inputValue: string = input.value;
    const t: Text = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        const myUL: HTMLElement | null = document.getElementById("myUL");
        if (myUL) {
            myUL.appendChild(li);
        }
    }
    input.value = "";

    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {
        li.style.display = "none";
    }
}