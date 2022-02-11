/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MovieContext } from "./../Context/MovieContext";
import Container from "./../ReusableComponents/Container";

const Popular = () => {
  const { popularMovies } = useContext(MovieContext);

  return (
    <div css={styles} className="popularMovies">
      <Container>
        {popularMovies.results &&
          popularMovies.results.map((popularMovieItem, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500/${popularMovieItem.poster_path}`}
              alt="poster"
            />
          ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-of-type(1) {
      height: 81vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default Popular;
