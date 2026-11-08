# Cognevance Technologies – Cloud Deployment Guide
## Deploying to GitHub Pages (Static Cloud Hosting)

This guide provides step-by-step instructions to initialize Git, create the remote GitHub repository, push the static codebase, deploy the website to GitHub Pages, configure HTTPS, and set up an optional custom domain.

---

## 1. Prerequisites

Before beginning the deployment, ensure you have:
1. A free [GitHub Account](https://github.com/).
2. [Git installed](https://git-scm.com/) on your local machine (`git --version` $\ge 2.25$).
3. The project source folder: `cognevance_cloud_static_website`.

---

## 2. Step 1: Git Repository Initialization

Open your terminal or command prompt inside the project folder:

```bash
# Navigate to the project root
cd cognevance_cloud_static_website

# Initialize a new local Git repository
git init

# Verify the branch name is 'main'
git branch -M main

# Check tracked files against .gitignore
git status
```

### Add and Commit All Files:
```bash
# Stage all files
git add .

# Create the initial commit
git commit -m "feat: initial commit of Cognevance Technologies static cloud website"
```

---

## 3. Step 2: Create Remote GitHub Repository

1. Log into your GitHub account at [https://github.com/](https://github.com/).
2. In the top right corner, click the **+** (plus icon) and select **New repository**.
3. Fill out the repository creation form:
   - **Repository name**: `cognevance_cloud_static_website`
   - **Description**: `Cloud-based static website deployment for Cognevance Technologies (Internship Level 1)`
   - **Visibility**: **Public** (required for free GitHub Pages hosting on standard accounts)
   - **Initialize this repository with**: Leave all checkboxes **unchecked** (do NOT add a README, .gitignore, or license since they already exist in the project).
4. Click **Create repository**.

---

## 4. Step 3: Link Remote & Push Source Code

Copy your repository remote URL from GitHub and execute:

```bash
# Add the remote origin (replace <your-username> with your actual GitHub username)
git remote add origin https://github.com/<your-username>/cognevance_cloud_static_website.git

# Push your code to the main branch
git push -u origin main
```

*(If prompted, authenticate using your GitHub Personal Access Token or GitHub CLI).*

---

## 5. Step 4: Configure GitHub Pages Deployment

GitHub Pages serves static websites directly from your repository's `main` branch.

1. In your GitHub repository, click on the **Settings** tab (gear icon in the top repository menu).
2. In the left-hand navigation sidebar under *Code and automation*, click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select **main**.
   - **Folder**: Select **/(root)**.
4. Click the **Save** button.
5. GitHub will now trigger the automated GitHub Pages deployment workflow.

---

## 6. Step 5: Verification & HTTPS Configuration

### 6.1 Check Build Progress
1. Click the **Actions** tab in your repository.
2. You will see a workflow named **pages build and deployment**.
3. Wait approximately 45–90 seconds until the green checkmark appears indicating completion.

### 6.2 Access Your Live Website
Your live website will be accessible globally at:
```
https://<your-username>.github.io/cognevance_cloud_static_website/
```

### 6.3 Enforce HTTPS
1. Return to **Settings → Pages**.
2. Scroll down to the **Enforce HTTPS** checkbox.
3. Verify that **Enforce HTTPS** is checked. This ensures all traffic is automatically redirected to secure TLS/SSL connections provided free by GitHub's Let's Encrypt integration.

---

## 7. Step 6: Troubleshooting Deployment Issues

| Problem | Cause | Solution |
| :--- | :--- | :--- |
| **Site shows 404 Not Found** | GitHub Pages build is still in progress or wrong branch selected | Wait 1-2 minutes; verify **Settings → Pages** is set to branch `main` and folder `/(root)`. |
| **CSS or JS fails to load (blank/unstyled site)** | Absolute asset paths (e.g. `/css/style.css`) used instead of relative paths | Ensure all asset paths use relative notation (`./css/style.css`, `./js/script.js`, `./assets/...`). Our codebase is pre-configured with relative paths. |
| **Images or icons missing** | Case sensitivity in filenames (e.g. `logo.PNG` vs `logo.png`) | Ensure exact filename casing matches Linux filesystem standards. |
| **Changes not appearing after git push** | Browser cache holding previous version | Perform a hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`). |

---

## 8. Optional: Custom Domain Configuration (CNAME)

To connect a custom branded domain (e.g. `www.cognevancetech.com`):

1. **Add CNAME Record in DNS Provider** (Cloudflare, Namecheap, GoDaddy):
   - Type: `CNAME`
   - Name / Host: `www`
   - Value / Target: `<your-username>.github.io`
2. **Add Apex A Records** (for root domain `cognevancetech.com`):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. **Configure in GitHub**:
   - In **Settings → Pages**, enter your domain in **Custom domain** and click **Save**.
   - A `CNAME` file will be created in your repository root.
   - Check **Enforce HTTPS** once the SSL certificate issues (usually 10–20 minutes).
