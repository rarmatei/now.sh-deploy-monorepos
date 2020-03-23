# Now.sh monorepo deployment support

This repository is managed with [Nx](https://nx.dev/). The tool allows you to easily manage monorepos and have multiple apps running in the same repo, with a shared set of libs, and a common `package.json` to maintain consistent versions across packages.

Video explaining the problem: https://youtu.be/7AGjUiXmkzg

---

The **Next.JS** app is in `apps/frontend`

To build it: `yarn build frontend` --> output is in `dist/apps/frontend`
To serve it locally: `yarn serve frontend`

**! Important:** _`apps/frontend/pages/index.tsx` depends on `libs/custom-utilities`_ (why this is important explained below)

---

### Issue

**Goal:** deploy the `frontend` app to `now.sh`.

1. We could either deploy the whole monorepo, and tell `now.sh` to look in `dist/apps/frontend`.

2. Or `cd` to `apps/frontend` and deploy just the app.

**Problems with above:**

1. We can't deploy the whole monorepo because dozens of other libraries/projects might be part of it. We only want to deploy the files necessary for the `frontend` app to run correctly.

2. Because we're in a monorepo, we only have a root `package.json` to ensure dependency versions are in sync. We can copy the root `package.json` to the frontend project just before pushing it Now.sh, but we don't know which of the dependencies in are needed just for `frontend` (the risk of installing to many unnecessary deps)

3. `frontend` might depend on some local `libs/` (which it does!) We don't know which ones, so we'd have to deploy the whole `libs` folder - which might be very big!

---

### Proposed solution

`now.sh` works incredibly well (and I apologize in advance if I get any of this wrong) if you push the sources for a `Next.JS` project and you allow **it** to:

1. do the build
2. configure its serverless functions to allow SSR

However, if you'd allow developers to:

1. do the **build** part locally
2. push the built artifacts to `now.sh` --> which then does **only** the second part: create serveless functions for SSR and serve it.

If we build locally, where we have all the dependencies necessary, and we deploy the built artifacts, which contains just the code needed for `frontend`, it would solve all the above problems.
