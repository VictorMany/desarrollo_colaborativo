google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Social Network', 'Number'],
        ['Facebook', 11],
        ['Instagram', 2],
        ['Twitter', 2],
        ['YouTube', 2],
        ['LinkedIn', 7]
    ]);

    var options = {
        title: 'Social network origin',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}



google.charts.load('current', { 'packages': ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

    var chartDiv = document.getElementById('chart_div');

    var data = google.visualization.arrayToDataTable([
        ['Galaxy', 'Mujeres', 'Hombres'],
        ['Primavera', 11265, 12987],
        ['Verano', 24000, 45000],
        ['Otoño', 23988, 23000],
        ['Invierno', 38970, 45793],
    ]);



    var classicOptions = {
        width: 900,
        series: {
            0: { targetAxisIndex: 0 }
        },
        title: 'Número de clientes por género',
        vAxes: {
            // Adds titles to each axis.
            0: { title: 'parsecs' },
        }
    };



    function drawClassicChart() {
        var classicChart = new google.visualization.ColumnChart(chartDiv);
        classicChart.draw(data, classicOptions);
    }

    drawClassicChart();
};