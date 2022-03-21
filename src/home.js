
const homeContentDefault = () => {

    let contentDiv = document.createElement('ul');
    contentDiv.setAttribute('id', 'todo-ul');
    contentDiv.classList = "todo-ul-class";
    
    let ulHeader = document.createElement('li');
    ulHeader.innerHTML = "<h3>home<span>Due Date<span></h3>";

    contentDiv.appendChild(ulHeader);

    const addContent = (elementToAdd) => {
        contentDiv.appendChild(elementToAdd);
    }

    return {contentDiv, addContent};

};

const homeContent = homeContentDefault();


export {homeContent};

let mock = document.createElement('li');
mock.textContent = "finally it works!";
homeContent.addContent(mock);























