$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['header', 'story', 'services', 'work', 'footer'],
        menu: "#menu",
        css3: true,
        navigation: true,
        navigationPosition: "right",
        loopBottom: true,
        showActiveTooltip: true,
        slidesNavigation: true,
        scrollbar: true
    });
});
