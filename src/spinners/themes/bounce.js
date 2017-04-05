export const style =
  {
    '.spinner': {
      margin: '0 auto',
      width: '70px',
      textAlign: 'center'
    },
    '.bounce': {
      width: '14px',
      height: '14px',
      backgroundColor: '#333',
      borderRadius: '100%',
      display: 'inline-block',
      WebkitAnimation: 'sk-bouncedelay 1.4s infinite ease-in-out both',
      animation: 'sk-bouncedelay 1.4s infinite ease-in-out both'
    },
    '.bounce1': {
      WebkitAnimationDelay: '-0.32s',
      animationDelay: '-0.32s'
    },
    '.bounce2': {
      WebkitAnimationDelay: '-0.16s',
      animationDelay: '-0.16s'
    },
    '@-webkit-keyframes sk-bouncedelay': {
      '0%, 80%, 100%': {
        WebkitTransform: 'scale(0)'
      },
      '40%': {
        WebkitTransform: 'scale(1.0)'
      }
    },
    '@keyframes sk-bouncedelay': {
      '0%, 80%, 100%': {
        WebkitTransform: 'scale(0)',
        transform: 'scale(0)'
      },
      '40%': {
        WebkitTransform: 'scale(1.0)',
        transform: 'scale(1.0)'
      }
    }
  }
