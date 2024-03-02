function addbtn(){
    let title = document.getElementById('text').value;
    let description = document.getElementById('description').value;

    let displaytext =  title  + "&nbsp; &nbsp; &nbsp; &nbsp;" + description;


    document.getElementById('display').innerHTML = displaytext;

}


