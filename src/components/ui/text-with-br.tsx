import React from 'react'

interface Props {
    className?: string
    text: string
}

export const TextWithBr: React.FC<Props> = ({className = '', text}) => {
    return (
        <p className={className}>
            {text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </p>
    )
}

export default TextWithBr
