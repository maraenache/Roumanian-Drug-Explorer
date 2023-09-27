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
  const chartData6 = await getBarChartData5();
  const chartData7 = await getBarChartData6();
  const chartData8 = await getBarChartData7();

  // convertire ptr fiecare din charturi
  const csvData1 = convertToCSV(chartData1);
  const csvData2 = convertToCSV(chartData2);
  const csvData3 = convertToCSV(chartData3);
  const csvData4 = convertToCSV(chartData4);
  const csvData5 = convertToCSV(chartData5);
  const csvData6 = convertToCSV(chartData6);
  const csvData7 = convertToCSV(chartData7);
  const csvData8 = convertToCSV(chartData8);

  // combin datele 
  const combinedCSVData = csvData1 + "\n\n" + csvData2 + "\n\n" + csvData3 + "\n\n" + csvData4 + "\n\n" + csvData5 + "\n\n" + csvData6 + "\n\n" + csvData7 + "\n\n" + csvData8;


  const fileName = "PieCharts_data.csv";
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
  const chartData6 = await getBarChartData5();
  const chartData7 = await getBarChartData6();
  const chartData8 = await getBarChartData7();

  // convertire ptr datele din fiecare chart
  const jsonData1 = convertToJSON(chartData1);
  const jsonData2 = convertToJSON(chartData2);
  const jsonData3 = convertToJSON(chartData3);
  const jsonData4 = convertToJSON(chartData4);
  const jsonData5 = convertToJSON(chartData5);
  const jsonData6 = convertToJSON(chartData6);
  const jsonData7 = convertToJSON(chartData7);
  const jsonData8 = convertToJSON(chartData8);

  // combinare date
  const combinedJSONData = {
    chart1: JSON.parse(jsonData1),
    chart2: JSON.parse(jsonData2),
    chart3: JSON.parse(jsonData3),
    chart4: JSON.parse(jsonData4),
    chart5: JSON.parse(jsonData5),
    chart6: JSON.parse(jsonData6),
    chart7: JSON.parse(jsonData7),
    chart8: JSON.parse(jsonData8)
  };


  const fileName = "PieCharts_data.json";
  downloadJSON(JSON.stringify(combinedJSONData), fileName);
});



