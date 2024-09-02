import Header from './Header';
import Footer from './Footer';
import BarChart from './BarChart';
import LineGraph from './LineGraph';
import ScatterChart from './ScatterChart';
import PieChart from './PieChart';

const Charts = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-wrap items-center justify-center gap-8 pt-24'>
        <BarChart />
        <PieChart />
        <LineGraph />
        <ScatterChart />
      </div>
      <Footer />
    </div>
  )
}

export default Charts;