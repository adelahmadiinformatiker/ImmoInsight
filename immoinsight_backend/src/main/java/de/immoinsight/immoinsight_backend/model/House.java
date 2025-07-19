package de.immoinsight.immoinsight_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Titel darf nicht leer sein")
    private String title;

    @NotBlank(message = "Region darf nicht leer sein")
    private String region;

    @NotNull(message = "Preis ist erforderlich")
    @Positive(message = "Preis muss positiv sein")
    private Double price;

    @NotNull(message = "Fläche ist erforderlich")
    @Positive(message = "Fläche muss positiv sein")
    private Double area; // Quadratmeter

    @NotNull(message = "Zimmeranzahl ist erforderlich")
    @Min(value = 1, message = "Mindestens 1 Zimmer")
    private Integer rooms;

    @NotBlank(message = "Typ ist erforderlich")
    private String type; // z.B. Wohnung, Haus, Gewerbe

    private LocalDate date;
    private String description;
    private Integer yearBuilt; // Baujahr
    private Boolean furnished; // Möbliert
    private Boolean balcony; // Balkon vorhanden
    private Boolean parking; // Parkplatz vorhanden
    private String energyClass; // Energieeffizienzklasse
    private String imageUrl; // Vorschaubild/URL

    @Email(message = "Ungültige E-Mail-Adresse")
    private String contactEmail; // Kontakt für Anfragen

    // Standard-Konstruktor
    public House() {
    }

    // Getter & Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Integer getRooms() {
        return rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getYearBuilt() {
        return yearBuilt;
    }

    public void setYearBuilt(Integer yearBuilt) {
        this.yearBuilt = yearBuilt;
    }

    public Boolean getFurnished() {
        return furnished;
    }

    public void setFurnished(Boolean furnished) {
        this.furnished = furnished;
    }

    public Boolean getBalcony() {
        return balcony;
    }

    public void setBalcony(Boolean balcony) {
        this.balcony = balcony;
    }

    public Boolean getParking() {
        return parking;
    }

    public void setParking(Boolean parking) {
        this.parking = parking;
    }

    public String getEnergyClass() {
        return energyClass;
    }

    public void setEnergyClass(String energyClass) {
        this.energyClass = energyClass;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }
}
