import { styled } from '../styles/stitches';

const Button = styled('button', {
  all: 'unset',
  padding: '.6rem 1rem',
  margin: '.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '.4rem',
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'transform .08s ease-in-out',
  '&:active': {
    transform: 'translate(0, 2px) scale(0.95)'
  },
  '&:focus': {
    outline: '3px solid $blueA9',
    boxShadow: '0 0 15px $colors$blueA9'
  },

  variants: {
    variant: {
      default: {
        background: '$slate6',
        color: '$slate12',
        '&:hover': {
          background: '$slate8'
        }
      },
      outlined: {
        backgroundColor: '#ffffff00',
        backdropFilter: 'blur(1px)',
        transition:
          'transform .08s ease-in-out, backdrop-filter .15s ease-in-out, background-color 0.3s ease-in-out',
        color: '$slate12',
        border: '1px solid $slate11',
        '&:hover': {
          backdropFilter: 'blur(2px)',
          backgroundColor: '$slateA6'
        }
      },
      navigation: {
        display: 'inline-block',
        backgroundColor: 'transparent',
        '&::after': {
          content: '',
          marginTop: '2px',
          display: 'block',
          width: '0',
          height: '5px',
          background: '$slateA6',
          transition: 'width .2s ease-in-out'
        },
        '&:hover::after, &:focus::after': {
          width: '100%'
        },
        '&:active::after': {
          width: '100%',
          background: '$slateA9'
        },
        '&:focus': {
          outline: 'none',
          boxShadow: 'none'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export default Button;
