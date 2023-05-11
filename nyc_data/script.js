// HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50000';

fetch(url)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))


// QUERY, MANIPULATE, VISUALIZE THE DATASET
const playWithData = data => {

	console.log(data);
	// how many instances were QUAA-ING?
	const quaas = data.filter(item => item.quaas == true).length;
	const kuks = data.filter(item => item.kuks == true).length;
	const moans = data.filter(item => item.moans == true).length;
	const running = data.filter(item => item.running == true).length;
	const eating = data.filter(item => item.eating == true).length;
	const foraging = data.filter(item => item.foraging == true).length;
	const chasing = data.filter(item => item.chasing == true).length;
	const climbing = data.filter(item => item.climbing == true).length;

	const dataLabels = ['quaas', 'kuks', 'moans', 'running', 'eating', 'foraging', 'chasing', 'climbing'];
	const dataValues = [quaas, kuks, moans, running, eating, foraging, chasing, climbing];


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	  type: 'doughnut',
	  data: {
		labels: ['MIXED/OTHER', 'CHIHUAHUA', 'SHIHTZU', 'GERMAN SHEPHERD', 'YORKSHIRE', 'AMERICAN PITBULL MIXED', 'MALTESE', 'PITBULL'],
		datasets: [
			{
				label: '# of Most Amount of Dogs',
				data: [quaas, kuks, moans, running, eating, foraging, chasing, climbing],
				borderColor: '#4dc9f6',
				backgroundColor: ['rgb(74, 41, 29)','rgb(150, 150, 250)','rgb(255, 9, 0)','rgb(120, 114, 111)','rgb(61, 26, 13)','','rgb(255, 159, 254)','rgb(130, 100, 89)'],
				borderWidth: 1
			}
		]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});

}
  
