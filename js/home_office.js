const saveButtonEvent = () => {
    
    let p = {
        post: document.getElementById('data').value
    };
    
    $.post("https://news-api-node.herokuapp.com/api/v1/news/796313bd-625b-4542-ac2c-f34b43967ccc", p)
        .done(() => {
            console.log('sucesso cara')
        }
    );
}

window.onload = () => {
    document.getElementById('saveButton').onclick = saveButtonEvent
}
