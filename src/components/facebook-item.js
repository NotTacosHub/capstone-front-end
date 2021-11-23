FB.api(
    '/me',
    'GET',
    { "fields": "id,name,posts" },
    function (response) {
        if (!response || response.error) {
            alert('Error occured');
        } else {
            alert('Post ID: ' + response.id);
        }
    });