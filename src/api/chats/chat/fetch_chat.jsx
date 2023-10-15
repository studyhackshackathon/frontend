import axios from 'axios';

export default async function Fetch_Chats(pdf_id,access_token) {
	const env = process.env.NODE_ENV;

	const devbaseurl = process.env.NEXT_PUBLIC_DEV_BASEURL;
	const prodbaseurl = process.env.NEXT_PUBLIC_PROD_BASEURL;
  
	let base_url;
	if(env == "development"){
		base_url = devbaseurl;
	}else if(env == "production"){
		base_url = prodbaseurl;
	}
	let config = {
		method: 'get',
		maxBodyLength: Infinity,
		url: `${base_url}/chats/pdfs/${pdf_id}`,
		headers: { 
			'Authorization': `${access_token}`,
		},
	  };
	const result = await axios.request(config);
	return result?.data;
}