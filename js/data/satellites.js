const SATELLITES = [
{id:"sentinel-2",name:"Sentinel-2A/2B",operator:"ESA/Copernicus",category:"msi",launch:"2015/2017",status:"Active",bands:[
{name:"B1",label:"Coastal",wl:"443nm",gsd:"60m"},{name:"B2",label:"Blue",wl:"490nm",gsd:"10m"},
{name:"B3",label:"Green",wl:"560nm",gsd:"10m"},{name:"B4",label:"Red",wl:"665nm",gsd:"10m"},
{name:"B5",label:"RE1",wl:"705nm",gsd:"20m"},{name:"B6",label:"RE2",wl:"740nm",gsd:"20m"},
{name:"B7",label:"RE3",wl:"783nm",gsd:"20m"},{name:"B8",label:"NIR",wl:"842nm",gsd:"10m"},
{name:"B8A",label:"NIR-N",wl:"865nm",gsd:"20m"},{name:"B9",label:"WV",wl:"945nm",gsd:"60m"},
{name:"B11",label:"SWIR1",wl:"1610nm",gsd:"20m"},{name:"B12",label:"SWIR2",wl:"2190nm",gsd:"20m"}],
spatial:"10m/20m/60m",spectral:"13 bands",temporal:"5 days",radiometric:"12-bit",swath:"290 km",
pricing:"free",orbit:"Sun-synchronous (786 km)",
stac:[{p:"Earth Search (AWS)",u:"https://earth-search.aws.element84.com/v1",c:"sentinel-2-l2a",d:"https://element84.com/earth-search/"},
{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"sentinel-2-l2a",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"},
{p:"Copernicus CDSE",u:"https://stac.dataspace.copernicus.eu/v1",c:"SENTINEL-2",d:"https://documentation.dataspace.copernicus.eu/APIs/STAC.html"}],
indices:["ndvi","evi","savi","ndwi","mndwi","nbr","ndmi","gndvi","osavi","msavi","ndbi","bsi","ndsi-snow","evi2","cig","cire","arvi","sipi","ndre","mcari"],
desc:"ESA's flagship multispectral mission providing systematic global coverage of land surfaces."},

{id:"landsat-8",name:"Landsat 8 OLI/TIRS",operator:"USGS/NASA",category:"msi",launch:"2013",status:"Active",bands:[
{name:"B1",label:"Coastal",wl:"443nm",gsd:"30m"},{name:"B2",label:"Blue",wl:"482nm",gsd:"30m"},
{name:"B3",label:"Green",wl:"561nm",gsd:"30m"},{name:"B4",label:"Red",wl:"655nm",gsd:"30m"},
{name:"B5",label:"NIR",wl:"865nm",gsd:"30m"},{name:"B6",label:"SWIR1",wl:"1609nm",gsd:"30m"},
{name:"B7",label:"SWIR2",wl:"2201nm",gsd:"30m"},{name:"B8",label:"Pan",wl:"590nm",gsd:"15m"},
{name:"B9",label:"Cirrus",wl:"1373nm",gsd:"30m"},{name:"B10",label:"TIR1",wl:"10895nm",gsd:"100m"},
{name:"B11",label:"TIR2",wl:"12005nm",gsd:"100m"}],
spatial:"30m (15m Pan, 100m TIR)",spectral:"11 bands",temporal:"16 days",radiometric:"12-bit",swath:"185 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"Earth Search (AWS)",u:"https://earth-search.aws.element84.com/v1",c:"landsat-c2-l2",d:"https://element84.com/earth-search/"},
{p:"USGS LandsatLook",u:"https://landsatlook.usgs.gov/stac-server",c:"landsat-c2l2-sr",d:"https://landsatlook.usgs.gov/stac-server/"},
{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"landsat-8-c2-l2",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","evi","savi","ndwi","mndwi","nbr","ndmi","gndvi","osavi","msavi","ndbi","bsi","ndsi-snow","evi2","arvi","sipi","lst"],
desc:"Continues the 50+ year Landsat record with improved radiometric sensitivity."},

{id:"landsat-9",name:"Landsat 9 OLI-2/TIRS-2",operator:"USGS/NASA",category:"msi",launch:"2021",status:"Active",bands:[
{name:"B1",label:"Coastal",wl:"443nm",gsd:"30m"},{name:"B2",label:"Blue",wl:"482nm",gsd:"30m"},
{name:"B3",label:"Green",wl:"561nm",gsd:"30m"},{name:"B4",label:"Red",wl:"655nm",gsd:"30m"},
{name:"B5",label:"NIR",wl:"865nm",gsd:"30m"},{name:"B6",label:"SWIR1",wl:"1609nm",gsd:"30m"},
{name:"B7",label:"SWIR2",wl:"2201nm",gsd:"30m"},{name:"B8",label:"Pan",wl:"590nm",gsd:"15m"},
{name:"B9",label:"Cirrus",wl:"1373nm",gsd:"30m"},{name:"B10",label:"TIR1",wl:"10895nm",gsd:"100m"},
{name:"B11",label:"TIR2",wl:"12005nm",gsd:"100m"}],
spatial:"30m (15m Pan)",spectral:"11 bands",temporal:"16 days (8 with L8)",radiometric:"14-bit",swath:"185 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"USGS LandsatLook",u:"https://landsatlook.usgs.gov/stac-server",c:"landsat-c2l2-sr",d:"https://landsatlook.usgs.gov/stac-server/"},
{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"landsat-9-c2-l2",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","evi","savi","ndwi","mndwi","nbr","ndmi","gndvi","osavi","msavi","ndbi","bsi","ndsi-snow","evi2","arvi"],
desc:"Latest Landsat mission with improved 14-bit quantization for better signal-to-noise."},

{id:"modis",name:"MODIS (Terra/Aqua)",operator:"NASA",category:"moderate",launch:"1999/2002",status:"Active",bands:[
{name:"B1",label:"Red",wl:"645nm",gsd:"250m"},{name:"B2",label:"NIR",wl:"858nm",gsd:"250m"},
{name:"B3",label:"Blue",wl:"469nm",gsd:"500m"},{name:"B4",label:"Green",wl:"555nm",gsd:"500m"},
{name:"B5",label:"SWIR1",wl:"1240nm",gsd:"500m"},{name:"B6",label:"SWIR2",wl:"1640nm",gsd:"500m"},
{name:"B7",label:"SWIR3",wl:"2130nm",gsd:"500m"}],
spatial:"250m/500m/1000m",spectral:"36 bands",temporal:"1-2 days",radiometric:"12-bit",swath:"2330 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"modis-09A1-061",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"},
{p:"Earth Search (AWS)",u:"https://earth-search.aws.element84.com/v1",c:"modis",d:"https://element84.com/earth-search/"}],
indices:["ndvi","evi","ndwi","nbr","ndsi-snow","lst","gndvi","bsi"],
desc:"Workhorse moderate-resolution sensor providing daily global coverage for 20+ years."},

{id:"viirs",name:"VIIRS (Suomi NPP/NOAA-20)",operator:"NASA/NOAA",category:"moderate",launch:"2011/2017",status:"Active",bands:[
{name:"I1",label:"Red",wl:"640nm",gsd:"375m"},{name:"I2",label:"NIR",wl:"865nm",gsd:"375m"},
{name:"I3",label:"SWIR",wl:"1610nm",gsd:"375m"},{name:"M3",label:"Blue",wl:"488nm",gsd:"750m"},
{name:"M4",label:"Green",wl:"555nm",gsd:"750m"},{name:"DNB",label:"Day-Night",wl:"700nm",gsd:"750m"}],
spatial:"375m/750m",spectral:"22 bands",temporal:"Daily",radiometric:"12-bit",swath:"3000 km",
pricing:"free",orbit:"Sun-synchronous (824 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"viirs-09-nrt",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","evi","ndsi-snow","nightlight"],
desc:"Next-gen moderate-resolution imager succeeding MODIS with improved calibration."},

{id:"sentinel-1",name:"Sentinel-1A/1B",operator:"ESA/Copernicus",category:"sar",launch:"2014/2016",status:"Active (1A)",bands:[
{name:"VV",label:"VV Pol",wl:"C-band 5.4cm",gsd:"5m"},{name:"VH",label:"VH Pol",wl:"C-band 5.4cm",gsd:"5m"},
{name:"HH",label:"HH Pol",wl:"C-band 5.4cm",gsd:"5m"},{name:"HV",label:"HV Pol",wl:"C-band 5.4cm",gsd:"5m"}],
spatial:"5m (IW), 25m (EW)",spectral:"C-band SAR",temporal:"6-12 days",radiometric:"16-bit",swath:"250 km (IW)",
pricing:"free",orbit:"Sun-synchronous (693 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"sentinel-1-grd",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"},
{p:"Copernicus CDSE",u:"https://stac.dataspace.copernicus.eu/v1",c:"SENTINEL-1",d:"https://documentation.dataspace.copernicus.eu/APIs/STAC.html"}],
indices:["rvi-sar","rfdi","dpsvi","cr-ratio"],
desc:"C-band SAR providing all-weather, day/night radar imaging for land and ocean monitoring."},

