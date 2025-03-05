// src/lib/fetchStats.js

export async function fetchStats(username) {
    const url = 'https://leetcode.com/graphql';
  
    const graphqlQuery = {
      query: `
        {
          matchedUser(username: "${username}") {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
      `,
    };
  
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphqlQuery),
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }
  
    const { data } = await res.json();
  
    return data.matchedUser;
  }
  