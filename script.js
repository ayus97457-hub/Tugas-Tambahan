function hitungSkor() {
    let score = 0;
    const totalSoal = 5;
    const resultBox = document.getElementById("result");

    // atur ulang class
    resultBox.classList.remove("lulus", "tidak-lulus");

    for (let i = 1; i <= totalSoal; i++) {
        const jawaban = document.querySelector('input[name="q' + i + '"]:checked');
        if (jawaban && jawaban.value === "1") {
            score += 20;
        }
    }

    resultBox.style.display = "block";
    document.getElementById("scoreText").innerText = "Skor Anda: " + score;

    if (score >= 70) {
        document.getElementById("statusText").innerText = "Status: LULUS";
        resultBox.classList.add("lulus");
    } else {
        document.getElementById("statusText").innerText = "Status: TIDAK LULUS";
        resultBox.classList.add("tidak-lulus");
    }
};

function ulangKuis() {
    location.reload();
}