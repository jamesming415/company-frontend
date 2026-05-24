# company-website
digitwise.org website

## Local development

This project is split into two servers:

- Frontend: Vite React app in the project root.
- Backend: Express contact API in `backend/`.

Run the backend:

```bash
cd backend
npm install
npm run dev
```

Run the frontend in another terminal:

```bash
npm install
npm run dev
```

For local development, Vite proxies `/api` requests to `http://localhost:10000`. You can change that with `VITE_API_PROXY_TARGET`.

## Render deployment

Deploy as two Render services.

Backend web service:

- Root directory: `backend`
- Service type: Web Service
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/api/health`

Environment variables:

- `FRONTEND_ORIGIN`: your frontend URL, for example `https://digitwise-website-frontend.onrender.com`
- `CONTACT_TO`: inbox that receives client messages, for example `connect@digitwise.org`
- `CONTACT_FROM`: verified sender address for your SMTP provider
- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port, usually `587`
- `SMTP_SECURE`: `true` for port `465`, otherwise `false`
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password or app password

If SMTP variables are not set, the backend still accepts contact submissions and prints them to Render logs.

Frontend static site:

- Service type: Static Site
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Environment variable: `VITE_API_BASE_URL` set to the backend service URL, for example `https://digitwise-contact-backend.onrender.com`
# company-frontend
