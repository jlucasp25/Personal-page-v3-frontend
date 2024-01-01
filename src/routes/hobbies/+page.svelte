<script>
    import HobbiesCard from "$lib/hobbies/HobbiesCard.svelte";
    import MenuCard from "$lib/MenuCard.svelte";
    import {onMount} from "svelte";

    let pageReady = false;
    onMount(() => {
        pageReady = true;
    });
</script>
{#if pageReady}
    <HobbiesCard></HobbiesCard>
    <MenuCard size="w-50" displayHome={true}/>
{/if}