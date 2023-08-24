let form = document.getElementById("tudo-form");
console.log(form);   //store whole fomr
let listadder = document.querySelector(".todos");
console.log(listadder); //store a div to add list of task
let input1 = document.querySelector("#one");
console.log(input1); // store input taker 

form.addEventListener("submit" , (e) => {
   let task = input1.value; //letting task would be value of input
   e.preventDefault();
  
   if (task ==''){
    alert("task can not be empty");
    return;
   }//but if task is null show alert
   else {
    let tododiv=document.createElement("div");
    tododiv.classList.add("todo");//create anotherdiv 
    listadder.appendChild(tododiv);//div inside of todo div of html
    
    let todocontent=document.createElement("div");
    todocontent.classList.add("todo-content");//create anotherdiv 
    tododiv.appendChild(todocontent);//div inside of todo div of html
    
    let todoinput=document.createElement("input");
    todoinput.classList.add("text");
    todoinput.type="text";
    todoinput.value=task;
    todoinput.setAttribute("readonly","readonly");
    todocontent.appendChild(todoinput);

    let todoaction=document.createElement("div");
    todoaction.classList.add("todo-action");
    tododiv.appendChild(todoaction);

    let deletebutton=document.createElement("button");
    deletebutton.innerHTML = "Delete";
    deletebutton.classList.add("delete");
   
    let editbutton=document.createElement("button");
    editbutton.innerHTML = "Edit";
    editbutton.classList.add("edit");

    let donebutton=document.createElement("button");
    donebutton.innerHTML="Done";
    donebutton.classList.add("Done");

    todoaction.appendChild(editbutton);
    todoaction.appendChild(deletebutton);
    todoaction.appendChild(donebutton);

    deletebutton.addEventListener("click" , () => {
        tododiv.remove(todocontent);
    })

    editbutton.addEventListener("click" , () => {
        if(editbutton.innerText == "save changes"){
            todoinput.setAttribute("readonly" ,"readonly");
            editbutton.innerText = "Edit";
        }
        else{
            todoinput.removeAttribute("readonly");
            editbutton.innerText = "save";
        }
    })
    donebutton.addEventListener("click" , () => {
        todoinput.style.textDecoration="line-through";
        editbutton.remove();
        donebutton.remove();
    })
     

    input1.value="";
    
    }
})  
