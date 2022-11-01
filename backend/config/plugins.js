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
});
