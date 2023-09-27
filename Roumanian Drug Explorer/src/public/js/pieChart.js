// Datele din tabelul "tratament_droguri_varsta"
const data = [
  { drog: "alte halucinogene", an: 2019, sub_15: 2, intre_15_19: 1, intre_20_24: 3, intre_25_29: 4, intre_30_34: 5, intre_35_39: 6, intre_40_44: 7, intre_45_49: 8, intre_50_54: 9, intre_55_59: 10, intre_60_64: 11, peste_65: 12 },
  { drog: "alte halucinogene", an: 2020, sub_15: 3, intre_15_19: 2, intre_20_24: 4, intre_25_29: 5, intre_30_34: 6, intre_35_39: 7, intre_40_44: 8, intre_45_49: 9, intre_50_54: 10, intre_55_59: 11, intre_60_64: 12, peste_65: 13 },
  { drog: "alte halucinogene", an: 2021, sub_15: 3, intre_15_19: 5, intre_20_24: 4, intre_25_29: 5, intre_30_34: 6, intre_35_39: 7, intre_40_44: 8, intre_45_49: 9, intre_50_54: 10, intre_55_59: 11, intre_60_64: 12, peste_65: 13 },
  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru vârstă
function createVarstaPieChart() {
  const ctx = document.getElementById("varstaChart");
  const drog = "alte halucinogene"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Initial value for "an"

  const filteredData = data.filter(item => item.drog === drog && item.an === an);
  const labels = ["Sub 15", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "Peste 65"];
  const values = [
    filteredData[0].sub_15,
    filteredData[0].intre_15_19,
    filteredData[0].intre_20_24,
    filteredData[0].intre_25_29,
    filteredData[0].intre_30_34,
    filteredData[0].intre_35_39,
    filteredData[0].intre_40_44,
    filteredData[0].intre_45_49,
    filteredData[0].intre_50_54,
    filteredData[0].intre_55_59,
    filteredData[0].intre_60_64,
    filteredData[0].peste_65,
  ];
  const colors = [
    "#ffc2e5",
    "#3399ff",
    "#ee70a6",
    "#ffcc00",
    "#66cc99",
    "#ff6666",
    "#ff99cc",
    "#6666ff",
    "#99ccff",
    "#cc99ff",
    "#99ff99",
    "#ff9966"
  ];

  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });

  // Add event listener to the year-select dropdown
  document.getElementById("year-select").addEventListener("change", function() {
    an = parseInt(this.value); // Update the "an" variable with the selected year
    const updatedData = data.filter(item => item.drog === drog && item.an === an);
    chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
    chart.update(); // Update the chart
  });
}

// Apelarea funcției pentru crearea pie chart-ului
createVarstaPieChart();



//date tabel tratament_droguri_gen
const genData = [
  { drog: "alte halucinogene", an: 2019, masculin: 2, feminin: 1, necunoscut: 0, total: 3 },  //de scos total peste tot ca da peste cap graficele
  { drog: "alte halucinogene", an: 2020, masculin: 5, feminin: 1, necunoscut: 0, total: 3 },
  { drog: "alte halucinogene", an: 2021, masculin: 4, feminin: 0, necunoscut: 0, total: 4 },
  
  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru gen
function createGenPieChart() {
  const ctx = document.getElementById("genChart");
  const drog = "alte halucinogene"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = genData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Femei", "Bărbați", "Necunoscut"];
  const values = [
    filteredData[0].feminin,
    filteredData[0].masculin,
    filteredData[0].necunoscut
  ];
  const colors = ["#ffc2e5", "#3399ff", "#ee70a6"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
      an = parseInt(this.value); // Update the "an" variable with the selected year
      const updatedData = genData.filter(item => item.drog === drog && item.an === an);
      chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
      chart.update(); // Update the chart
    });
}
createGenPieChart();


