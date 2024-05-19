import { NextResponse } from "next/server";


export const POST = async (req, { params }) => {
   
   const body = await req.json()
   const { articleId } = params
   const searchParams = req.nextUrl.searchParams;
   const searchParamsObj = Object.fromEntries(searchParams)
   

   return NextResponse.json({success: true, ...body, articleId, ...searchParamsObj})

} 