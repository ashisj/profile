$(document).ready(function () {
    const collapseInstance = M.Collapsible.getInstance($('.collapsible'));
    collapseInstance.open();

    
    google.charts.load('current', { packages: ['corechart', 'bar', 'timeline'] });
    google.charts.setOnLoadCallback(drawExperienceChart);

    function drawExperienceChart() {
        //debugger;
        const chart_width = $('.collapsible').innerWidth() * 70 / 100;
        const container = document.getElementById('experienceChart');

        const data = new google.visualization.arrayToDataTable([
            ['id', 'Company', 'start', 'end'],
            ['1', 'Infosys LTD', new Date(2017, 11, 18), new Date(2018, 09, 14)],
            ['2', 'Mindfire Solurtions', new Date(2018, 09, 17), new Date(2019, 08, 31)],
            ['3', 'iPROMOTEu', new Date(2019, 09, 23), new Date(2020, 10, 16)],
            ['4', 'Symphony Retail AI', new Date(2020, 10, 18), Date.now()]
        ]);
        const options = {
            timeline: { showRowLabels: false },
            width: chart_width,
            height: '700px',
            // chartArea: {
            //     top: '15%',
            //     width: '70%',
            //     height: '85%'
            // }
        };
        const chart = new google.visualization.Timeline(container);
        chart.draw(data, options);
    }

    $(window).resize(function () {
        if ($("#experienceChart").find("svg").length == 1) {
            drawExperienceChart();
        }
    });

    $(document).scroll(function () {
        const nav = $(".nav-wrapper");
        const scroll = $(window).scrollTop();
        if (scroll >= 534)
            nav.removeClass('transparent');
        else
            nav.addClass('transparent');

    });
});