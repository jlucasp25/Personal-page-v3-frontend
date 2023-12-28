export async function load({params}) {
    const id = params.id;
    const url = `http://localhost:8000/api/projects/${id}/`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        props: {
            project: data
        }
    };
}