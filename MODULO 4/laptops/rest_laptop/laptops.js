const IP="192.168.100.14";
const PORT=3002;
const URL="http://"+IP+":"+PORT+"/"

export const getAllLaptops=(fnRefreshList)=>{
    fetch(
    URL+"laptops"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )
}

export const saveLaptopRest=(laptop,fnShowMessage)=>{
    const config={
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            marca: laptop.brand,
            memoria: laptop.memory,
            disco: laptop.disc
        })
    }
    fetch(
        URL+"laptops",config
        ).then(
            response=>response.json()
        ).then(body=>{
            fnShowMessage();
            console.log(body);
        }) 
}

export const uptdateLaptopRest=(laptop,fnShowMessage)=>{
    const config={
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id: laptop.id,
            marca: laptop.brand,
            memoria: laptop.memory,
            disco: laptop.disc
        })
    }
    fetch(
        URL+"laptops/"+laptop.id,config
        ).then(
            response=>response.json()
        ).then(body=>{
            fnShowMessage();
            console.log(body);
        }) 
}