# Din mægler – Real Estate Web App

A modern house selling website built with **React**, **React Router**, **QueryStack**, and **TailwindCSS**. Users can browse properties and save **favorites** after **logging in**, using features like useLoaderData, useActionData, and the Fetch API (https://dinmaegler.onrender.com) for efficient data management. Includes a site favicon and responsive UI.

## Live Demo

Check out the live website here: [your-dream-home.netlify.app](https://your-dream-home.netlify.app/)

## Goals
- Display searchable/filterable property listings.
- Secure authentication (email/password) using session or JWT.
- Favorites only for logged‑in users.
- Responsive, accessible UI with TailwindCSS.

## Tech Stack
- Frontend: React, React Router, QueryStack, TailwindCSS
- Data Handling: useLoaderData, useActionData, Fetch API
- Auth: custom JWT
- CI/CD: GitHub Actions / Netlify 

## Architecture
- React SPA with React Router for navigation.
- QueryStack for data fetching, caching, and state management.
- TailwindCSS for utility-first styling.
- Authentication uses HTTP‑ sessions or JWT with refresh tokens.
- Favorites are stored in a join table keyed by user_id and property_id.

## Contact Information
For questions or feedback, reach out to [satyo97du@gmail.com](mailto:satyo97du@gmail.com).