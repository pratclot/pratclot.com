module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID" || "none"),
        secretAccessKey: env("AWS_ACCESS_SECRET" || "none"),
        region: env("AWS_REGION" || "none"),
        params: {
          Bucket: env("AWS_BUCKET" || "none"),
        },
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
});
