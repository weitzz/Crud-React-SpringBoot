import React, { Component } from 'react';

import employeServices from "../services/Employe"

export default class Form extends Component {

	constructor() {
		super();
		this.state = {
			fieldName: "",
			fieldEmail: "",
			fieldAddress: "",
			fieldPhone: "",
			errorField:[]
		}
	}

	render() {
		return (
			<div>
				<h4>Cadastrar Usuário </h4>
				<div className="row">
					<div className="col-md-6 mb-3">
						<label for="firstName">Nome completo</label>
						<input type="text" className="form-control" placeholder="Nome"
							value={this.state.fieldName}
							onChange={(event) => this.setState({ fieldName: event.target.value })}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 mb-3">
						<label for="email">Email</label>
						<input type="email" className="form-control" placeholder="email@example.com"
							value={this.state.fieldEmail}
							onChange={(event) => this.setState({ fieldEmail: event.target.value })}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 mb-3">
						<label for="address">Endereço</label>
						<input type="text" className="form-control" placeholder="Rua A 123"
							value={this.state.fieldAddress}
							onChange={(event) => this.setState({ fieldAddress: event.target.value })}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 mb-3">
						<label for="phone">Telefone </label>
						<input type="text" className="form-control" placeholder="123467890"
							value={this.state.fieldPhone}
							onChange={(event) => this.setState({ fieldPhone: event.target.value })}
						/>
					</div>
				</div>
				{
					this.state.errorField.map((itemerror)=>{
						return(
							<p className="text-danger">*{itemerror}</p>
						)
					})
				}
				
				<div className="row">
					<div className="col-md-6 mb-3">
						<button onClick={() => this.onClickSave()} className="btn btn-info btn-block" type="submit">Cadastrar</button>
					</div>
				</div>
			</div>
		)
	}

	async onClickSave()
	{
		const res = await employeServices.create(this.state)
		if (res.success) {
			alert(res.message)
			console.log(res);
			// window.location.replace("/employee/index")
		}
		else if (res.status==400) {
			console.log(res.status);
			const dataError = []
			const error = res.data.errors

			if (error) {
				error.map((itemerror)=>{
					console.log(itemerror.defaultMessage);
					dataError.push(itemerror.defaultMessage)
				})
				this.setState({errorField:dataError})
			}
			else {
				dataError.push(res.data.message)
				this.setState({errorField:dataError})
			}
		}
		else {
			// alert("Error ==>"+JSON.stringify(res))
			console.log(res);
			const dataError = []
			dataError.push(res.message);
			this.setState({errorField:dataError});
		}
	}


}

	