{id:"alos2",name:"ALOS-2 PALSAR-2",operator:"JAXA",category:"sar",launch:"2014",status:"Active",bands:[
{name:"HH",label:"HH Pol",wl:"L-band 23.6cm",gsd:"3m"},{name:"HV",label:"HV Pol",wl:"L-band 23.6cm",gsd:"3m"},
{name:"VV",label:"VV Pol",wl:"L-band 23.6cm",gsd:"3m"},{name:"VH",label:"VH Pol",wl:"L-band 23.6cm",gsd:"3m"}],
spatial:"1-10m",spectral:"L-band SAR",temporal:"14 days",radiometric:"16-bit",swath:"25-350 km",
pricing:"paid",contact:"https://www.restec.or.jp/en/",orbit:"Sun-synchronous (628 km)",stac:[],
indices:["rvi-sar","rfdi","biomass"],
desc:"L-band SAR excelling at forest monitoring due to deep canopy penetration."},

{id:"terrasar-x",name:"TerraSAR-X / TanDEM-X",operator:"DLR/Airbus",category:"sar",launch:"2007/2010",status:"Active",bands:[
{name:"HH",label:"HH Pol",wl:"X-band 3.1cm",gsd:"1m"},{name:"VV",label:"VV Pol",wl:"X-band 3.1cm",gsd:"1m"}],
spatial:"0.25-40m",spectral:"X-band SAR",temporal:"11 days",radiometric:"16-bit",swath:"5-100 km",
pricing:"paid",contact:"https://www.intelligence-airbusds.com/",orbit:"Sun-synchronous (514 km)",stac:[],
indices:["rvi-sar","coherence","dem"],
desc:"High-resolution X-band SAR for urban monitoring and DEM generation."},

