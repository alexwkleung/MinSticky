import './styles/index.css'
import { saveAs } from 'file-saver'

function stickies() {
    const app = document.getElementById('app') as HTMLElement;

    //sticky notes list array
    const stickyNote = [
        `
        <div id="buttonsContainer">
            <button id="save"><img src="src/icons/save.png"></button>
            <button id="normal"><img src="src/icons/normal.png"></button>
            <button id="bold"><img src="src/icons/bold.png"></button>
            <button id="italic"><img src="src/icons/italic.png"></button>
            <button id="underline"><img src="src/icons/underline.png"></button>
        </div>

        <div id="stickyContainer">
            <div id="sticky" contenteditable="true"></div>
        </div>
        `,
    ];

    //insert sticky notes list into dom
    for(let i = 0; i < stickyNote.length; i++) {
        app.insertAdjacentHTML('beforeend', stickyNote[i]);
    }

    //normal formatting (must select all text and click this in order to reset formatting)
    const normal = document.getElementById('normal') as HTMLElement;
    normal.addEventListener('click', (): void => {
        document.execCommand("removeFormat", false);
    });

    //bold formatting
    const bold = document.getElementById('bold') as HTMLElement;
    bold.addEventListener('click', (): void => {
        document.execCommand("bold", false);
    });

    //italic formatting
    const italic = document.getElementById('italic') as HTMLElement;
    italic.addEventListener('click', (): void => {
        document.execCommand("italic", false);
    });

    //underline formatting
    const underline = document.getElementById('underline') as HTMLElement;
    underline.addEventListener('click', (): void => {
        document.execCommand("underline", false);
    });

    const save = document.getElementById('save') as HTMLElement;
    const sticky = document.getElementById('sticky') as HTMLElement;

    //save text from stickies to .txt when save button is clicked
    save.onclick = (): void => {
        const blob = new Blob([sticky.textContent as string], { type: "text/plain; charset=utf-8" });

        saveAs(blob, "minsticky.txt");
    }
}
stickies();