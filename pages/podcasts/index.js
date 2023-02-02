import Link from 'next/link'

export const getStaticProps = async () => {

    const response = await fetch('https://podcast-api.netlify.app/')
    const data = await response.json()

    return {
        props: {
            podcasts: data
        }  
    }
}

const Podcasts = ({ podcasts }) => {
    return <>
        <div>
        {podcasts.map((podcasts) =>(
            (<Link href={'/podcasts/' + podcasts.id} key={podcasts.id}>

                <h3>{podcasts.title}</h3>
                <p>{podcasts.description}</p>
                <p>{podcasts.season}</p>
                <img src={podcasts.image}></img>
                <p>{podcasts.genres}</p>
                <p>{podcasts.updated}</p>

            </Link>)
            ))}
        </div>
    </>;
}

export default Podcasts