{id:"enmap",name:"EnMAP",operator:"DLR",category:"hyperspectral",launch:"2022",status:"Active",bands:[
{name:"VNIR",label:"VNIR (1-93)",wl:"420-1000nm",gsd:"30m"},
{name:"SWIR",label:"SWIR (94-230)",wl:"900-2450nm",gsd:"30m"}],
spatial:"30m",spectral:"230 bands",temporal:"27 days (4 days off-nadir)",radiometric:"14-bit",swath:"30 km",
pricing:"free",orbit:"Sun-synchronous (653 km)",
stac:[],
indices:["ndvi","evi","pri","cri","ari","mcari","rei","ndli","cai","ndni","wbi"],
desc:"German hyperspectral mission with 230 contiguous bands for advanced spectroscopy."},

{id:"prisma",name:"PRISMA",operator:"ASI (Italy)",category:"hyperspectral",launch:"2019",status:"Active",bands:[
{name:"VNIR",label:"VNIR",wl:"400-1010nm",gsd:"30m"},
{name:"SWIR",label:"SWIR",wl:"920-2505nm",gsd:"30m"},
{name:"PAN",label:"Pan",wl:"400-700nm",gsd:"5m"}],
spatial:"30m (5m Pan)",spectral:"239 bands",temporal:"29 days (7 off-nadir)",radiometric:"12-bit",swath:"30 km",
pricing:"free",orbit:"Sun-synchronous (615 km)",stac:[],
indices:["ndvi","evi","pri","cri","ari","mcari","rei","ndli","cai","wbi"],
desc:"Italian hyperspectral mission combining a 239-band imager with 5m panchromatic camera."},

