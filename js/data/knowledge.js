const KNOWLEDGE_BASE = [
  {
    id: "qa-rs-1",
    question: "What is the difference between Spatial, Spectral, Radiometric, and Temporal resolution?",
    category: "Remote Sensing Fundamentals",
    tags: ["Basics", "Theory"],
    answer: `
      <p>These four resolutions define the quality and characteristics of satellite data:</p>
      <ul>
        <li><strong>Spatial Resolution:</strong> The size of the smallest area on the ground represented by a single pixel (e.g., 10m for Sentinel-2).</li>
        <li><strong>Spectral Resolution:</strong> The number and width of spectral bands. High spectral resolution (hyperspectral) means many narrow bands.</li>
        <li><strong>Radiometric Resolution:</strong> The sensitivity of the sensor to small differences in brightness. Measured in bits (e.g., 12-bit = 4,096 levels, 16-bit = 65,536 levels).</li>
        <li><strong>Temporal Resolution:</strong> The revisit time; how often the satellite records an image of the same location (e.g., 5 days).</li>
      </ul>
    `
  },
  {
    id: "qa-gis-1",
    question: "Explain the difference between Geoid, Ellipsoid, and Datum.",
    category: "Geodesy & GIS",
    tags: ["GIS", "Geodesy"],
    answer: `
      <p>These are different ways to model the Earth's shape:</p>
      <ul>
        <li><strong>Ellipsoid:</strong> A simplified mathematical model (smooth surface) that approximates the Earth's shape (e.g., WGS84).</li>
        <li><strong>Geoid:</strong> A model of global mean sea level that reflects gravity variations across the planet (the 'true' physical shape of Earth's gravity).</li>
        <li><strong>Datum:</strong> A reference system that links the ellipsoid to the actual Earth. It defines the origin and orientation of the coordinate system (e.g., NAD83).</li>
      </ul>
    `
  },
  {
    id: "qa-dev-1",
    question: "What is a Spatial Index and why is it critical for GIS Databases?",
    category: "Technical GIS Development",
    tags: ["PostGIS", "Performance", "DB"],
    answer: `
      <p>Standard B-Tree indexes work for 1D data (numbers, strings) but fail for 2D/3D spatial data. A <strong>Spatial Index</strong> (typically an <strong>R-Tree</strong> or <strong>GIST</strong> in PostGIS) organizes geometries into a hierarchy of Minimum Bounding Boxes (MBB).</p>
      <p><strong>Why it's critical:</strong> Without it, a query like 'Find all trees in this city' would require a full table scan (comparing the query polygon against every single tree geometry). With an index, the database can quickly discard millions of geometries that don't even overlap the MBB of the query area.</p>
    `
  },
  {
    id: "qa-rs-2",
    question: "Why do we use the 'Red Edge' band in vegetation monitoring?",
    category: "Remote Sensing Fundamentals",
    tags: ["Vegetation", "Agriculture"],
    answer: `
      <p>The 'Red Edge' is the region (approx. 680-750nm) where a sharp increase in vegetation reflectance occurs between the Red and NIR regions. It is highly sensitive to chlorophyll concentration and leaf structure. While NDVI (Red/NIR) saturates in dense canopies, Red Edge indices (like NDRE) can distinguish subtle health differences in high-biomass crops.</p>
    `
  },
  {
    id: "qa-dev-2",
    question: "How do you handle 'Web Mercator' (EPSG:3857) distortion for area calculations?",
    category: "Technical GIS Development",
    tags: ["Web Mapping", "Accuracy"],
    answer: `
      <p>Web Mercator is great for visual tiling but is not 'Equal Area'. It significantly distorts size as you move away from the equator (Greenland looks bigger than Africa).</p>
      <p><strong>The Solution:</strong> Never calculate area directly in EPSG:3857. You should either:</p>
      <ol>
        <li>Project the geometry to a local Equal Area projection (like UTM or Albers) before calculating.</li>
        <li>Use 'geodetic' or 'ellipsoidal' area calculation functions (e.g., <code>ST_Area(geom::geography)</code> in PostGIS).</li>
      </ol>
    `
  },
  {
    id: "qa-gis-2",
    question: "What is the difference between a Shapefile and a GeoPackage?",
    category: "Geoprocessing & Data",
    tags: ["Formats", "Data Management"],
    answer: `
      <p><strong>Shapefile (.shp):</strong> Legacy format (1990s). Multiple files required, 10-character field limit, 2GB size limit, no support for NULL values.</p>
      <p><strong>GeoPackage (.gpkg):</strong> Modern open standard based on SQLite. A single file that can contain multiple layers (vector + raster), supports long field names, large file sizes, spatial indexes, and complex data types. It is the recommended standard for modern GIS workflows.</p>
    `
  },
  {
    id: "qa-dev-3",
    question: "What is 'Overzooming' in the context of WMTS/Tiled Map Services?",
    category: "Technical GIS Development",
    tags: ["Tiles", "Frontend"],
    answer: `
      <p>Overzooming occurs when a user zooms in past the maximum zoom level (LOD) for which map tiles exist (e.g., zooming to level 20 when tiles only go to 18). Instead of showing a blank map, modern clients (Leaflet, MapLibre) stretch and upscale the level 18 tiles to fill the screen. While blurry, it maintains context.</p>
    `
  },
  {
    id: "qa-dev-4",
    question: "What is a 'Topology Exception' in GEOS/PostGIS and how do you fix it?",
    category: "Technical GIS Development",
    tags: ["Debugging", "PostGIS", "GEOS"],
    answer: `
      <p>A <strong>Topology Exception</strong> (e.g., 'Self-intersection at or near...') occurs when a geometry is invalid according to OGC standards. This often happens during overlay operations like <code>ST_Intersection</code> or <code>ST_Union</code>.</p>
      <p><strong>Common Fixes:</strong></p>
      <ul>
        <li><strong>ST_MakeValid:</strong> The standard way to fix invalid geometries.</li>
        <li><strong>ST_Buffer(geom, 0):</strong> A classic 'hack' that often rebuilds the geometry correctly.</li>
        <li><strong>Precision Issues:</strong> Use <code>ST_SnapToGrid</code> to reduce precision if the error is caused by floating-point rounding.</li>
      </ul>
    `
  },
  {
    id: "qa-dev-5",
    question: "Why use Python's multiprocessing instead of threading for raster analysis?",
    category: "Technical GIS Development",
    tags: ["Python", "Performance", "Parallel"],
    answer: `
      <p>Python has a <strong>Global Interpreter Lock (GIL)</strong> which prevents multiple native threads from executing Python bytecodes at once. This means threading is great for I/O-bound tasks (downloading files) but useless for CPU-bound tasks (calculating NDVI for a 1GB image).</p>
      <p><strong>Multiprocessing:</strong> Creates separate memory spaces and Python interpreters for each core, bypassing the GIL and allowing true parallel computation on large rasters.</p>
    `
  },
  {
    id: "qa-gis-3",
    question: "What are Vector Tiles (MVT) and how do they differ from Raster Tiles?",
    category: "Technical GIS Development",
    tags: ["Web Mapping", "Performance"],
    answer: `
      <p><strong>Raster Tiles:</strong> PNG/JPG images rendered on the server. The client just displays them. Fast to load, but static styling and no data interaction.</p>
      <p><strong>Vector Tiles (Mapbox Vector Tiles):</strong> Geometric data (points, lines, polygons) encoded as binary Protocol Buffers (PBF). The <strong>rendering happens on the client</strong> (browser/mobile).</p>
      <p><strong>Benefits:</strong> Dynamic styling, high resolution at any zoom, interactive features, and significantly lower bandwidth for many use cases.</p>
    `
  },
  {
    id: "qa-rs-3",
    question: "Explain the 'Speckle' effect in SAR imagery and how to mitigate it.",
    category: "Remote Sensing Fundamentals",
    tags: ["SAR", "Processing"],
    answer: `
      <p><strong>Speckle</strong> is a granular 'salt-and-pepper' noise that inherently exists in SAR imagery due to the coherent interference of waves scattered from multiple targets within a single resolution cell.</p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li><strong>Multi-looking:</strong> Averaging several pixels during image formation.</li>
        <li><strong>Spatial Filtering:</strong> Applying filters like <strong>Lee</strong>, <strong>Frost</strong>, or <strong>Enhanced Lee</strong> to reduce noise while preserving edges and textures.</li>
      </ul>
    `
  },
  {
    id: "qa-dev-6",
    question: "How do you handle coordinate transformation for 'on-the-fly' web maps?",
    category: "Technical GIS Development",
    tags: ["Projections", "Frontend", "Proj4"],
    answer: `
      <p>Most map libraries expect <strong>EPSG:4326</strong> (lat/lon) or <strong>EPSG:3857</strong> (Web Mercator). If your data is in a local projection (e.g., UTM), you must transform it.</p>
      <p><strong>Tools:</strong></p>
      <ul>
        <li><strong>Backend:</strong> <code>ST_Transform(geom, 3857)</code> in PostGIS.</li>
        <li><strong>Frontend:</strong> Use libraries like <strong>proj4js</strong> to transform coordinates before adding them to a Leaflet or OpenLayers map.</li>
        <li><strong>GDAL:</strong> <code>gdalwarp -t_srs EPSG:3857 ...</code> for rasters.</li>
      </ul>
    `
  },
  {
    id: "qa-gis-4",
    question: "What is the difference between Precision and Accuracy in GIS?",
    category: "GIS Fundamentals",
    tags: ["Theory", "Quality"],
    answer: `
      <p><strong>Accuracy:</strong> How close a measurement is to the true or accepted value. (e.g., Is your GPS point actually on the road?).</p>
      <p><strong>Precision:</strong> How consistent or repeatable your measurements are, regardless of accuracy. (e.g., Do multiple GPS points cluster in the same spot?).</p>
      <p><em>Example:</em> A high-precision GPS might consistently put you 10 meters away from the road (Low accuracy, High precision). A high-accuracy GPS puts you exactly on the road (High accuracy).</p>
    `
  },
  {
    id: "qa-dev-7",
    question: "How does an R-Tree spatial index speed up queries?",
    category: "Technical GIS Development",
    tags: ["Databases", "Algorithms", "Performance"],
    answer: `
      <p>An <strong>R-Tree</strong> (Rectangle Tree) organizes spatial data by grouping nearby objects and representing them with their <strong>Minimum Bounding Rectangle (MBR)</strong> in a hierarchical tree structure.</p>
      <p><strong>How it works:</strong> Instead of checking every polygon in the database (O(N)), the database checks the high-level MBRs. If your query doesn't intersect a high-level box, it skips thousands of child objects. This reduces search time to <strong>O(log N)</strong>.</p>
    `
  },
  {
    id: "qa-dev-8",
    question: "What is 'Spatial Joining' and why is it computationally expensive?",
    category: "Technical GIS Development",
    tags: ["PostGIS", "SQL", "Analysis"],
    answer: `
      <p>A <strong>Spatial Join</strong> combines data from two tables based on their spatial relationship (e.g., 'Find all points inside this polygon').</p>
      <p><strong>Performance:</strong> It is expensive because it requires complex geometric intersection calculations for potentially millions of pairs of shapes. To optimize, <strong>always</strong> ensure both columns have a spatial index (GIST in PostGIS) and use <code>ST_Intersects</code> with a bounding box filter.</p>
    `
  },
  {
    id: "qa-rs-4",
    question: "What is the 'Blue Shift' in hyperspectral remote sensing?",
    category: "Remote Sensing Fundamentals",
    tags: ["Vegetation", "Spectroscopy"],
    answer: `
      <p>The <strong>Blue Shift</strong> refers to the movement of the vegetation 'Red Edge' (the sharp increase in reflectance between red and NIR) toward shorter wavelengths (blue) when vegetation is under stress (drought, heavy metal toxicity, or disease).</p>
      <p><strong>Significance:</strong> It allows researchers to detect plant health issues before they become visible to the human eye as yellowing leaves.</p>
    `
  },
  {
    id: "qa-dev-9",
    question: "What are the common pitfalls in GIS developer coding?",
    category: "Technical GIS Development",
    tags: ["Best Practices", "Developer"],
    answer: `
      <p>1. <strong>Ignoring Projections:</strong> Performing distance or area calculations in degrees (EPSG:4326) instead of meters (UTM/State Plane).</p>
      <p>2. <strong>Loading Too Much Data:</strong> Attempting to load 1GB of GeoJSON into a browser. Use <strong>Vector Tiles</strong> or <strong>WFS/WMS</strong> instead.</p>
      <p>3. <strong>Lack of Error Handling:</strong> Assuming all input geometries are valid. Always use <code>ST_IsValid</code> or <code>ST_MakeValid</code> when processing third-party data.</p>
    `
  },
  {
    id: "qa-gis-5",
    question: "What is the difference between LAS and LAZ files?",
    category: "GIS Fundamentals",
    tags: ["Data Formats", "3D"],
    answer: `
      <p><strong>LAS:</strong> An open, binary format for storing LiDAR point cloud data. It is the industry standard but can be very large.</p>
      <p><strong>LAZ:</strong> A lossless compression of the LAS format. LAZ files are typically <strong>7x to 10x smaller</strong> than the original LAS while maintaining 100% of the data. Most modern GIS software (QGIS, ArcGIS, PDAL) supports LAZ natively.</p>
    `
  },
  {
    id: "qa-rs-5",
    question: "What is BRDF and why does it matter for satellite sensors?",
    category: "Remote Sensing Fundamentals",
    tags: ["Physics", "Correction"],
    answer: `
      <p><strong>BRDF (Bidirectional Reflectance Distribution Function)</strong> describes how the reflectance of a surface changes depending on the angle of the sun (illumination) and the angle of the satellite (observation).</p>
      <p><strong>Importance:</strong> Without BRDF correction, the same forest could look darker or brighter just because the satellite passed over it at a different angle. Correcting for BRDF is essential for creating consistent time-series data and global mosaics.</p>
    `
  },
  {
    id: "qa-dev-10",
    question: "What is the role of a 'Geospatial Data Engineer'?",
    category: "Technical GIS Development",
    tags: ["Career", "Data Engineering"],
    answer: `
      <p>Unlike a GIS Analyst who focuses on mapping, a <strong>Geospatial Data Engineer</strong> builds the infrastructure that moves and processes spatial data at scale.</p>
      <p><strong>Core Tasks:</strong> Designing ETL pipelines for satellite imagery, optimizing spatial databases (PostGIS), managing cloud-native storage (COGs, STAC), and deploying machine learning models to production.</p>
    `
  },
  {
    id: "qa-gis-6",
    question: "What is the 'Modifiable Areal Unit Problem' (MAUP)?",
    category: "GIS Fundamentals",
    tags: ["Statistics", "Analysis"],
    answer: `
      <p><strong>MAUP</strong> is a source of statistical bias that occurs when you aggregate point data into different boundaries (e.g., zip codes vs. census tracts). Depending on how you draw the boundaries, the resulting patterns and correlations can change significantly.</p>
      <p><strong>Takeaway:</strong> Always test your spatial analysis at multiple scales to ensure the results are consistent and not just an artifact of the boundary lines.</p>
    `
  },
  {
    id: "qa-dev-11",
    question: "How do you solve 'Z-fighting' in 3D web mapping?",
    category: "Technical GIS Development",
    tags: ["3D", "WebGL", "Graphics"],
    answer: `
      <p><strong>Z-fighting</strong> occurs in 3D rendering when two or more surfaces have very similar distances from the camera. The GPU cannot decide which one is in front, causing a flickering effect.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li><strong>Polygon Offset:</strong> Move one layer slightly (e.g., 0.001 units) above the other.</li>
        <li><strong>Depth Buffer Tuning:</strong> Adjust the 'near' and 'far' clipping planes of the camera to increase depth precision.</li>
        <li><strong>Stenciling:</strong> Use a stencil buffer to explicitly define which layers should mask others.</li>
      </ul>
    `
  },
  {
    id: "qa-rs-6",
    question: "What is Cloud Masking and which algorithms are commonly used?",
    category: "Advanced Processing",
    tags: ["Clouds", "Pre-processing"],
    answer: `
      <p><strong>Cloud Masking</strong> is the process of identifying and removing pixels contaminated by clouds and their shadows. This is critical for generating clean time-series data.</p>
      <p><strong>Common Algorithms:</strong></p>
      <ul>
        <li><strong>Fmask (Function of Mask):</strong> The industry standard for Landsat and Sentinel-2. It uses spectral rules and geometric relationships between clouds and shadows.</li>
        <li><strong>Sen2Cor SCL:</strong> The Scene Classification Layer provided by ESA for Sentinel-2, which categorizes pixels into clouds, shadows, vegetation, and soil.</li>
        <li><strong>s2cloudless:</strong> A machine learning based approach that is highly effective for Sentinel-2 data.</li>
      </ul>
    `
  },
  {
    id: "qa-rs-7",
    question: "Why is Orthorectification essential for satellite imagery?",
    category: "Advanced Processing",
    tags: ["Geometry", "Accuracy"],
    answer: `
      <p><strong>Orthorectification</strong> is the process of removing geometric distortions caused by the sensor's viewing angle and, most importantly, <strong>terrain relief</strong>.</p>
      <p><strong>Why it matters:</strong> In mountainous areas, a raw satellite image 'leans' away from the center. Orthorectification uses a Digital Elevation Model (DEM) to shift every pixel to its true map-coordinate position, ensuring that distances and areas measured on the image are accurate.</p>
    `
  },
  {
    id: "qa-rs-8",
    question: "What is Pansharpening and how does it improve resolution?",
    category: "Remote Sensing Fundamentals",
    tags: ["Resolution", "Processing"],
    answer: `
      <p><strong>Pansharpening</strong> is a technique that merges the high spatial resolution of a <strong>Panchromatic (B&W)</strong> band with the lower spatial resolution of <strong>Multispectral (Color)</strong> bands.</p>
      <p><strong>The Result:</strong> A high-resolution color image. For example, Landsat 8 has 30m color bands and a 15m Pan band; pansharpening creates a 15m color product. Common methods include <strong>Gram-Schmidt</strong> and <strong>Brovey</strong> transforms.</p>
    `
  },
  {
    id: "qa-rs-9",
    question: "How do you handle NDVI saturation in dense vegetation?",
    category: "Vegetation Analysis",
    tags: ["NDVI", "Saturation"],
    answer: `
      <p><strong>NDVI Saturation</strong> occurs when vegetation is so dense (high Leaf Area Index) that the Red band is almost completely absorbed, causing the NDVI value to plateau (usually around 0.8 - 0.9) even if biomass continues to increase.</p>
      <p><strong>The Fix:</strong> Switch to indices that are more sensitive to high biomass, such as <strong>EVI</strong> (Enhanced Vegetation Index) or <strong>NDRE</strong> (Normalized Difference Red Edge), which uses the red-edge band to 'see' deeper into the canopy.</p>
    `
  }
];
