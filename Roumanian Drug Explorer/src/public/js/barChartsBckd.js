const chartSelect = document.getElementById("chart-select");

chartSelect.addEventListener("change", function() {
  const selectedOption = chartSelect.options[chartSelect.selectedIndex];
  const selectedURL = selectedOption.value;
  window.location.href = selectedURL;
});

// convertire catre csv
const convertToCSV = (chartData) => {
  const header = Object.keys(chartData[0]).join(",");
  const rows = chartData.map(data => Object.values(data).join(","));
  return header + "\n" + rows.join("\n");
};

// start descarcare
const downloadCSV = (csvData, fileName) => {
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};



// Attach click event listener to the export button
const exportButtonCSV = document.getElementById("exportButtonCSV");
exportButtonCSV.addEventListener("click", async () => {
  // preiau datele de la fiecare chart
  const chartData1 = await getBarChartData();
  const chartData2 = await getBarChartData1();
  const chartData3 = await getBarChartData2();
  const chartData4 = await getBarChartData3();
  const chartData5 = await getBarChartData4();

  // convertire ptr fiecare din charturi
  const csvData1 = convertToCSV(chartData1);
  const csvData2 = convertToCSV(chartData2);
  const csvData3 = convertToCSV(chartData3);
  const csvData4 = convertToCSV(chartData4);
  const csvData5 = convertToCSV(chartData5);

  // combin datele 
  const combinedCSVData = csvData1 + "\n\n" + csvData2 + "\n\n" + csvData3 + "\n\n" + csvData4 + "\n\n" + csvData5;


  const fileName = "BarCharts_data.csv";
  downloadCSV(combinedCSVData, fileName);
});


// convertire la JSON
const convertToJSON = (chartData) => {
  return JSON.stringify(chartData);
};