{id:"desis",name:"DESIS (ISS)",operator:"DLR/Teledyne",category:"hyperspectral",launch:"2018",status:"Active",bands:[
{name:"HSI",label:"HSI",wl:"400-1000nm",gsd:"30m"}],
spatial:"30m",spectral:"235 bands",temporal:"3-5 days (ISS orbit)",radiometric:"12-bit (13 eff.)",swath:"30 km",
pricing:"paid",contact:"https://tbe.com/",orbit:"ISS orbit (400 km, 51.6° incl.)",stac:[],
indices:["ndvi","pri","cri","ari","mcari","rei"],
desc:"Hyperspectral instrument on the ISS covering VNIR range with 2.55nm spectral sampling."},

{id:"worldview-3",name:"WorldView-3",operator:"Maxar",category:"msi",launch:"2014",status:"Active",bands:[
{name:"Pan",label:"Pan",wl:"450-800nm",gsd:"0.31m"},
{name:"Coastal",label:"Coastal",wl:"400nm",gsd:"1.24m"},{name:"Blue",label:"Blue",wl:"450nm",gsd:"1.24m"},
{name:"Green",label:"Green",wl:"510nm",gsd:"1.24m"},{name:"Yellow",label:"Yellow",wl:"585nm",gsd:"1.24m"},
{name:"Red",label:"Red",wl:"630nm",gsd:"1.24m"},{name:"RE",label:"RedEdge",wl:"724nm",gsd:"1.24m"},
{name:"NIR1",label:"NIR1",wl:"832nm",gsd:"1.24m"},{name:"NIR2",label:"NIR2",wl:"948nm",gsd:"1.24m"}],
spatial:"0.31m Pan / 1.24m MS / 3.7m SWIR",spectral:"29 bands (8 VNIR + 8 SWIR + 12 CAVIS + Pan)",temporal:"<1 day (agile)",radiometric:"11-bit",swath:"13.1 km",
pricing:"paid",contact:"https://www.maxar.com/",orbit:"Sun-synchronous (617 km)",stac:[],
indices:["ndvi","evi","savi","ndwi","ndbi","gndvi","osavi","ndre","arvi"],
desc:"Ultra-high resolution commercial satellite with 0.31m panchromatic and SWIR capabilities."},

{id:"pleiades",name:"Pléiades 1A/1B",operator:"Airbus",category:"msi",launch:"2011/2012",status:"Active",bands:[
{name:"Pan",label:"Pan",wl:"480-820nm",gsd:"0.5m"},
{name:"B0",label:"Blue",wl:"430-550nm",gsd:"2m"},{name:"B1",label:"Green",wl:"500-620nm",gsd:"2m"},
{name:"B2",label:"Red",wl:"590-710nm",gsd:"2m"},{name:"B3",label:"NIR",wl:"740-940nm",gsd:"2m"}],
spatial:"0.5m Pan / 2m MS",spectral:"5 bands",temporal:"Daily (agile)",radiometric:"12-bit",swath:"20 km",
pricing:"paid",contact:"https://www.intelligence-airbusds.com/",orbit:"Sun-synchronous (694 km)",stac:[],
indices:["ndvi","savi","gndvi","ndwi"],
desc:"Very high resolution optical constellation for defense, mapping and urban applications."},

