package de.immoinsight.dto;

import java.util.List;
import java.util.Map;

public class PriceStatistics {

    private double averagePrice;
    private double medianPrice;
    private double minPrice;
    private double maxPrice;
    private Map<String, Long> countByRegion;
    private Map<Integer, List<Double>> pricesByYear;

    // Constructor, Getters, Setters
    public PriceStatistics() {}

    public PriceStatistics(double avg, double med, double min, double max,
                           Map<String, Long> regions, Map<Integer, List<Double>> yearMap) {
        this.averagePrice = avg;
        this.medianPrice = med;
        this.minPrice = min;
        this.maxPrice = max;
        this.countByRegion = regions;
        this.pricesByYear = yearMap;
    }

    // Getters
    public double getAveragePrice() {
        return averagePrice;
    }

    public double getMedianPrice() {
        return medianPrice;
    }

    public double getMinPrice() {
        return minPrice;
    }

    public double getMaxPrice() {
        return maxPrice;
    }

    public Map<String, Long> getCountByRegion() {
        return countByRegion;
    }

    public Map<Integer, List<Double>> getPricesByYear() {
        return pricesByYear;
    }

    // Setters
    public void setAveragePrice(double averagePrice) {
        this.averagePrice = averagePrice;
    }

    public void setMedianPrice(double medianPrice) {
        this.medianPrice = medianPrice;
    }

    public void setMinPrice(double minPrice) {
        this.minPrice = minPrice;
    }

    public void setMaxPrice(double maxPrice) {
        this.maxPrice = maxPrice;
    }

    public void setCountByRegion(Map<String, Long> countByRegion) {
        this.countByRegion = countByRegion;
    }

    public void setPricesByYear(Map<Integer, List<Double>> pricesByYear) {
        this.pricesByYear = pricesByYear;
    }
}
