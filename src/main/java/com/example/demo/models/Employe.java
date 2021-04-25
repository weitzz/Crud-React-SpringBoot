package com.example.demo.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;



@Entity
@Table(name = "employe")
public class Employe {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	
	@NotEmpty (message = "Campo email é obrigatório!")
	@Email(message = "O valor '${validatedValue}' deve ser um endereço de email válido ")
	@Column(name = "email")
	private String email; 
	
	@Pattern(regexp = "^[\\p{L} .'-]+$", message = "O campo do nome pode conter apenas letras")
	@Column(name = "name")
	
	private String name;
	 
	@Digits(integer = 10,fraction = 0, message = "O campo do telefone deve ser menor ou igual a 10")
	@Column(name = "phone")
	private Long phone;
	
	@NotEmpty(message = "Campo endereço é obrigatório")
	@Column(name = "address")
	private String address;
	 
	public Employe() {
		super();
		
	} 

	public Employe(Integer id, String name, String email, String address, Long phone) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.address = address;
		this.phone = phone;
	} 

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}
  

}
