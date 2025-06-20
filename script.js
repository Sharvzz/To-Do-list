document.addEventListener('DOMContentLoaded',()=>{
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-image');

    const toggleEmptyImage = () =>{
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
    }

    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return;
        }
    
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span class="task-text">${taskText}</span>
            <div class="task-buttons">
                <button class="edit-btn">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskItem.remove();
            toggleEmptyImage();
        });
    
        
        taskItem.querySelector('.edit-btn').addEventListener('click', () => {
            const span = taskItem.querySelector('.task-text');
            const currentText = span.textContent;
            
            
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.className = 'edit-input';
    
            
            taskItem.replaceChild(input, span);
            input.focus();
    
            
            const saveEdit = () => {
                const newText = input.value.trim();
                if (newText !== '') {
                    span.textContent = newText;
                }
                taskItem.replaceChild(span, input);
            }
    
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    saveEdit();
                }
            });
    
            input.addEventListener('blur', saveEdit);
        });
    
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