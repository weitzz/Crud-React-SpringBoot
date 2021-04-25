const baseUrl = "http://localhost:8080/api/employe"
import axios from "axios";
const employe = {};



employe.get = async (id) => {
  const urlGet = baseUrl+"/get/"+id
  const res = await axios.get(urlGet)
  .then(response=> response.data )
  .catch(error=> error)
  return res;
}

employe.list = async()=>{
  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=>  response.data )
  .catch(error=> error )
   return res;
}
employe.create = async (state) => {

	const datapost = {
		name: state.fieldName,
		email: state.fieldEmail,
		phone: state.fieldPhone,
		address: state.fieldAddress
	}

	const urlPost = baseUrl+"/create"

	const res = await axios.post(urlPost,datapost)
	.then(response=> response.data )
	.catch(error=> error.response )

	return res;

  }


employe.update = async (state)=>{
	const datapost ={
	name: state.fieldName,
    email: state.fieldEmail,
    phone: state.fieldPhone,
    address: state.fieldAddress
	}
  const urlUpdate = baseUrl+"/update/"+state.id

  const res = await axios.put(urlUpdate,datapost)
  .then(response=>response.data )
  .catch(error=> error.response )

  return res;
}
	

employe.delete = async (id) => {
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=>  response.data )
  .catch(error => error )
  return res;
}










export default employe