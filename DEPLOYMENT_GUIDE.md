# 🚀 Deploy Your Portfolio to Vercel - Step by Step Guide

## Prerequisites
- ✅ GitHub account (create one at https://github.com if you don't have one)
- ✅ Vercel account (we'll create this during deployment)
- ✅ Git installed on your computer

---

## Step 1: Initialize Git Repository

1. Open terminal/command prompt in your project folder
2. Run these commands:

```bash
cd "C:\Users\ravik\Desktop\Portfolio\project"
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

---

## Step 2: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name:** `portfolio-website` (or any name you like)
   - **Description:** "My personal portfolio website"
   - **Visibility:** Public (or Private - your choice)
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

---

## Step 3: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 4: Deploy to Vercel

### Option A: Via Vercel Website (Recommended)

1. Go to https://vercel.com
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Click **"Add New Project"**
5. Import your repository:
   - Find and select `portfolio-website` (or your repo name)
   - Click **"Import"**
6. Configure Project Settings:
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `dist` (should be auto-filled)
   - **Install Command:** `npm install` (should be auto-filled)
7. Click **"Deploy"**
8. Wait 1-2 minutes for deployment
9. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Via Vercel CLI (Alternative)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd "C:\Users\ravik\Desktop\Portfolio\project"
vercel
```

4. Follow the prompts:
   - Link to existing project? **No**
   - Project name? (press Enter for default)
   - Directory? (press Enter for `./`)
   - Override settings? **No**

---

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (if you have one)
4. Follow DNS configuration instructions

---

## Step 6: Automatic Deployments

✅ **Good News!** Vercel automatically deploys when you push to GitHub:
- Every push to `main` branch = New deployment
- You can preview deployments from other branches
- All deployments get a unique URL

---

## Troubleshooting

### Build Fails?
- Check Vercel build logs for errors
- Make sure `package.json` has correct build script
- Verify all dependencies are in `package.json`

### Image Not Showing?
- Make sure image is in `src/assets/` folder
- Check import path in `App.tsx`
- Rebuild and redeploy

### Need to Update?
Just push changes to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel will automatically redeploy!

---

## Your Live Portfolio URL

After deployment, your portfolio will be available at:
- **Production:** `https://your-project-name.vercel.app`
- **Preview URLs:** For each branch/PR

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
