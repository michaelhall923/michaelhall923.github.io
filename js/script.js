$(document).ready(function() {
    var darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkModeEnabled) toggleDarkMode();

    $('#dark-mode-toggle-dark').on('click', toggleDarkMode);

    $('#dark-mode-toggle-light').on('click', toggleLightMode);

    function toggleDarkMode() {
        $('#dark-mode-toggle-dark').addClass('hidden');
        $('#dark-mode-toggle-light').removeClass('hidden');
        $('body').addClass('dark-mode');
    }

    function toggleLightMode() {
        $('#dark-mode-toggle-light').addClass('hidden');
        $('#dark-mode-toggle-dark').removeClass('hidden');
        $('body').removeClass('dark-mode');
    }
});

