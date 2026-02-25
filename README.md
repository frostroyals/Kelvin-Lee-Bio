# CV Website (index.html)

This is a simple, responsive CV website built as static HTML/CSS/JS.

Files
- `index.html` — main CV page. Replace placeholder content (name, summary, experience, links) with your own.
- `style.css` — styling, responsive layout and print rules.
- `script.js` — small utilities (theme toggle, copy email).

How to open
On Windows PowerShell, run:

```powershell
Start-Process .\index.html
```

This will open the file in your default browser.

Customize
- Replace the avatar placeholder image with your own photo (update the `src` on the `<img class="avatar">`).
- Edit sections under Experience / Education / Projects to match your background.
- Change colors in `style.css` by editing the CSS variables at the top.

Export to PDF (print-ready)
- In the browser, choose Print (Ctrl+P) → Destination: Save as PDF. The layout includes a print-friendly stylesheet.

Next steps you can ask me to do
- Generate a downloadable PDF version automatically.
- Add sections (publications, talks, references).
- Convert this to a one-page printable PDF with tighter typography.
