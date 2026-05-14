const SATELLITES = [
{id:"sentinel-2",name:"Sentinel-2A/2B",operator:"ESA/Copernicus",category:"msi",launch:"2015/2017",status:"Active",dateStart:"2015-06",dateEnd:"Present",bands:[
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

{id:"landsat-8",name:"Landsat 8 OLI/TIRS",operator:"USGS/NASA",category:"msi",launch:"2013",status:"Active",dateStart:"2013-02",dateEnd:"Present",bands:[
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

{id:"landsat-9",name:"Landsat 9 OLI-2/TIRS-2",operator:"USGS/NASA",category:"msi",launch:"2021",status:"Active",dateStart:"2021-09",dateEnd:"Present",bands:[
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

{id:"modis",name:"MODIS (Terra/Aqua)",operator:"NASA",category:"moderate",launch:"1999/2002",status:"Active",dateStart:"1999-12",dateEnd:"Present",bands:[
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

{id:"viirs",name:"VIIRS (Suomi NPP/NOAA-20)",operator:"NASA/NOAA",category:"moderate",launch:"2011/2017",status:"Active",dateStart:"2011-10",dateEnd:"Present",bands:[
{name:"I1",label:"Red",wl:"640nm",gsd:"375m"},{name:"I2",label:"NIR",wl:"865nm",gsd:"375m"},
{name:"I3",label:"SWIR",wl:"1610nm",gsd:"375m"},{name:"M3",label:"Blue",wl:"488nm",gsd:"750m"},
{name:"M4",label:"Green",wl:"555nm",gsd:"750m"},{name:"DNB",label:"Day-Night",wl:"700nm",gsd:"750m"}],
spatial:"375m/750m",spectral:"22 bands",temporal:"Daily",radiometric:"12-bit",swath:"3000 km",
pricing:"free",orbit:"Sun-synchronous (824 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"viirs-09-nrt",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","evi","ndsi-snow","nightlight"],
desc:"Next-gen moderate-resolution imager succeeding MODIS with improved calibration."},

{id:"sentinel-1",name:"Sentinel-1A/1B",operator:"ESA/Copernicus",category:"sar",launch:"2014/2016",status:"Active (1A)",dateStart:"2014-04",dateEnd:"Present",bands:[
{name:"VV",label:"VV Pol",wl:"C-band 5.4cm",gsd:"5m"},{name:"VH",label:"VH Pol",wl:"C-band 5.4cm",gsd:"5m"},
{name:"HH",label:"HH Pol",wl:"C-band 5.4cm",gsd:"5m"},{name:"HV",label:"HV Pol",wl:"C-band 5.4cm",gsd:"5m"}],
spatial:"5m (IW), 25m (EW)",spectral:"C-band SAR",temporal:"6-12 days",radiometric:"16-bit",swath:"250 km (IW)",
pricing:"free",orbit:"Sun-synchronous (693 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"sentinel-1-grd",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"},
{p:"Copernicus CDSE",u:"https://stac.dataspace.copernicus.eu/v1",c:"SENTINEL-1",d:"https://documentation.dataspace.copernicus.eu/APIs/STAC.html"}],
indices:["rvi-sar","rfdi","dpsvi","cr-ratio"],
desc:"C-band SAR providing all-weather, day/night radar imaging for land and ocean monitoring."},

{id:"alos2",name:"ALOS-2 PALSAR-2",operator:"JAXA",category:"sar",launch:"2014",status:"Active",dateStart:"2014-05",dateEnd:"Present",bands:[
{name:"HH",label:"HH Pol",wl:"L-band 23.6cm",gsd:"3m"},{name:"HV",label:"HV Pol",wl:"L-band 23.6cm",gsd:"3m"},
{name:"VV",label:"VV Pol",wl:"L-band 23.6cm",gsd:"3m"},{name:"VH",label:"VH Pol",wl:"L-band 23.6cm",gsd:"3m"}],
spatial:"1-10m",spectral:"L-band SAR",temporal:"14 days",radiometric:"16-bit",swath:"25-350 km",
pricing:"paid",pricingDetail:"~$100 - $300 per scene (Archive), Tasking requires quote.",contact:"https://www.restec.or.jp/en/",orbit:"Sun-synchronous (628 km)",stac:[],
indices:["rvi-sar","rfdi","biomass"],
desc:"L-band SAR excelling at forest monitoring due to deep canopy penetration."},

{id:"terrasar-x",name:"TerraSAR-X / TanDEM-X",operator:"DLR/Airbus",category:"sar",launch:"2007/2010",status:"Active",dateStart:"2007-06",dateEnd:"Present",bands:[
{name:"HH",label:"HH Pol",wl:"X-band 3.1cm",gsd:"1m"},{name:"VV",label:"VV Pol",wl:"X-band 3.1cm",gsd:"1m"}],
spatial:"0.25-40m",spectral:"X-band SAR",temporal:"11 days",radiometric:"16-bit",swath:"5-100 km",
pricing:"paid",pricingDetail:"Archive: ~$15/km² (MOQ 25km²). Tasking: ~$50/km².",contact:"https://www.intelligence-airbusds.com/",orbit:"Sun-synchronous (514 km)",stac:[],
indices:["rvi-sar","coherence","dem"],
desc:"High-resolution X-band SAR for urban monitoring and DEM generation."},

{id:"enmap",name:"EnMAP",operator:"DLR",category:"hyperspectral",launch:"2022",status:"Active",dateStart:"2022-04",dateEnd:"Present",bands:[
{name:"VNIR",label:"VNIR (1-93)",wl:"420-1000nm",gsd:"30m"},
{name:"SWIR",label:"SWIR (94-230)",wl:"900-2450nm",gsd:"30m"}],
spatial:"30m",spectral:"230 bands",temporal:"27 days (4 days off-nadir)",radiometric:"14-bit",swath:"30 km",
pricing:"free",orbit:"Sun-synchronous (653 km)",
stac:[],
indices:["ndvi","evi","pri","cri","ari","mcari","rei","ndli","cai","ndni","wbi"],
desc:"German hyperspectral mission with 230 contiguous bands for advanced spectroscopy."},

{id:"prisma",name:"PRISMA",operator:"ASI (Italy)",category:"hyperspectral",launch:"2019",status:"Active",dateStart:"2019-03",dateEnd:"Present",bands:[
{name:"VNIR",label:"VNIR",wl:"400-1010nm",gsd:"30m"},
{name:"SWIR",label:"SWIR",wl:"920-2505nm",gsd:"30m"},
{name:"PAN",label:"Pan",wl:"400-700nm",gsd:"5m"}],
spatial:"30m (5m Pan)",spectral:"239 bands",temporal:"29 days (7 off-nadir)",radiometric:"12-bit",swath:"30 km",
pricing:"free",orbit:"Sun-synchronous (615 km)",stac:[],
indices:["ndvi","evi","pri","cri","ari","mcari","rei","ndli","cai","wbi"],
desc:"Italian hyperspectral mission combining a 239-band imager with 5m panchromatic camera."},

{id:"desis",name:"DESIS (ISS)",operator:"DLR/Teledyne",category:"hyperspectral",launch:"2018",status:"Active",dateStart:"2018-06",dateEnd:"Present",bands:[
{name:"HSI",label:"HSI",wl:"400-1000nm",gsd:"30m"}],
spatial:"30m",spectral:"235 bands",temporal:"3-5 days (ISS orbit)",radiometric:"12-bit (13 eff.)",swath:"30 km",
pricing:"paid",pricingDetail:"Research/Commercial tasking. Pricing varies by proposal/use-case.",contact:"https://tbe.com/",orbit:"ISS orbit (400 km, 51.6° incl.)",stac:[],
indices:["ndvi","pri","cri","ari","mcari","rei"],
desc:"Hyperspectral instrument on the ISS covering VNIR range with 2.55nm spectral sampling."},

{id:"worldview-3",name:"WorldView-3",operator:"Maxar",category:"msi",launch:"2014",status:"Active",dateStart:"2014-08",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"450-800nm",gsd:"0.31m"},
{name:"Coastal",label:"Coastal",wl:"400nm",gsd:"1.24m"},{name:"Blue",label:"Blue",wl:"450nm",gsd:"1.24m"},
{name:"Green",label:"Green",wl:"510nm",gsd:"1.24m"},{name:"Yellow",label:"Yellow",wl:"585nm",gsd:"1.24m"},
{name:"Red",label:"Red",wl:"630nm",gsd:"1.24m"},{name:"RE",label:"RedEdge",wl:"724nm",gsd:"1.24m"},
{name:"NIR1",label:"NIR1",wl:"832nm",gsd:"1.24m"},{name:"NIR2",label:"NIR2",wl:"948nm",gsd:"1.24m"}],
spatial:"0.31m Pan / 1.24m MS / 3.7m SWIR",spectral:"29 bands (8 VNIR + 8 SWIR + 12 CAVIS + Pan)",temporal:"<1 day (agile)",radiometric:"11-bit",swath:"13.1 km",
pricing:"paid",pricingDetail:"Archive: ~$22.50/km² (MOQ 25km²). Tasking: ~$55/km² (MOQ 100km²).",contact:"https://www.maxar.com/",orbit:"Sun-synchronous (617 km)",stac:[],
indices:["ndvi","evi","savi","ndwi","ndbi","gndvi","osavi","ndre","arvi"],
desc:"Ultra-high resolution commercial satellite with 0.31m panchromatic and SWIR capabilities."},

{id:"pleiades",name:"Pléiades 1A/1B",operator:"Airbus",category:"msi",launch:"2011/2012",status:"Active",dateStart:"2011-12",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"480-820nm",gsd:"0.5m"},
{name:"B0",label:"Blue",wl:"430-550nm",gsd:"2m"},{name:"B1",label:"Green",wl:"500-620nm",gsd:"2m"},
{name:"B2",label:"Red",wl:"590-710nm",gsd:"2m"},{name:"B3",label:"NIR",wl:"740-940nm",gsd:"2m"}],
spatial:"0.5m Pan / 2m MS",spectral:"5 bands",temporal:"Daily (agile)",radiometric:"12-bit",swath:"20 km",
pricing:"paid",pricingDetail:"Archive: ~$15/km² (MOQ 25km²). Tasking: ~$45/km² (MOQ 100km²).",contact:"https://www.intelligence-airbusds.com/",orbit:"Sun-synchronous (694 km)",stac:[],
indices:["ndvi","savi","gndvi","ndwi"],
desc:"Very high resolution optical constellation for defense, mapping and urban applications."},

{id:"planet",name:"PlanetScope (Dove)",operator:"Planet Labs",category:"msi",launch:"Ongoing",status:"Active",dateStart:"2014-01",dateEnd:"Present",bands:[
{name:"B1",label:"Blue",wl:"464nm",gsd:"3m"},{name:"B2",label:"Green",wl:"547nm",gsd:"3m"},
{name:"B3",label:"Red",wl:"635nm",gsd:"3m"},{name:"B4",label:"NIR",wl:"820nm",gsd:"3m"},
{name:"B5",label:"RedEdge",wl:"707nm",gsd:"3m"},{name:"B6",label:"Green-II",wl:"547nm",gsd:"3m"},
{name:"B7",label:"Coastal",wl:"431nm",gsd:"3m"},{name:"B8",label:"Yellow",wl:"593nm",gsd:"3m"}],
spatial:"3-4m",spectral:"8 bands (SuperDove)",temporal:"Daily",radiometric:"12-bit",swath:"24 km",
pricing:"paid",pricingDetail:"Subscription based (starts ~$5,000/yr) or ~$1.80/km² via resellers (MOQ 100km²).",contact:"https://www.planet.com/",orbit:"Sun-synchronous (475 km)",
stac:[{p:"Planet STAC",u:"https://api.planet.com/compute/ops/stac/v1",c:"PSScene",d:"https://developers.planet.com/docs/apis/stac/"}],
indices:["ndvi","evi","gndvi","ndwi","savi","ndre"],
desc:"400+ CubeSat constellation providing daily 3m global coverage."},

{id:"spot-67",name:"SPOT 6/7",operator:"Airbus",category:"msi",launch:"2012/2014",status:"Active",dateStart:"2012-09",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"450-745nm",gsd:"1.5m"},
{name:"B0",label:"Blue",wl:"455-525nm",gsd:"6m"},{name:"B1",label:"Green",wl:"530-590nm",gsd:"6m"},
{name:"B2",label:"Red",wl:"625-695nm",gsd:"6m"},{name:"B3",label:"NIR",wl:"760-890nm",gsd:"6m"}],
spatial:"1.5m Pan / 6m MS",spectral:"5 bands",temporal:"1-3 days",radiometric:"12-bit",swath:"60 km",
pricing:"paid",pricingDetail:"Archive: ~$4.50/km² (MOQ 100km²). Tasking: ~$12/km².",contact:"https://www.intelligence-airbusds.com/",orbit:"Sun-synchronous (694 km)",stac:[],
indices:["ndvi","savi","gndvi","ndwi"],
desc:"High-resolution constellation widely used for agriculture, forestry, and urban mapping."},

