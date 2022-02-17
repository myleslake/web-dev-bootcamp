// Section 1
const btnAddMovie = document.querySelector("#btnAddMovie");
btnAddMovie.addEventListener("click", () => {
    movies = document.querySelector("#movies");
    newMovie = document.querySelector("#movie");

    if (newMovie.value !== "") {
        const newLi = document.createElement('li');
        newLi.innerText = newMovie.value;
        newMovie.value = "";

        movies.append(newLi);
    }
});

const title = document.querySelector("#first h2");
const divChangeTitle = document.querySelector("#change-title");

title.addEventListener("click", e => {
    divChangeTitle.classList.toggle("hide");
});

const btnChangeTitle = document.querySelector("#btnChangeTitle");

btnChangeTitle.addEventListener("click", () => {
    divChangeTitle.classList.toggle("hide");
});

const newTitle = document.querySelector("#new-title");

newTitle.addEventListener("input", e => {
    newText = e.target.value;
    title.innerText = newText;
})

const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
    e.target.nodeName === 'LI' && e.target.remove();
});

// Section 2 -------------------------------------------------
const colors = [
    "Red",
    "White",
    "Blue",
    "Gray",
    "Charcoal",
    "Green",
    "Yellow",
    "Purple",
    "Pink"
];

const listColors = document.createElement("ul");
listColors.id = "list-colors";

for (let color of colors) {
    const li = document.createElement("li");
    li.innerText = color;
    listColors.append(li);
}

const section2 = document.querySelector("#second");
section2.appendChild(listColors);

const btnMap = document.querySelector("#btnMap");
const btnFilter = document.querySelector("#btnFilter");
const btnReduce = document.querySelector("#btnReduce");

btnMap.addEventListener('click', () => {
    // const newColors = colors.map(color => {
    //     return `I love me some ${color}`;
    // });
    const newColors = colors.map(color => `I love me some ${color}`);
    console.log(newColors);
});

// 3 different ways to write the callback function
btnFilter.addEventListener('click', () => {
    const newColors = colors.filter(x => x === "Red" || x.toLowerCase().includes("p"));
    // const newColors = colors.filter(color => {
    //     return color === "Red"
    //         || color.toLowerCase().includes("p");
    // });
    // const newColors = colors.filter(function (color) {
    //     return color === "Red"
    //         || color.toLowerCase().includes("p");
    // });

    console.log(newColors);
});

const numbers = [3, 5, 7, 9, 11];

btnReduce.addEventListener('click', () => {
    let sum = numbers.reduce((total, current) => {
        return total + current;
    });
    console.log(sum);
});

const btnEvery = document.querySelector("#btnEvery");
const btnSome = document.querySelector("#btnSome");

btnEvery.addEventListener('click', () => {
    const hasOnlyOddNumbers =
        numbers.every(n => n % 2 === 1);
    console.log(hasOnlyOddNumbers);
});

btnSome.addEventListener('click', () => {
    const hasNumberSeven =
        numbers.some(n => n === 7);
    console.log(hasNumberSeven);
});







