import { PrismaClient } from "@prisma/client";
import { validateRequest } from "./auth";

const prisma = new PrismaClient();


export default async function getData(){
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