export const getStaticPaths = async () => {
  const response = await fetch("https://podcast-api.netlify.app");
  const data = await response.json();

  const paths = data.map((podcast) => {
    return {
      params: { id: podcast.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch("https://podcast-api.netlify.app/" + id);
  const data = await response.json();

  return {
    props: {
      podcast: data,
    },
  };
};

const Details = ({ podcast }) => {
  return (
    <div>
      <h1>{podcast.title}</h1>
      {/* <p>{podcast.description}</p> */}
      {/* <p>{podcast.season}</p> */}
      {/* <p>{podcast.genre}</p> */}
    </div>
  );
};

export default Details;