//datele din tabelul tratament_droguri
const regTratData = [
  { drog: "alte halucinogene", an: 2019, regim_ambulatoriu: 1, regim_internare: 2, tratament_inchisori: 0},
  { drog: "alte halucinogene", an: 2020, regim_ambulatoriu: 2, regim_internare: 2, tratament_inchisori: 0},
  { drog: "alte halucinogene", an: 2021, regim_ambulatoriu: 4, regim_internare: 0, tratament_inchisori: 0},

  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru regim tratament
function createRegTratPieChart() {
  const ctx = document.getElementById("regTratChart");
  const drog = "alte halucinogene"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = regTratData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Reg Ambulatoriu", "Reg Internare", "Tratament Inchisori"];
  const values = [
    filteredData[0].regim_ambulatoriu,
    filteredData[0].regim_internare,
    filteredData[0].tratament_inchisori
  ];
  const colors = ["#a5ccb9", "#57bd8c", "#0f5c37"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
        an = parseInt(this.value); // Update the "an" variable with the selected year
        const updatedData = regTratData.filter(item => item.drog === drog && item.an === an);
        chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
        chart.update(); // Update the chart
      });
}
createRegTratPieChart();



//datele din tabelul tratament_droguri_referire
const referireData = [
  { drog: "Canabis (Total)", an: 2019, judecatorie_probatiune_politie: 1788, medici_de_familie: 27, alte_centre_tratament_droguri: 4, alte_servicii_medicale_sociale: 76, servicii_educationale: 2, proprie_initiativa_recomandarea_prietenilor: 276, altele: 138, nustiu_lipsa: 25},
  { drog: "Canabis (Total)", an: 2020, judecatorie_probatiune_politie: 1570, medici_de_familie: 9, alte_centre_tratament_droguri: 2, alte_servicii_medicale_sociale: 74, servicii_educationale: 3, proprie_initiativa_recomandarea_prietenilor: 195, altele: 61, nustiu_lipsa: 13},
  { drog: "Canabis (Total)", an: 2021, judecatorie_probatiune_politie: 1456, medici_de_familie: 300, alte_centre_tratament_droguri: 5, alte_servicii_medicale_sociale: 71, servicii_educationale: 1, proprie_initiativa_recomandarea_prietenilor: 217, altele: 40, nustiu_lipsa: 5},

  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru referire la tratament
function createReferirePieChart() {
  const ctx = document.getElementById("referireChart");
  const drog = "Canabis (Total)"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = referireData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Judecatorie/Probatiune/Politie", "Medici", "Alte centre tratament", "Alte servicii medicale", "Servicii educationale", "Proprie initiativa", "Altele", "Nu stiu/Lipsa"];
  const values = [
    filteredData[0].judecatorie_probatiune_politie,
    filteredData[0].medici_de_familie,
    filteredData[0].alte_centre_tratament_droguri,
    filteredData[0].alte_servicii_medicale_sociale,
    filteredData[0].servicii_educationale,
    filteredData[0].proprie_initiativa_recomandarea_prietenilor,
    filteredData[0].altele,
    filteredData[0].nustiu_lipsa
  ];
  const colors = ["#0a1633", "#243b73", "#4163b5", "#7294e8", "#91a0a3", "#787e80", "#52bcd1", "#156575"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });
  document.getElementById("year-select").addEventListener("change", function() {
        an = parseInt(this.value); // Update the "an" variable with the selected year
        const updatedData = referireData.filter(item => item.drog === drog && item.an === an);
        chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
        chart.update(); // Update the chart
      });
}
createReferirePieChart();


