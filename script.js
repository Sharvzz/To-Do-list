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
        taskItem.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>


        `;
        taskList.appendChild(taskItem);
        // taskItem.textContent = taskText;
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