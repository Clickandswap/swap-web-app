This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Self-Host With PM2 (Node.js)

This repo now includes a lightweight production process setup using PM2.

1. Install PM2 globally on your server:

```bash
npm i -g pm2
```

2. Build and start the app:

```bash
npm run build
npm run pm2:start
```

3. Useful process commands:

```bash
npm run pm2:logs
npm run pm2:restart
npm run pm2:stop
```

4. Persist PM2 across reboots:

```bash
pm2 save
pm2 startup
```

## PM2 vs Nginx

- PM2 is a process manager (keeps Node running, restarts on crashes, manages logs).
- Nginx is a reverse proxy/web server (TLS termination, HTTP/2, compression, caching, rate limiting).

Best practice for production: use both.

- Run this Next.js app with PM2 on `127.0.0.1:3005`.
- Put Nginx in front on `80/443` for HTTPS and proxying.

Example Nginx site block:

```nginx
server {
	listen 80;
	server_name your-domain.com;

	location / {
		proxy_pass http://127.0.0.1:3005;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
}
```

Repository config file is available at `deploy/nginx/swap-web-app.conf`.
Non-SSL variant (for staging/private network) is available at `deploy/nginx/swap-web-app.non-ssl.conf`.

Server setup with that file:

```bash
# 1) Copy config to nginx sites-available
sudo cp deploy/nginx/swap-web-app.conf /etc/nginx/sites-available/swap-web-app.conf

# 2) Edit domain/certificate paths
sudo nano /etc/nginx/sites-available/swap-web-app.conf

# 3) Enable the site
sudo ln -s /etc/nginx/sites-available/swap-web-app.conf /etc/nginx/sites-enabled/swap-web-app.conf

# 4) Validate and reload
sudo nginx -t
sudo systemctl reload nginx
```

### Non-SSL Nginx Setup (Staging/Private Network)

```bash
# 1) Copy non-SSL config
sudo cp deploy/nginx/swap-web-app.non-ssl.conf /etc/nginx/sites-available/swap-web-app.non-ssl.conf

# 2) Edit domain/server_name
sudo nano /etc/nginx/sites-available/swap-web-app.non-ssl.conf

# 3) Enable the site
sudo ln -s /etc/nginx/sites-available/swap-web-app.non-ssl.conf /etc/nginx/sites-enabled/swap-web-app.non-ssl.conf

# 4) Validate and reload
sudo nginx -t
sudo systemctl reload nginx
```
