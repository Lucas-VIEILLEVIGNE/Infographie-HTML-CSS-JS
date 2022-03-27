const barCanvas = document.getElementById('barCanvas')

const barChart = new Chart(barCanvas, {
    type:"bar",
    data:{
        labels: ["1er ARRDT","3e ARRDT","4e ARRDT","5e ARRDT","6e ARRDT","7e ARRDT","8e ARRDT","9e ARRDT","10e ARRDT","11e ARRDT","12e ARRDT","13e ARRDT","14e ARRDT","15e ARRDT","16e ARRDT","17e ARRDT","18e ARRDT","19e ARRDT","20e ARRDT",],
        datasets: [{
            data: [1,3,6,6,1,11,6,2,1,1,3,4,10,6,27,8,10,10,14],
            backgroundColor: [
                "#B0F2B6",
                "#98FB98",
                "#90EE90",
                "#BEF574",
                "#9FE855",
                "#7FDD4C",
                "#C2F732",
                "#ADFF2F",
                "#7FFF00",
                "#00FF00",
                "#32CD32",
                "#85C17E",
                "#97DFC6",
                "#54F98D",
                "#00FF7F",
                "#00FA9A",
                "#2E8B57",
                "#3CB371",
                "#3AF24B",
            ],
        }]
    },

    options: {
        scales:{
            y: {
                ticks:{
                    size: 18
                }
            },
            x: {
                ticks:{
                    size: 18
                }
            }
        }
    }
    
})

const doughnutCanvas = document.getElementById('doughnutCanvas');

const doughnutChart = new Chart(doughnutCanvas, {
    type:"doughnut",
    data:{
        labels: ["Erable","Noisetier de Byzance","Plaqueminier","Pterocarya","Sequoia","Arbre aux quarante écus","Cèdre","Marronnier","Chêne","Hêtre","Platane","Autres"],
        datasets: [{
            data: [6,6,6,7,7,8,8,9,11,12,32,66],
            backgroundColor : [
                "#C7785C",
                "#955628",
                "#FFBE87",
                "#708D23",
                "#855A2D",
                "#FFE436",
                "#062B16",
                "#5B3C11",
                "#D4CFC7",
                "#92DAD4",
                "#527843",
                "#3F5046"
            ],
            hoverOffset : 10,
        }]

    }})