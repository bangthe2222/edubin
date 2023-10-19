"use sever"
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const AzureClassUrl:string = process.env.AZURE_CLASS||"";
    const PredictionKey: string = process.env.PRE_KEY||";"
    let data_ = "";
    const {data} = await request.json();
    const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
  
    const arrayBuffer = Buffer.from(base64Data, 'base64');
      const res = await fetch(AzureClassUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/octet-stream',
            'Prediction-Key':PredictionKey,

          },
          body: arrayBuffer, 
        }
        )
        ;
        data_ = await res.json()
    return Response.json(data_)
}