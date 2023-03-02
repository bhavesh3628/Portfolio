const ctx = document.getElementById("myChart").getContext("2d");

let delayed;

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1");
gradient.addColorStop(1, "rgba(0,210,255, 0.3)");


const labels = [

      "My SQL",
      "Reactjs",
      "API Testing",
      "Figma",
      "MongoDB",
      "Bootstrap",
      "HTML & CSS",
      "Flutter",
      "Javascript",
      "C programming",
];

const data = {
      labels,
      datasets: [{
            data: [45, 29, 35, 91, 57, 84, 89, 34, 79, 49],
            label: 'Knowledge',
            fill: false,
            backgroundColor: gradient,
            borderColor: "#2C2E43",
            pointBackgroundColor: ["#E90064", "#FF5F9E", "#E8D2A6", "#1F8A70", "#FC7300", "#B8FFF9", "#42C2FF", "#A66CFF", "#9F73AB", "#686D76"],
            tension: 0.025,
      },
      ],
};

const config = {
      type: 'line',
      data: data,
      options: {
            hitRadius: 50,
            hoverRadius: 14,
            radius: 6,
            responsive: true,
            animation: {
                  onComplete: () => {
                        delayed = true;
                  },
                  delay: (context) => {
                        let delay = 0;
                        if (context.type === "data" && context.mode === "default" && !delayed) {
                              delay = context.dataIndex * 300 + context.datasetIndex * 100;
                        }
                        return delay;
                  },
            },
            scales: {
                  y: {
                        ticks: {
                              callback: function (value) {
                                    return value + '%';
                              },
                        },
                  },
            },
      },
};

const myChart = new Chart(ctx, config);