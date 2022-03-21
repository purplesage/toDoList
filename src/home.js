
const homeContentDefault = () => {

    let contentDiv = document.createElement('ul');
    contentDiv.setAttribute('id', 'todo-ul');
    contentDiv.classList = "todo-ul-class";
    
    let ulHeader = document.createElement('li');
    ulHeader.innerHTML = "<h3>home</h3><h3>Due Date</h3>";
    ulHeader.classList = "ul-header";
    contentDiv.appendChild(ulHeader);

    let addTaskButton = document.createElement('div');
    addTaskButton.textContent = "Add Task";
    addTaskButton.classList = "normal-button";
    contentDiv.appendChild(addTaskButton);

    addTaskButton.addEventListener('click',  () => {
        addTaskButton.classList = 'todo-settings-button';
    });

    

    const addContent = (elementToAdd) => {
        contentDiv.appendChild(elementToAdd);
    }

    return {contentDiv, addContent};

};

const homeContent = homeContentDefault();


export {homeContent};


























