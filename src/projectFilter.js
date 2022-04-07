import { rootDivContent } from './index';
import { todoDataBase } from './todoMaker';

let projectLiDataBase = [];

const projectFilter = (newTodo, editButton, deleteButton) => {

    let liAlreadyExists = false;
    let tabLiInstance;
                
    if (projectLiDataBase.length >= 1) {
        
        for (let i = 0; i <= projectLiDataBase.length; i++) {
            if (projectLiDataBase[i] === newTodo.projectName) {
                liAlreadyExists = true;
            };
        } ;
    };
    
    if (liAlreadyExists === false) {

        tabLiInstance = {
                li: document.createElement('li'),
                NofProjects: document.createElement('p'),
                projectName: document.createElement('p'),
                numberUpdate : () => {

                    if (projectFilterList().length > 0) {
                        tabLiInstance.NofProjects.textContent = `${projectFilterList().length}`
                    }else{
                        tabLiInstance.NofProjects.textContent = ``
                    }
                },
            };

        tabLiInstance.projectName.textContent = `${newTodo.projectName}`;
        tabLiInstance.NofProjects.textContent = '1';

        tabLiInstance.li.appendChild(tabLiInstance.NofProjects);
        tabLiInstance.li.appendChild(tabLiInstance.projectName);

        projectLiDataBase.push(tabLiInstance.projectName.textContent);

        let projectTabs = document.getElementById('project-list');

        projectTabs.appendChild(tabLiInstance.li);

        const todoUl = document.getElementById('todo-ul');

        let projectFilterList = () => { 

            let filter = todoDataBase.filter(todoObject => todoObject.projectName === tabLiInstance.projectName.textContent);
        
            return filter;
        };

        //todo: idea: use query selectors to add  event listeners to the add and edit buttons.
        let svgAddButton = document.querySelector('.svg-button');
       
    

        svgAddButton.addEventListener('click', () => {
            tabLiInstance.numberUpdate()
        });

        deleteButton.addEventListener('click', () => {
            tabLiInstance.numberUpdate()
        });

        editButton.addEventListener('click', () => {
            tabLiInstance.numberUpdate()
        });
        
        
        //* project filter----------

        tabLiInstance.li.addEventListener('click', () => {

            todoUl.querySelectorAll('li').forEach(n => n.remove());

            rootDivContent.ulHeader.innerHTML = `<h3>${tabLiInstance.projectName.textContent}</h3><h3>Due Date</h3>`;

            let projectFilter = projectFilterList();

            for (let i = 0; i < projectFilter.length; i++) {
                rootDivContent.addContent(projectFilter[i].div);
            };
        });
    };

return {tabLiInstance};
        
};

export {projectFilter, projectLiDataBase};




   