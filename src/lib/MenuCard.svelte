<script>
    import {fly} from "svelte/transition";
    import MenuButton from "$lib/MenuButton.svelte";
    import {
        Icon,
        InformationCircle,
        ArrowRight,
        ArrowLeft,
        Home,
        RectangleStack,
        Squares2x2,
        Swatch, PresentationChartLine, RocketLaunch, User
    } from "svelte-hero-icons";

    export let size = '';
    export let animationConfig = {y: 200, duration: 2000};

    let hoverClass = [false, false, false, false, false, false, false];
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
        class="bg-zinc-900 rounded-lg p-8 mt-5 mx-5 w-full sm:w-1/2 flex"
        in:fly={animationConfig}
>
    <div class="grid grid-cols-2 sm:grid-cols-6 justify-center gap-1.5">
        <MenuButton title="About Me" href="/about" icon={User}></MenuButton>
        <MenuButton title="Tech Stack" href="/tech" icon={RectangleStack}></MenuButton>
        <MenuButton title="Work" href="/work" icon={Squares2x2}></MenuButton>
        <MenuButton title="Freelance" href="/freelance" icon={Swatch}></MenuButton>
        <MenuButton title="Lectures" href="/lectures" icon={PresentationChartLine}></MenuButton>
        <MenuButton title="Hobbies" href="/hobbies" icon={RocketLaunch}></MenuButton>
    </div>
</div>
