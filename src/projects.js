const projectsContent = () => {

    let mock = document.createElement('p');
    mock.textContent = "mock content from projects";
    mock.setAttribute('id', 'content');

    return mock;

}

export {projectsContent};