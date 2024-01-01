<script>
    let hoverClass = false;
    export let icon;
    export let title;
    export let href;
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

<a class="text-white border rounded-md p-4 flex flex-col align-middle justify-center w-fit {hoverClass ? 'hover' : ''}"
   on:mouseenter={() => hoverClass = true}
   on:mouseleave={() => hoverClass = false}
   href="{href}">
    {icon}
    <span>
        {title}
    </span>
</a>