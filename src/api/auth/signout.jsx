import axios from 'axios';
import Cookies from 'universal-cookie';

export default async function SignOut(access_token) {
	const cookies = new Cookies();
	const env = process.env.NODE_ENV;

	const devbaseurl = process.env.NEXT_PUBLIC_DEV_BASEURL;
	const prodbaseurl = process.env.NEXT_PUBLIC_PROD_BASEURL;
  
	let base_url;
	if(env == "development"){
		base_url = devbaseurl;
	}else if(env == "production"){
		base_url = prodbaseurl;
	}
	cookies.remove('user_token', { path: '/' });
	cookies.remove('user_id', { path: '/' });
	return true;
}