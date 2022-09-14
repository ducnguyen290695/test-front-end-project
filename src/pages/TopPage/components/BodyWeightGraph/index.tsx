import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartData,
  ChartOptions,
} from 'chart.js'
import styles from './index.module.scss'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

interface BodyWeightGraphProps {
  className?: string
}

const BodyWeightGraph = (props: BodyWeightGraphProps) => {
  const { className } = props

  const data: ChartData<any> = {
    labels: [
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [900, 800, 700, 750, 700, 800, 400, 400, 400, 300, 400, 400],
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21',
      },
      {
        label: 'Dataset 2',
        data: [900, 750, 700, 650, 600, 400, 300, 900, 200, 300, 900, 700],
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
      },
    ],
  }

  const options: ChartOptions<any> = {
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          color: '#777777',
          drawBorder: false,
        },
        ticks: {
          color: 'white',
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <Line height={'100%'} options={options} data={data} />
    </div>
  )
}

export default BodyWeightGraph
