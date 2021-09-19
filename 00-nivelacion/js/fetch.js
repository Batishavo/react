//ESTO ES AJAX
//XMLHttpRequest
//SOAP
/*
NO ES CONVENIENTE DE USAR
<XML>
</XML>
 */
//REST ES CHIDO
//function fetch(input:RequestInfo,int?:RequestInfo):
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
});