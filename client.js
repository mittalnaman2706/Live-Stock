var code = 'MSFT';
$.get('history?symbol=' + code)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
});

var requestData = function (code) {
    return $.get('history?symbol=' + code)
        .then(response => {
            curDataFrame = dataForge.fromCSV(response)
                .where(row => row.timestamp)
                .parseDates("timestamp")
                .parseFloats([
                    "open", 
                    "high", 
                    "low", 
                    "close", 
                    "volume"
                ])
                .setIndex("timestamp")
                .reverse() // Data should be going forward
                .bake()
                ;

            return curDataFrame;
        });
};

var price = [...];
    var volume = [...];

    var chartOptions =
    {
        // ... other chart options ...

        series: [
            {
                type: 'candlestick',
                name: 'Price',
                data: price,
            },
            {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
            }
        ]
    };