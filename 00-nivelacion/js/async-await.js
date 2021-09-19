/*const saludo=async()=>{
    return("Hola mundo");
};
saludo().then(response=>console.log(response));*/
const peticion=async()=>{
    setTimeout(()=>{
        const datos={
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
        };
        console.log(datos);
    },10);

};
peticion().then(console.log);