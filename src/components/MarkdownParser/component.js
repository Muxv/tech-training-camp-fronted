import React, {memo} from "react"
import ReactHtmlParser from "react-html-parser";
import "./style.css"

const MarkdownParser = memo(({nativeText}) => {
    const rules = [
        // header  
        [/#{6}\s+([^\n]+)\n/g, "<h6>$1</h6>"],
        [/#{5}\s+([^\n]+)\n/g, "<h5>$1</h5>"],
        [/#{4}\s+([^\n]+)\n/g, "<h4>$1</h4>"],
        [/#{3}\s+([^\n]+)\n/g, "<h3>$1</h3>"],
        [/#{2}\s+([^\n]+)\n/g, "<h2>$1</h2>"],
        [/#{1}\s+([^\n]+)\n/g, "<h1>$1</h1>"],
        // hr
        [/\s*_{3}[\s|_]*\n/g, "<hr>"],
        [/\s*-{3}[\s|-]*\n/g, "<hr>"],
        [/\s*\={3}[\s|\=]*\n/g, "<hr>"],

        // list 
        [/((\n\d\..+)+)/g, "<ol>$1</ol>"],
        [/((\n[-|\*].+)+)/g, "<ul>$1</ul>"],
        // [/((\n-.+)+)/g, "<ul>$1</ul>"],
        [/\n\d\.([^\n]+)/g, "<li>$1</li>"],
        [/\n[-|\*]([^\n]+)/g, "<li>$1</li>"],
        // bold and italic
        [/\*\*\s*([^\*]+)\*\*/g,  "<strong>$1</strong>"],
        [/\*\s*([^\*]+)\*/g,  "<em>$1</em>"],
        [/__\s*([^_]+)__/g,  "<strong>$1</strong>"],
        [/_\s*([^_]+)_/g,  "<em>$1</em>"],
        // code
        [/\`\s*([^\n|^\`]+)\`/g, "<code>$1</code>"],
        [/\`\`\`([\w]*)\n([^\`]*)\`\`\`/g, "<code><pre>$2</pre></code>"],

        // href and a
        //[!avatar](./a.jpg "this is a")
        [/\!\[([^\]]+)\]\(([^\)]+)\s?(\"[^\"\)]\")?\)/g, '<img src="$2"/>'],
        //[path](www.baidu.com)
        [/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>'],
        [/([^\n]+\n)/g, "<p>$1<p>"],
    ]


    const parseMarkdown = (code) => {
        let result = code
        rules.forEach(([rule, template]) => {
            result = result.replace(rule, template)
        })
        

        // console.log(result)

        return ReactHtmlParser(result)
    }
   

    return <div className="result">{parseMarkdown(nativeText)}</div>
})


export default MarkdownParser