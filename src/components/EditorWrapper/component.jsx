import React, {memo, useState} from "react"
import MarkdownParser from "../MarkdownParser"
import "./style.css"

const EditorWrapper = memo(() => {

    const  [inputText, setInputText]  = useState("");
    const tabKeyDown = (e) => {
        // console.log(e.target.value)
        if (e.keyCode === 9) // tab 
        {
            e.preventDefault()
            e.target.value += "\t"
        }
    }

    const textChange = (e) => {
        setInputText(e.target.value);
    }

    return (        
        <div className="container">
            <h3 className="title">
                MarkDown Parser
            </h3>

            <div className="parser">
                <div className="col">
                    <div className="subtitle">
                        Markdown Code
                    </div>  
                    <textarea className="input showarea"
                              onKeyDown={tabKeyDown}
                              onChange={textChange}>
                    </textarea>
                </div>


                <div className="col">
                    <div className="subtitle">
                        Preview
                    </div>  
                    <div className="output showarea">
                        <MarkdownParser nativeText={inputText}/>
                    </div>
                </div>

            </div>
    </div> 
    )
}



)

export default EditorWrapper;