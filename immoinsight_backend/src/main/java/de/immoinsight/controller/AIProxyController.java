package de.immoinsight.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class AIProxyController {

    private final RestTemplate restTemplate;
    private final String AI_SERVICE_URL = "http://localhost:8001";

    @Autowired
    public AIProxyController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    /**
     * Proxy für Text-Analyse
     */
    @PostMapping("/analyze")
    public ResponseEntity<String> analyzeText(@RequestBody Map<String, String> request) {
        try {
            String url = AI_SERVICE_URL + "/analyze";
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            
            HttpEntity<Map<String, String>> entity = new HttpEntity<>(request, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
            
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body("{\"error\": \"AI Service nicht verfügbar\", \"detail\": \"" + e.getMessage() + "\"}");
        }
    }

    /**
     * Proxy für Immobilienanalyse
     */
    @PostMapping("/analyze/house")
    public ResponseEntity<String> analyzeHouse(@RequestBody Map<String, Object> houseData) {
        try {
            String url = AI_SERVICE_URL + "/analyze/house";
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(houseData, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
            
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body("{\"error\": \"AI Service nicht verfügbar\", \"detail\": \"" + e.getMessage() + "\"}");
        }
    }

    /**
     * Health-Check für AI Service
     */
    @GetMapping("/health")
    public ResponseEntity<String> checkAIHealth() {
        try {
            String url = AI_SERVICE_URL + "/health";
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(503)
                .body("{\"status\": \"unhealthy\", \"service\": \"ai\", \"error\": \"" + e.getMessage() + "\"}");
        }
    }
} 