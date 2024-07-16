document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    // Contoh logika sederhana untuk cek khodam
    const khodam = getKhodam(name);
    document.getElementById('result').innerText = `Khodam untuk ${name} adalah ${khodam}.`;
});

function getKhodam(name) {
    // Daftar khodam gaul dan diluar nalar
    const khodams = [
        "Ninja Terbang", "Kodok Sakti", "Sapi Gokil", "Kucing Sihir",
        "Kuda Terbang", "Burung Hantu Bisu", "Semut Gaib", "Kura-Kura Ngebut",
        "Hiu Ngamuk", "Bebek Ngepot", "Ular Disko", "Keong Sakti",
        "Tikus Ajaib", "Buaya Darat", "Kadal Mutant", "Merpati Gaib",
        "Domba Lucu", "Panda Sakti", "Cacing Gaul", "Lumba-Lumba Nyanyi", "Raja Singa", "Tuyul Kayang"
    ];

    // Menggunakan bilangan acak untuk memilih khodam
    const randomIndex = Math.floor(Math.random() * khodams.length);
    return khodams[randomIndex];
}
