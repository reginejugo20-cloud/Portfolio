================================================================================
  REGINE J. VELASQUEZ — PORTFOLIO WEBSITE
  README & SETUP GUIDE
================================================================================

OVERVIEW
--------
This is a multi-page personal portfolio website for Regine J. Velasquez,
a Computer Science student at Don Mariano Marcos Memorial State University
(DMMMSU). The site includes frontend enhancements and a functional contact
form powered by a third-party backend service (Formspree).


FILES INCLUDED
--------------
  home.html        — Landing page with hero section and skills overview
  about.html       — Personal information and quick facts
  profile.html     — Professional summary, competencies, and tech stack
  education.html   — Academic background timeline
  experience.html  — Certificates and achievements timeline
  contact.html     — Contact information + working contact form (see below)
  shared.css       — All shared styles used across every page
  shared.js        — All shared JavaScript (nav, animations, form logic)
  README.txt       — This file


FRONTEND FEATURES
-----------------
  - Fixed navigation bar that darkens on scroll
  - Hamburger menu for mobile screens (≤720px)
  - Smooth page fade-in on load
  - Staggered hero animations (home page)
  - Scroll-reveal animation for cards
  - Card hover lift effect with shadow
  - Skill chip hover color transition
  - Inline underline animation on nav links
  - Shared CSS and JS — no repeated code across pages


BACKEND / TECH STACK — CONTACT FORM (Formspree)
-------------------------------------------------
This site is a STATIC frontend (HTML/CSS/JS), hosted on Vercel. It does NOT
use a custom server, a traditional database, or cloud storage. Instead, the
contact form on contact.html is connected to a third-party backend-as-a-
service called Formspree.

  WHAT IS FORMSPREE?
  Formspree is a hosted form backend API. It receives the form submission
  (Full Name, Email, Subject, Message) via an HTTPS POST request, validates
  it, and forwards it directly to an email inbox. No server code or
  database was written for this project — Formspree IS the backend.

  TECH STACK SUMMARY:
    Frontend  : HTML5, CSS3, vanilla JavaScript
    Hosting   : Vercel (connected to this GitHub repository for
                automatic deployments on every push to "main")
    Backend   : Formspree (third-party Forms API — handles form
                processing and email delivery; no custom server,
                no database, no cloud storage is used)

  SETUP STEPS:
    STEP 1: Go to https://formspree.io and create a free account.

    STEP 2: Click "New Form" and set the destination email to:
              reginejugo20@gmail.com

    STEP 3: Copy your Form ID. It looks like: xabcdefg
            Your full endpoint will be: https://formspree.io/f/xabcdefg

    STEP 4: Open contact.html in a text editor.
            Find this line (around line 60):
              data-endpoint="https://formspree.io/f/YOUR_FORM_ID"
            Replace YOUR_FORM_ID with your actual Form ID.
            Example:
              data-endpoint="https://formspree.io/f/xabcdefg"

    STEP 5: Save the file. The form is now live and will send messages
            directly to your Gmail inbox.

  FORM FEATURES:
    - Required field validation with live error messages
    - Submit button loading state ("Sending...")
    - Toast notification for success or error
    - Honeypot field to reduce spam


HOW TO USE LOCALLY
------------------
  1. Keep all files in the SAME folder — they reference each other.
  2. Open home.html in any modern web browser.
  3. Navigate using the top navigation bar.

  Note: The contact form requires an internet connection to submit
  (it calls the Formspree API). All other pages work fully offline.


HOW TO DEPLOY
--------------
  Currently deployed on Vercel, connected to this GitHub repository for
  automatic redeployment on every push to "main".

  Alternative (GitHub Pages — free static hosting):
    1. Go to Settings > Pages > Source: select "main" branch.
    2. Your site will be live at:
       https://your-username.github.io
       (or https://your-username.github.io/repo-name for project sites)


CONTACT INFORMATION
-------------------
  Owner   : Regine J. Velasquez
  Email   : reginejugo20@gmail.com
  Phone   : 09922034392
  Address : Salaan, Mangaldan, Pangasinan, Philippines
  Live Site : https://portfolio-regin1.vercel.app

================================================================================
  Built with HTML, CSS, and JavaScript · Hosted on Vercel
  Contact form backend powered by Formspree (no custom server/database)
================================================================================