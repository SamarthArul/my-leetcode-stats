// src/app/page.js
import { fetchStats } from '@/lib/fetchStats';

export default async function Home() {
  const userData = await fetchStats('freewillisfake');

  const stats = userData.submitStats.acSubmissionNum;
  const getStat = (difficulty) =>
    stats.find((stat) => stat.difficulty === difficulty)?.count || 0;

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Leetcode Stats for {userData.username}</h1>
      <ul>
        <li><strong>Total Solved:</strong> {getStat('All')}</li>
        <li><strong>Easy Solved:</strong> {getStat('Easy')}</li>
        <li><strong>Medium Solved:</strong> {getStat('Medium')}</li>
        <li><strong>Hard Solved:</strong> {getStat('Hard')}</li>
      </ul>
    </main>
  );
}
