import { styled } from '../styles/stitches';

const Logo = styled('h1', {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: 'max(2rem, 5vmin)',
    margin: '1vmin',
    width: '16vw',
    minWidth: 'fit-content',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
});

export default Logo;
