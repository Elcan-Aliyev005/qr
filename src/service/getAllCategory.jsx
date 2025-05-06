import { Api } from "../axios"

export const getAllCategories =async()=>{
    try{
        const data = await Api.get('')
        return data
    }
    catch(err){
        console.log(err);
        
    }
}