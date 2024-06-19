import React from 'react';
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import { VerificationStep } from "../../../../types/data-types";
import { StepLabelContent, StepContentDescription, StepContentContainer } from "./styles";

interface MobileStepperProps {
    steps: VerificationStep[];
    activeStep: number;
}

const MobileStepper: React.FC<MobileStepperProps> = ({ steps, activeStep }) => {
    return (
        <div style={{ overflowX: 'auto', marginTop: '16px', marginBottom: '16px' }}>
            <Stepper activeStep={activeStep} orientation="horizontal" alternativeLabel>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            <StepLabelContent>
                                {step.label}
                            </StepLabelContent>
                        </StepLabel>
                        {/* <StepContentContainer
                            TransitionProps={{ appear: true, unmountOnExit: false }}
                            hidden={false}>
                            <StepContentDescription>
                                {Array.isArray(step.description)
                                    ? step.description.map((desc, idx) => (
                                        <Typography key={idx} variant="body1" style={{ marginBottom: idx === step.description.length - 1 ? '0' : '8px' }}>
                                            {desc}
                                        </Typography>
                                    ))
                                    : <Typography variant="body1">{step.description}</Typography>
                                }
                            </StepContentDescription>
                        </StepContentContainer> */}
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default MobileStepper;
