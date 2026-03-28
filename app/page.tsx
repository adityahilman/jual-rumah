import Image from "next/image";

export default function Home() {
  const whatsappNumber = "085742451546";
  const whatsappMessage = "Salam, nama saya [Ganti dengan nama anda], mau tanya soal rumah yang di andalusia cluster no A2";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-linear-to-r from-green-600 to-green-700 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            💚 Rumah Dijual / Dikontrakan di Citayam
          </h1>
          <p className="text-lg text-green-100">
            Lokasi Strategis • Dekat Stasiun • Bisa Masuk Mobil
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">📍 Lokasi</h2>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Andalusia Cluster (No A2)
            </p>
            <p className="text-gray-700">
              Jl. H. Thoyib, Rw. Panjang, Kecamatan Bojonggede, <br />
              Kabupaten Bogor, Jawa Barat 16920
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/RfMVJfGzoDc3Cssk6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            🗺️ Buka di Google Maps
          </a>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">✨ Lokasi Strategis</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-700">+/- 4km dari Stasiun Citayam</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-700">10 menit ke Pemda Cibinong</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-700">Dekat dengan Tol Citereup/Sentul</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-700">Dekat Cibinong City Mall</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-700">Dekat Rumah Sakit CITAMA</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span className="text-gray-700">Area sudah ramai dengan fasilitas</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            Indomaret, SDIT, SD Negeri, dan berbagai fasilitas publik lainnya
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">🏠 Spesifikasi Properti</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Luas Tanah</p>
              <p className="text-xl font-bold text-gray-800">89 m²</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Luas Bangunan</p>
              <p className="text-xl font-bold text-gray-800">~60 m²</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Kamar Tidur</p>
              <p className="text-xl font-bold text-gray-800">2</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Kamar Mandi</p>
              <p className="text-xl font-bold text-gray-800">1</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Daya Listrik</p>
              <p className="text-xl font-bold text-gray-800">2200W</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Air</p>
              <p className="text-xl font-bold text-gray-800">PAM</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-bold text-gray-800 mb-3">Fitur & Fasilitas:</h3>
            <ul className="space-y-2">
               <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span className="text-gray-700">Lebar rumah 7 meter</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span className="text-gray-700">Dapur luas dengan kitchen set atas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span className="text-gray-700">Pintu samping untuk parkir motor</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span className="text-gray-700">Kanopi di carport</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span className="text-gray-700">Sertifikat SHM (on hand)</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">💰 Harga</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded">
              <p className="text-sm text-orange-700 mb-2">Dikontrakan</p>
              <p className="text-3xl font-bold text-orange-600">Rp 15 Juta</p>
              <p className="text-gray-600 text-sm mt-2">per tahun</p>
            </div>
            
            <div className="bg-green-50 border-2 border-green-500 p-6 rounded">
              <p className="text-sm text-green-700 mb-2">Dijual</p>
              <p className="text-3xl font-bold text-green-600">Rp 425 Juta</p>
              <p className="text-gray-600 text-sm mt-2">💬 Bisa nego</p>
            </div>
          </div>
        </section>

        {true && (
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">📸 Galeri Foto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Dapur */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/dapur.jpg"
                  alt="Dapur"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-gray-50">
                  <p className="font-semibold text-gray-800 text-sm">Dapur Luas</p>
                </div>
              </div>

              {/* Kamar Tidur */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/kamar.jpg"
                  alt="Kamar Tidur"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-gray-50">
                  <p className="font-semibold text-gray-800 text-sm">Kamar Tidur</p>
                </div>
              </div>

              {/* Kamar Mandi */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/kamarmandi.jpg"
                  alt="Kamar Mandi"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-gray-50">
                  <p className="font-semibold text-gray-800 text-sm">Kamar Mandi</p>
                </div>
              </div>

              {/* Carport */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/carport.jpg"
                  alt="Carport"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-gray-50">
                  <p className="font-semibold text-gray-800 text-sm">Carport dengan Kanopi</p>
                </div>
              </div>

              {/* Area Dalam */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/areadalam.jpg"
                  alt="Area Dalam Rumah"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-gray-50">
                  <p className="font-semibold text-gray-800 text-sm">Area Dalam</p>
                </div>
              </div>

              {/* Teras */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/teras.jpg"
                  alt="Teras"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-gray-50">
                  <p className="font-semibold text-gray-800 text-sm">Teras Rumah</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <section className="bg-linear-to-r from-green-500 to-green-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Tertarik? Hubungi Pemilik Sekarang!</h2>
          <p className="text-lg mb-6 text-green-100">
            Chat langsung dengan pemilik rumah untuk informasi lebih detail, jadwal survey, atau negosiasi harga.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-contact-button"
            className="inline-block bg-white text-green-600 font-bold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors text-lg"
          >
            💬 Chat via WhatsApp: {whatsappNumber}
          </a>
          
          <p className="text-sm text-green-100 mt-4">
            ⚠️ Chat only - Hubungi langsung pemilik rumah
          </p>
        </section>

        {/* Info Footer */}
        <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="font-bold text-gray-800 mb-2">📋 Informasi Tambahan</h3>
          <ul className="text-gray-700 space-y-1">
            <li>✓ Sertifikat SHM sudah on hand (siap transaksi)</li>
            <li>✓ Lokasi sangat strategis dan dekat semua fasilitas</li>
            <li>✓ Area sudah berkembang dengan suasana yang ramai</li>
            <li>✓ Bisa masuk mobil, akses jalan mudah</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
