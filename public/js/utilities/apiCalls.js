
export const postRequest = (url, body) =>{
    return (fetch(url,{
        method:'POST',
        body: JSON.stringify(body),
        headers:{"Content-type":"application/json"}
    }))
}

export const authorizedGetRequest = async(url,access_token) =>{
  return(  await fetch(url,{
        headers:{
            "Authorization": `Bearer ${access_token}`,
            "Content-type":"application/json"}
    }))
}