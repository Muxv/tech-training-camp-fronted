import React, {memo, useState} from "react"
import MarkdownParser from "../MarkdownParser"
import MarkdownToolbar from "../MarkdownToolbar";
import "./style.css"

const EditorWrapper = memo(() => {

    const TABKEY = 9
    const tableSize = "    ";
    const  [inputText, setInputText]  = useState("# Markdown解析已准备\n");
    let textRef = React.createRef()

    const InputKeyDown = (e) => {
        if (e.keyCode === TABKEY) // tab 
        {
            e.preventDefault();
            const start = e.target.selectionStart
            const end = e.target.selectionEnd
            const _text = inputText.slice(0, start) + tableSize + inputText.slice(end)
            e.target.value = _text
            setInputText(_text)
            e.target.blur()
            const target = e.target
			setTimeout(() => {
				target.selectionStart = start + 4
				target.selectionEnd = end + 4
				target.focus()
            })

        }
    }

    const textChange = (e) => {
        setInputText(e.target.value);
    }

    const textarea = <textarea ref={textRef}
                               className="textarea"
                               onKeyDown={InputKeyDown}
                               onChange={textChange}
                               value={inputText}>
                     </textarea>

    return (        
        <div className="container">
            <h1 className="title">
                MarkDown Parser
            </h1>
            <MarkdownToolbar target={textRef}/>

            <div className="parser">
                <div className="col input">
                    {textarea}
                </div>
                <div className="col output">
                    <MarkdownParser nativeText={inputText}/>
                </div>

            </div>
    </div> 
    )
}



)

export default EditorWrapper;