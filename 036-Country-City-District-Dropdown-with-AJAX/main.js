var countries = [
    {
        "id": 1,
        "name": "Türkiye"
    },
    {
        "id": 2,
        "name": "Almanya"
    }
];

var cities = [
    {
        "id": 101,
        "name": "İstanbul",
        "country_id": 1
    },
    {
        "id": 102,
        "name": "İzmir",
        "country_id": 1
    },
    {
        "id": 103,
        "name": "Berlin",
        "country_id": 2
    }
];

var districts = [
    {
        "id": 1001,
        "name": "Kadıköy",
        "city_id": 101
    },
    {
        "id": 1002,
        "name": "Bornova",
        "city_id": 102
    },
    {
        "id": 1003,
        "name": "Mitte",
        "city_id": 103
    },
];


$(document).ready(function() {
    // İlk sayfa yüklendiğinde ülkeler listelenecek
    populateCountries();

    // Ülke seçimi değiştikçe şehirler listelenecek
    $('#country-dd').change(function(event) {
        populateCities($(this).val());
    });

    // Şehir seçimi değiştikçe İlçeler listelenecek
    $('#city-dd').change(function(event) {
        populateDistricts($(this).val());
    });

    // Ülkeleri dolduran fonksiyon
    function populateCountries() {
        $('#country-dd').html('<option value="">Select Country</option>');
        $.each(countries, function(index, country) {
            $('#country-dd').append('<option value="' + country.id + '">' + country.name + '</option>');
        });
    }

    // Şehirleri dolduran fonksiyon
    function populateCities(countryId) {
        $('#city-dd').html('<option value="">Select City</option>');
        $.each(cities, function(index, city) {
            if (city.country_id == countryId) {
                $('#city-dd').append('<option value="' + city.id + '">' + city.name + '</option>');
            }
        });
    }

    // İlçeleri dolduran fonksiyon
    function populateDistricts(cityId) {
        $('#district-dd').html('<option value="">Select District</option>');
        $.each(districts, function(index, district) {
            if (district.city_id == cityId) {
                $('#district-dd').append('<option value="' + district.id + '">' + district.name + '</option>');
            }
        });
    }
});