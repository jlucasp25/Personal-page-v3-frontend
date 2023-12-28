<script>
    import {fly, crossfade, fade} from "svelte/transition";
    import {onMount} from "svelte";
    import {Icon, InformationCircle} from "svelte-hero-icons";

    export let size = '';
    export let animationConfig = {x: -200, duration: 2000};
    const url = 'http://localhost:8000/api/work/';
    let aggregatedProjects = [];
    let page = 1;

    onMount(async () => {
        await fetchProjects();
    })

    const fetchProjects = async () => {
        aggregatedProjects = [];
        const response = await fetch(`${url}?page=${page}`);
        aggregatedProjects = await response.json();
    }
</script>

<style lang="postcss">
    .w-50 {
        width: 50%;
    }

    button, a {
        transition: all .3s ease;
    }

    button.hover:hover, a.hover:hover {
        border-color: orange;
        color: orange;
    }

    a.hover:hover > svg {
        color: orange;
    }
</style>

<div
        class="bg-zinc-900 rounded-lg p-8 {size} flex mt-5"
        in:fly={animationConfig}
>
    <div class="flex flex-col">
        <div class="flex flex-row items-center justify-between w-full mb-2">
            <h1 class="font-sans text-2xl font-light text-white ">Work Experience</h1>
        </div>
        {#if aggregatedProjects.length > 0}
            {#each aggregatedProjects as company (company.id)}
                <!-- Start of company -->
                <div class="flex flex-row my-2">
                    <div class="flex flex-row p-2">
                        <div class="flex flex-col">
                            <img src={company.logo} alt={company.name}
                                 class="rounded-sm p-2"/>
                        </div>
                        <div class="flex flex-col w-full ms-2">
                            <h1 class="text-lg font-light font-sans text-white">{company.name}</h1>
                            <p class="text-sm font-light font-sans text-white">
                                {company.description}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- End of company -->
                {#each company.projects as project (project.id)}
                    <!-- Start of project -->
                    <div class="ms-5 flex flex-row my-2">
                        <div class="flex flex-row align-middle p-2">
                            <div class="w-1/3 px-2 flex flex-row items-center justify-center">
                                <img src={"http://localhost:8000" + project.logo} alt={project.name}
                                     class="w-full h-fit"/>
                            </div>
                            <div class="flex flex-col w-full ms-2">
                                <h1 class="text-lg font-light font-sans text-white">{project.name}</h1>
                                <p class="text-sm font-light font-sans text-white">
                                    {project.description}
                                </p>
                            </div>
                            <div class="flex flex-row items-center ms-2">
                                <a href="/project/{project.id}" class="hover">
                                    <Icon class="text-white w-8" src="{InformationCircle}"
                                    ></Icon>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- End of project -->
                {/each}
                <button class="text-white" on:click={() => { page -= 1; fetchProjects();}}>Prev PAGE</button>
                <button class="text-white" on:click={() => { page += 1; fetchProjects();}}>Next PAGE</button>
            {/each}
        {/if}
    </div>
</div>