'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Phone, Mail, ChevronRight, Menu, Award, Ban, Sparkles, ArrowUp, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function VillageHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get actual header height dynamically
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 64;

      // Add extra offset for better positioning
      const extraOffset = 20;
      const elementPosition = element.offsetTop - headerHeight - extraOffset;

      window.scrollTo({
        top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-8 sm:h-10 lg:h-16">
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-5 lg:h-5 text-white" />
              </div>
              <span className="font-bold text-xs sm:text-sm lg:text-xl">Padukuhan Samiranan</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 lg:space-x-8">
              <a
                href="#home"
                className="hover:text-yellow-400 transition-colors text-sm lg:text-base cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
              <a
                href="#tentang"
                className="hover:text-yellow-400 transition-colors text-sm lg:text-base cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('tentang');
                }}
              >
                Tentang Padukuhan
              </a>
              <a
                href="#umkm"
                className="hover:text-yellow-400 transition-colors text-sm lg:text-base cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('umkm');
                }}
              >
                UMKM
              </a>
              <a
                href="#peta"
                className="hover:text-yellow-400 transition-colors text-sm lg:text-base cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('peta');
                }}
              >
                Peta Padukuhan
              </a>
              <a
                href="#kebudayaan"
                className="hover:text-yellow-400 transition-colors text-sm lg:text-base cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('kebudayaan');
                }}
              >
                Kebudayaan
              </a>
              <a
                href="#sejarah"
                className="hover:text-yellow-400 transition-colors text-sm lg:text-base cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sejarah');
                }}
              >
                Sejarah
              </a>
              <a
                href="#footer"
                className="hover:text-yellow-400 transition-colors text-sm lg:text-base cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('footer');
                }}
              >
                Kontak
              </a>
            </nav>

            <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-gray-700 p-1 cursor-pointer touch-manipulation" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-3 h-3 sm:w-4 sm:h-4" /> : <Menu className="w-3 h-3 sm:w-4 sm:h-4" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-gray-700 border-t border-gray-600">
              <nav className="px-2 py-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 transition-colors cursor-pointer touch-manipulation rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
                <a
                  href="#tentang"
                  className="block px-3 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 transition-colors cursor-pointer touch-manipulation rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('tentang');
                  }}
                >
                  Tentang Padukuhan
                </a>
                <a
                  href="#umkm"
                  className="block px-3 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 transition-colors cursor-pointer touch-manipulation rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('umkm');
                  }}
                >
                  UMKM
                </a>
                <a
                  href="#peta"
                  className="block px-3 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 transition-colors cursor-pointer touch-manipulation rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('peta');
                  }}
                >
                  Peta Padukuhan
                </a>
                <a
                  href="#kebudayaan"
                  className="block px-3 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 transition-colors cursor-pointer touch-manipulation rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('kebudayaan');
                  }}
                >
                  Kebudayaan
                </a>
                <a
                  href="#sejarah"
                  className="block px-3 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 transition-colors cursor-pointer touch-manipulation rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sejarah');
                  }}
                >
                  Sejarah
                </a>
                <a
                  href="#footer"
                  className="block px-3 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 transition-colors cursor-pointer touch-manipulation rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('footer');
                  }}
                >
                  Kontak
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/awal.jpg" alt="Desa Sumber Sejahtera landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-2 sm:px-4">
          <h1 className="text-lg sm:text-3xl lg:text-7xl font-bold mb-2 sm:mb-4 lg:mb-6 leading-tight">
            Selamat Datang di
            <br />
            <span className="text-yellow-400">Padukuhan Samiranan</span>
          </h1>
          <p className="text-xs sm:text-base lg:text-2xl mb-3 sm:mb-6 lg:mb-8 text-gray-200 max-w-2xl mx-auto">Padukuhan sejuk bernuansa wisata, menjaga tradisi, menuju kesejahteraan bersama.</p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-base lg:text-lg rounded-lg cursor-pointer touch-manipulation"
            onClick={() => scrollToSection('tentang')}
          >
            Jelajahi Padukuhan Kami
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2" />
          </Button>
        </div>
      </section>

      <section id="tentang" className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">Tentang Padukuhan Kami</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-xs sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Padukuhan Samiranan adalah desa bernuansa sejuk dengan kearifan lokal yang tetap terjaga. Berada di jalur wisata, kami bertekad mengembangkan desa wisata modern yang berdaya saing, demi meningkatkan kesejahteraan warga dan
              menarik lebih banyak pengunjung.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2 sm:gap-4 lg:gap-6">
              <div className="flex items-start gap-2 sm:gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Komunitas Solid</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Masyarakat yang gotong royong dan saling mendukung dalam setiap kegiatan pembangunan padukuhan.</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Ban className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Pelestarian Alam</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Aktivitas perburuan burung yang sempat marak di tahun 2000an kini sudah dilarang demi menjaga kelestarian alam.</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Harapan & Pengembangan</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Menjadi desa wisata modern dengan pembangunan gapura dan memanfaatkan jalur wisata untuk meningkatkan kesejahteraan warga.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6">
              <Card className="text-center p-2 sm:p-3 lg:p-6 shadow-lg border-0 bg-gray-50">
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">218</div>
                <div className="text-xs sm:text-xs lg:text-base text-gray-600">Total Penduduk</div>
              </Card>
              <Card className="text-center p-2 sm:p-3 lg:p-6 shadow-lg border-0 bg-gray-50">
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">3</div>
                <div className="text-xs sm:text-xs lg:text-base text-gray-600">UMKM Aktif</div>
              </Card>
              <Card className="text-center p-2 sm:p-3 lg:p-6 shadow-lg border-0 bg-gray-50">
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">-</div>
                <div className="text-xs sm:text-xs lg:text-base text-gray-600">Luas Area (km²)</div>
              </Card>
              <Card className="text-center p-2 sm:p-3 lg:p-6 shadow-lg border-0 bg-gray-50">
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">1992</div>
                <div className="text-xs sm:text-xs lg:text-base text-gray-600">Tahun Berkembang</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="umkm" className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">UMKM PADUKUHAN</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-xs sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">Produk unggulan dan usaha kreatif masyarakat yang menjadi kebanggaan padukuhan</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {[
              {
                name: 'Bandeng Presto Maju Terus',
                category: 'Kuliner Perikanan',
                description: 'Kelezatan ikan bandeng presto dengan daging lembut, segar, dan paduan aneka rempah pilihan. Cocok untuk menemani hidangan keluarga.',
                image: '/bandeng.jpg',
                slug: 'bandeng-presto',
              },
              {
                name: 'Tahu & Ayam Kentucky 45',
                category: 'Kuliner',
                description: 'Menyajikan berbagai pilihan tahu goreng dan ayam kentucky renyah dengan cita rasa khas yang menggugah selera setiap hari.',
                image: '/chiken.jpg',
                slug: 'tahu-ayam-kentucky',
              },
              {
                name: 'Warung Galih',
                category: 'Warung Sembako',
                description: 'Warung sembako lengkap menyediakan kebutuhan sehari-hari dan macam sayuran dengan harga terjangkau dan pelayanan ramah.',
                image: '/warung.jpg',
                slug: 'warung-galih',
              },
            ].map((business, index) => (
              <Link key={index} href={`/umkm/${business.slug}`}>
                <div className="overflow-hidden rounded-lg shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative h-24 sm:h-32 lg:h-48 bg-gray-200">
                    <img src={business.image} alt={business.name} className="w-full h-full object-cover object-center block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2" />
                        <span className="font-semibold text-xs sm:text-sm lg:text-base">Lihat Detail</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-4 lg:p-6">
                    <Badge className="bg-yellow-500 text-black mb-1 sm:mb-2 lg:mb-3 text-xs sm:text-sm">{business.category}</Badge>
                    <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 lg:mb-3 group-hover:text-yellow-600 transition-colors">{business.name}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{business.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="peta" className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">PETA PADUKUHAN</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">KENALI LOKASI PADUKUHAN JANGAN SAMPAI TERSESAT</p>
          </div>

          <div className="relative">
            <div
              className="w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              style={{
                aspectRatio: '3179 / 1699',
              }}
            >
              <img src="/denah.png" alt="Peta Desa Sumber Sejahtera" className="w-full h-full object-cover" />
            </div>

            <Card className="mt-4 sm:mt-6 shadow-xl border-0 bg-white">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base lg:text-lg">Lokasi Strategis</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2 sm:mb-3">Padukuhan Samiranan terletak di Kecamatan Galur, Kabupaten Kulon Progo, Provinsi Daerah Istimewa Yogyakarta</p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                  <span className="text-gray-600 text-sm sm:text-base">
                    Samiranan
                    <br />
                    Galur, Kulonprogo, Daerah Istimewa Yogyakarta
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="kebudayaan" className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">TRADISI & KEGIATAN</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-xs sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">Warisan budaya dan tradisi yang terus dilestarikan dari generasi ke generasi</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Upacara 17 Agustus',
                description: 'Peringatan kemerdekaan Indonesia dengan upacara bendera, lomba tradisional, dan berbagai kegiatan yang mempererat persatuan warga desa.',
                image: '/agustus1.jpg',
              },
              {
                title: 'Malam Selasa Keliwon',
                description: 'Malam yang dianggap sakral dalam tradisi Jawa, sering diisi dengan doa bersama, membahas kegiatan desa, transparansi kas padukuhan, dan urusan kemasyarakatan lainnya.',
                image: '/selasa.jpg',
              },
              {
                title: 'Senam Sore',
                description: 'Kegiatan olahraga rutin yang dilakukan bersama-sama di hari selasa ketika sore untuk menjaga kesehatan dan mempererat kebersamaan warga.',
                image: '/senam1.jpg',
              },
              {
                title: 'Pengajian Malam',
                description: 'Kegiatan keagamaan rutin berupa kajian Al-Quran dan hadits yang diselenggarakan untuk memperkuat nilai-nilai spiritual masyarakat.',
                image: '/pengajian.jpg',
              },
            ].map((culture, index) => (
              <Card key={index} className="overflow-hidden shadow-lg border-0 bg-white p-0">
                <div className="h-32 sm:h-48 lg:h-64 bg-gray-200 overflow-hidden">
                  <img src={culture.image} alt={culture.title} className="w-full h-full object-cover object-center" />
                </div>
                <CardContent className="p-2 sm:p-4 lg:p-6">
                  <h3 className="text-xs sm:text-lg lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-3 lg:mb-4">{culture.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{culture.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="sejarah" className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">SEJARAH PADUKUHAN</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-xs sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">Perjalanan panjang pembentukan dan perkembangan Padukuhan Samiranan dari masa ke masa</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500 h-full hidden lg:block"></div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {[
                {
                  year: '1985',
                  title: 'Penataan Dukuh Samiranan',
                  description:
                    'Dukuh Samiranan yang terletak di Kel. Nomporejo, Kap. Galur, Kab. Kulon Progo mulai tertata dengan baik. Pada masa ini kondisi infrastruktur masih minim dengan jalanan yang belum terbentuk dan lampu penerangan yang belum tersedia.',
                  side: 'left',
                },
                {
                  year: '1992',
                  title: 'Era Elektrifikasi',
                  description: 'Masuknya aliran listrik ke Dukuh Samiranan menjadi tonggak penting pembangunan desa. Hal ini membawa perubahan signifikan dalam kehidupan masyarakat dan membuka peluang pengembangan ekonomi lokal.',
                  side: 'right',
                },
                {
                  year: '2000an',
                  title: 'Periode Konservasi',
                  description: 'Era ketika terjadi perburuan burung yang kemudian dilarang. Dukuh Samiranan yang dikenal dengan keanekaragaman burung dan suasana angin sepoi-sepoi mulai fokus pada pelestarian lingkungan.',
                  side: 'left',
                },
                {
                  year: 'Sekarang',
                  title: 'Visi Desa Wisata Modern',
                  description:
                    'Pengembangan Dukuh Samiranan sebagai desa wisata modern dengan memanfaatkan posisi strategis yang dilewati jalur jalan wisata. Rencana pembangunan gapura desa dan fasilitas wisata untuk meningkatkan kesejahteraan warga.',
                  side: 'right',
                },
              ].map((event, index) => (
                <div key={index} className={`flex items-center ${event.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`w-full lg:w-5/12 ${event.side === 'right' ? 'lg:text-right' : ''}`}>
                    <Card className="shadow-lg border-0 bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-3 sm:p-4 lg:p-6">
                        <span className="bg-yellow-500 text-black font-bold text-xs sm:text-base lg:text-lg px-2 sm:px-3 py-1 rounded mb-3 sm:mb-4 inline-block">{event.year}</span>

                        <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{event.title}</h3>

                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <Card className="text-center p-3 sm:p-4 lg:p-6 shadow-lg border-0 bg-yellow-50">
              <div className="text-base sm:text-2xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">1985</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Tahun Berdiri</div>
            </Card>
            <Card className="text-center p-3 sm:p-4 lg:p-6 shadow-lg border-0 bg-yellow-50">
              <div className="text-base sm:text-2xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">1</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Kepala Padukuhan</div>
            </Card>
            <Card className="text-center p-3 sm:p-4 lg:p-6 shadow-lg border-0 bg-yellow-50">
              <div className="text-base sm:text-2xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">0</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Penghargaan</div>
            </Card>
            <Card className="text-center p-3 sm:p-4 lg:p-6 shadow-lg border-0 bg-yellow-50">
              <div className="text-base sm:text-2xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2">4</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Generasi</div>
            </Card>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-gray-800 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* About Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Tentang Padukuhan</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">Padukuhan Samiranan adalah desa bernuansa sejuk dengan kearifan lokal yang tetap terjaga.</p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Tautan Cepat</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#tentang"
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base cursor-pointer touch-manipulation"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('tentang');
                    }}
                  >
                    Tentang Padukuhan
                  </a>
                </li>
                <li>
                  <a
                    href="#umkm"
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base cursor-pointer touch-manipulation"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('umkm');
                    }}
                  >
                    UMKM
                  </a>
                </li>
                <li>
                  <a
                    href="#kebudayaan"
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base cursor-pointer touch-manipulation"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('kebudayaan');
                    }}
                  >
                    Kebudayaan
                  </a>
                </li>
                <li>
                  <a
                    href="#sejarah"
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base cursor-pointer touch-manipulation"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('sejarah');
                    }}
                  >
                    Sejarah
                  </a>
                </li>
                <li>
                  <a
                    href="#peta"
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base cursor-pointer touch-manipulation"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('peta');
                    }}
                  >
                    Peta Padukuhan
                  </a>
                </li>
              </ul>
            </div>

            {/* Team Members Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Tim Padukuhan</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="text-gray-300 text-sm sm:text-base">Kepala Padukuhan: Ibu Eka Yuli Astuti </li>
                <li className="text-gray-300 text-sm sm:text-base">Ketua RW 15 : Bpk. Suparjo</li>
                <li className="text-gray-300 text-sm sm:text-base">Ketua RW 16: Bpk. Pujo Prayitno </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Kontak</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                  <a href="tel:+6212345678901" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base cursor-pointer touch-manipulation">
                    +62 858 4299 6061
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                  <a href="mailto:info@samiranan.padukuhan.id" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base cursor-pointer touch-manipulation">
                    -
                  </a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mt-1" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    Samiranan
                    <br />
                    Galur, Kulonprogo, Daerah Istimewa Yogyakarta
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">© 2025 Padukuhan Samiranan.</p>
          </div>
        </div>

        <Button
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg cursor-pointer touch-manipulation"
          size="icon"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </footer>
    </div>
  );
}
