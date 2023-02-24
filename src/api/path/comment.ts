import { Get } from "../server"

function getCommentsAllById(id: string) { 
    return Get("comment",{
        id
    });
}


export const shoporderApi = {
	getCommentsAllById
}