import { useState } from "react";

export default function App() {
    return (
        <>
            <Main />
            <MainRight/>
        </>
    )
}


function Main() {


    return(
        <div className="bg-white p-6">
            <h1 className="text-2xl font-bold mb-6">Input Data</h1>
            <Form />
        </div>
    )
}

// ------------------ COMPONENT FORM
function Form() {
    const [mahasiswa, setMahasiswa] = useState({
        nama_lengkap :'',
        nim : '',
        semester : '',
        prodi : '',
        email : ''
    })

    function handleChange(e) {
        setMahasiswa({
            ...mahasiswa, [e.target.name] : e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault(); // Mencegah reload halaman
        if (!mahasiswa.nama_lengkap || !mahasiswa.nim) return;

        // Panggil prop handler untuk mengirim data ke komponen induk (App/Parent)
        // onAddMahasiswa(mahasiswa); 
        const formId = document.getElementById('formMahasiswa');
        console.log(mahasiswa); // Output data yang berhasil diisi
        formId.reset();
        
        // Reset form setelah submit (opsional)
        // setMahasiswa({ nama_lengkap: '', nim: '', semester: '', prodi: '', email: '' });
    }

    return (
        <form id="formMahasiswa" className="space-y-4">
            <FormField id="nama_lengkap" label="NAMA LENGKAP" placeholder="Masukkan Nama"
                value={mahasiswa.nama_lengkap} // Nilai dikontrol oleh state
                onChange={handleChange} // Perubahan diperbarui ke state
            />

            <FormField id="nim" label="NIM" placeholder="2411102441049"
                value={mahasiswa.nim}
                onChange={handleChange}
            />

            <FormField id="semester" label="SEMESTER" placeholder="1-8" type="number" // Mengganti type menjadi number
                value={mahasiswa.semester}
                onChange={handleChange}
            />

            <FormField id="prodi" label="PROGRAM STUDI"
                options={["TI", "SI", "T.Mesin", "T.Sipil"]} // Mengirim array of options
                value={mahasiswa.prodi}
                onChange={handleChange}
            />

            <FormField id="email" label="EMAIL" placeholder="2411102441049@gmail.com" type="email"
                value={mahasiswa.email}
                onChange={handleChange}
            />

            <div className="pt-2">
                <button type="submit" onClick={handleSubmit}
                    className="w-full cursor-pointer bg-gray-800 text-white py-2 px-4 font-semibold">KIRIM DATA
                </button>
            </div>
            <p className="text-xs text-gray-900 mt-2">Isi data mahasiswa dengan benar</p>
        </form>
    )
}


function FormField({id, label, placeholder, type='text', options, value, onChange}) {
    const isSelect = Array.isArray(options);
    return (
        <div>
            <label htmlFor={id} className="block text-black">{label}</label>

            {isSelect ? (
            <select className="mt-1 block w-full px-3 py-2 border border-gray-500 bg-white" 
                id={id} name={id} value={value} onChange={onChange} required >
                <option value="">--pilih--</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            ) : (
            <input 
                type={type} 
                id={id} 
                name={id} 
                placeholder={placeholder}
                className="mt-1 block w-full px-3 py-2 border border-gray-500 bg-white" 
                required
                value={value} // Penting untuk Controlled Component
                onChange={onChange} // Penting untuk Controlled Component
            />
            )}
        </div>
    )
}


function MainRight() {
    return (
        <div className="space-y-8">
            <InformasiPengirim />
            <TableMhs/>
            
        </div>
    )
}

function InformasiPengirim() {
    return (
        <div className="bg-white p-6 ">
            <h2 className="text-xl font-bold mb-4 pb-2">Informasi Pengirim</h2>
            <p className="mb-2 font-bold">Apa yang terjadi saat anda klik "kirim data"?</p>
            <ul className="list-inside space-y-1">
                <li>Data ditampilkan di console</li>
                <li>Data disimpan di array</li>
                <li>Jumlah data di-update</li>
                <li>Form akan kosong kembali</li>
            </ul>
        </div>
    )
}

function TableMhs() {
    return (
        <div className="bg-white p-6">
            <h2 className="text-xl font-bold mb-4">Table Mahasiswa</h2>
            <DataMhs/>
        </div>
    )
}


function DataMhs() {
    return (
        <div>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="text-left text-sm font-semibold text-black uppercase bg-gray-200">
                        <th className="px-4 py-2 border border-gray-300">No</th>
                        <th className="px-4 py-2 border border-gray-300">Nama</th>
                        <th className="px-4 py-2 border border-gray-300">Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">1</td>
                        <td className="px-4 py-2 border border-gray-300">Budi Susanto</td>
                        <td className="px-4 py-2 border border-gray-300">Prodi : TI<br />Semester<br></br> : 3</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">2</td>
                        <td className="px-4 py-2 border border-gray-300">Siti Nurfaka</td>
                        <td className="px-4 py-2 border border-gray-300">Prodi : SI<br />Semester : 4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}






