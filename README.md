# Madhu Shree &mdash; Developer Portfolio Website

A modern, clean, and fully responsive personal developer portfolio website designed for **Madhu Shree**, an MCA student and aspiring Full Stack Web Developer.

Built strictly using **vanilla HTML5, CSS3, and JavaScript** with zero heavy framework overhead, ensuring fast load times, high accessibility, and clean code that is easy to understand and customize.

---

## 🌟 Key Features

- **Personalized Hero Section:** Introduces Madhu Shree as an MCA student and aspiring Full Stack Developer with quick call-to-action buttons.
- **Interactive Code Card:** A styled developer code preview highlighting core skills and current project focus.
- **Honest & Authentic Skills Showcase:** Structured skill cards for **HTML5, CSS3, JavaScript, PHP, and MySQL** without exaggerated percentages or fake mastery ratings.
- **Featured Project (Staff Automation System):**
  - Displays description, key features, database structure, and tech stack tags.
  - Includes a "View on GitHub" button.
  - Transparent "Live Demo: Coming Soon" status explaining local PHP/MySQL server requirements with local testing instructions.
- **Dark & Light Mode Toggle:** Seamless theme switcher with persistent settings saved to `localStorage` and system theme detection.
- **Fully Responsive Design:** Crafted using CSS Flexbox and CSS Grid to look great across mobile smartphones, tablets, laptops, and wide desktop screens.
- **Mobile Navigation Drawer:** Accessible animated hamburger toggle that automatically closes on link clicks or clicks outside.
- **Client-Side Form Validation:** Clean interactive contact form with instant validation, helpful error messages, and feedback toasts without page reloading.
- **Education Timeline:** Displays Master of Computer Applications (MCA) and Bachelor's degree with clearly marked editable placeholders.
- **Resume Section:** Dedicated resume card with overview modal and downloadable link prepared for `assets/Madhu_Shree_Resume.pdf`.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible markup, forms, and metadata |
| **CSS3** | Modern styling, CSS Custom Properties (Variables), Flexbox, Grid, animations, and media queries |
| **Vanilla JavaScript (ES6+)** | Theme switching, mobile menu toggle, scroll spy, modal windows, and form validation |
| **Google Fonts** | *Plus Jakarta Sans* (modern UI) and *Fira Code* (monospace code accents) |

---

## 📁 Project Directory Structure

```text
portfolio/
├── index.html         # Main semantic HTML structure
├── style.css          # Responsive design & light/dark theme variables
├── script.js          # Theme toggle, mobile menu, scroll spy, and form logic
├── README.md          # Project documentation and deployment guide
├── .gitignore         # Git ignore file for clean repositories
└── assets/            # Folder for downloadable resume and images
    ├── README.md      # Instructions for placing assets
    └── Madhu_Shree_Resume.pdf  # (Place your PDF resume here)
```

---

## ⚙️ Step-by-Step Customization Guide

Every customizable section in `index.html` has helpful comments labeled `<!-- EDITABLE -->`:

1. **College / University Name & Dates:**
   - Open `index.html` and find `<section id="education">`.
   - Update `[Your College / University Name]` and graduation dates `[2024 – 2026]`.
2. **Contact Links & Email:**
   - Find `<section id="contact">`.
   - Update `mailto:madhushree.dev@example.com` with your real email.
   - Update `linkedin.com/in/...` and `github.com/...` with your actual profile URLs.
3. **Resume Download:**
   - Save your resume in PDF format.
   - Name it `Madhu_Shree_Resume.pdf`.
   - Copy it into the `assets/` folder.
4. **Staff Automation System GitHub Link:**
   - Find the `<a id="github-project-btn">` in `<section id="projects">`.
   - Change the URL to your project repository link.

---

## 💻 How to Test Locally

You can test this portfolio on your computer using either of these simple methods:

### Method 1: Double-Click (Simplest)
1. Navigate to your `portfolio/` folder in File Explorer.
2. Double-click `index.html`. It will immediately open in Google Chrome, Edge, or your default browser.

### Method 2: VS Code Live Server (Recommended)
1. Open the `portfolio` folder inside **Visual Studio Code**.
2. If installed, right-click `index.html` and click **"Open with Live Server"**.
3. Your browser will open `http://127.0.0.1:5500/index.html` with instant live reload as you edit.

---

## 🚀 How to Publish to GitHub & Host Online

Follow these beginner-friendly steps to upload your portfolio to GitHub and publish it for free:

### Step 1: Initialize Git and Commit
Open PowerShell or your terminal inside the `portfolio/` folder:

```bash
# 1. Initialize a new Git repository
git init

# 2. Add all project files
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Madhu Shree Developer Portfolio"
```

### Step 2: Push to GitHub
1. Go to [github.com](https://github.com) and log in.
2. Click the **+** (plus icon) in the top right corner and select **New repository**.
3. Set Repository name to `portfolio` (or `madhu-portfolio`).
4. Keep it **Public** and leave "Add a README file" unchecked (you already have one).
5. Click **Create repository**.
6. Copy the commands shown under **"push an existing repository from the command line"** and run them:

```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/portfolio.git
git push -u origin main
```

*(Replace `<YOUR-GITHUB-USERNAME>` with your actual GitHub username).*

---

### Step 3: Free Hosting

Choose either **GitHub Pages** or **Vercel**:

#### Option A: GitHub Pages (Free & Built into GitHub)
1. In your GitHub repository, click on the **Settings** tab.
2. In the left navigation menu, click **Pages** (under "Code and automation").
3. Under **Build and deployment > Branch**:
   - Select `main` from the dropdown.
   - Leave the folder set to `/ (root)`.
   - Click **Save**.
4. Wait 1 to 2 minutes, then refresh the page.
5. GitHub will provide your live URL (e.g., `https://<YOUR-GITHUB-USERNAME>.github.io/portfolio/`).

#### Option B: Vercel (Fast & Professional)
1. Go to [vercel.com](https://vercel.com) and sign in using your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Find your `portfolio` repository from the list and click **Import**.
4. Leave all settings at default and click **Deploy**.
5. Within 15 seconds, your website will be live with a free custom SSL domain (e.g., `madhu-portfolio.vercel.app`)!

---

## 📄 License & Attribution

This portfolio project is open-source and free to use for personal portfolios. Created for **Madhu Shree**.
