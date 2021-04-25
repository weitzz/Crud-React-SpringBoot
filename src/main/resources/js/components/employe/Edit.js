import React, { Component } from 'react';
import employeServices from "../services/Employe"


export default class Edit extends Component {
	constructor(){
		super()
			this.state ={
				id:0,
				fieldName:"",
				fieldEmail:"",
				fieldPhone:"",
				fieldAddress:""
			
		}
	}
	  async componentDidMount()
  {
     
     const id = this.props.match.params.id;
     const res = await employeServices.get(id)
     
     if (res.success) {
      
        this.setState({
          id: res.data.id,
          fieldName:res.data.name,
          fieldEmail:res.data.email,
          fieldAddress:res.data.address,
          fieldPhone:res.data.phone
        })
     }
     else {
       alert("Error ==>"+res.message)
     }
  }
	
  render() {

    let userId = this.props.match.params.id;

    return (
      <div>
        <h4>Editar usuário {userId} </h4>
        <hr />
        <div className="row">
          <div className="col-md-6 mb-3">
            <label for="firstName">Nome completo</label>
            <input type="text" className="form-control"
              value={this.state.fieldName}
              onChange={(value)=>this.setState({fieldName:value.target.value})}
            />
          </div>
        </div>

				<div className="row">
          <div className="col-md-6 mb-3">
						<label for="email">Email</label>
	          <input type="email" className="form-control" placeholder="you@example.com"
              value={this.state.fieldEmail}
              onChange={(value)=>this.setState({fieldEmail:value.target.value})}
             />
          </div>
        </div>

				<div className="row">
          <div className="col-md-6 mb-3">
						<label for="address">Endereço</label>
	          <input type="text" className="form-control" placeholder="1234 Main St"
              value={this.state.fieldAddress}
              onChange={(value)=>this.setState({fieldAddress:value.target.value})}
            />
          </div>
        </div>

				<div className="row">
          <div className="col-md-6 mb-3">
						<label for="address">Telefone </label>
	          <input type="text" className="form-control" placeholder="123467890"
              value={this.state.fieldPhone}
              onChange={(value)=>this.setState({fieldPhone:value.target.value})}
            />
          </div>
        </div>

				<div className="row">
					<div className="col-md-6 mb-3">
		      	<button className="btn btn-info btn-block" onClick={()=>this.onClickUpdate()}
		      		type="submit">Editar</button>
					</div>
				</div>
      </div>
    )
  }
  async onClickUpdate()
	{ 
    
		const res = await employeServices.update(this.state)
		if (res.success) {
			alert(res.message)
		}
		else {
     
			alert("Error ==>"+JSON.stringify(res.data))
		}
	}
  
}