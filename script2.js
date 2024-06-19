const apiUrl2 = 'https://newsapi.org/v2/everything?';
const apiKey2 = '9d17e87e6c624a79888527a7fc6bc81f';
const newsContainer = document.getElementById('news-container');

fetch(`${apiUrl2}apiKey=${apiKey2}&q=apple&sortBy=popularity`)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        articles.forEach(article => {

            const articleHTML = `
                <div class="news-article">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <p><a href="${article.url}" target="_blank">Read more</a></p>
                </div>
            `;
            newsContainer.innerHTML += articleHTML;
        });
    })
    .catch(error => console.error(error));

    const apiUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';
    const apiKey = '4a94cc32-1b8f-498c-8024-4c4c25bd72f9'; // Replace with your Merriam-Webster API key
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultDiv = document.getElementById('result');
    
    searchButton.addEventListener('click', () => {
        const word = searchInput.value.trim();
        if (word) {
            fetch(apiUrl + word + '?key=' + apiKey)
                .then(response => response.json())
                .then(data => {
                    const definitions = data.map(definition => {
                        return `<p>${definition.shortdef}</p>`;
                    }).join('');
                    resultDiv.innerHTML = definitions;
                })
                .catch(error => console.error(error));
        }
    });