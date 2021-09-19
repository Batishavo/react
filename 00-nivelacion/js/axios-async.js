const peticion=async()=>{
    const {data} =await axios.get(
        "https://jsonplaceholder.typicode.com/users/3"
    );
    //console.log(data);
    return data;

};
const data =peticion().then(console.log);