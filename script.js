/**
 * Subway Surfers Modded Portal - Core Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    const gameFrame = document.getElementById('game-frame');
    const gameWrapper = document.getElementById('game-wrapper');
    const gameStage = document.getElementById('game-stage');
    const gameLoader = document.getElementById('game-loader');
    const btnSkipLoader = document.getElementById('btn-skip-loader');

    const serverSelect = document.getElementById('server-select');
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const btnTheater = document.getElementById('btn-theater');
    const btnReload = document.getElementById('btn-reload');
    const btnExternal = document.getElementById('btn-external');

    const customUrlBar = document.getElementById('custom-url-bar');
    const customUrlInput = document.getElementById('custom-url-input');
    const btnApplyUrl = document.getElementById('btn-apply-url');

    // 1. Loading Overlay Logic
    const hideLoader = () => {
        if (gameLoader) {
            gameLoader.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                gameLoader.style.display = 'none';
            }, 300);
        }
    };

    const showLoader = () => {
        if (gameLoader) {
            gameLoader.style.display = 'flex';
            gameLoader.classList.remove('opacity-0', 'pointer-events-none');
        }
    };

    btnSkipLoader?.addEventListener('click', hideLoader);

    if (gameFrame) {
        gameFrame.addEventListener('load', () => {
            // Give WebAssembly a moment to initialize
            setTimeout(hideLoader, 1000);
        });

        // Safety fallback: Auto-hide loader after 4 seconds
        setTimeout(hideLoader, 4000);
    }

    // 2. Fullscreen Support
    const toggleFullscreen = () => {
        const elem = gameStage || gameWrapper;
        if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch(err => console.warn(err));
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };

    btnFullscreen?.addEventListener('click', toggleFullscreen);

    // 3. Theater Mode Toggle
    let isTheater = false;
    btnTheater?.addEventListener('click', () => {
        isTheater = !isTheater;
        document.body.classList.toggle('theater-mode', isTheater);
        btnTheater.classList.toggle('text-brand-cyan', isTheater);
        btnTheater.classList.toggle('bg-dark-800', isTheater);
    });

    // ESC closes Theater Mode
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isTheater) {
            isTheater = false;
            document.body.classList.remove('theater-mode');
            btnTheater.classList.remove('text-brand-cyan', 'bg-dark-800');
        }
    });

    // 4. Reload Game
    btnReload?.addEventListener('click', () => {
        showLoader();
        const currentSrc = gameFrame.src;
        gameFrame.src = 'about:blank';
        setTimeout(() => {
            gameFrame.src = currentSrc;
        }, 150);
    });

    // 5. Version / Server Switcher
    serverSelect?.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'custom') {
            customUrlBar.classList.remove('hidden');
            customUrlInput.focus();
        } else {
            customUrlBar.classList.add('hidden');
            showLoader();
            gameFrame.src = val;
            if (btnExternal) {
                btnExternal.href = val;
            }
        }
    });

    // Custom URL Apply
    btnApplyUrl?.addEventListener('click', () => {
        const url = customUrlInput.value.trim();
        if (url) {
            showLoader();
            gameFrame.src = url;
            if (btnExternal) {
                btnExternal.href = url;
            }
        }
    });

    customUrlInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btnApplyUrl.click();
        }
    });

    // 6. Smooth focus inside iframe
    gameStage?.addEventListener('click', () => {
        if (gameFrame) {
            gameFrame.focus();
        }
    });
});
