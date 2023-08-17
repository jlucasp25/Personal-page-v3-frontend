<script>
    import DOTS from 'vanta/dist/vanta.dots.min';

    DOTS({
        el: "#sv-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
</script>

<div     id="sv-background">
</div>

<style>
    #sv-background {
        width: 100%;
        height: 100vh;
        position: absolute;
        top:0;
        left:0;
        z-index: -1;
    }
</style>
