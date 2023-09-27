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


  const fileName = "ClusteredCharts_data.csv";
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


  const fileName = "ClusteredCharts_data.json";
  downloadJSON(JSON.stringify(combinedJSONData), fileName);
});



const getBarChartData = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/boli-gen`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };

  const getBarChartData1 = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/boli-varsta`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };

  const getBarChartData2 = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/prima-injectare`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };

 const getBarChartData3 = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/drog-principal`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };
  const getBarChartData4 = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/tip-admitere`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };

let categorie = "pozitivi";
let an = 2019;

let genData = [];
let chart1 = {};
let varstaData=[];
let chart2={};
let injectare=[];
let chart3={};
let drogPrincipal=[];
let chart4={};

let tipAdmitere=[];
let chart5={};


const renderPie = async () => {
    const ctx1 = document.getElementById("genChart6");
    const labels = ['VHC', 'HIV', 'VHB'];
    const datasets = [
      {
        label: 'Masculin',
        backgroundColor: '#3e95cd',
        data: genData.map(item => item.masculin)
      },
      {
        label: 'Feminin',
        backgroundColor: '#8e5ea2',
        data: genData.map(item => item.feminin)
      }
    ];
    console.log('gendata',genData)
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          precision: 0
        },
        y: {
          beginAtZero: true,
          precision: 0
        }
      },plugins: {
        title: {
          display: true,
          text: "Boli infectioase asociate consumului de droguri injectabile in functie de gen",
          fontFamily: "Trebuchet MS",
          fontSize: 16,
          position: "top",
        }}
    };
    chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: options
    });

    const ctx2 = document.getElementById("genChart7");
    const labels2 = ['VHC', 'HIV', 'VHB'];
    const datasets2 = [
      {
        label: 'Sub 25',
        backgroundColor: '#1D7679',
        data: varstaData.map(item => item.sub_25)
      },
      {
        label: '25-34',
        backgroundColor: '#D6AD3B',
        data: varstaData.map(item => item.age_25_34)
      },
      {
        label: 'Peste 34',
        backgroundColor: '#2F5F98',
        data: varstaData.map(item => item.peste_34)
      }
    ];       

    const options2 = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          precision: 0
        },
        y: {
          beginAtZero: true,
          precision: 0
        }
      },plugins: {
            title: {
              display: true,
              text: "Boli infectioase asociate consumului de droguri injectabile in functie de varsta",
              fontFamily: "Trebuchet MS",
              fontSize: 16,
              position: "top",
            }}
    };
    chart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: labels2,
        datasets: datasets2
      },
      options: options2
    });



    const ctx3 = document.getElementById("genChart8");
    const labels3 = ['VHC', 'HIV', 'VHB'];

    const datasets3 = [
      {
        label: 'Sub 2',
        backgroundColor: '#1D7679',
        data: injectare.map(item => item.sub_2)
      },
      {
        label: 'Intre 2-5',
        backgroundColor: '#C48143',
        data: injectare.map(item => item.intre_2_5)
      },
      {
        label: 'Intre 5-10',
        backgroundColor: '#31356E',
        data: injectare.map(item => item.intre_5_10)
      },
      {
        label: 'Peste 10',
        backgroundColor: '#895273',
        data: injectare.map(item => item.peste_10)
      }
    ];
    const options3 = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          precision: 0
        },
        y: {
          beginAtZero: true,
          precision: 0
        }
      },plugins: {
        title: {
          display: true,
          text: "Boli infectioase asociate consumului de droguri injectabile in functie de timpul trecut de la prima injectare (ani)",
          fontFamily: "Trebuchet MS",
          fontSize: 16,
          position: "top",
        }}
    };
    chart3=  new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: labels3,
        datasets: datasets3
      },
      options: options3
    });

    const ctx4 = document.getElementById("genChart9");
    const labels4 = ['VHC', 'HIV', 'VHB'];
    const datasets4 = [
      {
        label: "Opioide",
        backgroundColor: "#A27273",
        data: drogPrincipal.map(item => item.opioide)
      },
      {
        label: "Altele",
        backgroundColor: "#2D8BBA",
        data: drogPrincipal.map(item => item.altele)
      }
    ];
  
    const options4 = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          precision: 0
        },
        y: {
          beginAtZero: true,
          precision: 0
        }
      },plugins: {
        title: {
          display: true,
          text: "Boli infectioase asociate consumului de droguri injectabile in functie de drogul principal de consum",
          fontFamily: "Trebuchet MS",
          fontSize: 16,
          position: "top",
        }}
    };
    chart4=new Chart(ctx4, {
      type: 'bar',
      data: {
        labels: labels4,
        datasets: datasets4
      },
      options: options4
    });

    const ctx5 = document.getElementById("genChart10");
    const labels5 = ['VHC', 'HIV', 'VHB'];
    const datasets5 = [
      {
        label: "Primul tratament",
        backgroundColor: "#C48143",
        data: tipAdmitere.map(item => item.primul_tratament)
      },
      {
        label: "A mai fost la tratament",
        backgroundColor: "#2D8BBA",
        data: tipAdmitere.map(item => item.a_mai_fost_la_tratament)
      }
    ];
  
    const options5 = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          precision: 0
        },
        y: {
          beginAtZero: true,
          precision: 0
        }
      },plugins: {
        title: {
          display: true,
          text: "Boli infectioase asociate consumului de droguri injectabile in functie de tipul admiterii la tratament pentru consum de droguri",
          fontFamily: "Trebuchet MS",
          fontSize: 16,
          position: "top",
        }}
    };
    chart5=  new Chart(ctx5, {
      type: 'bar',
      data: {
        labels: labels5,
        datasets: datasets5
      },
      options: options5
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


const renderYearSelectOptions = () => {
    const years = new Set(genData.map((item) => item.an));
    const yearSelectNode = document.getElementById("year-select");
    yearSelectNode.innerHTML = ""; // Clear existing options before adding new ones
  
    years.forEach((year) => {
      const yearOption = `<option value="${year}">${year}</option>`;
      yearSelectNode.insertAdjacentHTML("beforeend", yearOption);
    });
  };

  const renderCategSelectOptions = () => {
    const categorii = new Set(genData.map((item) => item.categorie));
    const categorieSelectNode = document.getElementById("categorie-select");
    categorieSelectNode.innerHTML = "";
    categorii.forEach((categorie) => {
      const categorieOption = `<option value="${categorie}">${categorie}</option>`;
      categorieSelectNode.insertAdjacentHTML("beforeend", categorieOption);
    });
  };

  const updateChartData = async (an, categorie) => {
    const dataItems = genData.filter((item) => item.categorie === categorie && item.an === an);
    
    const masculinData = dataItems.map((item) => item.masculin);
    const femininData = dataItems.map((item) => item.feminin);
  
    chart1.data.datasets[0].data = masculinData;
    chart1.data.datasets[1].data = femininData;
    chart1.update();

    const varstaItems = varstaData.filter((item) => item.categorie === categorie && item.an === an);
    console.log('aici', varstaItems)
    const sub_25= varstaItems.map((item)=>item.sub_25)
    const age_25_34= varstaItems.map((item)=>item.age_25_34)
    const peste_34= varstaItems.map((item)=>item.peste_34)
    console.log('sub 25',sub_25)
    console.log('25 -34', age_25_34)
    console.log('peste 34',peste_34)
    chart2.data.datasets[0].data = sub_25;
    chart2.data.datasets[1].data = age_25_34;
    chart2.data.datasets[2].data = peste_34;
    chart2.update();

    const injectareItems=injectare.filter((item) => item.categorie === categorie && item.an === an);
    const sub_2=injectareItems.map((item)=>item.sub_2)
    const intre_2_5=injectareItems.map((item)=>item.intre_2_5)
    const intre_5_10=injectareItems.map((item)=>item.intre_5_10)
    const peste_10=injectareItems.map((item)=>item.peste_10)
    chart3.data.datasets[0].data = sub_2;
    chart3.data.datasets[1].data = intre_2_5;
    chart3.data.datasets[2].data = intre_5_10;
    chart3.data.datasets[3].data = peste_10;

   chart3.update();

   const drogPrincipalItem=drogPrincipal.filter((item) => item.categorie === categorie && item.an === an);
   const opioide=drogPrincipalItem.map((item)=>item.opioide);
   const altele=drogPrincipalItem.map((item)=>item.altele);
   chart4.data.datasets[0].data = opioide;
   chart4.data.datasets[1].data = altele;

   chart4.update();

   const tipAdmitereItem=tipAdmitere.filter((item) => item.categorie === categorie && item.an === an);
   const primul_tratament=tipAdmitereItem.map((item)=>item.primul_tratament);
   const a_mai_fost_la_tratament=tipAdmitereItem.map((item)=>item.a_mai_fost_la_tratament);
console.log('procent',tipAdmitereItem)
   chart5.data.datasets[0].data = primul_tratament;
   chart5.data.datasets[1].data = a_mai_fost_la_tratament;

   chart5.update();

  };
  
  

  document.getElementById("year-select").addEventListener("change", function () {
    an = parseInt(this.value); // Actualizare variabila "an" cu anul selectat
    updateChartData(an, categorie);
  });
  document.getElementById("categorie-select").addEventListener("change", function () {
    categorie = String(this.value); 
    updateChartData(an, categorie);
  });

  const renderPageElements = async () => {
   genData = await getBarChartData();
   varstaData= await getBarChartData1();
   injectare=await getBarChartData2();
   drogPrincipal=await getBarChartData3();
   tipAdmitere= await getBarChartData4();
   renderPie();
   renderYearSelectOptions();
   renderCategSelectOptions(); 
  };  
  renderPageElements();