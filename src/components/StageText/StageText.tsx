import React, { useState, useEffect } from 'react'
import { StyledButton } from './StageText.css';
import { hollywoodStory } from '../../assets/hollywoodStory';

const StageText = () => {
    interface ArrayTypes {
        answer: string;
        nextId: string;
    }
    interface Types {
        id: string;
        dialog: string;
        answers: Array<ArrayTypes>;
    }

    const [dialogId, setDialogId] = useState('1.1.1');
    const [chapterId, setChapterId] = useState('1.1');
    const [displays, setDisplays] = useState<Types>()
    const handleClick = (e: any) => {
        setDialogId(e.target.value);
        setChapterId(e.target.value.slice(0, 3));
        console.log(e.target.value, e.target.value.slice(0, 3))

    }

    useEffect(() => {
        setDisplays(hollywoodStory.chapters.find(el => (
            el.id === chapterId
        ))?.dialogs.find((lel) => (
            lel.id === dialogId
        )))
    }, [dialogId])

    return (
        <main>
            {displays?.dialog}
            {displays?.answers.map((ans) => (
                <StyledButton value={ans.nextId} onClick={e => handleClick(e)}> {ans.answer} </StyledButton>
            ))}
        </main>
    )
}

export default StageText