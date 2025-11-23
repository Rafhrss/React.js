let dataMahasiswa = [
    {
        nama: "Budi Susanto",
        nim: "2411102440000",
        semester: "3",
        prodi: "TI",
        email: "2411102440000@umkt.ac.id"
    },
    {
        nama: "Siti Nurfaka",
        nim: "2411102440000",
        semester: "4",
        prodi: "SI",
        email: '2411102440000@umkt.ac.id'
    }
];
const form = document.getElementById('formMahasiswa');

// 2. Event Listener untuk Form Submit
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari input field
    const dataBaru = {
        nama: document.getElementById('nama_lengkap').value,
        nim: document.getElementById('nim').value,
        semester: document.getElementById('semester').value,
        prodi: document.getElementById('prodi').value,
        email: document.getElementById('email').value
    };
    // Tambahkan ke array global
    dataMahasiswa.push(dataBaru);

    // Update jumlah data (menampilkan array penuh di console)
    console.log("Jumlah data mahasiswa:", dataMahasiswa.length);
    console.log("Data Mahasiswa:", dataMahasiswa);
    form.reset();
});