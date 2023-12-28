<script>
    import ProjectCard from "$lib/work/ProjectCard.svelte";

    export let data;
    console.log(data);
</script>
<ProjectCard project={data.props.project}/>
