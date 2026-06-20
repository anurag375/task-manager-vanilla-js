const formDiv = document.querySelector(".form-div");
const form = document.querySelector("form");
const addBtn = document.querySelector("#add");
const closeBtn = document.querySelector("#form-close");
const createBtn = document.querySelector("#new-task-btn");

const taskCards = document.querySelector(".task-cards");
// const deleteBtn = document.querySelector("#delete");


const tasksArr = JSON.parse(localStorage.getItem("tasks")) || [];

let displayUI = () => {
    taskCards.innerHTML = "";

    tasksArr.forEach((e, index) => {
        taskCards.innerHTML += `
        <div class="card">
            <h2>${e.title}</h2>
            <div class="span-div">
                <span id="category">${e.category}</span>
                <span id="status">${e.status}</span>
            </div>
            <p>${e.description}</p>
            <div class="btns-div">
                <button onclick="markDone('${index}')" id="complete">Complete</button>
                <button onclick="" id="update">Update</button>
                <button onclick="deleteTask('${e.id}')" id="delete">Delete</button>
            </div>
        </div>`
    })
};

displayUI();

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const title = e.target[0].value;
    // const title = document.querySelector("#title").value;
    const description = e.target[1].value;
    const category = e.target[2].value;

    if(title.trim() === "" || category == "Select Category"){
        alert("Title and Category cannot be empty!");
        return;
    }

    let newTaskObj = {
        id: String(Date.now()), // **
        title,
        description,
        category,
        status: "pending"
    }

    tasksArr.push(newTaskObj);
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    // console.log(tasksArr);
    

    displayUI();

    form.reset();
    formDiv.style.display = "none";
})

closeBtn.addEventListener("click", ()=> {
    formDiv.style.display = "none";
})


createBtn.addEventListener("click", () => {
    formDiv.style.display = "flex";
});

let deleteTask = (id) => {
    let index = tasksArr.findIndex((e) => e.id === id);
    // if(index === -1) return;
    tasksArr.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    displayUI();
}

let markDone = (index) => {
    tasksArr[index].status = "done";
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    displayUI();
}