const getBarChartData = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/tratDrogGen`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };

  const getBarChartData1 = async () => {
    const response = await fetch(`http://localhost:3000/api/tratDrogVarsta`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };
  const getBarChartData2 = async () => {
    const response = await fetch(`http://localhost:3000/api/tratSitLoc`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };
  const getBarChartData4 = async () => {
    const response = await fetch(`http://localhost:3000/api/tratOcupatie`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };
  const getBarChartData5 = async () => {
    const response = await fetch(`http://localhost:3000/api/tratStudii`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };
  const getBarChartData6 = async () => {
    const response = await fetch(`http://localhost:3000/api/tratTipLoc`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };
  const getBarChartData7 = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/tratDrogRef`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };


  const getBarChartData3 = async () => {
    const response = await fetch(`http://localhost:3000/api/tratDroguri`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };



  ///--------------------------------------------------------------
let drog = "Opioide total";
let an = 2019;
let genData = [];
let chart1 = {};
let varstaData = [];
let chart2 = {};
let chart3 = {};
let locatie = [];
let ocupatie=[];
let tipLoc=[];
let studii=[];
let ref=[];

let trat=[];
let chart4={};
let chart5=[];
let chart6=[];
let chart7=[];
let chart8=[];
const renderPie = async (data1,data2,data3,data4, data5, data6,data7,data8) => {
    const ctx1 = document.getElementById("genChart3");
    const ctx2 = document.getElementById("genChart4");
    const ctx3 = document.getElementById("genChart5");
    const ctx4=document.getElementById("genChart6");
    const ctx5=document.getElementById("genChart7");
    const ctx6=document.getElementById("genChart8");
    const ctx7=document.getElementById("genChart9");
    const ctx8=document.getElementById("genChart10");

    console.log('aici')
    // Diagrama pentru `http://localhost:3000/api/pieChart`
    const labels3 = ["Masculin", "Feminin", "Necunoscut"];
    const values3 = [data1.masculin, data1.feminin, data1.necunoscut];
    const colors3 = ["#134594", "#731666", "#731866"];
  
    chart1 = new Chart(ctx1, {
      type: "doughnut",
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
        plugins: {
          title: {
            display: true,
            text: "Admiterile la tratament, in functie de drogul principal de consum si sex",
            fontFamily: "Trebuchet MS",
            fontSize: 16,
            position: "top",
          },
        },
      },
    });
    // Diagrama pentru `http://localhost:3000/api/tratDrogVarsta`
    const labels4 = ["Sub 15", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "Peste 65"];
    const values4 = [
        data2.sub_15,
        data2.intre_15_19,
        data2.intre_20_24,
        data2.intre_25_29,
        data2.intre_30_34,
        data2.intre_35_39,
        data2.intre_40_44,
        data2.intre_45_49,
        data2.intre_50_54,
        data2.intre_55_59,
        data2.intre_60_64,
        data2.peste_65,
      ];
      const colors4 = [
        "#1D7679",
        "#D6AD3B",
        "#C48143",
        "#2F5F98",
        "#31356E",
        "#5E3967",
        "#895273",
        "#B97286",
        "#A27273",
        "#9F5C49",
        "#2D8BBA",
        "#41B8D5"
      ];
       chart2 = new Chart(ctx2, {
        type: "doughnut",
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
          plugins: {
            title: {
              display: true,
              text: "Admiterile la tratament, in functie de drogul principal de consum si categoria de varsta",
              fontFamily: "Trebuchet MS",
              fontSize: 16,
              position: "top",
            },
          },
        },
      });
    // Diagrama pentru `http://localhost:3000/api/tratSitLoc`
    const labels5 = ["Singur", "Cu familia", "Cu partenerul", "Cu prietenii", "In detentie", "In adaposturi", "Altele", "Nu stiu/lipsa"];
    const values5 = [
        data3.singur,
        data3.cu_familia_de_origine,
        data3.cu_partenerul_cu_copiii,
        data3.cu_prietenii_cu_alte_persoane,
        data3.in_detentie,
        data3.in_institutii_adaposturi,
        data3.altele,
        data3.nustiu_lipsa
      ];
      const colors5 = ["#0a1633", "#243b73", "#4163b5", "#7294e8", "#91a0a3", "#787e80", "#52bcd1", "#156575"];
      chart3 = new Chart(ctx3, {
        type: "doughnut",
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
          }, plugins: {
            title: {
              display: true,
              text: "Admiterile la tratament, în funcție de drogul principal de consum și de condițiile de locuit - situația locativă",
              fontFamily: "Trebuchet MS",
              fontSize: 16,
              position: "top",
            },
          },
        },
      });
      const labels7 = ["Angajat ocazional", "Angajat permanent", "Elev/Student", "Somer", "Asistat Social/Pensionar/Casnic", "In adaposturi", "Altele", "Nu stiu/lipsa"];
    const values7 = [
        data5.angajat_ocazional,
        data5.angajat_permanent,
        data5.elev_student,
        data5.somer,
        data5.asistat_social_pensionar_casnic,,
        data5.altele,
        data5.nu_stiu_lipsa
      ];
      const colors7 = ["#7294e8", "#3A6AA0", "#4B5C7A", "#DDE4E9", "#B95F89", "#71133F", "#2F252A", "#1D7679"];
      chart5 = new Chart(ctx5, {
        type: "doughnut",
        data: {
          labels: labels7,
          datasets: [
            {
              data: values7,
              backgroundColor: colors7,
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
          }, plugins: {
            title: {
              display: true,
              text: "Admiterile la tratament, în funcție de drogul principal de consum și statusul ocupațional",
              fontFamily: "Trebuchet MS",
              fontSize: 16,
              position: "top",
            },
          },
        },
      });
      const labels8 = ["Fara studii", "Studii Primare", "Studii secundare", "Studii superioare", "Nu stiu/lipsa"];
       const values8 = [
        data6.fara_studii,
        data6.studii_primare_absolvite,
        data6.studii_secundare_absolvite,
        data6.studii_superioare_absolvite,
        data6.nu_stiu_lipsa
      ];
      const colors8 = ["#C48143", "#AF1B3F", "#473144", "#4E937A", "#C7F2A7"];
      chart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
          labels: labels8,
          datasets: [
            {
              data: values8,
              backgroundColor: colors8,
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
          }, plugins: {
            title: {
              display: true,
              text: "Admiterile la tratament, în funcție de drogul principal de consum și nivelul educațional",
              fontFamily: "Trebuchet MS",
              fontSize: 16,
              position: "top",
            },
          },
        },
      });



      const labels9 = ["Locuinta stabila", "Locuinta Instabila", "In detentie", "Altele", "Nu stiu/lipsa"];
      const values9 = [
       data7.locuinta_stabila,
       data7.locuinta_instabila,
       data7.in_detentie,
       data7.altele,
       data7.nu_stiu_lipsa
     ];
     const colors9 = ["#9F5C49", "#AAACB0", "#87968B", "#BFEDC1", "#FFB400"];
     chart7 = new Chart(ctx7, {
       type: "doughnut",
       data: {
         labels: labels9,
         datasets: [
           {
             data: values9,
             backgroundColor: colors9,
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
         }, plugins: {
           title: {
             display: true,
             text: "Admiterile la tratament, în funcție de drogul principal de consum și de condițiile de locuit - tipul locuinței",
             fontFamily: "Trebuchet MS",
             fontSize: 16,
             position: "top",
           },
         },
       },
     });
      
      
     const labels10 = ["Judecatorie/Probatiune/Politie", "Medici de familie", "Centre Tratament", "Servicii medicale sociale", "Servicii educationale","Proprie initiativa","Altele","Nu stiu/lipsa"];
      const values10 = [
       data8.judecatorie_probatiune_politie,
       data8.medici_de_familie,
       data8.alte_centre_tratament_droguri,
       data8.alte_servicii_medicale_sociale,
       data8.servicii_educationale,
       data8.proprie_initiativa_recomandarea_prietenilor,
       data8.altele,
       data8.nustiu_lipsa
     ];
     const colors10 = ["#A27273", "#01295F", "#437F97", "#849324", "#FFB30F","#90650A", "#616A27", "#653839"];
     chart8 = new Chart(ctx8, {
       type: "doughnut",
       data: {
         labels: labels10,
         datasets: [
           {
             data: values10,
             backgroundColor: colors10,
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
         }, plugins: {
           title: {
             display: true,
             text: "Admiterile la tratament, în funcție de drogul principal de consum și sursa de referire",
             fontFamily: "Trebuchet MS",
             fontSize: 16,
             position: "top",
           },
         },
       },
     });
      
      
      console.log('vine')
      const labels6 = ["Reg Ambulatoriu", "Reg Internare", "Tratament Inchisori"];
      const values6 = [
        data4.regim_ambulatoriu,
        data4.regim_internare,
        data4.tratament_inchisori
      ];

      const colors6 = ["#6b8578", "#3d8562", "#094025"];
      chart4= new Chart(ctx4, {
        type: "doughnut",
        data: {
          labels: labels6,
          datasets: [
            {
              data: values6,
              backgroundColor: colors6,
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
          }, plugins: {
            title: {
              display: true,
              text: "Admiterile la tratament, în funcție de drogul principal de consum și regimul de tratament",
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
      const ctx16 = ctx6.getContext("2d");
      const ctx17 = ctx7.getContext("2d");
      const ctx18 = ctx8.getContext("2d");

     
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

      addExportButton("exportButtonPNG6", ctx16, "png", "chart6");
      addExportButton("exportButtonSVG6", ctx16, "svg", "chart6");

      addExportButton("exportButtonPNG7", ctx17, "png", "chart7");
      addExportButton("exportButtonSVG7", ctx17, "svg", "chart7");

      addExportButton("exportButtonPNG8", ctx18, "png", "chart8");
      addExportButton("exportButtonSVG8", ctx18, "svg", "chart8");

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








//---------------------------------------------------------------------------------
const renderYearSelectOptions = () => {
    const years = new Set(genData.map((item) => item.an));
    const yearSelectNode = document.getElementById("year-select");
    yearSelectNode.innerHTML = ""; // Clear existing options before adding new ones
  
    years.forEach((year) => {
      const yearOption = `<option value="${year}">${year}</option>`;
      yearSelectNode.insertAdjacentHTML("beforeend", yearOption);
    });
  };
  const renderYearSelectOptions2 = () => {
    const years2 = new Set(locatie.map((item) => item.an));
    const yearSelectNode2 = document.getElementById("year-select2");
    yearSelectNode2.innerHTML = ""; // Clear existing options before adding new ones
  
    years2.forEach((year) => {
      const yearOption2 = `<option value="${year}">${year}</option>`;
      yearSelectNode2.insertAdjacentHTML("beforeend", yearOption2);
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
  const renderDrugSelectOptions2 = () => {
    const drugs2 = new Set(locatie.map((item) => item.drog));
    const drugSelectNode2 = document.getElementById("drug-select2");
    drugSelectNode2.innerHTML = "";
    drugs2.forEach((drug) => {
      const drugOption2 = `<option value="${drug}">${drug}</option>`;
      drugSelectNode2.insertAdjacentHTML("beforeend", drugOption2);
    });
  };
 const updateChartData = async (an, drog) => {
  const genDataItem = genData.find((item) => item.drog === drog && item.an === an);
  const varstaDataItem = varstaData.find((item) => item.drog === drog && item.an === an);
  const tratItem= trat.find((item) => item.drog === drog && item.an === an);
 
   console.log('OKK',ocupatieItem)

  // Actualizare date pentru diagrama 1 - `http://localhost:3000/api/barChart`
  chart1.data.datasets[0].data = [genDataItem.masculin, genDataItem.feminin];
  chart1.update();

  // Actualizare date pentru diagrama 2 - `http://localhost:3000/api/urgMedVarsta`
  if (varstaDataItem) {
    chart2.data.datasets[0].data = [
      varstaDataItem.sub_15,
      varstaDataItem.intre_15_19,
      varstaDataItem.intre_20_24,
      varstaDataItem.intre_25_29,
      varstaDataItem.intre_30_34,
      varstaDataItem.intre_35_39,
      varstaDataItem.intre_40_44,
      varstaDataItem.intre_45_49,
      varstaDataItem.intre_50_54,
      varstaDataItem.intre_55_59,
      varstaDataItem.intre_60_64,
    ];
    chart2.update();
  }
  chart4.data.datasets[0].data = [tratItem.regim_ambulatoriu, tratItem.regim_internare, tratItem.tratament_inchisori];
  chart4.update();

  
};


//------------------------part2
const updateChartData2 = async (an, drog) => {
    const locatieItem= locatie.find((item) => item.drog === drog && item.an === an);
    const ocupatieItem=ocupatie.find((item) => item.drog === drog && item.an === an);
    const studiiItem=studii.find((item) => item.drog === drog && item.an === an);
    const tipLocItem=tipLoc.find((item) => item.drog === drog && item.an === an);
    const refItem=ref.find((item) => item.drog === drog && item.an === an);

    // Actualizare date pentru diagrama 3 - `http://localhost:3000/api/tratSitLoc`
    chart3.data.datasets[0].data = [locatieItem.singur, locatieItem.cu_familia_de_origine,locatieItem.cu_partenerul_cu_copiii,locatieItem.cu_prietenii_cu_alte_persoane,locatieItem.in_detentie,locatieItem.iin_institutii_adaposturi,locatieItem.altele,locatieItem.nustiu_lipsa];
    chart3.update();

    
    chart5.data.datasets[0].data = [ocupatieItem.angajat_ocazional, ocupatieItem.angajat_permanent, ocupatieItem.elev_student, ocupatieItem.somer, ocupatieItem.asistat_social_pensionar_casnic, ocupatieItem.altele, ocupatieItem.nu_stiu_lipsa];
  chart5.update();

  chart6.data.datasets[0].data = [studiiItem.fara_studii, studiiItem.studii_primare_absolvite, studiiItem.studii_secundare_absolvite, studiiItem.studii_superioare_absolvite,studiiItem.nu_stiu_lipsa];
  chart6.update();

  chart7.data.datasets[0].data = [tipLocItem.locuinta_stabila, tipLocItem.locuinta_instabila, tipLocItem.in_detentie,tipLocItem.altele,tipLocItem.nu_stiu_lipsa];
  chart7.update();
  
  chart8.data.datasets[0].data = [refItem.judecatorie_probatiune_politie, refItem.medici_de_familie, refItem.alte_centre_tratament_droguri,
    refItem.alte_servicii_medicale_sociale,refItem.servicii_educationale,refItem.proprie_initiativa_recomandarea_prietenilor,refItem.altele,refItem.nu_stiu_lipsa];
  chart8.update();

  };
  
  document.getElementById("year-select").addEventListener("change", function () {
    an = parseInt(this.value); // Actualizare variabila "an" cu anul selectat
    updateChartData(an, drog);
  });
  document.getElementById("year-select2").addEventListener("change", function () {
    an = parseInt(this.value); // Actualizare variabila "an" cu anul selectat
    updateChartData2(an, drog);
  }); 
  document.getElementById("drug-select").addEventListener("change", function () {
    drog = String(this.value); // Actualizare variabila "drog" cu drogul selectat
    updateChartData(an, drog);
  });
  document.getElementById("drug-select2").addEventListener("change", function () {
    drog = String(this.value); // Actualizare variabila "drog" cu drogul selectat
    updateChartData2(an, drog);
  });
  
  
  
  const renderPageElements = async () => {
    genData = await getBarChartData();
    varstaData = await getBarChartData1();
    locatie=await getBarChartData2();
    ocupatie=await getBarChartData4();
    trat=await getBarChartData3();
    studii = await getBarChartData5();
    tipLoc=await getBarChartData6();
    ref=await getBarChartData7();
    const data1 = genData[0];
    const data2 = varstaData[0];
    const data3=locatie[0];
    const data4=trat[0];
    const data5=ocupatie[0];
    const data6=studii[0];
    const data7=tipLoc[0];
    const data8=ref[0];
   console.log('data5',data5);
    renderPie(data1,data2,data3,data4, data5, data6,data7,data8);
    renderYearSelectOptions();
    renderDrugSelectOptions();
    renderYearSelectOptions2();
    renderDrugSelectOptions2();
  };  
  renderPageElements();