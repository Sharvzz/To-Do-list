document.addEventListener('DOMContentLoaded',()=>{
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-image');

    const toggleEmptyImage = () =>{
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
    }

    const addTask = (event) =>{
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText){
            return;
        }
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        toggleEmptyImage();
    }

    addTaskBtn.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',(event)=>{    
        if(event.key === 'Enter'){
            addTask(event);
        }
    })

})