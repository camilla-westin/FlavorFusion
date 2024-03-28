# A minimal Nuxt site with Sanity Studio

This starter uses [Nuxt](https://nuxt.com/) for the front end and [Sanity](https://www.sanity.io/) to handle its content.

## Prerequisities

- [Node.js](https://nodejs.org/en/) (v16.12 or later)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (optional)

## Getting started

The following commands are meant to be run in **both** the `/app` and `/studio` folders.

1. `npm install` to install dependencies
2. `npm create sanity@latest init --env`, this will:

- ask you to select or create a Sanity project and dataset
- output a `.env` file with appropriate variables
- _(or use `sanity init --env` if you have the CLI installed)_

3. `npm run dev` to start the development server

Your Nuxt app should now be running on [http://localhost:3000/](http://localhost:3000/) and Studio on [http://localhost:3333/](http://localhost:3333/).


![screencapture-localhost-3000-2024-03-28-09_00_22](https://github.com/camilla-westin/FlavorFusion/assets/5926916/8181d079-d9a4-421e-97c0-b61d1af45348)
