import './styles/index.css'
import { saveAs } from 'file-saver'

function stickies() {
    const app = document.getElementById('app') as HTMLElement;

    //sticky notes list array
    const stickyNote: string[] = [
        `
        <div id="buttonsContainer">
            <button id="save"><img src="/assets/save.png"></button>
            <button id="saveas"><img src="/assets/saveas.png"></button>
            <button id="open"><img src="/assets/open.png"></button>
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
    const saveas = document.getElementById('saveas') as HTMLElement;
    const open = document.getElementById('open') as HTMLElement;
    const sticky = document.getElementById('sticky') as HTMLElement;

    //save syncing 
    let createFile: FileSystemFileHandle;
    save.addEventListener('click', async () => {
        try { 
            createFile = await (window).showSaveFilePicker({
                suggestedName: 'minsticky.txt'
            });
            const file: File = await createFile.getFile();
            const content: string = await file.text();
        } catch (e) {
            console.error(e);
        }
    });

    (document.getElementById('sticky') as HTMLElement).addEventListener('keyup', async (e) => {
        if(typeof createFile !== 'undefined') {
            if((await createFile.queryPermission()) === 'granted') {
                const writable: FileSystemWritableFileStream = await createFile.createWritable();
                await writable.write(sticky.innerText as string);
                await writable.close();
            }
        }
    });

    //open syncing 
    let fileHandle: FileSystemFileHandle;
    const openFile = async () => {
        open.addEventListener('click', async () => {
            [fileHandle] = await showOpenFilePicker();
            const file = await fileHandle.getFile();
            const contents = await file.text();
            (document.getElementById('sticky') as HTMLElement).innerText = contents;
        });
    }

    (document.getElementById('sticky') as HTMLElement).addEventListener('keyup', async (e) => {
        if(typeof fileHandle !== 'undefined') {
            if((await fileHandle.queryPermission()) === 'granted') {
                const writable: FileSystemWritableFileStream = await fileHandle.createWritable();
                await writable.write(sticky.innerText as string);
                await writable.close();
            }
        }
    });

    open.onclick = async () => {
        await openFile();
    }

    //regular saving
    saveas.onclick = (): void => {
        const blob: Blob = new Blob([sticky.innerText as string], { type: "text/plain; charset=utf-8" });

        saveAs(blob, "minsticky.txt");
    }

    //disable drag for save button
    save.onmousedown = () => { 
        return false;
    };

    //disable drag for saveas button
    saveas.onmousedown = () => { 
        return false;
    };

    //disable drag for open button
    open.onmousedown = () => {
        return false;
    }

    //disable drag for normal button
    normal.onmousedown = () => {
        return false;
    }

    //disable drag for bold button
    bold.onmousedown = () => {
        return false;
    }

    //disable drag for italic button
    italic.onmousedown = () => {
        return false;
    }

    //disable drag for underline button
    underline.onmousedown = () => {
        return false;
    }
}
stickies();