{id:"aster",name:"ASTER",operator:"NASA/METI",category:"msi",launch:"1999",status:"Active (partial)",dateStart:"1999-12",dateEnd:"Present",bands:[
{name:"B1",label:"Green",wl:"556nm",gsd:"15m"},{name:"B2",label:"Red",wl:"661nm",gsd:"15m"},
{name:"B3N",label:"NIR",wl:"807nm",gsd:"15m"},{name:"B4",label:"SWIR1",wl:"1656nm",gsd:"30m"},
{name:"B5",label:"SWIR2",wl:"2167nm",gsd:"30m"},{name:"B10",label:"TIR1",wl:"8291nm",gsd:"90m"},
{name:"B13",label:"TIR4",wl:"10657nm",gsd:"90m"},{name:"B14",label:"TIR5",wl:"11318nm",gsd:"90m"}],
spatial:"15m/30m/90m",spectral:"14 bands (VNIR+SWIR+TIR)",temporal:"16 days",radiometric:"8-12 bit",swath:"60 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"aster-l1t",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","savi","ndwi","clay-index","iron-oxide","alunite","carbonate","silica"],
desc:"Multispectral imager on Terra with unique TIR and SWIR capabilities for geology."},

{id:"avhrr",name:"AVHRR",operator:"NOAA",category:"legacy",launch:"1978-present",status:"Active",dateStart:"1978-10",dateEnd:"Present",bands:[
{name:"B1",label:"Red",wl:"630nm",gsd:"1.1km"},{name:"B2",label:"NIR",wl:"862nm",gsd:"1.1km"},
{name:"B3",label:"MWIR",wl:"3740nm",gsd:"1.1km"},{name:"B4",label:"TIR1",wl:"10800nm",gsd:"1.1km"},
{name:"B5",label:"TIR2",wl:"12000nm",gsd:"1.1km"}],
spatial:"1.1 km",spectral:"5-6 bands",temporal:"Daily (2x)",radiometric:"10-bit",swath:"2900 km",
pricing:"free",orbit:"Sun-synchronous (830 km)",stac:[],
indices:["ndvi","lst"],
desc:"Longest-running satellite vegetation record (40+ years) for climate studies."},

