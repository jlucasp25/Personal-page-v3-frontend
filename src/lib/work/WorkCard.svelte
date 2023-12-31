<script>
    import {fly, crossfade} from "svelte/transition";
    import {blur} from "svelte/transition";
    import {onMount} from "svelte";
    import {Icon, InformationCircle, ArrowRight, ArrowLeft} from "svelte-hero-icons";

    export let size = '';
    export let freelance = false;
    export let animationConfig = {x: -200, duration: 2000};
    let transitionConfig = {duration: 500, delay: 0};
    const url = 'http://localhost:8000/api/work/';
    let aggregatedProjects = [];
    let page = 1;

    onMount(async () => {
        await fetchProjects();
    })

    const fetchProjects = async () => {
        aggregatedProjects = [];
        const response = await fetch(`${url}?page=${page}${freelance ? '&freelance=true' : ''}`);
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
            <h1 class="font-sans text-2xl font-light text-white ">{freelance ? 'Freelance Projects' : 'Work Experience'}</h1>
        </div>
        <div>
            {#if aggregatedProjects}
                {#each aggregatedProjects as company (company.id)}
                    <!-- Start of company -->
                    <div class="flex flex-row w-full p-2">
                        <div class="w-1/6 flex flex-row items-center justify-center">
                            <img src={company.logo} alt={company.name}
                                 class="w-full h-auto"/>
                        </div>

                        <div class="flex flex-col w-5/6 ms-2">
                            <h1 class="text-lg font-light font-sans text-white">{company.name}</h1>
                            <p class="text-sm font-light font-sans text-white">
                                {company.description}
                            </p>
                        </div>
                    </div>
                    <!-- End of company -->
                    <div in:blur={transitionConfig} out:blur={transitionConfig}>
                        {#each company.projects.data as project (project.id)}
                            <!-- Start of project -->
                            <div class="ms-5 flex flex-row my-2">
                                <div class="flex flex-row align-middle p-2 w-full">
                                    <div class="w-1/4 px-2 flex flex-row items-center justify-center">
                                        <img src={`http://localhost:8000${project.logo}`} alt={project.name}
                                             class="w-full h-fit {project.put_white_background ? 'bg-white rounded-md p-2' : ''}"/>
                                    </div>
                                    <div class="w-3/4 ms-2 flex flex-row justify-between">
                                        <div class="flex flex-col">
                                            <h1 class="text-lg font-light font-sans text-white">{project.name}</h1>
                                            <p class="text-sm font-light font-sans text-white">
                                                {project.description}
                                            </p>
                                            {#if project.demo_address}
                                                <a class="text-amber-500 mt-3 text-start text-sm hover:font-bold "
                                                   href="{project.demo_address}">Demo</a>
                                            {/if}
                                        </div>
                                        <div class="flex flex-row items-center ms-2">
                                            <a href="/project/{project.id}" class="hover">
                                                <Icon class="text-white w-8" src="{InformationCircle}"
                                                ></Icon>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of project -->
                        {/each}
                    </div>
                    <div class="flex flex-row justify-end">
                        {#if company.projects.paginator.has_previous}
                            <button on:click={() => {page-=1; fetchProjects()}}>
                                <Icon class="text-white w-8" src="{ArrowLeft}"></Icon>
                            </button>
                        {/if}
                        {#if company.projects.paginator.has_next}
                            <button on:click={() => {page+=1; fetchProjects()}}>
                                <Icon class="text-white w-8" src="{ArrowRight}"></Icon>
                            </button>
                        {/if}
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>