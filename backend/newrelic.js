"use strict";

exports.config = {
  app_name: [process.env.NEW_RELIC_APP_NAME || "Default Application Name"],

  license_key: process.env.NEW_RELIC_LICENSE_KEY || "YOUR_LICENSE_KEY",

  logging: {
    level: "info",
  },

  distributed_tracing: {
    enabled: true,
  },

  no_uncaught_exceptions: false,
};