{id:"landsat-5",name:"Landsat 5 TM",operator:"USGS/NASA",category:"legacy",launch:"1984",status:"Decommissioned (2013)",dateStart:"1984-03",dateEnd:"2013-06",bands:[
{name:"B1",label:"Blue",wl:"485nm",gsd:"30m"},{name:"B2",label:"Green",wl:"560nm",gsd:"30m"},
{name:"B3",label:"Red",wl:"660nm",gsd:"30m"},{name:"B4",label:"NIR",wl:"830nm",gsd:"30m"},
{name:"B5",label:"SWIR1",wl:"1650nm",gsd:"30m"},{name:"B6",label:"TIR",wl:"11450nm",gsd:"120m"},
{name:"B7",label:"SWIR2",wl:"2220nm",gsd:"30m"}],
spatial:"30m (120m TIR)",spectral:"7 bands",temporal:"16 days",radiometric:"8-bit",swath:"185 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"landsat-c2-l2",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","evi","savi","ndwi","mndwi","nbr","ndmi","ndbi","bsi"],
desc:"Guinness record holder for longest-operating Earth observation satellite (29 years)."},

{id:"rapidye",name:"RapidEye",operator:"Planet Labs",category:"msi",launch:"2008",status:"Decommissioned (2020)",dateStart:"2008-08",dateEnd:"2020-03",bands:[
{name:"B1",label:"Blue",wl:"475nm",gsd:"6.5m"},{name:"B2",label:"Green",wl:"555nm",gsd:"6.5m"},
{name:"B3",label:"Red",wl:"658nm",gsd:"6.5m"},{name:"B4",label:"RedEdge",wl:"710nm",gsd:"6.5m"},
{name:"B5",label:"NIR",wl:"805nm",gsd:"6.5m"}],
spatial:"6.5m (5m resampled)",spectral:"5 bands",temporal:"Daily (off-nadir)",radiometric:"12-bit",swath:"77 km",
pricing:"paid",contact:"https://www.planet.com/",orbit:"Sun-synchronous (630 km)",stac:[],
indices:["ndvi","gndvi","ndre","savi","ndwi"],
desc:"First commercial constellation with Red Edge band, pioneering precision agriculture."},

{id:"iceye",name:"ICEYE SAR",operator:"ICEYE",category:"sar",launch:"2018+",status:"Active",dateStart:"2018-01",dateEnd:"Present",bands:[
{name:"VV",label:"VV Pol",wl:"X-band 3.1cm",gsd:"0.25m"}],
spatial:"0.25-15m",spectral:"X-band SAR",temporal:"<24h (constellation)",radiometric:"16-bit",swath:"5-100 km",
pricing:"paid",pricingDetail:"Flexible tasking starting at ~$1,200 per capture.",contact:"https://www.iceye.com/",orbit:"Sun-synchronous (570 km)",stac:[],
indices:["flood-map","ship-detect"],
desc:"Pioneering SAR smallsat constellation providing high-revisit persistent monitoring."},

{id:"pixxel",name:"Pixxel Shakuntala / TD-2",operator:"Pixxel",category:"hyperspectral",launch:"2022",status:"Active",dateStart:"2022-04",dateEnd:"Present",bands:[
{name:"HSI",label:"Hyperspectral",wl:"400-2500nm",gsd:"5m-10m"}],
spatial:"5m (VNIR), 25m (SWIR)",spectral:"150-250 bands",temporal:"Daily (constellation)",radiometric:"12-bit",swath:"30 km",
pricing:"paid",pricingDetail:"Subscription based or approx. $8 - $12/km².",contact:"https://www.pixxel.space/",orbit:"Sun-synchronous (500 km)",stac:[],
indices:["ndvi","pri","cri","mcari","rei"],
desc:"Commercial hyperspectral constellation providing sub-10m resolution for agriculture and mining."},

