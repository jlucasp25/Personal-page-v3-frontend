<script>
    import {fly} from "svelte/transition";

    export let size = '';
    export let animationConfig = {y: 200, duration: 2000};
</script>

<style lang="postcss">
    .w-50 {
        width: 50%;
    }

    a {
        transition: all .3s ease;
    }

    a.hover {
        border-color: orange;
        color: orange;
    }
</style>

<div
        class="bg-zinc-900 rounded-lg p-8 mt-5 {size} flex"
        in:fly={animationConfig}
>
    <div class="flex flex-col w-full justify-between text-white font-light">
        <p>This website was fully developed by me including the design using SvelteKit, Tailwind and Django.</p>
        <p>Background interface built using Vanta.js</p>
        <p class="font-bold mt-2">&copy; {new Date().getFullYear()} João Lucas Pires </p>
        <div class="flex flex-row items-center mt-2 pt-2">
        <img src="/SVELTE.png" alt="SvelteKit" class="w-8">
        <img src="/django.svg" alt="Django" class="ms-2 w-8">
        <img src="/TW.svg" alt="Tailwind" class="ms-2 w-8">
        </div>
    </div>
</div>
