const initVideoModal = () => {
  const modal = document.querySelector('[data-modal="video"]');

  let videoSrc;
  let player;

  if (!modal) {
    return;
  }

  const overlay = modal.querySelector('[data-modal-overlay]');
  const closeButton = modal.querySelector('[data-modal-close]');
  const iframe = modal.querySelector('[data-video-iframe]');
  const loader = modal.querySelector('[data-loader]');

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-open-modal="video"]')) {
      return;
    }

    evt.preventDefault();

    loader.style.display = 'block';

    const link = target.closest('[data-open-modal="video"]');
    videoSrc = link.dataset.videoSrc;

    modal.classList.add('is-active');

    onYouTubeIframeAPIReady();

    function onYouTubeIframeAPIReady() {
      player = new YT.Player(iframe, {
        width: '800',
        height: '420',
        playerVars: {
          'controls': 1,
          'showInfo': 0,
        },
        videoId: videoSrc,
        events: {
          'onReady': onPlayerReady,
        },
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
      loader.style.display = 'none';
    }
  });

  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (modal.classList.contains('is-active')) {
      modal.classList.remove('is-active');
      if (player) {
        player.destroy();
        player = null;
      }
    }
  });

  overlay.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (modal.classList.contains('is-active')) {
      modal.classList.remove('is-active');
      if (player) {
        player.destroy();
        player = null;
      }
    }
  });
};

export {initVideoModal};