{id:"blacksky",name:"BlackSky Global",operator:"BlackSky",category:"msi",launch:"2018+",status:"Active",dateStart:"2018-09",dateEnd:"Present",bands:[
{name:"RGB",label:"True Color",wl:"450-700nm",gsd:"0.9m"},{name:"Pan",label:"Panchromatic",wl:"450-800nm",gsd:"0.9m"}],
spatial:"0.9m",spectral:"RGB + Pan",temporal:"Hourly (constellation)",radiometric:"11-bit",swath:"30 km",
pricing:"paid",pricingDetail:"On-demand tasking starting at ~$800 per capture.",contact:"https://www.blacksky.com/",orbit:"Varies (mid-inclination/SSO)",stac:[],
indices:["ndvi","change-det"],
desc:"High-revisit constellation optimized for low-latency site monitoring and rapid tasking."},

{id:"goes",name:"GOES-16/17/18",operator:"NOAA/NASA",category:"moderate",launch:"2016/2018/2022",status:"Active",dateStart:"2016-11",dateEnd:"Present",bands:[
{name:"B1",label:"Blue",wl:"470nm",gsd:"1km"},{name:"B2",label:"Red",wl:"640nm",gsd:"0.5km"},
{name:"B3",label:"NIR",wl:"865nm",gsd:"1km"},{name:"B7",label:"SWIR",wl:"3900nm",gsd:"2km"},
{name:"B13",label:"TIR",wl:"10350nm",gsd:"2km"}],
spatial:"0.5-2 km",spectral:"16 bands",temporal:"5-15 min",radiometric:"12-bit",swath:"Full disk",
pricing:"free",orbit:"Geostationary (35786 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"goes-cmi",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","fire-detect","lst","cloud-mask"],
desc:"Geostationary weather satellites providing near-real-time imagery every 5 minutes."},

{id:"sentinel-3",name:"Sentinel-3A/3B",operator:"ESA/Copernicus",category:"moderate",launch:"2016/2018",status:"Active",dateStart:"2016-02",dateEnd:"Present",bands:[
{name:"Oa01-Oa21",label:"OLCI 21 bands",wl:"400-1020nm",gsd:"300m"},
{name:"S1-S6",label:"SLSTR 6 bands",wl:"555-1613nm",gsd:"500m"},
{name:"S7-S9",label:"SLSTR TIR",wl:"3742-12000nm",gsd:"1km"}],
spatial:"300m (OLCI), 500m-1km (SLSTR)",spectral:"21+11 bands",temporal:"<2 days",radiometric:"12-bit",swath:"1270 km (OLCI)",
pricing:"free",orbit:"Sun-synchronous (814 km)",
stac:[{p:"Copernicus CDSE",u:"https://stac.dataspace.copernicus.eu/v1",c:"SENTINEL-3",d:"https://documentation.dataspace.copernicus.eu/APIs/STAC.html"}],
indices:["ndvi","otci","chl-oc","lst","ndwi"],
desc:"Medium-resolution mission for ocean color, sea/land surface temperature, and vegetation."},

{id:"skysat",name:"SkySat",operator:"Planet Labs",category:"msi",launch:"2013-2020",status:"Active",dateStart:"2013-11",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"450-900nm",gsd:"0.5m"},
{name:"B1",label:"Blue",wl:"450nm",gsd:"0.8m"},{name:"B2",label:"Green",wl:"515nm",gsd:"0.8m"},
{name:"B3",label:"Red",wl:"630nm",gsd:"0.8m"},{name:"B4",label:"NIR",wl:"770nm",gsd:"0.8m"}],
spatial:"0.5m Pan / 0.8m MS",spectral:"5 bands",temporal:"Daily (tasking)",radiometric:"12-bit",swath:"8 km",
pricing:"paid",contact:"https://www.planet.com/",orbit:"Sun-synchronous (500 km)",
stac:[{p:"Planet STAC",u:"https://api.planet.com/compute/ops/stac/v1",c:"SkySatScene",d:"https://developers.planet.com/docs/apis/stac/"}],
indices:["ndvi","gndvi","ndwi"],
desc:"Sub-meter resolution constellation also capable of HD video from space."},

{id:"cbers-4a",name:"CBERS-4A",operator:"CASC/INPE",category:"msi",launch:"2019",status:"Active",dateStart:"2019-12",dateEnd:"Present",bands:[
{name:"B1",label:"Blue",wl:"450-520nm",gsd:"8m"},{name:"B2",label:"Green",wl:"520-590nm",gsd:"8m"},
{name:"B3",label:"Red",wl:"630-690nm",gsd:"8m"},{name:"B4",label:"NIR",wl:"770-890nm",gsd:"8m"},
{name:"Pan",label:"Pan",wl:"510-850nm",gsd:"2m"}],
spatial:"2m Pan / 8m MS",spectral:"4 bands (WPM)",temporal:"31 days",radiometric:"10-bit",swath:"92 km",
pricing:"free",orbit:"Sun-synchronous (628 km)",stac:[],
indices:["ndvi","savi","gndvi","ndwi"],
desc:"China-Brazil Earth Resources Satellite providing high-resolution imagery."},

{id:"capella",name:"Capella Space",operator:"Capella",category:"sar",launch:"2020+",status:"Active",dateStart:"2020-08",dateEnd:"Present",bands:[
{name:"VV",label:"VV Pol",wl:"X-band 3.1cm",gsd:"0.5m"}],
spatial:"0.5m",spectral:"X-band SAR",temporal:"Hourly (tasking)",radiometric:"16-bit",swath:"5-10 km",
pricing:"paid",contact:"https://www.capellaspace.com/",orbit:"Mid-inclination and SSO",stac:[],
indices:["flood-map","change-det"],
desc:"Commercial SAR constellation providing very high-resolution, high-revisit X-band imagery."},

{id:"himawari-8",name:"Himawari-8/9",operator:"JMA",category:"moderate",launch:"2014/2016",status:"Active",dateStart:"2014-10",dateEnd:"Present",bands:[
{name:"B1",label:"Blue",wl:"470nm",gsd:"1km"},{name:"B2",label:"Green",wl:"510nm",gsd:"1km"},
{name:"B3",label:"Red",wl:"640nm",gsd:"0.5km"},{name:"B4",label:"NIR",wl:"860nm",gsd:"1km"},
{name:"B5",label:"SWIR1",wl:"1610nm",gsd:"2km"},{name:"B6",label:"SWIR2",wl:"2260nm",gsd:"2km"},
{name:"B7",label:"MWIR",wl:"3900nm",gsd:"2km"},{name:"B13",label:"TIR1",wl:"10400nm",gsd:"2km"}],
spatial:"0.5-2 km",spectral:"16 bands",temporal:"10 min",radiometric:"11-14 bit",swath:"Full disk (Asia-Pacific)",
pricing:"free",orbit:"Geostationary (35786 km)",stac:[],
indices:["ndvi","lst","fire-detect"],
desc:"Advanced geostationary meteorological satellites for the Asia-Pacific region."},

