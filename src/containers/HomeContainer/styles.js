const styles = {
  asd: {
    position: 'absolute',
    left: '50%',
    bottom: 45,
    transform: 'translateX(-50%)',

    '&:after': {
      content: '""',
      display: 'inline-block',
      width: 140,
      height: 2,
      backgroundColor: 'white',
      marginLeft: 15,
      verticalAlign: 'middle',
    },
  },
};

export default styles;
