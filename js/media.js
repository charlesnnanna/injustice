//Declaration of Variables
const videos = document.getElementById('videos');
const wallpapers = document.getElementById('wallpapers');
const screenshots = document.getElementById('screenshots');
const videoButton = document.getElementById('video-button');
const wallpaperButton = document.getElementById('wallpaper-button');
const screenshotButton = document.getElementById('screenshot-button');


//Function to show all videos when clicked
const showVideos = () => {
    videoButton.addEventListener('click', (event) => {
        event.preventDefault();

        videos.style.display = 'flex';
        wallpapers.style.display = 'none';
        screenshots.style.display = 'none';
        videoButton.classList.add('active-media');
        wallpaperButton.classList.remove('active-media');
        screenshotButton.classList.remove('active-media');

    })
}

//Function to show all wallpapers when clicked
const showWallpapers = () => {
    wallpaperButton.addEventListener('click', (event) => {
        event.preventDefault();

        wallpapers.style.display = 'flex';
        videos.style.display = 'none';
        screenshots.style.display = 'none';
        wallpaperButton.classList.add('active-media');
        videoButton.classList.remove('active-media');
        screenshotButton.classList.remove('active-media');

    })
}


//Function to show all screenshots when clicked
const showScreenshots = () => {
    screenshotButton.addEventListener('click', (event) => {
        event.preventDefault();

        screenshots.style.display = 'flex';
        videos.style.display = 'none';
        wallpapers.style.display = 'none';
        screenshotButton.classList.add('active-media');
        videoButton.classList.remove('active-media');
        wallpaperButton.classList.remove('active-media');
    })
}


//Run all the progtrams
showVideos();
showWallpapers();
showScreenshots();