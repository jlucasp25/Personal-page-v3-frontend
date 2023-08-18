<script>
    import {onMount} from "svelte";
    import DOTS from 'vanta/dist/vanta.dots.min';
    import '../app.css';

    onMount(() => {
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
    })
</script>

<style>
    html,body {
        height: 100%;
        margin: 0;
    }

    #sv-background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
     main {
         width: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }
</style>

<div id="sv-background">
</div>
<main class="p-6">
    <slot/>
</main>