"use sever"
import { NextRequest, NextResponse } from 'next/server'

import sharp from 'sharp';

export async function POST(request: NextRequest) {
    const AzureClassUrl:string = process.env.AZURE_CLASS||"";
    const PredictionKey: string = process.env.PRE_KEY||";"
    let data_ = "";
    
    const {data} = await request.json();

    const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
  
    const arrayBuffer = Buffer.from(base64Data, 'base64');
    const resizedImageBuffer = await sharp(arrayBuffer)
      .resize(640, 640)
      .toBuffer();

      const res = await fetch(AzureClassUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/octet-stream',
            'Prediction-Key':PredictionKey,

          },
          body: resizedImageBuffer, 
        }
        )
        ;
        data_ = await res.json()
    return Response.json(data_)
}