package com.mjcastellon.emsbackend.repository;

import com.mjcastellon.emsbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEmployeeRepository extends JpaRepository<Employee, Long> {
}
