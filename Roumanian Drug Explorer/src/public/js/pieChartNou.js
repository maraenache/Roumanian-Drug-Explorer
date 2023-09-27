//trb modificat sa fie ptr tabelul si tipul bun

const getBarChartData = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/barChart`, {
      method: "GET",
    })
    const result = await response.json();
    return result;
  };
  
  let drog = "Canabis"; 
  let an = 2019;
  let genData =[]
  let chart = {}
  const renderChart = async (data) => {
    
  
    
      const ctx = document.getElementById("genChart");
      
      const filteredData = genData.filter(item => item.drog === drog && item.an === an);
      const labels = ["Masculin", "Feminin"];
      const values = [
            filteredData[0].masculin,
            filteredData[0].feminin
          ];
    
    const colors = [ "#134594","#731666"];
    
       chart = new Chart(ctx, {
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
      
  }
  
  const renderYearSelectOptions = () => {
    const years = new Set(genData.map(item => item.an));
    const yearSelectNode = document.getElementById("year-select");
    yearSelectNode.innerHTML = ""; // Clear existing options before adding new ones
  
    years.forEach(year => {
      const yearOption = `<option value="${year}">${year}</option>`;
      yearSelectNode.insertAdjacentHTML("beforeend", yearOption);
    });
  };
  
  
  const renderDrugSelectOptions = () => {
    const drugs = new Set(genData.map(item => item.drog))
    const drugSelectNode = document.getElementById("drug-select");
    drugSelectNode.innerHTML="";
    drugs.forEach(drug => {
  
      const drugOption = `<option value="${drug}">${drug}</option>`
      drugSelectNode.insertAdjacentHTML("beforeend", drugOption )
    })
  }
  
  const updateChartData = (an, drog) => {
    let updatedData = []
    if(genData){
      updatedData = genData.filter(item => item.drog === drog && item.an === an);
    }
    console.log("updated", updatedData)
    chart.data.datasets[0].data = Object.values(updatedData[0]).slice(2); // Update chart data
    chart.update(); 
  }
  
  document.getElementById("year-select").addEventListener("change", function() {
    an = parseInt(this.value); // Update the "an" variable with the selected year
    updateChartData(an,drog)
  });
  
  document.getElementById("drug-select").addEventListener("change", function() {
    drog = String(this.value); // Update the "drog" variable with the selected year
    updateChartData(an, drog)
  });
  
  const renderPageElements = async () => {
    genData = await getBarChartData()
  
  
    renderChart();
    renderYearSelectOptions();
    renderDrugSelectOptions();
  }
  
  renderPageElements()