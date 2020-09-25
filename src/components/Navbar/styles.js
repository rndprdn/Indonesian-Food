const styles = {
  navbar: {
    zIndex: '98988',
    position: 'fixed',
    display: 'flex',
    width: 'calc(100% - 85px)',
    left: 85,
    padding: '0 60px',
    margin: '45px 0',
    justifyContent: 'space-between',
    top: 0,
  },
  navLeft: {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0',

    '& li': {
      position: 'relative',
      marginRight: '55px',
      cursor: 'pointer',
    },
  },
  navRight: {
    display: 'flex',
  },
};

export default styles;
