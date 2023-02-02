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
            <h3>{podcast.title}</h3>
            <img src={podcast.image}></img>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Podcasts;
