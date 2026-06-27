import React, { useState } from 'react';
import { Award, Check, X, RotateCcw, Play, CheckCircle, User } from 'lucide-react';

const quizData = [
  // ==========================================
  // PERTEMUAN 1: EVOLUSI TEORI ATOM & PARTIKEL DASAR (Q1 - Q10)
  // ==========================================
  {
    question: "Konsep awal mengenai keberadaan partikel terkecil yang tidak dapat dibagi lagi dicetuskan oleh Democritus dengan istilah...",
    options: ["Nukleus", "Elektron", "Atomos", "Orbital"],
    correct: 2,
    explanation: "Democritus menamai partikel penyusun materi terkecil tersebut dengan nama 'atomos' (dalam bahasa Yunani: a = tidak, tomos = terbagi/dipotong)."
  },
  {
    question: "John Dalton merumuskan teori atom modern pertama pada tahun 1808 berdasarkan hasil eksperimen hukum reaksi kimia, yaitu...",
    options: [
      "Hukum Kelipatan Perbandingan & Hukum Perbandingan Tetap",
      "Hukum Kekekalan Massa & Hukum Perbandingan Tetap",
      "Hukum Lavoisier & Hukum Proust",
      "Semua jawaban di atas benar"
    ],
    correct: 3,
    explanation: "Teori atom Dalton didasarkan pada Hukum Kekekalan Massa (Lavoisier), Hukum Perbandingan Tetap (Proust), serta Dalton sendiri merumuskan Hukum Kelipatan Perbandingan (Hukum Perbandingan Berganda)."
  },
  {
    question: "Kelemahan mendasar dari model bola pejal yang dikemukakan oleh John Dalton adalah...",
    options: [
      "Menganggap atom sebagai partikel terkecil tak terbagi dan tidak dapat menerangkan adanya isotop",
      "Tidak dapat menjelaskan spektrum gas hidrogen secara empiris",
      "Tidak memperhitungkan gaya tarik elektrostatik antar orbit",
      "Tidak menunjukkan adanya kulit-kulit lintasan elektron stasioner"
    ],
    correct: 0,
    explanation: "Dalton menganggap atom tidak memiliki struktur internal dan tak terbagi. Kenyataannya atom tersusun atas partikel subatomik (proton, neutron, elektron) dan terdapat isotop (massa berbeda pada unsur sejenis)."
  },
  {
    question: "Partikel subatomik bermuatan negatif (elektron) berhasil diidentifikasi oleh J.J. Thomson menggunakan alat percobaan berupa...",
    options: [
      "Hamburan partikel alfa lempeng emas",
      "Tabung sinar katode (Cathode Ray Tube)",
      "Spektroskopi emisi gas hidrogen",
      "Mikroskop optik resolusi tinggi"
    ],
    correct: 1,
    explanation: "Melalui tabung sinar katode, Thomson membuktikan bahwa sinar katode bermuatan negatif dibelokkan ke arah kutub bermuatan positif, membuktikan keberadaan elektron."
  },
  {
    question: "Model atom J.J. Thomson yang menggambarkan atom sebagai bola bermuatan positif dengan elektron tersebar merata di dalamnya dikenal sebagai model...",
    options: ["Model Roti Kismis", "Model Tata Surya", "Model Bola Pejal", "Model Awan Elektron"],
    correct: 0,
    explanation: "Model ini dikenal sebagai Plum Pudding Model (Model Roti Kismis) karena elektron bermuatan negatif tersebar di dalam bola positif seperti kismis di dalam roti."
  },
  {
    question: "Percobaan hamburan partikel alfa pada lempeng emas tipis oleh Ernest Rutherford menghasilkan kesimpulan utama berupa...",
    options: [
      "Elektron bermuatan negatif bergerak pada lintasan kulit stasioner",
      "Sebagian besar atom merupakan ruang kosong dengan muatan positif terpusat di inti atom",
      "Atom berbentuk bola padat homogen yang tidak dapat ditembus",
      "Elektron memiliki sifat dualisme gelombang-partikel"
    ],
    correct: 1,
    explanation: "Karena sebagian besar partikel alfa menembus lempeng tanpa menyimpang, disimpulkan atom berupa ruang kosong. Partikel yang dipantulkan membuktikan adanya inti atom (nukleus) yang bermuatan positif di tengah."
  },
  {
    question: "Kelemahan teori atom Rutherford menurut hukum fisika klasik adalah...",
    options: [
      "Tidak dapat menentukan posisi elektron secara pasti di dalam orbital",
      "Elektron yang terus bergerak mengelilingi inti akan kehilangan energi dan akhirnya jatuh ke inti",
      "Tidak dapat menerangkan perbedaan massa antar isotop unsur sejenis",
      "Tidak memperhitungkan sifat gelombang dari elektron bermassa kecil"
    ],
    correct: 1,
    explanation: "Menurut teori elektromagnetik klasik Maxwell, partikel bermuatan yang dipercepat (seperti elektron yang mengitari inti) memancarkan radiasi energi, sehingga energinya berkurang dan lintasannya akan runtuh spiral menabrak inti."
  },
  {
    question: "Niels Bohr menyempurnakan kelemahan teori Rutherford dengan menyatakan bahwa...",
    options: [
      "Elektron bergerak mengelilingi inti pada lintasan melingkar tertentu (tingkat energi stasioner) tanpa memancarkan energi",
      "Posisi elektron dapat diprediksi secara tepat menggunakan persamaan gelombang",
      "Elektron tersebar di dalam bola bermuatan positif seperti kismis",
      "Inti atom mengandung proton bermuatan positif dan neutron netral"
    ],
    correct: 0,
    explanation: "Menurut Bohr, selama berada pada lintasan/kulit stasioner tertentu, elektron tidak memancarkan atau menyerap energi sehingga struktur atom tetap stabil."
  },
  {
    question: "Apa yang terjadi jika elektron mengalami transisi (berpindah) dari kulit berenergi rendah (kulit dalam) ke kulit berenergi tinggi (kulit luar)?",
    options: [
      "Elektron akan memancarkan energi foton/cahaya",
      "Elektron akan menyerap energi foton",
      "Elektron akan bergabung dengan proton membentuk neutron",
      "Elektron akan keluar sepenuhnya dari atom (ionisasi)"
    ],
    correct: 1,
    explanation: "Perpindahan elektron ke lintasan luar (tingkat energi lebih tinggi) dinamakan eksitasi, dan proses ini memerlukan penyerapan energi (menyerap foton)."
  },
  {
    question: "Kelemahan utama dari teori atom Niels Bohr yang mendorong lahirnya mekanika kuantum adalah...",
    options: [
      "Tidak dapat menerangkan efek Zeeman dan spektrum atom berelektron banyak",
      "Menganggap atom sebagai bola pejal bermuatan positif",
      "Menyatakan elektron bergerak secara acak tanpa lintasan",
      "Tidak mengenal adanya inti atom yang masif di pusat"
    ],
    correct: 0,
    explanation: "Teori Bohr sangat baik untuk atom hidrogen (satu elektron), tetapi tidak mampu menerangkan spektrum atom berelektron banyak maupun pemisahan garis spektrum dalam medan magnet (Efek Zeeman)."
  },

  // ==========================================
  // PERTEMUAN 2: NOTASI ATOM, ISOTOP, ISOBAR, ISOTON (Q11 - Q20)
  // ==========================================
  {
    question: "Lambang suatu unsur disusun dalam notasi ₉¹⁹F. Angka 19 di bagian atas menunjukkan...",
    options: [
      "Nomor atom (jumlah proton)",
      "Nomor massa (jumlah proton + neutron)",
      "Jumlah elektron valensi F",
      "Jumlah neutron saja"
    ],
    correct: 1,
    explanation: "Pada notasi nuklida Z^A X, huruf A (bagian atas) melambangkan Nomor Massa yang merupakan jumlah total proton ditambah neutron di dalam inti."
  },
  {
    question: "Nomor atom (Z) dari suatu unsur netral menunjukkan informasi vital berupa...",
    options: [
      "Jumlah neutron di dalam inti atom",
      "Total nomor massa dikurangi jumlah proton",
      "Jumlah proton sekaligus jumlah elektron dalam keadaan netral",
      "Jumlah kulit lintasan yang dimiliki atom"
    ],
    correct: 2,
    explanation: "Nomor atom (Z) menunjukkan jumlah proton dalam inti. Pada atom netral (tidak bermuatan), jumlah elektron bermuatan negatif sama dengan jumlah proton bermuatan positif."
  },
  {
    question: "Sebuah atom natrium netral memiliki lambang ₁₁²³Na. Berapakah jumlah proton, elektron, dan neutronnya berturut-turut?",
    options: [
      "11 proton, 11 elektron, 12 neutron",
      "11 proton, 12 elektron, 11 neutron",
      "12 proton, 11 elektron, 12 neutron",
      "23 proton, 11 elektron, 12 neutron"
    ],
    correct: 0,
    explanation: "Nomor atom (Z) = 11, maka Proton = 11, Elektron = 11. Nomor massa (A) = 23, maka Neutron = A - Z = 23 - 11 = 12."
  },
  {
    question: "Jika sebuah atom kalsium melepaskan 2 elektron valensinya membentuk kation Ca²⁺ dengan lambang ₂₀⁴⁰Ca²⁺, jumlah partikel subatomiknya adalah...",
    options: [
      "20 proton, 20 elektron, 20 neutron",
      "20 proton, 18 elektron, 18 neutron",
      "18 proton, 20 elektron, 20 neutron",
      "20 proton, 18 elektron, 20 neutron"
    ],
    correct: 3,
    explanation: "Proton tetap 20 (nomor atom). Neutron tetap A - Z = 40 - 20 = 20. Karena bermuatan +2 (melepas 2 elektron), maka Elektron = 20 - 2 = 18."
  },
  {
    question: "Sebuah anion oksigen bermuatan negatif dua memiliki lambang ₈¹⁶O²⁻. Berapakah jumlah proton, elektron, dan neutron pada ion tersebut?",
    options: [
      "8 proton, 8 elektron, 8 neutron",
      "8 proton, 10 elektron, 8 neutron",
      "10 proton, 8 elektron, 8 neutron",
      "8 proton, 6 elektron, 8 neutron"
    ],
    correct: 1,
    explanation: "Proton = 8 (nomor atom). Neutron = 16 - 8 = 8. Bermuatan -2 (menangkap 2 elektron), maka Elektron = 8 + 2 = 10."
  },
  {
    question: "Dua buah atom dikelompokkan sebagai kelompok ISOTOP apabila kedua atom tersebut memiliki...",
    options: [
      "Nomor atom sama, tetapi nomor massa berbeda",
      "Nomor massa sama, tetapi nomor atom berbeda",
      "Jumlah neutron sama, tetapi nomor atom berbeda",
      "Nomor atom berbeda dan nomor massa berbeda"
    ],
    correct: 0,
    explanation: "Isotop adalah atom-atom dari unsur yang sama (nomor atom/proton sama) yang memiliki nomor massa berbeda karena perbedaan jumlah neutron di intinya."
  },
  {
    question: "Pasangan atom di bawah ini yang merupakan pasangan ISOTOP adalah...",
    options: [
      "₁₁²³Na dan ₁₂²⁴Mg",
      "₆¹⁴C dan ₇¹⁴N",
      "₆¹²C dan ₆¹⁴C",
      "₇¹⁴N dan ₈¹⁶O"
    ],
    correct: 2,
    explanation: "₆¹²C (Karbon-12) dan ₆¹⁴C (Karbon-14) sama-sama memiliki nomor atom 6 (unsur Karbon), namun nomor massanya berbeda (12 dan 14)."
  },
  {
    question: "Dua buah atom dikelompokkan sebagai kelompok ISOBAR apabila kedua atom tersebut memiliki...",
    options: [
      "Nomor atom sama, tetapi nomor massa berbeda",
      "Nomor massa sama, tetapi nomor atom berbeda",
      "Jumlah neutron sama, tetapi nomor atom berbeda",
      "Jumlah kulit elektron yang sama"
    ],
    correct: 1,
    explanation: "Isobar adalah atom-atom dari unsur yang berbeda (nomor atom berbeda) yang memiliki nomor massa (massa total proton + neutron) yang sama."
  },
  {
    question: "Pasangan atom di bawah ini yang tergolong sebagai ISOBAR adalah...",
    options: [
      "₆¹⁴C dan ₇¹⁴N",
      "₆¹²C dan ₆¹⁴C",
      "₁₁²³Na dan ₁₂²⁴Mg",
      "₁₉³⁹K dan ₂₀⁴⁰Ca"
    ],
    correct: 0,
    explanation: "₆¹⁴C (Karbon-14) dan ₇¹⁴N (Nitrogen-14) memiliki nomor massa yang sama (14), tetapi nomor atomnya berbeda (6 dan 7)."
  },
  {
    question: "Dua buah atom dikelompokkan sebagai kelompok ISOTON apabila kedua atom tersebut memiliki...",
    options: [
      "Nomor atom sama, tetapi nomor massa berbeda",
      "Nomor massa sama, tetapi nomor atom berbeda",
      "Nomor atom berbeda, tetapi jumlah proton sama",
      "Jumlah neutron sama, tetapi nomor atom berbeda"
    ],
    correct: 3,
    explanation: "Isoton adalah atom-atom dari unsur berbeda (nomor atom berbeda) yang memiliki jumlah neutron (A - Z) yang sama di dalam intinya."
  },

  // ==========================================
  // PERTEMUAN 3: KONFIGURASI ELEKTRON & SIFAT KIMIA (Q21 - Q30)
  // ==========================================
  {
    question: "Konfigurasi elektron merupakan deskripsi ilmiah mengenai...",
    options: [
      "Penyebaran elektron pada tingkat energi (kulit) atau orbital atom",
      "Gaya tarik elektrostatik proton dengan elektron valensi",
      "Lintasan melingkar partikel alfa yang memantul stasioner",
      "Kecepatan konstan elektron mengitari inti atom"
    ],
    correct: 0,
    explanation: "Konfigurasi elektron menggambarkan bagaimana elektron-elektron tersebar di dalam kulit-kulit atom dan orbital subkulit sesuai tingkat energinya."
  },
  {
    question: "Manakah prinsip konfigurasi elektron yang berbunyi 'Elektron dalam atom harus diisikan ke dalam orbital mulai dari tingkat energi terendah ke tinggi'?",
    options: [
      "Prinsip Aufbau",
      "Aturan Hund",
      "Asas Larangan Pauli",
      "Hukum Kekekalan Energi"
    ],
    correct: 0,
    explanation: "Prinsip Aufbau (bahasa Jerman: aufbau = membangun) menyatakan pengisian elektron dimulai dari orbital berenergi terendah (1s) berurutan ke atas."
  },
  {
    question: "Berdasarkan prinsip Aufbau, manakah urutan pengisian subkulit elektron dari tingkat energi terendah ke tertinggi yang benar?",
    options: [
      "1s - 2s - 3s - 2p - 3p - 4s - 3d",
      "1s - 2s - 2p - 3s - 3p - 3d - 4s",
      "1s - 2s - 2p - 3s - 4s - 3p - 3d",
      "1s - 2s - 2p - 3s - 3p - 4s - 3d"
    ],
    correct: 3,
    explanation: "Urutan pengisian mengikuti diagram curah hujan diagonal: 1s -> 2s -> 2p -> 3s -> 3p -> 4s -> 3d (karena tingkat energi 4s lebih rendah dari 3d)."
  },
  {
    question: "Aturan Hund menyatakan bahwa pada pengisian orbital dengan tingkat energi yang sama (seperti subkulit p atau d)...",
    options: [
      "Elektron langsung berpasangan dengan spin berlawanan",
      "Elektron menempati orbital secara sendiri-sendiri dengan spin paralel (searah) terlebih dahulu sebelum berpasangan",
      "Orbital pertama harus diisi penuh sebelum orbital kedua boleh diisi setengah",
      "Pengisian harus dimulai dari spin bernilai negatif terlebih dahulu"
    ],
    correct: 1,
    explanation: "Aturan Hund mencegah tolak-menolak elektrostatik dini dengan menyebarkan elektron secara tunggal dengan spin searah (paralel) di seluruh orbital degenerate sebelum dipasangkan."
  },
  {
    question: "Asas Larangan Pauli menegaskan bahwa...",
    options: [
      "Tidak boleh ada dua elektron dalam satu atom yang memiliki keempat bilangan kuantum yang sama",
      "Elektron valensi terluar atom stabil maksimal berjumlah 10",
      "Kulit s hanya boleh terisi elektron jika kulit p sudah penuh",
      "Inti atom melarang elektron masuk menembus nukleus"
    ],
    correct: 0,
    explanation: "Dua elektron dalam satu orbital yang sama pasti memiliki n, l, dan m yang sama, sehingga harus memiliki bilangan kuantum spin (s) yang berbeda (+1/2 dan -1/2)."
  },
  {
    question: "Konfigurasi elektron dari unsur Natrium (₁₁Na) dalam keadaan dasar (ground state) adalah...",
    options: [
      "1s² 2s² 2p⁶ 3s²",
      "1s² 2s² 2p⁵ 3s²",
      "1s² 2s² 2p⁶ 3s¹",
      "1s² 2s² 2p⁶ 3p¹"
    ],
    correct: 2,
    explanation: "Natrium memiliki 11 elektron: 1s² (2), 2s² (2), 2p⁶ (6), dan sisanya 1 elektron menempati subkulit berikutnya yaitu 3s¹."
  },
  {
    question: "Pengertian dari elektron valensi yang sangat menentukan sifat kimia suatu atom adalah...",
    options: [
      "Elektron yang berada pada kulit terluar (tingkat energi tertinggi) suatu atom",
      "Elektron yang paling dekat dengan inti atom (n=1)",
      "Elektron yang memiliki bilangan kuantum spin bernilai nol",
      "Jumlah proton dikurangi elektron bebas"
    ],
    correct: 0,
    explanation: "Elektron valensi adalah elektron di kulit terluar yang berinteraksi langsung saat berikatan dengan atom lain membentuk senyawa."
  },
  {
    question: "Berapakah jumlah elektron valensi dari atom Oksigen (₈O) yang memiliki konfigurasi elektron 1s² 2s² 2p⁴?",
    options: [
      "2 elektron valensi",
      "4 elektron valensi",
      "8 elektron valensi",
      "6 elektron valensi"
    ],
    correct: 3,
    explanation: "Kulit terluar adalah n=2, yang menampung subkulit 2s² dan 2p⁴. Jumlah total elektron valensi = 2 + 4 = 6 elektron."
  },
  {
    question: "Mengapa logam Ujung Kiri (Alkali) seperti Natrium (₁₁Na: 1s² 2s² 2p⁶ 3s¹) sangat reaktif dan meledak saat bereaksi dengan air?",
    options: [
      "Karena cenderung sangat mudah melepas 1 elektron terluarnya untuk mencapai konfigurasi oktet yang stabil",
      "Karena air mempercepat pembelahan inti atom natrium secara radioaktif",
      "Karena natrium menyerap proton dari air untuk memperbanyak elektronnya",
      "Karena subkulit s natrium menolak partikel oksigen dalam air"
    ],
    correct: 0,
    explanation: "Natrium hanya memiliki 1 elektron valensi. Dengan melepaskannya, kulit terluar barunya menjadi kulit n=2 yang sudah terisi penuh (oktet) yang sangat stabil."
  },
  {
    question: "Mengapa gas Neon (₁₀Ne: 1s² 2s² 2p⁶) bersifat sangat stabil, inert, dan hampir tidak pernah membentuk senyawa kimia di alam?",
    options: [
      "Karena elektronnya berputar terlalu cepat",
      "Karena kulit terluarnya (n=2) sudah terisi penuh dengan 8 elektron valensi (oktet stabil)",
      "Karena tidak memiliki proton bermuatan positif di intinya",
      "Karena atomnya memiliki diameter terkecil di alam semesta"
    ],
    correct: 1,
    explanation: "Karena kulit terluar Neon sudah terisi penuh (2s² 2p⁶ = 8 elektron valensi), ia tidak memiliki kecenderungan untuk melepas, menangkap, atau berbagi elektron dengan atom lain."
  }
];