{id:"resourcesat-2",name:"Resourcesat-2/2A",operator:"ISRO",category:"msi",launch:"2011/2016",status:"Active",dateStart:"2011-04",dateEnd:"Present",bands:[
{name:"B2",label:"Green",wl:"520-590nm",gsd:"23.5m"},{name:"B3",label:"Red",wl:"620-680nm",gsd:"23.5m"},
{name:"B4",label:"NIR",wl:"770-860nm",gsd:"23.5m"},{name:"B5",label:"SWIR",wl:"1550-1700nm",gsd:"23.5m"}],
spatial:"5.8m (LISS-IV), 23.5m (LISS-III)",spectral:"4 bands",temporal:"5-24 days",radiometric:"10-bit",swath:"141-740 km",
pricing:"free",orbit:"Sun-synchronous (817 km)",stac:[],
indices:["ndvi","savi","ndwi","mndwi","ndmi"],
desc:"Workhorse Indian remote sensing satellites equipped with LISS-IV, LISS-III, and AWiFS sensors."},

{id:"nisar",name:"NISAR",operator:"NASA/ISRO",category:"sar",launch:"2025 (Planned)",status:"Planned",dateStart:"2025",dateEnd:"Planned",bands:[
{name:"L-Band",label:"L-band",wl:"24 cm",gsd:"3-10m"},{name:"S-Band",label:"S-band",wl:"9 cm",gsd:"3-10m"}],
spatial:"3-10m",spectral:"L-band and S-band SAR",temporal:"12 days",radiometric:"16-bit",swath:"240 km",
pricing:"free",orbit:"Sun-synchronous (747 km)",stac:[],
indices:["biomass","deformation","soil-moisture"],
desc:"Upcoming joint mission offering unprecedented dual-frequency (L and S band) SAR."},

{id:"landsat-7",name:"Landsat 7 ETM+",operator:"USGS/NASA",category:"legacy",launch:"1999",status:"Decommissioned (2022)",dateStart:"1999-04",dateEnd:"2022-04",bands:[
{name:"B1",label:"Blue",wl:"485nm",gsd:"30m"},{name:"B2",label:"Green",wl:"560nm",gsd:"30m"},
{name:"B3",label:"Red",wl:"660nm",gsd:"30m"},{name:"B4",label:"NIR",wl:"835nm",gsd:"30m"},
{name:"B5",label:"SWIR1",wl:"1650nm",gsd:"30m"},{name:"B6",label:"TIR",wl:"11450nm",gsd:"60m"},
{name:"B7",label:"SWIR2",wl:"2220nm",gsd:"30m"},{name:"B8",label:"Pan",wl:"710nm",gsd:"15m"}],
spatial:"30m (15m Pan, 60m TIR)",spectral:"8 bands",temporal:"16 days",radiometric:"8-bit",swath:"185 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",
stac:[{p:"Planetary Computer",u:"https://planetarycomputer.microsoft.com/api/stac/v1",c:"landsat-c2-l2",d:"https://planetarycomputer.microsoft.com/docs/concepts/stac/"}],
indices:["ndvi","evi","savi","ndwi","mndwi","nbr","ndmi","ndbi","bsi"],
desc:"Long-standing Landsat mission known for the Scan Line Corrector (SLC) failure in 2003."},

{id:"proba-v",name:"PROBA-V",operator:"ESA",category:"moderate",launch:"2013",status:"Decommissioned (2021)",dateStart:"2013-05",dateEnd:"2021-10",bands:[
{name:"Blue",label:"Blue",wl:"460nm",gsd:"100-333m"},{name:"Red",label:"Red",wl:"658nm",gsd:"100-333m"},
{name:"NIR",label:"NIR",wl:"834nm",gsd:"100-333m"},{name:"SWIR",label:"SWIR",wl:"1610nm",gsd:"100-333m"}],
spatial:"100m, 333m, 1km",spectral:"4 bands",temporal:"1-2 days",radiometric:"12-bit",swath:"2250 km",
pricing:"free",orbit:"Sun-synchronous (820 km)",stac:[],
indices:["ndvi","savi","ndwi"],
desc:"Mini-satellite meant to bridge the gap in global vegetation monitoring between SPOT-VGT and Sentinel-3."},

{id:"smap",name:"SMAP",operator:"NASA",category:"sar",launch:"2015",status:"Active (Radiometer)",dateStart:"2015-01",dateEnd:"Present",bands:[
{name:"L-Band Rad",label:"Radiometer",wl:"1.41 GHz",gsd:"36km"}],
spatial:"36 km",spectral:"L-band passive microwave",temporal:"2-3 days",radiometric:"N/A",swath:"1000 km",
pricing:"free",orbit:"Sun-synchronous (685 km)",stac:[],
indices:["soil-moisture"],
desc:"Soil Moisture Active Passive observatory measuring global soil moisture and freeze/thaw states."},

{id:"pixxel",name:"Pixxel (Anand / Shakuntala)",operator:"Pixxel",category:"hyperspectral",launch:"2022+",status:"Active",dateStart:"2022-04",dateEnd:"Present",bands:[
{name:"HSI",label:"Hyperspectral",wl:"400-1000nm",gsd:"5-10m"}],
spatial:"5m (planned), 10m (current)",spectral:"150+ bands",temporal:"Daily (constellation planned)",radiometric:"12-bit",swath:"30-40 km",
pricing:"paid",contact:"https://www.pixxel.space/",orbit:"Sun-synchronous (~500 km)",stac:[],
indices:["ndvi","pri","cri","ari","ndyi"],
desc:"Commercial hyperspectral constellation aiming to provide high-resolution daily global coverage for agriculture and climate monitoring."},

{id:"satellogic",name:"Satellogic (NewSat)",operator:"Satellogic",category:"msi",launch:"2016+",status:"Active",dateStart:"2016-05",dateEnd:"Present",bands:[
{name:"MSI",label:"Multispectral",wl:"450-900nm",gsd:"0.99m"},{name:"HSI",label:"Hyperspectral",wl:"460-830nm",gsd:"29m"}],
spatial:"0.99m MS / 29m HSI",spectral:"4 MS bands, 29 HSI bands",temporal:"Daily (constellation)",radiometric:"12-bit",swath:"5 km",
pricing:"paid",contact:"https://satellogic.com/",orbit:"Sun-synchronous (475 km)",stac:[],
indices:["ndvi","gndvi","ndwi"],
desc:"High-resolution commercial constellation uniquely combining sub-meter multispectral imaging with native hyperspectral capabilities."},

