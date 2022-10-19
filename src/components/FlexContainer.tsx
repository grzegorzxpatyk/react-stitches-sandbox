import { styled } from '../styles/stitches';

const FlexContainer = styled('div', {
    display: 'flex',
    variants: {
        justifyContent: {
            start: {
                justifyContent: 'start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'end',
            },
            between: {
                justifyContent: 'space-between',
            },
        },
        alignItems: {
            start: {
                alignItems: 'start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'end',
            },
        },
        flexDirection: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
        },
    },

    defaultVariants: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default FlexContainer;
