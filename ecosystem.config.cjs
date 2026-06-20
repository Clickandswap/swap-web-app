module.exports = {
  apps: [
    {
      name: "swap-web-app",
      script: "node",
      args: ".next/standalone/server.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        HOSTNAME: "0.0.0.0",
        PORT: "3005",
      },
      env_production: {
        NODE_ENV: "production",
        HOSTNAME: "0.0.0.0",
        PORT: "3005",
      },
    },
  ],
};
