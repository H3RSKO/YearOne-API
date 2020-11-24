const movieStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: '35vw'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  media: {
    position: 'fixed',
    height: '60%',

  },
  description: {
    maxWidth: '20vw'
  }
});

export default movieStyles
