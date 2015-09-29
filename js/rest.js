function saveRoute(name, json) {
    alert("Send to server");
    $.ajax({
        type : "PUT",
        url: "http://127.0.0.1:8000/" + name,
        dataType : "text",
        data : "JKJKL",
        success : function(resp) {
            alert("success");
        }
    })

    .done(function( data ) {
        console.log("done");
    })
    .fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
        alert(textStatus);
    });
});