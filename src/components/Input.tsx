import { styled } from '../styles/stitches';

const Input = styled('input', {
  all: 'unset',
  width: 200,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: 'white',
  backgroundColor: '$slateA5',
  boxShadow: `0 0 0 1px $slateA9`,
  '&:focus': { boxShadow: `0 0 0 2px black` }
});

export default Input;
