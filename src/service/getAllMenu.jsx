import { Api } from "../axios"

export const getAllMenu =async()=>{
    try{
        const data = await Api.get('/menu')
        return data
    }
    catch(err){
        console.log(err);
        
    }
}