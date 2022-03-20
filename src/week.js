const weekContent = () => {

    let mock = document.createElement('p');
    mock.textContent = "mock content from week";

    mock.setAttribute('id', 'content');

    return mock;

}

export {weekContent};