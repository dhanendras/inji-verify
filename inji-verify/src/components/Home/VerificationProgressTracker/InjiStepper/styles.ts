import styled from "@emotion/styled";
import {StepContent, Typography} from "@mui/material";

export const StepperIconContainer = styled('div')(({ ownerState }: {
    ownerState: { completed: boolean, active: boolean }
}) => ({
    backgroundColor: '#FFF',
    color: '#FF8F00',
    ...((ownerState.active || ownerState.completed) && {
        backgroundColor: '#FF8F00',
        color: '#FFF',
    }),
    border: '1px solid #FF8F00',
    zIndex: 1,
    width: 24,
    height: 24,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    font: 'normal normal 600 12px/15px Inter'
}));






export const StepLabelContent = styled(Typography)`
    font-size: 16px;
    font-weight: bold;
    font-family: Inter;
`;

export const StepContentContainer = styled(StepContent)`
    border-left: 2px solid #FF7F00;
    padding-left: 20px;
`;

export const StepContentDescription = styled.div`
    font-size: 14px;
    line-height: 19px;
    color: #535353;
`;

