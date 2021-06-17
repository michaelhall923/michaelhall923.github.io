$(document).ready(function() {
    var darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

    $('#dark-mode-toggle-dark').on('click', function() {
        $(this).addClass('hidden');
        $('#dark-mode-toggle-light').removeClass('hidden');
        $('body').addClass('dark-mode');
    });

    $('#dark-mode-toggle-light').on('click', function() {
        $(this).addClass('hidden');
        $('#dark-mode-toggle-dark').removeClass('hidden');
        $('body').removeClass('dark-mode');
    });

    if (darkModeEnabled) $('#dark-mode-toggle-dark').click();
});

