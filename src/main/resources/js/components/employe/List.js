import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import employeServices from "../services/Employe";




export default class List extends Component {
	constructor()
  {
    super()
    this.state = {
      listEmploye:[]
    }
  }
  
  async componentDidMount()
  {
     
     const res = await employeServices.list()
     
     if (res.success) {
       this.setState({listEmploye:res.list})
     }
     else {
       alert("Error ==>"+res.message)
     }
  }
	
  render() {
    return (
      <section>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Endereço</th>
              <th scope="col">Telefone</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
           {
             this.state.listEmploye.map((data,index)=>{
               return(
                 <tr>
                   <th scope="row">{data.id}</th>
                   <td>{data.name}</td>
                   <td>{data.email}</td>
                   <td>{data.address}</td>
                   <td>{data.phone}</td>
                   <td>
                     <Link className="btn btn-outline-info" to={"/employe/edit/"+data.id}>Editar</Link>
                     <a  onClick={()=>this.onClickDelete(index,data.id)}
                        href="#" className="btn btn-danger"> Delete </a>
                   </td>
                 </tr>
               )
             })
           }
          </tbody>
        </table>
      </section>
    )
  }
  async onClickDelete(index,id)
  {
    let yes = confirm("Deseja excluir este usuário?");
    if (yes === true){ 
      
      const res = await employeServices.delete(id)

      if (res.success) {
        alert(res.message)
        const list = this.state.listEmploye
        list.splice(index,1)
        this.setState({listEmploye:list})
      }
      else{
        console.log(res); alert(JSON.stringify(res))
      } 
    }
  }
}
