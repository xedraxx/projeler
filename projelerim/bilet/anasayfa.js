document.addEventListener('DOMContentLoaded', function() {
    // Şehir verileri (bu veriler gerçek bir API'den veya veri kaynağından dinamik olarak yüklenmelidir)
    const cities = [
        'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Gaziantep', 'Konya', 'Mersin', 'Kayseri'
    ];

    // Şehirleri dropdown listelerine ekleyin
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');

    cities.forEach(city => {
        const optionFrom = document.createElement('option');
        optionFrom.value = city;
        optionFrom.textContent = city;
        fromSelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = city;
        optionTo.textContent = city;
        toSelect.appendChild(optionTo);
    });
});

function searchFlights() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Örnek uçuş verileri
    const flights = [
        { id: 1, from: 'İstanbul', to: 'Ankara', date: '2024-10-10', price: '1000 TL', flightNumber: 'TK 1001', time: '07:00' },
        { id: 2, from: 'İstanbul', to: 'Ankara', date: '2024-10-10', price: '1100 TL', flightNumber: 'TK 1002', time: '13:00' },
        { id: 3, from: 'İstanbul', to: 'İzmir', date: '2024-10-15', price: '600 TL', flightNumber: 'TK 2001', time: '09:00' },
        { id: 4, from: 'İstanbul', to: 'İzmir', date: '2024-10-15', price: '620 TL', flightNumber: 'TK 2002', time: '16:40' },
        { id: 5, from: 'Ankara', to: 'İzmir', date: '2024-10-20', price: '1200 TL', flightNumber: 'TK 3001', time: '11:00' },
        { id: 6, from: 'Ankara', to: 'İzmir', date: '2024-10-20', price: '1400 TL', flightNumber: 'TK 3002', time: '18:00' },
        { id: 7, from: 'Ankara', to: 'Bursa', date: '2024-10-20', price: '1300 TL', flightNumber: 'TK 3006', time: '13:50' },
        { id: 8, from: 'Ankara', to: 'Antalya', date: '2024-10-20', price: '1450 TL', flightNumber: 'TK 3007', time: '21:00' },
        { id: 9, from: 'Bursa', to: 'Ankara', date: '2024-10-20', price: '1250 TL', flightNumber: 'TK 3008', time: '01:45' },
        { id: 10, from: 'Bursa', to: 'Ankara', date: '2024-10-20', price: '1100 TL', flightNumber: 'TK 3009', time: '19:30' },
        { id: 11, from: 'Bursa', to: 'İstanbul', date: '2024-10-20', price: '950 TL', flightNumber: 'TK 3089', time: '04:30' },
        { id: 12, from: 'Bursa', to: 'İstanbul', date: '2024-10-20', price: '800 TL', flightNumber: 'TK 3084', time: '09:00' },
        { id: 13, from: 'Antalya', to: 'İzmir', date: '2024-10-20', price: '650 TL', flightNumber: 'TK 3091', time: '06:45' },
        { id: 14, from: 'Antalya', to: 'Bursa', date: '2024-10-20', price: '1750 TL', flightNumber: 'TK 3011', time: '11:00' },
        { id: 15, from: 'Antalya', to: 'İstanbul', date: '2024-10-20', price: '1900 TL', flightNumber: 'TK 3011', time: '10:40' },
        { id: 16, from: 'Antalya', to: 'Ankara', date: '2024-10-20', price: '1500 TL', flightNumber: 'TK 3031', time: '11:45' },
        { id: 17, from: 'Adana', to: 'Antalya', date: '2024-10-20', price: '2150 TL', flightNumber: 'TK 3031', time: '17:00' },
        { id: 18, from: 'Adana', to: 'İzmir', date: '2024-10-20', price: '4150 TL', flightNumber: 'TK 3051', time: '22:50' },
        { id: 19, from: 'Adana', to: 'Bursa', date: '2024-10-20', price: '6550 TL', flightNumber: 'TK 3071', time: '03:30' },
        { id: 20, from: 'Adana', to: 'İstanbul', date: '2024-10-20', price: '2400 TL', flightNumber: 'TK 3001', time: '02:40' },
        { id: 21, from: 'İzmir', to: 'İstanbul', date: '2024-10-20', price: '2400 TL', flightNumber: 'TK 3051', time: '12:00' },
        { id: 22, from: 'İzmir', to: 'Antalya', date: '2024-10-20', price: '780 TL', flightNumber: 'TK 3021', time: '22:40' },
        { id: 23, from: 'İzmir', to: 'Adana', date: '2024-10-20', price: '6710 TL', flightNumber: 'TK 3301', time: '12:40' },
        { id: 24, from: 'İzmir', to: 'Gaziantep', date: '2024-10-20', price: '6400 TL', flightNumber: 'TK 3501', time: '03:15' },
        { id: 25, from: 'Mersin', to: 'Gaziantep', date: '2024-10-20', price: '4430 TL', flightNumber: 'TK 3201', time: '04:15' },
        { id: 26, from: 'Mersin', to: 'Antalya', date: '2024-10-20', price: '5400 TL', flightNumber: 'TK 7001', time: '12:30' },
        { id: 27, from: 'Mersin', to: 'izmir', date: '2024-10-20', price: '6000 TL', flightNumber: 'TK 5001', time: '06:45' },
        { id: 28, from: 'Mersin', to: 'İstanbul', date: '2024-10-20', price: '4380 TL', flightNumber: 'TK 3601', time: '19:15' },
        { id: 29, from: 'Konya', to: 'İstanbul', date: '2024-10-20', price: '5380 TL', flightNumber: 'TK 3601', time: '19:15' },
        { id: 30, from: 'Kayseri', to: 'İstanbul', date: '2024-10-20', price: '6580 TL', flightNumber: 'TK 3601', time: '19:15' }
    ];

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Filtreleme
    const filteredFlights = flights.filter(flight =>
        (from === '' || flight.from === from) &&
        (to === '' || flight.to === to) &&
        (date === '' || flight.date === date)
    );

    if (filteredFlights.length > 0) {
        filteredFlights.forEach(flight => {
            resultsDiv.innerHTML += `
                <div class="result-item">
                    <h3>${flight.from} - ${flight.to}</h3>
                    <p>Tarih: ${flight.date}</p>
                    <p>Saat: ${flight.time}</p>
                    <p>Uçuş Numarası: ${flight.flightNumber}</p>
                    <p>Fiyat: ${flight.price}</p>
                    <a href="satınal.html?id=${flight.id}">Satın Al</a>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = '<p>Uygun uçuş bulunamadı.</p>';
    }
}
