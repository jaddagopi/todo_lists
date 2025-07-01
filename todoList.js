
let screen = document.querySelector("#screens")
let add = document.querySelector(".add")
let ul = document.querySelector(".list")


function Screening(event){

    if(screen.value == ""){
        alert(" write some sollu there! and after perform whatever u want");
        return;
    }
    event.preventDefault();
  let li = document.createElement("li")
  li.innerText = screen.value;
  ul.appendChild(li)
  
  appendLI(li)
   screen.value = ""
   edit(li)
   
 
}


function appendLI(li){
    let btn = document.createElement("button")
    btn.className = "btn"
    btn.innerText = "delete"
    
    
    li.appendChild(btn)



    del(li,btn)
    
}

function edit(li){   // this is not my own this function only this
    let edit = document.createElement("button")
    li.appendChild(edit)
    edit.innerText = "edit"
    edit.classList = "edit"
    
    edit.addEventListener("click",function(){
        let task = prompt("Edit task:", li.innerText.replace("editdelete", "").trim());
        
            li.firstChild.nodeValue = task; 
        
    });
}


add.addEventListener("click",Screening)

function del(li,btn){
    btn.addEventListener("click",function(){
        btn.parentElement.remove()
    })
}





