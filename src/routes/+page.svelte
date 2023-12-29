<script>

    import {onMount} from 'svelte';
    import "../app.css";
    import IntroCard from "$lib/root/IntroCard.svelte";
    import AboutMeCard from "$lib/root/AboutMeCard.svelte";
    import MenuCard from "$lib/MenuCard.svelte";
    import CopyrightCard from "$lib/root/CopyrightCard.svelte";

    let pageReady = false;
    onMount(() => pageReady = true);

    const aboutMeText = "Based in Porto, Portugal. Currently working full-time as a Full-Stack Software Developer at Evolutio.";
    const aboutMeText2 = "I also develop integrated software for small and medium companies, provide formations on my current tech stack and have given some lectures about my latest developments.";
</script>


{#if pageReady}
    <IntroCard
            size="w-50"
            title="João Lucas Pires"
            body="Welcome to my personal website."
    />

    <AboutMeCard
            size="w-50"
            body="{aboutMeText}"
            body2="{aboutMeText2}"
    />
    <MenuCard
            size="w-50"
    />
    <CopyrightCard size="w-50"
    />
{/if}
