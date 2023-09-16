function fetchCountryData(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => data[0]) 
        .catch(error => {
            console.error('Erro na solicitação à API:', error);
            throw error;
        });
}

    //Itália info
    fetchCountryData('italia')
    .then(data => {
        document.getElementById('italia-capital').textContent = data.capital || 'Desconhecida';
        document.getElementById('italia-populacao').textContent = data.population || 'Desconhecida';
        document.getElementById('italia-fronteiras').textContent = data.borders.join(', ') || 'Nenhuma';
    })
    .catch(error => {
        console.error('Erro ao buscar dados da Itália:', error);
    });

    //França info
    fetchCountryData('france')
    .then(data => {
        document.getElementById('franca-capital').textContent = data.capital || 'Desconhecida';
        document.getElementById('franca-populacao').textContent = data.population || 'Desconhecida';
        document.getElementById('franca-fronteiras').textContent = data.borders.join(', ') || 'Nenhuma';
    })
    .catch(error => {
        console.error('Erro ao buscar dados da França:', error);
    });

    //Reino unido info
    fetchCountryData('United Kingdom')
    .then(data => {
        document.getElementById('UK-capital').textContent = data.capital || 'Desconhecida';
        document.getElementById('UK-populacao').textContent = data.population || 'Desconhecida';
        document.getElementById('UK-fronteiras').textContent = data.borders.join(', ') || 'Nenhuma';
    })
    .catch(error => {
        console.error('Erro ao buscar dados do Reino Unido:', error);
    });

    //Espanha info
    fetchCountryData('españa')
    .then(data => {
        document.getElementById('espanha-capital').textContent = data.capital || 'Desconhecida';
        document.getElementById('espanha-populacao').textContent = data.population || 'Desconhecida';
        document.getElementById('espanha-fronteiras').textContent = data.borders.join(', ') || 'Nenhuma';
    })
    .catch(error => {
        console.error('Erro ao buscar dados da Espanha:', error);
    });

    //Grécia info
    fetchCountryData('Greece')
    .then(data => {
        document.getElementById('grecia-capital').textContent = data.capital || 'Desconhecida';
        document.getElementById('grecia-populacao').textContent = data.population || 'Desconhecida';
        document.getElementById('grecia-fronteiras').textContent = data.borders.join(', ') || 'Nenhuma';
    })
    .catch(error => {
        console.error('Erro ao buscar dados da Grécia:', error);
    });

    //Turquia info
    fetchCountryData('Türkiye')
    .then(data => {
        document.getElementById('turquia-capital').textContent = data.capital || 'Desconhecida';
        document.getElementById('turquia-populacao').textContent = data.population || 'Desconhecida';
        document.getElementById('turquia-fronteiras').textContent = data.borders.join(', ') || 'Nenhuma';
    })
    .catch(error => {
        console.error('Erro ao buscar dados da Turquia:', error);
    });