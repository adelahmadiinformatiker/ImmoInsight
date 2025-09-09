package de.immoinsight.service;

import de.immoinsight.model.House;
import de.immoinsight.repository.HouseRepository;
import de.immoinsight.dto.PriceStatistics;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class StatisticsService {

    private final HouseRepository houseRepository;

    public StatisticsService(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    public PriceStatistics getPriceStatistics() {
        List<House> houses = houseRepository.findAll();

        if (houses.isEmpty()) {
            return new PriceStatistics(); // یا پر کردن با صفر
        }

        List<Double> prices = houses.stream()
            .map(House::getPrice)
            .filter(Objects::nonNull)
            .sorted()
            .collect(Collectors.toList());

        double average = prices.stream().mapToDouble(Double::doubleValue).average().orElse(0);
        double median = prices.size() % 2 == 0
            ? (prices.get(prices.size() / 2 - 1) + prices.get(prices.size() / 2)) / 2
            : prices.get(prices.size() / 2);
        double min = prices.get(0);
        double max = prices.get(prices.size() - 1);

        Map<String, Long> regionCounts = houses.stream()
            .filter(h -> h.getRegion() != null)
            .collect(Collectors.groupingBy(House::getRegion, Collectors.counting()));

        Map<Integer, List<Double>> pricesByYear = houses.stream()
            .filter(h -> h.getYearBuilt() != null && h.getPrice() != null)
            .collect(Collectors.groupingBy(
                House::getYearBuilt,
                Collectors.mapping(House::getPrice, Collectors.toList())
            ));

        return new PriceStatistics(average, median, min, max, regionCounts, pricesByYear);
    }
}
