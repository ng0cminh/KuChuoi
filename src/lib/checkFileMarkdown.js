fileTypes = ['.md', '.mdx', '.txt'];

function isMarkdown (file) {

    fileTypes.forEach(type => {
        file.includes(type);

    });
}