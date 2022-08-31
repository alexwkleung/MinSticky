import './styles/index.css'
import { saveAs } from 'file-saver'

function stickies() {
    const app = document.getElementById('app') as HTMLElement;

    //sticky notes list array
    const stickyNote = [
        `
        <div id="buttonsContainer">
            <button id="save"><img src="/assets/save.png"></button>
            <button id="savesync"><img src="/assets/savesync.png"></button>
            <button id="normal"><img src="/assets/normal.png"></button>
            <button id="bold"><img src="/assets/bold.png"></button>
            <button id="italic"><img src="/assets/italic.png"></button>
            <button id="underline"><img src="/assets/underline.png"></button>
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
        const blob = new Blob([sticky.innerText as string], { type: "text/plain; charset=utf-8" });

        saveAs(blob, "minsticky.txt");
    }

    //save syncing 
    let createFile: FileSystemFileHandle;
    (document.getElementById('savesync') as HTMLElement).addEventListener('click', async () => {
        try { 
            createFile = await (window).showSaveFilePicker({
                suggestedName: 'minsticky.txt'
            });
            const file = await createFile.getFile();
            const content = await file.text();
        } catch (e) {
            console.error(e);
        }
    });

    (document.getElementById('sticky') as HTMLElement).addEventListener('keyup', async (e) => {
        if(typeof createFile !== 'undefined') {
            if((await createFile.queryPermission()) === 'granted') {
                const writable = await createFile.createWritable();
                await writable.write(sticky.innerText as string);
                await writable.close();
            }
        }
    });

    //disable drag for save button
    (document.getElementById('save') as HTMLElement).onmousedown = () => { 
        return false 
    };

    //disable drag for save sync button
    (document.getElementById('savesync') as HTMLElement).onmousedown = () => {
        return false;
    }

    //disable drag for normal button
    (document.getElementById('normal') as HTMLElement).onmousedown = () => {
        return false;
    }

    //disable drag for bold button
    (document.getElementById('bold') as HTMLElement).onmousedown = () => {
        return false;
    }

    //disable drag for italic button
    (document.getElementById('italic') as HTMLElement).onmousedown = () => {
        return false;
    }

    //disable drag for underline button
    (document.getElementById('underline') as HTMLElement).onmousedown = () => {
        return false;
    }
}
stickies();