const homeContent = () => {

    let mock = document.createElement('p');
    mock.textContent = 'home mock content'
    mock.setAttribute('id', 'content');
    return mock;

}

export {homeContent};