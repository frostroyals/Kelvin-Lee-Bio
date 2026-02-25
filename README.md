
# CV Website (multi-page)

This repository contains a small static CV website in multiple pages inspired by a clean portfolio layout.

Files
- `index.html` — Menu (short biography and skills).
- `about.html` — Longer about / story, education and career.
- `projects.html` — Project listings.
- `contact.html` — Contact details and social links.
- `style.css` — styling, responsive layout and print rules.
- `script.js` — small utilities (theme toggle, copy email, active nav highlighting).

How to open
From PowerShell in the folder containing these files run:

```powershell
Start-Process .\index.html
```

Or open any of the other pages:

```powershell
Start-Process .\about.html
Start-Process .\projects.html
Start-Process .\contact.html
```

Customization notes
- Replace the avatar placeholder image with your photo (edit the `src` on the `<img class="avatar">`).
- Edit the content in each HTML file to match your details (bio, projects, social links).
- Change the primary color by editing `--accent` in `style.css`.

Printing to PDF
- Use the browser Print dialog (Ctrl+P) → Save as PDF. The CSS includes print rules to remove UI elements like the theme toggle.

If you'd like, I can:
- Personalize the content on each page using your exact bio, project descriptions, and social links.
- Prepare a single-page, print-optimized resume layout for a 1-page PDF.
- Create a GitHub Pages-ready index (including a `404.html`) and show deployment steps.
