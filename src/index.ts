import './styles/index.css'

function stickies() {
    const app = document.getElementById('app') as HTMLElement;

    //sticky notes list array
    const stickyNotesList = [
        `
        <div class="container">
            <button id="save">Save</button>
            <button id="normal">Normal</button>
            <button id="bold">Bold</button>
            <button id="italic">Italic</button>
            <button id="underline">Underline</button>
        
            <div class="stickyContainer">
                <div id="sticky" contenteditable="true"></div>
            </div>
        </div>
        `,

        `
        <div class="container">
            <button id="save">Save</button>
            <button id="normal">Normal</button>
            <button id="bold">Bold</button>
            <button id="italic">Italic</button>
            <button id="underline">Underline</button>

            <div class="stickyContainer">
                <div id="sticky" contenteditable="true"></div>
            </div>
        </div>
        `,
    ];

    //insert sticky notes list into dom
    for(let i = 0; i < stickyNotesList.length; i++) {
        app.insertAdjacentHTML('beforeend', stickyNotesList[i]);
    }

    const textArea = document.getElementById('sticky') as HTMLElement;
    const normal = document.getElementById('normal') as HTMLElement;
    const bold = document.getElementById('bold') as HTMLElement;
    const italic = document.getElementById('italic') as HTMLElement;
    const underline = document.getElementById('underline') as HTMLElement;

    function doExecCommand(command: string) {
        document.execCommand(command, false, 'div');
        textArea.focus();
    }

    normal.addEventListener('click', (): void => {
        doExecCommand("removeFormat");
    });

    bold.addEventListener('click', (): void => {
        doExecCommand("bold");
    });

    italic.addEventListener('click', (): void => {
        doExecCommand("italic");
   });

    underline.addEventListener('click', (): void => {
        doExecCommand("underline");
   });
}
stickies();