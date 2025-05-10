document.addEventListener('DOMContentLoaded', () => {
    let extensions = [];

    // Fetch and load extensions data
    async function loadExtensions() {
        try {
            const response = await fetch('data.json');
            extensions = await response.json();
            displayExtensions(extensions);
        } catch (error) {
            console.error('Error loading extensions:', error);
        }
    }

    // Display extensions in the UI
    function displayExtensions(extensionsToShow) {
        const container = document.querySelector('.extensions-container');
        container.innerHTML = '';

        extensionsToShow.forEach(extension => {
            const card = `
                <div class="extension-card ${extension.isActive ? 'active' : 'inactive'}">
                    <img src="${extension.logo}" alt="${extension.name}">
                    <div class="extension-info">
                        <h2>${extension.name}</h2>
                        <p>${extension.description}</p>
                    </div>
                    <button class="remove-button">Remove</button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', card);
        });

        // Add remove button listeners
        document.querySelectorAll('.remove-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.target.closest('.extension-card').remove();
            });
        });
    }

    // Filter extensions
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter extensions
            const filter = button.getAttribute('data-filter');
            let filteredExtensions;

            switch (filter) {
                case 'active':
                    filteredExtensions = extensions.filter(ext => ext.isActive);
                    break;
                case 'inactive':
                    filteredExtensions = extensions.filter(ext => !ext.isActive);
                    break;
                default:
                    filteredExtensions = extensions;
            }

            displayExtensions(filteredExtensions);
        });
    });

    // Theme toggle functionality
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', 
            document.body.classList.contains('dark-mode') ? 'dark' : 'light'
        );
    });

    // Load saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Initial load of extensions
    loadExtensions();
});