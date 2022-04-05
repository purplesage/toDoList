let deleteTodoSvg = document.createElement('div');
            deleteTodoSvg.textContent = "deleteSVG";
            todoDiv.appendChild(deleteTodoSvg);
            
            deleteTodoSvg.addEventListener('click', () => {
                
                let todoUlLiElements = document.getElementById('todo-ul').getElementsByTagName('li');

                for (let i = 0; i < todoUlLiElements.length; i++) {
                    todoUlLiElements[i].removeAttribute('id');
                    todoUlLiElements[i].setAttribute('id', `${i}`);
                };

                rootDivContent.todoUl.removeChild(todoUlLiElements[todoDiv.getAttribute('id')]);

                // deletes 'todo' object from database.

                todoDataBase.splice(todoDataBase.indexOf(todoDivObject), 1);

            });