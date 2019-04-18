$(document).ready(function(){

    google.charts.load('current', {packages: ['corechart', 'bar', 'timeline']});
    google.charts.setOnLoadCallback(drawExperienceChart);
    
    function drawExperienceChart(){
        //debugger;
        var chart_width = $('.collapsible').innerWidth()*70/100;
        var container = document.getElementById('experienceChart');
        
        var data = new google.visualization.arrayToDataTable([
                ['id','Company','start','end'],
                ['1','Infosys LTD',new Date(2017,11,18),new Date(2018,08,14)],
                ['2','Mindfire Solurtions',new Date(2018,08,17),Date.now()],
            ]);
        var options = {
            timeline: { showRowLabels: false },
            width:chart_width,
            height:'100%',
            chartArea: {
                    top:'15%',
                    width:'70%',
                    height:'65%'
                }
            };
        var chart = new google.visualization.Timeline(container);    
        chart.draw(data,options);    
    }

    $(window).resize(function(){
        if( $("#experienceChart").find("svg").length == 1) {
            drawExperienceChart();
        }
    });

    $(document).scroll(function () {
        var nav = $(".nav-wrapper");
        var scroll = $(window).scrollTop();
        if(scroll >= 534)
            nav.removeClass('transparent');
        else
            nav.addClass('transparent');
        
      });
});