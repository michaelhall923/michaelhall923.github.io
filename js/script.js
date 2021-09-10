$(document).ready(function() {
    var darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkModeEnabled) toggleDarkMode();

    $('#dark-mode-toggle-dark').on('click', toggleDarkMode);

    $('#dark-mode-toggle-light').on('click', toggleLightMode);

    function toggleDarkMode() {
        $('#dark-mode-toggle-dark').addClass('hidden');
        $('#dark-mode-toggle-light').removeClass('hidden');
        $('body').addClass('dark-mode');
        $("#favicon").attr("href", "favicon-dark.png");
    }

    function toggleLightMode() {
        $('#dark-mode-toggle-light').addClass('hidden');
        $('#dark-mode-toggle-dark').removeClass('hidden');
        $('body').removeClass('dark-mode');
        $("#favicon").attr("href", "favicon.png");
    }

    $('nav a, #logo').on('click', function() {
        goToByScroll($(this).data('href'));
    });

    function goToByScroll(id) {
        $('html,body').animate({ scrollTop: $("#" + id).offset().top - 196 }, 'slow');
    }

    var framerate = 60,
        theta = 0,
        velocity = 0,
        acceleration = 0,
        accelerationConstant = .015,
        winding = false,
        windingVelocity = 1,
        friction = .03,
        lastFrame = window.performance.now();
    setInterval(animate, 1000 / framerate);

    function animate() {
        let currentFrame = window.performance.now(),
            frameLength = currentFrame - lastFrame;
        lastFrame = currentFrame;
        let delta = frameLength / (1000 / framerate);

        // Emblem animation
        if (winding) {
            velocity = 0;
            acceleration = 0;
            theta += windingVelocity * delta;
        } else {
            acceleration = -(theta * accelerationConstant);
            velocity += acceleration;
            velocity *= (1 - friction);
            theta += velocity * delta;
        }
        $('#emblem').css('transform', `rotate(${Math.round(theta)}deg)`);
    }

    $('#emblem').on('mouseover', function() {
        winding = true;
    }).on('mouseleave', function() {
        winding = false;
    })
});