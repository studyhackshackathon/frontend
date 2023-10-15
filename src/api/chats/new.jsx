import axios from 'axios';

export default async function New(formData,access_token) {
	const env = process.env.NODE_ENV;

	const devbaseurl = process.env.NEXT_PUBLIC_DEV_BASEURL;
	const prodbaseurl = process.env.NEXT_PUBLIC_PROD_BASEURL;
  
	let base_url;
	if(env == "development"){
		base_url = devbaseurl;
	}else if(env == "production"){
		base_url = prodbaseurl;
	}
	console.log(Object.fromEntries(formData));
	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: `${base_url}/pdfs`,
		headers: { 
			"Content-Type": "multipart/form-data",
			'Authorization': `${access_token}`
		},
		data : formData
	  };
	
	axios.request(config).then((response) => {
		//console.log(JSON.stringify(response.data));
	}).catch((error) => {
		//console.log(error);
	});	
}