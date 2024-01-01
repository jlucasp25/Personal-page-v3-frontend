<script>
    import {fly} from "svelte/transition";

    export let title;
    export let body;
    export let size = '';
    export let animationConfig = {y: -200, duration: 2000};
</script>

<style lang="postcss">
    .sv-card {
        background: #222222;
        box-shadow: .5px .5px #777777;
        padding: 2rem;
        border-radius: 4px;
    }

    .w-50 {
        width: 50%;
    }
</style>

<div
        class="bg-zinc-900 rounded-lg p-8 w-full sm:w-1/2 flex mx-5 mt-5"
        in:fly={animationConfig}
>
    <div class="flex flex-col w-50">
        <h1 class="font-sans text-2xl font-light text-white">{title}</h1>
        <p class="font-sans font-light text-white">
            {body}
        </p>
    </div>
    <div class="flex flex-row justify-end w-50">
        <img class="w-20 rounded-full border-2" src="/PFP.png" alt="Lucas no Universal">
    </div>

</div>
