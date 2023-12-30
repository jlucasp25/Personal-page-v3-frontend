<script>
    import {onMount} from "svelte";
    import "../../app.css";
    import TechStackCard from "$lib/tech/TechStackCard.svelte";
    import MenuCard from "$lib/MenuCard.svelte";
    import LecturesCard from "$lib/lectures/LecturesCard.svelte";

    let pageReady = false;
    onMount(() => pageReady = true);
</script>

{#if pageReady}
    <LecturesCard/>
    <MenuCard size="w-50" displayHome={true}/>
{/if}