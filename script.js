document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Hide the login page
    document.getElementById('login-page').style.display = 'none';

    // Show the home page
    document.getElementById('home-page').style.display = 'block';

    // Show the movie images after login
    const movieImages = document.querySelectorAll('.movie');
    movieImages.forEach(movie => {
        movie.style.display = 'block'; // Show the images
    });

    // Set home page background color to match login red theme
    document.body.style.backgroundColor = '#e50914'; /* Red theme */
});

//hllo


