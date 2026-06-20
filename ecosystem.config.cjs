module.exports = {
  apps: [
    {
      name: "swap-web-app",
      script: "npm",
      args: "run start:prod",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: "3005",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "3005",
      },
    },
  ],
};
