import axios from 'axios';

export default async function New_Chat(pdf_id,access_user_token,question) {
	const env = process.env.NODE_ENV;

	const devbaseurl = process.env.NEXT_PUBLIC_DEV_BASEURL;
	const prodbaseurl = process.env.NEXT_PUBLIC_PROD_BASEURL;
  
	let base_url;
	if(env == "development"){
		base_url = devbaseurl;
	}else if(env == "production"){
		base_url = prodbaseurl;
	}
    let data = JSON.stringify({question: question});
    console.log(pdf_id,access_user_token,data)
	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: `${base_url}/chats/${pdf_id}`,
		headers: { 
			'Authorization': `${access_user_token}`,
		},
        data : data
	  };
	const result = await axios.request(config);
	return result?.data;
}