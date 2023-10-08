import axios from 'axios';
import Cookies from 'universal-cookie';

export default async function SignUp(payload) {
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
		method: 'post',
		maxBodyLength: Infinity,
		url: `${base_url}/register`,
		headers: { 
		  'Content-Type': 'application/json'
		},
		data : payload
	};
	const result = await axios.request(config);
	return result;
}