// start descarcare
const downloadJSON = (jsonData, fileName) => {
  const blob = new Blob([jsonData], { type: "application/json;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};



// event listener ptr buton
const exportButtonJSON = document.getElementById("exportButtonJSON");
exportButtonJSON.addEventListener("click", async () => {
  // date ptr fiecare chart
  const chartData1 = await getBarChartData();
  const chartData2 = await getBarChartData1();
  const chartData3 = await getBarChartData2();
  const chartData4 = await getBarChartData3();
  const chartData5 = await getBarChartData4();

  // convertire ptr datele din fiecare chart
  const jsonData1 = convertToJSON(chartData1);
  const jsonData2 = convertToJSON(chartData2);
  const jsonData3 = convertToJSON(chartData3);
  const jsonData4 = convertToJSON(chartData4);
  const jsonData5 = convertToJSON(chartData5);

  // combinare date
  const combinedJSONData = {
    chart1: JSON.parse(jsonData1),
    chart2: JSON.parse(jsonData2),
    chart3: JSON.parse(jsonData3),
    chart4: JSON.parse(jsonData4),
    chart5: JSON.parse(jsonData5)
  };


  const fileName = "BarCharts_data.json";
  downloadJSON(JSON.stringify(combinedJSONData), fileName);
});



const getBarChartData = async () => {
  const response = await fetch(`http://localhost:3000/api/urgente-medicale-gen`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
};
const getBarChartData1 = async () => {
  const response = await fetch(`http://localhost:3000/api/urgente-medicale-varsta`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
};
const getBarChartData2 = async () => {
  const response = await fetch(`http://localhost:3000/api/mod-administrare`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
};
const getBarChartData3 = async () => {
  const response = await fetch(`http://localhost:3000/api/tip-consum`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
};
const getBarChartData4 = async () => {
  const response = await fetch(`http://localhost:3000/api/diagnostic`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
};

let drog = "Canabis";
let an = 2019;
let genData = [];
let varstaData = [];
let modAdministrareData =[];
let tipConsumData=[];
let diagnosticData=[];
let chart1 = {};
let chart2 = {};
let chart3={};
let chart4={};
let chart5={};

const renderChart = async (data1, data2, data3, data4, data5) => {
  const ctx1 = document.getElementById("genChart1");
  const ctx2 = document.getElementById("genChart2");
  const ctx3= document.getElementById("modAdministrareChart");
  const ctx4= document.getElementById("tipConsumChart");
  const ctx5= document.getElementById("diagnosticChart");

  // Diagrama pentru `http://localhost:3000/api/barChart`
  const labels1 = ["Masculin", "Feminin"];
  const values1 = [data1.masculin, data1.feminin];
  console.log('aici',data1.masculin)
  console.log('aici2',data1.feminin)

  const colors1 = ["#1D7679", "#1D7679"];
  console.log(values1); 
  chart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: labels1,
      datasets: [
        {
          data: values1,
          backgroundColor: colors1,
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
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      } , plugins: {
        title: {
          display: true,
          text: "Distribuția cazurilor de urgențe medicale datorate consumului de droguri, în funcție de tipul drogului și sex",
          fontFamily: "Trebuchet MS",
          fontSize: 16,
          position: "top",
        },
      },
    },
  });

  // Diagrama pentru `http://localhost:3000/api/urgMedVarsta`
  const labels2 = ["Sub 25", "25-34", "Peste 35"];
  const values2 = [data2.sub_25, data2.intre_25_34, data2.peste_35];
  const colors2 = ["#D6AD3B"];

  chart2 = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: labels2,
      datasets: [
        {
          data: values2,
          backgroundColor: colors2,
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
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      }, plugins: {
        title: {
          display: true,
          text: "Distribuția cazurilor de urgențe medicale datorate consumului de droguri, în funcție de tipul drogului și vârstă",
          fontFamily: "Trebuchet MS",
          fontSize: 16,
          position: "top",
        },
      },
    },
  });

  // Diagrama pentru `http://localhost:3000/api/modAdministrare`
  const labels3 = ["Oral/Fumat/Prizat", "Injectabil", "Altele"];
  const values3 = [data3.oral_fumat_prizat, data3.injectabil, data3.altele];
  const colors3 = ["#C48143"];

  chart3 = new Chart(ctx3, {
    type: "bar",
    data: {
      labels: labels3,
      datasets: [
        {
          data: values3,
          backgroundColor: colors3,
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
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },plugins: {
        title: {
          display: true,
          text: "Distribuția cazurilor de urgențe medicale datorate consumului de droguri, în funcție de tipul drogului și calea de administrare",
          fontFamily: "Trebuchet MS",
          fontSize: 16,
          position: "top",
        },
      },
    },
  });

  // Diagrama pentru `http://localhost:3000/api/tipConsum`
  const labels4 = ["Consum Singular", "Consum Regulat"];
  const values4 = [data4.consum_singular, data4.consum_regulat];
  const colors4 = ["#2F5F98"];

 chart4 = new Chart(ctx4, {
   type: "bar",
   data: {
     labels: labels4,
     datasets: [
       {
         data: values4,
         backgroundColor: colors4,
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
         beginAtZero: true,
       },
       y: {
         beginAtZero: true,
       },
     },plugins: {
      title: {
        display: true,
        text: "Distribuția cazurilor de urgențe medicale datorate consumului de droguri, în funcție de tipul drogului și modelul de consum",
        fontFamily: "Trebuchet MS",
        fontSize: 16,
        position: "top",
      },
    },
   },
 });

 
const labels5 = ["Intoxicatie","Utilizare nociva","Dependenta","Sevraj","Tulburari de comportament","Supradoza","Alte diagnostice","Testare toxicologica"];
const values5 = [ data5.intoxicatie, data5.utilizare_nociva, data5.dependenta,data5.sevraj, data5.tulburari_de_comportament,
data5.supradoza,
data5.alte_diagnostice,
data5.testare_toxicologica];
  const colors5 = ["#895273"];

 chart5 = new Chart(ctx5, {
   type: "bar",
   data: {
     labels: labels5,
     datasets: [
       {
         data: values5,
         backgroundColor: colors5,
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
         beginAtZero: true,
       },
       y: {
         beginAtZero: true,
       },
     },plugins: {
      title: {
        display: true,
        text: "Distribuția cazurilor de urgențe medicale datorate consumului de droguri, în funcție de tipul drogului și diagnosticul de urgență",
        fontFamily: "Trebuchet MS",
        fontSize: 16,
        position: "top",
      },
    },
   },
 });
 const ctx11 = ctx1.getContext("2d");
 const ctx12 = ctx2.getContext("2d");
 const ctx13 = ctx3.getContext("2d");
 const ctx14 = ctx4.getContext("2d");
 const ctx15 = ctx5.getContext("2d");

 addExportButton("exportButtonPNG1", ctx11, "png", "chart1");
 addExportButton("exportButtonSVG1", ctx11, "svg", "chart1");
 
 addExportButton("exportButtonPNG2", ctx12, "png", "chart2");
 addExportButton("exportButtonSVG2", ctx12, "svg", "chart2");

 addExportButton("exportButtonPNG3", ctx13, "png", "chart3");
 addExportButton("exportButtonSVG3", ctx13, "svg", "chart3");

 addExportButton("exportButtonPNG4", ctx14, "png", "chart4");
 addExportButton("exportButtonSVG4", ctx14, "svg", "chart4");

 addExportButton("exportButtonPNG5", ctx15, "png", "chart5");
 addExportButton("exportButtonSVG5", ctx15, "svg", "chart5");

};

// Function to convert a canvas element to SVG data URL
function canvasToSvgDataURL(canvas) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const canvasImage = new Image();

  canvasImage.src = canvas.toDataURL("image/png");

  const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
  svgImage.setAttribute("width", canvas.width/1.6);
  svgImage.setAttribute("height", canvas.height/1.6);
  svgImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvasImage.src);

  svg.appendChild(svgImage);

  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svg);

  return "data:image/svg+xml," + encodeURIComponent(svgString);
}

// Function to download SVG
function downloadSvg(canvas, fileName) {
  const svgDataUrl = canvasToSvgDataURL(canvas);

  const downloadLink = document.createElement("a");
  downloadLink.href = svgDataUrl;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}









const renderYearSelectOptions = () => {
  const years = new Set(genData.map((item) => item.an));
  const yearSelectNode = document.getElementById("year-select");
  yearSelectNode.innerHTML = ""; // Clear existing options before adding new ones

  years.forEach((year) => {
    const yearOption = `<option value="${year}">${year}</option>`;
    yearSelectNode.insertAdjacentHTML("beforeend", yearOption);
  });
};

const renderDrugSelectOptions = () => {
  const drugs = new Set(genData.map((item) => item.drog));
  const drugSelectNode = document.getElementById("drug-select");
  drugSelectNode.innerHTML = "";
  drugs.forEach((drug) => {
    const drugOption = `<option value="${drug}">${drug}</option>`;
    drugSelectNode.insertAdjacentHTML("beforeend", drugOption);
  });
};

const updateChartData = async (an, drog) => {
  const genDataItem = genData.find((item) => item.drog === drog && item.an === an);
  const varstaDataItem = varstaData.find((item) => item.drog === drog && item.an === an);
  const modAdministrareDataItem= modAdministrareData.find((item) => item.drog === drog && item.an === an);
  const tipConsumDataItem= tipConsumData.find((item) => item.drog === drog && item.an === an);
  const diagnosticDataItem =diagnosticData.find((item) => item.drog === drog && item.an === an);
  // Actualizare date pentru diagrama 1 - `http://localhost:3000/api/barChart`
  chart1.data.datasets[0].data = [genDataItem.masculin, genDataItem.feminin];
  chart1.update();

  // Actualizare date pentru diagrama 2 - `http://localhost:3000/api/urgMedVarsta`
  chart2.data.datasets[0].data = [varstaDataItem.sub_25, varstaDataItem.intre_25_34, varstaDataItem.peste_35];
  chart2.update();

  // Actualizare date pentru diagrama 3 - `http://localhost:3000/api/modAdministrare`
  chart3.data.datasets[0].data = [modAdministrareDataItem.oral_fumat_prizat, modAdministrareDataItem.injectabil, modAdministrareDataItem.altele];
  chart3.update();

  // Actualizare date pentru diagrama 4 - `http://localhost:3000/api/tipConsum`
  chart4.data.datasets[0].data = [tipConsumDataItem.consum_singular, tipConsumDataItem.consum_regulat];
  chart4.update();

  // Actualizare date pentru diagrama 4 - `http://localhost:3000/api/diagnostic`
  chart5.data.datasets[0].data = [
    diagnosticDataItem.intoxicatie,
    diagnosticDataItem.utilizare_nociva,
    diagnosticDataItem.dependenta,
    diagnosticDataItem.sevraj, 
    diagnosticDataItem.tulburari_de_comportament,
    diagnosticDataItem.supradoza,
    diagnosticDataItem.alte_diagnostice,
    diagnosticDataItem.testare_toxicologica
  ];

  chart5.update();
};

document.getElementById("year-select").addEventListener("change", function () {
  an = parseInt(this.value); // Actualizare variabila "an" cu anul selectat
  updateChartData(an, drog);
});

document.getElementById("drug-select").addEventListener("change", function () {
  drog = String(this.value); // Actualizare variabila "drog" cu drogul selectat
  updateChartData(an, drog);
});


// Funcția pentru exportul diagramei ca SVG
function exportSvg(ctx, chartId) {
  const canvas = ctx.canvas;
  const fileName = `chart_${chartId}.svg`;
  downloadSvg(canvas, fileName);
}

// Funcția pentru adăugarea butoanelor de export
function addExportButton(buttonId, ctx, format, chartId) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    if (format === "png") {
      exportChart(ctx, format, chartId);
    } else if (format === "svg") {
      exportSvg(ctx, chartId);
    } else {
      console.error("Formatul de export specificat nu este suportat.");
    }
  });
}

// Funcția pentru exportul diagramei în formatul specificat
function exportChart(ctx, format, chartId) {
  let imageData;
  let extension;
  if (format === "png") {
    imageData = ctx.canvas.toDataURL("image/png");
    extension = "png";
  } else {
    console.error("Formatul de export specificat nu este suportat.");
    return;
  }

  const downloadLink = document.createElement("a");
  downloadLink.href = imageData;
  downloadLink.download = `chart_${chartId}.${extension}`;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}



const renderPageElements = async () => {
  genData = await getBarChartData();
  varstaData = await getBarChartData1();
  modAdministrareData = await getBarChartData2();
  tipConsumData = await getBarChartData3();
  diagnosticData = await getBarChartData4();

  const data1 = genData[0];
  const data2 = varstaData[0];
  const data3 = modAdministrareData[0];
  const data4 = tipConsumData[0];
  const data5 = diagnosticData[0];

  renderChart(data1, data2, data3, data4, data5);
  renderYearSelectOptions();
  renderDrugSelectOptions();
};

renderPageElements();
