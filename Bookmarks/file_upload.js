chrome.fileSystem.chooseEntry({ type: 'openFile' }, function (readOnlyEntry) {
    if (!readOnlyEntry) {
        console.log('No file selected.');
        return;
    }
    readOnlyEntry.file(function (file) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            console.log(e.target.result); // File content
        };
        reader.readAsText(file);
    });
});