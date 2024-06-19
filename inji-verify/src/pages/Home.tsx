import React, {createContext, useContext, useEffect, useState} from 'react';
import {Grid,useMediaQuery} from "@mui/material";
import VerificationProgressTracker from "../components/Home/VerificationProgressTracker";
import VerificationSection from "../components/Home/VerificationSection";
import Copyrights from "../components/Home/VerificationProgressTracker/Copyrights";
import StepperContentHeader from "../components/Home/VerificationProgressTracker/StepperContentHeader";

import {VerificationSteps} from "../utils/config";
import {AlertInfo} from "../types/data-types";
import AlertMessage from "../components/commons/AlertMessage";
import {SetAlertInfoFunction} from "../types/function-types";

let activeStep: number = 0;
const setActiveStep = (newValue: number) => {
    activeStep = newValue;
}
const getActiveStep = () => activeStep;
const ActiveStepContext = createContext({getActiveStep, setActiveStep});
export const useActiveStepContext = () => useContext(ActiveStepContext);

let alert: AlertInfo = {open: false};
let setAlertInfo: React.Dispatch<React.SetStateAction<AlertInfo>> = value => {};
const AlertsContext = createContext({alertInfo: alert, setAlertInfo});
export const useAlertMessages = () => useContext(AlertsContext);

function Home(props: any) {
    const [activeStep, setActiveStep] = useState(VerificationSteps.ScanQrCodePrompt);
    const getActiveStep = () => activeStep;
    const isMobile = useMediaQuery('(max-width:767px)');
    const isDesktop = useMediaQuery('(min-width:768px)');

    const [alertInfo, setAlertInfo] = useState({
        open: false,
        severity: 'success',
        message: ''
    } as AlertInfo);

    return (
        <AlertsContext.Provider value={{alertInfo, setAlertInfo}}>
            <ActiveStepContext.Provider value={{getActiveStep, setActiveStep}}>
            {isMobile ? (
                    // Mobile layout
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <StepperContentHeader />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <VerificationSection />
                        </Grid>
                        <Grid item xs={12}>
                            <VerificationProgressTracker />
                        </Grid>
                        <Copyrights/>
                    </Grid>
                ) : (
                    // Desktop layout
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <StepperContentHeader />
                                </Grid>
                                <Grid item xs={12}>
                                    <VerificationProgressTracker />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <VerificationSection />
                        </Grid>
                        <Copyrights/>
                    </Grid>
                )}
              
                <AlertMessage alertInfo={alertInfo} handleClose={() => {setAlertInfo({...alertInfo, open: false})}}/>
            </ActiveStepContext.Provider>
        </AlertsContext.Provider>
    );
}

export default Home;
