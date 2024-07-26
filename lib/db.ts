import { PrismaClient } from "@prisma/client";
import { validateRequest } from "./auth";

const prisma = new PrismaClient();


export  async function getData(){
    try {
        const { user } = await validateRequest();

        if (!user) {
            throw new Error("Unauthorized");
        }else{
            const tweets = await prisma.tweet.findMany({
                where: {
                    userId: user.id,
                },
                select: {
                    id: true,
                    tweetUrl: true,
                    userId: true,
                }
            });
            return { success: true, data: tweets };
        }

        

        
    }catch(error){
        console.error(`Error fetching tweets`,error);
        return {success : false , error : error}
    }finally{
        await prisma.$disconnect();
    }
}

export  async function deleteTweet({id} : {id : string}){
    try {
        const { user } = await validateRequest();
    if (!user) {
        throw new Error("Unauthorized");
    }

   const tweet = await prisma.tweet.delete({
        where : {
            id : id
        }
    })
    return { success : true,msg : "Deleted Tweet"}
        
    } catch (error) {
        console.error("Error Deleting tweet",error);
        return {success : false,msg : "Error while deleting the tweet"}

    }finally{
        await prisma.$disconnect();
    }
    
}