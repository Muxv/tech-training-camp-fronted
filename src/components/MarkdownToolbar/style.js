import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({   }) =>
  createStyles({
    toolbar: {
        // height: "5vh",
      // display: "flex",
      // flexDirection: "row",
      backgroundColor: "gray",
      marginBottom : "10px",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    bar : {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    },
    button: {
      margin: "2px",
    },
    text : {
      fontSize: "2em",
    },
    group1 : {
    },
    group2 : {
    },
    group3 : {
    },
    
  }),
);

export default useStyles;
