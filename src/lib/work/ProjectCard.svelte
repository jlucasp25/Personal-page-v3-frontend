<script>
    import {fly, crossfade, fade} from "svelte/transition";

    export let size = '';
    export let animationConfig = {x: -200, duration: 2000};

    export let project = {};
</script>

<style lang="postcss">
    .w-50 {
        width: 50%;
    }

    button, a {
        transition: all .3s ease;
    }

    button.hover, a.hover {
        border-color: orange;
        color: orange;
    }
</style>

<div
        class="bg-zinc-900 rounded-lg p-8 {size} flex mt-5"
        in:fly={animationConfig}
>
    {#if project}
        <div class="flex flex-col">
            <div class="flex flex-row items-center justify-between w-full mb-2">
                <h1 class="font-sans text-2xl font-light text-white ">ttt{project.name}</h1>
            </div>
        </div>
    {/if}
</div>