export default function QuizPage() {
  const [step, setStep] = useState('welcome'); // welcome, active, results
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStartWithValidation = () => {
    if (!userName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    handleStart();
  };

  const handleStart = () => {
    setStep('active');
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setUserAnswers([]);
  };

  const handleSelectOption = (optIdx) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(optIdx);
  };

  const handleNext = () => {
    const isCorrect = selectedOpt === quizData[currentIdx].correct;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);
    
    const updatedAnswers = [...userAnswers, {
      questionIdx: currentIdx,
      selected: selectedOpt,
      correct: quizData[currentIdx].correct,
      isCorrect
    }];
    setUserAnswers(updatedAnswers);

    if (currentIdx + 1 < quizData.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOpt(null);
    } else {
      setScore(newScore);
      setStep('results');
    }
  };

  const getPercentage = () => {
    return Math.round((score / quizData.length) * 100);
  };

  // Kategori evaluasi kuis berdasarkan persentase nilai:
  // Sangat Baik (>=90%), Bagus (>=75%), Baik (>=55%), dan Perlu Ditingkatkan (<55%)
  const getEvaluationMessage = () => {
    const pct = getPercentage();
    
    if (pct >= 90) {
      return {
        rating: "Sangat Baik 🏆",
        color: "var(--accent-teal)",
        shadowColor: "rgba(0, 242, 254, 0.4)",
        title: `Luar Biasa, ${userName}! 🎉`,
        desc: `Nilai Anda: ${pct}% (Sangat Baik). Kami sangat mengapresiasi pemahaman Anda yang luar biasa mendalam! Anda telah menguasai seluruh aspek teori perkembangan atom, lambang notasi, perhitungan partikel subatomik, hingga konfigurasi subkulit secara sempurna. Pertahankan prestasi gemilang ini dalam perjalanan akademik Anda!`
      };
    } else if (pct >= 75) {
      return {
        rating: "Bagus 🌟",
        color: "var(--accent-blue)",
        shadowColor: "rgba(0, 122, 255, 0.4)",
        title: `Kerja yang Bagus, ${userName}! 👍`,
        desc: `Nilai Anda: ${pct}% (Bagus). Kami mengapresiasi usaha keras Anda! Anda menunjukkan tingkat pemahaman konsep kimia dasar yang sangat matang dan di atas rata-rata. Hanya tersisa sedikit detail kecil yang perlu disempurnakan. Teruslah semangat belajar untuk menjadi ilmuwan hebat!`
      };
    } else if (pct >= 55) {
      return {
        rating: "Baik 📚",
        color: "var(--accent-yellow)",
        shadowColor: "rgba(255, 223, 0, 0.4)",
        title: `Cukup Baik, ${userName}!`,
        desc: `Nilai Anda: ${pct}% (Baik). Anda berhasil lulus batas evaluasi minimal. Kami mengapresiasi dedikasi Anda, namun masih ada beberapa bagian penting (seperti notasi atau konfigurasi elektron) yang perlu Anda tinjau kembali. Pelajari kembali materi LKS Pertemuan 1-3 agar pemahaman Anda semakin kokoh!`
      };
    } else {
      return {
        rating: "Perlu Ditingkatkan 📚",
        color: "var(--color-proton)",
        shadowColor: "rgba(255, 94, 98, 0.4)",
        title: `Tetap Semangat, ${userName}! 💪`,
        desc: `Nilai Anda: ${pct}% (Perlu Ditingkatkan). Jangan berkecil hati! Skor ini adalah langkah awal yang sangat berharga untuk belajar. Jadikan kesempatan ini sebagai jembatan untuk memahami materi secara lebih mendalam. Mari pelajari kembali modul ajar interaktif dan coba lagi kuis ini. Kami yakin dengan sedikit latihan tambahan, Anda pasti bisa menguasainya!`
      };
    }
  };

  const getMeetingTitle = () => {
    if (currentIdx < 10) return "Pertemuan 1 &bull; Evolusi Model Atom";
    if (currentIdx < 20) return "Pertemuan 2 &bull; Notasi Atom & Isotop";
    return "Pertemuan 3 &bull; Konfigurasi Elektron & Sifat Unsur";
  };

  return (
    <div className="container" style={{ padding: '24px 0', maxWidth: '680px' }}>
      
      {/* WELCOME SCREEN */}
      {step === 'welcome' && (
        <div className="glass-panel-glow" style={{
          padding: '40px',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          border: '1px solid var(--glass-border-glow)',
          background: 'rgba(6, 22, 32, 0.75)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-yellow), rgba(255, 223, 0, 0.2))',
            padding: '20px',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(255, 223, 0, 0.3)',
            animation: 'float-slow 5s infinite ease-in-out'
          }}>
            <Award size={48} color="#0a0b10" />
          </div>

          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>Kuis Evaluasi Kimia Komprehensif</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '15px', lineHeight: '1.6' }}>
              Uji tingkat pemahaman Anda mengenai sejarah evolusi model atom, struktur subatomik, lambang notasi, dan konfigurasi elektron.
            </p>
          </div>

          {/* Name Input Field */}
          <div style={{ width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            <label htmlFor="userNameInput" style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
              Masukkan Nama Lengkap Anda:
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <User size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px' }} />
              <input
                id="userNameInput"
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  if (e.target.value.trim()) setNameError(false);
                }}
                placeholder="Contoh: Kaira Nisa Azizah"
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 40px',
                  borderRadius: 'var(--radius-full)',
                  border: nameError ? '1.5px solid var(--color-proton)' : '1px solid var(--glass-border)',
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxShadow: nameError ? '0 0 10px rgba(255, 94, 98, 0.15)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              />
            </div>
            {nameError && (
              <span style={{ fontSize: '12.5px', color: 'var(--color-proton)', fontWeight: 600 }}>
                ⚠️ Nama wajib diisi sebelum memulai kuis evaluasi!
              </span>
            )}
          </div>

          <div style={{
            textAlign: 'left',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            border: '1px solid var(--glass-border)',
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            width: '100%',
            fontSize: '14px',
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <p style={{ fontWeight: 700, color: '#ffffff' }}>Panduan Evaluasi:</p>
            <p>&bull; Kuis terdiri dari **30 pertanyaan pilihan ganda** yang mencakup seluruh materi ajar (10 soal per pertemuan).</p>
            <p>&bull; Umpan balik & penjelasan detail langsung ditampilkan setelah memilih jawaban.</p>
            <p>&bull; Skor kelulusan minimum adalah **55%** (Kategori "Baik").</p>
          </div>

          <button 
            className="btn btn-primary"
            onClick={handleStartWithValidation}
            style={{ width: '100%', padding: '14px 28px', fontSize: '16px', borderRadius: 'var(--radius-full)' }}
          >
            <Play size={18} fill="currentColor" /> Mulai Kuis Sekarang
          </button>
        </div>
      )}

      {/* ACTIVE QUIZ SCREEN */}
      {step === 'active' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Progress Bar */}
          <div className="glass-panel" style={{ 
            padding: '16px 24px', 
            borderRadius: 'var(--radius-md)',
            background: 'rgba(6, 22, 32, 0.45)',
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', fontSize: '11px', padding: '3px 8px' }} dangerouslySetInnerHTML={{ __html: getMeetingTitle() }} />
              </span>
              <span>Pertanyaan {currentIdx + 1} dari {quizData.length}</span>
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <div style={{
                width: `${((currentIdx + 1) / quizData.length) * 100}%`,
                height: '100%',
                background: 'linear-gradient(to right, var(--accent-teal), var(--accent-blue))',
                transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }} />
            </div>
          </div>

          {/* Question Card */}
          <div className="glass-panel-glow" style={{ 
            padding: '36px', 
            borderRadius: 'var(--radius-lg)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px',
            border: '1px solid var(--glass-border-glow)',
            background: 'rgba(6, 22, 32, 0.75)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, lineHeight: '1.6', color: '#ffffff' }}>
              {quizData[currentIdx].question}
            </h3>

            {/* Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quizData[currentIdx].options.map((opt, oIdx) => {
                const isSelected = selectedOpt === oIdx;
                const isCorrect = oIdx === quizData[currentIdx].correct;
                const showResults = selectedOpt !== null;

                let borderStyle = '1px solid var(--glass-border)';
                let bgStyle = 'rgba(255, 255, 255, 0.02)';
                let iconToRender = null;

                if (showResults) {
                  if (isCorrect) {
                    borderStyle = '1px solid #10b981';
                    bgStyle = 'rgba(16, 185, 129, 0.15)';
                    iconToRender = <Check size={16} color="#10b981" />;
                  } else if (isSelected) {
                    borderStyle = '1px solid var(--color-proton)';
                    bgStyle = 'rgba(255, 94, 98, 0.15)';
                    iconToRender = <X size={16} color="var(--color-proton)" />;
                  }
                } else if (isSelected) {
                  borderStyle = '1px solid var(--accent-teal)';
                  bgStyle = 'rgba(0, 242, 254, 0.08)';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={showResults}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: bgStyle,
                      border: borderStyle,
                      color: isSelected && !showResults ? 'var(--accent-teal)' : 'var(--text-primary)',
                      textAlign: 'left',
                      fontSize: '14px',
                      fontWeight: 600,
                      boxShadow: isSelected && !showResults ? '0 0 15px rgba(0, 242, 254, 0.1)' : 'none',
                      transition: 'all var(--transition-fast)',
                      cursor: showResults ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <span>{opt}</span>
                    {iconToRender}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {selectedOpt !== null && (
              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                borderLeft: '4px solid var(--accent-blue)',
                padding: '16px',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '13.5px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                border: '1px solid rgba(255, 255, 255, 0.02)',
                borderLeftColor: 'var(--accent-blue)'
              }}>
                <p style={{ fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {selectedOpt === quizData[currentIdx].correct ? 'Benar! 🎉' : 'Kurang Tepat. 💡'}
                </p>
                {quizData[currentIdx].explanation}
              </div>
            )}

            {/* Next button */}
            {selectedOpt !== null && (
              <button 
                className="btn btn-primary"
                onClick={handleNext}
                style={{ width: '100%', padding: '14px', borderRadius: 'var(--radius-full)' }}
              >
                {currentIdx + 1 === quizData.length ? 'Lihat Hasil Akhir' : 'Pertanyaan Selanjutnya'}
              </button>
            )}

          </div>
        </div>
      )}

      {/* RESULTS SCREEN */}
      {step === 'results' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel-glow" style={{
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            border: '1px solid var(--glass-border-glow)',
            background: 'rgba(6, 22, 32, 0.75)'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff' }}>Hasil Kuis Evaluasi</h2>
            
            {/* Score Ring */}
            <div style={{
              position: 'relative',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: `conic-gradient(${getEvaluationMessage().color} ${getPercentage()}%, var(--bg-tertiary) 0)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 25px ${getEvaluationMessage().shadowColor}`
            }}>
              <div style={{
                width: '124px',
                height: '124px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '38px', fontWeight: 800, color: getEvaluationMessage().color, lineHeight: '1', fontFamily: 'var(--font-heading)' }}>
                  {getPercentage()}%
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 600 }}>
                  Skor: {score} / {quizData.length}
                </span>
              </div>
            </div>

            {/* Custom Rating Badge */}
            <span className="badge" style={{ 
              backgroundColor: `${getEvaluationMessage().color}20`, 
              color: getEvaluationMessage().color, 
              border: `1px solid ${getEvaluationMessage().color}50`,
              fontSize: '13.5px',
              padding: '6px 16px',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)'
            }}>
              Predikat: {getEvaluationMessage().rating}
            </span>

            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>{getEvaluationMessage().title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '10px', lineHeight: '1.65', textAlign: 'justify' }}>
                {getEvaluationMessage().desc}
              </p>
            </div>

            <button 
              className="btn btn-primary"
              onClick={handleStart}
              style={{ width: '100%', padding: '14px', gap: '8px', borderRadius: 'var(--radius-full)' }}
            >
              <RotateCcw size={16} /> Ulangi Kuis
            </button>
          </div>

          {/* Detailed Question Review */}
          <div className="glass-panel" style={{ 
            padding: '28px', 
            borderRadius: 'var(--radius-lg)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            background: 'rgba(6, 22, 32, 0.45)',
            border: '1px solid var(--glass-border)'
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>Review Pertanyaan</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {userAnswers.map((ans, idx) => {
                const q = quizData[ans.questionIdx];
                return (
                  <div 
                    key={idx}
                    style={{
                      borderBottom: idx + 1 === userAnswers.length ? 'none' : '1px solid var(--glass-border)',
                      paddingBottom: idx + 1 === userAnswers.length ? '0' : '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', lineHeight: '1.5' }}>
                      {idx + 1}. {q.question}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '13px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: ans.isCorrect ? '#10b981' : 'var(--color-proton)', fontWeight: 600 }}>
                        {ans.isCorrect ? (
                          <><CheckCircle size={14} /> Pilihan Anda (Benar): {q.options[ans.selected]}</>
                        ) : (
                          <><X size={14} /> Pilihan Anda (Salah): {q.options[ans.selected]}</>
                        )}
                      </span>
                      {!ans.isCorrect && (
                        <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                          <Check size={14} /> Jawaban Tepat: {q.options[ans.correct]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
