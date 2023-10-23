window.addEventListener('DOMContentLoaded', (event) => {
    const downloadButton = document.querySelector('.download-button');

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
        downloadButton.textContent = 'Download on the App Store';
        downloadButton.href = 'https://apps.apple.com/app/id6444385260';
    } else if (isAndroid) {
        downloadButton.textContent = 'Download on the Play Store';
        downloadButton.href = 'https://play.google.com/store/apps/details?id=com.issakaai.base';
    } else {
        downloadButton.textContent = 'Download Now'; // Default for non-mobile devices
        downloadButton.href = '#';
    }
});
