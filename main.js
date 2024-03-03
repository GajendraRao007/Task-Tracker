function addbtn() {
    let title = document.getElementById('text').value;
    let description = document.getElementById('description').value;

    if (title && description) {
        let taskElement = document.getElementById('display');

        taskElement.innerHTML += `
            <div class="task">
                <span>Title: ${title}</span><br>
                <span>Description: ${description}</span>
                <button class="delete-button" onclick="removeTask(this.parentNode)">Delete</button>
            </div>
        `;

        document.getElementById('text').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill out all fields');
    }
}

function removeTask(task) {
    task.remove();
}
