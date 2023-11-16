const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;

    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortnedUrl.value = data;
    }).catch(error => {
        shortnedUrl.value = "Error : Unable to shorten URL!";
    });

}

reloadBtn.addEventListener('click', () => {
    location.reload();
});