const targetElement = document.querySelector('.item.center.menC');
document.querySelectorAll('[id*="yandex"]').forEach(el => el.remove());
document.querySelectorAll('.date, .socBlock, .nav').forEach(el => el.remove());
if (targetElement) {
    document.body.innerHTML = ''; 
    document.body.appendChild(targetElement);
}


function injectSyntaxHighlighterStyles() {
    const styleContent = `
       .syntaxhighlighter {
    width: 99% !important;
    margin: 1em 0 1em -4px !important;
    position: relative !important;
    overflow: auto !important;
    font-size: 1em !important;
    font-family: var(--code-font-family);
    height: auto;
    border: 1px solid #11151C !important;
    background-color: #0D1017 !important;
    color: #BFBDB6 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .gutter {
    color: rgba(108, 115, 128, 0.6) !important;
    background: #0B0E14 !important;
}

.syntaxhighlighter .gutter .line {
    border-right: 3px solid #59C2FF !important;
}

.syntaxhighlighter .gutter .line.highlighted {
    background-color: rgba(108, 115, 128, 0.9) !important;
    color: #ffffff !important;
}

.syntaxhighlighter .line { background-color: #0D1017 !important; }

.syntaxhighlighter .plain, .syntaxhighlighter .plain a {
    color: #BFBDB6 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .comments, .syntaxhighlighter .comments a {
    color: rgba(172, 182, 191, 0.55) !important;
    font-style: italic;
    font-weight: bold !important;
}

.syntaxhighlighter .string, .syntaxhighlighter .string a {
    color: #AAD94C !important;
    font-weight: bold !important;
}

.syntaxhighlighter .keyword {
    color: #FF8F40 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .preprocessor {
    color: #F29668 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .variable {
    color: #E6B673 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .value {
    color: #D2A6FF !important;
    font-weight: bold !important;
}

.syntaxhighlighter .functions {
    color: #FFB454 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .constants {
    color: #D2A6FF !important;
    font-weight: bold !important;
}

.syntaxhighlighter .script {
    color: #F07178 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .color1, .syntaxhighlighter .color1 a {
    color: #39BAE6 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .color2, .syntaxhighlighter .color2 a {
    color: #E6B450 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .color3, .syntaxhighlighter .color3 a {
    color: #D95757 !important;
    font-weight: bold !important;
}

.syntaxhighlighter .line.alt2 {
  background-color: #0d1017 !important;
}
.syntaxhighlighter .line.alt1 {
  background-color: #0d1017 !important;
}

    `;
    
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.appendChild(document.createTextNode(styleContent));
    document.head.appendChild(styleElement);
}

injectSyntaxHighlighterStyles();
