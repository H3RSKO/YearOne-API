const movieStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    // width: '35vw'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  media: {
    height: '85%',

  },
  description: {
    maxWidth: '250px',
    // padding: '2em'
  }
});

export default movieStyles
