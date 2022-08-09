import * as React from 'react';
import { styled } from 'stitches.config';
import { ReactComponent as BookMarkIcon } from 'assets/icon-bookmark-full.svg';
import { ReactComponent as EmptyBookMarkIcon } from 'assets/icon-bookmark-empty.svg';

export interface BookMarkButtonProps {
    defaultState: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

export function BookMarkButton(props: BookMarkButtonProps) {
    const { defaultState, onClick } = props;
    const [state, setState] = React.useState(defaultState);

    const Button = styled('button', {
        width: '32px',
        height: '32px',
        borderRadius: '100%',
        background: "$darkBlue",
        cursor: "pointer",
        opacity: "50%",
        transition: "all .1s ease-in-out",
    })

    const handleClick = (event: React.MouseEvent) => {
        setState(!state);
        onClick && onClick(event);
    }

    return (
        <Button onClick={handleClick}>
            {state ? <BookMarkIcon /> : <EmptyBookMarkIcon />}
        </Button>
    )
}