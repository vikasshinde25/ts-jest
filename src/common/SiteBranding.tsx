import React from "react";

import styled from "styled-components";

import { siteLogo, siteLogoWhite } from "../images";

interface SiteProps {
  logoType: string | null;
  maxWidth: string;
}

function SiteBranding({ logoType, maxWidth }: SiteProps) {
  /* ********** Main return statement of this component ********** */
  return (
    <SiteBrandingBox className="site-branding" style={{ maxWidth }}>
      <a href="http://localhost:3000/dashboard">
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
  //   max-width: 100px;
`;
