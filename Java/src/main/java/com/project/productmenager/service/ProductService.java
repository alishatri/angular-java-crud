package com.project.productmenager.service;

import com.project.productmenager.exception.ProductNotFoundException;
import com.project.productmenager.model.Product;
import com.project.productmenager.repo.ProductRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class ProductService {

    private final ProductRepo productRepo;

    @Autowired
    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public Product addProduct(Product product) {
        log.info("Creating product..." + product.toString());
        return productRepo.save(product);
    }

    public List<Product> findAllProduct(Sort s) {
        return productRepo.findAll(s);
    }

    public Product updateProduct(Product product) {
        return productRepo.save(product);
    }

    public Product findProductById(Integer id) {
        return productRepo.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("its not found"));
    }

    public void deleteProduct(Integer id) {
        productRepo.deleteById(id);
    }

}