{id:"planet",name:"PlanetScope (Dove)",operator:"Planet Labs",category:"msi",launch:"Ongoing",status:"Active",bands:[
{name:"B1",label:"Blue",wl:"464nm",gsd:"3m"},{name:"B2",label:"Green",wl:"547nm",gsd:"3m"},
{name:"B3",label:"Red",wl:"635nm",gsd:"3m"},{name:"B4",label:"NIR",wl:"820nm",gsd:"3m"},
{name:"B5",label:"RedEdge",wl:"707nm",gsd:"3m"},{name:"B6",label:"Green-II",wl:"547nm",gsd:"3m"},
{name:"B7",label:"Coastal",wl:"431nm",gsd:"3m"},{name:"B8",label:"Yellow",wl:"593nm",gsd:"3m"}],
spatial:"3-4m",spectral:"8 bands (SuperDove)",temporal:"Daily",radiometric:"12-bit",swath:"24 km",
pricing:"paid",contact:"https://www.planet.com/",orbit:"Sun-synchronous (475 km)",
stac:[{p:"Planet STAC",u:"https://api.planet.com/compute/ops/stac/v1",c:"PSScene",d:"https://developers.planet.com/docs/apis/stac/"}],
indices:["ndvi","evi","gndvi","ndwi","savi","ndre"],
desc:"400+ CubeSat constellation providing daily 3m global coverage."},

{id:"spot-67",name:"SPOT 6/7",operator:"Airbus",category:"msi",launch:"2012/2014",status:"Active",bands:[
{name:"Pan",label:"Pan",wl:"450-745nm",gsd:"1.5m"},
{name:"B0",label:"Blue",wl:"455-525nm",gsd:"6m"},{name:"B1",label:"Green",wl:"530-590nm",gsd:"6m"},
{name:"B2",label:"Red",wl:"625-695nm",gsd:"6m"},{name:"B3",label:"NIR",wl:"760-890nm",gsd:"6m"}],
spatial:"1.5m Pan / 6m MS",spectral:"5 bands",temporal:"1-3 days",radiometric:"12-bit",swath:"60 km",
pricing:"paid",contact:"https://www.intelligence-airbusds.com/",orbit:"Sun-synchronous (694 km)",stac:[],
indices:["ndvi","savi","gndvi","ndwi"],
desc:"High-resolution constellation widely used for agriculture, forestry, and urban mapping."},

{id:"aster",name:"ASTER",operator:"NASA/METI",category:"msi",launch:"1999",status:"Active (partial)",bands:[
{name:"B1",label:"Green",wl:"556nm",gsd:"15m"},{name:"B2",label:"Red",wl:"661nm",gsd:"15m"},
{name:"B3N",label:"NIR",wl:"807nm",gsd:"15m"},{name:"B4",label:"SWIR1",wl:"1656nm",gsd:"30m"},
{name:"B5",label:"SWIR2",wl:"2167nm",gsd:"30m"},{name:"B10",label:"TIR1",wl:"8291nm",gsd:"90m"},
{name:"B13",label:"TIR4",wl:"10657nm",gsd:"90m"},{name:"B14",label:"TIR5",wl:"11318nm",gsd:"90m"}],
spatial:"15m/30m/90m",spectral:"14 bands (VNIR+SWIR+TIR)",temporal:"16 days",radiometric:"8-12 bit",swath:"60 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"aster-l1t",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","savi","ndwi","clay-index","iron-oxide","alunite","carbonate","silica"],
desc:"Multispectral imager on Terra with unique TIR and SWIR capabilities for geology."},