//datele din tabelul tip_locuinta
const tipLocuintaData = [
  { drog: "Canabis (Total)", an: 2019, locuinta_stabila: 2078, locuinta_instabila: 52, in_detentie: 69, altele: 110, nu_stiu_lipsa: 27},
  { drog: "Canabis (Total)", an: 2020, locuinta_stabila: 1783, locuinta_instabila: 15, in_detentie: 47, altele: 70, nu_stiu_lipsa: 12},
  { drog: "Canabis (Total)", an: 2021, locuinta_stabila: 1699, locuinta_instabila: 24, in_detentie: 66, altele: 0, nu_stiu_lipsa: 12},

  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru tip locuinta
function createLocuintaPieChart() {
  const ctx = document.getElementById("tipLocuintaChart");
  const drog = "Canabis (Total)"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = tipLocuintaData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Locuinta Stabila", "Locuinta Instabila", "In Detentie", "Altele", "Nu stiu/Lipsa"];
  const values = [
    filteredData[0].locuinta_stabila,
    filteredData[0].locuinta_instabila,
    filteredData[0].in_detentie,
    filteredData[0].altele,
    filteredData[0].nustiu_lipsa
  ];
  const colors = ["#280a3d", "#52157d", "#a569cf", "#be95db", "#bea9cc"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
          an = parseInt(this.value); // Update the "an" variable with the selected year
          const updatedData = tipLocuintaData.filter(item => item.drog === drog && item.an === an);
          chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
          chart.update(); // Update the chart
        });
}
createLocuintaPieChart();


//datele din tabelul tip_consum
const tipConsumData = [
  { drog: "Canabis", an: 2019, consum_singular: 516, consum_combinat: 263},
  { drog: "Canabis", an: 2020, consum_singular: 328, consum_combinat: 261},
  { drog: "Canabis", an: 2021, consum_singular: 344, consum_combinat: 264},

  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru tip consum
function createConsumPieChart() {
  const ctx = document.getElementById("tipConsumChart");
  const drog = "Canabis"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = tipConsumData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Consum singular", "Consum combinat"];
  const values = [
    filteredData[0].consum_singular,
    filteredData[0].consum_combinat
  ];
  const colors = ["#5c3656", "#c9b7c7"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
          an = parseInt(this.value); // Update the "an" variable with the selected year
          const updatedData = tipConsumData.filter(item => item.drog === drog && item.an === an);
          chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
          chart.update(); // Update the chart
        });
}
createConsumPieChart();


//datele din tabelul tratament_situatie_locativa
const sitLocativaData = [
  { drog: "Canabis (Total)", an: 2019, singur: 314, cu_familia_de_origine: 1381, cu_partenerul_cu_copiii: 321, cu_prietenii_cu_alte_persoane: 177, in_detentie: 67, in_adaposturi: 47, altele: 2, nustiu_lipsa: 27},
  { drog: "Canabis (Total)", an: 2020, singur: 256, cu_familia_de_origine: 1143, cu_partenerul_cu_copiii: 308, cu_prietenii_cu_alte_persoane: 95, in_detentie: 42, in_adaposturi: 22, altele: 45, nustiu_lipsa: 16},
  { drog: "Canabis (Total)", an: 2021, singur: 267, cu_familia_de_origine: 1027, cu_partenerul_cu_copiii: 351, cu_prietenii_cu_alte_persoane: 63, in_detentie: 65, in_adaposturi: 14, altele: 0, nustiu_lipsa: 14},



  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru sit locativa
function createSitLocPieChart() {
  const ctx = document.getElementById("sitLocativaChart");
  const drog = "Canabis (Total)"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = sitLocativaData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Singur", "Cu familia", "Cu partenerul", "Cu prietenii", "In detentie", "In adaposturi", "Altele", "Nu stiu/lipsa"];
  const values = [
    filteredData[0].singur,
    filteredData[0].cu_familia_de_origine,
    filteredData[0].cu_partenerul_cu_copiii,
    filteredData[0].cu_prietenii_cu_alte_persoane,
    filteredData[0].in_detentie,
    filteredData[0].in_adaposturi,
    filteredData[0].altele,
    filteredData[0].nustiu_lipsa
  ];
  const colors = ["#0a1633", "#243b73", "#4163b5", "#7294e8", "#91a0a3", "#787e80", "#52bcd1", "#156575"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });
  document.getElementById("year-select").addEventListener("change", function() {
          an = parseInt(this.value); // Update the "an" variable with the selected year
          const updatedData = sitLocativaData.filter(item => item.drog === drog && item.an === an);
          chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
          chart.update(); // Update the chart
        });
}
createSitLocPieChart();



