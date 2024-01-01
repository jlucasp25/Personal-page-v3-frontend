<script>
    import {fly} from "svelte/transition";
    import LinkButton from "$lib/LinkButton.svelte";
    import {onMount} from "svelte";

    export let size = '';
    let titleAnimationConfig = {x: -200, duration: 2000};
    let techStackAnimationConfig = {x: -200, duration: 3000};
    let overviewAnimationConfig = {x: 200, duration: 2000};
    let backAnimationConfig = {y: 200, duration: 2000};
    let customerAnimationConfig = {x: -200, duration: 3000};
    let screenshotAnimationConfig = {y: 200, duration: 2000};

    export let project = null;
    let pageReady = false;

    onMount(() => {
        pageReady = true;
    })

</script>

<style lang="postcss">
    .w-50 {
        width: 50%;
    }

    .w-75 {
        width: 75%;
    }

    button, a {
        transition: all .3s ease;
    }

    button.hover, a.hover {
        border-color: orange;
        color: orange;
    }

    .zoom {
        transition: transform .2s;
        width: 100%;
        height: auto;
    }

    .zoom:hover {
        transform: scale(1.5);
    }
</style>
{#if pageReady}
    <div class="w-75">
        <div
                class="bg-zinc-900 rounded-lg p-8 {size} flex mt-5"
                in:fly={titleAnimationConfig}
        >

            <div class="flex flex-col w-full">
                <div class="flex flex-row items-center justify-between w-full mb-2">
                    <img class="me-4 w-1/6" src="{project.logo}" alt="{project.name}">
                    <div class="flex flex-col justify-end">
                        <h1 class="font-sans text-2xl font-light text-white ">{project.name}</h1>
                        <a class="text-amber-500 text-end text-2xl hover:font-bold my-2" target="_blank"
                           href="{project.link}">Link</a>
                        {#if project.demo_address}
                            <a class="text-amber-500 text-end text-2xl hover:font-bold "
                               href="{project.demo_address}">Demo</a>
                        {/if}
                    </div>

                </div>
                <div class="flex flex-row mt-5">
                    <p class="font-sans text-md font-light text-white">
                        {project.description}
                    </p>

                </div>
            </div>

        </div>
        <div class="flex flex-row justify-between w-full">
            <!-- Tech Stack -->
            <div
                    class="bg-zinc-900 rounded-lg p-8 w-1/5 flex flex-col align-middle justify-between mt-5"
                    in:fly={techStackAnimationConfig}
            >
                <h1 class="font-sans text-2xl font-light text-white mb-3 mx-0">Tech stack</h1>
                <div class="flex flex-row">
                    {#each project.technologies as tech}
                        <div class="flex flex-col items-center justify-center">
                            <a class="mx-2" target="_blank" href="{tech.website}">
                                <img class="w-20" src="{tech.logo}" alt="{tech.name}">
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="bg-zinc-900 rounded-lg p-8 w-3/5 flex flex-col align-middle justify-between mt-5 ms-2"
                 in:fly={overviewAnimationConfig}
            >
                <h1 class="font-sans text-2xl font-light text-white mb-5 mx-0">Overview</h1>
                <p class="font-sans text-sm font-light text-white mb-0 mx-0">
                    {project.description}
                </p>
            </div>
        </div>

        <!-- ScreenWebsite -->
        <div class="flex flex-row justify-between">
            <div class="bg-zinc-900 rounded-lg p-8 w-fit h-fit flex-row align-middle justify-between mt-5"
                 in:fly={backAnimationConfig}
            >
                <LinkButton href="/work/" title="Go Back" icon=""/>
            </div>
            <div class="right flex justify-end items-start">
                {#if project.customer}
                    <div class="bg-zinc-900 rounded-lg p-8 h-fit w-1/5 mx-2 flex flex-col align-middle justify-between mt-5 ms-2">
                        <h1 class="font-sans text-2xl font-light text-white mb-5 mx-0">Customer</h1>
                        <p class="font-sans text-sm font-light text-white mb-0 mx-0">
                            <img class="w-1/2" src={project.customer.logo} alt={project.customer.name}>
                        </p>
                    </div>
                {/if}
                <div class="w-50 me-1">
                    <div class="bg-zinc-900 rounded-lg p-8 {size} flex flex-row align-middle justify-between mt-5"
                         in:fly={screenshotAnimationConfig}
                    >
                        <img class="zoom cursor-zoom-in" src="{project.screenshot}" alt="{project.name}">
                    </div>
                </div>
            </div>
        </div>

    </div>
{/if}
