$("#add").click(function()
{
let doneButton = $("<button> Done </button>");
let deleteButton = $("<button id ='del'> Delete </button>");
let element = $('#txt').val();
let row = $('<tr></tr>');  //to store all the values inside a row in the table 
/*
$('table').append(element);
$('table').append(doneButton);
$('table').append(deleteButton);
*/

row.append(element);
row.append(doneButton);
row.append(deleteButton);
 $('table').append(row);
 


$('#txt').click(function(){
    $('#txt').css("borderColor","red");

});
doneButton.click(function(){
    row.css('backgroundColor',"red");
})


deleteButton.click(function(){

row.remove();
});

});