<script>
    import {onMount} from "svelte";
    import "../../app.css";
    import TechStackCard from "$lib/tech/TechStackCard.svelte";
    import MenuCard from "$lib/MenuCard.svelte";

    let pageReady = false;
    onMount(() => pageReady = true);
</script>

{#if pageReady}
    <TechStackCard size="w-50"/>
    <MenuCard size="w-50" displayHome={true}/>
{/if}