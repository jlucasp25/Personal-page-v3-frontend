<script>
    import {onMount} from "svelte";
    import DOTS from 'vanta/dist/vanta.dots.min';
    import '../app.css';

    onMount(() => {
        DOTS({
            el: "#sv-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
        })
    })
</script>

<style>


    #sv-background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    @media (max-width: 320px) {
        #sv-background {
            width: 100vw;
            height: 100vh;
        }
    }

    @media (max-width: 600px) {


        #sv-background {
            width: 300%;
            height: 300%;
        }
    }

    @media (max-width: 850px) {
        #sv-background {
            width: 200%;
            height: 200%;
        }
    }

    main {
        min-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 0;
        /*padding: 1.5rem;*/
    }
</style>

<div id="sv-background">
</div>
<main>
    <slot/>
</main>