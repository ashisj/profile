$(document).ready(function(){

    google.charts.load('current', {packages: ['corechart', 'bar', 'timeline']});
    google.charts.setOnLoadCallback(drawCarrierChart);
    google.charts.setOnLoadCallback(drawExperienceChart);
    
    function drawCarrierChart(){

        var data = new google.visualization.arrayToDataTable([
            ['Qualification','%',{ role: 'annotation' }],
            ['BSE',85.66,'85.66%'],
            ['CHSE',77.16,'77.16%'],
            ['B.Tech',77,'77%']
        ]);
        var options = {
            title:'Educational Qualification',
            hAxis:{
                title:'Qualification'
            },
            vAxis:{
                title:'Percentage(%)',
                viewWindow:{
                    min:0,
                    max:100
                }
            }
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('qualificationChart'));
        chart.draw(data, options);
    }
    
    function drawExperienceChart(){
        var container = document.getElementById('experienceChart');
        var chart = new google.visualization.Timeline(container);
        var data = new google.visualization.arrayToDataTable([
            ['id','Company','start','end'],
            ['1','Infosys LTD',new Date(2017,12.07),new Date(2018,09,14)],
            ['2','Mindfire Solurtions',new Date(2018,09.17),Date.now()],
        ]);
        chart.draw(data);
    }
});