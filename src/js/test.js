function fetchProjectWithToken(token,index) {
    const url = `https://api.github.com/repos/Orangeboi69/Orangeboi69.github.io/contents/src/test/${index}/item.json`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(projectData => {
        // The content of the file is base64 encoded, so we need to decode it
        const content = atob(projectData.content);
        console.log(content);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};let k = "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";
function fetchall(){
    for (let i = 0; i < 5; i++) {
        fetchProjectWithToken(k,(i+1));
    }
}