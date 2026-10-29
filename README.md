# Sudheer Kirana & Fancy Store — React one-page website

A responsive one-page business website built with React, Vite, Bootstrap 5 and custom CSS. The supplied logo is included at `public/images/sudheer-logo.png`.

## 1. Run locally

Install Node.js (LTS), then open a terminal in this project folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## 2. Add your own downloaded images

Put image files in `public/images/`. Reference them in React using a path that starts with `/images/`, for example:

```jsx
<img src="/images/store-interior.jpg" alt="Inside Sudheer Kirana and Fancy Store" />
```

Replace the logo file at `public/images/sudheer-logo.png` if you have a newer version, keeping the same filename.

## 3. Personalize before publishing

In `src/App.jsx`, search for and replace:
- `ADD YOUR FULL SHOP ADDRESS`
- `ADD YOUR PHONE NUMBER`
- `ADD YOUR OPENING HOURS`

Also update category descriptions and product offerings to match what the store actually sells. Do not publish placeholder contact details.

For a real phone link, replace the phone placeholder with something like:
```jsx
<a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
```
Use the store's real number.

## 4. Test a production build

```bash
npm run build
npm run preview
```

If the build succeeds, the production site is generated in `dist/`.

## 5. Deploy to Vercel

1. Create a GitHub repository and upload this project folder.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your GitHub repository.
4. Vercel should detect Vite automatically. Use:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Select **Deploy**. Vercel will give you a live URL.
6. After edits, push commits to GitHub; Vercel will redeploy automatically.

No environment variables are required for this static website.

## Project structure

```text
sudheer-kirana-fancy-store/
├── public/
│   └── images/
│       └── sudheer-logo.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Notes

- The site is responsive for mobile, tablet and desktop.
- The contact details are placeholders because no real address, phone number or opening hours were provided.
- The category cards are informational; this is not an online ordering or payment site.
