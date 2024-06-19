import React from 'react';
import { Box, Grid, Typography,Card } from '@mui/material';
import { convertToTitleCase, getDisplayValue } from "../../../../utils/misc";
import StyledButton from "../commons/StyledButton";
import { SetActiveStepFunction } from "../../../../types/function-types";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { VerificationSteps } from "../../../../utils/config";
import { VcDisplay, VcProperty, VcPropertyKey, VcPropertyValue, VcVerificationFailedContainer } from "./styles";

function VcDisplayCard({ vc, setActiveStep }: { vc: any, setActiveStep: SetActiveStepFunction }) {
    return (
        
        <Box sx={{m:2}}>
            <Grid container spacing={2}>
                {
                    vc ? Object.keys(vc.credentialSubject)
                        .filter(key => key?.toLowerCase() !== "id" && key?.toLowerCase() !== "type")
                        .map(key => (
                            <Grid item xs={12} lg={6} key={key}>
                                <Typography variant="subtitle1" component="div">
                                    {convertToTitleCase(key)}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    {getDisplayValue(vc.credentialSubject[key])}
                                </Typography>
                            </Grid>
                        ))
                        : (
                            <VcVerificationFailedContainer>
                                <DescriptionOutlinedIcon fontSize={"inherit"} color={"inherit"} />
                            </VcVerificationFailedContainer>
                        )
                }
            </Grid>
            <Box style={{
                display: 'grid',
                placeContent: 'center'
            }}>
                <StyledButton style={{ margin: "24px auto" }} onClick={() => {
                    setActiveStep(VerificationSteps.ScanQrCodePrompt)
                }}>
                    Verify QR Code
                </StyledButton>
            </Box>
        </Box>
        
    );
}

export default VcDisplayCard;
