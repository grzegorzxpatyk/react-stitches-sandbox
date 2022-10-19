import { styled } from '../styles/stitches';

const Navbar = styled('nav', {
    '& ul': {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& li': {
            margin: '0 1rem',
            '&:first-of-type': {
                margin: '0 1rem 0 0',
            },
            '&:last-of-type': {
                margin: '0 0 0 1rem',
            },
        },
    },
});

export default Navbar;
