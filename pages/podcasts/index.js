import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://podcast-api.netlify.app");
  const data = await response.json();

  return {
    props: {
      podcasts: data,
    },
  };
};

const Podcasts = ({ podcasts }) => {
  return (
    <>
      <div>
        {podcasts.map((podcast) => (
          <Link
            href={"/podcasts/" + podcast.id}
            key={podcast.id}
            legacyBehavior
          >
            <div>
            <img src={podcast.image}></img>
            <h3>{podcast.title}</h3>
            <p>Seasons {podcast.seasons}</p>
            <p>{podcast.updated}</p>
            <p>#{podcast.genres}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Podcasts;
