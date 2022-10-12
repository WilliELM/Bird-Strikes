var map = L.map('map').setView([37.85454554240838, -97.5056217858466], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const data = [
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 36.16122220,
        "longitude" : -97.08569440
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 32.69285000,
        "longitude" : -83.64921000
    },
    {
        "latitude" : 18.42966400,
        "longitude" : -69.66892500
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 46.79739000,
        "longitude" : -102.80195000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 20.68008300,
        "longitude" : -105.25416700
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 33.94860000,
        "longitude" : -83.32635000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 36.18236000,
        "longitude" : -86.88672000
    },
    {
        "latitude" : 30.30038890,
        "longitude" : -83.02438890
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 48.09814780,
        "longitude" : -123.18712330
    },
    {
        "latitude" : 33.79000000,
        "longitude" : -118.05200000
    },
    {
        "latitude" : 33.94860000,
        "longitude" : -83.32635000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 36.93573000,
        "longitude" : -121.78962000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 15.45263900,
        "longitude" : -87.92355600
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 27.68880000,
        "longitude" : -97.28800000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 33.77914000,
        "longitude" : -84.52136000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 25.99503000,
        "longitude" : -81.67253000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 48.16075000,
        "longitude" : -122.15902000
    },
    {
        "latitude" : 33.17795000,
        "longitude" : -96.59053000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
    },
    {
        "latitude" : 36.18236000,
        "longitude" : -86.88672000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 36.93573000,
        "longitude" : -121.78962000
    },
    {
        "latitude" : 19.75790000,
        "longitude" : -70.57003300
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 24.72614000,
        "longitude" : -81.05138000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 37.32669000,
        "longitude" : -79.20043000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 48.47080000,
        "longitude" : -122.42080000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 40.82142000,
        "longitude" : -82.51664000
    },
    {
        "latitude" : 34.18536000,
        "longitude" : -79.72389000
    },
    {
        "latitude" : 48.47080000,
        "longitude" : -122.42080000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 46.79739000,
        "longitude" : -102.80195000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.84928000,
        "longitude" : -77.84869000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 33.06227780,
        "longitude" : -80.28091670
    },
    {
        "latitude" : 34.14040190,
        "longitude" : -96.81203220
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : -2.15741900,
        "longitude" : -79.88355800
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 23.15185000,
        "longitude" : -109.72104400
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.21319000,
        "longitude" : -122.28069000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.83091670,
        "longitude" : -94.89030560
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.39303000,
        "longitude" : -70.61433000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 44.25407000,
        "longitude" : -121.14996000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 23.39243600,
        "longitude" : 113.29878600
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 6.57736900,
        "longitude" : 3.32115600
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 29.62225000,
        "longitude" : -95.65653000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 12.50138900,
        "longitude" : -70.01522100
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 40.82142000,
        "longitude" : -82.51664000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 38.83091670,
        "longitude" : -94.89030560
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 48.47080000,
        "longitude" : -122.42080000
    },
    {
        "latitude" : 48.47080000,
        "longitude" : -122.42080000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 33.17795000,
        "longitude" : -96.59053000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 35.85499000,
        "longitude" : -77.89296000
    },
    {
        "latitude" : 38.84760000,
        "longitude" : -94.73759000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 10.44250000,
        "longitude" : -75.51305600
    },
    {
        "latitude" : -2.15741900,
        "longitude" : -79.88355800
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 35.54094000,
        "longitude" : -78.39033000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.05581000,
        "longitude" : -80.94836000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 42.30728000,
        "longitude" : -85.25148000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 34.09535000,
        "longitude" : -117.23487000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 36.26057000,
        "longitude" : -76.17460000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.68840000,
        "longitude" : -69.98952000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 44.62785000,
        "longitude" : -93.22811000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 42.72669440,
        "longitude" : -114.45663890
    },
    {
        "latitude" : -34.82222200,
        "longitude" : -58.53583300
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 13.48345000,
        "longitude" : -144.79598000
    },
    {
        "latitude" : 29.17261000,
        "longitude" : -82.22417000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 36.36113890,
        "longitude" : -78.52983330
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 33.45371000,
        "longitude" : -93.99102000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 37.97788420,
        "longitude" : -89.36044890
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 26.90500000,
        "longitude" : -80.32400000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.64257000,
        "longitude" : -106.91770000
    },
    {
        "latitude" : 27.54374000,
        "longitude" : -99.46154000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 31.07627780,
        "longitude" : -97.36480280
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.73152780,
        "longitude" : -74.11663890
    },
    {
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 35.63524000,
        "longitude" : -77.38532000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 40.82493000,
        "longitude" : -115.79170000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 32.63655000,
        "longitude" : -108.15639000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.01353000,
        "longitude" : -83.66869000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 36.26057000,
        "longitude" : -76.17460000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 32.01138900,
        "longitude" : 34.88666700
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 50.86591700,
        "longitude" : 7.14274400
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 42.91131000,
        "longitude" : -112.59586000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 4.70159400,
        "longitude" : -74.14694700
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.45183000,
        "longitude" : -105.01134000
    },
    {
        "latitude" : 52.45385600,
        "longitude" : -1.74802800
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.30918000,
        "longitude" : -81.85338000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 29.17261000,
        "longitude" : -82.22417000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 39.64257000,
        "longitude" : -106.91770000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.82493000,
        "longitude" : -115.79170000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.82493000,
        "longitude" : -115.79170000
    },
    {
        "latitude" : 20.78561000,
        "longitude" : -156.95142000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.68086000,
        "longitude" : -96.86820000
    },
    {
        "latitude" : 19.40609200,
        "longitude" : -70.60468900
    },
    {
        "latitude" : 40.82142000,
        "longitude" : -82.51664000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 4.70159400,
        "longitude" : -74.14694700
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 11.54625800,
        "longitude" : 43.15920600
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.82493000,
        "longitude" : -115.79170000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 44.77762000,
        "longitude" : -89.66678000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.03915000,
        "longitude" : -116.91525000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 45.54532000,
        "longitude" : -94.05834000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 39.77194000,
        "longitude" : -94.90971000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 37.43492000,
        "longitude" : -105.86656000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 41.24184000,
        "longitude" : -76.92110000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.69285000,
        "longitude" : -83.64921000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.49355600,
        "longitude" : -3.56676400
    },
    {
        "latitude" : 41.62661000,
        "longitude" : -73.88411000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 44.93447000,
        "longitude" : -93.06000000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 44.77762000,
        "longitude" : -89.66678000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 40.82142000,
        "longitude" : -82.51664000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 43.99192000,
        "longitude" : -76.02174000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 36.00898000,
        "longitude" : -86.52008000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 29.05581000,
        "longitude" : -80.94836000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 44.93447000,
        "longitude" : -93.06000000
    },
    {
        "latitude" : 34.82916000,
        "longitude" : -77.61214000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 39.07797000,
        "longitude" : -77.55750000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.81978000,
        "longitude" : -97.36244000
    },
    {
        "latitude" : 39.14097000,
        "longitude" : -96.67083000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 35.07297000,
        "longitude" : -77.04294000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 46.68896000,
        "longitude" : -68.04480000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 36.36894250,
        "longitude" : -92.47051970
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 20.78561000,
        "longitude" : -156.95142000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.95188000,
        "longitude" : -117.44510000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 46.26468000,
        "longitude" : -119.11903000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 34.09535000,
        "longitude" : -117.23487000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 33.97469000,
        "longitude" : -117.63661000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 24.72614000,
        "longitude" : -81.05138000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 34.35060000,
        "longitude" : -85.15801000
    },
    {
        "latitude" : 39.79538000,
        "longitude" : -121.85842000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 36.58698000,
        "longitude" : -121.84295000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 35.78114000,
        "longitude" : -80.30378000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 37.98966000,
        "longitude" : -122.05690000
    },
    {
        "latitude" : 37.33287000,
        "longitude" : -121.81979000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 36.58698000,
        "longitude" : -121.84295000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.84365000,
        "longitude" : -72.63179000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 26.37849000,
        "longitude" : -80.10770000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 25.77848900,
        "longitude" : -100.10687800
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 48.25938000,
        "longitude" : -101.28033000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.45146000,
        "longitude" : -87.30756000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 40.37850000,
        "longitude" : -75.96525000
    },
    {
        "latitude" : 25.90683000,
        "longitude" : -97.42586000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 4.70159400,
        "longitude" : -74.14694700
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 29.56650000,
        "longitude" : -90.66042000
    },
    {
        "latitude" : 37.62582000,
        "longitude" : -120.95442000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 42.51011110,
        "longitude" : -123.38800000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 23.39243600,
        "longitude" : 113.29878600
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 8.91479400,
        "longitude" : -79.59963300
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 35.38521000,
        "longitude" : -80.70971000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 34.08601000,
        "longitude" : -118.03485000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 33.17795000,
        "longitude" : -96.59053000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 32.81573000,
        "longitude" : -117.13957000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 32.82623000,
        "longitude" : -116.97245000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 18.49486110,
        "longitude" : -67.12944440
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 37.85831000,
        "longitude" : -80.39947000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.03065000,
        "longitude" : -86.25144000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 44.90953000,
        "longitude" : -123.00250000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 37.04421000,
        "longitude" : -100.95986000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 46.26468000,
        "longitude" : -119.11903000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 40.73152780,
        "longitude" : -74.11663890
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 35.07297000,
        "longitude" : -77.04294000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 34.43472220,
        "longitude" : 135.24416700
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.64257000,
        "longitude" : -106.91770000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 36.00898000,
        "longitude" : -86.52008000
    },
    {
        "latitude" : 44.93447000,
        "longitude" : -93.06000000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 15.11900000,
        "longitude" : 145.72936000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 41.25305000,
        "longitude" : -70.06018000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.58681000,
        "longitude" : -83.80783000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 31.32737000,
        "longitude" : -92.54856000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 24.72614000,
        "longitude" : -81.05138000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 38.21319000,
        "longitude" : -122.28069000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 40.29637000,
        "longitude" : -78.32002000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.04103000,
        "longitude" : -88.23706000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 46.39786000,
        "longitude" : -94.13723000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 32.41132000,
        "longitude" : -99.68190000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 14.99920280,
        "longitude" : 145.61935000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.13845000,
        "longitude" : -111.67122000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 22.98915300,
        "longitude" : -82.40908600
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.14162000,
        "longitude" : -111.66131000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.65483330,
        "longitude" : -112.41922220
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.60002780,
        "longitude" : -96.32194440
    },
    {
        "latitude" : 32.66242000,
        "longitude" : -97.09391000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 6.16453600,
        "longitude" : -75.42311900
    },
    {
        "latitude" : 31.32737000,
        "longitude" : -92.54856000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.20680000,
        "longitude" : -88.32304000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 35.24556000,
        "longitude" : -97.47213000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 33.52726000,
        "longitude" : -112.29516000
    },
    {
        "latitude" : 46.91631000,
        "longitude" : -114.09056000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.77194000,
        "longitude" : -94.90971000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 41.47856000,
        "longitude" : -73.13525000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 23.39243600,
        "longitude" : 113.29878600
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 32.81978000,
        "longitude" : -97.36244000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 38.83091670,
        "longitude" : -94.89030560
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 21.03652800,
        "longitude" : -86.87708300
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 32.78160560,
        "longitude" : -98.06017500
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 21.30735000,
        "longitude" : -158.07030000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 19.40609200,
        "longitude" : -70.60468900
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 24.72614000,
        "longitude" : -81.05138000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.46907500,
        "longitude" : 126.45051700
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 46.84209000,
        "longitude" : -92.19365000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.22316000,
        "longitude" : -106.86885000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 53.30972000,
        "longitude" : -113.57972000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 46.26468000,
        "longitude" : -119.11903000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.49985170,
        "longitude" : -83.55666470
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 15.18583300,
        "longitude" : 120.56027800
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 36.29442000,
        "longitude" : -95.47967000
    },
    {
        "latitude" : 32.69285000,
        "longitude" : -83.64921000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 1.35018900,
        "longitude" : 103.99443300
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 18.56736700,
        "longitude" : -68.36343100
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 46.02586000,
        "longitude" : -91.44424000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 34.65483330,
        "longitude" : -112.41922220
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 39.77194000,
        "longitude" : -94.90971000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 44.34890000,
        "longitude" : -105.53936000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 55.35557000,
        "longitude" : -131.71374000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 21.30735000,
        "longitude" : -158.07030000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 40.14162000,
        "longitude" : -111.66131000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 35.54580560,
        "longitude" : -98.66850000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 38.25783250,
        "longitude" : -122.60554060
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 30.35824100,
        "longitude" : -85.79560340
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 34.26547000,
        "longitude" : -110.00567000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : -34.82222200,
        "longitude" : -58.53583300
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 30.27779000,
        "longitude" : -81.80594000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 39.78194440,
        "longitude" : -93.49627780
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 40.45183000,
        "longitude" : -105.01134000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 47.48200000,
        "longitude" : -111.37069000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 30.06186000,
        "longitude" : -95.55278000
    },
    {
        "latitude" : 42.76529000,
        "longitude" : -96.93425000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 50.90138900,
        "longitude" : 4.48444400
    },
    {
        "latitude" : 42.61958000,
        "longitude" : -89.04034000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.58681000,
        "longitude" : -83.80783000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 33.45371000,
        "longitude" : -93.99102000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 35.38521000,
        "longitude" : -80.70971000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 59.64556000,
        "longitude" : -151.47658000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.36449000,
        "longitude" : -84.52458000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.99819440,
        "longitude" : -74.32955560
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 26.37849000,
        "longitude" : -80.10770000
    },
    {
        "latitude" : 33.97808000,
        "longitude" : -83.96238000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 45.79999070,
        "longitude" : -99.64272000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 30.35824100,
        "longitude" : -85.79560340
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 25.03895800,
        "longitude" : -77.46623100
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 37.65927000,
        "longitude" : -122.12241000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 38.55390000,
        "longitude" : -121.29759000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.12595720,
        "longitude" : -123.20085500
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 29.62225000,
        "longitude" : -95.65653000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 41.80447500,
        "longitude" : 12.25079700
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 43.04103000,
        "longitude" : -88.23706000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 38.21319000,
        "longitude" : -122.28069000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 3.54322200,
        "longitude" : -76.38158300
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 32.01138900,
        "longitude" : 34.88666700
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 28.28981000,
        "longitude" : -81.43708000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 40.84928000,
        "longitude" : -77.84869000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 27.68880000,
        "longitude" : -97.28800000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 32.01138900,
        "longitude" : 34.88666700
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 32.33477000,
        "longitude" : -90.22253000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.78323000,
        "longitude" : -91.12551000
    },
    {
        "latitude" : 33.58404000,
        "longitude" : -88.66669000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 41.19594000,
        "longitude" : -112.01218000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 35.33659000,
        "longitude" : -94.36744000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 28.28981000,
        "longitude" : -81.43708000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 41.25305000,
        "longitude" : -70.06018000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 32.38486000,
        "longitude" : -94.71171000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 45.54532000,
        "longitude" : -94.05834000
    },
    {
        "latitude" : 40.21919000,
        "longitude" : -111.72336000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 45.24713890,
        "longitude" : -122.77005560
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 34.89925000,
        "longitude" : -120.45758000
    },
    {
        "latitude" : 34.08525000,
        "longitude" : -117.14638890
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.68919000,
        "longitude" : -75.35889000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 29.62225000,
        "longitude" : -95.65653000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 24.72614000,
        "longitude" : -81.05138000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 39.77194000,
        "longitude" : -94.90971000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 38.09602780,
        "longitude" : -92.54947220
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 47.32816000,
        "longitude" : -122.22651000
    },
    {
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 43.76949000,
        "longitude" : -87.85159000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 32.70086000,
        "longitude" : -80.00292000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 41.34428000,
        "longitude" : -82.17764000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.25305000,
        "longitude" : -70.06018000
    },
    {
        "latitude" : 49.19389000,
        "longitude" : -123.18444000
    },
    {
        "latitude" : 45.72267000,
        "longitude" : -87.09373000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 42.76529000,
        "longitude" : -96.93425000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 27.68880000,
        "longitude" : -97.28800000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 32.41132000,
        "longitude" : -99.68190000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.67872000,
        "longitude" : -75.60653000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 21.15289000,
        "longitude" : -157.09626000
    },
    {
        "latitude" : 41.19594000,
        "longitude" : -112.01218000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 71.28545000,
        "longitude" : -156.76600000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 44.34890000,
        "longitude" : -105.53936000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.77194000,
        "longitude" : -94.90971000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 59.46006190,
        "longitude" : -135.31566360
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 46.77411000,
        "longitude" : -100.74672000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.34428000,
        "longitude" : -82.17764000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 48.16075000,
        "longitude" : -122.15902000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 46.91631000,
        "longitude" : -114.09056000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 34.09535000,
        "longitude" : -117.23487000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.46570030,
        "longitude" : -81.20871810
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 66.88468000,
        "longitude" : -162.59855000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 26.24714000,
        "longitude" : -80.11106000
    },
    {
        "latitude" : 34.97875000,
        "longitude" : -89.78683000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 33.35725000,
        "longitude" : -84.57183000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.34053000,
        "longitude" : -75.51029000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.73152780,
        "longitude" : -74.11663890
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 33.45371000,
        "longitude" : -93.99102000
    },
    {
        "latitude" : 42.91131000,
        "longitude" : -112.59586000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 36.00898000,
        "longitude" : -86.52008000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 31.53552000,
        "longitude" : -84.19447000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.52726000,
        "longitude" : -112.29516000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 33.52726000,
        "longitude" : -112.29516000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 38.90916000,
        "longitude" : -121.35134000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.80447500,
        "longitude" : 12.25079700
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 46.77411000,
        "longitude" : -100.74672000
    },
    {
        "latitude" : 44.25407000,
        "longitude" : -121.14996000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 6.49833300,
        "longitude" : -58.25388900
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 34.26362000,
        "longitude" : -116.85448000
    },
    {
        "latitude" : 29.46570030,
        "longitude" : -81.20871810
    },
    {
        "latitude" : 35.87748000,
        "longitude" : -86.37753000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 43.57304170,
        "longitude" : -71.41784170
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 41.39100000,
        "longitude" : -83.63013890
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 29.62225000,
        "longitude" : -95.65653000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 17.13674900,
        "longitude" : -61.79266700
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 20.78561000,
        "longitude" : -156.95142000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 37.32669000,
        "longitude" : -79.20043000
    },
    {
        "latitude" : 39.26192000,
        "longitude" : -85.89635000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 34.09984640,
        "longitude" : -93.06611690
    },
    {
        "latitude" : 32.60888900,
        "longitude" : -82.36972200
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.53455000,
        "longitude" : -97.64722000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.50998300,
        "longitude" : -74.26465000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 41.24184000,
        "longitude" : -76.92110000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 39.64257000,
        "longitude" : -106.91770000
    },
    {
        "latitude" : 33.48288000,
        "longitude" : -90.98561000
    },
    {
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 27.54374000,
        "longitude" : -99.46154000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.83456000,
        "longitude" : -88.86569000
    },
    {
        "latitude" : 37.62582000,
        "longitude" : -120.95442000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 34.09535000,
        "longitude" : -117.23487000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 25.03895800,
        "longitude" : -77.46623100
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.17795000,
        "longitude" : -96.59053000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 37.32669000,
        "longitude" : -79.20043000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 44.82724000,
        "longitude" : -93.45715000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 34.82916000,
        "longitude" : -77.61214000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.53730000,
        "longitude" : -93.74030000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.16122220,
        "longitude" : -97.08569440
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 26.90500000,
        "longitude" : -80.32400000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 33.95188000,
        "longitude" : -117.44510000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.64257000,
        "longitude" : -106.91770000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 26.24714000,
        "longitude" : -80.11106000
    },
    {
        "latitude" : 48.47080000,
        "longitude" : -122.42080000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 37.41614000,
        "longitude" : -122.04914000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 28.56650000,
        "longitude" : 77.10308800
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 38.56900000,
        "longitude" : -90.15370000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 34.08525000,
        "longitude" : -117.14638890
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 46.26468000,
        "longitude" : -119.11903000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 28.20140000,
        "longitude" : -177.38100000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 28.20140000,
        "longitude" : -177.38100000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 48.25938000,
        "longitude" : -101.28033000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.37230000,
        "longitude" : -94.10687000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 32.38486000,
        "longitude" : -94.71171000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 33.46083000,
        "longitude" : -111.72833000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.32669000,
        "longitude" : -79.20043000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.05581000,
        "longitude" : -80.94836000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 36.00898000,
        "longitude" : -86.52008000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 10.59328900,
        "longitude" : -85.54440800
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 25.90683000,
        "longitude" : -97.42586000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 25.64789000,
        "longitude" : -80.43278000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.67881000,
        "longitude" : -97.67938000
    },
    {
        "latitude" : 43.23380560,
        "longitude" : -75.40702780
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 33.97469000,
        "longitude" : -117.63661000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 40.08194000,
        "longitude" : -75.01059000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.47361110,
        "longitude" : -82.45546700
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 32.51087000,
        "longitude" : -92.03769000
    },
    {
        "latitude" : 34.65483330,
        "longitude" : -112.41922220
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 40.94789860,
        "longitude" : -87.18257940
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 47.26793000,
        "longitude" : -122.57810000
    },
    {
        "latitude" : 2.74557800,
        "longitude" : 101.70991700
    },
    {
        "latitude" : 47.46472200,
        "longitude" : 8.54916700
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 30.35824100,
        "longitude" : -85.79560340
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 25.03895800,
        "longitude" : -77.46623100
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 32.03652440,
        "longitude" : -102.10102780
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 39.45146000,
        "longitude" : -87.30756000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.62225000,
        "longitude" : -95.65653000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 25.03895800,
        "longitude" : -77.46623100
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 21.30735000,
        "longitude" : -158.07030000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 30.48325000,
        "longitude" : -86.52540000
    },
    {
        "latitude" : 43.50484000,
        "longitude" : -114.29659000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 5.29713900,
        "longitude" : 100.27686400
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 40.49355600,
        "longitude" : -3.56676400
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 44.52020000,
        "longitude" : -109.02380000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 45.54532000,
        "longitude" : -94.05834000
    },
    {
        "latitude" : 42.55146000,
        "longitude" : -94.19255000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 26.78503000,
        "longitude" : -80.69336000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 33.98880000,
        "longitude" : -98.49189000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 32.22436000,
        "longitude" : -80.69747000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 38.55390000,
        "longitude" : -121.29759000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 60.77978000,
        "longitude" : -161.83800000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.21319000,
        "longitude" : -122.28069000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 45.54532000,
        "longitude" : -94.05834000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 17.93566700,
        "longitude" : -76.78750000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 34.65483330,
        "longitude" : -112.41922220
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 32.03652440,
        "longitude" : -102.10102780
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.37849000,
        "longitude" : -80.10770000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 32.66242000,
        "longitude" : -97.09391000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 32.89783000,
        "longitude" : -79.78286000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 45.47056000,
        "longitude" : -73.74083000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 48.16075000,
        "longitude" : -122.15902000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.93573000,
        "longitude" : -121.78962000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 36.93573000,
        "longitude" : -121.78962000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.68832000,
        "longitude" : -112.08256000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 42.90836000,
        "longitude" : -106.46447000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 23.39243600,
        "longitude" : 113.29878600
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 44.25407000,
        "longitude" : -121.14996000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 32.51087000,
        "longitude" : -92.03769000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 19.75790000,
        "longitude" : -70.57003300
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 43.04103000,
        "longitude" : -88.23706000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.94262000,
        "longitude" : -91.19446000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 40.84928000,
        "longitude" : -77.84869000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 29.62225000,
        "longitude" : -95.65653000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 46.91631000,
        "longitude" : -114.09056000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 30.21869000,
        "longitude" : -81.87672000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 48.31140000,
        "longitude" : -114.25507000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 14.38250000,
        "longitude" : -87.62111100
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 46.91631000,
        "longitude" : -114.09056000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 18.49486110,
        "longitude" : -67.12944440
    },
    {
        "latitude" : 29.46570030,
        "longitude" : -81.20871810
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 21.30735000,
        "longitude" : -158.07030000
    },
    {
        "latitude" : 37.65927000,
        "longitude" : -122.12241000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 39.12241000,
        "longitude" : -108.52673000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 38.13864000,
        "longitude" : -78.45286000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 40.21919000,
        "longitude" : -111.72336000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 21.30735000,
        "longitude" : -158.07030000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.29707800,
        "longitude" : 2.07846400
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 46.79739000,
        "longitude" : -102.80195000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.52002220,
        "longitude" : -111.98161390
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 33.35725000,
        "longitude" : -84.57183000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 21.03652800,
        "longitude" : -86.87708300
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 37.70097000,
        "longitude" : -113.09885000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 25.48844310,
        "longitude" : -80.38366580
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 38.84760000,
        "longitude" : -94.73759000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.08525000,
        "longitude" : -117.14638890
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 35.38521000,
        "longitude" : -80.70971000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 42.30728000,
        "longitude" : -85.25148000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 46.91631000,
        "longitude" : -114.09056000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.41536110,
        "longitude" : -124.42491670
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 21.03652800,
        "longitude" : -86.87708300
    },
    {
        "latitude" : 21.30735000,
        "longitude" : -158.07030000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 38.56900000,
        "longitude" : -90.15370000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 33.88500000,
        "longitude" : -117.25945000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 37.37311110,
        "longitude" : -118.36361110
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 33.52726000,
        "longitude" : -112.29516000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 30.06186000,
        "longitude" : -95.55278000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 59.04466670,
        "longitude" : -158.50550000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 33.45371000,
        "longitude" : -93.99102000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 35.87748000,
        "longitude" : -86.37753000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 12.18885300,
        "longitude" : -68.95980300
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 47.48200000,
        "longitude" : -111.37069000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 42.30728000,
        "longitude" : -85.25148000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 43.04103000,
        "longitude" : -88.23706000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 44.52020000,
        "longitude" : -109.02380000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 29.62225000,
        "longitude" : -95.65653000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 29.46570030,
        "longitude" : -81.20871810
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 34.08525000,
        "longitude" : -117.14638890
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 46.79739000,
        "longitude" : -102.80195000
    },
    {
        "latitude" : 60.57200000,
        "longitude" : -151.24753000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.84349000,
        "longitude" : -85.89706000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.64257000,
        "longitude" : -106.91770000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 36.16122220,
        "longitude" : -97.08569440
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.37849000,
        "longitude" : -80.10770000
    },
    {
        "latitude" : 33.22063000,
        "longitude" : -87.61140000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.30728000,
        "longitude" : -85.25148000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.40296000,
        "longitude" : -90.70917000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 29.17261000,
        "longitude" : -82.22417000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 34.09535000,
        "longitude" : -117.23487000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 29.44110560,
        "longitude" : -90.26112080
    },
    {
        "latitude" : 33.17795000,
        "longitude" : -96.59053000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 36.13372000,
        "longitude" : -80.22200000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 20.52180000,
        "longitude" : -103.31116700
    },
    {
        "latitude" : 40.96747000,
        "longitude" : -98.30861000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 5.45283100,
        "longitude" : -55.18778300
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 66.88468000,
        "longitude" : -162.59855000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 34.82916000,
        "longitude" : -77.61214000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.78250000,
        "longitude" : -83.27672000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 27.54374000,
        "longitude" : -99.46154000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 46.74386000,
        "longitude" : -117.10958000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 32.30064000,
        "longitude" : -86.39398000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.52136000,
        "longitude" : -76.76275000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 34.09165000,
        "longitude" : -117.78178000
    },
    {
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 38.55390000,
        "longitude" : -121.29759000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.68832000,
        "longitude" : -112.08256000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.39100000,
        "longitude" : -83.63013890
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 34.08525000,
        "longitude" : -117.14638890
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 34.09535000,
        "longitude" : -117.23487000
    },
    {
        "latitude" : 28.85256000,
        "longitude" : -96.91849000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 43.04103000,
        "longitude" : -88.23706000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 37.89427000,
        "longitude" : -121.23862000
    },
    {
        "latitude" : 40.72878000,
        "longitude" : -73.41341000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 33.94860000,
        "longitude" : -83.32635000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 33.03915000,
        "longitude" : -116.91525000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.00851000,
        "longitude" : -74.90827000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 34.65483330,
        "longitude" : -112.41922220
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 32.30064000,
        "longitude" : -86.39398000
    },
    {
        "latitude" : 39.14602000,
        "longitude" : -86.61668000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 42.42216000,
        "longitude" : -87.86791000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 33.92284000,
        "longitude" : -118.33519000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 32.30064000,
        "longitude" : -86.39398000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 36.18236000,
        "longitude" : -86.88672000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 32.57231000,
        "longitude" : -116.98025000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 46.77411000,
        "longitude" : -100.74672000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.26192000,
        "longitude" : -85.89635000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 45.14500000,
        "longitude" : -93.21139000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 39.64291000,
        "longitude" : -79.91631000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 10.81879700,
        "longitude" : 106.65185600
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.05863890,
        "longitude" : -118.15055560
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 37.04421000,
        "longitude" : -100.95986000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 15.45263900,
        "longitude" : -87.92355600
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 20.52180000,
        "longitude" : -103.31116700
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.14602000,
        "longitude" : -86.61668000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 37.38048000,
        "longitude" : -120.56819000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 48.25938000,
        "longitude" : -101.28033000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 46.39786000,
        "longitude" : -94.13723000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 46.37450000,
        "longitude" : -117.01539000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.00851000,
        "longitude" : -74.90827000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.04103000,
        "longitude" : -88.23706000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 46.79739000,
        "longitude" : -102.80195000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.90953000,
        "longitude" : -123.00250000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 41.62661000,
        "longitude" : -73.88411000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.26192000,
        "longitude" : -85.89635000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 44.62785000,
        "longitude" : -93.22811000
    },
    {
        "latitude" : 38.55390000,
        "longitude" : -121.29759000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.31611000,
        "longitude" : -78.83394000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 31.25903000,
        "longitude" : -81.46631000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 43.10726000,
        "longitude" : -78.94538000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 39.78419440,
        "longitude" : -104.53763890
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 35.38521000,
        "longitude" : -80.70971000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 13.44094700,
        "longitude" : -89.05572800
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 41.18805560,
        "longitude" : -103.67738890
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 21.30735000,
        "longitude" : -158.07030000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.48180000,
        "longitude" : -114.48774000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 46.56817000,
        "longitude" : -120.54406000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 32.22436000,
        "longitude" : -80.69747000
    },
    {
        "latitude" : 22.63925800,
        "longitude" : 113.81066400
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.22316000,
        "longitude" : -106.86885000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 29.72754890,
        "longitude" : -85.02737740
    },
    {
        "latitude" : 30.52670000,
        "longitude" : -98.35830000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 39.77194000,
        "longitude" : -94.90971000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.22316000,
        "longitude" : -106.86885000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 58.67680000,
        "longitude" : -156.64922000
    },
    {
        "latitude" : 32.01138900,
        "longitude" : 34.88666700
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 46.39786000,
        "longitude" : -94.13723000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 36.00898000,
        "longitude" : -86.52008000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 38.56900000,
        "longitude" : -90.15370000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 40.31611000,
        "longitude" : -78.83394000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 32.69285000,
        "longitude" : -83.64921000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.70450000,
        "longitude" : -98.04222000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 41.62661000,
        "longitude" : -73.88411000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.82724000,
        "longitude" : -93.45715000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 41.26074000,
        "longitude" : -80.67910000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 40.03065000,
        "longitude" : -86.25144000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.06784000,
        "longitude" : -96.06533000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 45.54532000,
        "longitude" : -94.05834000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 28.56650000,
        "longitude" : 77.10308800
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.90688000,
        "longitude" : -88.24842000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 35.53455000,
        "longitude" : -97.64722000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 28.56650000,
        "longitude" : 77.10308800
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 47.26793000,
        "longitude" : -122.57810000
    },
    {
        "latitude" : 34.97875000,
        "longitude" : -89.78683000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 17.31119400,
        "longitude" : -62.71866700
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 30.48325000,
        "longitude" : -86.52540000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 60.57200000,
        "longitude" : -151.24753000
    },
    {
        "latitude" : 38.84760000,
        "longitude" : -94.73759000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.84928000,
        "longitude" : -77.84869000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 46.23806400,
        "longitude" : 6.10895000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 30.48325000,
        "longitude" : -86.52540000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
    },
    {
        "latitude" : 40.31611000,
        "longitude" : -78.83394000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
    },
    {
        "latitude" : 39.34510000,
        "longitude" : -81.43920000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 42.61958000,
        "longitude" : -89.04034000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 41.12621000,
        "longitude" : -100.68365000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.24455000,
        "longitude" : -93.80258000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 34.18536000,
        "longitude" : -79.72389000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 44.44969000,
        "longitude" : -68.36150000
    },
    {
        "latitude" : 31.32737000,
        "longitude" : -92.54856000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 38.52547220,
        "longitude" : -77.85638900
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 41.65850000,
        "longitude" : -70.52150000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.94262000,
        "longitude" : -91.19446000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 37.32669000,
        "longitude" : -79.20043000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 37.32669000,
        "longitude" : -79.20043000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 41.12621000,
        "longitude" : -100.68365000
    },
    {
        "latitude" : 40.03065000,
        "longitude" : -86.25144000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 32.69285000,
        "longitude" : -83.64921000
    },
    {
        "latitude" : 36.13372000,
        "longitude" : -80.22200000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 37.15152000,
        "longitude" : -107.75377000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 31.53552000,
        "longitude" : -84.19447000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 42.19826000,
        "longitude" : -72.53426000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 37.76344000,
        "longitude" : -99.96561000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 44.93447000,
        "longitude" : -93.06000000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 42.91131000,
        "longitude" : -112.59586000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.82142000,
        "longitude" : -82.51664000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 21.77362500,
        "longitude" : -72.26588600
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 44.86526000,
        "longitude" : -91.48507000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 35.87748000,
        "longitude" : -86.37753000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 32.69285000,
        "longitude" : -83.64921000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.42744440,
        "longitude" : -101.04661110
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 44.25407000,
        "longitude" : -121.14996000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.33287000,
        "longitude" : -121.81979000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 42.40296000,
        "longitude" : -90.70917000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.82724000,
        "longitude" : -93.45715000
    },
    {
        "latitude" : 40.61954000,
        "longitude" : -111.99289000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.12621000,
        "longitude" : -100.68365000
    },
    {
        "latitude" : 40.82142000,
        "longitude" : -82.51664000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 46.77411000,
        "longitude" : -100.74672000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 32.22436000,
        "longitude" : -80.69747000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 25.56833000,
        "longitude" : -103.41067000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 43.50484000,
        "longitude" : -114.29659000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 44.82724000,
        "longitude" : -93.45715000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 31.61129000,
        "longitude" : -97.23052000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 46.35361000,
        "longitude" : -87.39583000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.74532000,
        "longitude" : -87.61023000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 44.82724000,
        "longitude" : -93.45715000
    },
    {
        "latitude" : 38.13864000,
        "longitude" : -78.45286000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 37.22532000,
        "longitude" : -89.57075000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 33.97808000,
        "longitude" : -83.96238000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 33.17795000,
        "longitude" : -96.59053000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.93447000,
        "longitude" : -93.06000000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 48.31140000,
        "longitude" : -114.25507000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 15.45263900,
        "longitude" : -87.92355600
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 36.58698000,
        "longitude" : -121.84295000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 28.28981000,
        "longitude" : -81.43708000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 48.31140000,
        "longitude" : -114.25507000
    },
    {
        "latitude" : 50.02642100,
        "longitude" : 8.54312500
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 15.18583300,
        "longitude" : 120.56027800
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 44.82724000,
        "longitude" : -93.45715000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
    },
    {
        "latitude" : 48.25938000,
        "longitude" : -101.28033000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 32.69285000,
        "longitude" : -83.64921000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.95235000,
        "longitude" : -112.14696000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 35.74114640,
        "longitude" : -81.38954890
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 37.15152000,
        "longitude" : -107.75377000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 35.95235000,
        "longitude" : -112.14696000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.95095000,
        "longitude" : -95.66361000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 37.15152000,
        "longitude" : -107.75377000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.48325000,
        "longitude" : -86.52540000
    },
    {
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 34.65483330,
        "longitude" : -112.41922220
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.90953000,
        "longitude" : -123.00250000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 42.59571000,
        "longitude" : -87.92780000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.45146000,
        "longitude" : -87.30756000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.95095000,
        "longitude" : -95.66361000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 34.82916000,
        "longitude" : -77.61214000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 40.96747000,
        "longitude" : -98.30861000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 38.56900000,
        "longitude" : -90.15370000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 44.92615640,
        "longitude" : -89.62663500
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 48.25938000,
        "longitude" : -101.28033000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 40.27594000,
        "longitude" : -79.40480000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 41.58681000,
        "longitude" : -83.80783000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 33.20072000,
        "longitude" : -97.19798000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 49.01277900,
        "longitude" : 2.55000000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 43.99192000,
        "longitude" : -76.02174000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.26057000,
        "longitude" : -76.17460000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 45.54039000,
        "longitude" : -122.94983000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 46.79739000,
        "longitude" : -102.80195000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 45.54039000,
        "longitude" : -122.94983000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 32.98764000,
        "longitude" : -97.31881000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 28.56650000,
        "longitude" : 77.10308800
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.17795000,
        "longitude" : -96.59053000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 41.39303000,
        "longitude" : -70.61433000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 33.18483690,
        "longitude" : -80.03697640
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 45.24740970,
        "longitude" : -92.99285420
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 10.81879700,
        "longitude" : 106.65185600
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 31.06725000,
        "longitude" : -97.82891670
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 42.30728000,
        "longitude" : -85.25148000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 37.22532000,
        "longitude" : -89.57075000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 38.81809000,
        "longitude" : -92.21963000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 66.88468000,
        "longitude" : -162.59855000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.77194000,
        "longitude" : -94.90971000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 36.03963000,
        "longitude" : -95.98464000
    },
    {
        "latitude" : 70.19476000,
        "longitude" : -148.46516000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 46.79739000,
        "longitude" : -102.80195000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 31.53552000,
        "longitude" : -84.19447000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 44.93447000,
        "longitude" : -93.06000000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.68869440,
        "longitude" : -86.00594440
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 42.86200000,
        "longitude" : -78.71659000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 66.88468000,
        "longitude" : -162.59855000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 45.77690000,
        "longitude" : -111.15301000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 35.13845000,
        "longitude" : -111.67122000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 32.14308000,
        "longitude" : -111.17286000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 33.68832000,
        "longitude" : -112.08256000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 32.33477000,
        "longitude" : -90.22253000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 34.18536000,
        "longitude" : -79.72389000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.61227000,
        "longitude" : -112.35077000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 26.37849000,
        "longitude" : -80.10770000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 43.50484000,
        "longitude" : -114.29659000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.78176000,
        "longitude" : -71.51478000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : -26.13330000,
        "longitude" : 28.25000000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 45.54039000,
        "longitude" : -122.94983000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 44.65094440,
        "longitude" : -73.46813890
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 38.54517900,
        "longitude" : -89.83518400
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 43.11093000,
        "longitude" : -88.03442000
    },
    {
        "latitude" : 40.84928000,
        "longitude" : -77.84869000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 42.55146000,
        "longitude" : -94.19255000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 46.77411000,
        "longitude" : -100.74672000
    },
    {
        "latitude" : 39.84028000,
        "longitude" : -83.84015000
    },
    {
        "latitude" : 32.81978000,
        "longitude" : -97.36244000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 27.98892000,
        "longitude" : -82.01856000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 66.88468000,
        "longitude" : -162.59855000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 39.29664000,
        "longitude" : -80.22808000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 32.01002030,
        "longitude" : -81.14598780
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 37.93730000,
        "longitude" : -75.45980000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 48.35378300,
        "longitude" : 11.78608600
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 30.62647000,
        "longitude" : -88.06800000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 20.52240300,
        "longitude" : -86.92564400
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 43.23380560,
        "longitude" : -75.40702780
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 37.32669000,
        "longitude" : -79.20043000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 39.64257000,
        "longitude" : -106.91770000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 30.48325000,
        "longitude" : -86.52540000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 43.04103000,
        "longitude" : -88.23706000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 30.35824100,
        "longitude" : -85.79560340
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.03065000,
        "longitude" : -86.25144000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.66242000,
        "longitude" : -97.09391000
    },
    {
        "latitude" : 30.67881000,
        "longitude" : -97.67938000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.03065000,
        "longitude" : -86.25144000
    },
    {
        "latitude" : 42.15614000,
        "longitude" : -121.73321000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 33.30783000,
        "longitude" : -111.65547000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 47.32816000,
        "longitude" : -122.22651000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 58.42438000,
        "longitude" : -135.70738000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 30.78250000,
        "longitude" : -83.27672000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.78250000,
        "longitude" : -83.27672000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 28.28981000,
        "longitude" : -81.43708000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 33.90932000,
        "longitude" : -78.43468560
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 30.33633000,
        "longitude" : -81.51444000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.97812000,
        "longitude" : -124.10862000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.81376000,
        "longitude" : -82.92786000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 45.54039000,
        "longitude" : -122.94983000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 36.28187000,
        "longitude" : -94.30681000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 46.91631000,
        "longitude" : -114.09056000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.26192000,
        "longitude" : -85.89635000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 39.01115000,
        "longitude" : -95.21658000
    },
    {
        "latitude" : 42.48180000,
        "longitude" : -114.48774000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.19594000,
        "longitude" : -112.01218000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 38.13864000,
        "longitude" : -78.45286000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 43.11093000,
        "longitude" : -88.03442000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.22063000,
        "longitude" : -87.61140000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 32.38486000,
        "longitude" : -94.71171000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 12.00242470,
        "longitude" : -61.78619200
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 43.07796000,
        "longitude" : -70.82327000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 36.03963000,
        "longitude" : -95.98464000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 40.45183000,
        "longitude" : -105.01134000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.92019000,
        "longitude" : -81.99053000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 35.23706000,
        "longitude" : -120.64239000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 48.26086390,
        "longitude" : -103.75113890
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
    }
]


function loopMap() {
    for (let i = 0; i < data.length; i++) {
        L.circle([data[i].latitude, data[i].longitude], {radius: 200}).addTo(map);
    }
}

loopMap()

