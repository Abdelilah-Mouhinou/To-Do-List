const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todolist");
const pendingNumb = document.querySelector(".pendingNumb");
const clearbx = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}

showTasks();

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
    addBtn.classList.remove("active");
}

inputBox.addEventListener("keyup", e => {
    if ((e.key === "Enter") || (e.keyCode === 13)) {
        let userData = inputBox.value;
        let getLocalStorage = localStorage.getItem("New Todo");
        if(userData != ''){
            if (getLocalStorage == null){
                listArr = [];
            }
            else{
                listArr = JSON.parse(getLocalStorage);
            }
            listArr.push(userData);
            localStorage.setItem("New Todo",JSON.stringify(listArr));
            showTasks();
            addBtn.classList.remove("active");
        }
    }
});

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    pendingNumb.textContent = listArr.length;
    if(listArr.length>0){
        clearbx.classList.add("activve")
    }
    else{clearbx.classList.remove("activve");}
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += ` <li> <label> <input  type="checkbox" hidden/> <p>${element}</p> </label> <span onclick="deletTask(${index})";><i class="fa-solid fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = '';
}

function deletTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}
function deletAll(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,listArr.length);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}
//THE END