{id:"blacksky",name:"BlackSky Global",operator:"BlackSky",category:"msi",launch:"2018+",status:"Active",dateStart:"2018-11",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"400-900nm",gsd:"0.9m"},{name:"RGB",label:"RGB",wl:"400-700nm",gsd:"1m"}],
spatial:"0.9m - 1.3m",spectral:"Pan + RGB",temporal:"Hourly (high revisit)",radiometric:"11-bit",swath:"4.4 km",
pricing:"paid",contact:"https://www.blacksky.com/",orbit:"Mid-inclination (430-530 km)",stac:[],
indices:["gli","vari"],
desc:"High-revisit commercial constellation focused on real-time intelligence and rapid monitoring over specific latitudes."},

{id:"umbra",name:"Umbra",operator:"Umbra Space",category:"sar",launch:"2021+",status:"Active",dateStart:"2021-06",dateEnd:"Present",bands:[
{name:"VV",label:"VV Pol",wl:"X-band 3.1cm",gsd:"0.15m"}],
spatial:"0.15m - 1m",spectral:"X-band SAR",temporal:"Intraday",radiometric:"16-bit",swath:"5-10 km",
pricing:"paid",contact:"https://umbra.space/",orbit:"Sun-synchronous (~500 km)",stac:[],
indices:["flood-map","change-det"],
desc:"Commercial SAR constellation boasting the highest resolution commercially available radar imagery (down to 15cm)."},

{id:"ghgsat",name:"GHGSat",operator:"GHGSat",category:"hyperspectral",launch:"2016+",status:"Active",dateStart:"2016-06",dateEnd:"Present",bands:[
{name:"SWIR",label:"SWIR",wl:"1600-1700nm",gsd:"25m"}],
spatial:"25m",spectral:"High-res SWIR spectrometer",temporal:"14 days",radiometric:"12-bit",swath:"12 km",
pricing:"paid",contact:"https://www.ghgsat.com/",orbit:"Sun-synchronous (~500 km)",stac:[],
indices:[],
desc:"Specialized commercial constellation designed explicitly for detecting and quantifying facility-level greenhouse gas (methane) emissions."},

{id:"pace",name:"PACE (OCI)",operator:"NASA",category:"hyperspectral",launch:"2024",status:"Active",dateStart:"2024-02",dateEnd:"Present",bands:[
{name:"UV-VIS-NIR",label:"Hyperspectral",wl:"340-890nm",gsd:"1km"},{name:"SWIR",label:"SWIR",wl:"940-2260nm",gsd:"1km"}],
spatial:"1 km",spectral:"200+ bands",temporal:"1-2 days",radiometric:"14-bit",swath:"2663 km",
pricing:"free",orbit:"Sun-synchronous (676.5 km)",stac:[],
indices:["chl-oc","ndvi","ndwi"],
desc:"Plankton, Aerosol, Cloud, ocean Ecosystem mission offering unprecedented global hyperspectral ocean color data."},

{id:"synspective",name:"StriX (Synspective)",operator:"Synspective",category:"sar",launch:"2020+",status:"Active",dateStart:"2020-12",dateEnd:"Present",bands:[
{name:"X-Band",label:"X-band",wl:"3.1cm",gsd:"1-3m"}],
spatial:"1-3m",spectral:"X-band SAR",temporal:"Daily (constellation)",radiometric:"16-bit",swath:"10-30 km",
pricing:"paid",contact:"https://synspective.com/",orbit:"Sun-synchronous (~500 km)",stac:[],
indices:["flood-map","change-det"],
desc:"Japanese commercial SAR constellation providing high-resolution X-band imagery with a focus on business continuity and disaster response."},

{id:"orbital-sidekick",name:"GHOSt (Orbital Sidekick)",operator:"Orbital Sidekick",category:"hyperspectral",launch:"2023",status:"Active",dateStart:"2023-04",dateEnd:"Present",bands:[
{name:"HSI",label:"Hyperspectral",wl:"400-2500nm",gsd:"8m"}],
spatial:"8m",spectral:"400+ bands (VNIR/SWIR)",temporal:"Daily (tasking)",radiometric:"14-bit",swath:"12 km",
pricing:"paid",contact:"https://orbitalsidekick.com/",orbit:"Sun-synchronous (~500 km)",stac:[],
indices:["methane-detect","oil-spill","mineral-map"],
desc:"Highest resolution commercial hyperspectral satellite in orbit, specialized for energy infrastructure monitoring and mineral exploration."},

{id:"axelspace",name:"GRUS (AxelGlobe)",operator:"Axelspace",category:"msi",launch:"2018+",status:"Active",dateStart:"2018-12",dateEnd:"Present",bands:[
{name:"B1",label:"Blue",wl:"450nm",gsd:"2.5m"},{name:"B2",label:"Green",wl:"545nm",gsd:"2.5m"},
{name:"B3",label:"Red",wl:"660nm",gsd:"2.5m"},{name:"B4",label:"RedEdge",wl:"720nm",gsd:"2.5m"},
{name:"B5",label:"NIR",wl:"840nm",gsd:"2.5m"}],
spatial:"2.5m (5m swatch)",spectral:"5 bands (inc. Red Edge)",temporal:"Daily (constellation)",radiometric:"12-bit",swath:"57 km",
pricing:"paid",contact:"https://www.axelglobe.com/",orbit:"Sun-synchronous (600 km)",stac:[],
indices:["ndvi","ndre","gndvi"],
desc:"Japanese commercial constellation providing cost-effective 2.5m imagery with a high temporal revisit."},

{id:"spire",name:"Spire LEMUR-2",operator:"Spire Global",category:"moderate",launch:"2014+",status:"Active",dateStart:"2014-02",dateEnd:"Present",bands:[
{name:"AIS",label:"AIS Receiver",wl:"Radio",gsd:"N/A"},{name:"GNSS-R",label:"Soil Moisture",wl:"L-band",gsd:"N/A"}],
spatial:"Global (Point data)",spectral:"AIS/ADS-B/GNSS-R",temporal:"Hourly",radiometric:"N/A",swath:"N/A",
pricing:"paid",contact:"https://spire.com/",orbit:"Varying (LEO)",stac:[],
indices:["soil-moisture","sea-ice-ext"],
desc:"Massive CubeSat constellation specializing in AIS tracking, weather occultation, and GNSS reflectometry for soil moisture."},

