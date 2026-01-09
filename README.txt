
# Portfolio Site (Static)

A minimalist, responsive portfolio website with clickable project cards, client-side tag filters, and search.

## Quick start

1. Edit `assets/js/main.js` to update the `projects` array (title, tags, summary, URL, thumbnails).
2. Update each page in `/projects` or duplicate a template to add new projects.
3. Replace `assets/images/placeholder.svg` with your own thumbnails (keep the same file names or update the paths).
4. Optional: Add your `resume.pdf` at the site root and change the email link in `index.html`.
5. Deploy via:
   - **GitHub Pages**: push the folder to a repo, enable Pages for the `main` branch (root).
   - **Netlify/Vercel**: drag-and-drop the folder in the dashboard.

## Add a new project

- Duplicate any file in `/projects` and add its metadata to `projects` in `assets/js/main.js`.
- Thumbnails should be 1200×800 (or any 3:2 aspect ratio).

## Accessibility

- Cards are fully keyboard-focusable through their links.
- Filters and search use standard controls and ARIA labels.
