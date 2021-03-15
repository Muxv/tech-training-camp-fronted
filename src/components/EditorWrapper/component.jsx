import React, {memo, useState} from "react"
import MarkdownParser from "../MarkdownParser"
import MarkdownToolbar from "../MarkdownToolbar";
import "./style.css"

const EditorWrapper = memo(() => {

    const tableSize = "    ";
    const  [inputText, setInputText]  = useState("# Markdown解析已准备\n");
    const InputKeyDown = (e) => {

        if (e.keyCode === 9) // tab 
        {
            e.preventDefault();
            const start = e.target.selectionStart
            const _text = inputText.slice(0, start) + tableSize + inputText.slice(start)
            e.target.value = _text
            setInputText(_text)
        }
    }

    const textChange = (e) => {
        setInputText(e.target.value);
    }

    const textarea = <textarea className="textarea"
                               onKeyDown={InputKeyDown}
                               onChange={textChange}
                               value={inputText}>
                     </textarea>

    return (        
        <div className="container">
            <h1 className="title">
                MarkDown Parser
            </h1>
            <MarkdownToolbar target={textarea}/>

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