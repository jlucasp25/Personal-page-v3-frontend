<script>
    import {fly} from "svelte/transition";
    import {onMount} from "svelte";
    import {ArrowLeft, ArrowRight, Icon, Star} from "svelte-hero-icons";

    export let size = '';
    export let animationConfig = {x: -200, duration: 2000};
    const url = 'http://localhost:8000/api/tech-stack/';
    let stack = [];
    let switchHover = false;
    let isGrid = true;
    let currentStack = true;
    const PAGE_SIZE = 4;
    let currentPage = 1;
    let totalPages = 0;

    const badgeColors = {
        'BACKEND': 'bg-red-500',
        'FRONTEND': 'bg-cyan-500',
        'MOBILE': 'bg-green-500',
        'DEVOPS': 'bg-yellow-400',
        'DATABASE': 'bg-fuschia-500',
        'OTHER': 'bg-gray-400',
    }

    onMount(async () => {
        await fetchStack();
    })

    const fetchStack = async () => {
        currentStack = true;
        stack = [];
        isGrid = true;
        const response = await fetch(url);
        const data = await response.json();
        stack = data;
        totalPages = (stack.length / PAGE_SIZE) + 1;
    }

    const fetchOtherTechnologies = async () => {
        currentStack = false;
        stack = []
        isGrid = true;
        const response = await fetch(`${url}?inactive=`);
        const data = await response.json();
        stack = data;
    }

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
    <div class="flex flex-col w-full">
        <div class="flex flex-row items-center justify-between w-full mb-2">
            <h1 class="font-sans text-2xl font-light text-white ">{currentStack ? 'Main Tech Stack' : 'Past Technologies'}</h1>
            <button
                    class="text-white border rounded-md p-2 ms-2 flex flex-col align-middle justify-center {switchHover ? 'hover' : ''}"
                    on:mouseenter={() => switchHover = true}
                    on:mouseleave={() => switchHover = false}
                    on:click={() => currentStack ? fetchOtherTechnologies(): fetchStack()}
            >
                {currentStack ? 'Other Technologies' : 'Current Stack'}

            </button>
        </div>
        {#if isGrid}
            <!-- Display old tech as grid since is less important -->
            <div class="grid grid-cols-3 gap-4"
            >
                {#if stack.length > 0}
                    {#each stack as technology, i}
                        {#if (i + 1) <= (currentPage * PAGE_SIZE) && (i + 1) > ((currentPage - 1) * PAGE_SIZE)}
                            <div class="flex flex-col justify-center items-center rounded-md p-5 my-4">
                                <div class="flex flex-row w-full justify-between">
                                    <div class="left">
                                        <span class="badge rounded-md text-xs px-2 py-1 w-fit mb-2 text-white {badgeColors[technology.type]}">{technology.type_display}</span>
                                    </div>
                                    <div class="flex flex-row" title="Experience Level">
                                        {#each Array(technology.experience).fill() as _, idx}
                                            <Icon src="{Star}" class="text-yellow-200 w-4"/>
                                        {/each}
                                    </div>
                                </div>
                                <div class="flex justify-center items-center content-center mt-6">
                                    <img src={technology.logo} alt={technology.title} class="w-1/2"/>
                                </div>
                            </div>
                        {/if}
                    {/each}
                {/if}
            </div>
        {:else}
            {#if stack.length > 0}
                {#each stack as technology, i}
                    {#if (i + 1) <= (currentPage * PAGE_SIZE)}
                        <div class="flex flex-row items-center my-4">
                            <div class="border-1 border-white p-2 flex flex-row align-middle basis-1/4">
                                <div class="me-5 flex justify-center items-center content-center h-full">
                                    <img src={technology.logo} alt={technology.title}
                                         class="h-1/2 w-1/2"/>
                                </div>
                            </div>
                            <div class="flex-col flex basis-3/4 content-center">
                                <div class="flex flex-row items-center mb-2">
                                    <span class="badge rounded-md text-xs px-2 py-1 w-fit me-2 text-white {badgeColors[technology.type]}">{technology.type_display}</span>
                                    {#each Array(technology.experience).fill() as _, idx}
                                        <Icon src="{Star}" class="text-yellow-200 w-4"/>
                                    {/each}
                                </div>
                                <p class="font-sans text-lg font-light text-white">{technology.title}</p>
                                <p class="font-sans text-xs font-light text-white">{technology.description}</p>
                            </div>
                        </div>
                    {/if}
                {/each}
                <div class="flex">
                    {#if currentPage > 1}
                        <Icon src="{ArrowLeft}" class="text-yellow-200 w-6"></Icon>
                    {/if}
                    {#if currentPage < totalPages}
                        <Icon src="{ArrowRight}" class="text-yellow-200 w-6"
                              on:click={() => currentPage = currentPage + 1}></Icon>
                    {/if}
                </div>
            {/if}
        {/if}
    </div>
</div>