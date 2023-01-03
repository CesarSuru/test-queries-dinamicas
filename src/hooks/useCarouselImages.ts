import { useStaticQuery, graphql } from 'gatsby';

const useCarouselImages = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiPortada {
        edges {
          node {
            Imagenes {
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    height: 1000
                    jpgOptions: { quality: 1000 }
                    width: 1000
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  return result;
};

export default useCarouselImages;
