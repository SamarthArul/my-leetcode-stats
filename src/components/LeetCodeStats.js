export default function LeetCodeStats({ stats }) {
    // Check if stats exist and have the expected structure
    const hasStats = stats && 
                    stats.submitStats && 
                    stats.submitStats.acSubmissionNum;
    
    // Extract stats or use defaults
    let easyCount = 0;
    let mediumCount = 0;
    let hardCount = 0;
    let totalCount = 0;
    
    // LeetCode problem counts (approximate as of 2023)
    const totalProblems = {
      Easy: 642,
      Medium: 1353,
      Hard: 566,
      All: 2561
    };
    
    if (hasStats) {
      // Extract counts from the LeetCode API response
      stats.submitStats.acSubmissionNum.forEach(item => {
        if (item.difficulty === "Easy") easyCount = item.count;
        if (item.difficulty === "Medium") mediumCount = item.count;
        if (item.difficulty === "Hard") hardCount = item.count;
        if (item.difficulty === "All") totalCount = item.count;
      });
    }
    
    // Calculate percentages
    const easyPercentage = ((easyCount / totalProblems.Easy) * 100).toFixed(1);
    const mediumPercentage = ((mediumCount / totalProblems.Medium) * 100).toFixed(1);
    const hardPercentage = ((hardCount / totalProblems.Hard) * 100).toFixed(1);
    const totalPercentage = ((totalCount / totalProblems.All) * 100).toFixed(1);
  
    return (
      <div className="w-full my-8 px-4">
        <div className="bg-navy-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-300 mb-2 text-center">
            {hasStats ? (
              <>
                <span className="text-cyan-400">{stats.username}</span>'s LeetCode Stats
              </>
            ) : (
              'LeetCode Stats'
            )}
          </h2>
          {hasStats ? (
            <p className="text-center text-blue-200 mb-4">
              Showing progress for user <span className="font-semibold text-cyan-300">{stats.username}</span>
            </p>
          ) : (
            <p className="text-center text-blue-200 mb-4">
              No user data available. Try searching for a valid LeetCode username.
            </p>
          )}
          
          <div className="flex flex-col md:flex-row justify-between gap-2 w-full rounded-xl overflow-hidden shadow-lg">
            {/* Easy Problems */}
            <div className="bg-blue-900 flex-1 p-4 border-r border-navy-950">
              <div className="text-center">
                <h3 className="font-bold text-cyan-300">Easy</h3>
                <div className="text-2xl font-bold text-cyan-200">{easyCount}</div>
                <div className="text-sm text-cyan-400">
                  of {totalProblems.Easy} ({easyPercentage}%)
                </div>
              </div>
            </div>
            
            {/* Medium Problems */}
            <div className="bg-blue-800 flex-1 p-4 border-r border-navy-950">
              <div className="text-center">
                <h3 className="font-bold text-blue-300">Medium</h3>
                <div className="text-2xl font-bold text-blue-200">{mediumCount}</div>
                <div className="text-sm text-blue-400">
                  of {totalProblems.Medium} ({mediumPercentage}%)
                </div>
              </div>
            </div>
            
            {/* Hard Problems */}
            <div className="bg-blue-950 flex-1 p-4 border-r border-navy-950">
              <div className="text-center">
                <h3 className="font-bold text-indigo-300">Hard</h3>
                <div className="text-2xl font-bold text-indigo-200">{hardCount}</div>
                <div className="text-sm text-indigo-400">
                  of {totalProblems.Hard} ({hardPercentage}%)
                </div>
              </div>
            </div>
            
            {/* Total */}
            <div className="bg-indigo-900 flex-1 p-4">
              <div className="text-center">
                <h3 className="font-bold text-indigo-300">Total</h3>
                <div className="text-2xl font-bold text-indigo-200">{totalCount}</div>
                <div className="text-sm text-indigo-400">
                  of {totalProblems.All} ({totalPercentage}%)
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6 bg-navy-900 rounded-full h-4 overflow-hidden shadow stats-bar-animation">
            <div className="flex h-full">
              <div 
                className="bg-cyan-500 h-full" 
                style={{ width: `${(easyCount / totalProblems.All * 100).toFixed(2)}%` }}
                title="Easy Problems"
              ></div>
              <div 
                className="bg-blue-500 h-full" 
                style={{ width: `${(mediumCount / totalProblems.All * 100).toFixed(2)}%` }}
                title="Medium Problems"
              ></div>
              <div 
                className="bg-indigo-500 h-full" 
                style={{ width: `${(hardCount / totalProblems.All * 100).toFixed(2)}%` }}
                title="Hard Problems"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }