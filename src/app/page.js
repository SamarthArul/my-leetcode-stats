import { fetchStats } from '../lib/fetchStats';
import LeetCodeStats from '../components/LeetCodeStats';
import UsernameSearch from '../components/UsernameSearch';

// Since Next.js pages can be async
export default async function Home({ searchParams }) {
  // Get username from query params or use default
  const leetcodeUsername = searchParams.username || 'freewillisfake';
  
  // Fetch the stats
  let userData = null;
  try {
    userData = await fetchStats(leetcodeUsername);
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="bg-navy-800 rounded-lg shadow-md p-6 mb-8 text-blue-100">
          <h2 className="text-2xl font-bold text-blue-300 mb-4">Welcome to LeetCode Stats Viewer</h2>
          <p className="text-blue-200 mb-4">
            This tool allows you to view and compare LeetCode statistics for any user. Enter a LeetCode username 
            below to see their progress and achievements.
          </p>
          
          {/* Search Component */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-blue-300 mb-2">Search for a LeetCode User:</h3>
            <UsernameSearch defaultUsername={leetcodeUsername} />
          </div>
        </div>
        
        
        {/* LeetCode Stats Bar */}
        <LeetCodeStats stats={userData} />
        
        <div className="bg-navy-800 rounded-lg shadow-md p-6 text-blue-100">
          <h2 className="text-xl font-bold text-blue-300 mb-4">About This Tool</h2>
          <p className="text-blue-200 mb-4">
            This dashboard uses the LeetCode GraphQL API to fetch real-time statistics about users' problem-solving progress.
            The data is updated every time you search for a user.
          </p>
          <p className="text-blue-200">
            Built with Next.js and Tailwind CSS. Try searching for your own LeetCode username to see your stats!
          </p>
        </div>
      </div>
    </div>
  );
}