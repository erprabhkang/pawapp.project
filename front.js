function loadContent(section) {
    const container = document.getElementById('content-container');
    let content = '';

    switch(section) {
        case 'home':
            content = '<h2>Home</h2><p>Welcome to the PAWAPP homepage!</p>';
            break;
        case 'about':
            content = '<h2>About</h2><p>We are an organization dedicated to animal welfare.</p>';
            break;
        case 'help':
            content = '<h2>Ways to Help</h2><p>You can volunteer, donate, or adopt!</p>';
            break;
        case 'whatwedo':
            content = '<h2>What We Do</h2><p>We rescue, rehabilitate, and find homes for animals.</p>';
            break;
        case 'contact':
            content = '<h2>Contact Us</h2><p>Reach out to us via email or phone!</p>';
            break;
        case 'profile':
            content = '<h2>Profile</h2><p>Your user profile info will be here.</p>';
            break;
        default:
            content = '<h2>Welcome to PAWAPP!</h2><p>Select a section from the navigation bar to learn more.</p>';
    }

    container.innerHTML = content;

    // Update active class on nav links
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(link => {
        if(link.textContent.replace(/\s/g,'').toLowerCase() === section) {
            link.classList.add('active');
        }
    });
}

function toggleHelp() {
    let existingPopup = document.getElementById('help-popup');
    if(existingPopup) {
        existingPopup.remove();
    } else {
        let popup = document.createElement('div');
        popup.id = 'help-popup';
        popup.classList.add('help-popup');
        popup.innerHTML = `<strong>Need help?</strong><p>Click on the menu items to navigate!</p>`;
        document.body.appendChild(popup);
    }
}
