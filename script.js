const students = [
    {
        name: "SEVINOVA JASMINA",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-10/medium/1697973605_img_20231021_180034-copy.jpg"
    },
    {
        name: "MUHIDDINOVA LAYLO",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-10/medium/1697083970_photo_2023-10-12_08-50-03-3.jpg"
    },
    {
        name: "SOYIBOV SARDORBEK",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2024-05/medium/1716373980_photo_48_2024-05-22_14-45-36.jpg"
    },
     {
        name: "KARIMOV SHOHJAHON",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-04/medium/1680875967_photo_2023-04-06_20-14-42.jpg"
    },
     {
        name: "TOSHOVA NAVRUZOY",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2022-01/medium/1643461000_toshova3.jpg"
    },
     {
        name: "ESHMURODOV AMIRBEK",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2024-04/medium/1713930305_photo_60_2024-04-24_08-15-51.jpg"
    },
     {
        name: "USMONOV SARDORJON",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2024-10/medium/1729738177_img_e3362-kopirovat.jpg"
    },
       {
        name: "BOTIROV DOSTONBEK",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2025-11/medium/1763954717_photo_4_2025-11-24_08-21-50.jpg"
    },
       {
        name: "AHTAMOV JONIBEK",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-03/medium/1677727788_photo_2023-03-01_16-28-10-3.jpg"
    },
       {
        name: "ESHONQULOV SAIDAZIM",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-10/medium/1697008481_photo_2023-10-10_12-38-30-3.jpg"
    },
       {
        name: "XUDOYBERDIYEVA NIGORA",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2022-01/medium/1643460997_xudoyberdiyeva3.jpg"
    },
       {
        name: "SANAKULOVA ZARINA",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-06/medium/1685676430_photo_2023-06-01_21-33-52.jpg"
    },
       {
        name: "XOLMURODOV FARHOD",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-09/medium/1693541535_photo_2023-08-31_19-57-28-2.jpg"
    },
       {
        name: "MALIKOV XONDAMIR",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2024-11/medium/1731131684_img_3842-kopirovat.jpg"
    },
       {
        name: "TOSHPO'LATOV ULUG'BEK",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2024-04/medium/1713929647_photo_41_2024-04-24_08-15-51.jpg"
    },
       {
        name: "AXMEDOV SARVAR",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2024-02/medium/1707108212_photo_2024-02-05_09-07-26.jpg"
    },
      {
        name: "NOMOZOV DAVLATBEK",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2023-11/medium/1700451416_img_20231118_191227-copy.jpg"
    },
      {
        name: "BAHODIROV MUHAMMADALI",
        course: '"Kompyuter savodxonligi" o‘quv kursi bitiruvchisi',
        img: "https://sensorika.uz/uploads/posts/2024-06/medium/1717560820_img_2331-kopirovat.jpg"
    }
    
];

const container = document.getElementById("students");

students.forEach(s => {
    container.innerHTML += `
        <div class="card">
            <img src="${s.img}" alt="">
            <h3>${s.name}</h3>
            <p>${s.course}</p>
            <div class="stars">★★★★★</div>
        </div>
    `;
});
