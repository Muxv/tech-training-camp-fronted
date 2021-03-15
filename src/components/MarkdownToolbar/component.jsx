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

const MarkdownToolbar = memo(({target}) => {

	// let current = target.current
    const classes = useStyles();

	const insertPiece = (text, pos, piece) => {
		return text.slice(0, pos) + piece + text.slice(pos)
	}

	const singleAdd = (current, text, len) => {
		const start = current.selectionStart
		const end = current.selectionEnd
		const value = current.value

		current.value = value.slice(0, start) + text + value.slice(end)
		setTimeout(() => {
			current.selectionStart = start + len
			current.selectionEnd = end + len
			current.focus()
		})

	}

	const unpairAdd = (current, firstText, firstLen, secondText, secondLen) => {
		const start = current.selectionStart
		const end = current.selectionEnd
		const value = current.value

		if (start === end) {
			current.value = insertPiece(value, start, firstText + secondText)
			// 需要异步设置光标位置，同步设置会无法生效
			current.blur()
			
			setTimeout(() => {
				current.selectionStart = start + firstLen + secondLen
				current.selectionEnd = end + firstLen  + secondLen
				current.focus()
			})
		} else {
			current.value = insertPiece(value, end, secondText)
			current.value = insertPiece(current.value, start, firstText)
			current.blur()
			setTimeout(() => {
				current.selectionStart = start + firstLen
				// not secondLen
				current.selectionEnd = end + firstLen
				current.focus()
			})
		}
	}

	const pairAdd = (current, halfText, halfLen) => {
		const start = current.selectionStart
		const end = current.selectionEnd
		const value = current.value

		if (start === end) {
			current.value = insertPiece(value, start, halfText+halfText)
			// 需要异步设置光标位置，同步设置会无法生效
			current.blur()
			
			setTimeout(() => {
				current.selectionStart = start + 2 * halfLen
				current.selectionEnd = end + 2 * halfLen
				current.focus()
			})
		} else {
			current.value = insertPiece(value, end, halfText)
			current.value = insertPiece(current.value, start, halfText)
			current.blur()
			setTimeout(() => {
				current.selectionStart = start + halfLen
				current.selectionEnd = end + halfLen
				current.focus()
			})
		}
	}

    const boldClick = (e) => {
		let current = target.current
		pairAdd(current, "**", 2)

    }

	const italicClick = (e) => {
		let current = target.current
		pairAdd(current, "*", 1)
	}

	const underlineClick = (e) => {
		let current = target.current
		unpairAdd(current, "<u>", 3, "</u>", 4)
	}

	const h1Click = (e) => {
		let current = target.current
		singleAdd(current, "\n# ", 3)
	}

	const h2Click = (e) => {
		let current = target.current
		singleAdd(current, "\n## ", 4)
	}

	const h3Click = (e) => {
		let current = target.current
		singleAdd(current, "\n### ", 5)
	}

	const olClick = (e) => {
		let current = target.current
		singleAdd(current, "\n1. ", 4)
	}
	const ulClick = (e) => {
		let current = target.current
		singleAdd(current, "\n* ", 3)
	}

	const imgClick = (e) => {
		let current = target.current
		singleAdd(current, '\n![avator](\.\/ \"\")', 17)
	}

	const linkClick = (e) => {
		let current = target.current
		singleAdd(current, '\n[link](\.\/)', 12)
	}

    toolbar = <AppBar className={classes.toolbar} position="static">
        <Toolbar  display="flex" className={classes.bar}>
            <ButtonGroup className={classes.group1}>
            <Button variant="outlined"
                    className={classes.button}
                    onClick={boldClick}>
              <FormatBoldIcon />
            </Button>
            <Button variant="outlined"
                    className={classes.button}
					onClick={italicClick}>
              <FormatItalicIcon />
            </Button>

            <Button variant="outlined"
                    className={classes.button}
					onClick={underlineClick}>
              <FormatUnderlinedIcon />
            </Button>
          </ButtonGroup>


          <ButtonGroup className={classes.group2}>
            <Button variant="outlined"
                    className={classes.button}
					onClick={h1Click}>
              <Typography className={classes.text}>
                H1
              </Typography>
            </Button>
            <Button variant="outlined"
                    className={classes.button}
                    onClick={h2Click}>
              <Typography className={classes.text}>
                H2
              </Typography>
            </Button>

            <Button variant="outlined"
                    className={classes.button}
					onClick={h3Click}>
              <Typography  className={classes.text}>
                H3
              </Typography>
            </Button>
          </ButtonGroup>

          <ButtonGroup className={classes.group3}>
            <Button variant="outlined"
                    className={classes.button}
					onClick={olClick}>
              <FormatListBulletedIcon/>
            </Button>
            <Button variant="outlined"
                    className={classes.button}
					onClick={ulClick}
                    >
              <FormatListNumberedIcon/>
            </Button>
          </ButtonGroup>

          <ButtonGroup className={classes.group4}>
            <Button variant="outlined"
                    className={classes.button}
					onClick={imgClick}>
              <ImageIcon/>
            </Button>
            <Button variant="outlined"
                    className={classes.button}
					onClick={linkClick}
                    >
              <LinkIcon/>
            </Button>
          </ButtonGroup>

        </Toolbar>
    </AppBar>
    return toolbar
})


export default MarkdownToolbar