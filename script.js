function loadContent(section) {
    const container = document.getElementById('content-container');
    let content = '';

    switch(section) {
        case 'home':
            content = '<h2>Home</h2><p>Welcome to the PAWAPP homepage!</p>';
            break;
        case 'about':
            content = '<h2>About</h2><p>Pawapp is committed to rescuing and rehabilitating injured animals through emergency medical care and post-treatment support so that no animal suffers in pain without rescue. Besides this, our NGO Locator Network enables people to connect with animal welfare organizations nearby them, making rescues and treatments and eventually adoptions more accessible and efficient. We bridge the gap between those who need help and those who can provide it, towards a compassionate world where every injured or abandoned animal gets care, hope, and a second chance in life.</p>';
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
            // Create an image element
const img = document.createElement('img');

// Set the source of the image
/*img.src =URL(homepage-image.jpg); // Replace this with your desired image URL or local path

// Optionally, add alt text and styles
img.alt = 'Homepage Image';
img.style.width = '300px';
img.style.borderRadius = '12px';
img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

// Append the image to the container div
const container = document.getElementById('image-container');
container.appendChild(img);*/

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
