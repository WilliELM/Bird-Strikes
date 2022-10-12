const ctx = document.querySelector('#chart').getContext("2d");

const myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        onClick: (e) => {

        }
    },
    data: {
        labels: ['ENGINE 1', 'ENGINE 2', 'ENGINE 3', 'ENGINE 4', 'PROPELLER', 'WING OR ROTOR', 'FUSELAGE', 'LANDING GEAR', 'TAIL', 'LIGHTS', 'RADOME'],
        datasets: [{
            data: [12673, 10573, 474, 230, 4618, 31335, 24153, 11367, 2732, 1357, 24910],
            label: 'Total hits',
            backgroundColor: ['#0077b6'],

        }]
    }
});
