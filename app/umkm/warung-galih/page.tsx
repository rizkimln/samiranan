'use client';

import type React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Phone, Mail, Calendar, Star, Users, Fish, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function TernakLeleDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/#umkm';
    setTimeout(() => {
      const umkmSection = document.getElementById('umkm');
      if (umkmSection) {
        umkmSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="font-bold text-sm sm:text-lg md:text-xl">Padukuhan Samiranan</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:bg-gray-700 text-sm md:text-base" onClick={handleBackToHome}>
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Kembali ke Home
              </Button>
            </nav>

            {/* Mobile back button */}
            <Button variant="ghost" className="md:hidden text-white hover:bg-gray-700 text-xs sm:text-sm" onClick={handleBackToHome}>
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Kembali
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-48 sm:h-64 md:h-80 lg:h-96">
        <div className="absolute inset-0">
          <img src="/warung.jpg?height=400&width=800&query=modern fish farming pond with biofloc system" alt="warung galih" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white">
            <Badge className="bg-yellow-500 text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2">Warung Sembako</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Warung Galih</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto px-4">Menyediakan berbagai kebutuhan sembako dan keperluan rumah tangga sehari-hari</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Tentang Warung Galih</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Warung Galih adalah usaha warung sembako keluarga yang telah melayani masyarakat sejak tahun 2018. Didirikan oleh Bapak Galih Setiawan, warung ini menyediakan berbagai kebutuhan sehari-hari mulai dari beras, minyak
                    goreng, bumbu dapur, hingga berbagai keperluan rumah tangga lainnya.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Selain sembako, Warung Galih juga menyediakan sayur-sayuran segar yang dipasok langsung dari petani lokal setiap pagi. Dengan komitmen memberikan produk berkualitas dan harga terjangkau, warung ini telah menjadi pilihan
                    utama warga sekitar untuk memenuhi kebutuhan dapur dan rumah tangga sehari-hari.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-7 md:mt-8">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Tahun Berdiri</div>
                        <div className="text-gray-600 text-xs sm:text-sm">2018</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Karyawan</div>
                        <div className="text-gray-600 text-xs sm:text-sm">1 orang</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Rating</div>
                        <div className="text-gray-600 text-xs sm:text-sm">4.6 (Rating Google Maps)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Jam Oprasional</div>
                        <div className="text-gray-600 text-xs sm:text-sm">05.00 - 20.00</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Produk & Layanan */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Produk & Layanan</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    {[
                      {
                        name: 'Sayuran Segar',
                        price: '-',
                        desc: 'Sayuran segar pilihan langsung dari kebun untuk kebutuhan dapur sehari-hari',
                      },

                      {
                        name: 'Sabun',
                        price: '-',
                        desc: 'Sabun berkualitas untuk kebersihan dan kesehatan keluarga',
                      },

                      {
                        name: 'Bumbu Masak',
                        price: '-',
                        desc: 'Bumbu masak lengkap untuk membuat masakan yang lezat dan nikmat',
                      },

                      {
                        name: 'Mainan Anak',
                        price: '-',
                        desc: 'Mainan edukatif dan hiburan yang aman untuk perkembangan anak',
                      },
                      {
                        name: 'Galon',
                        price: '-',
                        desc: 'Air galon bersih dan berkualitas untuk kebutuhan minum sehari-hari',
                      },

                      {
                        name: 'Bensin',
                        price: '-',
                        desc: 'Bahan bakar bensin berkualitas untuk kendaraan bermotor',
                      },
                    ].map((product, index) => (
                      <div key={index} className="border-l-4 border-yellow-500 pl-3 sm:pl-4">
                        <div className="flex justify-between items-start mb-1 sm:mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{product.name}</h4>
                          <span className="text-yellow-600 font-bold text-sm sm:text-base">{product.price}</span>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm">{product.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Contact Info */}
              <Card className="shadow-lg border-0 bg-yellow-50">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Informasi Kontak</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Pemilik</div>
                        <div className="text-gray-600 text-xs sm:text-sm">Bapak Sugiarta</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Telepon</div>
                        <div className="text-gray-600 text-xs sm:text-sm">+62 815-4280-2227</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Email</div>
                        <div className="text-gray-600 text-xs sm:text-sm">-</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Lokasi Kolam</div>
                        <div className="text-gray-600 text-xs sm:text-sm">Samiranan, Galur, Kulonprogo, Daerah Istimewa Yogyakarta</div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 sm:mt-5 md:mt-6 bg-yellow-500 hover:bg-yellow-600 text-black text-sm sm:text-base"
                    onClick={() => {
                      const phoneNumber = '6285728506735'; // Nomor pertama sebagai default
                      const message = 'Halo Bpk/Ibu , saya tertarik dengan produk warung Anda. Bisa minta informasi lebih lanjut?';
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Hubungi via WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Jam Operasional</h3>
                  <div className="space-y-2">
                    {[
                      { day: 'Senin - Sabtu', hours: '05:00 - 20:00' },
                      { day: 'Minggu', hours: '05:00 - 21:00' },
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">{schedule.day}</span>
                        <span className="font-semibold text-gray-900 text-xs sm:text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs sm:text-sm text-blue-700">
                      <strong>Catatan:</strong> Libur/ tutup warung ketika ada kepentingan saja
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
