const melumatlar = {
    "Təhsil": [
        "Azərbaycan Texniki Universiteti - İnformasiya Təhlükəsizliyi (1-ci kurs, 2024 - Davam edir)"
    ],
    "Bacarıqlar": [
        "✔Proqramlaşdırma dilləri (Python, C++, Java və s.)",
        "✔Frontend Texnologiyaları (HTML, CSS və s.)",
        "✔Ofis Proqramları (MS Word, MS Excel, MS PowerPoint)"
    ],
    "İş Təcrübəsi": ["Praktikaya Gediləcək"],
    "Haqqımda": [
        "Mən dəqiq, çevik və komanda ilə işləməyə həvəsli biriyəm. Verilən tapşırıqların öhdəsindən yüksək səviyyədə gəlmək üçün daim çalışıram. İşləyəcəyim vəzifə üçün bütün bacarıq və keyfiyyətlərimi səmərəli şəkildə istifadə etməyə və bu işə həvəslə yanaşmağa hazıram. Həmçinin, yeni təcrübə imkanlarını dəyərləndirməyə və biliklərimi genişləndirməyə maraqlıyam."
    ],
    "Şəxsi Keyfiyyətlər": [
        "✔Yüksək iş etikası",
        "✔Problemlərin səmərəli həlli",
        "✔Analitik düşünmək",
        "✔Təqdimat bacarıqları",
        "✔Yüksək ünsiyyət bacarığı",
        "✔Stressə davamlı",
        "✔Kollektiv ilə işləmə"
    ],
    "Hobbi və Maraqlar": [
        "İdman ilə məşğul olmaq, futbol oynamaq, inkişaf üçün əlavə biliklər əldə etməyə çalışmaq."
    ]
};
window.onload = function () {
    const bolmeler = document.getElementsByClassName("bolme");
    for (let i = 0; i < bolmeler.length; i++) {
        const bolme = bolmeler[i];
        const h2 = bolme.getElementsByTagName("h2")[0];
        const basliq = h2.textContent;  // trim() istifadə etmədən
        const icerik = bolme.getElementsByClassName("icerik")[0];
        const btn = bolme.getElementsByClassName("elave-et")[0];
        const input = bolme.getElementsByTagName("input")[0];
        if (melumatlar[basliq]) {
            const ul = document.createElement("ul");
            for (let j = 0; j < melumatlar[basliq].length; j++) {
                const li = document.createElement("li");
                li.textContent = melumatlar[basliq][j];
                li.onclick = function () {
                    const yeni = prompt("Məlumatı dəyiş:", li.textContent);
                    if (yeni) li.textContent = yeni;
                };
                ul.appendChild(li);
            }
            icerik.innerHTML = "";
            icerik.appendChild(ul);
        }
        h2.onclick = function () {
            if (icerik.style.display === "none") {
                icerik.style.display = "block";
            } else {
                icerik.style.display = "none";
            }
        };
        btn.onclick = function () {
            const melumat = input.value;
            if (melumat !== "") {
                let ul = icerik.getElementsByTagName("ul")[0];
                if (!ul) {
                    ul = document.createElement("ul");
                    icerik.innerHTML = "";
                    icerik.appendChild(ul);
                }
                const li = document.createElement("li");
                li.textContent = melumat;
                li.onclick = function () {
                    const yeni = prompt("Məlumatı dəyiş:", li.textContent);
                    if (yeni) li.textContent = yeni;
                };
                ul.appendChild(li);
                input.value = "";
            }
        };
    }
};