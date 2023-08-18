<script>
    import {fly} from "svelte/transition";

    export let title;
    export let body;
    export let size = '';
    export let animationConfig = {x: -200, duration: 2000};
</script>

<style lang="postcss">
    .w-50 {
        width: 50%;
    }
</style>

<div
        class="bg-zinc-900 rounded-lg p-8 {size} flex mt-5"
        in:fly={animationConfig}
>
    <div class="flex flex-col w-50">
        <h1 class="font-sans text-2xl font-light text-white">{title}</h1>
        <a class="font-sans font-light text-white mt-3" target="_blank" href="https://www.evolutio.pt/">
            {body.intro}
        </a>
        <p class="font-sans font-light text-white mt-3">
            {body.work}
        </p>
        <p class="font-sans font-light text-white mt-3">
            {body.expertise}
        </p>
    </div>
    <div class="flex flex-row justify-end w-50">
        <img class="w-40 border" src="/me.jpg" alt="Lucas no Universal">
    </div>
</div>