{id:"avhrr",name:"AVHRR",operator:"NOAA",category:"legacy",launch:"1978-present",status:"Active",bands:[
{name:"B1",label:"Red",wl:"630nm",gsd:"1.1km"},{name:"B2",label:"NIR",wl:"862nm",gsd:"1.1km"},
{name:"B3",label:"MWIR",wl:"3740nm",gsd:"1.1km"},{name:"B4",label:"TIR1",wl:"10800nm",gsd:"1.1km"},
{name:"B5",label:"TIR2",wl:"12000nm",gsd:"1.1km"}],
spatial:"1.1 km",spectral:"5-6 bands",temporal:"Daily (2x)",radiometric:"10-bit",swath:"2900 km",
pricing:"free",orbit:"Sun-synchronous (830 km)",stac:[],
indices:["ndvi","lst"],
desc:"Longest-running satellite vegetation record (40+ years) for climate studies."},

{id:"landsat-5",name:"Landsat 5 TM",operator:"USGS/NASA",category:"legacy",launch:"1984",status:"Decommissioned (2013)",bands:[
{name:"B1",label:"Blue",wl:"485nm",gsd:"30m"},{name:"B2",label:"Green",wl:"560nm",gsd:"30m"},
{name:"B3",label:"Red",wl:"660nm",gsd:"30m"},{name:"B4",label:"NIR",wl:"830nm",gsd:"30m"},
{name:"B5",label:"SWIR1",wl:"1650nm",gsd:"30m"},{name:"B6",label:"TIR",wl:"11450nm",gsd:"120m"},
{name:"B7",label:"SWIR2",wl:"2220nm",gsd:"30m"}],
spatial:"30m (120m TIR)",spectral:"7 bands",temporal:"16 days",radiometric:"8-bit",swath:"185 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"landsat-c2-l2",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","evi","savi","ndwi","mndwi","nbr","ndmi","ndbi","bsi"],
desc:"Guinness record holder for longest-operating Earth observation satellite (29 years)."},

{id:"rapidye",name:"RapidEye",operator:"Planet Labs",category:"msi",launch:"2008",status:"Decommissioned (2020)",bands:[
{name:"B1",label:"Blue",wl:"475nm",gsd:"6.5m"},{name:"B2",label:"Green",wl:"555nm",gsd:"6.5m"},
{name:"B3",label:"Red",wl:"658nm",gsd:"6.5m"},{name:"B4",label:"RedEdge",wl:"710nm",gsd:"6.5m"},
{name:"B5",label:"NIR",wl:"805nm",gsd:"6.5m"}],
spatial:"6.5m (5m resampled)",spectral:"5 bands",temporal:"Daily (off-nadir)",radiometric:"12-bit",swath:"77 km",
pricing:"paid",contact:"https://www.planet.com/",orbit:"Sun-synchronous (630 km)",stac:[],
indices:["ndvi","gndvi","ndre","savi","ndwi"],
desc:"First commercial constellation with Red Edge band, pioneering precision agriculture."},

{id:"iceye",name:"ICEYE SAR",operator:"ICEYE",category:"sar",launch:"2018+",status:"Active",bands:[
{name:"VV",label:"VV Pol",wl:"X-band 3.1cm",gsd:"0.25m"}],
spatial:"0.25-15m",spectral:"X-band SAR",temporal:"<24h (constellation)",radiometric:"16-bit",swath:"5-100 km",
pricing:"paid",contact:"https://www.iceye.com/",orbit:"Sun-synchronous (570 km)",stac:[],
indices:["flood-map","change-det"],
desc:"World's largest commercial SAR constellation with sub-meter resolution."},

