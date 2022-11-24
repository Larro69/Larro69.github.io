const printCharts = () => {

    renderModelsCharts()

}

const renderModelsCharts = () =>{
        
    const data = {

        labels: ['uno','dos','tres'],
        datasets: [{
            data: [40, 20, 30]
        }]
        

    }

    new Chart('modelsChart', { type:'dougnut', data})

}

printCharts()