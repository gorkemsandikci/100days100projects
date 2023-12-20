document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const pagination = document.getElementById('pagination');
    const itemsPerPage = 2; // Number of items you want per page
    const totalItems = 8; // Total number of items
    let currentPage = 1;

    function displayItems(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        cardContainer.innerHTML = '';

        for (let i = startIndex; i < endIndex; i++) {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <img src="${i}.jpg" alt="Christmas Scene ${i}" class="card-image">
                <div class="card-content" style="background-color: #${i}${i}${i};">
                    <h2 class="card-title">Card Title ${i}</h2>
                    <p class="card-description">Card description for item ${i}</p>
                </div>
            `;
            cardContainer.appendChild(card);
        }
    }

    function setupPagination(total) {
        const pageCount = Math.ceil(total / itemsPerPage);
        pagination.innerHTML = ''; 

        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement('span');
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayItems(i);
                updateActivePage();
            });
            pagination.appendChild(pageButton);
        }
    }

    function updateActivePage() {
        const pages = pagination.querySelectorAll('span');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pages[currentPage - 1].classList.add('active');
    }

    displayItems(currentPage);
    setupPagination(totalItems);
    updateActivePage();
});

document.addEventListener('DOMContentLoaded', function() {
    var snowflakesContainer = document.querySelector('.snowflakes');

    function createSnowflake() {
        var snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❆';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 30 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflakesContainer.appendChild(snowflake);
    }

    for (var i = 0; i < 1000; i++) {
        setTimeout(createSnowflake, Math.random() * 3000);
    }
});
