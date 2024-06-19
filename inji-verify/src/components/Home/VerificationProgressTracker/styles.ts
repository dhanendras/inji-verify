import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const VerificationProgressTrackerContainer = styled(Box)`
    background: #FAFBFD 0 0 no-repeat padding-box;
    padding: 0 60px 0 76px;
    margin-top: 0;
    // height: 100vh;
    // max-height: 100vh;
`;

export const NavbarContainer = styled(Box)`
    height: 52px;
    margin: 46px 0 60px 0;
`

export const Heading = styled(Typography)`
    font: normal normal bold 26px/31px Inter;
    margin: 6px 0
`

export const Description = styled(Typography)`
    font: normal normal normal 16px/21px Inter;
    margin: 6px 0
`

export const CopyrightsContainer = styled(Box)`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 8px 0; /* Adjusted padding for better spacing */
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1); /* Added shadow for separation from content */
    z-index: 1000; /* Ensure it's above other content */
`

export const CopyrightsContent = styled(Typography)`
    font: normal normal normal 14px/17px Inter;
    color: #707070;
    text-align: center;
    width: 100%; /* Full width for responsiveness */
    max-width: 800px; /* Maximum width to prevent excessive stretching */
    padding: 0 16px; /* Added padding for better spacing */
`
