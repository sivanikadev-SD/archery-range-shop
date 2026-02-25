# Archery Range & Pro Shop Website Template

A complete, responsive, and ready-to-use HTML/CSS/JS template for an Archery Range business.

## Features

- **Public Pages**: Home, About, Services, Leagues, Pro Shop, Blog, Contact.
- **Dashboards**: Separate User and Admin dashboards.
- **Design**: Modern UI with Tailwind CSS.
- **Themes**: Light & Dark mode support.
- **Internationalization**: RTL (Right-to-Left) and LTR (Left-to-Right) toggle support for multilingual needs.
- **Interactive**: Mobile menu, Charts (Chart.js), Tabular data.

## Project Structure

```
archery-range-template/
├── assets/
│ ├── css/
│ │ └── style.css       # Custom styles & imports
│ ├── js/
│ │ ├── main.js         # Global logic (Theme, RTL, Mobile Menu)
│ │ └── dashboard.js    # Dashboard charts & sidebar logic
├── pages/
│ ├── index.html
│ ├── about.html
│ ├── services.html
│ ├── leagues.html
│ ├── shop.html
│ ├── blog.html
│ ├── contact.html
│ ├── dashboard-user.html
│ └── dashboard-admin.html
└── README.md
```

## How to Use

1. **Open the Project**: Simply open `pages/index.html` in your web browser.
2. **Customization**:
   - **Colors**: Edit the `tailwind.config` script block in the `<head>` of any HTML file to change the primary/secondary colors.
   - **Content**: Update the HTML text and image `src` attributes.
   - **RTL**: Click the "LTR/RTL" button in the navbar to toggle direction.
3. **Deployment**: Upload the entire folder to any static web host (Netlify, Vercel, GitHub Pages, or traditional hosting).

## Technologies
- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Lucide Icons
- Chart.js (for Admin Dashboard)

## Credits
- Fonts: Google Fonts (Poppins, Inter)
- Icons: Lucide
- Images: Unsplash (Placeholders)
