function searchMovies() {
  const query = document.getElementById('search').value;
  const movieResults = document.getElementById('movie-results');

  if (query.length > 2) {
    // Use an API like OMDB, The Movie Database (TMDb), etc., to fetch movie data.
    // For simplicity, here we'll just simulate search results.
    movieResults.innerHTML = `Searching for: ${query}`;

    // Simulate an API response
    setTimeout(() => {
      movieResults.innerHTML = `
        <h2>Search Results</h2>
        <div class="movie-item">Solo leveling</div>
        <div class="movie-item">Trapped on dating sim</div>
        <div class="movie-item">pokemon</div>
      `;
    }, 500);
  } else {
    movieResults.innerHTML = '';
  }
}

// Google Sign-In handling
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Email: ' + profile.getEmail());
  alert('Signed in as: ' + profile.getName());
}

// Twitter Login (To be implemented with API integration)
function twitterLogin() {
  alert("Twitter Login not implemented yet.");
}

// Event listener for search box input
document.getElementById('search').addEventListener('input', searchMovies);
