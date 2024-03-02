function addbtn() {
    let title = document.getElementById('text').value;
    let description = document.getElementById('description').value;

    if (title && description) {

        let taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML ="<span>Title: " + title + "</span>" + "<br><span>Description: " + description + "</span>";

    
       let delbtn = document.createElement('Button');
       delbtn.className = "delete-button";
       delbtn.innerText = "Delete";
       delbtn.addEventListener('click', function(){
               taskElement.remove()
       })
          

        taskElement.appendChild(delbtn);

        document.getElementById('display').appendChild(taskElement);

        // console.log(`Title: ${title}, Description: ${description}`);

        document.getElementById('text').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill out all fields');
    }
}
