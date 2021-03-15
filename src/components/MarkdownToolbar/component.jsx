import React, { memo } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ImageIcon from '@material-ui/icons/Image';
import LinkIcon from '@material-ui/icons/Link';
import useStyles from "./style";
import { Typography } from "@material-ui/core";

const MarkdownToolbar = memo((textarea) => {

    const classes = useStyles();

    toolbar = <AppBar className={classes.toolbar} position="static">
        <Toolbar  display="flex" className={classes.bar}>
            <ButtonGroup className={classes.group1}>
            <Button variant="outlined"
                    className={classes.button}>
              <FormatBoldIcon />
            </Button>
            <Button variant="outlined"
                    className={classes.button}>
              <FormatItalicIcon />
            </Button>

            <Button variant="outlined"
                    className={classes.button}>
              <FormatUnderlinedIcon />
            </Button>
          </ButtonGroup>


          <ButtonGroup className={classes.group2}>
            <Button variant="outlined"
                    className={classes.button}>
              <Typography className={classes.text}>
                H1
              </Typography>
            </Button>
            <Button variant="outlined"
                    className={classes.button}
                    >
              <Typography className={classes.text}>
                H2
              </Typography>
            </Button>

            <Button variant="outlined"
                    className={classes.button}>
              <Typography  className={classes.text}>
                H3
              </Typography>
            </Button>
          </ButtonGroup>

          <ButtonGroup className={classes.group3}>
            <Button variant="outlined"
                    className={classes.button}>
              <FormatListBulletedIcon/>
            </Button>
            <Button variant="outlined"
                    className={classes.button}
                    >
              <FormatListNumberedIcon/>
            </Button>
          </ButtonGroup>

          <ButtonGroup className={classes.group4}>
            <Button variant="outlined"
                    className={classes.button}>
              <ImageIcon/>
            </Button>
            <Button variant="outlined"
                    className={classes.button}
                    >
              <LinkIcon/>
            </Button>
          </ButtonGroup>

        </Toolbar>
    </AppBar>
    return toolbar
})


export default MarkdownToolbar