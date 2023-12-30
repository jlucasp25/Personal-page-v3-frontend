<script>
    import {onMount} from "svelte";
    import {fly} from "svelte/transition";

    export let animationConfig = {x: 200, duration: 2000};
    const url = 'http://localhost:8000/api/lectures/';
    let lectures = [];
    const fetchLectures = async () => {
        const response = await fetch(url);
        const data = await response.json();
        lectures = data;
    }
    onMount(async () => {
        await fetchLectures();
    });
</script>

<style lang="postcss">

</style>

<div
        class="bg-zinc-900 rounded-lg p-8 flex mt-5 w-1/2"
        in:fly="{animationConfig}"
>
    <div class="flex flex-col">
        <div class="flex flex-row items-center justify-between w-full mb-2">
            <h1 class="font-sans text-2xl font-light text-white ">Lectures</h1>
        </div>
        {#each lectures as lecture (lecture.id)}
            <div class="flex flex-row my-3">
                <a href="{lecture.link}" class="w-1/4" target="_blank">
                    <img src="{lecture.thumbnail}" alt="{lecture.title}" class="h-min">
                </a>
                <div class="flex flex-col ms-3 w-2/4">
                    <a href="{lecture.link}" class="flex" target="_blank">
                        <h2 class="text-xl font-sans text-white hover:text-amber-500">{lecture.title}</h2>
                    </a>
                    <span class="text-white text-xs mt-1">{lecture.duration} Minutes</span>
                    <p class="text-white text-sm mt-3">{lecture.description}</p>
                </div>
                <div class="w-1/4 flex items-center justify-center">
                    <a href="{lecture.event.link}" target="_blank">
                        <img src="{lecture.event.logo}" alt="{lecture.event.name}" class="w-auto h-min">
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>