import { styled } from '../styles/stitches';

const Link = styled('a', {
    textDecoration: 'none',
    color: 'unset',
    paddingBottom: '.1rem',
    borderBottom: '3px solid $slateA5',
    transition: 'border .1s ease-in',
    '&:hover': {
        borderBottom: '3px solid $slateA8',
        cursor: 'pointer',
    },
    '&:visited': {
        color: 'unset',
    },
});

export default Link;
