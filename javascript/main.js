

let theInput = document.querySelector(".add-task input"),
    addButton = document.querySelector(".add-task .plus"),
    tasksContainer = document.querySelector(".tasks-content"),
    // noTaskMsg = document.querySelector(".no-tasks-message"),
    tasksCount = document.querySelector(".tasks-count span"),
    tasksCompleted = document.querySelector(".tasks-completed span");


window.onload = function () {

    theInput.focus();
};

addButton.onclick = function() {

    if(theInput.value === "") {

        swal("Enter Task!");
    }
    // else if(theInput.value === mainSpan.value) {

    //     console.log("g5r4g");
    // }
    else {

        let noTaskMsg = document.querySelector(".no-tasks-message");

        if (document.body.contains(noTaskMsg)) {

            noTaskMsg.remove();

        };
        

        let mainSpan = document.createElement("span");

        let text = document.createTextNode(theInput.value);

        let deleteElement = document.createElement("span");

        let deleteText = document.createTextNode("Delete");

        mainSpan.appendChild(text);

        mainSpan.className = "task-box";

        deleteElement.appendChild(deleteText);

        deleteElement.className = "delete";

        mainSpan.appendChild(deleteElement);

        tasksContainer.appendChild(mainSpan);

        theInput.value = ""; 
        

    }

    theInput.focus(); 

    calculateTasks();
    
};

document.addEventListener("click", function (e) {


    if (e.target.className == "delete") {


        e.target.parentNode.remove();

        if(tasksContainer.childElementCount == 0) {

            createNoMessage();
        }
    }

    if (e.target.classList.contains("task-box")) {


        e.target.classList.toggle("finished");
    }

    calculateTasks();

}); 

var deleeall = document.querySelector("button");

deleeall.onclick = function () {


    // tasksContainer.remove();
    document.querySelector(".tasks-content").remove();

    createNoMessage();

    // noTaskMsg.textContent;
};

// function dddd() {

// }


function createNoMessage () {

    let msgspan = document.createElement("span");

    let msgText = document.createTextNode("no tasks to show");

    msgspan.appendChild(msgText);

    msgspan.className = "no-tasks-message";

    tasksContainer.appendChild(msgspan);

}

function calculateTasks () {

    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;

    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}