{id:"goes",name:"GOES-16/17/18",operator:"NOAA/NASA",category:"moderate",launch:"2016/2018/2022",status:"Active",bands:[
{name:"B1",label:"Blue",wl:"470nm",gsd:"1km"},{name:"B2",label:"Red",wl:"640nm",gsd:"0.5km"},
{name:"B3",label:"NIR",wl:"865nm",gsd:"1km"},{name:"B7",label:"SWIR",wl:"3900nm",gsd:"2km"},
{name:"B13",label:"TIR",wl:"10350nm",gsd:"2km"}],
spatial:"0.5-2 km",spectral:"16 bands",temporal:"5-15 min",radiometric:"12-bit",swath:"Full disk",
pricing:"free",orbit:"Geostationary (35786 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"goes-cmi",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","fire-detect","lst","cloud-mask"],
desc:"Geostationary weather satellites providing near-real-time imagery every 5 minutes."},

{id:"sentinel-3",name:"Sentinel-3A/3B",operator:"ESA/Copernicus",category:"moderate",launch:"2016/2018",status:"Active",bands:[
{name:"Oa01-Oa21",label:"OLCI 21 bands",wl:"400-1020nm",gsd:"300m"},
{name:"S1-S6",label:"SLSTR 6 bands",wl:"555-1613nm",gsd:"500m"},
{name:"S7-S9",label:"SLSTR TIR",wl:"3742-12000nm",gsd:"1km"}],
spatial:"300m (OLCI), 500m-1km (SLSTR)",spectral:"21+11 bands",temporal:"<2 days",radiometric:"12-bit",swath:"1270 km (OLCI)",
pricing:"free",orbit:"Sun-synchronous (814 km)",
stac:[{p:"Copernicus CDSE",u:"https://stac.dataspace.copernicus.eu/v1",c:"SENTINEL-3",d:"https://documentation.dataspace.copernicus.eu/APIs/STAC.html"}],
indices:["ndvi","otci","chl-oc","lst","ndwi"],
desc:"Medium-resolution mission for ocean color, sea/land surface temperature, and vegetation."},

{id:"skysat",name:"SkySat",operator:"Planet Labs",category:"msi",launch:"2013-2020",status:"Active",bands:[
{name:"Pan",label:"Pan",wl:"450-900nm",gsd:"0.5m"},
{name:"B1",label:"Blue",wl:"450nm",gsd:"0.8m"},{name:"B2",label:"Green",wl:"515nm",gsd:"0.8m"},
{name:"B3",label:"Red",wl:"630nm",gsd:"0.8m"},{name:"B4",label:"NIR",wl:"770nm",gsd:"0.8m"}],
spatial:"0.5m Pan / 0.8m MS",spectral:"5 bands",temporal:"Daily (tasking)",radiometric:"12-bit",swath:"8 km",
pricing:"paid",contact:"https://www.planet.com/",orbit:"Sun-synchronous (500 km)",
stac:[{p:"Planet STAC",u:"https://api.planet.com/compute/ops/stac/v1",c:"SkySatScene",d:"https://developers.planet.com/docs/apis/stac/"}],
indices:["ndvi","gndvi","ndwi"],
desc:"Sub-meter resolution constellation also capable of HD video from space."},

{id:"cbers-4a",name:"CBERS-4A",operator:"CASC/INPE",category:"msi",launch:"2019",status:"Active",bands:[
{name:"B1",label:"Blue",wl:"450-520nm",gsd:"8m"},{name:"B2",label:"Green",wl:"520-590nm",gsd:"8m"},
{name:"B3",label:"Red",wl:"630-690nm",gsd:"8m"},{name:"B4",label:"NIR",wl:"770-890nm",gsd:"8m"},
{name:"Pan",label:"Pan",wl:"510-850nm",gsd:"2m"}],
spatial:"2m Pan / 8m MS",spectral:"4 bands (WPM)",temporal:"31 days",radiometric:"10-bit",swath:"92 km",
pricing:"free",orbit:"Sun-synchronous (628 km)",stac:[],
indices:["ndvi","savi","gndvi","ndwi"],
desc:"China-Brazil Earth Resources Satellite providing high-resolution imagery."},

