interface DashboardHeadlinesProps {
  newsId: string;
  newslabel: string;
  newsHeadline: string;
  newsContent: string;
  newsImageLink: string;
  matchFormat: string;
  bgImage: string;
}
export type { DashboardHeadlinesProps };

interface DashboardLiveMatchesProps {
  matchId: string;
  matchLabel: string;
  matchFormat: string;
  status: string;
  teamA: { teamCode: string; teamName: string; score: string };
  teamB: { teamCode: string; teamName: string; score: string };
  venue: string;
}
export type { DashboardLiveMatchesProps };
