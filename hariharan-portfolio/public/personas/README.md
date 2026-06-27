# Persona illustrations

The hero deck shows an animated SVG scene for each persona by default. To use your
own images instead, drop files here with these EXACT names — they fade in
automatically (no code change needed), and fall back to the SVG if missing:

| Persona       | File name            |
| ------------- | -------------------- |
| Recruiter     | `recruiter_mode.png` |
| Creative      | `creator_mode.png`   |

Recommended: square-ish (e.g. 800×640), .png / .jpg / .webp. The deck crops with
`object-cover`, so center the subject. (Rename a `.jpg` to the `.png` name above,
or update the `file` fields in `src/data.js` to match your real extensions.)
