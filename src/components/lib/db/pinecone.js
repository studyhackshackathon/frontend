import { PineconeClient } from '@pinecone-database/pinecone';

let pinecone = PineconeClient ;

const pinecone_api_key = process.env.NEXT_PUBLIC_PINECONE_DB_API_KEY;
const pinecone_env_key = process.env.NEXT_PUBLIC_PINECONE_DB_ENVIRONMENT_KEY;

export const getPineconeClient = async() =>{
    if(!pinecone){
        pinecone = new PineconeClient();
        await pinecone.init({
            apiKey: pinecone_api_key,
            environment: pinecone_env_key,
        });
    }
    return pinecone;
}

export const loadFileIntoPinecone = async(file_url) =>{
    // obtain the file -> download it and read its contents


}