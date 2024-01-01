<script>
    import {fly} from "svelte/transition";
    import {onMount} from "svelte";
    import {ArrowLeft, ArrowRight, Icon, Star} from "svelte-hero-icons";

    export let animationConfig = {x: -200, duration: 2000};
</script>

<style lang="postcss">
</style>

<div
        class="bg-zinc-900 rounded-lg p-8 flex flex-col mt-5 w-50"
        in:fly={animationConfig}
>
    <h1 class="font-sans text-2xl font-light text-white mb-5">Hobbies</h1>


    <p class="text-white mb-5">
        Some of my hobbies include playing video games, both new and retro, while also increasing my physical
        backlog.<br>
        You can check my current backlog here:<br>
        <a class="text-amber-500 hover:text-amber-600" href="https://backloggd.com/u/jlucasp25/" target="_blank">Game
            Backloggery</a>
    </p>
    <p class="text-white mb-5">
        I also enjoy mixing electronic music, while currently trying to find time to learning how to produce my own
        using Ableton Live.
    </p>
    <p class="text-white mb-5">
        In my in between time, mostly during subway or long trips, I tend to read technical books, to expand my
        knowledge about web development, software architecture and good practices.
    </p>
    <p class="text-white mb-5">
        And lately I've been more focused in taking some time to travel and explore new places.<br>
        Currently I've been to 🇵🇹🇪🇸🏴󠁧󠁢󠁥󠁮󠁧󠁿🇩🇪🏴󠁧󠁢󠁳󠁣󠁴󠁿🇯🇵.<br>
        I'm planning on going to more european cities in 2024, and return to Japan in 2025.
        You can check some of my photos here:<br>
        <a class="text-amber-500 hover:text-amber-600" href="https://www.flickr.com/photos/jlucasp25/" target="_blank">Travel
            Gallery</a>
    </p>
</div>