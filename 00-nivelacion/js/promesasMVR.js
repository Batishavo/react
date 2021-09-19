let x=10;
/*const p=new Promise((resolve,reject)=>{
    if(x==11){
        resolve('La variable = 10');
    }
    else{
        reject('La variable no es = 10');
    }
});
p
.then(res=>{
    console.log('sucess:'+res);
})
.catch(error=>{
    console.log('error:'+error);
});*/
/*const promesa = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        x=x*2+2;
        console.log('2. proceso terminado... ');
        resolve(x);
    },2000);
});
console.log('1. proceso terminado: ');
promesa.then(res=>{
    console.log('3. El resultado es:'+res);
});*/
let usuarios=[{
    id: 1,
    nombre:'Marcos'
},
{
    id:2,
    nombre:'Lena'
}];

let telefonos=[{
    id:1,
    telefono:12345678
},{
    id:2,
    telefono:12312345
}];
const obtenerUsuarios=id=>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuarios =>usuarios.id===id)){
            console.log('usuario existe');
            resolve(obtenerTelefonos(id));
        }
        else{
            reject('El usuario no existe');
        }
    });
};
const obtenerTelefonos=id=>{
    if(usuarios.find(telefonos =>telefonos.id===id)){
        resolve('telefono existe');
    }
    else{
        reject('El telefono no existe');
    }
};
obtenerUsuarios(2)
.then(res=>{
    return res;
    
})
.then(mensaje=>{
    console.log(mensaje);
})
.catch(error=>{
    console.log(error);
});