document.getElementById("addBotButton").addEventListener("click", function() {
    window.open("https://discord.com/oauth2/authorize?client_id=1275907615875924068", "_blank");
});

document.getElementById("supportButton").addEventListener("click", function() {
    window.open("https://discord.gg/dY4PQkfc2z", "_blank");
});

<script>
document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const body = document.body;

    // Create an overlay div
    let overlay = document.getElementById('overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
    }

    overlay.style.left = `${x}px`;
    overlay.style.top = `${y}px`;
});

document.addEventListener('mouseleave', function() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.transform = 'scale(0)';
    }
});
</script>