{id:"iqps",name:"iQPS SAR",operator:"iQPS",category:"sar",launch:"2019+",status:"Active",dateStart:"2019-12",dateEnd:"Present",bands:[
{name:"X-Band",label:"X-band",wl:"3.1cm",gsd:"0.46m"}],
spatial:"0.46m - 1m",spectral:"X-band SAR",temporal:"10 mins (planned)",radiometric:"16-bit",swath:"10 km",
pricing:"paid",contact:"https://i-qps.net/",orbit:"Sun-synchronous (~500 km)",stac:[],
indices:["flood-map","change-det"],
desc:"Japanese commercial SAR venture utilizing high-gain foldable parabolic antennas to achieve high resolution on small buses."},

{id:"wyvern",name:"Dragonette (Wyvern)",operator:"Wyvern Space",category:"hyperspectral",launch:"2023",status:"Active",dateStart:"2023-04",dateEnd:"Present",bands:[
{name:"HSI",label:"Hyperspectral",wl:"400-1000nm",gsd:"5m"}],
spatial:"5m (folded optics)",spectral:"VNIR Hyperspectral",temporal:"Daily (tasking)",radiometric:"12-bit",swath:"10-20 km",
pricing:"paid",contact:"https://wyvern.space/",orbit:"Sun-synchronous (~500 km)",stac:[],
indices:["ndvi","pri","cri"],
desc:"Canadian company utilizing deployable optics to provide high-resolution hyperspectral data for agriculture."},

{id:"tomorrow",name:"Tomorrow-R1/R2",operator:"Tomorrow.io",category:"sar",launch:"2023",status:"Active",dateStart:"2023-04",dateEnd:"Present",bands:[
{name:"Ka-Band",label:"Radar",wl:"35 GHz",gsd:"N/A"}],
spatial:"Global (Weather profile)",spectral:"Ka-band Precipitation Radar",temporal:"Hourly",radiometric:"N/A",swath:"N/A",
pricing:"paid",contact:"https://www.tomorrow.io/",orbit:"Sun-synchronous (500 km)",stac:[],
indices:["precip-rate"],
desc:"First commercial constellation dedicated to active precipitation radar, providing global 3D weather data."},

{id:"landsat-4",name:"Landsat 4 TM",operator:"USGS/NASA",category:"legacy",launch:"1982",status:"Decommissioned (1993)",dateStart:"1982-07",dateEnd:"1993-12",bands:[
{name:"B1-B7",label:"TM bands",wl:"450-12500nm",gsd:"30m"}],
spatial:"30m (120m TIR)",spectral:"7 bands",temporal:"16 days",radiometric:"8-bit",swath:"185 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",stac:[],
indices:["ndvi","ndwi","nbr"],
desc:"Predecessor to Landsat 5, standardizing the Thematic Mapper (TM) sensor package."},

{id:"quickbird",name:"QuickBird",operator:"DigitalGlobe (Maxar)",category:"legacy",launch:"2001",status:"Decommissioned (2015)",dateStart:"2001-10",dateEnd:"2015-01",bands:[
{name:"Pan",label:"Pan",wl:"450-900nm",gsd:"0.61m"},{name:"MSI",label:"4 bands",wl:"450-900nm",gsd:"2.4m"}],
spatial:"0.61m Pan / 2.4m MS",spectral:"Pan + RGB + NIR",temporal:"1-3 days",radiometric:"11-bit",swath:"16.5 km",
pricing:"paid",contact:"https://www.maxar.com/",orbit:"Sun-synchronous (450 km)",stac:[],
indices:["ndvi","savi","ndwi"],
desc:"Historical high-resolution commercial satellite that paved the way for modern sub-meter imaging."},

{id:"ikonos",name:"IKONOS",operator:"GeoEye (Maxar)",category:"legacy",launch:"1999",status:"Decommissioned (2015)",dateStart:"1999-09",dateEnd:"2015-03",bands:[
{name:"Pan",label:"Pan",wl:"450-900nm",gsd:"0.82m"},{name:"MSI",label:"4 bands",wl:"450-900nm",gsd:"3.2m"}],
spatial:"0.82m Pan / 3.2m MS",spectral:"Pan + RGB + NIR",temporal:"3 days",radiometric:"11-bit",swath:"11.3 km",
pricing:"paid",contact:"https://www.maxar.com/",orbit:"Sun-synchronous (681 km)",stac:[],
indices:["ndvi","savi","ndwi"],
desc:"The world's first commercial satellite to provide sub-meter resolution (0.8m) imagery."},

{id:"eros-b",name:"EROS-B",operator:"ISI",category:"msi",launch:"2006",status:"Active",dateStart:"2006-04",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"500-900nm",gsd:"0.7m"}],
spatial:"0.7m",spectral:"Panchromatic only",temporal:"3-4 days",radiometric:"10-bit",swath:"7 km",
pricing:"paid",pricingDetail:"Tasking starting at ~$400 - $600 per scene.",contact:"https://www.imagesatintl.com/",orbit:"Sun-synchronous (500 km)",stac:[],
indices:[],
desc:"High-resolution commercial panchromatic satellite providing agile tasking for defense and intelligence."},

{id:"dubaisat-2",name:"DubaiSat-2",operator:"MBRSC",category:"msi",launch:"2013",status:"Active",dateStart:"2013-11",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"550-900nm",gsd:"1m"},{name:"MSI",label:"4 bands",wl:"450-890nm",gsd:"4m"}],
spatial:"1m Pan / 4m MS",spectral:"Pan + RGB + NIR",temporal:"2-5 days",radiometric:"10-bit",swath:"12.2 km",
pricing:"paid",contact:"https://www.mbrsc.ae/",orbit:"Sun-synchronous (600 km)",stac:[],
indices:["ndvi","savi","ndwi"],
desc:"The second Earth observation satellite from the UAE, providing high-resolution imagery for urban planning and environmental monitoring."},

