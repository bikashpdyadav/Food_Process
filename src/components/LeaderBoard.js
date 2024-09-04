const LeaderBoard = ({ data }) => {
    const sortedData = data.sort((a, b) => b.contribution - a.contribution);

    return (
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <h1 className="text-xl sm:text-2xl font-bold text-center p-4">Leaderboard</h1>
            <ul className="divide-y divide-gray-200">
                {sortedData.map((person, index) => (
                    <li key={index} className="p-4 flex justify-between items-center">
                        <span className="text-sm sm:text-base font-medium">{person.name}</span>
                        <span className="text-xs sm:text-sm md:text-base text-gray-600">{person.contribution} points</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaderBoard;
