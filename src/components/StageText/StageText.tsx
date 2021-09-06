import React, { useState } from 'react'
import { StyledButton } from './StageText.css';

const StageText = () => {
    const [nrOfStage, setNrOfStage] = useState(0);
    const incrementStage = () => {
        console.log(nrOfStage);
        setNrOfStage(nrOfStage + 1);
    }

    return (
        <main>
            Tytulik
            <StyledButton onClick={incrementStage}>xD</StyledButton>
        </main>
    )
}

export default StageText