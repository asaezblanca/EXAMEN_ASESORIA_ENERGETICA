document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cif = document.getElementById('cif').value;
    const nombre = document.getElementById('nombre').value;
    const comercializadora = document.getElementById('comercializadora').value;
    const estado = document.getElementById('estado').value;

    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            let filteredData = data.filter(contrato => {
                return (!cif || (typeof contrato.CIF === 'string' && contrato.CIF.includes(cif))) &&
                       (!nombre || (typeof contrato.NOMBRE === 'string' && contrato.NOMBRE.includes(nombre))) &&
                       (!comercializadora || (typeof contrato.COMERCIALIZADORA === 'string' && contrato.COMERCIALIZADORA.includes(comercializadora))) &&
                       (!estado || (typeof contrato.ESTADO === 'string' && contrato.ESTADO.includes(estado)));
            });

            let resultados = document.getElementById('resultados').querySelector('.card-body');
            resultados.innerHTML = '';
            filteredData.forEach(contrato => {
                resultados.innerHTML += `
                    <div class="result">
                        <p>CIF: ${contrato.CIF}</p>
                        <p>Nombre: ${contrato.NOMBRE}</p>
                        <p>CUPS: ${contrato.CUPS}</p>
                        <p>Tarifa: ${contrato.TARIFA}</p>
                        <p>Comercializadora: ${contrato.COMERCIALIZADORA}</p>
                        <p>Comercial: ${contrato.COMERCIAL}</p>
                        <p>Estado: ${contrato.ESTADO}</p>
                        <p>Acciones: ${contrato.ACCIONES || 'N/A'}</p>
                        <p>Fecha: ${contrato.FECHA}</p>
                        <p>Pagado: ${contrato.PAGADO || 'N/A'}</p>
                    </div>
                    <hr>
                `;
            });

            let comercializadoras = [...new Set(filteredData.map(contrato => contrato.COMERCIALIZADORA))];
            let contratosPorComercializadora = comercializadoras.map(com => {
                return filteredData.filter(contrato => contrato.COMERCIALIZADORA === com).length;
            });

            var ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: comercializadoras,
                    datasets: [{
                        label: 'Número de contratos',
                        data: contratosPorComercializadora,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error:', error));
});
