<script>
    import {onMount} from "svelte";
    import AboutCard from "$lib/about/AboutCard.svelte";
    import "../../app.css";
    import ActivityCard from "$lib/about/ActivityCard.svelte";
    import MenuCard from "$lib/MenuCard.svelte";

    let pageReady = false;
    onMount(() => pageReady = true);

    let body = {
        intro: 'Currently working at Evolutio in Porto developing complete products since 2020.',
        work: 'We work with geographic and data intensive software.',
        expertise: 'My area of expertise is however in developing administrative and backoffice applications.'
    }
</script>

{#if pageReady}
    <AboutCard size="w-50" title="About me" {body}/>
    <ActivityCard size="w-50"/>
    <MenuCard size="w-50" displayHome={true}/>
{/if}