import apiData from './mocker'
import {useEffect, useState, useRef} from 'react'
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import "../../assets/css/monitor.css"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const getTotalCost = type => {
    let total = 0;

    Object.values(apiData.cost).forEach(cost => {
        total += cost[type];
    })

    return total;
}

const getWarningColor = (progress) => {
    if (progress >= 80) return 'red'
    else if (progress >= 70) return 'orange'
    else if (progress >= 60) return 'yellow'
    else return'#4CAF50'
}

const Monitor = () => {
    const myRef = useRef(null);
    const [progressIntervalId, setProgressIntervalId] = useState(-1)

    useEffect(() => {
        if (progressIntervalId === -1) {
            const id = setInterval(() => {
                const el = document.getElementById('card-list')
                if (el) {
                    el.childNodes.forEach((item, index) => {
                        const progressEl = item.querySelector('#progress' + index);
                        const width = progressEl.style.width.split('%')[0]
                        if (width > 100) clearInterval(progressIntervalId)
                        progressEl.style.width = width + Math.floor(Math.random() * 10) + '%'
                    })
                }
            }, 5000);

            setProgressIntervalId(id)
        }

        return () => {
            if (progressIntervalId !== -1) clearInterval(progressIntervalId)
        }
    }, [])

  const barData = {
    labels: Object.keys(apiData.carbonEmission),
    datasets: [
      {
        label: '일회용품',
        backgroundColor: '#8BC34A',
        data: Object.values(apiData.carbonEmission).map(emission => emission.singleUse),
      },
      {
        label: '다회용품',
        backgroundColor: '#388E3C',
        data: Object.values(apiData.carbonEmission).map(emission => emission.multiUse),
      },
    ],
  };

  const pieData = {
    labels: ['다회용품', '일회용품'],
    datasets: [
      {
        data: [getTotalCost('multiUse'), getTotalCost('singleUse')],
        backgroundColor: ['#4CAF50', '#8BC34A'],
        hoverBackgroundColor: ['#388E3C', '#BDBDBD'],
      },
    ],
  };

  const doughnutData = {
    labels: ['다회용품'],
    datasets: [
      {
        data: [getTotalCost('multiUse'), getTotalCost('singleUse')],
        backgroundColor: ['#8BC34A', '#E0E0E0'],
        hoverBackgroundColor: ['#388E3C', '#BDBDBD'],
      },
    ],
  };

  const lineData = {
    labels: Object.keys(apiData.usage),
    datasets: [
      {
        label: '사용량',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'lightblue',
        data: Object.values(apiData.usage).map(usage => usage.use),
        fill: true,
      },
      {
        label: '반환량',
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: '#8BC34A',
        data: Object.values(apiData.usage).map(usage => usage.return),
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div style={{gap: '50px'}} className="main-content direction-column">
        <div className="chart-container">
          <div className="chart-header">
            <h3>탄소배출량(g)</h3>
          </div>
          <Bar data={barData} />
        </div>

        <h2>비용 비교(₩)</h2>
        <div className="statistics direction-row center-sender">
          <div className="pie-chart">
            <Pie data={pieData} />
          </div>

          {/* <div className="progress-circle">
            <h3>다회용품</h3>
            <Doughnut data={doughnutData} />
          </div> */}
        </div>
        
        <div className="infographic">
          <h2>사용량 / 반환량</h2>
          <div className="area-chart">
            <Line data={lineData} />
          </div>
        </div>
        
        <div style={{width: '100%'}} className="overview">
          <h2>수거함 용량(%)</h2>
          <div id="card-list" style={{flexWrap: 'wrap'}} className="direction-row">
            {apiData.volume.map((item, index) => (
                <div key={index} className="card">
                    <div style={{justifyContent: 'space-between'}} className="direction-row">
                        <h2 className="card-title">{item.title}</h2>
                        <div className="warning-icon">
                            <div style={{backgroundColor: getWarningColor(item.progress), color: 'white', fontSize: '13px'}} className="circle center-sender">!</div>
                        </div>
                    </div>
                    <div>
                        <p className="card-content">{item.content}</p>
                        <div className="progress-bar">
                            <div id={'progress' + index} className="progress-bar-fill" style={{ width: `${item.progress}%`, backgroundColor: getWarningColor(item.progress) }}></div>
                        </div>
                    </div>
                </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitor;