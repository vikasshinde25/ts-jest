import {
  PATH_DASHBOARD,
  PATH_GALLERY,
  PATH_LATEST_NEWS,
  PATH_RANKING,
  PATH_SCHEDULE,
  PATH_STATISTICS,
} from "./RouteConstants";

export const navigationMenuConstant = [
  { label: "Dashboard", key: "dashboard", path: PATH_DASHBOARD },
  { label: "Schedule", key: "schedule", path: PATH_SCHEDULE },
  { label: "Statistics", key: "statistics", path: PATH_STATISTICS },
  { label: "Ranking", key: "ranking", path: PATH_RANKING },
  { label: "Latest News", key: "latest-news", path: PATH_LATEST_NEWS },
  { label: "Gallery", key: "gallery", path: PATH_GALLERY },
];

export const pageTitleConstant = [
  {
    title: "Cricbuzz | Dashboard",
    url: PATH_DASHBOARD,
  },
  {
    title: "Cricbuzz | Schedule",
    url: PATH_SCHEDULE,
  },
  {
    title: "Cricbuzz | Statistics",
    url: PATH_STATISTICS,
  },
  {
    title: "Cricbuzz | Latest News",
    url: PATH_LATEST_NEWS,
  },
  {
    title: "Cricbuzz | Ranking",
    url: PATH_RANKING,
  },
  {
    title: "Cricbuzz | Gallery",
    url: PATH_GALLERY,
  },
];
