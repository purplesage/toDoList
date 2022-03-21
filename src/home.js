
const homeContentDefault = () => {

    let anchorDiv = document.createElement('div');
    anchorDiv.classList = "anchor-div";

    let todoUl = document.createElement('ul');
    todoUl.setAttribute('id', 'todo-ul');
    todoUl.classList = "todo-ul-class";
    
    let ulHeader = document.createElement('li');
    ulHeader.innerHTML = "<h3>home</h3><h3>Due Date</h3>";
    ulHeader.classList = "ul-header";
    todoUl.appendChild(ulHeader);

    let addTaskButton = document.createElement('div');
    addTaskButton.textContent = "Add Task";
    addTaskButton.classList = "normal-button";
    todoUl.appendChild(addTaskButton);

    addTaskButton.addEventListener('click',  () => {
        addTaskButton.classList = 'todo-settings-button';
        addTaskButton.innerHTML = "<div><p>title: stuff</p><p>details: some more stuff</p><button>Due Date</button><button>project Name</button></div>";
        let svgButtons = document.createElement('div');
        svgButtons.innerHTML = "<p>svg1 place holder</p><p>svg2 placeholder</p>";
        addTaskButton.appendChild(svgButtons);
    });

    anchorDiv.appendChild(todoUl);

    

    const addContent = (elementToAdd) => {
        todoUl.appendChild(elementToAdd);
    }

    return {anchorDiv, addContent};

};

const homeContent = homeContentDefault();


export {homeContent};


