{id:"capella",name:"Capella Space",operator:"Capella",category:"sar",launch:"2020+",status:"Active",bands:[
{name:"VV",label:"VV Pol",wl:"X-band 3.1cm",gsd:"0.5m"}],
spatial:"0.5m",spectral:"X-band SAR",temporal:"Hourly (tasking)",radiometric:"16-bit",swath:"5-10 km",
pricing:"paid",contact:"https://www.capellaspace.com/",orbit:"Mid-inclination and SSO",stac:[],
indices:["flood-map","change-det"],
desc:"Commercial SAR constellation providing very high-resolution, high-revisit X-band imagery."},

{id:"himawari-8",name:"Himawari-8/9",operator:"JMA",category:"moderate",launch:"2014/2016",status:"Active",bands:[
{name:"B1",label:"Blue",wl:"470nm",gsd:"1km"},{name:"B2",label:"Green",wl:"510nm",gsd:"1km"},
{name:"B3",label:"Red",wl:"640nm",gsd:"0.5km"},{name:"B4",label:"NIR",wl:"860nm",gsd:"1km"},
{name:"B5",label:"SWIR1",wl:"1610nm",gsd:"2km"},{name:"B6",label:"SWIR2",wl:"2260nm",gsd:"2km"},
{name:"B7",label:"MWIR",wl:"3900nm",gsd:"2km"},{name:"B13",label:"TIR1",wl:"10400nm",gsd:"2km"}],
spatial:"0.5-2 km",spectral:"16 bands",temporal:"10 min",radiometric:"11-14 bit",swath:"Full disk (Asia-Pacific)",
pricing:"free",orbit:"Geostationary (35786 km)",stac:[],
indices:["ndvi","lst","fire-detect"],
desc:"Advanced geostationary meteorological satellites for the Asia-Pacific region."},

{id:"resourcesat-2",name:"Resourcesat-2/2A",operator:"ISRO",category:"msi",launch:"2011/2016",status:"Active",bands:[
{name:"B2",label:"Green",wl:"520-590nm",gsd:"23.5m"},{name:"B3",label:"Red",wl:"620-680nm",gsd:"23.5m"},
{name:"B4",label:"NIR",wl:"770-860nm",gsd:"23.5m"},{name:"B5",label:"SWIR",wl:"1550-1700nm",gsd:"23.5m"}],
spatial:"5.8m (LISS-IV), 23.5m (LISS-III)",spectral:"4 bands",temporal:"5-24 days",radiometric:"10-bit",swath:"141-740 km",
pricing:"free",orbit:"Sun-synchronous (817 km)",stac:[],
indices:["ndvi","savi","ndwi","mndwi","ndmi"],
desc:"Workhorse Indian remote sensing satellites equipped with LISS-IV, LISS-III, and AWiFS sensors."},

{id:"nisar",name:"NISAR",operator:"NASA/ISRO",category:"sar",launch:"2025 (Planned)",status:"Planned",bands:[
{name:"L-Band",label:"L-band",wl:"24 cm",gsd:"3-10m"},{name:"S-Band",label:"S-band",wl:"9 cm",gsd:"3-10m"}],
spatial:"3-10m",spectral:"L-band and S-band SAR",temporal:"12 days",radiometric:"16-bit",swath:"240 km",
pricing:"free",orbit:"Sun-synchronous (747 km)",stac:[],
indices:["biomass","deformation","soil-moisture"],
desc:"Upcoming joint mission offering unprecedented dual-frequency (L and S band) SAR."}
];

const SAT_CATEGORIES = [
{id:"all",label:"All Satellites",icon:"🛰️"},
{id:"msi",label:"Multispectral (MSI)",icon:"🌈"},
{id:"sar",label:"SAR / RADAR",icon:"📡"},
{id:"hyperspectral",label:"Hyperspectral",icon:"🔬"},
{id:"moderate",label:"Moderate Resolution",icon:"🌍"},
{id:"legacy",label:"Legacy / Heritage",icon:"📜"},
{id:"free",label:"Free + Open Data",icon:"🔓"},
{id:"paid",label:"Commercial Data",icon:"💎"}
];
