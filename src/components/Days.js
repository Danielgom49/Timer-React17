import React, { useEffect, useState } from 'react'
import { StyledDay, StyledDiv, StyledP } from '../style/StyledCompnonent'
import useHours from '../helpers/useHours'


const Days = () => {
    const { hours } = useHours()

    const [days, setDays] = useState(14)

    const resultDays = () => setDays((prev) => prev - 1)

    useEffect(() => {
        if (hours === 0) {
            resultDays()
        }
        if (days === 0) {
            alert('Terminó')
            setDays(14)
        }
    }, [hours, days])


    return (
        <StyledDiv>
            <StyledDay>
                <h1 style={{ fontWeight: '900' }}>{days}</h1>
            </StyledDay>
            <StyledP>DAYS</StyledP>
        </StyledDiv>
    )
}

export default Days