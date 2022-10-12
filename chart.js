const ctx = document.querySelector('#chart').getContext("2d");

const myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        onClick: (e) => {

        }
    },
    data: {
        labels: ['STR_ENG1', 'STR_ENG2', 'STR_ENG3', 'STR_ENG4', 'STR_PROP', 'STR_WING_ROT', 'STR_FUSE', 'STR_LG', 'STR_TAIL', 'STR_LGHTS'],
        datasets: [{
            data: [12673, 10573, 474, 230, 4618, 31335, 24153, 11367, 2732, 1357],
            label: 'Total hits',
            backgroundColor: ['#0077b6'],

        }]
    }
});