//datele din tabelul studii
const nivEducationalData = [
  { drog: "Canabis (Total)", an: 2019, fara_studii: 86, studii_primare_absolvite: 517, studii_secundare_absolvite: 1632, studii_superioare_absolvite: 67, nu_stiu_lipsa: 34},
  { drog: "Canabis (Total)", an: 2020, fara_studii: 82, studii_primare_absolvite: 337, studii_secundare_absolvite: 1410, studii_superioare_absolvite: 65, nu_stiu_lipsa: 33},
  { drog: "Canabis (Total)", an: 2021, fara_studii: 82, studii_primare_absolvite: 337, studii_secundare_absolvite: 1410, studii_superioare_absolvite: 65, nu_stiu_lipsa: 33},


  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru studii
function createEducatiePieChart() {
  const ctx = document.getElementById("educatieChart");
  const drog = "Canabis (Total)"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = nivEducationalData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Fara studii", "Sudii primare", "Studii secundare", "Studii superioare", "Nu stiu/Lipsa"];
  const values = [
    filteredData[0].fara_studii,
    filteredData[0].studii_primare_absolvite,
    filteredData[0].studii_secundare_absolvite,
    filteredData[0].studii_superioare_absolvite,
    filteredData[0].nu_stiu_lipsa
  ];
  const colors = ["#280a3d", "#52157d", "#a569cf", "#be95db", "#bea9cc"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });
  document.getElementById("year-select").addEventListener("change", function() {
          an = parseInt(this.value); // Update the "an" variable with the selected year
          const updatedData = nivEducationalData.filter(item => item.drog === drog && item.an === an);
          chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
          chart.update(); // Update the chart
        });
}

createEducatiePieChart();




//datele din tabelul ocupatie
const ocupatieData = [
  { drog: "Canabis (Total)", an: 2019, anangajat_ocazional: 1011, angajat_permanent: 213, elev_student: 607, somer: 75, asistat_social_pensionar_casnic: 2, altele: 44, nu_stiu_lipsa: 384},
  { drog: "Canabis (Total)", an: 2020, anangajat_ocazional: 792, angajat_permanent: 164, elev_student: 423, somer: 81, asistat_social_pensionar_casnic: 5, altele: 0, nu_stiu_lipsa: 462},
  { drog: "Canabis (Total)", an: 2021, anangajat_ocazional: 792, angajat_permanent: 180, elev_student: 334, somer: 72, asistat_social_pensionar_casnic: 6, altele: 0, nu_stiu_lipsa: 417},


  // Restul datelor din tabel...
];

// Funcția pentru crearea pie chart-ului pentru ocupatie
function createOcupatiePieChart() {
  const ctx = document.getElementById("ocupatieChart");
  const drog = "Canabis (Total)"; // Drogul pentru care se dorește afișarea diagramei
  let an = 2019; // Anul pentru care se dorește afișarea diagramei

  const filteredData = ocupatieData.filter(item => item.drog === drog && item.an === an);
  const labels = ["Angajat ocazional", "Angajat permanent", "Elev/student", "Somer", "Asistat social/Pensionar/Casnic", "Altele", "Nu stiu/lipsa"];
  const values = [
    filteredData[0].anangajat_ocazional,
    filteredData[0].angajat_permanent,
    filteredData[0].elev_student,
    filteredData[0].somer,
    filteredData[0].asistat_social_pensionar_casnic,
    filteredData[0].altele,
    filteredData[0].nu_stiu_lipsa
  ];
  const colors = ["#280a3d", "#52157d", "#a569cf", "#be95db", "#bea9cc","#52bcd1", "#156575"];
  const chart = new Chart(ctx, {
    type: "doughnut",
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
    },
  });

  document.getElementById("year-select").addEventListener("change", function() {
          an = parseInt(this.value); // Update the "an" variable with the selected year
          const updatedData = ocupatieData.filter(item => item.drog === drog && item.an === an);
          chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
          chart.update(); // Update the chart
        });
}
createOcupatiePieChart();