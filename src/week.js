
const weekContent = () => {

    let contentDiv = document.createElement('ul');
    contentDiv.setAttribute('id', 'todo-ul');
    contentDiv.classList = "todo-ul-class";
    
    let ulHeader = document.createElement('li');
    ulHeader.innerHTML = "<h3>home<span>Due Date<span></h3>";

    const addWeekTodo = (theElement) => {
        let test = document.querySelector('.todo-ul-class');
        test.appendChild(theElement);
    }

    contentDiv.appendChild(ulHeader);

    return {contentDiv, addWeekTodo};

};

export {weekContent};