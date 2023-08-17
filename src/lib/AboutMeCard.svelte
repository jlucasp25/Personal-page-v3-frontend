<script>
    import {fly} from "svelte/transition";

    export let body;
    export let size = '';
    export let animationConfig = {x: -200, duration: 2000};
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
        class="bg-zinc-900 rounded-lg p-8 {size} flex mt-5"
        in:fly={animationConfig}
>
    <div class="flex flex-col w-50">
        <p class="font-sans font-light text-white">
            {body}
        </p>
    </div>
    <div class="flex flex-row justify-end w-50">
        <img class="w-20 rounded-full border-2" src="/PFP.png" alt="Lucas no Universal">
    </div>

</div>
