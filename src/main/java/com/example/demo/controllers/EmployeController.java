package com.example.demo.controllers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.validation.annotation.Validated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.example.demo.models.Employe;
import com.example.demo.repository.EmployeRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;





@RestController
@RequestMapping("/api/employe/")

/*
@RequestMapping("/api/employe/")*/

public class EmployeController {
	@Autowired
	EmployeRepository employeRepository;
	
	@PostMapping(value="/create")
	public Map<String,Object> create(@RequestBody @Valid Employe data){
		HashMap<String,Object> response = new HashMap<String,Object>();
	try {
			
			Optional<Employe> validEmail = employeRepository.findByEmail(data.getEmail());
			
			if(validEmail.isPresent()) { 
				response.put("message", "Email "+data.getEmail()+"já cadastrado!");
				response.put("sucesso", false);
				return response;
			}
			else { 
				employeRepository.save(data);
				response.put("message", "Salvo com sucesso");  
				response.put("sucesso", true);
				return response;
			}
			 
			
		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("sucesso",false);
			return response;
		}
}
	
	
	@GetMapping(value="/list")
	public Map<String, Object> list(){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try { 
			List<Employe> employeList; 
			employeList = employeRepository.findAll();
			response.put("message","Editado com sucesso");
			response.put("list",employeList);
			response.put("success",true);
			return response;
			
		} catch (Exception e) {  
			response.put("message",e.getMessage()); 
			response.put("success ",false);
			return response;
		}
	}
	
	@GetMapping(value = "get/{id}" )
	public Map<String, Object> data(@PathVariable("id") Integer id){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try {   
			
			Optional<Employe> employe = employeRepository.findById(id);  
		 
			if (employe.isPresent()) { 
				response.put("message","Successful load");
				response.put("data",employe);
				response.put("success",true);
				return response;
			}
			else {
				response.put("message","Usuário não encontrado");
				response.put("data",null);
				response.put("success",false);
				return response;
			}
			
		} catch (Exception e){ 
			response.put("message",""+e.getMessage()); 
			response.put("success",false);
			return response;
		}
	} 
	
	@PutMapping(value="/update/{id}")  
	public Map<String, Object> update(@PathVariable("id") Integer id,
			@RequestBody Employe data ){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try {  
			data.setId(id);
			employeRepository.save(data);
			response.put("message","Editado com sucesso"); 
			response.put("success",true);
			return response;
		} catch (Exception e) {
			response.put("message",e.getMessage()); 
			response.put("success",false);
			return response;
		}
		
	} 
	
	@DeleteMapping(value="/delete/{id}")
	public Map<String, Object> update(@PathVariable("id") Integer id){
		
		HashMap<String, Object> response = new HashMap<String, Object>();
		
		try {  
			employeRepository.deleteById(id);;
			response.put("message","Usuário deletado"); 
			response.put("success", true);
			return response; 
		} catch (Exception e) {
			response.put("message",e.getMessage()); 
			response.put("success", false);
			return response;
		}
		
	}
}