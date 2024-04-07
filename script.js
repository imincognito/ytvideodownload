function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl.trim() === '') {
        showMessage('Please enter a YouTube video URL.');
        return;
    }
    // You can add further functionality here, such as validation and handling of the URL.
    showMessage('Downloading...');
}

function showMessage(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
}
