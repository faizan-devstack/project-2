// Handle Search Functionality
function handleSearch() {
    const searchInput = document.getElementById('search-input').value;
    const searchResults = document.getElementById('search-results');

    // Clear previous results
    searchResults.innerHTML = '';

    if (searchInput.trim() === '') {
        searchResults.innerHTML = '<p>Please enter a valid destination or keyword.</p>';
        return;
    }

    // Mock data for search recommendations
    const recommendations = [
        'Paris - Explore the city of lights',
        'Rome - Dive into history and culture',
        'Tokyo - Discover the future of technology',
        'Bali - Experience serene beaches and temples',
        'New York - The city that never sleeps'
    ];

    // Filter results based on input
    const filteredResults = recommendations.filter(item =>
        item.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Display results
    if (filteredResults.length > 0) {
        filteredResults.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result';
            resultElement.textContent = result;
            searchResults.appendChild(resultElement);
        });
    } else {
        searchResults.innerHTML = '<p>No recommendations found for your search.</p>';
    }
}
