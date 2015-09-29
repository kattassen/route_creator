function saveRoute(name, json) {
    //alert("Send to server");
    $.ajax({
        type : "PUT",
        url: "http://127.0.0.1:8000/" + name,
        dataType : "text",
        data : "JKJKL",
        success : function(resp) {
            alert("success");
        },
        error: function (xhr, textStatus, errorThrown) {
            if (xhr.status == 0 || xhr.readyState == 0) {
                alert("Server down?");
            } else {
                if (xhr.status == 409) {
                    alert("Route already exists");
                }
                alert(xhr.status);
                alert(textStatus);
                alert(errorThrown);
            }
        }
    })
    .done(function( data ) {
        console.log("done");
    })
    .fail(function(xhr, textStatus, errorThrown) {
        //Prevent error on navigating from page
        if (xhr.status == 0 || xhr.readyState == 0)
            return;
        else
        alert(xhr.status);
        alert(textStatus);
        alert(errorThrown);
    });
}