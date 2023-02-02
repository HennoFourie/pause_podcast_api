export const getStaticPaths = async () => {
    const response = await fetch('https://podcast-api.netlify.app/')
    const data = await response.json()

    const paths = data.map(podcasts => {
        return {
            params: { id: podcasts.id.toString() }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    )
}

export default Details