# <img src="assets/icon.png" width="25" alt="App Logo"> Satellite Info - Earth Observation Explorer

A high-performance, professional-grade Progressive Web Application (PWA) designed for the Earth Observation (EO) community. Explore satellite sensor specifications, discover spectral indices, and access STAC API endpoints with a sleek, dark-mode analytical dashboard.

<img src="assets/icon.png" width="180" alt="App Logo">

## 🚀 Key Features

- **📡 Comprehensive Earth Observation Catalog**: Detailed specs for over 35+ global missions and derived datasets (Sentinel, Landsat, Planet, SoilGrids, Copernicus Global Land Cover, SMAP, etc.), including band wavelengths, GSD, and orbit details.
- **🧪 Advanced Spectral Index Library**: A searchable database of indices with multi-satellite cross-referencing. Now features complex non-linear models (kNDVI), physics-based indices (PPI), urban extraction (IBI, BU), and detailed parameter/constant documentation (L, G, sigma) for accurate scientific modeling.
- **📊 Interactive Cross-Reference Matrix**: Instantly visualize which satellites support which indices through a searchable data matrix.
- **🎓 EO Learning & Knowledge Base**: Integrated tutorials and a comprehensive FAQ system covering SAR, thermal imaging, atmospheric correction, and optical data processing.
- **📶 PWA & Offline-First Design**: Fully functional offline capabilities with a robust Service Worker caching engine. No external API dependencies required for core reference data.
- **💎 Premium Design**: Modern glassmorphic UI optimized for both desktop "Reading Mode" and mobile accessibility.

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom properties, Flexbox/Grid, Glassmorphism)
- **PWA**: Service Workers (Cache v42+), Web App Manifest
- **CI/CD**: GitHub Actions for automated Pages deployment

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
