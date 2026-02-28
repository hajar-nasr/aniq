## Aniq

Aniq is a demo ecommerce storefront built with the Next.js App Router. It showcases a simple product catalog, filters, cart management, and a Stripe-powered checkout flow.

This repository implements the "Aniq" ecommerce project from [GreatFrontEnd Projects](https://www.greatfrontend.com/projects).

<img width="892" height="895" alt="Screenshot 2026-02-28 at 4 37 07 PM" src="https://github.com/user-attachments/assets/00d400da-cc74-4f67-aa03-7aec2ade5583" />
<img width="1466" height="875" alt="Screenshot 2026-02-28 at 4 38 05 PM" src="https://github.com/user-attachments/assets/e5a4c530-6e30-4785-b572-842c1df75c5f" />
<img width="863" height="901" alt="Screenshot 2026-02-28 at 4 38 28 PM" src="https://github.com/user-attachments/assets/30af8f4b-e323-47e8-8155-56b5cd3377c7" />
<img width="895" height="742" alt="Screenshot 2026-02-28 at 4 37 30 PM" src="https://github.com/user-attachments/assets/bc7a6637-bab9-4854-aaa4-a041cbaf584a" />




## Tech Stack

- Next.js 16 (App Router, TypeScript)
- React 19
- Tailwind CSS 4
- Stripe (Checkout + client-side via `@stripe/stripe-js`)

## Features

- Product listing with category and color filters
- Product detail pages with image gallery and details
- Cart state managed via React context and reducer
- Checkout session creation with Stripe
- Responsive layout for desktop, tablet, and mobile

## Project Structure

- `app/` – Next.js App Router entry, routes, and pages
	- `app/page.tsx` – homepage
	- `app/products/list` – product listing page
	- `app/products/item/[productId]` – product detail page
	- `app/cart` – cart page
	- `app/post-purchase` – post-checkout page
	- `app/components` – shared UI components (layout, product list, cart, etc.)
- `app/lib` – shared utilities, Stripe configuration, and types
- `app/reducers/cart` – cart context, reducer, and actions
- `app/api` – route handlers for products and checkout
- `public/` – static assets (images, icons)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Stripe Setup

To enable checkout locally, make sure you have a Stripe secret key and publishable key configured in your environment (for example, in a `.env.local` file) and that `app/lib/stripe.ts` reads from those variables.

If Stripe is not configured, you can still browse products and use the cart, but checkout may fail.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production build
- `npm run lint` – run ESLint
