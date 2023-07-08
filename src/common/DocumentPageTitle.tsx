import { pageTitleConstant } from "../constants";

function DocumentPageTitle(pageLocation: { pathname: string } | null) {
  const pageFound = pageTitleConstant?.find(
    (item) => item?.url === pageLocation?.pathname
  );
  if (pageFound !== null) {
    document.title = pageFound?.title ?? "";
  } else {
    document.title = "Sign In | Crickbuzz";
  }
}

export default DocumentPageTitle;
