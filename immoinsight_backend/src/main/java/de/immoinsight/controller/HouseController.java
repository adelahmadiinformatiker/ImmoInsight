package de.immoinsight.controller;

import de.immoinsight.model.House;
import de.immoinsight.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/houses")
public class HouseController {
    private final HouseRepository repo;

    @Autowired
    public HouseController(HouseRepository repo) {
        this.repo = repo;
    }

    // Paging & Sorting
    @GetMapping
    public Page<House> getAll(Pageable pageable) {
        return repo.findAll(pageable);
    }

    @PostMapping
    public House create(@Valid @RequestBody House house) {
        return repo.save(house);
    }

    @GetMapping("/{id}")
    public House getById(@PathVariable Long id) {
        return repo.findById(id).orElseThrow();
    }

    @PutMapping("/{id}")
    public House update(@PathVariable Long id, @Valid @RequestBody House house) {
        house.setId(id);
        return repo.save(house);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }

    // Erweiterung: Suche nach Region und Preisbereich
    @GetMapping("/search")
    public Page<House> search(
            @RequestParam(required = false) String region,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            Pageable pageable) {
        return repo.findAll((root, query, cb) -> {
            var predicates = new java.util.ArrayList<jakarta.persistence.criteria.Predicate>();
            if (region != null && !region.isBlank())
                predicates.add(cb.equal(root.get("region"), region));
            if (minPrice != null)
                predicates.add(cb.ge(root.get("price"), minPrice));
            if (maxPrice != null)
                predicates.add(cb.le(root.get("price"), maxPrice));
            return cb.and(predicates.toArray(new jakarta.persistence.criteria.Predicate[0]));
        }, pageable);
    }
} 