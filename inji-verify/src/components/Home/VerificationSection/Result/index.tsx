import React, { useEffect, useRef, useState } from 'react';
import ResultSummary from "./ResultSummary";
import VcDisplayCard from "./VcDisplayCard";
import { Box,Card } from "@mui/material";
import { CardPositioning, VcStatus } from "../../../../types/data-types";
import { SetActiveStepFunction } from "../../../../types/function-types";
import { ResultsSummaryContainer, VcDisplayCardContainer } from "./styles";

const getPositioning = (resultSectionRef: React.RefObject<HTMLDivElement>): CardPositioning => {
    // top = 340 - it is precalculated based in the xd design
    const positioning = { top: 212, right: 0 };
    if (resultSectionRef.current) {
        const resultSectionWidth = resultSectionRef.current.getBoundingClientRect().width;
        if (window.innerWidth === resultSectionWidth) {
            return positioning;
        }
        return { ...positioning, right: (resultSectionWidth - 400) / 2 };
    }
    return positioning;
}

const Result = ({ vc, setActiveStep, vcStatus }: {
    vc: any, setActiveStep: SetActiveStepFunction, vcStatus: VcStatus | null
}) => {
    const initialPositioning: CardPositioning = {};
    const resultSectionRef = useRef<HTMLDivElement>(null);
    const [vcDisplayCardPositioning, setVcDisplayCardPositioning] = useState(initialPositioning);

    useEffect(() => {
        if (resultSectionRef.current && !vcDisplayCardPositioning.top) {
            const positioning = getPositioning(resultSectionRef);
            setVcDisplayCardPositioning(positioning);
        }
    }, [resultSectionRef, vcDisplayCardPositioning.top]);

    const success = vcStatus?.status === "OK";

    return (
        <Card sx={{m:2}}>
        <Box id="result-section" ref={resultSectionRef} style={{ position: 'relative' }}>
            <ResultsSummaryContainer success={success} style={{ marginBottom: '5px' }}>
                <ResultSummary success={success} />
            </ResultsSummaryContainer>
            <VcDisplayCardContainer
                cardPositioning={{ top: vcDisplayCardPositioning.top, right: vcDisplayCardPositioning.right,  }}
                >
                <VcDisplayCard vc={vc} setActiveStep={setActiveStep} />
            </VcDisplayCardContainer>
        </Box>
        </Card>
    );
}

export default Result;
