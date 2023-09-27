// Datele din tabelul "urgente_medicale_sex"
const gendata = [
  { drog: "Canabis", an: 2019, masculin: 999 , feminin: 120 },
  { drog: "Canabis", an: 2020, masculin: 490 , feminin: 99},
  { drog: "Canabis", an: 2021, masculin: 497 , feminin: 111},
  // Restul datelor din tabel...
];

// Funcția pentru crearea clustered bar graph-ului pentru gen
function createGenBarChart() {
  const ctx = document.getElementById("genChart");
  const drog = "Canabis"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // anul initial

  const filteredData = gendata.filter(item => item.drog === drog && item.an === an);
  const labels = ["Feminin", "Masculin"];
  const values = [
        filteredData[0].feminin,
                filteredData[0].masculin
      ];
console.log('test');

const colors = ["#731666", "#134594"];

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: colors,
            },
          ],
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontFamily: "Trebuchet MS",
          fontSize: 12,
        },
      },
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    },
  });
  document.getElementById("year-select").addEventListener("change", function() {
            an = parseInt(this.value); // Update the "an" variable with the selected year
            const updatedData = gendata.filter(item => item.drog === drog && item.an === an);
            chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
            chart.update(); // Update the chart
          });
}

// Apelarea funcției pentru crearea clustered bar graph-ului
createGenBarChart();

// Datele din tabelul "urgente_medicale_varsta"
const varsdata = [
  { drog: "Canabis", an: 2019, sub_25: 460 , intre_25_34: 251, peste_35: 68},
  { drog: "Canabis", an: 2020, sub_25: 343 , intre_25_34: 187, peste_35: 59},
  { drog: "Canabis", an: 2021, sub_25: 332 , intre_25_34: 209, peste_35: 67},
  // Restul datelor din tabel...
];


// Funcția pentru crearea clustered bar graph-ului pentru varsta
function createVarstaBarChart() {
  const ctx = document.getElementById("varstaChart");
  const drog = "Canabis"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // anul initial

  const filteredData = varsdata.filter(item => item.drog === drog && item.an === an);
  const labels = ["Sub 25", "Intre 25-34", "Peste 35"];
  const values = [
        filteredData[0].sub_25,
        filteredData[0].intre_25_34,
        filteredData[0].peste_35
      ];


const colors = ["#af7fc9", "#6c328c", "#3e1257"];

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: colors,
            },
          ],
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontFamily: "Trebuchet MS",
          fontSize: 12,
        },
      },
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
              an = parseInt(this.value); // Update the "an" variable with the selected year
              const updatedData = varsdata.filter(item => item.drog === drog && item.an === an);
              chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
              chart.update(); // Update the chart
            });
}

// Apelarea funcției pentru crearea clustered bar graph-ului
createVarstaBarChart();


// Datele din tabelul "mod_administrare"
const admindata = [
  { drog: "Canabis", an: 2019, oral_fumat_prizat: 756 , injectabil: 0, altele: 23},
  { drog: "Canabis", an: 2020, oral_fumat_prizat: 571 , injectabil: 0, altele: 18},
  { drog: "Canabis", an: 2021, oral_fumat_prizat: 608 , injectabil: 0, altele: 0},
  // Restul datelor din tabel...
];



// Funcția pentru crearea clustered bar graph-ului pentru modul de administrare
function createAdministrareBarChart() {
  const ctx = document.getElementById("adminChart");
  const drog = "Canabis"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // anul initial

  const filteredData = admindata.filter(item => item.drog === drog && item.an === an);
  const labels = ["Oral/Fumat/Prizat", "Injectabil", "Altele"];
  const values = [
        filteredData[0].oral_fumat_prizat,
        filteredData[0].injectabil,
        filteredData[0].altele
      ];


const colors = ["#92c4d4", "#38788c", "#103c4a"];

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: colors,
            },
          ],
        },
    options: {

      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontFamily: "Trebuchet MS",
          fontSize: 12,
        },
      },
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
              an = parseInt(this.value); // Update the "an" variable with the selected year
              const updatedData = admindata.filter(item => item.drog === drog && item.an === an);
              chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
              chart.update(); // Update the chart
            });
}

// Apelarea funcției pentru crearea clustered bar graph-ului
createAdministrareBarChart();




// Datele din tabelul "tip_consum"
const consumdata = [
  { drog: "Canabis", an: 2019, consum_singular: 516 , consum_combinat: 263},
  { drog: "Canabis", an: 2020, consum_singular: 328 , consum_combinat: 261},
  { drog: "Canabis", an: 2021, consum_singular: 344 , consum_combinat: 264},
  // Restul datelor din tabel...
];



// Funcția pentru crearea clustered bar graph-ului pentru varsta
function createConsumBarChart() {
  const ctx = document.getElementById("consumChart");
  const drog = "Canabis"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // anul initial

  const filteredData = consumdata.filter(item => item.drog === drog && item.an === an);
  const labels = ["Consum Singular", "Consum Combinat"];
  const values = [
        filteredData[0].consum_singular,
        filteredData[0].consum_combinat
      ];


const colors = ["#915a69", "#401621"];

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: colors,
            },
          ],
        },
    options: {

      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontFamily: "Trebuchet MS",
          fontSize: 12,
        },
      },
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
              an = parseInt(this.value); // Update the "an" variable with the selected year
              const updatedData = consumdata.filter(item => item.drog === drog && item.an === an);
              chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
              chart.update(); // Update the chart
            });
}

