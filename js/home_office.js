const saveButtonEvent = () => {
    
    // let p = {
    //     post: document.getElementById('data').value
    // };
    
    // $.post("https://news-api-node.herokuapp.com/api/v1/news/796313bd-625b-4542-ac2c-f34b43967ccc", p)
    //     .done(() => {
    //         console.log('sucesso cara')
    //     }
    // );

    var settings = {
        "url": "https://news-api-node.herokuapp.com/api/v1/news/796313bd-625b-4542-ac2c-f34b43967ccc",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({"post":"<h1>Direto JS</h1><p>Teste 1/10</p>"}),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

window.onload = () => {
    document.getElementById('saveButton').onclick = saveButtonEvent
}
