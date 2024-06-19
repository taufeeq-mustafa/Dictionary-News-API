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

