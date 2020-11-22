const movieStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  media: {
    height: 130,
    paddingTop: '56.25%', // 16:9
  },
  description: {
    maxWidth: '20vw'
  }
});

export default movieStyles
