<script>
    import {fly} from "svelte/transition";

    export let size = '';
    export let animationConfig = {x: 200, duration: 2000};

    let hoverClass = [false, false, false, false, false, false];
    export let displayHome = false;
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
    <div class="flex flex-row w-full justify-between">
        {#if displayHome}
            <a class="text-white border rounded-md p-4 flex flex-col align-middle justify-center {hoverClass[0] ? 'hover' : ''}"
               on:mouseenter={() => hoverClass[0] = true}
               on:mouseleave={() => hoverClass[0] = false}
               href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                </svg>
                <span>
            Home
            </span>
            </a>
        {/if}
        <a class="text-white border rounded-md p-4 flex flex-col align-middle justify-center {hoverClass[1] ? 'hover' : ''}"
           on:mouseenter={() => hoverClass[1] = true}
           on:mouseleave={() => hoverClass[1] = false}
           href="/about">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
            </svg>
            <span>
            About Me
            </span>
        </a>

        <a class="text-white border rounded-md p-4 flex flex-col align-middle justify-center {hoverClass[2] ? 'hover' : ''}"
           on:mouseenter={() => hoverClass[2] = true}
           on:mouseleave={() => hoverClass[2] = false}
           href="/tech">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
            </svg>
            <span>
            Tech Stack
            </span>
        </a>

        <a class="text-white border rounded-md p-4 flex flex-col align-middle justify-center {hoverClass[3] ? 'hover' : ''}"
           on:mouseenter={() => hoverClass[3] = true}
           on:mouseleave={() => hoverClass[3] = false}
           href="/work">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
            </svg>
            <span>
            Work Experience
            </span>
        </a>

        <a class="text-white border rounded-md p-4 flex flex-col align-middle justify-center {hoverClass[4] ? 'hover' : ''}"
           on:mouseenter={() => hoverClass[4] = true}
           on:mouseleave={() => hoverClass[4] = false}
           href="/about">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
            </svg>
            <span>
            Freelance Portfolio
            </span>
        </a>

        <a class="text-white border rounded-md p-4 flex flex-col align-middle justify-center {hoverClass[5] ? 'hover' : ''}"
           on:mouseenter={() => hoverClass[5] = true}
           on:mouseleave={() => hoverClass[5] = false}
           href="/about">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
            </svg>
            <span>
            Hobbies
            </span>
        </a>
    </div>
</div>
