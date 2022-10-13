const ctx = document.querySelector('#chart').getContext("2d");

const myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        onClick: (e) => {

        }
    },
    data: {
        labels: ['WING OR ROTOR','RADOME', 'FUSELAGE','ENGINE 1','LANDING GEAR', 'ENGINE 2','PROPELLER',    'TAIL', 'LIGHTS' , 'ENGINE 3', 'ENGINE 4', ],
        datasets: [{
            data: [31335,24910,24153,12673,11367, 10573,4618, 2732, 1357, 474, 230, ],
            label: 'Total hits',
            backgroundColor: ['#0077b6'],

        }]
    }
});
//labels: ['ENGINE 1', 'ENGINE 2', 'ENGINE 3', 'ENGINE 4', 'PROPELLER', 'WING OR ROTOR', 'FUSELAGE', 'LANDING GEAR', 'TAIL', 'LIGHTS', 'RADOME'],
//data: [12673, 10573, 474, 230, 4618, 31335, 24153, 11367, 2732, 1357, 24910],

const ctx2 = document.querySelector('#chart2').getContext("2d");

const myChart2 = new Chart(ctx2, {
    type: 'bar',
    options: {
        onClick: (e) => {

        }
    },
    data: {
        labels: ['TWO ENGINE PLANE', 'FOUR ENGINE PLANE'],
        datasets: [{
            data: [166836, 3206],
            label: 'Total amount',
            backgroundColor: ['#0077b6'],

        }]
    }
});

// Sortere i data evt. lave endnu en graf kun med engines
// Bytte om på Kortet og grafen, eller smid dem under hinanden.