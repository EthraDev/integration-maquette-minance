function Onclick() {
    let navbar = document.querySelector('.navbar-section-1')
    let div1 = document.querySelector('.main-div-1')

    navbar.addEventListener('click', function(){
        if (div1.style.display == "none") {
            div1.style.display = 'block'
            div1.style.position = 'absolute'
            div1.style.background = 'black'
            div1.style.zIndex = '10'
            div1.style.top = '10%'
            div1.style.left = '0'
        } else {
            div1.style.display = 'none'
            div1.style.position = 'relative'
            div1.style.background = 'black'
            div1.style.zIndex = '10'
        }
    })
}

Onclick()

function Onclick2() {
    let navbar = document.querySelector('.navbar-section-3')
    let div3 = document.querySelector('.main-div-3')

    navbar.addEventListener('click', function(){
        if (div3.style.display == "none") {
            div3.style.display = 'block'
            div3.style.position = 'absolute'
            div3.style.background = 'black'
            div3.style.zIndex = '10'
            div3.style.top = '12%'
            div3.style.right = '0'
        } else {
            div3.style.display = 'none'
            div3.style.position = 'relative'
            div3.style.background = 'black'
            div3.style.zIndex = '10'
        }
    })

}

Onclick2()

let graph = document.getElementById('graph').getContext('2d')

new Chart(graph, {
    type: 'line',
    data: {
        labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Nov', '14Nov', '15Nov'],
        datasets: [
            {
                label: 'ETH',
                data: [100, 600, 240, 250, 120, 360, 210, 700, 150, 400, 350],
                borderColor: '#592795',
                backgroundColor: 'transparent'
            },

            {
                label: 'BTC',
                data: [null, null, null, null, 110, 420, 150, 350, 300, 410, 200],
                borderColor: '#1970D6',
                backgroundColor: 'transparent'
            },

            {
                label: 'BTC',
                data: [null, 210, 650, 350, 530, 490, 600, 400],
                borderColor: '#4D91A5',
                backgroundColor: 'transparent'
            }
        ]
    },
    options: {
        legend: {
            display: false,
        }
        
    }
})