package com.project.productmenager.repo;

import com.project.productmenager.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product , Integer> {
}
