const targetElement = document.querySelector('.item.center.menC');
document.querySelectorAll('[id*="yandex"]').forEach(el => el.remove());
document.querySelectorAll('.date, .socBlock, .nav').forEach(el => el.remove());
if (targetElement) {
    document.body.innerHTML = ''; 
    document.body.appendChild(targetElement);
}


function injectSyntaxHighlighterStyles() {
    const styleContent = `
    :root[theme='dark'] {
	--body-bg-color: #191B20;
	--container-bg-color: #16213E;
	--menc-bg-color:#191B20;
	--body-text-color: #F9F9F9;
	--mentA-text-color: #F9F9F9;
	--fa-border-color:#F9F9F9;
	--fa-hover-color:#F9F9F9;
	--a-text-color:#E94560;
	--h-text-color:#F9F9F9;
	--menu-bg-color: #0F3460;
	--menu-second-bg-color: #0F3460;
	--menu-text-color:#F9F9F9;
	--menu-text-shadow-width: 0px;
	--sprite-img: url(https://metanit.com/img/sprites4.png);
	--codef-bgcolor:#1A1A2E;
	--code-bgcolor:#16213E;
	--code-keyword:#E94560;
	--code-plain:#F9F9F9;
	--code-comment:#0F3460;
	--code-string:#E94560;
	--tree-selcolor:#E94560;
	--tree-selbgcolor:#16213E;
	--fa-adjust:"\f185";
	--bottom-color:#F9F9F9;
	--socbtn-color:#F9F9F9;
	--logo-color:#F9F9F9;
	--logo-hover-color:#E94560;
	--legend-text-color: #F9F9F9;
	--dop-txt-color:#F9F9F9;
	--dop-hover-txt-color:#E94560;
	--console-bgcolor:#0F3460;
	--console-textcolor:#F9F9F9;
	--contpage-color:#F9F9F9;
	--content-a-seltxtcolor:#F9F9F9;
	--tabhead-bgcolor:#16213E;
	--tab-bgcolor:#0F3460;
}

code {
  font-family: monospace;
  font-weight: bold;
  border: 1px #256fb0 solid;
  padding: 5px;
  margin: 6px;
  border-radius: 4px;
}

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

// Создаем кнопку
const copyButton = document.createElement("button");
copyButton.textContent = "Скопировать HTML";
copyButton.style.position = "fixed";
copyButton.style.top = "10px";
copyButton.style.left = "10px";
copyButton.style.zIndex = "1000";
copyButton.style.padding = "10px 15px";
copyButton.style.backgroundColor = "#007bff";
copyButton.style.color = "#fff";
copyButton.style.border = "none";
copyButton.style.borderRadius = "5px";
copyButton.style.cursor = "pointer";


document.body.insertBefore(copyButton, document.body.firstChild);
function escapeBackticks(str) {
    return str.replace(/`/g, "\\`"); // Заменяем ` на \`
}

copyButton.addEventListener("click", async () => {
    try {
        const htmlContent = escapeBackticks(document.body.innerHTML); 
        const textToCopy = "document.body.innerHTML += `" + htmlContent + "`";

        await navigator.clipboard.writeText(textToCopy);
        alert("HTML страницы скопирован!");
    } catch (err) {
        console.error("Ошибка копирования:", err);
    }
});


