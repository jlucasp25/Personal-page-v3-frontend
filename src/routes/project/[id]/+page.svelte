<script context="module">
    import ProjectCard from "$lib/work/ProjectCard.svelte";

    const project = {};

    export async function load({page, fetch}) {
        const {id} = page.params;
        const response = await fetch(`http://localhost:8080/api/project/${id}`);
        const data = await response.json();
        console.log(data)

        return {
            props: {
                user: data
            }
        };
    }
</script>
<ProjectCard {project}/>