import Header from "./Header";
import Footer from "./Footer";
import LeaderBoard from "./LeaderBoard";

const Community = () => {
  const leaderboardData = [
    { name: 'Alice', contribution: 120 },
    { name: 'Bob', contribution: 200 },
    { name: 'Charlie', contribution: 150 },
    { name: 'David', contribution: 180 },
    { name: 'Eve', contribution: 90 },
  ];

  return (
    <div className="relative">
      <Header />
      <div className="relative h-auto py-48 bg-gray-200">
        <LeaderBoard data={leaderboardData} />
      </div>
      <Footer />
    </div>
  )
}

export default Community;