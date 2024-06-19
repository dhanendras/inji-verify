import { Divider } from "@mui/material";
import React from "react";
import { CopyrightsContainer, CopyrightsContent } from "./styles";

function Copyrights(props: any) {
    return (
        <CopyrightsContainer>
            <Divider  />
            <CopyrightsContent>
                2024 © MOSIP - All rights reserved.
            </CopyrightsContent>
        </CopyrightsContainer>
    );
}

export default Copyrights;
