# Using Next.js with Unsplash API
## Configuration

First, you'll need to [create an account on Unsplash](https://unsplash.com/) if you don't have one already. Once that's done, follow the steps below.

### Step 1. Create an app on Unsplash

To create a new application on Unsplash, click [here](https://unsplash.com/oauth/applications/new) or go to https://unsplash.com/oauth/applications/new.

Before creating an app you'll have to accept the terms for API use:

![Accept Unsplash app terms](./docs/app-terms.png)

Then, fill the form with the app name and description, and click on on **Create application** to finish the creation of your app:

![Form to fill app name and description](./docs/app-form.png)

### Step 2. Set up environment variables

After creating the app, you should be able to see the API keys in the settings page of your app:

![API Keys of Unsplash app](./docs/api-keys.png)

We'll need those API keys to connect the example with your Unsplash app.

First, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `UNSPLASH_ACCESS_KEY` should be the **Access Key** of your Unsplash app
- `UNSPLASH_COLLECTION_ID` should be any valid collection id from Unsplash app

### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 4. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

