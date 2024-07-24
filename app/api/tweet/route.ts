import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateIdFromEntropySize } from "lucia";
import { validateRequest } from "@/lib/auth";

const prisma = new PrismaClient();

export  async function POST(request : NextRequest){
  const { user } = await validateRequest();

  if(!user){
    throw new Error("Unauthorized")
  }
  try {
    const { tweetUrl } = await request.json();

    const id  = generateIdFromEntropySize(10)

    const response = await prisma.tweet.create({
        data : {
            id : id,
            tweetUrl :  tweetUrl,
            userId : user?.id
        }
    })

    if(response){
        return Response.json({
            msg : "Added to Data Base",
            response
        },{status: 201})
    }else{
        return Response.json({
            msg : "Error while adding to dataBase",
            response
        },{status : 401})
    }

  } catch (error) {
    return Response.json({ error: "Failed to create tweet" }, { status: 500 });
  }finally{
    prisma.$disconnect();
  }

}


