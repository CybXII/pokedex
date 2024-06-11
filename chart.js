function buildChart(index) {
  let pokemonIndex = fetchPokemons['id'].indexOf(index);
  let pokeLabel = fetchPokemons['name'][pokemonIndex];
  let data =  buildDataJson(pokemonIndex,pokeLabel);
  renderChart(index);
  createChart(data);
}


function createChart(data){
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'polarArea',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 1
        }
      }
    },
  });
}


//Json Builder Funktion  könnte ich noch runter brechen aber dann wird das Json unübersichtlich
function buildDataJson(pokemonIndex,pokeLabel){
  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Special-Attack', 'Special-Defense', 'Speed'],
    datasets: [{
      label: pokeLabel,
      data: [
        fetchPokemons['stats'][pokemonIndex][0]['base_stat'],
        fetchPokemons['stats'][pokemonIndex][1]['base_stat'],
        fetchPokemons['stats'][pokemonIndex][2]['base_stat'],
        fetchPokemons['stats'][pokemonIndex][3]['base_stat'],
        fetchPokemons['stats'][pokemonIndex][4]['base_stat'],
        fetchPokemons['stats'][pokemonIndex][5]['base_stat'],
      ],
      fill: true,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ],
    }]
  };
  return data
}