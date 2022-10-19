import { styled } from '../styles/stitches';

const Header = styled('header', {
    position: 'fixed',
    top: '0px',
    height: 'max(8vh, 80px)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(2px)',
    transition: 'all 0.5s ease-in-out',
});

export default Header;
