import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env`,
});

const strapiConfig = {
  resolve: `gatsby-source-strapi`,
  options: {
    apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
    accessToken:
      process.env.STRAPI_TOKEN ||
      '51a55fc95d84a3a04f5915ece7c48ffeaf9c0c0a06d5279d858e21805d3aad88c885d0aac91dcbd37e2aa57bc15b349721495d569a1c6a555306cffce5a93c7122cc7c4d41abd91a38d424628e75fda674187888ef2dd59df9b51ac96a46bc139d957aae0f13b928f9327c2db5ddc452816a1256b06e516f87b9ee137beaaded',
    collectionTypes: [
      'portada',
      'gerencia',
      'china-taiwan-bid',
      'contenido-china-taiwan-bid',
      'contenido-licitaciones-o-boletin',
      'documentos-base',
      'enlaces-pie-de-pagina',
      'licitacion-o-boletin',
      'categoria-noticia',
      'detalle-informacion',
      'galeria',
    ],
    singleTypes: ['quienes-somos-titulo', 'noticias-titulo'],
    queryLimit: 1000,
  },
};
const apolloConfig = {
  resolve: 'gatsby-plugin-apollo',
  options: {
    uri: 'http://localhost:1337/graphql',
  },
};
const config: GatsbyConfig = {
  siteMetadata: {
    title: `webprincipal-frontend`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  //flags: {
  //  DEV_SSR: true,
  //},
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    apolloConfig,
    strapiConfig,
  ],
};

export default config;
