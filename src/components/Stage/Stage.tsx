import React from 'react'
import styled from 'styled-components'

interface Types {
    stage: string;
}

const StyledStage = styled.section<{ stage: string; }>`
    width: 100vw;
    height: 100vh;
    background-image: url(${({ stage }) => stage});
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Stage = ({ stage }: Types) => (
    <StyledStage stage={stage} />
)

export default Stage