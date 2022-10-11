var map = L.map('map').setView([37.85454554240838, -97.5056217858466], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const data = [
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
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
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
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
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
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
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.45146000,
        "longitude" : -87.30756000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
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
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.24235000,
        "longitude" : -85.39586000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 40.12172000,
        "longitude" : -76.29610000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.52716000,
        "longitude" : -85.79210000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
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
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
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
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 42.91131000,
        "longitude" : -112.59586000
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
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
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
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
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
        "latitude" : 47.21110000,
        "longitude" : -93.50984000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
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
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 25.64789000,
        "longitude" : -80.43278000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
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
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
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
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
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
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.13647000,
        "longitude" : -75.26703000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 37.78733000,
        "longitude" : -81.12416000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 42.37423000,
        "longitude" : -122.87350000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 53.90014000,
        "longitude" : -166.54350000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
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
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
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
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 41.28759000,
        "longitude" : -74.28709000
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
        "latitude" : 39.09777000,
        "longitude" : -121.56983000
    },
    {
        "latitude" : 30.12610000,
        "longitude" : -93.22340000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
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
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 35.33659000,
        "longitude" : -94.36744000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 34.44954000,
        "longitude" : -87.71031000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 38.13864000,
        "longitude" : -78.45286000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 24.72614000,
        "longitude" : -81.05138000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 44.44969000,
        "longitude" : -68.36150000
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
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
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
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
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
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 42.40296000,
        "longitude" : -90.70917000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 38.84330000,
        "longitude" : -94.56060000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 36.18236000,
        "longitude" : -86.88672000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
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
        "latitude" : 39.85841000,
        "longitude" : -104.66700000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 41.85884000,
        "longitude" : -87.60791000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.62653000,
        "longitude" : -80.21473000
    },
    {
        "latitude" : 40.72878000,
        "longitude" : -73.41341000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
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
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 51.11389000,
        "longitude" : -114.02028000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
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
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 35.32808000,
        "longitude" : -77.61553000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 40.97812000,
        "longitude" : -124.10862000
    },
    {
        "latitude" : 36.41008000,
        "longitude" : -83.55546000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
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
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
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
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 61.50000000,
        "longitude" : -149.97193000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 43.39386000,
        "longitude" : -70.70800000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
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
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 27.76511000,
        "longitude" : -82.62697000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
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
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 30.06186000,
        "longitude" : -95.55278000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
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
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
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
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
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
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 41.73627000,
        "longitude" : -72.65021000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 33.77914000,
        "longitude" : -84.52136000
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
        "latitude" : 43.14512000,
        "longitude" : -75.38386000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
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
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
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
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 41.62661000,
        "longitude" : -73.88411000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.62842000,
        "longitude" : -86.08789000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
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
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
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
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 46.56817000,
        "longitude" : -120.54406000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
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
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 33.12822000,
        "longitude" : -117.28022000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
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
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
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
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 30.83153000,
        "longitude" : -93.33964000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 43.10726000,
        "longitude" : -78.94538000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
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
        "latitude" : 37.10450000,
        "longitude" : -79.58870000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 34.20080000,
        "longitude" : -119.20722000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
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
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
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
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
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
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 45.62045000,
        "longitude" : -122.65649000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
    },
    {
        "latitude" : 45.44906000,
        "longitude" : -98.42183000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 20.52180000,
        "longitude" : -103.31116700
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
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
        "latitude" : 39.45146000,
        "longitude" : -87.30756000
    },
    {
        "latitude" : 38.83411000,
        "longitude" : -82.16342000
    },
    {
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
    },
    {
        "latitude" : 41.58681000,
        "longitude" : -83.80783000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
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
        "latitude" : 55.35557000,
        "longitude" : -131.71374000
    },
    {
        "latitude" : 33.22063000,
        "longitude" : -87.61140000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
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
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 34.99147000,
        "longitude" : -78.88000000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
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
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.70794000,
        "longitude" : -77.72950000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 58.67680000,
        "longitude" : -156.64922000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 45.32250000,
        "longitude" : -75.66917000
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
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 39.09777000,
        "longitude" : -121.56983000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 37.98966000,
        "longitude" : -122.05690000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 41.15572000,
        "longitude" : -104.81184000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 36.58698000,
        "longitude" : -121.84295000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 43.62637000,
        "longitude" : -72.30427000
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
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 41.77193000,
        "longitude" : -88.47566000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
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
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
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
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 31.53552000,
        "longitude" : -84.19447000
    },
    {
        "latitude" : 26.00142000,
        "longitude" : -80.24052000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 33.45371000,
        "longitude" : -93.99102000
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
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
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
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 43.77117000,
        "longitude" : -88.48843000
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
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 42.42216000,
        "longitude" : -87.86791000
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
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
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
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
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
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
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
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 44.22165000,
        "longitude" : -93.91874000
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
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
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
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
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
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 42.22298000,
        "longitude" : -83.74561000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
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
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
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
        "latitude" : 31.61129000,
        "longitude" : -97.23052000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
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
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 43.16553000,
        "longitude" : -95.20281000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
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
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 35.04022000,
        "longitude" : -106.60919000
    },
    {
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 38.13864000,
        "longitude" : -78.45286000
    },
    {
        "latitude" : 42.54260000,
        "longitude" : -113.77154000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
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
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
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
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 13.73319400,
        "longitude" : -60.95259700
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
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
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
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
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
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
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 47.48200000,
        "longitude" : -111.37069000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 34.18536000,
        "longitude" : -79.72389000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
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
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
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
        "latitude" : 46.26468000,
        "longitude" : -119.11903000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 38.22800000,
        "longitude" : -85.66372000
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
        "latitude" : 40.45183000,
        "longitude" : -105.01134000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 58.35496000,
        "longitude" : -134.57628000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
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
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
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
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 36.28489000,
        "longitude" : -78.98423000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.85884000,
        "longitude" : -87.60791000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 35.33659000,
        "longitude" : -94.36744000
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
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
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
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
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
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.51087000,
        "longitude" : -92.03769000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
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
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 46.39786000,
        "longitude" : -94.13723000
    },
    {
        "latitude" : 56.48433000,
        "longitude" : -132.36982000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 38.89388000,
        "longitude" : -119.99533000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
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
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 66.88468000,
        "longitude" : -162.59855000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 29.56650000,
        "longitude" : -90.66042000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 37.06083000,
        "longitude" : -88.77375000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 29.56650000,
        "longitude" : -90.66042000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 41.90688000,
        "longitude" : -88.24842000
    },
    {
        "latitude" : 32.33313000,
        "longitude" : -88.75121000
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
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 36.26057000,
        "longitude" : -76.17460000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 30.33633000,
        "longitude" : -81.51444000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 40.91631000,
        "longitude" : -81.44247000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
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
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
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
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
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
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
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
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
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
        "latitude" : 40.37850000,
        "longitude" : -75.96525000
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
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 43.10726000,
        "longitude" : -78.94538000
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
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
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
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 29.95083000,
        "longitude" : -94.02069000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
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
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 20.78561000,
        "longitude" : -156.95142000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.58681000,
        "longitude" : -83.80783000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
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
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.20680000,
        "longitude" : -88.32304000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 36.13372000,
        "longitude" : -80.22200000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 43.10726000,
        "longitude" : -78.94538000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 43.62637000,
        "longitude" : -72.30427000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 41.19594000,
        "longitude" : -112.01218000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
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
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
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
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 48.25938000,
        "longitude" : -101.28033000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
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
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
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
        "latitude" : 42.19080000,
        "longitude" : -71.17310000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
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
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
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
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 47.48200000,
        "longitude" : -111.37069000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
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
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 31.35775000,
        "longitude" : -100.49631000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.85884000,
        "longitude" : -87.60791000
    },
    {
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
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
        "latitude" : 61.20000000,
        "longitude" : -149.30000000
    },
    {
        "latitude" : 47.48200000,
        "longitude" : -111.37069000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 45.54039000,
        "longitude" : -122.94983000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 44.93447000,
        "longitude" : -93.06000000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
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
        "latitude" : 40.72878000,
        "longitude" : -73.41341000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 35.23706000,
        "longitude" : -120.64239000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
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
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
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
        "latitude" : 42.19536000,
        "longitude" : -89.09721000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
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
        "latitude" : 39.70794000,
        "longitude" : -77.72950000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 41.15186000,
        "longitude" : -81.41658000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 39.70794000,
        "longitude" : -77.72950000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
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
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 34.09165000,
        "longitude" : -117.78178000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 31.32134000,
        "longitude" : -85.44963000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 38.22800000,
        "longitude" : -85.66372000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.90688000,
        "longitude" : -88.24842000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
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
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.10660000,
        "longitude" : -92.44794000
    },
    {
        "latitude" : 41.77193000,
        "longitude" : -88.47566000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 34.99147000,
        "longitude" : -78.88000000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 32.99310000,
        "longitude" : -115.51693000
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
        "latitude" : 40.72878000,
        "longitude" : -73.41341000
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
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
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
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 64.51220000,
        "longitude" : -165.44525000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
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
        "latitude" : 58.35496000,
        "longitude" : -134.57628000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 44.44969000,
        "longitude" : -68.36150000
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
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 37.33287000,
        "longitude" : -121.81979000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.33287000,
        "longitude" : -121.81979000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 36.71005000,
        "longitude" : -78.84802000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
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
        "latitude" : 35.33659000,
        "longitude" : -94.36744000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 61.50000000,
        "longitude" : -149.97193000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
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
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 44.90953000,
        "longitude" : -123.00250000
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
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 43.11093000,
        "longitude" : -88.03442000
    },
    {
        "latitude" : 46.84209000,
        "longitude" : -92.19365000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 41.26074000,
        "longitude" : -80.67910000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 40.97812000,
        "longitude" : -124.10862000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 43.10726000,
        "longitude" : -78.94538000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 40.37850000,
        "longitude" : -75.96525000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 38.22800000,
        "longitude" : -85.66372000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 36.37230000,
        "longitude" : -94.10687000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 39.67872000,
        "longitude" : -75.60653000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
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
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
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
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
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
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 38.89388000,
        "longitude" : -119.99533000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
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
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
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
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 45.92793000,
        "longitude" : -89.73094000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
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
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
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
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
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
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
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
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.35414000,
        "longitude" : -95.40239000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 40.17500000,
        "longitude" : -80.64628000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
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
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 47.84169000,
        "longitude" : -96.62162000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 27.39533000,
        "longitude" : -82.55411000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 46.00931000,
        "longitude" : -83.74393000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
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
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 45.47056000,
        "longitude" : -73.74083000
    },
    {
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 38.22800000,
        "longitude" : -85.66372000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.58417000,
        "longitude" : -70.91652000
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
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
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
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 38.89388000,
        "longitude" : -119.99533000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
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
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 29.95925000,
        "longitude" : -81.33975000
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
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 27.76511000,
        "longitude" : -82.62697000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
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
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.90688000,
        "longitude" : -88.24842000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
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
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
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
        "latitude" : 45.55580000,
        "longitude" : -123.01830000
    },
    {
        "latitude" : 39.12324000,
        "longitude" : -94.59274000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
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
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 45.32250000,
        "longitude" : -75.66917000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 41.24184000,
        "longitude" : -76.92110000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
    },
    {
        "latitude" : 36.66279000,
        "longitude" : -121.60636000
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
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 32.81978000,
        "longitude" : -97.36244000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
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
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 45.54039000,
        "longitude" : -122.94983000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 42.40296000,
        "longitude" : -90.70917000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 42.71721000,
        "longitude" : -71.12343000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
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
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
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
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
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
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 34.74532000,
        "longitude" : -87.61023000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
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
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.17827000,
        "longitude" : -78.89870000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 53.90014000,
        "longitude" : -166.54350000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 29.95083000,
        "longitude" : -94.02069000
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
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 43.66499000,
        "longitude" : -92.93339000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 43.56444000,
        "longitude" : -116.22278000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
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
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 42.71721000,
        "longitude" : -71.12343000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 39.70794000,
        "longitude" : -77.72950000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
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
        "latitude" : 33.77914000,
        "longitude" : -84.52136000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.51087000,
        "longitude" : -92.03769000
    },
    {
        "latitude" : 40.07978000,
        "longitude" : -83.07303000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.73627000,
        "longitude" : -72.65021000
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
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 34.20981000,
        "longitude" : -118.48997000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 35.43619000,
        "longitude" : -82.54181000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
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
        "latitude" : 38.21319000,
        "longitude" : -122.28069000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
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
        "latitude" : -34.82222200,
        "longitude" : -58.53583300
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 42.19080000,
        "longitude" : -71.17310000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 18.42966400,
        "longitude" : -69.66892500
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 26.00142000,
        "longitude" : -80.24052000
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
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 42.19080000,
        "longitude" : -71.17310000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 40.91631000,
        "longitude" : -81.44247000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 38.22800000,
        "longitude" : -85.66372000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
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
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
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
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 25.90700000,
        "longitude" : -80.27839000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
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
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
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
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 36.31867000,
        "longitude" : -119.39289000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 16.72500000,
        "longitude" : -169.53450000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
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
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 36.28489000,
        "longitude" : -78.98423000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 31.53552000,
        "longitude" : -84.19447000
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
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 29.95925000,
        "longitude" : -81.33975000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
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
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
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
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.03776000,
        "longitude" : -91.88390000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 59.50336000,
        "longitude" : -139.66023000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
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
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
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
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 29.95083000,
        "longitude" : -94.02069000
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
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
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
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
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
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.85884000,
        "longitude" : -87.60791000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 35.85499000,
        "longitude" : -77.89296000
    },
    {
        "latitude" : 45.54039000,
        "longitude" : -122.94983000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 44.04532000,
        "longitude" : -103.05737000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
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
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
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
        "latitude" : 47.48200000,
        "longitude" : -111.37069000
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
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 34.26811000,
        "longitude" : -88.76990000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 33.98880000,
        "longitude" : -98.49189000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
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
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.51252000,
        "longitude" : -121.49347000
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
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
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
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
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
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 43.72263000,
        "longitude" : -85.50407000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 35.32808000,
        "longitude" : -77.61553000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 41.24184000,
        "longitude" : -76.92110000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
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
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 33.81772000,
        "longitude" : -118.15161000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
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
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 39.25750000,
        "longitude" : -76.42630000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 19.43630300,
        "longitude" : -99.07209700
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 41.59715000,
        "longitude" : -71.41215000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 34.18536000,
        "longitude" : -79.72389000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
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
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
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
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 32.30064000,
        "longitude" : -86.39398000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
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
        "latitude" : 25.90683000,
        "longitude" : -97.42586000
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
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
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
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
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
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
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
        "latitude" : 40.91631000,
        "longitude" : -81.44247000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
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
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 32.48317000,
        "longitude" : -81.73728000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
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
        "latitude" : 28.77764000,
        "longitude" : -81.23749000
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
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
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
        "latitude" : 44.93583000,
        "longitude" : -74.84555000
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
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
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
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
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
        "latitude" : 18.00830000,
        "longitude" : -66.56301000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 38.56900000,
        "longitude" : -90.15370000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
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
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.79526000,
        "longitude" : -89.61340000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
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
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
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
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
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
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
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
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 45.30859000,
        "longitude" : -92.69008000
    },
    {
        "latitude" : 44.22165000,
        "longitude" : -93.91874000
    },
    {
        "latitude" : 38.95095000,
        "longitude" : -95.66361000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 32.30064000,
        "longitude" : -86.39398000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 33.22697000,
        "longitude" : -84.27494000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
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
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
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
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.72878000,
        "longitude" : -73.41341000
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
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
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
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.87522000,
        "longitude" : -74.28136000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
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
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
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
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 33.67975000,
        "longitude" : -78.92833000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
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
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 41.90688000,
        "longitude" : -88.24842000
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
        "latitude" : 32.57231000,
        "longitude" : -116.98025000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 20.52240300,
        "longitude" : -86.92564400
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
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
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 32.38486000,
        "longitude" : -94.71171000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 41.78016000,
        "longitude" : -124.23653000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
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
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 45.80766000,
        "longitude" : -108.54286000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 37.78733000,
        "longitude" : -81.12416000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 31.08583000,
        "longitude" : -97.68650000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
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
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
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
        "latitude" : 30.28952000,
        "longitude" : -87.67371000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
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
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
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
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 41.85884000,
        "longitude" : -87.60791000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
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
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 43.62637000,
        "longitude" : -72.30427000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
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
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
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
        "latitude" : 48.06550000,
        "longitude" : -96.18336000
    },
    {
        "latitude" : 42.46995000,
        "longitude" : -71.28903000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 45.86493000,
        "longitude" : -84.63734000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
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
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 61.50000000,
        "longitude" : -149.97193000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
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
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 39.45146000,
        "longitude" : -87.30756000
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
        "latitude" : 19.75790000,
        "longitude" : -70.57003300
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 43.16949000,
        "longitude" : -86.23822000
    },
    {
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 41.47856000,
        "longitude" : -73.13525000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 37.00950000,
        "longitude" : -88.29587000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
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
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 37.69340000,
        "longitude" : -121.82035000
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
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 40.37850000,
        "longitude" : -75.96525000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 44.77762000,
        "longitude" : -89.66678000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 38.51252000,
        "longitude" : -121.49347000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
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
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 32.82214000,
        "longitude" : -83.56203000
    },
    {
        "latitude" : 40.87522000,
        "longitude" : -74.28136000
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
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
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
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
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
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
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
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 31.17845000,
        "longitude" : -90.47188000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 40.97847000,
        "longitude" : -85.19515000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : -2.15741900,
        "longitude" : -79.88355800
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
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
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
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 42.22298000,
        "longitude" : -83.74561000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 32.41132000,
        "longitude" : -99.68190000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 27.76511000,
        "longitude" : -82.62697000
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
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 27.49506000,
        "longitude" : -80.36828000
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
        "latitude" : 40.80339000,
        "longitude" : -124.11279000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 55.31503000,
        "longitude" : -160.51769000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
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
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 30.40728000,
        "longitude" : -89.07009000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 40.87522000,
        "longitude" : -74.28136000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 42.71721000,
        "longitude" : -71.12343000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 42.40919000,
        "longitude" : -83.00986000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
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
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : -33.94611100,
        "longitude" : 151.17722200
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 18.50371700,
        "longitude" : -77.91335800
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
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 39.07335000,
        "longitude" : -93.67716000
    },
    {
        "latitude" : 34.35060000,
        "longitude" : -85.15801000
    },
    {
        "latitude" : 36.58698000,
        "longitude" : -121.84295000
    },
    {
        "latitude" : 37.93730000,
        "longitude" : -75.45980000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 42.71721000,
        "longitude" : -71.12343000
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
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
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
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
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
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
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
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
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
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 55.34320000,
        "longitude" : -131.67270000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 45.14500000,
        "longitude" : -93.21139000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 38.51252000,
        "longitude" : -121.49347000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
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
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
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
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 40.37850000,
        "longitude" : -75.96525000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
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
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
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
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
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
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
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
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 27.76511000,
        "longitude" : -82.62697000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
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
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
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
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 39.70794000,
        "longitude" : -77.72950000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
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
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 27.76511000,
        "longitude" : -82.62697000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 36.31867000,
        "longitude" : -119.39289000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
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
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 60.77978000,
        "longitude" : -161.83800000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
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
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
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
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 30.12610000,
        "longitude" : -93.22340000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 51.11389000,
        "longitude" : -114.02028000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 8.91479400,
        "longitude" : -79.59963300
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
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
        "latitude" : 36.22284000,
        "longitude" : -81.09834000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
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
        "latitude" : 40.12172000,
        "longitude" : -76.29610000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 26.00142000,
        "longitude" : -80.24052000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 38.79148000,
        "longitude" : -97.65060000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : -34.82222200,
        "longitude" : -58.53583300
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 31.53552000,
        "longitude" : -84.19447000
    },
    {
        "latitude" : 32.41132000,
        "longitude" : -99.68190000
    },
    {
        "latitude" : 57.74997000,
        "longitude" : -152.49386000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 47.32816000,
        "longitude" : -122.22651000
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
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.85831000,
        "longitude" : -80.39947000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 47.68282000,
        "longitude" : -117.32256000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
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
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 38.50898000,
        "longitude" : -122.81288000
    },
    {
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 40.08194000,
        "longitude" : -75.01059000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 39.26347000,
        "longitude" : -74.60747000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.87522000,
        "longitude" : -74.28136000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
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
        "latitude" : 39.79538000,
        "longitude" : -121.85842000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 41.27470000,
        "longitude" : -85.84006000
    },
    {
        "latitude" : 43.10726000,
        "longitude" : -78.94538000
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
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
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
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
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
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
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
        "latitude" : 38.95095000,
        "longitude" : -95.66361000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 40.03925000,
        "longitude" : -88.27806000
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
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.62661000,
        "longitude" : -73.88411000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 32.33313000,
        "longitude" : -88.75121000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
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
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 46.84209000,
        "longitude" : -92.19365000
    },
    {
        "latitude" : 45.47056000,
        "longitude" : -73.74083000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
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
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 42.61958000,
        "longitude" : -89.04034000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 58.35496000,
        "longitude" : -134.57628000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 43.13986000,
        "longitude" : -89.33751000
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
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.98966000,
        "longitude" : -122.05690000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 32.73356000,
        "longitude" : -117.18966000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
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
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
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
        "latitude" : 19.73877000,
        "longitude" : -156.04563000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 33.97469000,
        "longitude" : -117.63661000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.91631000,
        "longitude" : -81.44247000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
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
        "latitude" : 32.89865000,
        "longitude" : -80.04051000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 41.39303000,
        "longitude" : -70.61433000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
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
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
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
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
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
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 46.26468000,
        "longitude" : -119.11903000
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
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 34.90320000,
        "longitude" : -117.88350000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
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
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 20.68008300,
        "longitude" : -105.25416700
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
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
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 43.66499000,
        "longitude" : -92.93339000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 38.45420000,
        "longitude" : -82.30820000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 35.23706000,
        "longitude" : -120.64239000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 34.20080000,
        "longitude" : -119.20722000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 40.79935000,
        "longitude" : -74.41487000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 40.12172000,
        "longitude" : -76.29610000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
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
        "latitude" : 33.45371000,
        "longitude" : -93.99102000
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
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.40919000,
        "longitude" : -83.00986000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 46.91935000,
        "longitude" : -96.81499000
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
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 35.21937000,
        "longitude" : -101.70593000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.83456000,
        "longitude" : -88.86569000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 41.73627000,
        "longitude" : -72.65021000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.07297000,
        "longitude" : -77.04294000
    },
    {
        "latitude" : 60.57200000,
        "longitude" : -151.24753000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
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
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.67614000,
        "longitude" : -70.95694000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 43.11093000,
        "longitude" : -88.03442000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 27.91076000,
        "longitude" : -82.68744000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
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
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 39.79538000,
        "longitude" : -121.85842000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 41.70165000,
        "longitude" : -74.79501000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
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
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 40.72878000,
        "longitude" : -73.41341000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 26.17583000,
        "longitude" : -98.23861000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
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
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
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
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
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
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 36.96452000,
        "longitude" : -86.41968000
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
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 49.19389000,
        "longitude" : -123.18444000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
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
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 31.17845000,
        "longitude" : -90.47188000
    },
    {
        "latitude" : 32.57231000,
        "longitude" : -116.98025000
    },
    {
        "latitude" : 32.11608000,
        "longitude" : -110.94103000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
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
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
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
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
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
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
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
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 9.99386100,
        "longitude" : -84.20880600
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
    },
    {
        "latitude" : 29.69006000,
        "longitude" : -82.27178000
    },
    {
        "latitude" : 42.40260000,
        "longitude" : -96.38437000
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
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
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
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 61.17432000,
        "longitude" : -149.99619000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
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
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 9.07136400,
        "longitude" : -79.38345300
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 26.19728000,
        "longitude" : -80.17071000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
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
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 42.15773000,
        "longitude" : -72.71562000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 27.49506000,
        "longitude" : -80.36828000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 41.56512000,
        "longitude" : -81.48635000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 41.62661000,
        "longitude" : -73.88411000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 33.73398000,
        "longitude" : -117.02253000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 27.77036000,
        "longitude" : -97.50122000
    },
    {
        "latitude" : 39.29664000,
        "longitude" : -80.22808000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 58.35496000,
        "longitude" : -134.57628000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
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
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
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
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 42.99297000,
        "longitude" : -84.13891000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
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
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
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
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 61.50000000,
        "longitude" : -149.50000000
    },
    {
        "latitude" : 46.37450000,
        "longitude" : -117.01539000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 27.76511000,
        "longitude" : -82.62697000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
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
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 41.88459000,
        "longitude" : -91.71087000
    },
    {
        "latitude" : 39.14602000,
        "longitude" : -86.61668000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
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
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
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
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 28.42889000,
        "longitude" : -81.31603000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 30.33633000,
        "longitude" : -81.51444000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
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
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 34.27061000,
        "longitude" : -77.90256000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 41.66934000,
        "longitude" : -70.28036000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
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
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
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
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 39.29664000,
        "longitude" : -80.22808000
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
        "latitude" : 21.31869000,
        "longitude" : -157.92241000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 39.34510000,
        "longitude" : -81.43920000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
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
        "latitude" : 41.25131000,
        "longitude" : -72.03161000
    },
    {
        "latitude" : 35.63772000,
        "longitude" : -91.17638000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 38.66187000,
        "longitude" : -90.65123000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 35.03527000,
        "longitude" : -85.20379000
    },
    {
        "latitude" : 19.43630300,
        "longitude" : -99.07209700
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 43.90883000,
        "longitude" : -92.49799000
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
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
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
        "latitude" : 47.50942000,
        "longitude" : -94.93372000
    },
    {
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 30.21059000,
        "longitude" : -93.14319000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
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
        "latitude" : 42.23793000,
        "longitude" : -83.53041000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 40.37850000,
        "longitude" : -75.96525000
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
        "latitude" : 40.87522000,
        "longitude" : -74.28136000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.83071000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 34.21375000,
        "longitude" : -119.09433000
    },
    {
        "latitude" : 26.00142000,
        "longitude" : -80.24052000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
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
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.64291000,
        "longitude" : -79.91631000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
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
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
    },
    {
        "latitude" : 41.53493000,
        "longitude" : -93.66068000
    },
    {
        "latitude" : 31.39490000,
        "longitude" : -92.29577000
    },
    {
        "latitude" : 41.25305000,
        "longitude" : -70.06018000
    },
    {
        "latitude" : 42.49103000,
        "longitude" : -76.45844000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 37.24433000,
        "longitude" : -93.38686000
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
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
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
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 34.82916000,
        "longitude" : -77.61214000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 30.33633000,
        "longitude" : -81.51444000
    },
    {
        "latitude" : 44.12326000,
        "longitude" : -123.21869000
    },
    {
        "latitude" : 41.83591000,
        "longitude" : -86.22518000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 38.03697000,
        "longitude" : -84.60539000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
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
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 51.11389000,
        "longitude" : -114.02028000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
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
        "latitude" : 12.50138900,
        "longitude" : -70.01522100
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 41.26390000,
        "longitude" : -72.88710000
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
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 29.76750000,
        "longitude" : -97.77180000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.64291000,
        "longitude" : -79.91631000
    },
    {
        "latitude" : 39.67872000,
        "longitude" : -75.60653000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
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
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 38.36667000,
        "longitude" : -82.55803000
    },
    {
        "latitude" : 56.48433000,
        "longitude" : -132.36982000
    },
    {
        "latitude" : 39.83456000,
        "longitude" : -88.86569000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 35.81249000,
        "longitude" : -83.99286000
    },
    {
        "latitude" : 31.23401000,
        "longitude" : -94.75000000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 36.64521100,
        "longitude" : -6.34945800
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 41.90688000,
        "longitude" : -88.24842000
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
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
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
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
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
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
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
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
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
        "latitude" : 40.65236000,
        "longitude" : -75.44040000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 48.56619000,
        "longitude" : -93.40307000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 41.56512000,
        "longitude" : -81.48635000
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
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 37.15181000,
        "longitude" : -94.49827000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
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
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 43.58135000,
        "longitude" : -96.74170000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 26.22851000,
        "longitude" : -97.65439000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 32.96856000,
        "longitude" : -96.83645000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 35.23706000,
        "longitude" : -120.64239000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 42.77870000,
        "longitude" : -84.58736000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 42.71721000,
        "longitude" : -71.12343000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.26734000,
        "longitude" : -71.87571000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
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
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
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
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 30.39653000,
        "longitude" : -84.35033000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 26.15247000,
        "longitude" : -81.77544000
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
        "latitude" : 46.84209000,
        "longitude" : -92.19365000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 28.10275000,
        "longitude" : -80.64581000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
    },
    {
        "latitude" : 42.19028000,
        "longitude" : -122.66063000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 37.98966000,
        "longitude" : -122.05690000
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
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.85884000,
        "longitude" : -87.60791000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 33.22063000,
        "longitude" : -87.61140000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 26.00142000,
        "longitude" : -80.24052000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 39.90879000,
        "longitude" : -105.11722000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
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
        "latitude" : 39.67872000,
        "longitude" : -75.60653000
    },
    {
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 26.00142000,
        "longitude" : -80.24052000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 39.83456000,
        "longitude" : -88.86569000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
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
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 41.10133000,
        "longitude" : -102.98528000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
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
        "latitude" : 34.20062000,
        "longitude" : -118.35850000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 39.92750000,
        "longitude" : -74.29230000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 39.84395000,
        "longitude" : -89.67762000
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
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
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
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
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
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 41.24184000,
        "longitude" : -76.92110000
    },
    {
        "latitude" : 26.68316000,
        "longitude" : -80.09559000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
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
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.58681000,
        "longitude" : -83.80783000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
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
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 39.67872000,
        "longitude" : -75.60653000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 30.33633000,
        "longitude" : -81.51444000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 42.71721000,
        "longitude" : -71.12343000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 30.20528000,
        "longitude" : -91.98766000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 42.94722000,
        "longitude" : -87.89658000
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
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.90688000,
        "longitude" : -88.24842000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 37.72129000,
        "longitude" : -122.22072000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 18.33731000,
        "longitude" : -64.97336000
    },
    {
        "latitude" : 41.73588000,
        "longitude" : -83.65541000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 47.50942000,
        "longitude" : -94.93372000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 38.28909000,
        "longitude" : -104.49657000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
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
        "latitude" : 42.21206000,
        "longitude" : -83.34884000
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
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
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
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 35.43360000,
        "longitude" : -119.05677000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 37.46112000,
        "longitude" : -122.11504000
    },
    {
        "latitude" : 42.15991000,
        "longitude" : -76.89144000
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
        "latitude" : 43.14512000,
        "longitude" : -75.38386000
    },
    {
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 42.40919000,
        "longitude" : -83.00986000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
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
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
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
        "latitude" : 38.22800000,
        "longitude" : -85.66372000
    },
    {
        "latitude" : 39.29664000,
        "longitude" : -80.22808000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 36.78015000,
        "longitude" : -76.44883000
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
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 42.40919000,
        "longitude" : -83.00986000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
    },
    {
        "latitude" : 47.46472200,
        "longitude" : 8.54916700
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.35440000,
        "longitude" : -79.93017000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
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
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 42.40919000,
        "longitude" : -83.00986000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.25979000,
        "longitude" : -84.45940000
    },
    {
        "latitude" : 30.58859000,
        "longitude" : -96.36382000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
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
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 41.61627000,
        "longitude" : -87.41279000
    },
    {
        "latitude" : 42.55708000,
        "longitude" : -92.40034000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 47.52999000,
        "longitude" : -122.30196000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 37.15181000,
        "longitude" : -94.49827000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 35.93430000,
        "longitude" : -79.05950000
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
        "latitude" : 44.90953000,
        "longitude" : -123.00250000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 40.50898000,
        "longitude" : -122.29340000
    },
    {
        "latitude" : 32.51087000,
        "longitude" : -92.03769000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 28.23420000,
        "longitude" : -80.60600000
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
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 44.74144000,
        "longitude" : -85.58224000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 43.53291000,
        "longitude" : -84.07965000
    },
    {
        "latitude" : 37.50517000,
        "longitude" : -77.31967000
    },
    {
        "latitude" : 27.76511000,
        "longitude" : -82.62697000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 45.55580000,
        "longitude" : -123.01830000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 18.43942000,
        "longitude" : -66.00183000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
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
        "latitude" : 41.44853000,
        "longitude" : -90.50754000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.56512000,
        "longitude" : -81.48635000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 20.78561000,
        "longitude" : -156.95142000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 44.80744000,
        "longitude" : -68.82814000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 36.08036000,
        "longitude" : -115.15233000
    },
    {
        "latitude" : 36.77619000,
        "longitude" : -119.71814000
    },
    {
        "latitude" : 30.12610000,
        "longitude" : -93.22340000
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
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
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
        "latitude" : 37.22532000,
        "longitude" : -89.57075000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
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
        "latitude" : 42.55708000,
        "longitude" : -92.40034000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 37.13190000,
        "longitude" : -76.49299000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 30.47331000,
        "longitude" : -87.18744000
    },
    {
        "latitude" : 40.19350000,
        "longitude" : -76.76340000
    },
    {
        "latitude" : 41.73627000,
        "longitude" : -72.65021000
    },
    {
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
    },
    {
        "latitude" : 33.36996000,
        "longitude" : -81.96450000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
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
        "latitude" : 64.81368000,
        "longitude" : -147.85967000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 47.90763000,
        "longitude" : -122.28159000
    },
    {
        "latitude" : 38.43780000,
        "longitude" : -82.20030000
    },
    {
        "latitude" : 43.67722000,
        "longitude" : -79.63056000
    },
    {
        "latitude" : 40.41232000,
        "longitude" : -86.93690000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 43.62637000,
        "longitude" : -72.30427000
    },
    {
        "latitude" : 41.51750000,
        "longitude" : -81.68333000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 28.52470000,
        "longitude" : -96.52300000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 42.74317000,
        "longitude" : -86.10503000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 43.87938000,
        "longitude" : -91.25654000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
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
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
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
        "latitude" : 42.20848000,
        "longitude" : -75.97961000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
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
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 40.96747000,
        "longitude" : -98.30861000
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
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 38.72142000,
        "longitude" : -77.51544000
    },
    {
        "latitude" : 46.26468000,
        "longitude" : -119.11903000
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
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
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
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
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
        "latitude" : 41.24020000,
        "longitude" : -82.55070000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.70895000,
        "longitude" : -86.31847000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 41.56512000,
        "longitude" : -81.48635000
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
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 33.56294000,
        "longitude" : -86.75355000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 40.50898000,
        "longitude" : -122.29340000
    },
    {
        "latitude" : 40.37850000,
        "longitude" : -75.96525000
    },
    {
        "latitude" : 15.45263900,
        "longitude" : -87.92355600
    },
    {
        "latitude" : 35.39309000,
        "longitude" : -97.60073000
    },
    {
        "latitude" : 40.69250000,
        "longitude" : -74.16866000
    },
    {
        "latitude" : 43.62637000,
        "longitude" : -72.30427000
    },
    {
        "latitude" : 33.93884000,
        "longitude" : -81.11954000
    },
    {
        "latitude" : 41.72400000,
        "longitude" : -71.42822000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
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
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 32.44663000,
        "longitude" : -93.82560000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 39.90238000,
        "longitude" : -84.21938000
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
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
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
        "latitude" : 38.89388000,
        "longitude" : -119.99533000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
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
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 40.08194000,
        "longitude" : -75.01059000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 27.65556000,
        "longitude" : -80.41794000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 44.88055000,
        "longitude" : -93.21692000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
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
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 41.93887000,
        "longitude" : -72.68323000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 40.91631000,
        "longitude" : -81.44247000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 37.51186000,
        "longitude" : -122.24952000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 46.91631000,
        "longitude" : -114.09056000
    },
    {
        "latitude" : 29.17992000,
        "longitude" : -81.05806000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 38.80581000,
        "longitude" : -104.70025000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
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
        "latitude" : 37.64996000,
        "longitude" : -97.43305000
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
        "latitude" : 42.88082000,
        "longitude" : -85.52277000
    },
    {
        "latitude" : 42.23488000,
        "longitude" : -85.55206000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
    },
    {
        "latitude" : 43.14512000,
        "longitude" : -75.38386000
    },
    {
        "latitude" : 27.97547000,
        "longitude" : -82.53325000
    },
    {
        "latitude" : 36.96452000,
        "longitude" : -86.41968000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 40.49147000,
        "longitude" : -80.23287000
    },
    {
        "latitude" : 46.77411000,
        "longitude" : -100.74672000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 33.64044000,
        "longitude" : -84.42694000
    },
    {
        "latitude" : 47.61986000,
        "longitude" : -117.53384000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 31.80667000,
        "longitude" : -106.37781000
    },
    {
        "latitude" : 39.04614000,
        "longitude" : -84.66217000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.49858000,
        "longitude" : -119.76806000
    },
    {
        "latitude" : 30.04242000,
        "longitude" : -90.02826000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
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
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 32.30064000,
        "longitude" : -86.39398000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 19.72026000,
        "longitude" : -155.04847000
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
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
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
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 36.19837000,
        "longitude" : -95.88824000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 50.02642100,
        "longitude" : 8.54312500
    },
    {
        "latitude" : 45.12665000,
        "longitude" : -87.63844000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.58417000,
        "longitude" : -70.91652000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 26.58661000,
        "longitude" : -81.86325000
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
        "latitude" : 34.99147000,
        "longitude" : -78.88000000
    },
    {
        "latitude" : 34.72940000,
        "longitude" : -92.22425000
    },
    {
        "latitude" : 30.69142000,
        "longitude" : -88.24283000
    },
    {
        "latitude" : 37.15181000,
        "longitude" : -94.49827000
    },
    {
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
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
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
    },
    {
        "latitude" : 34.89567000,
        "longitude" : -82.21886000
    },
    {
        "latitude" : 40.78839000,
        "longitude" : -111.97777000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
    },
    {
        "latitude" : 41.39303000,
        "longitude" : -70.61433000
    },
    {
        "latitude" : 39.17540000,
        "longitude" : -76.66820000
    },
    {
        "latitude" : 32.31117000,
        "longitude" : -90.07589000
    },
    {
        "latitude" : 57.04714000,
        "longitude" : -135.36160000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 41.24184000,
        "longitude" : -76.92110000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
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
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 36.09775000,
        "longitude" : -79.93730000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
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
        "latitude" : 33.67566000,
        "longitude" : -117.86822000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 41.41089000,
        "longitude" : -81.84940000
    },
    {
        "latitude" : 20.78561000,
        "longitude" : -156.95142000
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
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 31.94253000,
        "longitude" : -102.20191000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 24.55611000,
        "longitude" : -81.75956000
    },
    {
        "latitude" : 39.71733000,
        "longitude" : -86.29438000
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
        "latitude" : 40.82142000,
        "longitude" : -82.51664000
    },
    {
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
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
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
    },
    {
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
    },
    {
        "latitude" : 36.89461000,
        "longitude" : -76.20122000
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
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 41.30252000,
        "longitude" : -95.89417000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 36.47521000,
        "longitude" : -82.40742000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 48.79275000,
        "longitude" : -122.53753000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
    },
    {
        "latitude" : 40.48118000,
        "longitude" : -107.21766000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 30.21208000,
        "longitude" : -85.68281000
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
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
    },
    {
        "latitude" : 41.56512000,
        "longitude" : -81.48635000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 40.17500000,
        "longitude" : -80.64628000
    },
    {
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 43.11887000,
        "longitude" : -77.67238000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
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
        "latitude" : 44.25741000,
        "longitude" : -88.51948000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 34.09165000,
        "longitude" : -117.78178000
    },
    {
        "latitude" : 33.82922000,
        "longitude" : -116.50625000
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
        "latitude" : 34.05600000,
        "longitude" : -117.60119000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
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
        "latitude" : 42.93452000,
        "longitude" : -71.43706000
    },
    {
        "latitude" : 28.54547000,
        "longitude" : -81.33294000
    },
    {
        "latitude" : 26.07258000,
        "longitude" : -80.15275000
    },
    {
        "latitude" : 29.60733000,
        "longitude" : -95.15875000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 42.66520000,
        "longitude" : -83.41871000
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
        "latitude" : 42.57451000,
        "longitude" : -84.81143000
    },
    {
        "latitude" : 26.24714000,
        "longitude" : -80.11106000
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
        "latitude" : 41.06696000,
        "longitude" : -73.70757000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 33.29230000,
        "longitude" : -111.90930000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 29.98047000,
        "longitude" : -95.33972000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 43.51456000,
        "longitude" : -112.07017000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.96550000,
        "longitude" : -83.74346000
    },
    {
        "latitude" : 29.64542000,
        "longitude" : -95.27889000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 44.48507000,
        "longitude" : -88.12959000
    },
    {
        "latitude" : 33.87560000,
        "longitude" : -84.30197000
    },
    {
        "latitude" : 40.91631000,
        "longitude" : -81.44247000
    },
    {
        "latitude" : 42.11418000,
        "longitude" : -87.90148000
    },
    {
        "latitude" : 33.43417000,
        "longitude" : -112.00806000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 39.42330000,
        "longitude" : -83.78850000
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
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
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
        "latitude" : 38.85208000,
        "longitude" : -77.03772000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 33.66364000,
        "longitude" : -101.82278000
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
        "latitude" : 37.36186000,
        "longitude" : -121.92901000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
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
        "latitude" : 42.08202000,
        "longitude" : -80.17622000
    },
    {
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 39.10334000,
        "longitude" : -84.41861000
    },
    {
        "latitude" : 34.20080000,
        "longitude" : -119.20722000
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
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
    },
    {
        "latitude" : 32.12758000,
        "longitude" : -81.20214000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 20.89865000,
        "longitude" : -156.43046000
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
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 40.79524000,
        "longitude" : -73.10021000
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
        "latitude" : 40.85010000,
        "longitude" : -74.06084000
    },
    {
        "latitude" : 41.37154000,
        "longitude" : -73.48219000
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
        "latitude" : 47.94926000,
        "longitude" : -97.17611000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 39.87195000,
        "longitude" : -75.24114000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 41.16348000,
        "longitude" : -73.12618000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 32.51633000,
        "longitude" : -84.93886000
    },
    {
        "latitude" : 44.47300000,
        "longitude" : -73.15031000
    },
    {
        "latitude" : 43.45120000,
        "longitude" : -96.17450000
    },
    {
        "latitude" : 26.53617000,
        "longitude" : -81.75517000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 25.79325000,
        "longitude" : -80.29056000
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
        "latitude" : 38.74769000,
        "longitude" : -90.35999000
    },
    {
        "latitude" : 47.20771000,
        "longitude" : -119.32019000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.33815000,
        "longitude" : -75.72427000
    },
    {
        "latitude" : 42.36435000,
        "longitude" : -71.00518000
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
        "latitude" : 40.63975000,
        "longitude" : -73.77893000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 40.66424000,
        "longitude" : -89.69331000
    },
    {
        "latitude" : 38.03799000,
        "longitude" : -87.53063000
    },
    {
        "latitude" : 40.85097000,
        "longitude" : -96.75925000
    },
    {
        "latitude" : 37.32547000,
        "longitude" : -79.97543000
    },
    {
        "latitude" : 45.58872000,
        "longitude" : -122.59750000
    },
    {
        "latitude" : 52.55900000,
        "longitude" : 13.28800000
    },
    {
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 40.27669000,
        "longitude" : -74.81347000
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
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 39.85840000,
        "longitude" : -104.76700000
    },
    {
        "latitude" : 47.44898000,
        "longitude" : -122.30931000
    },
    {
        "latitude" : 38.69542000,
        "longitude" : -121.59077000
    },
    {
        "latitude" : 41.63970000,
        "longitude" : -85.08349000
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
        "latitude" : 41.97960000,
        "longitude" : -87.90446000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 38.37315000,
        "longitude" : -81.59319000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 20.52180000,
        "longitude" : -103.31116700
    },
    {
        "latitude" : 41.33006000,
        "longitude" : -72.04514000
    },
    {
        "latitude" : 33.94254000,
        "longitude" : -118.40807000
    },
    {
        "latitude" : 30.19453000,
        "longitude" : -97.66987000
    },
    {
        "latitude" : 42.40296000,
        "longitude" : -90.70917000
    },
    {
        "latitude" : 39.45758000,
        "longitude" : -74.57717000
    },
    {
        "latitude" : 39.57013000,
        "longitude" : -104.84929000
    },
    {
        "latitude" : 40.47799000,
        "longitude" : -88.91595000
    },
    {
        "latitude" : 37.61900000,
        "longitude" : -122.37484000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 34.42621000,
        "longitude" : -119.84037000
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
        "latitude" : 36.12448000,
        "longitude" : -86.67818000
    },
    {
        "latitude" : 32.84711000,
        "longitude" : -96.85177000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
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
        "latitude" : 29.99339000,
        "longitude" : -90.25803000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 38.17439000,
        "longitude" : -85.73600000
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
        "latitude" : 41.78598000,
        "longitude" : -87.75242000
    },
    {
        "latitude" : 44.91398000,
        "longitude" : -97.15472000
    },
    {
        "latitude" : 35.04242000,
        "longitude" : -89.97667000
    },
    {
        "latitude" : 30.49406000,
        "longitude" : -81.68786000
    },
    {
        "latitude" : 38.94453000,
        "longitude" : -77.45581000
    },
    {
        "latitude" : 40.77724000,
        "longitude" : -73.87261000
    },
    {
        "latitude" : 43.11119000,
        "longitude" : -76.10631000
    },
    {
        "latitude" : 35.21401000,
        "longitude" : -80.94313000
    },
    {
        "latitude" : 43.64617000,
        "longitude" : -70.30875000
    },
    {
        "latitude" : 42.94052000,
        "longitude" : -78.73217000
    },
    {
        "latitude" : 21.97598000,
        "longitude" : -159.33896000
    },
    {
        "latitude" : 39.99694720,
        "longitude" : -82.89216110
    },
    {
        "latitude" : 32.89595000,
        "longitude" : -97.03720000
    },
    {
        "latitude" : 42.74812000,
        "longitude" : -73.80298000
    },
    {
        "latitude" : 39.29761000,
        "longitude" : -94.71391000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 34.64045000,
        "longitude" : -86.77311000
    },
    {
        "latitude" : 35.87764000,
        "longitude" : -78.78747000
    },
    {
        "latitude" : 29.53369000,
        "longitude" : -98.46978000
    },
    {
        "latitude" : 41.50409000,
        "longitude" : -74.10484000
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
        "latitude" : 30.53316000,
        "longitude" : -91.14963000
    },
    {
        "latitude" : 41.24184000,
        "longitude" : -76.92110000
    }
]

function loopMap() {
    for (let i = 0; i < data.length; i++) {
        L.circle([data[i].latitude, data[i].longitude], {radius: 200}).addTo(map);
    }
}
loopMap()


