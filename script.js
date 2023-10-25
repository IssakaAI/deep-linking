window.addEventListener('DOMContentLoaded', (event) => {
    const downloadButton = document.querySelector('.download-button');
    const openBase = document.querySelector('.open-base');

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    const urlParams = new URLSearchParams(window.location.search);
    const communityId = urlParams.get('communityId');

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

    console.log(urlParams);
    console.log(communityId);

    if (communityId) {
        openBase.href = 'base://' + communityId;
    } else {
        openBase.href = 'base://';
    }
});
