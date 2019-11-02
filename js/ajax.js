$(document).ready(function() {
    var url = "https://reqres.in/api/users?page=2";
    $.ajax({
        dataType: 'json',
        url: url,
    success: function(datas) {
        var result = "";
        datas.data.forEach(el => {
            result += `
                <tr>
                <td>${el.first_name}</td> 
                <td>${el.last_name}</td> 
                <td>${el.email}</td> 
                <td><img src="${el.avatar}" width="30" class="rounded-circle"</td> 
                </tr>
            `;
        });
        $('table').append(result); 
    }   
    });
});    