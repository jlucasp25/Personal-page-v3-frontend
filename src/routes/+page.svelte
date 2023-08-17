<script>
    import Background from "$lib/Background.svelte";
    import {onMount} from 'svelte';

    import "../app.css";
    import IntroCard from "$lib/IntroCard.svelte";
    import AboutMeCard from "$lib/AboutMeCard.svelte";
    let pageReady = false;
    onMount(() => pageReady = true);
</script>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<Background/>
<main class="p-6 ">
    {#if pageReady}
        <IntroCard
                size="w-50"
                title="João Lucas Pires"
                body="Welcome to my personal website."
        />

        <AboutMeCard
                size="w-50"
                body="Welcome to my personal website."
        />
    {/if}
</main>
