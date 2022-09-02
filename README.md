# MinSticky

![minsticky](./img/minsticky.png)

A single page sticky note with formatting options. Replicates a WYSIWYG style of text formatting.

Written in TypeScript. Icons are from Material Symbols.

WIP.

Do not use this for permanent text saving. This is merely meant for copy and pasting down temporary things like website links and very small notes. No personal or important information should be written as there is a high chance of losing your data.

# Saving, Opening, and Formatting

There are two save options.

1) The first icon is the save syncing function. You'll have to click on the first icon initially to create a `.txt` file (saved in the directory of your choice), and it will automatically save changes to the file when you write in the sticky note text area. Once you close the tab, save syncing will stop. Be careful if you reload your browser since you'll stop syncing changes as well.

2) The second icon is the standard save text function. This will save your text as a `.txt` file. Be careful if you reload your browser, since you'll lose all changes as there is no persistent storage at the moment. Regular saving is added for browsers that don't support the File System Access API.

You can also open a file.

1) The third icon is the open syncing function. You'll have to click on the third icon initially to open a file (preferrably a `.txt` file), and open the contents into the sticky note text area if there are any. It automatically saves changes to the opened file when you write in the sticky note text area. Once you close the tab, the syncing will stop. Be careful if you reload your browser since you'll stop syncing changes as well since there is no persistent storage at the moment.

**Note:** The save and open syncing is done by the File System Access API, so you will need a browser that supports it to benefit from the features. A Chromium-based browser (i.e., Chrome, Edge, etc) is preferred.

Files are plain text only and any rich text formatting (bold, italic, underline, etc) will not be included in both opening and saving.

Lastly, there are also text formatting options. At the moment there is no active indicators to see which formatting options you're currently using.

1) Bold text formatting. If you want to undo bold formatting, click on the bold icon again to go back to normal text.

2) Italic text formatting. If you want to undo italic formatting, click on the italic icon again to go back to normal text.

3) Underline text formatting. If you want to undo underline formatting, click on the underline icon again to go back to normal text.
