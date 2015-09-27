$(document).ready(function() {
    $.ajax({
        type : "PUT",
        url: "http://127.0.0.1:8000/TJO",
        dataType : "text",
        data : "HEJHEJ"
    })

    .done(function( data ) {
        console.log("done");
    })
    .fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
        alert(textStatus);
    });
});