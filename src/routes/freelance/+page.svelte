<script>
    import {onMount} from "svelte";
    import "../../app.css";
    import MenuCard from "$lib/MenuCard.svelte";
    import WorkCard from "$lib/work/WorkCard.svelte";

    let pageReady = false;
    onMount(() => pageReady = true);
</script>

{#if pageReady}
    <WorkCard size="w-50" freelance={true}/>
    <MenuCard size="w-50" displayHome={true}/>
{/if}