import React from 'react';
import { Grid, Typography } from "@mui/material";
import { ReactComponent as VerificationSuccessIcon } from "../../../../assets/verification-success-icon.svg";
import { ReactComponent as VerificationFailedIcon } from "../../../../assets/verification-failed-icon.svg";

const ResultSummary = ({ success }: { success: boolean }) => {
    return (
        <Grid container justifyContent="center">
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100px',  // Adjusted width
                        height: '100px', // Adjusted height
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        color: success ? '#4B9D1F' : '#CB4242',
                        fontSize: '48px', // Increased font size
                        margin: '10px auto' // Center the icon horizontally and vertically
                    }}>
                        {success ? <VerificationSuccessIcon /> : <VerificationFailedIcon />}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center" style={{ marginTop: '10px' }}>
                        Results
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" align="center">
                        {success
                            ? "Congratulations, the given credential is valid!"
                            : "Unfortunately, the given credential is invalid!"}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ResultSummary;
