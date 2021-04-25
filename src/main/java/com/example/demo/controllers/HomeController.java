package com.example.demo.controllers;
import org.springframework.stereotype.Controller; 
import org.springframework.web.servlet.ModelAndView; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 

@Controller
public class HomeController {
	@RequestMapping(value= {"/home"}, method=RequestMethod.GET)
	 public ModelAndView home() {
		  ModelAndView model = new ModelAndView();  
		  model.setViewName("Home");
		  return model;
}
	@RequestMapping(value= {"/employe","/employe/index","/employe/form","/employe/edit/{id}"}, method=RequestMethod.GET)
	 public ModelAndView employe() {
		  ModelAndView model = new ModelAndView();  
		  model.setViewName("Employe");
		  return model;
}
}
