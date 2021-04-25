package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.models.Employe;
import com.sun.el.stream.Optional;


public interface EmployeRepository extends JpaRepository <Employe, Integer>{
	
	List<Employe> findByName(String name);
	List<Employe> findByNameLike(String name);

	java.util.Optional<Employe> findByEmail(String email);
	
}
