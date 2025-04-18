// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  })
  
  await octokit.request('GET /orgs/{org}/team/{team_slug}/copilot/metrics', {
    org: 'ORG',
    team_slug: 'TEAM_SLUG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })