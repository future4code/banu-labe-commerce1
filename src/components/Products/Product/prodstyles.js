import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    root: {
        maxWidht: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
}))