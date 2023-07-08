import React from "react";

import styled from "styled-components";

import { siteLogo, siteLogoWhite } from "../images";

interface SiteProps {
  logoType: string | null;
  maxWidth: string;
  margin: string;
}

function SiteBranding({ logoType, maxWidth, margin }: SiteProps) {
  /* ********** Main return statement of this component ********** */
  return (
    <SiteBrandingBox className="site-branding" style={{ maxWidth, margin }}>
      <a href="http://localhost:30001/dashboard">
        <img
          src={logoType === "white" ? siteLogoWhite : siteLogo}
          alt="site-logo"
        />
      </a>
    </SiteBrandingBox>
  );
}

export default SiteBranding;
const SiteBrandingBox = styled.div`
  img {
    vertical-align: middle;
  }
`;
