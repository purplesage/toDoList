import { homeContentDefault } from "./home";

const projectContent = () =>  {

    const defaultContent = homeContentDefault();


    /* let projectTabs = document.getElementById('project-list');

    let newProjectTab = document.createElement('li');
    newProjectTab.textContent = `${newTodo.projectName}`;

    projectTabs.appendChild(newProjectTab);
    */

    return {defaultContent};
};

export {projectContent};