window.addEventListener("load", statsEventListeners);

function statsEventListeners() {
  const lastTenList = sortLastTenRounds();
  renderChart(lastTenList);
  console.log(lastTenList);
}

function sortLastTenRounds() {
  let lastTenList = [];
  const highscoreList = JSON.parse(localStorage.getItem("highscore")).guesses;
  for (let i = highscoreList.length - 1; i >= highscoreList.length - 10; i--) {
    lastTenList.push(highscoreList[i]);
  }
  return lastTenList;
}

function renderChart(lastTenList) {
  const options = {
    colors: ["#ff79c6"],
    title: {
      text: "Last 10 won rounds",
      align: "left",
      margin: 10,
      floating: false,
      style: {
        fontSize: "25px",
        fontFamily: "inherit",
        color: "#fdf9de",
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Number of guesses",
        data: lastTenList.reverse(),
      },
    ],
    xaxis: {
      name: "Last rounds",
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      style: {
        color: "#fdf9de",
      },
      title: {
        text: "Last round",
        style: {
          color: "#bd93f9",
          fontSize: "16px",
        },
      },
    },
    stroke: {
      curve: "straight",
    },
    yaxis: {
      tickAmount: 6,
      min: 0,
      max: 6,
      axisTicks: {
        color: "#bd93f9",
      },
      title: {
        text: "Number of guesses",
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#bd93f9",
          fontSize: "16px",
        },
      },
    },
  };

  var chart = new ApexCharts(
    document.querySelector("#chartContainer"),
    options
  );

  chart.render();
}
