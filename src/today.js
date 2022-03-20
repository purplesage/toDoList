const todayContent = () => {

    let mock = document.createElement('p');
    mock.textContent = "mock content from today";
    mock.setAttribute('id', 'content');

    return mock;

}

export {todayContent};