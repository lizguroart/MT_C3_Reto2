function registro(){
    var item ={
        id: $("#myId").val(),
        specialty : $("#specialty").val(),
        graduate_year : $("#year").val(),
        department_id : $("#depID").val(),
        name : $("#name").val(),
    }

    var dataToSend= JSON.stringify(item);

    $.ajax({
            dataType:'json',
            data: item,
            url: "https://g1d3d2272f4acb4-db202109271920.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
            type:'POST',
            success: function(response) {
                console.log(response)
                location.reload();
            },
            error: function(jqXHR, textStatus, errorThrown){
            }
    });
};

function consulta(){
    $.ajax({
        dataType:'json',
        url: "https://g1d3d2272f4acb4-db202109271920.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:'GET',
        
        success: function(response) {
            for (let i = 0; i < response.items.length; i++) {
                $("#miResultado").append("<tr>");
                    $("#miResultado").append("<td>"+response.items[i].id+"</td>");
                    $("#miResultado").append("<td>"+response.items[i].specialty+"</td>");
                    $("#miResultado").append("<td>"+response.items[i].graduate_year+"</td>");
                    $("#miResultado").append("<td>"+response.items[i].department_id+"</td>");
                    $("#miResultado").append("<td>"+response.items[i].name+"</td>");
                    $("#miResultado").append('<td><button onclick="borrar('+response.items[i].id+')"> <i class="fa fa-trash"></i> </button></td>');
                    $("#miResultado").append('<td><button onclick="consultaItem('+response.items[i].id+')"> <i class="far fa-edit"></i> </button></td>');
                $("#miResultado").append("</tr>");
            }; 

        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

function borrar(idElemento) {
    var item = {
        id: idElemento
    }

    var dataToSend= JSON.stringify(item);

    $.ajax({
        dataType:'json',
        data: dataToSend,
        url: "https://g1d3d2272f4acb4-db202109271920.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:'DELETE',
        contentType: 'application/json',

        success: function(response) {
            console.log(response); 
            location.reload();
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
}; 

function consultaItem(idItem){
    $.ajax({
        dataType:'json',
        url: "https://g1d3d2272f4acb4-db202109271920.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor/"+idItem,
        type:'GET',

        success: function(response) {
            console.log(response);
            var item=response.items[0];

            $("#myId").val(item.id);
            $("#specialty").val(item.specialty);
            $("#year").val(item.graduate_year);
            $("#depID").val(item.department_id);
            $("#name").val(item.name);

        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

function actualizar(){
    var item ={
        id: $("#myId").val(),
        specialty : $("#specialty").val(),
        graduate_year : $("#year").val(),
        department_id : $("#depID").val(),
        name : $("#name").val(),
    }

    var dataToSend= JSON.stringify(item);

    $.ajax({
            dataType:'json',
            data: dataToSend,
            contentType: 'application/json',
            url: "https://g1d3d2272f4acb4-db202109271920.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
            type:'PUT',
            success: function(response) {
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){
            }
    });
};