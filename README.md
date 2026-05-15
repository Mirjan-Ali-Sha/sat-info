# 🛰️ Satellite Info - Earth Observation Explorer

A high-performance, professional-grade Progressive Web Application (PWA) designed for the Earth Observation (EO) community. Explore satellite sensor specifications, discover spectral indices, and access STAC API endpoints with a sleek, dark-mode analytical dashboard.

<img src="assets/icon.png" width="180" alt="App Logo">

## 🚀 Key Features

- **📡 Comprehensive Satellite Catalog**: Detailed specs for over 25+ missions (Sentinel, Landsat, Planet, Maxar, Pixxel, etc.), including band wavelengths, GSD, and orbit details.
- **🧪 Spectral Index Library**: A searchable database of indices (NDVI, EVI, NDWI, etc.) with formulas and multi-satellite cross-referencing.
- **📊 Interactive Cross-Reference Matrix**: Instantly visualize which satellites support which indices through a searchable data matrix.
- **🎓 EO Learning & Knowledge Base**: Integrated tutorials and a comprehensive FAQ system for satellite data processing.
- **🔐 Secure Access Gate**: Branded login screen integrated with GitHub Action Secrets for secure private deployments.
- **📶 PWA & Offline Support**: Fully functional offline capabilities with a robust Service Worker caching engine.
- **💎 Premium Design**: Modern glassmorphic UI optimized for both desktop "Reading Mode" and mobile accessibility.

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom properties, Flexbox/Grid, Glassmorphism)
- **PWA**: Service Workers (Cache v38+), Web App Manifest
- **CI/CD**: GitHub Actions for automated secret injection and Pages deployment

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/sat-info.git
   cd sat-info
   ```

2. **Run Locally**:
   ```bash
   npx serve
   ```

## 🌐 Deployment

This project is optimized for deployment on **GitHub Pages**. Simply push your changes to the `main` branch, and the automated workflow will deploy the PWA to your site.

## 👤 Author

**Mirjan Ali Sha**
*Building professional tools for the Earth Observation community.*

---
© 2024 Satellite Info Explorer.
