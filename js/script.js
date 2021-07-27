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

    let framerate = 60, theta = 0, velocity = 0, acceleration = 0, accelerationConstant = .02, winding = false, windingVelocity = 3, friction = .03;
    setInterval(animate, 1000/framerate);

    function animate() {
        if (winding) {
            velocity = 0;
            acceleration = 0;
            theta += windingVelocity;
            if (theta < 0) theta = modulus(theta, 360);
        } else {
            acceleration = -(theta * accelerationConstant);
            velocity += acceleration;
            velocity *= (1-friction);
            theta += velocity;
        }
        $('#emblem').css('transform', `rotate(${Math.round(theta)}deg)`);
    }

    $('#emblem').on('mouseover', function() {
        winding = true;
    }).on('mouseleave', function() {
        winding = false;
    })
});

function modulus(a, n) {
    return ((a % n ) + n ) % n;
}