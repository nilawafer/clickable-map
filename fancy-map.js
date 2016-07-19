$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "us-ma",
            "value": 50,
            "url": "https://www.zipscanners.com/massachusetts-police-scanner-recommendations.html"
        },
        {
            "hc-key": "us-wa",
            "value": 50,
            "url": "https://www.zipscanners.com/washington-police-scanner-recommendations.html"
        },
        {
            "hc-key": "us-ca",
            "value": 50,
            "url": "https://www.zipscanners.com/california-police-scanner-recommendations.html"
        },
        {
            "hc-key": "us-or",
            "value": 50,
            "url": "https://www.zipscanners.com/oregon-police-scanner-recommendations.html"
        },
        {
            "hc-key": "us-wi",
            "value": 50,
            "url": "https://www.zipscanners.com/wisconsin-police-scanner-recommendations.html"
        },
        {
            "hc-key": "us-me",
            "value": 50,
            "url": ""
        },
        {
            "hc-key": "us-mi",
            "value": 50,
            "url": ""
        },
        {
            "hc-key": "us-nv",
            "value": 50,
            "url": ""
        },
        {
            "hc-key": "us-nm",
            "value": 50,
            "url": ""
        },
        {
            "hc-key": "us-co",
            "value": 9,
            "url": ""
        },
        {
            "hc-key": "us-wy",
            "value": 10,
            "url": ""
        },
        {
            "hc-key": "us-ks",
            "value": 11,
            "url": ""
        },
        {
            "hc-key": "us-ne",
            "value": 12,
            "url": ""
        },
        {
            "hc-key": "us-ok",
            "value": 13,
            "url": ""
        },
        {
            "hc-key": "us-mo",
            "value": 14,
            "url": ""
        },
        {
            "hc-key": "us-il",
            "value": 15,
            "url": ""
        },
        {
            "hc-key": "us-in",
            "value": 16,
            "url": ""
        },
        {
            "hc-key": "us-vt",
            "value": 17,
            "url": ""
        },
        {
            "hc-key": "us-ar",
            "value": 18,
            "url": ""
        },
        {
            "hc-key": "us-tx",
            "value": 19,
            "url": ""
        },
        {
            "hc-key": "us-ri",
            "value": 20,
            "url": ""
        },
        {
            "hc-key": "us-al",
            "value": 21,
            "url": ""
        },
        {
            "hc-key": "us-ms",
            "value": 22,
            "url": ""
        },
        {
            "hc-key": "us-nc",
            "value": 23,
            "url": ""
        },
        {
            "hc-key": "us-va",
            "value": 24,
            "url": ""
        },
        {
            "hc-key": "us-ia",
            "value": 25,
            "url": ""
        },
        {
            "hc-key": "us-md",
            "value": 26,
            "url": ""
        },
        {
            "hc-key": "us-de",
            "value": 27,
            "url": ""
        },
        {
            "hc-key": "us-pa",
            "value": 28,
            "url": ""
        },
        {
            "hc-key": "us-nj",
            "value": 29,
            "url": ""
        },
        {
            "hc-key": "us-ny",
            "value": 30,
            "url": ""
        },
        {
            "hc-key": "us-id",
            "value": 31,
            "url": ""
        },
        {
            "hc-key": "us-sd",
            "value": 32,
            "url": ""
        },
        {
            "hc-key": "us-ct",
            "value": 33,
            "url": ""
        },
        {
            "hc-key": "us-nh",
            "value": 34,
            "url": ""
        },
        {
            "hc-key": "us-ky",
            "value": 35,
            "url": ""
        },
        {
            "hc-key": "us-oh",
            "value": 36,
            "url": ""
        },
        {
            "hc-key": "us-tn",
            "value": 37,
            "url": ""
        },
        {
            "hc-key": "us-wv",
            "value": 38,
            "url": ""
        },
        {
            "hc-key": "us-dc",
            "value": 39,
            "url": ""
        },
        {
            "hc-key": "us-la",
            "value": 40,
            "url": ""
        },
        {
            "hc-key": "us-fl",
            "value": 41,
            "url": ""
        },
        {
            "hc-key": "us-ga",
            "value": 42,
            "url": ""
        },
        {
            "hc-key": "us-sc",
            "value": 43,
            "url": ""
        },
        {
            "hc-key": "us-mn",
            "value": 44,
            "url": ""
        },
        {
            "hc-key": "us-mt",
            "value": 45,
            "url": ""
        },
        {
            "hc-key": "us-nd",
            "value": 46,
            "url": ""
        },
        {
            "hc-key": "us-az",
            "value": 47,
            "url": ""
        },
        {
            "hc-key": "us-ut",
            "value": 48,
            "url": ""
        },
        {
            "hc-key": "us-hi",
            "value": 49,
            "url": ""
        },
        {
            "hc-key": "us-ak",
            "value": 50,
            "url": ""
        }
    ];
    
    console.log($('#container'));
    // Initiate the chart
    $('#container').highcharts('Map', {
				tooltip: { enabled: false },
        title : {
            text : 'Police Scanner Recommendations by State'
        },

     //   subtitle : {
     //       text : 'Source map: United States of America'
    //  },

        // Zoom on bottom left
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        legend: {
            enabled: false
        },

        series : [{
            
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            
            // Set color of states
            color: '#ec8932',
            
            states: {
                hover: {
                    color: '#3f4255'
                }
            },

            // Ensables state names
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            },
    
                  // Enables link on click of each state
            point: {
              events: {
                click: function() {
                  window.location.href = data[event.point.value].url;
                }
              }
            }
            }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
            }]
    });
});