{id:"gaofen-1",name:"GaoFen-1",operator:"CNSA",category:"msi",launch:"2013",status:"Active",dateStart:"2013-04",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"450-900nm",gsd:"2m"},{name:"MSI",label:"4 bands",wl:"450-890nm",gsd:"8m"},{name:"WFV",label:"Wide Field",wl:"450-890nm",gsd:"16m"}],
spatial:"2m Pan / 8m MS / 16m WFV",spectral:"Pan + RGB + NIR",temporal:"4 days",radiometric:"10-bit",swath:"60-800 km",
pricing:"free",orbit:"Sun-synchronous (645 km)",stac:[],
indices:["ndvi","gndvi","ndwi"],
desc:"High-resolution optical satellite featuring a unique Wide Field of View (WFV) sensor for rapid global coverage."},

{id:"gaofen-3",name:"GaoFen-3",operator:"CNSA",category:"sar",launch:"2016",status:"Active",dateStart:"2016-08",dateEnd:"Present",bands:[
{name:"C-Band",label:"C-band",wl:"5.4 GHz",gsd:"1-500m"}],
spatial:"1m - 500m",spectral:"C-band SAR (Multi-pol)",temporal:"Daily (tasking)",radiometric:"16-bit",swath:"10-650 km",
pricing:"free",orbit:"Sun-synchronous (755 km)",stac:[],
indices:["flood-map","change-det"],
desc:"China's first C-band multi-polarization synthetic aperture radar satellite for ocean and land monitoring."},

{id:"gaofen-4",name:"GaoFen-4",operator:"CNSA",category:"moderate",launch:"2015",status:"Active",dateStart:"2015-12",dateEnd:"Present",bands:[
{name:"VNIR",label:"Visible",wl:"450-900nm",gsd:"50m"},{name:"MWIR",label:"Thermal",wl:"3500-4100nm",gsd:"400m"}],
spatial:"50m VNIR / 400m MWIR",spectral:"Visible + MWIR",temporal:"Near-real-time (GEO)",radiometric:"10-bit",swath:"400 km",
pricing:"free",orbit:"Geostationary (35786 km)",stac:[],
indices:["ndvi","fire-detect"],
desc:"The world's first geostationary high-resolution optical satellite, providing persistent monitoring over the Asia-Pacific."},

{id:"gaofen-5",name:"GaoFen-5",operator:"CNSA",category:"hyperspectral",launch:"2018",status:"Active",dateStart:"2018-05",dateEnd:"Present",bands:[
{name:"HSI",label:"Hyperspectral",wl:"400-2500nm",gsd:"30m"}],
spatial:"30m",spectral:"330 bands (VNIR/SWIR)",temporal:"Daily (tasking)",radiometric:"12-bit",swath:"60 km",
pricing:"free",orbit:"Sun-synchronous (705 km)",stac:[],
indices:["ndvi","pri","cri","ari"],
desc:"Hyperspectral mission for comprehensive environmental monitoring of water, air, and land surfaces."},

{id:"perusat-1",name:"PeruSat-1",operator:"CONIDA",category:"msi",launch:"2016",status:"Active",dateStart:"2016-09",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"450-750nm",gsd:"0.7m"},{name:"MSI",label:"4 bands",wl:"450-890nm",gsd:"2.8m"}],
spatial:"0.7m Pan / 2.8m MS",spectral:"Pan + RGB + NIR",temporal:"2-3 days",radiometric:"12-bit",swath:"14.5 km",
pricing:"paid",contact:"https://www.gob.pe/conida",orbit:"Sun-synchronous (695 km)",stac:[],
indices:["ndvi","savi","ndwi"],
desc:"Peru's first sub-meter satellite, providing high-resolution Earth observation data for national security and resource management."},

{id:"ssot",name:"SSOT (FASat-Charlie)",operator:"Chilean Air Force",category:"msi",launch:"2011",status:"Active",dateStart:"2011-12",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"450-900nm",gsd:"1.45m"},{name:"MSI",label:"4 bands",wl:"450-890nm",gsd:"5.8m"}],
spatial:"1.45m Pan / 5.8m MS",spectral:"Pan + RGB + NIR",temporal:"3-5 days",radiometric:"10-bit",swath:"10.1 km",
pricing:"paid",contact:"https://www.saf.cl/",orbit:"Sun-synchronous (620 km)",stac:[],
indices:["ndvi","savi","ndwi"],
desc:"Chile's first operational high-resolution satellite, used extensively for defense, forestry, and disaster mitigation."},

{id:"razaksat",name:"RazakSAT",operator:"ATSB",category:"legacy",launch:"2009",status:"Decommissioned",dateStart:"2009-07",dateEnd:"2014-12",bands:[
{name:"Pan",label:"Pan",wl:"500-900nm",gsd:"2.5m"},{name:"MSI",label:"4 bands",wl:"450-890nm",gsd:"5m"}],
spatial:"2.5m Pan / 5m MS",spectral:"Pan + RGB + NIR",temporal:"Hourly (Near-Equatorial)",radiometric:"8-bit",swath:"20 km",
pricing:"free",orbit:"Near-Equatorial (685 km)",stac:[],
indices:["ndvi","ndwi"],
desc:"Pioneering Malaysian satellite placed in a Near-Equatorial Orbit (NEO) to provide high revisit times over the tropics."},

{id:"vnredsat-1",name:"VNREDSat-1",operator:"VAST",category:"msi",launch:"2013",status:"Active",dateStart:"2013-05",dateEnd:"Present",bands:[
{name:"Pan",label:"Pan",wl:"450-750nm",gsd:"2.5m"},{name:"MSI",label:"4 bands",wl:"450-900nm",gsd:"10m"}],
spatial:"2.5m Pan / 10m MS",spectral:"Pan + RGB + NIR",temporal:"3 days",radiometric:"12-bit",swath:"17.5 km",
pricing:"paid",contact:"https://vast.gov.vn/",orbit:"Sun-synchronous (680 km)",stac:[],
indices:["ndvi","ndwi"],
desc:"Vietnam's first optical remote sensing satellite, designed for monitoring environmental resources and natural disasters."}
];

const SAT_CATEGORIES = [
{id:"all",label:"All Satellites",icon:"🛰️"},
{id:"msi",label:"Multispectral (MSI)",icon:"🌈"},
{id:"sar",label:"SAR / RADAR",icon:"📡"},
{id:"hyperspectral",label:"Hyperspectral",icon:"🔬"},
{id:"moderate",label:"Moderate Resolution",icon:"🌍"},
{id:"legacy",label:"Legacy / Heritage",icon:"📜"},
{id:"free",label:"Free + Open Data",icon:"🔓"},
{id:"paid",label:"Commercial Data",icon:"💎"},
{id:"active",label:"Active Missions",icon:"🟢"},
{id:"inactive",label:"Inactive / Planned",icon:"🔴"}
];
