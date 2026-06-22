const body = document.querySelector("body");
const formDiv = document.querySelector(".form-div");
const form = document.querySelector("form");
const formTitle = document.querySelector(".form-title");
const formBtn = document.querySelector(".add");
const closeBtn = document.querySelector("#form-close");
const createBtn = document.querySelector("#new-task-btn");

const themeIcon = document.querySelector("#theme-icon");

const taskCards = document.querySelector(".task-cards");
// const deleteBtn = document.querySelector("#delete");


const tasksArr = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = -1;

let displayUI = () => {
    taskCards.innerHTML = "";

    tasksArr.forEach((e, index) => {
        taskCards.innerHTML += `
        <div class="card"  data-id="${e.id}" data-status="${e.status}" data-category="${e.category}">
            <h2 class="card-title">${e.title}</h2>
            <div class="span-div">
                <span id="category">${e.category}</span>
                <span id="status" class="${(e.status === 'done') ? 'green' : ''}">${e.status}</span>
            </div>
            <p>${e.description}</p>
            <div class="btns-div">
                <button onclick="completeTask('${index}')" id="complete">Complete</button>
                <button onclick="editTask('${e.id}')" id="edit">Update</button>
                <button onclick="deleteTask('${e.id}')" id="delete">Delete</button>
            </div>
        </div>`
    })
};

displayUI();


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    // const title = document.querySelector("#title").value;
    const description = e.target[1].value;
    const category = e.target[2].value;

    if (title.trim() === "" || category == "select category") { // html value in <select>
        alert("Title and Category cannot be empty!");
        return;
    }

    let taskObj = {
        // id: String(Date.now()), // **
        title,
        description,
        category,
        // status: "pending"
    }


    if (editIndex != -1) {    // editing old task
        tasksArr[editIndex] = {
            id: tasksArr[editIndex].id,
            ...taskObj,
            status: tasksArr[editIndex].status,
        };

        editIndex = -1;
        formTitle.textContent = "Create new task";
        formBtn.textContent = "Add";
    }
    else {   // creating new task
        tasksArr.push({ id: String(Date.now()), ...taskObj, status: "pending" });
    }

    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    displayUI();
    // console.log(tasksArr);


    const titleInput = form[0];
    console.log(`.value => ${titleInput.value}`);
    console.log(`.getAttribute => ${titleInput.getAttribute("value")}`);
    /*
    value property: shows the current live value from the javascript.
    
    getAttribute("value"): shows the original html value attribute, that is null.
    */



    form.reset();
    formDiv.style.display = "none";

})

closeBtn.addEventListener("click", () => {
    formDiv.style.display = "none";

    if (editIndex != -1) {    // if update is cancelled
        editIndex = -1;
        formTitle.textContent = "Create new task";
        formBtn.textContent = "Add";
        // form[0].value = "";
        // form[1].value = "";
        // form[2].value = "Select Category";
        form.reset();
    }
})


createBtn.addEventListener("click", () => {
    formDiv.style.display = "flex";
});

let completeTask = (index) => {
    tasksArr[index].status = "done";
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    displayUI();
}

let editTask = (id) => {

    formDiv.style.display = 'flex';
    editIndex = tasksArr.findIndex((e) => e.id === id);

    form[0].value = tasksArr[editIndex].title;
    form[1].value = tasksArr[editIndex].description;
    form[2].value = tasksArr[editIndex].category;

    formTitle.textContent = "Update task";
    formBtn.textContent = "Update";
}

let deleteTask = (id) => {
    let index = tasksArr.findIndex((e) => e.id === id);
    // if(index === -1) return;
    tasksArr.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    displayUI();
}

// ==============

themeIcon.addEventListener("click", () => {
    if (themeIcon.getAttribute("src") === "sun.png") {
        themeIcon.setAttribute("src", "moon.png");
    } else {
        themeIcon.setAttribute("src", "sun.png");
    }

    body.classList.toggle("dark");
    // console.log(body.classList);
})


// Event Delegation
taskCards.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    
    if (!card) return;
    const title = card.querySelector(".card-title")

    console.log("You clicked a card:", title.textContent, card.title, card.dataset.id, card.dataset.category, card.dataset.status);
});


// ===============

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", () => {
    console.log("grandparent");
}, { capture: true })

parent.addEventListener("click", () => {
    console.log("parent");
}, { capture: true })

child.addEventListener("click", () => {
    console.log("child");
})


