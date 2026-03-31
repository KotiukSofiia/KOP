# Hangman Game — Lab 1


## Author

**Sofiia Kotiuk** — ipz231_ksv@student.ztu.edu.ua

---

## Quick Start

Install dependencies and run in development mode:

```bash
npm install
npm run dev
````

Launch Storybook (UI components):

```bash
npm run storybook
# open http://localhost:6006
```

Production build and local preview:

```bash
npm run build
npm run preview
```

-----

## Key Commands

  * `npm run dev` — start Vite for development
  * `npm run build` — build the project
  * `npm run preview` — local preview of the build
  * `npm run storybook` — start Storybook
  * `npm run docs` — generate JSDoc documentation (configured in `jsdoc.json` → `docs/`)
  * `npm run license-check` — generate `license-report.txt`

-----

## Files and Documentation

  * `LICENSE` — MIT License.
  * `PRIVACY.md` — Privacy Policy (GDPR).
  * `license-report.txt` — generated report from `license-checker` in the root.
  * `docs/` — generated documentation (open `docs/index.html`).
  
    https://github.com/user-attachments/assets/051f217b-24be-4364-8a92-d420c329e0bb
    
  * `.storybook/` — Storybook config; stories in `src/components/*.stories.jsx`.

-----

## Cookie / Privacy (GDPR)

Cookie consent component: `src/App.jsx`. It saves the user's choice in `localStorage` (`gdpr_analytics_enabled`) and initializes analytics only with consent.

Policy document: `PRIVACY.md` in the root.

-----

## Storybook

Storybook is fully configured. The project includes examples of stories for the `WordDisplay` and `Keyboard` components. Verify visually: `npm run storybook` → [http://localhost:6006](https://www.google.com/search?q=http://localhost:6006)

### WordDisplay (Basic Component)
<img width="1485" height="685" alt="image" src="https://github.com/user-attachments/assets/76e3aa06-2783-42fa-b23c-6edb36b814b5" />

<img width="1482" height="775" alt="image" src="https://github.com/user-attachments/assets/cd650d53-9db4-46d5-b708-dea51384a5e7" />


### Keyboard (Complex Component)
<img width="1481" height="706" alt="image" src="https://github.com/user-attachments/assets/3a514455-2f9c-4714-9c09-395d4d30b81e" />

<img width="1484" height="838" alt="image" src="https://github.com/user-attachments/assets/1565e14e-4908-44ec-938c-e38a2b1c305a" />


-----

## Contacts

Sofiia Kotiuk — [GitHub: @KotiukSofiia](https://github.com/KotiukSofiia)