// Apelarea funcției pentru crearea clustered bar graph-ului
createConsumBarChart();



// Datele din tabelul "diagnostic"
const diagnosticData = [
  { drog: "Canabis", an: 2019, intoxicatie: 543, utilizare_nociva: 14, dependenta: 39, sevraj: 100, tulburari_de_comportament: 132, supradoza: 1, alte_diagnostice: 0, testare_toxicologica: 42 },
  { drog: "Canabis", an: 2020, intoxicatie: 296, utilizare_nociva: 71, dependenta: 58, sevraj: 11, tulburari_de_comportament: 116, supradoza: 1, alte_diagnostice: 0, testare_toxicologica: 36 },
  { drog: "Canabis", an: 2021, intoxicatie: 239, utilizare_nociva: 101, dependenta: 63, sevraj: 16, tulburari_de_comportament: 137, supradoza: 0, alte_diagnostice: 0, testare_toxicologica: 52 },
  { drog: "NSP", an: 2019, intoxicatie: 50, utilizare_nociva: 16, dependenta: 96, sevraj: 27, tulburari_de_comportament: 122, supradoza: 3, alte_diagnostice: 0, testare_toxicologica: 30 },
  { drog: "NSP", an: 2020, intoxicatie: 100, utilizare_nociva: 56, dependenta: 64, sevraj: 13, tulburari_de_comportament: 67, supradoza: 0, alte_diagnostice: 0, testare_toxicologica: 6 },
  { drog: "NSP", an: 2021, intoxicatie: 367, utilizare_nociva: 43, dependenta: 67, sevraj: 5, tulburari_de_comportament: 105, supradoza: 0, alte_diagnostice: 0, testare_toxicologica: 6 },
  { drog: "Opiacee", an: 2019, intoxicatie: 60, utilizare_nociva: 5, dependenta: 296, sevraj: 32, tulburari_de_comportament: 12, supradoza: 5, alte_diagnostice: 0, testare_toxicologica: 3 },
  { drog: "Opiacee", an: 2020, intoxicatie: 38, utilizare_nociva: 17, dependenta: 85, sevraj: 26, tulburari_de_comportament: 10, supradoza: 2, alte_diagnostice: 0, testare_toxicologica: 3 },
  { drog: "Opiacee", an: 2021, intoxicatie: 47, utilizare_nociva: 32, dependenta: 39, sevraj: 17, tulburari_de_comportament: 15, supradoza: 3, alte_diagnostice: 0, testare_toxicologica: 2 },
  { drog: "Stimulanti", an: 2019, intoxicatie: 163, utilizare_nociva: 4, dependenta: 6, sevraj: 3, tulburari_de_comportament: 24, supradoza: 1, alte_diagnostice: 0, testare_toxicologica: 12 },
  { drog: "Stimulanti", an: 2020, intoxicatie: 106, utilizare_nociva: 25, dependenta: 16, sevraj: 4, tulburari_de_comportament: 32, supradoza: 0, alte_diagnostice: 0, testare_toxicologica: 8 },
  { drog: "Stimulanti", an: 2021, intoxicatie: 109, utilizare_nociva: 32, dependenta: 23, sevraj: 10, tulburari_de_comportament: 38, supradoza: 2, alte_diagnostice: 0, testare_toxicologica: 12 }
];

// Funcția pentru crearea clustered bar graph-ului pentru diagnostic
function createDiagnosticBarChart() {
  const ctx = document.getElementById("diagnosticChart");
  let drog = "Canabis"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = diagnosticData.filter(item => item.drog === drog && item.an === an);
  const labels = Object.keys(filteredData[0]).slice(2); // Excludem drog și an din etichetele graficului
  const values = Object.values(filteredData[0]).slice(2);

  const colors = ["#915a69", "#401621", "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF9F40", "#9966FF", "#C9CBCF"];

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: colors,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });


  function handleBarChartUpdate() {             //functie actualizare in functie de datele de la butonul drog si cel de an
    const an = parseInt(document.getElementById("year-select").value);
    const drug = String(document.getElementById("drug-select").value);

    const updatedData = diagnosticData.filter(item => item.drog === drug && item.an === an);
    chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
    chart.update(); // Update the chart
  }

  document.getElementById("year-select").addEventListener("change", handleBarChartUpdate);
  document.getElementById("drug-select").addEventListener("change", handleBarChartUpdate);


}

// Apelarea funcției pentru crearea clustered bar graph-ului
createDiagnosticBarChart();

// Crearea diagramă verticală


function handleBarChartUpdate() {
    const an = parseInt(document.getElementById("year-select").value);
    const tip = String(document.getElementById("type-select").value);

    const updatedData = pozitiviData.filter(item => item.an === an && item.tip === tip);
    chart.data.datasets[0].data = Object.values(updatedData[0]).slice(3); // Update chart data
    chart.update(); // Update the chart
  }

  document.getElementById("year-select").addEventListener("change", handleBarChartUpdate);
  document.getElementById("type-select").addEventListener("change", handleBarChartUpdate);

