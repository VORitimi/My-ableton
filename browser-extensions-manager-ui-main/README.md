# Browser Extensions Manager UI

A modern web application for managing browser extensions with dark/light theme support and filtering capabilities.

## Features

- 📱 Responsive design that works on desktop and mobile
- 🌓 Dark/Light theme toggle with persistent preference
- 🔍 Filter extensions by status (All/Active/Inactive)
- 🗑️ Remove extensions functionality
- 💾 Dynamic content loading from JSON
- 🎨 Clean and modern UI design

## Tech Stack

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Google Fonts (Noto Sans)

## Project Structure

```
browser-extensions-manager-ui/
├── assets/
│   └── images/
│       ├── icon-sun.svg
│       ├── icon-moon.svg
│       └── logo-*.svg
├── index.html
├── style.css
├── script.js
├── data.json
└── README.md
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/browser-extensions-manager-ui.git
```

2. Open the project in VS Code:
```bash
code browser-extensions-manager-ui
```

3. Install Live Server extension in VS Code

4. Right-click on `index.html` and select "Open with Live Server"

## Features Implementation

### Theme Toggle
- Switches between light and dark modes
- Saves preference to localStorage
- Automatically applies saved theme on page load

### Extension Filtering
- "All" shows all extensions
- "Active" shows only enabled extensions
- "Inactive" shows only disabled extensions

### Extension Cards
Each card displays:
- Extension logo
- Name
- Description
- Active/Inactive status
- Remove button

## Data Structure

Extensions are stored in `data.json` with the following structure:

```json
{
    "logo": "./assets/images/logo-example.svg",
    "name": "Extension Name",
    "description": "Extension description",
    "isActive": true
}
```

## CSS Variables

```css
:root {
  --primary-color: #6C63FF;
  --text-dark: #333333;
  --text-light: #666666;
  --background-light: #FFFFFF;
  --background-dark: #1A1A1A;
  --card-background: #F5F5F5;
  --card-background-dark: #2D2D2D;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Improvements

- [ ] Add search functionality
- [ ] Enable/Disable toggle for extensions
- [ ] Add drag-and-drop reordering
- [ ] Implement extension categories
- [ ] Add sorting options

## License

This project is licensed under the MIT License - see the LICENSE file for details.

