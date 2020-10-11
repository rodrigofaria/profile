const saveButtonEvent = () => {
    
    let p = {
        post: document.getElementById('data').value
    };
    
    $.post("https://news-api-node.herokuapp.com/api/v1/news/796313bd-625b-4542-ac2c-f34b43967ccc", p)
        .done(() => {
            alert('sucesso cara')
            loadData()
        }
    );

    // var settings = {
    //     "url": "https://news-api-node.herokuapp.com/api/v1/news/796313bd-625b-4542-ac2c-f34b43967ccc",
    //     "method": "POST",
    //     "timeout": 0,
    //     "headers": {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*"
    //     },
    //     "data": JSON.stringify({"post":"<h1>Direto JS</h1><p>Teste 1/10</p>"}),
    //   };
      
    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
    //   });
}

const loadData = () => {
    $.get('https://news-api-node.herokuapp.com/api/v1/news/796313bd-625b-4542-ac2c-f34b43967ccc', data => {
        let container = document.getElementById('posts');
        container.innerHTML = '';

        data.forEach(item => {
            let p = document.createElement('p');
            let text = document.createTextNode(item.post);
            p.appendChild(text);
            container.appendChild(p);
        });
    });
}

window.onload = () => {
    document.getElementById('saveButton').onclick = saveButtonEvent

    loadData()
}
