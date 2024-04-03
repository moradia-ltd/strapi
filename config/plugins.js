module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },

  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"), // Required
      },
      settings: {
        defaultFrom: "hello@togetha.co.uk",
        defaultReplyTo: "hello@togetha.co.uk",
      },
    },
  },

  "import-export-entries": {
    enabled: true,
  },
   upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("CF_ACCESS_KEY_ID"),
        secretAccessKey: env("CF_ACCESS_SECRET"),
    
        endpoint: env("CF_ENDPOINT"),
        params: {
          Bucket: env("CF_BUCKET"),
        },
   
        cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
 

  // upload: {
  //   // config: {
  //   //   provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
  //   //   providerOptions: {
  //   //     serviceAccount: env.json("GCS_SERVICE_ACCOUNT"),
  //   //     bucketName: "strapi-togetha",
  //   //     publicFiles: true,
  //   //     uniform: false,
  //   //     baseUrl: "",
  //   //   },

  //   //   actionOptions: {
  //   //     upload: {},
  //   //     delete: {},
  //   //   },
  //   // },
  // },
});
