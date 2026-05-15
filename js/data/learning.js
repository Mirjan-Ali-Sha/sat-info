const LEARNING_RESOURCES = [
  {
    id: "rs-basics-1",
    title: "Understanding the Electromagnetic Spectrum",
    category: "Remote Sensing Basics",
    level: "Beginner",
    duration: "10 mins",
    videoSearch: "NASA Tour of the Electromagnetic Spectrum",
    desc: "A fundamental guide to how different wavelengths interact with Earth's surface and why they matter for satellite imaging.",
    content: `
      <h3>Introduction</h3>
      <p>Remote sensing relies on the measurement of electromagnetic radiation (EMR). Every object reflects, absorbs, or emits radiation in a unique way based on its physical and chemical properties.</p>
      
      <h3>Key Regions of the Spectrum</h3>
      <ul>
        <li><strong>Visible (0.4 - 0.7 µm):</strong> The range humans can see (Blue, Green, Red). Used for true-color imagery.</li>
        <li><strong>Near-Infrared (0.7 - 1.1 µm):</strong> Highly reflected by healthy vegetation. Used for NDVI and biomass estimation.</li>
        <li><strong>Short-Wave Infrared (1.1 - 2.5 µm):</strong> Sensitive to leaf water content and soil moisture. Excellent for geology and fire mapping.</li>
        <li><strong>Thermal Infrared (3 - 15 µm):</strong> Measures heat emitted from surfaces. Used for Land Surface Temperature (LST).</li>
        <li><strong>Microwave (1 mm - 1 m):</strong> Used by SAR sensors. Penetrates clouds and smoke.</li>
      </ul>
      
      <h3>Spectral Signature</h3>
      <p>A spectral signature is the specific combination of reflected and absorbed electromagnetic radiation at varying wavelengths which can be used to identify an object.</p>
    `
  },
  {
    id: "rs-basics-2",
    title: "Sensor Types: Active vs Passive",
    category: "Remote Sensing Basics",
    level: "Beginner",
    duration: "8 mins",
    videoSearch: "NASA ARSET Fundamentals of Remote Sensing Active vs Passive",
    desc: "Learn the core difference between optical sensors that use sunlight and radar sensors that provide their own energy source.",
    content: `
      <h3>Passive Remote Sensing</h3>
      <p>Passive sensors detect natural radiation that is emitted or reflected by the object or surrounding areas. Reflected sunlight is the most common source of radiation measured by passive sensors (e.g., Sentinel-2, Landsat).</p>
      <p><strong>Limitation:</strong> They can only collect data during daylight hours and cannot see through clouds.</p>
      
      <h3>Active Remote Sensing</h3>
      <p>Active sensors provide their own energy source for illumination. The sensor emits radiation which is directed toward the target to be investigated. The radiation reflected from that target is detected and measured by the sensor.</p>
      <p><strong>Examples:</strong> SAR (Radar), LiDAR, Sonar.</p>
      <p><strong>Advantage:</strong> Can operate day or night and (in the case of Radar) penetrate clouds, smoke, and light rain.</p>
    `
  },
  {
    id: "gis-basics-1",
    title: "Vector vs Raster Data Models",
    category: "GIS Foundations",
    level: "Beginner",
    duration: "12 mins",
    videoSearch: "NEON Science Raster vs Vector Data",
    desc: "Deep dive into the two primary ways we represent spatial information in a GIS environment.",
    content: `
      <h3>The Raster Model</h3>
      <p>Raster data represents the world as a grid of equally sized cells (pixels). Each cell contains a value representing information (e.g., elevation, reflectance, temperature).</p>
      <p><strong>Best for:</strong> Continuous data like satellite imagery, elevation (DEM), or weather maps.</p>
      
      <h3>The Vector Model</h3>
      <p>Vector data represents world features using discrete points, lines, and polygons. These features have defined boundaries and can have associated attribute tables.</p>
      <ul>
        <li><strong>Points:</strong> Trees, cities, fire hydrants.</li>
        <li><strong>Lines:</strong> Roads, rivers, power lines.</li>
        <li><strong>Polygons:</strong> Lakes, city boundaries, forest patches.</li>
      </ul>
      <p><strong>Best for:</strong> Discrete features with precise boundaries.</p>
    `
  },
  {
    id: "gis-dev-1",
    title: "Working with GeoJSON and TopoJSON",
    category: "GIS Development",
    level: "Intermediate",
    duration: "15 mins",
    videoSearch: "Working with GeoJSON and TopoJSON tutorial",
    desc: "Essential formats for web mapping. Learn when to use standard GeoJSON and when to switch to TopoJSON for efficiency.",
    content: `
      <h3>GeoJSON</h3>
      <p>An open standard format designed for representing simple geographical features along with their non-spatial attributes. It is based on JSON.</p>
      <pre><code>{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}</code></pre>
      
      <h3>TopoJSON</h3>
      <p>An extension of GeoJSON that encodes topology. Instead of representing geometries discretely, TopoJSON geometries are stitched together from shared line segments called arcs.</p>
      <p><strong>Benefits:</strong> Significantly smaller file sizes (often 80% reduction) and eliminates topological errors (like gaps between polygons).</p>
    `
  },
  {
    id: "rs-adv-1",
    title: "Atmospheric Correction Explained",
    category: "Advanced Processing",
    level: "Advanced",
    duration: "20 mins",
    videoSearch: "NASA ARSET Atmospheric Correction satellite imagery",
    desc: "Why we need to convert Top-of-Atmosphere (TOA) to Bottom-of-Atmosphere (BOA/Surface) reflectance for scientific analysis.",
    content: `
      <h3>The Problem</h3>
      <p>Satellites 'see' the Earth through the atmosphere. Atmospheric gases and aerosols scatter and absorb light, distorting the signal from the ground.</p>
      
      <h3>TOA vs BOA</h3>
      <ul>
        <li><strong>TOA (Top of Atmosphere):</strong> Raw reflectance measured at the sensor. Includes atmospheric interference.</li>
        <li><strong>BOA (Bottom of Atmosphere):</strong> Surface reflectance after removing atmospheric effects. Essential for multi-temporal analysis.</li>
      </ul>
      
      <h3>Typical Processing Workflow</h3>
      <ol>
        <li><strong>Metadata Extraction:</strong> Read solar zenith angles and ozone levels from the metadata file (e.g., XML).</li>
        <li><strong>Aerosol Estimation:</strong> Identify 'Dark Dense Vegetation' pixels to estimate atmospheric haze.</li>
        <li><strong>Radiative Transfer Modeling:</strong> Use a model (like 6S or MODTRAN) to calculate how much light was scattered.</li>
        <li><strong>Surface Reflectance Calculation:</strong> Apply the correction factor to each pixel to get the true ground value.</li>
      </ol>

      <h3>Common Tools</h3>
      <ul>
        <li><strong>Sen2Cor (ESA):</strong> Command-line tool for Sentinel-2 Level-2A processing.</li>
        <li><strong>SNAP (SeNtinel Application Platform):</strong> The GUI desktop app for all ESA missions.</li>
        <li><strong>ARSET Tutorials:</strong> Excellent for learning the theory behind these steps.</li>
      </ul>
    `
  },
  {
    id: "gis-dev-2",
    title: "Intro to Python for Raster Processing (Rasterio)",
    category: "GIS Development",
    level: "Intermediate",
    duration: "20 mins",
    videoSearch: "Python Rasterio tutorial beginner NDVI",
    desc: "A hands-on guide to reading, manipulating, and writing satellite imagery using the powerful Rasterio library.",
    content: `
      <h3>Why Rasterio?</h3>
      <p>Rasterio is a Python library that makes working with geospatial raster data (like GeoTIFFs) more intuitive by using NumPy-style arrays.</p>
      
      <h3>Basic Workflow</h3>
      <pre><code>import rasterio
from rasterio.plot import show

# Open the dataset
with rasterio.open('satellite_img.tif') as src:
    print(src.width, src.height)
    print(src.crs)
    # Read the first band as a numpy array
    band1 = src.read(1)
    
# Plot it
show(band1)</code></pre>
      
      <h3>Calculating NDVI with Python</h3>
      <pre><code>import numpy as np

# Read Red and NIR bands
with rasterio.open('sentinel2.tif') as src:
    red = src.read(4).astype('float32')
    nir = src.read(8).astype('float32')

# Calculate NDVI
ndvi = (nir - red) / (nir + red)

# Handle division by zero
ndvi = np.where((nir + red) == 0, 0, ndvi)</code></pre>
    `
  },
  {
    id: "rs-adv-2",
    title: "Understanding SAR Polarimetry",
    category: "Advanced Remote Sensing",
    level: "Advanced",
    duration: "18 mins",
    videoSearch: "NASA ARSET Synthetic Aperture Radar SAR basics",
    desc: "Explaining the significance of HH, VV, VH, and HV polarizations in Synthetic Aperture Radar (SAR) data.",
    content: `
      <h3>Introduction</h3>
      <p>SAR sensors emit and receive microwave signals. These signals can be polarized either horizontally (H) or vertically (V).</p>
      
      <h3>Four Common Combinations</h3>
      <ul>
        <li><strong>HH:</strong> Horizontal transmit, Horizontal receive. Good for identifying smooth surfaces like calm water.</li>
        <li><strong>VV:</strong> Vertical transmit, Vertical receive. Preferred for monitoring the sea surface state and rough surfaces.</li>
        <li><strong>VH/HV:</strong> Cross-polarization. Very sensitive to volume scattering, making it excellent for mapping forest biomass and identifying vegetation structure.</li>
      </ul>
      
      <h3>Decomposition</h3>
      <p>Advanced SAR analysis uses 'Polarimetric Decomposition' (e.g., Freeman-Durden) to separate the signal into three scattering types: Surface, Double-bounce, and Volume scattering.</p>
    `
  },
  {
    id: "gis-dev-3",
    title: "The Magic of Cloud Optimized GeoTIFFs (COG)",
    category: "GIS Development",
    level: "Advanced",
    duration: "15 mins",
    videoSearch: "Cloud Optimized GeoTIFF COG tutorial",
    desc: "Learn why COGs are the industry standard for cloud-native geospatial data and how they enable partial file reading.",
    content: `
      <h3>What is a COG?</h3>
      <p>A COG is a regular GeoTIFF file that has a specific internal organization (tiling and overviews) that allows HTTP Range Requests to fetch only the data needed for a specific zoom level or area.</p>
      
      <h3>Core Components</h3>
      <ol>
        <li><strong>Tiling:</strong> Data is organized into tiles (e.g., 256x256) rather than long strips.</li>
        <li><strong>Overviews:</strong> Downsampled versions of the image are embedded in the file for fast rendering at low zoom levels.</li>
        <li><strong>HTTP Range Requests:</strong> Clients can request specific byte ranges (e.g., 'give me bytes 1000 to 5000') rather than downloading the whole 5GB file.</li>
      </ol>
      
      <h3>Benefits</h3>
      <p>COGs enable 'Serverless GIS' where you can stream petabytes of data directly from S3/Google Cloud Storage to a web map without needing a middleware like GeoServer.</p>
    `
  },
  {
    id: "rs-adv-3",
    title: "ML: Random Forest for Land Cover Classification",
    category: "Remote Sensing Basics",
    level: "Intermediate",
    duration: "25 mins",
    videoSearch: "Scikit-learn Random Forest Land Cover Classification tutorial",
    desc: "A guide to using the Random Forest algorithm to classify land use types (urban, water, forest) from satellite imagery.",
    content: `
      <h3>Why Random Forest?</h3>
      <p>Random Forest is one of the most popular algorithms for remote sensing because it is robust to noise, handles high-dimensional data well, and provides 'feature importance' metrics.</p>
      
      <h3>The Workflow</h3>
      <ol>
        <li><strong>Training Data:</strong> Collect points representing different classes (e.g., Water, Forest).</li>
        <li><strong>Feature Selection:</strong> Use spectral bands (B2, B3, B4) and indices (NDVI, NDWI) as inputs.</li>
        <li><strong>Model Training:</strong> Train an ensemble of decision trees.</li>
        <li><strong>Classification:</strong> Apply the model to the entire satellite scene.</li>
      </ol>
      
      <h3>Python Snippet (Scikit-Learn)</h3>
      <pre><code>from sklearn.ensemble import RandomForestClassifier

# X = pixel values, y = class labels
rf = RandomForestClassifier(n_estimators=100)
rf.fit(X_train, y_train)

# Predict on new image data
classified_image = rf.predict(X_img)</code></pre>
    `
  },
  {
    id: "gis-dev-4",
    title: "Interactive Mapping with MapLibre GL JS",
    category: "GIS Development",
    level: "Intermediate",
    duration: "20 mins",
    videoSearch: "MapLibre GL JS tutorial beginner",
    desc: "Learn how to build high-performance, GPU-accelerated web maps using the open-source MapLibre GL JS library.",
    content: `
      <h3>Introduction</h3>
      <p>MapLibre GL JS is a powerful library for rendering vector tiles and GeoJSON data using WebGL. It is the community-maintained fork of Mapbox GL JS.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Vector Rendering:</strong> Sharp labels and smooth rotation/tilt.</li>
        <li><strong>Data-Driven Styling:</strong> Change colors or sizes based on feature properties in real-time.</li>
        <li><strong>3D Terrain:</strong> Visualize elevation data directly in the browser.</li>
      </ul>
      
      <h3>Hello World Map</h3>
      <pre><code>const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 1
});</code></pre>
    `
  },
  {
    id: "rs-phys-2",
    title: "Atmospheric Windows and Absorption",
    category: "Remote Sensing Basics",
    level: "Beginner",
    duration: "12 mins",
    videoSearch: "NASA Atmospheric Windows Remote Sensing tutorial",
    desc: "Understanding why satellite sensors only use specific parts of the EM spectrum to look at Earth.",
    content: `
      <h3>The Atmosphere as a Filter</h3>
      <p>Earth's atmosphere is not transparent to all wavelengths. Gases like Water Vapor, CO2, and Ozone absorb or scatter specific parts of the electromagnetic spectrum.</p>
      
      <h3>Atmospheric Windows</h3>
      <p>These are the wavelength ranges where the atmosphere is transparent and allows radiation to pass through to the sensor. Key windows include:</p>
      <ul>
        <li><strong>Visible Window:</strong> 0.4 - 0.7 μm (used by most optical satellites).</li>
        <li><strong>Near-Infrared:</strong> 0.7 - 1.3 μm (vegetation studies).</li>
        <li><strong>Thermal Window:</strong> 8 - 14 μm (measuring heat).</li>
        <li><strong>Microwave Window:</strong> > 1 cm (SAR sensors use this because it 'sees' through clouds).</li>
      </ul>
    `
  },
  {
    id: "rs-adv-4",
    title: "Fundamentals of LiDAR and Point Clouds",
    category: "Advanced Remote Sensing",
    level: "Intermediate",
    duration: "22 mins",
    videoSearch: "NEON Science How Does LiDAR Remote Sensing Work",
    desc: "A comprehensive look at Light Detection and Ranging (LiDAR) technology for creating high-precision 3D models.",
    content: `
      <h3>What is LiDAR?</h3>
      <p>LiDAR uses laser pulses to measure distances to the Earth's surface. By timing the return of these pulses, we can create dense 3D 'point clouds'.</p>
      
      <h3>Data Products</h3>
      <ul>
        <li><strong>DSM (Digital Surface Model):</strong> Captures everything (trees, buildings, ground).</li>
        <li><strong>DTM (Digital Terrain Model):</strong> 'Bare earth' model where vegetation and structures are filtered out.</li>
        <li><strong>Point Cloud:</strong> The raw XYZ data, often stored in LAS or compressed LAZ formats.</li>
      </ul>
      
      <h3>Multiple Returns</h3>
      <p>A single laser pulse can hit a leaf, then a branch, and finally the ground. This 'Multiple Return' capability allows LiDAR to 'see through' forest canopies to map the floor below.</p>
    `
  },
  {
    id: "gis-dev-5",
    title: "Distributed Computing with Dask",
    category: "GIS Development",
    level: "Advanced",
    duration: "25 mins",
    videoSearch: "Dask for Geospatial distributed computing tutorial",
    desc: "Scaling your spatial analysis from a single laptop to a massive cluster using Python and Dask.",
    content: `
      <h3>The Problem</h3>
      <p>Satellite imagery is getting too big for local RAM. A single Sentinel-2 scene is ~1GB, but a time-series analysis of 100 scenes requires 100GB of memory.</p>
      
      <h3>The Solution: Dask</h3>
      <p>Dask is a flexible library for parallel computing in Python. While libraries like <strong>Xarray</strong> and <strong>Rasterio</strong> are used to read the data, <strong>Dask</strong> is the 'engine' that splits the work into smaller tasks and runs them in parallel.</p>
      
      <h3>How it works</h3>
      <ol>
        <li><strong>Chunking:</strong> Data is split into smaller blocks (chunks).</li>
        <li><strong>Task Graph:</strong> Dask creates a 'recipe' (graph) of operations without actually doing them yet (Lazy Evaluation).</li>
        <li><strong>Execution:</strong> When you call <code>.compute()</code>, Dask executes the graph across all your CPU cores.</li>
      </ol>

      <h3>Example: Scaling with Dask</h3>
      <pre><code>import xarray as xr
from dask.distributed import Client

# 1. Start a Dask Cluster (Optional but recommended for monitoring)
client = Client() 

# 2. Open data with 'chunks'. This tells Xarray to use Dask!
ds = xr.open_mfdataset('path/to/*.tif', chunks={'x': 1024, 'y': 1024})

# 3. Define the analysis (Happens instantly, no data moved yet)
result = ds.mean(dim='time')

# 4. Trigger the actual parallel calculation
final_image = result.compute()</code></pre>
    `
  },
  {
    id: "rs-adv-5",
    title: "SAR Polarization: VV, VH, HH, HV Explained",
    category: "Advanced Remote Sensing",
    level: "Advanced",
    duration: "15 mins",
    videoSearch: "SAR Polarization VV VH HH HV explained",
    desc: "Understanding the physics of microwave scattering and why cross-polarization (VH/HV) is key for biomass mapping.",
    content: `
      <h3>Microwave Physics</h3>
      <p>SAR sensors transmit pulses in specific planes (Vertical or Horizontal) and receive backscatter in those same or rotated planes. This property, called 'Polarization', reveals the structural orientation of targets on the ground.</p>
      
      <h3>Key Polarimetric Modes</h3>
      <ul>
        <li><strong>Single-Pol:</strong> Only one combination (e.g., HH or VV). Common in older satellites.</li>
        <li><strong>Dual-Pol:</strong> One transmit, two receive (e.g., VV and VH). This is the standard mode for Sentinel-1.</li>
        <li><strong>Full-Pol (Quad-Pol):</strong> Alternating H and V transmit with both H and V receive. Provides the most complete structural information (e.g., RADARSAT-2, ALOS-2).</li>
      </ul>
      
      <h3>Applications by Polarization</h3>
      <ul>
        <li><strong>VV:</strong> Best for ocean waves, rough surfaces, and urban areas.</li>
        <li><strong>VH/HV:</strong> Superior for forest volume scattering and distinguishing crops from bare soil.</li>
        <li><strong>HH:</strong> Preferred for sea-ice monitoring and calm water detection.</li>
      </ul>
    `
  },
  {
    id: "rs-adv-6",
    title: "Level 1C vs Level 2A: The BOA Transition",
    category: "Advanced Processing",
    level: "Intermediate",
    duration: "12 mins",
    videoSearch: "Sentinel-2 Level 1C vs Level 2A atmospheric correction",
    desc: "A guide to understanding processing levels and why Level-2A (Surface Reflectance) is the gold standard for time-series analysis.",
    content: `
      <h3>Processing Levels Defined</h3>
      <p>Satellite data is delivered in 'levels' indicating how much processing has been applied to the raw signal.</p>
      
      <h3>Level-1C (TOA)</h3>
      <p><strong>TOA: Top of Atmosphere.</strong> This is radiometrically and geometrically corrected data, but it still contains the 'haze' of the atmosphere. Reflectance values are affected by smoke, water vapor, and aerosols.</p>
      
      <h3>Level-2A (BOA/SR)</h3>
      <p><strong>BOA: Bottom of Atmosphere (Surface Reflectance).</strong> This data has undergone atmospheric correction. It represents the true reflectance of the ground as if the atmosphere wasn't there.</p>
      
      <h3>Why choose Level-2A?</h3>
      <p>If you want to compare an image from January with an image from July, you <strong>must</strong> use Level-2A. Atmospheric conditions change daily; without correction, your NDVI changes might just be changes in haze, not changes in plant health.</p>
    `
  },
  {
    id: "gis-dev-7",
    title: "Mastering the STAC API",
    category: "GIS Development",
    level: "Advanced",
    duration: "20 mins",
    videoSearch: "SpatioTemporal Asset Catalog STAC API tutorial Python",
    desc: "Stop downloading zip files. Learn how to programmatically search and stream specific satellite scenes using the STAC standard.",
    content: `
      <h3>What is STAC?</h3>
      <p>The SpatioTemporal Asset Catalog (STAC) is a common language for describing geospatial data. It eliminates the need for mission-specific search APIs.</p>
      
      <h3>The STAC Hierarchy</h3>
      <ul>
        <li><strong>API:</strong> The search endpoint (e.g., Planetary Computer).</li>
        <li><strong>Collection:</strong> A group of similar data (e.g., 'sentinel-2-l2a').</li>
        <li><strong>Item:</strong> A specific scene at a specific time.</li>
        <li><strong>Asset:</strong> The actual files (e.g., 'red.tif', 'thumbnail.jpg').</li>
      </ul>
      
      <h3>Python Example (pystac-client)</h3>
      <pre><code>from pystac_client import Client
      
catalog = Client.open("https://earth-search.aws.element84.com/v1")
search = catalog.search(
    collections=["sentinel-2-l2a"],
    bbox=[-122, 37, -121, 38],
    datetime="2023-01-01/2023-12-31"
)
items = search.item_collection()
print(f"Found {len(items)} scenes!")</code></pre>
    `
  },
  {
    id: "rs-basics-3",
    title: "Hyperspectral vs Multispectral Imaging",
    category: "Remote Sensing Basics",
    level: "Intermediate",
    duration: "15 mins",
    videoSearch: "Hyperspectral vs Multispectral remote sensing explained",
    desc: "Moving beyond RGB + NIR. Understanding the power of contiguous narrow bands for advanced spectroscopy.",
    content: `
      <h3>Multispectral (MSI)</h3>
      <p>Satellites like Sentinel-2 or Landsat capture data in a few (4-13) <strong>wide, discrete bands</strong>. This is like taking a photo with a few colored filters. You can see big differences (Water vs Forest), but you miss subtle chemical details.</p>
      
      <h3>Hyperspectral (HSI)</h3>
      <p>Satellites like EnMAP or PRISMA capture data in hundreds (200+) of <strong>narrow, contiguous bands</strong>. This creates a 'Spectral Cube' where every pixel has a complete, continuous spectrum.</p>
      
      <h3>The Power of the 'Signature'</h3>
      <p>Because HSI captures the full curve, you can identify specific minerals (like Kaolinite vs Illite), distinguish between different tree species, or detect plastic pollutants in the ocean that appear identical to multispectral sensors.</p>
    `
  },
  {
    id: "rs-adv-7",
    title: "Demystifying Spectral Index Constants (L, G, C)",
    category: "Advanced Processing",
    level: "Advanced",
    duration: "15 mins",
    videoSearch: "Understanding Soil Adjusted Vegetation Index and EVI constants",
    desc: "Why some vegetation indices require constant values like 'L' or 'G', and how to tune them for your specific environment.",
    content: `
      <h3>The Need for Constants</h3>
      <p>Standard indices like NDVI assume a perfect linear relationship between vegetation and reflectance. In reality, soil background color and atmospheric haze alter this signal. Constants are introduced to 'correct' these interferences.</p>
      
      <h3>The 'L' Factor (Canopy Background)</h3>
      <p>Used in SAVI, EVI, and MSAVI. It adjusts for the brightness of the soil behind the plants.</p>
      <ul>
        <li><strong>L = 1.0:</strong> Used for very sparse vegetation (desert, early crop stage).</li>
        <li><strong>L = 0.5:</strong> The standard default, used for intermediate canopy cover.</li>
        <li><strong>L = 0.25:</strong> Used for dense, closed canopies (where soil is barely visible).</li>
      </ul>
      
      <h3>The 'G' and 'C' Factors (Atmospheric Resistance)</h3>
      <p>Used primarily in the Enhanced Vegetation Index (EVI).</p>
      <ul>
        <li><strong>G (Gain):</strong> Typically 2.5. It scales the index to prevent saturation.</li>
        <li><strong>C1 & C2:</strong> Aerosol resistance coefficients (usually 6.0 and 7.5). They use the Blue band to correct for aerosol scattering in the Red band.</li>
      </ul>
      
      <h3>Modern Non-Linear Constants (kNDVI)</h3>
      <p>The newer Kernel NDVI (kNDVI) uses a length-scale parameter <strong>sigma (σ)</strong>. It determines how 'non-linear' the calculation should be, allowing it to accurately measure biomass in extremely dense jungles where traditional NDVI maxes out at 1.0.</p>
    `
  },
  {
    id: "rs-basics-4",
    title: "Nighttime Lights (NTL) Remote Sensing",
    category: "Remote Sensing Basics",
    level: "Intermediate",
    duration: "12 mins",
    videoSearch: "VIIRS Day Night Band socioeconomic remote sensing",
    desc: "How sensors like VIIRS use the Day/Night Band to measure human economic activity, urbanization, and disaster impacts from space.",
    content: `
      <h3>What is Nighttime Light (NTL) Imaging?</h3>
      <p>Instead of relying on reflected sunlight, NTL sensors detect artificial light emissions from the Earth's surface during the night. The most prominent instrument today is the VIIRS Day/Night Band (DNB) on the Suomi-NPP and NOAA-20 satellites.</p>
      
      <h3>Key Applications</h3>
      <ul>
        <li><strong>Economic Proxy:</strong> NTL intensity strongly correlates with GDP and economic growth, allowing economists to estimate activity in data-poor regions.</li>
        <li><strong>Urbanization:</strong> Tracking the expansion of city footprints over time (e.g., the World Settlement Footprint relies heavily on NTL).</li>
        <li><strong>Disaster Response:</strong> Comparing pre- and post-disaster NTL images instantly reveals large-scale power outages caused by hurricanes or earthquakes.</li>
        <li><strong>Conflict Monitoring:</strong> Identifying population displacement and infrastructure destruction in war zones.</li>
      </ul>
      
      <h3>Challenges in NTL Processing</h3>
      <p>Processing raw VIIRS data is complex because the sensor also picks up moonlight, auroras, fires, and lightning. Scientists must rigorously filter out these 'ephemeral' lights to create stable 'Black Marble' composite products.</p>
    `
  },
  {
    id: "gis-foundations-2",
    title: "Raw vs Derived Earth Observation Data",
    category: "GIS Foundations",
    level: "Beginner",
    duration: "10 mins",
    videoSearch: "Earth observation derived datasets land cover",
    desc: "Understanding the difference between downloading raw pixel values and utilizing pre-computed analytical datasets.",
    content: `
      <h3>Raw / Surface Reflectance Data</h3>
      <p>Missions like Landsat and Sentinel provide 'raw' data—essentially a photograph consisting of digital numbers that represent reflectance in different wavelengths. To answer a question (e.g., "Where is the water?"), you must calculate indices, set thresholds, and run classifications yourself.</p>
      
      <h3>Derived / Thematic Datasets</h3>
      <p>Derived datasets are pre-processed products created by space agencies or research institutions. They have already converted the raw pixels into actionable classes or physical measurements over a massive scale.</p>
      
      <h3>Examples of High-Value Derived Data</h3>
      <ul>
        <li><strong>Copernicus Global Land Cover:</strong> A map where every 100m pixel is already classified as 'Forest', 'Urban', 'Cropland', etc.</li>
        <li><strong>JRC Global Surface Water:</strong> 35 years of Landsat data boiled down to show exactly where water occurs, how often, and how it has changed.</li>
        <li><strong>SoilGrids:</strong> Machine-learning models applied to global data to estimate the pH, clay content, and organic carbon of the soil at 250m resolution.</li>
      </ul>
      
      <h3>The Paradigm Shift</h3>
      <p>Modern GIS workflows often rely on combining these derived datasets (e.g., masking your Sentinel-2 NDVI analysis using the Copernicus Forest mask) rather than classifying everything from scratch.</p>
    `
  },
  {
    id: "rs-phys-3",
    title: "Beyond Optical: Gravity and Soil Moisture",
    category: "Advanced Remote Sensing",
    level: "Advanced",
    duration: "15 mins",
    videoSearch: "GRACE satellite gravity SMAP soil moisture explained",
    desc: "Discover how specialized missions use microwave radiometers and orbital mechanics to measure invisible Earth systems.",
    content: `
      <h3>SMAP (Soil Moisture Active Passive)</h3>
      <p>Optical sensors can only see the surface. To measure how much water is actually <em>in</em> the soil, NASA's SMAP mission uses an L-Band microwave radiometer. Microwaves at this frequency penetrate the top 5cm of the soil, and the signal changes based on the dielectric constant of water.</p>
      <p><strong>Use Cases:</strong> Crop yield prediction, flood risk modeling, and climate change monitoring.</p>
      
      <h3>GRACE-FO (Gravity Recovery and Climate Experiment Follow-On)</h3>
      <p>GRACE doesn't take pictures at all. Instead, it consists of twin satellites flying in formation, constantly measuring the microscopic distance between each other.</p>
      <p>As the first satellite passes over a dense mass (like a mountain or a massive underground aquifer), gravity pulls it slightly ahead. By tracking these orbital wobbles, scientists map Earth's gravity field.</p>
      <p><strong>Use Cases:</strong> Measuring the depletion of underground aquifers (like the California Central Valley) and the melting mass of the Greenland and Antarctic ice sheets.</p>
    `
  }
];
