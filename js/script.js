function hitungLuas() {
    const sideLength = parseFloat(document.getElementById("sideLength").value);

    // Validasi input
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi yang valid (bilangan positif).");
        return;
    }

    const luas = sideLength * sideLength;
    document.getElementById("luasResult").textContent = luas.toFixed(2);
}

function hitungKeliling() {
    const sideLength = parseFloat(document.getElementById("sideLength").value);

    // Validasi input
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi yang valid (bilangan positif).");
        return;
    }

    const keliling = 4 * sideLength;
    document.getElementById("kelilingResult").textContent = keliling.toFixed(2);
}

function resetInput() {
    // Mengambil elemen input
    var sideLengthInput = document.getElementById("sideLength");

    // Mereset nilai input ke nilai awal (kosong)
    sideLengthInput.value = "";

    // Mereset hasil luas dan keliling
    document.getElementById("luasResult").textContent = "-";
    document.getElementById("kelilingResult").textContent = "-";
}
