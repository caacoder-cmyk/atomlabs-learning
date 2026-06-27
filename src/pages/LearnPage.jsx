import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Atom, Layers, Award, ShieldAlert, Cpu, RotateCcw, Play, Sparkles, CheckCircle, XCircle, AlertTriangle, HelpCircle, FileText } from 'lucide-react';


const theories = [
  {
    id: 'democritus',
    name: 'Konsep Atom Zaman Yunani',
    scientist: 'Democritus',
    period: 'Sekitar Abad ke-5 SM',
    concept: 'Semua benda di alam semesta tersusun atas partikel yang sangat kecil dan tidak dapat dibagi lagi. Partikel ini dinamakan "atomos" (tidak dapat dipotong atau dibagi).',
    details: [
      'Gagasan filosofis pertama tentang struktur terkecil penyusun semua materi.',
      'Democritus berasumsi bahwa bentuk fisik atom menentukan sifat materi tersebut (misalnya atom air berbentuk bulat licin, atom api memiliki ujung tajam dan reaktif).',
      'Pada masanya, teori ini ditolak oleh pemikir dominan seperti Plato dan Aristoteles yang percaya materi tersusun atas 4 elemen dasar: tanah, air, udara, dan api.'
    ],
    experiment: 'Pemikiran Filosofis Kontemplatif (Belum berbasis pembuktian laboratorium atau sains empiris).',
    limitations: 'Merupakan gagasan filosofis murni, tidak didukung oleh pembuktian atau eksperimen ilmiah sehingga tidak dapat diuji kebenarannya secara empiris.',
    svgType: 'democritus'
  },
  {
    id: 'dalton',
    name: 'Teori Atom Dalton',
    scientist: 'John Dalton',
    period: 'Tahun 1808',
    concept: 'Atom adalah bola pejal yang sangat kecil, tidak dapat dibagi, diciptakan, atau dimusnahkan. Teori ini menjadi tonggak sejarah lahirnya ilmu kimia modern berbasis eksperimen.',
    details: [
      'Semua unsur tersusun atas partikel yang sangat kecil yang disebut atom.',
      'Atom-atom dari unsur yang sama memiliki ukuran, massa, dan sifat yang identik. Atom suatu unsur berbeda dari atom unsur lainnya.',
      'Senyawa terbentuk dari gabungan atom-atom dari dua unsur atau lebih dengan perbandingan jumlah yang tetap dan sederhana.',
      'Dalam reaksi kimia, atom hanya mengalami penggabungan, pemisahan, atau penataan ulang; atom tidak dapat diciptakan maupun dimusnahkan.'
    ],
    experiment: 'Eksperimen Hukum Reaksi Kimia (Sesuai dengan Hukum Perbandingan Tetap oleh Joseph Proust & Hukum Kekekalan Massa oleh Antoine Lavoisier).',
    limitations: 'Menganggap atom sebagai partikel terkecil yang tidak dapat dibagi lagi (padahal di dalamnya terdapat subatom). Dalton juga tidak mampu menjelaskan keberadaan isotop (atom-atom dari unsur yang sama tetapi memiliki massa berbeda).',
    svgType: 'dalton'
  },
  {
    id: 'thomson',
    name: 'Teori Atom J.J. Thomson',
    scientist: 'Joseph John Thomson',
    period: 'Tahun 1897',
    concept: 'Model Roti Kismis (Plum Pudding Model). Atom digambarkan sebagai bola pejal bermuatan positif yang di dalamnya tersebar elektron bermuatan negatif secara merata.',
    details: [
      'Menemukan partikel subatomik bermuatan negatif yang disebut elektron.',
      'Atom secara keseluruhan bersifat netral, yang berarti jumlah muatan positif pada bola harus sama dengan total muatan negatif elektron di dalamnya.',
      'Muatan positif dianggap tersebar merata di seluruh bagian bola atom.'
    ],
    experiment: 'Eksperimen Tabung Sinar Katoda (Cathode Ray Tube). Thomson membuktikan bahwa sinar katoda dibelokkan by medan listrik menuju lempeng bermuatan positif, menandakan adanya partikel negatif penyusun materi.',
    limitations: 'Tidak dapat menjelaskan susunan muatan positif dan jumlah elektron di dalam bola atom secara terperinci. Serta tidak dapat menjelaskan keberadaan inti atom.',
    svgType: 'thomson'
  },
  {
    id: 'rutherford',
    name: 'Teori Atom Rutherford',
    scientist: 'Ernest Rutherford',
    period: 'Tahun 1911',
    concept: 'Model Atom Inti (Nuklir). Atom sebagian besar berupa ruang kosong dengan seluruh muatan positif dan massanya terpusat pada bagian sangat kecil di tengah yang disebut inti atom (nukleus).',
    details: [
      'Menemukan keberadaan inti atom (nukleus) bermuatan positif.',
      'Menyimpulkan sebagian besar volume atom merupakan ruang kosong yang hampa.',
      'Elektron bermuatan negatif bergerak mengelilingi inti atom yang sangat rapat.'
    ],
    experiment: 'Eksperimen Hamburan Partikel Alfa (Gold Foil Experiment). Menembakkan partikel alfa positif ke lempeng emas tipis (0,0004 mm). Ditemukan sebagian besar partikel menembus lempeng tanpa menyimpang, sebagian kecil membelok, dan sangat sedikit yang dipantulkan kembali.',
    limitations: 'Bertentangan dengan hukum fisika klasik Maxwell: elektron bermuatan yang mengitari inti akan kehilangan energi secara bertahap dalam bentuk gelombang elektromagnetik, sehingga lintasannya akan mengecil berbentuk spiral dan akhirnya jatuh ke inti atom.',
    svgType: 'rutherford'
  },
  {
    id: 'bohr',
    name: 'Teori Atom Niels Bohr',
    scientist: 'Niels Bohr',
    period: 'Tahun 1913',
    concept: 'Model Lintasan Stasioner. Elektron mengelilingi inti atom pada lintasan melingkar tertentu yang disebut kulit atau tingkat energi stasioner tanpa memancarkan energi.',
    details: [
      'Elektron hanya bergerak pada lintasan tertentu (tingkat energi stasioner n = 1, 2, 3, dst).',
      'Elektron dapat berpindah antar lintasan dengan menyerap energi foton (ke tingkat energi lebih tinggi/kulit luar) atau melepaskan energi foton (ke tingkat energi lebih rendah/kulit dalam).',
      'Besarnya energi cahaya yang dipancarkan bergantung pada selisih tingkat energi lintasan awal dan akhir.'
    ],
    experiment: 'Analisis Spektrum Garis Atom Hidrogen. Bohr menjelaskan bahwa spektrum gas hidrogen memancarkan garis emisi diskrit (terputus) pada panjang gelombang tertentu, membuktikan adanya tingkat energi terkuantisasi.',
    limitations: 'Hanya berhasil memprediksi spektrum garis untuk atom sederhana berelektron tunggal (seperti Hidrogen atau ion He+). Tidak mampu menjelaskan spektrum atom berelektron banyak serta pembelahan spektrum dalam medan magnet (efek Zeeman).',
    svgType: 'bohr'
  },
  {
    id: 'quantum',
    name: 'Mekanika Kuantum / Teori Modern',
    scientist: 'Schrödinger, Heisenberg & de Broglie',
    period: 'Tahun 1926',
    concept: 'Model Awan Elektron. Elektron tidak bergerak pada lintasan melingkar yang pasti (orbit), melainkan berada pada daerah probabilitas terbesar menemukan elektron yang disebut orbital.',
    details: [
      'Dualisme Gelombang-Partikel (Louis de Broglie): Elektron tidak hanya bersifat sebagai materi partikel padat, tetapi juga memiliki perilaku gelombang berdiri.',
      'Prinsip Ketidakpastian (Werner Heisenberg): Posisi dan kecepatan (momentum) elektron tidak dapat diukur secara tepat secara bersamaan.',
      'Persamaan Gelombang (Erwin Schrödinger): Menghasilkan kuadrat fungsi gelombang (ψ²) yang menentukan kepadatan probabilitas (awan elektron) menemukan elektron di sekitar inti.'
    ],
    experiment: 'Kalkulasi Persamaan Diferensial Gelombang Schrödinger didukung oleh eksperimen Difraksi Elektron oleh Davisson & Germer yang mengonfirmasi sifat gelombang materi.',
    limitations: 'Memiliki sifat probabilistik yang sangat kompleks dan memerlukan perhitungan matematika tingkat tinggi. Merupakan teori struktur atom terlengkap dan paling akurat yang digunakan saat ini.',
    svgType: 'quantum'
  }
];

const theories2 = [
  {
    id: 'notasi',
    name: 'Nomor Atom, Nomor Massa & Notasi Atom',
    subtitle: 'Notasi Nuklida',
    concept: 'Setiap atom diidentifikasi secara spesifik menggunakan lambang notasi atom berdasarkan jumlah partikel subatomik penyusunnya (proton, elektron, dan neutron).',
    details: [
      'Lambang Unsur (X): Simbol kimia unik dari unsur atom tersebut.',
      'Nomor Massa (A): Jumlah total Proton + Neutron di dalam inti atom yang menentukan massa atom.',
      'Nomor Atom (Z): Jumlah Proton (atau Elektron dalam kondisi netral) yang menentukan identitas kimia unsur.',
      'Jumlah Neutron (N) dapat dihitung dengan rumus selisih: N = A - Z.'
    ],
    experiment: 'Analisis Spektroskopi Massa & Hukum Reaksi Kimia (Hukum Proust & Lavoisier).',
    example: 'Fluorin memiliki Nomor Atom (Z) = 9 dan Nomor Massa (A) = 19. Maka jumlah neutronnya adalah N = 19 - 9 = 10 neutron.'
  },
  {
    id: 'isotop',
    name: 'Isotop',
    subtitle: 'Proton Sama, Neutron Berbeda',
    concept: 'Isotop adalah atom-atom dari unsur yang sama (Nomor Atom/Proton sama, Z sama) tetapi memiliki nomor massa berbeda (A berbeda) karena perbedaan jumlah neutron.',
    details: [
      'Memiliki nomor atom (Z) yang persis sama, sehingga merupakan unsur kimia yang identik.',
      'Memiliki sifat kimia yang sama karena konfigurasi elektronnya sama.',
      'Berbeda dalam massa atom dan kestabilan inti (beberapa isotop bersifat tidak stabil / radioaktif).',
      'Contoh Hidrogen: Protium (0 neutron), Deuterium (1 neutron), Tritium (2 neutron, radioaktif).'
    ],
    experiment: 'Penemuan spektrograf massa oleh Francis Aston yang membuktikan adanya atom sejenis dengan massa berbeda.',
    example: 'Hidrogen memiliki 3 isotop alami: Protium (0 neutron), Deuterium (1 neutron), dan Tritium (2 neutron). Contoh lainnya adalah Uranium-235 (digunakan dalam reaktor nuklir) dan Uranium-238.'
  },
  {
    id: 'isobar',
    name: 'Isobar',
    subtitle: 'Nomor Massa Sama, Proton Berbeda',
    concept: 'Isobar adalah atom-atom dari unsur yang berbeda (nomor atom/proton berbeda, Z berbeda) tetapi memiliki nomor massa (A) yang sama.',
    details: [
      'Merupakan unsur yang berbeda karena jumlah protonnya (nomor atom) berbeda.',
      'Memiliki sifat fisis dan sifat kimia yang sama sekali berbeda.',
      'Jumlah total proton + neutron (nomor massa) di inti atomnya persis sama.',
      'Contoh klasik: Karbon-14 (14_6 C) dan Nitrogen-14 (14_7 N).'
    ],
    experiment: 'Analisis peluruhan nuklir dan spektrometri massa resolusi tinggi.',
    example: 'Karbon-14 (14_6 C) dan Nitrogen-14 (14_7 N) adalah sepasang isobar. Keduanya memiliki nomor massa 14, namun Karbon memiliki 6 proton sedangkan Nitrogen memiliki 7 proton.'
  },
  {
    id: 'isoton',
    name: 'Isoton',
    subtitle: 'Neutron Sama, Proton Berbeda',
    concept: 'Isoton adalah atom-atom dari unsur yang berbeda (Z berbeda, A berbeda) yang memiliki jumlah neutron yang sama di dalam intinya.',
    details: [
      'Merupakan unsur kimia yang berbeda karena nomor atomnya berbeda.',
      'Memiliki sifat kimia dan sifat fisis yang berbeda.',
      'Selisih nomor massa dengan nomor atom (A - Z = Neutron) bernilai sama.',
      'Contoh klasik: Karbon-14 (14_6 C) dan Nitrogen-15 (15_7 N), keduanya memiliki 8 neutron.'
    ],
    experiment: 'Pengukuran hamburan neutron dan spektroskopi struktur inti.',
    example: 'Karbon-14 (14_6 C) dan Nitrogen-15 (15_7 N) keduanya memiliki 8 neutron di dalam intinya. C-14 memiliki 14 - 6 = 8 neutron, dan N-15 memiliki 15 - 7 = 8 neutron.'
  }
];

const elementsInfo = {
  F: { symbol: 'F', name: 'Fluorin', A: 19, Z: 9, protons: 9, neutrons: 10, description: 'Unsur halogen yang sangat reaktif (Nomor Atom 9).' },
  C: { symbol: 'C', name: 'Karbon', A: 12, Z: 6, protons: 6, neutrons: 6, description: 'Dasar dari semua senyawa organik dan kehidupan di bumi (Nomor Atom 6).' },
  N: { symbol: 'N', name: 'Nitrogen', A: 14, Z: 7, protons: 7, neutrons: 7, description: 'Gas penyusun 78% atmosfer bumi, inert pada suhu kamar (Nomor Atom 7).' },
  O: { symbol: 'O', name: 'Oksigen', A: 16, Z: 8, protons: 8, neutrons: 8, description: 'Sangat vital untuk pernapasan organisme aerobik (Nomor Atom 8).' }
};

const hydrogenIsotopes = {
  protium: { symbol: 'H', A: 1, Z: 1, protons: 1, neutrons: 0, name: 'Protium', stability: 'Sangat Stabil (Melimpah 99.98% di alam)', desc: 'Bentuk paling dasar dari hidrogen. Terdiri dari hanya satu proton tanpa neutron di intinya.' },
  deuterium: { symbol: 'H', A: 2, Z: 1, protons: 1, neutrons: 1, name: 'Deuterium', stability: 'Stabil (Hidrogen Berat)', desc: 'Memiliki 1 proton dan 1 neutron. Digunakan secara luas dalam reaktor nuklir sebagai moderator air berat.' },
  tritium: { symbol: 'H', A: 3, Z: 1, protons: 1, neutrons: 2, name: 'Tritium', stability: 'Radioaktif (Paruh Waktu 12.3 Tahun)', desc: 'Memiliki 1 proton dan 2 neutron. Bersifat radioaktif dan sangat langka, digunakan dalam riset fusi nuklir.' }
};

const theories3 = [
  {
    id: 'bilangan-kuantum',
    name: 'Bilangan Kuantum',
    subtitle: 'Keadaan & Posisi Elektron',
    concept: 'Dalam mekanika kuantum Schrödinger & Max Born, posisi elektron tidak stasioner melainkan dijelaskan sebagai daerah kebolehjadian (probabilitas) menggunakan 4 bilangan kuantum.',
    details: [
      'Utama (n): Menentukan tingkat energi utama / kulit elektron (n = 1, 2, 3... atau kulit K, L, M, N...).',
      'Azimut (l): Menentukan bentuk orbital & subkulit. Berkisar dari 0 sampai n-1. l=0 (s, bola), l=1 (p, dumbbell), l=2 (d, semanggi), l=3 (f, kompleks).',
      'Magnetik (m): Menentukan arah / orientasi ruang orbital. Nilainya berkisar dari -l sampai +l.',
      'Spin (s): Menentukan arah putaran elektron secara mandiri. ms = +1/2 (↑, up) atau -1/2 (↓, down).'
    ]
  },
  {
    id: 'konfigurasi-elektron',
    name: 'Konfigurasi Bohr & Kuantum',
    subtitle: 'Penyusunan Elektron di Kulit & Subkulit',
    concept: 'Konfigurasi elektron menjelaskan penyusunan elektron di dalam atom. Pada Bohr elektron berada di kulit, sedangkan pada Kuantum elektron menempati orbital subkulit.',
    details: [
      'Bohr: Pengisian kulit stasioner (K=2, L=8, M=18, N=32) dengan kapasitas maksimum elektron = 2n².',
      'Kuantum: Pengisian orbital berdasarkan tingkat energi subkulit (s=2, p=6, d=10, f=14).',
      'Muatan Inti Efektif (Zeff = Z - S): Gaya tarik bersih inti yang dirasakan oleh elektron terluar setelah dikurangi efek perisai (shielding) elektron kulit dalam.',
      'Kemampuan penetrasi orbital: s > p > d > f, sehingga energi orbital subkulit pada tingkat n yang sama adalah s < p < d < f.'
    ]
  },
  {
    id: 'aturan-penulisan',
    name: '3 Aturan Konfigurasi',
    subtitle: 'Prinsip Penataan Elektron dalam Orbital',
    concept: 'Terdapat tiga aturan mutlak yang mendasari penulisan konfigurasi elektron modern agar atom berada pada tingkat energi terendah yang stabil (ground state).',
    details: [
      'Prinsip Aufbau: Pengisian elektron dimulai dari orbital tingkat energi terendah ke tingkat energi lebih tinggi (1s < 2s < 2p < 3s < 3p < 4s < 3d...).',
      'Larangan Pauli: Tidak ada dua elektron dalam satu atom yang boleh memiliki keempat bilangan kuantum (n, l, m, s) yang persis sama. Satu orbital maksimal berisi dua elektron dengan spin berlawanan.',
      'Kaidah Hund: Elektron akan mengisi orbital-orbital berenergi sama secara satu per satu (tunggal) dengan spin sejajar (↑) terlebih dahulu sebelum mulai berpasangan.'
    ]
  }
];

const elementsConfig3 = {
  1: { symbol: 'H', name: 'Hidrogen', Z: 1, config: '1s¹', bohr: [1], zeff: 1, shielding: 0 },
  2: { symbol: 'He', name: 'Helium', Z: 2, config: '1s²', bohr: [2], zeff: 2, shielding: 0 },
  3: { symbol: 'Li', name: 'Litium', Z: 3, config: '1s² 2s¹', bohr: [2, 1], zeff: 1.3, shielding: 1.7 },
  6: { symbol: 'C', name: 'Karbon', Z: 6, config: '1s² 2s² 2p²', bohr: [2, 4], zeff: 3.25, shielding: 2.75 },
  7: { symbol: 'N', name: 'Nitrogen', Z: 7, config: '1s² 2s² 2p³', bohr: [2, 5], zeff: 3.9, shielding: 3.1 },
  8: { symbol: 'O', name: 'Oksigen', Z: 8, config: '1s² 2s² 2p⁴', bohr: [2, 6], zeff: 4.55, shielding: 3.45 },
  10: { symbol: 'Ne', name: 'Neon', Z: 10, config: '1s² 2s² 2p⁶', bohr: [2, 8], zeff: 5.85, shielding: 4.15 },
  11: { symbol: 'Na', name: 'Natrium', Z: 11, config: '1s² 2s² 2p⁶ 3s¹', bohr: [2, 8, 1], zeff: 2.2, shielding: 8.8 },
  12: { symbol: 'Mg', name: 'Magnesium', Z: 12, config: '1s² 2s² 2p⁶ 3s²', bohr: [2, 8, 2], zeff: 2.85, shielding: 9.15 },
  17: { symbol: 'Cl', name: 'Klorin', Z: 17, config: '1s² 2s² 2p⁶ 3s² 3p⁵', bohr: [2, 8, 7], zeff: 6.1, shielding: 10.9 },
  18: { symbol: 'Ar', name: 'Argon', Z: 18, config: '1s² 2s² 2p⁶ 3s² 3p⁶', bohr: [2, 8, 8], zeff: 6.75, shielding: 11.25 },
  20: { symbol: 'Ca', name: 'Kalsium', Z: 20, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', bohr: [2, 8, 8, 2], zeff: 2.85, shielding: 17.15 }
};

export default function LearnPage({ setActivePage }) {
  const [activePertemuan, setActivePertemuan] = useState(null); // null, 1, 2, 3
  const [subView, setSubView] = useState('materi'); // 'materi' or 'latihan'
  const [activeTheoryIdx, setActiveTheoryIdx] = useState(0);
  const [bohrOrbit, setBohrOrbit] = useState(1); // 1, 2, 3
  const [bohrState, setBohrState] = useState('ground'); // ground, absorbing, transitioning-up, excited, emitting, transitioning-down
  const [isBohrSimulating, setIsBohrSimulating] = useState(false);

  // States for LKS1 Kegiatan 3 guessing game
  const [lks1DaltonName, setLks1DaltonName] = useState('');
  const [lks1DaltonModel, setLks1DaltonModel] = useState('');
  const [lks1ThomsonPhoto, setLks1ThomsonPhoto] = useState('');
  const [lks1ThomsonModel, setLks1ThomsonModel] = useState('');
  const [lks1RutherfordPhoto, setLks1RutherfordPhoto] = useState('');
  const [lks1RutherfordModel, setLks1RutherfordModel] = useState('');
  const [lks1BohrName, setLks1BohrName] = useState('');
  const [lks1BohrModel, setLks1BohrModel] = useState('');
  const [lks1QuantumPhoto, setLks1QuantumPhoto] = useState('');
  const [lks1QuantumName, setLks1QuantumName] = useState('');

  // States for Meeting 2
  const [activeTheoryIdx2, setActiveTheoryIdx2] = useState(0);
  const [notasiElement, setNotasiElement] = useState('F');
  const [selectedHydrogenIsotope, setSelectedHydrogenIsotope] = useState('protium');
  const [hoveredNotasiPart, setHoveredNotasiPart] = useState(null);

  // States for Meeting 3
  const [activeTheoryIdx3, setActiveTheoryIdx3] = useState(0); // 0: Bilangan Kuantum, 1: Konfigurasi Elektron, 2: Aturan Penulisan
  const [qN, setQN] = useState(3);
  const [qL, setQL] = useState(1); // 0: s, 1: p, 2: d, 3: f
  const [qM, setQM] = useState(0);
  const [qS, setQS] = useState(0.5); // +0.5 or -0.5
  const [subshellElectrons, setSubshellElectrons] = useState([[], [], []]); // For l=1, 3 boxes initially

  // Element for config
  const [selectedZ3, setSelectedZ3] = useState(17); // Cl by default
  const [hoveredZeffComponent, setHoveredZeffComponent] = useState(null); // 'nucleus', 'shield', 'valence'

  // Rules states
  const [activeRuleIdx3, setActiveRuleIdx3] = useState(0); // 0: Aufbau, 1: Pauli, 2: Hund

  // Aufbau states
  const [aufbauZ, setAufbauZ] = useState(1);
  const [isAufbauSimulating, setIsAufbauSimulating] = useState(false);

  // Pauli states
  const [pauliSpin1, setPauliSpin1] = useState('up');
  const [pauliSpin2, setPauliSpin2] = useState('down');

  // Hund states
  const [hundBoxes, setHundBoxes] = useState([0, 0, 0]); // 0: empty, 1: up, 2: double, 3: down

  const handleQLChange = (newL) => {
    setQL(newL);
    setQM(0);
    setSubshellElectrons(Array(2 * newL + 1).fill().map(() => []));
  };

  const handleQNChange = (newN) => {
    setQN(newN);
    const maxL = newN - 1;
    const newL = qL > maxL ? maxL : qL;
    setQL(newL);
    setQM(0);
    setSubshellElectrons(Array(2 * newL + 1).fill().map(() => []));
  };


  const pertemuans = [
    {
      id: 1,
      title: 'Pertemuan 1',
      subtitle: 'Evolusi Model Atom',
      icon: Atom,
      bgColor: '#e3f2fd', // Soft blue
      iconColor: '#1976d2',
      accentColor: 'var(--accent-teal)',
      description: 'Mempelajari perjalanan sejarah penemuan atom mulai dari filsuf Yunani Democritus, Dalton, Thomson, Rutherford, Bohr, hingga Mekanika Kuantum modern.'
    },
    {
      id: 2,
      title: 'Pertemuan 2',
      subtitle: 'Notasi Atom, Isotop, Isobar, Isoton',
      icon: Layers,
      bgColor: '#e8f5e9', // Soft green
      iconColor: '#2e7d32',
      accentColor: 'var(--accent-teal)',
      description: 'Menentukan Notasi nuklida berdasarkan jumlah proton, elektron, dan neutron, serta membandingkan perbedaan antara isotop, isobar, dan isoton.'
    },
    {
      id: 3,
      title: 'Pertemuan 3',
      subtitle: 'Konfigurasi Elektron & Sifat Kimia',
      icon: Award,
      bgColor: '#f3e5f5', // Soft purple
      iconColor: '#7b1fa2',
      accentColor: 'var(--accent-magenta)',
      description: 'Memahami cara penulisan konfigurasi elektron Bohr & Kuantum (Aufbau, Larangan Pauli, Aturan Hund), Bilangan Kuantum, serta kaitannya dengan sifat kimia unsur.'
    }
  ];

  const runBohrSimulation = () => {
    if (isBohrSimulating) return;
    setIsBohrSimulating(true);

    // Step 1: Absorbing photon wave
    setBohrState('absorbing');

    // After 900ms, start transitioning electron up to orbit 3
    setTimeout(() => {
      setBohrOrbit(3);
      setBohrState('transitioning-up');
    }, 900);

    // Step 2: Reaches orbit 3 (excited state)
    setTimeout(() => {
      setBohrState('excited');
    }, 1900);

    // Step 3: Start de-excitation (releasing photon)
    setTimeout(() => {
      setBohrState('emitting');
    }, 3100);

    // Step 4: Falls back to orbit 1
    setTimeout(() => {
      setBohrOrbit(1);
      setBohrState('transitioning-down');
    }, 3700);

    // Step 5: Finished
    setTimeout(() => {
      setBohrState('ground');
      setIsBohrSimulating(false);
    }, 4700);
  };

  const renderModel = (type) => {
    switch (type) {
      case 'democritus':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
            <defs>
              <radialGradient id="democritusGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="60%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#1f2937" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="65" fill="url(#democritusGrad)" filter="drop-shadow(0 0 10px rgba(156,163,175,0.4))" />
          </svg>
        );
      case 'dalton':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
            <defs>
              <radialGradient id="daltonGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="60%" stopColor="#005a9e" />
                <stop offset="100%" stopColor="#021a30" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="65" fill="url(#daltonGrad)" filter="drop-shadow(0 0 25px rgba(0, 242, 254, 0.55))" />
          </svg>
        );
      case 'thomson':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
            <defs>
              <radialGradient id="thomsonSphere" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ff8a90" />
                <stop offset="70%" stopColor="#dd1c24" />
                <stop offset="100%" stopColor="#550205" />
              </radialGradient>
              <radialGradient id="electronGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#00f2fe" />
                <stop offset="100%" stopColor="#005588" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="70" fill="url(#thomsonSphere)" filter="drop-shadow(0 0 20px rgba(255, 94, 98, 0.45))" />
            <text x="100" y="100" textAnchor="middle" dominantBaseline="central" fill="rgba(255,255,255,0.22)" fontSize="52" fontWeight="800">+</text>

            {/* Scattered Electrons */}
            <circle cx="65" cy="70" r="9" fill="url(#electronGrad)" filter="drop-shadow(0 0 5px #00f2fe)" />
            <text x="65" y="70" textAnchor="middle" dominantBaseline="central" fill="#020813" fontSize="11" fontWeight="900">-</text>

            <circle cx="135" cy="75" r="9" fill="url(#electronGrad)" filter="drop-shadow(0 0 5px #00f2fe)" />
            <text x="135" y="75" textAnchor="middle" dominantBaseline="central" fill="#020813" fontSize="11" fontWeight="900">-</text>

            <circle cx="95" cy="130" r="9" fill="url(#electronGrad)" filter="drop-shadow(0 0 5px #00f2fe)" />
            <text x="95" y="130" textAnchor="middle" dominantBaseline="central" fill="#020813" fontSize="11" fontWeight="900">-</text>

            <circle cx="105" cy="55" r="9" fill="url(#electronGrad)" filter="drop-shadow(0 0 5px #00f2fe)" />
            <text x="105" y="55" textAnchor="middle" dominantBaseline="central" fill="#020813" fontSize="11" fontWeight="900">-</text>

            <circle cx="60" cy="115" r="9" fill="url(#electronGrad)" filter="drop-shadow(0 0 5px #00f2fe)" />
            <text x="60" y="115" textAnchor="middle" dominantBaseline="central" fill="#020813" fontSize="11" fontWeight="900">-</text>

            <circle cx="135" cy="120" r="9" fill="url(#electronGrad)" filter="drop-shadow(0 0 5px #00f2fe)" />
            <text x="135" y="120" textAnchor="middle" dominantBaseline="central" fill="#020813" fontSize="11" fontWeight="900">-</text>
          </svg>
        );
      case 'rutherford':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
            <defs>
              <radialGradient id="nucleusGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffaa88" />
                <stop offset="70%" stopColor="#ff5e62" />
                <stop offset="100%" stopColor="#9e0005" />
              </radialGradient>
            </defs>
            {/* Ellipse paths */}
            <ellipse cx="100" cy="100" rx="75" ry="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" transform="rotate(0 100 100)" />
            <ellipse cx="100" cy="100" rx="75" ry="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" transform="rotate(60 100 100)" />
            <ellipse cx="100" cy="100" rx="75" ry="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" transform="rotate(120 100 100)" />

            {/* Orbiting electrons */}
            <circle r="5.5" fill="#00f2fe" filter="drop-shadow(0 0 6px #00f2fe)">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M 25,100 A 75,22 0 1,1 175,100 A 75,22 0 1,1 25,100" />
            </circle>
            <g transform="rotate(60 100 100)">
              <circle r="5.5" fill="#00f2fe" filter="drop-shadow(0 0 6px #00f2fe)">
                <animateMotion dur="2.4s" repeatCount="indefinite" path="M 25,100 A 75,22 0 1,1 175,100 A 75,22 0 1,1 25,100" begin="0.7s" />
              </circle>
            </g>
            <g transform="rotate(120 100 100)">
              <circle r="5.5" fill="#00f2fe" filter="drop-shadow(0 0 6px #00f2fe)">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M 25,100 A 75,22 0 1,1 175,100 A 75,22 0 1,1 25,100" begin="1.4s" />
              </circle>
            </g>

            {/* Central Nucleus cluster */}
            <circle cx="100" cy="100" r="13" fill="url(#nucleusGrad)" filter="drop-shadow(0 0 12px rgba(255, 94, 98, 0.7))" />
            <circle cx="97" cy="98" r="4" fill="#ff5e62" />
            <circle cx="103" cy="97" r="4.5" fill="#ff9966" />
            <circle cx="99" cy="103" r="4.2" fill="#ff5e62" />
          </svg>
        );
      case 'bohr':
        const activeRadius = bohrOrbit === 1 ? 32 : (bohrOrbit === 2 ? 60 : 88);
        const angle = Math.PI / 4; // 45 deg
        const elCx = 100 + activeRadius * Math.cos(angle);
        const elCy = 100 - activeRadius * Math.sin(angle);

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
            <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
              <defs>
                <radialGradient id="nucleusGradBohr" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffaa88" />
                  <stop offset="70%" stopColor="#ff5e62" />
                  <stop offset="100%" stopColor="#9e0005" />
                </radialGradient>
              </defs>

              {/* Concentric orbits K, L, M */}
              <circle cx="100" cy="100" r="32" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <text x="100" y="64" fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="middle">n=1 (K)</text>

              <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
              <text x="100" y="36" fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="middle">n=2 (L)</text>

              <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <text x="100" y="8" fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="middle">n=3 (M)</text>

              {/* Central Nucleus */}
              <circle cx="100" cy="100" r="14" fill="url(#nucleusGradBohr)" filter="drop-shadow(0 0 10px rgba(255, 94, 98, 0.6))" />
              <text x="100" y="100" textAnchor="middle" dominantBaseline="central" fill="#ffffff" fontSize="9" fontWeight="800">+</text>

              {/* Photon wave absorption */}
              {bohrState === 'absorbing' && (
                <path d="M 0,100 C 25,80 50,120 75,100 C 90,92 110,100 122,78" fill="none" stroke="#ffdf00" strokeWidth="2.5" strokeDasharray="5" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="30;0" dur="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="1" />
                </path>
              )}

              {/* Photon wave emission */}
              {bohrState === 'emitting' && (
                <path d="M 122,78 C 140,70 160,90 180,75 L 210,70" fill="none" stroke="#00f2fe" strokeWidth="2.5">
                  <animate attributeName="stroke-dashoffset" values="0;30" dur="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="1" />
                </path>
              )}

              {/* Moving Electron */}
              <circle
                cx={elCx}
                cy={elCy}
                r="6.5"
                fill="#00f2fe"
                filter="drop-shadow(0 0 8px #00f2fe)"
                style={{ transition: 'cx 1s cubic-bezier(0.4, 0, 0.2, 1), cy 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
              />
            </svg>

            {/* Simulation trigger */}
            <button
              onClick={runBohrSimulation}
              disabled={isBohrSimulating}
              className="btn btn-primary"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: isBohrSimulating ? 'rgba(255,255,255,0.05)' : 'var(--accent-teal)',
                borderColor: isBohrSimulating ? 'var(--glass-border)' : 'var(--accent-teal)',
                color: isBohrSimulating ? 'var(--text-muted)' : '#0a0b10',
                cursor: isBohrSimulating ? 'not-allowed' : 'pointer'
              }}
            >
              <Cpu size={14} />
              {bohrState === 'ground' && 'Simulasikan Eksitasi (K -> M)'}
              {bohrState === 'absorbing' && 'Menyerap Foton (Energi)...'}
              {bohrState === 'transitioning-up' && 'Elektron Melompat Naik...'}
              {bohrState === 'excited' && 'Keadaan Tereksitasi!'}
              {bohrState === 'emitting' && 'Memancarkan Foton (Cahaya)...'}
              {bohrState === 'transitioning-down' && 'Elektron Jatuh Kembali...'}
            </button>
          </div>
        );
      case 'quantum':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
            <defs>
              <radialGradient id="nucleusGradQuantum" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffaa88" />
                <stop offset="70%" stopColor="#ff5e62" />
                <stop offset="100%" stopColor="#9e0005" />
              </radialGradient>
              <radialGradient id="cloudGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(0, 242, 254, 0.55)" />
                <stop offset="25%" stopColor="rgba(0, 242, 254, 0.35)" />
                <stop offset="60%" stopColor="rgba(0, 242, 254, 0.12)" />
                <stop offset="100%" stopColor="rgba(0, 242, 254, 0)" />
              </radialGradient>
              <radialGradient id="pOrbGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(243, 85, 136, 0.35)" />
                <stop offset="60%" stopColor="rgba(243, 85, 136, 0.1)" />
                <stop offset="100%" stopColor="rgba(243, 85, 136, 0)" />
              </radialGradient>
            </defs>

            {/* Pulsating Orbital s Cloud */}
            <circle cx="100" cy="100" r="82" fill="url(#cloudGrad)">
              <animate attributeName="r" values="74;88;74" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Dumbbell Orbital p */}
            <g transform="rotate(30 100 100)">
              <ellipse cx="100" cy="65" rx="26" ry="32" fill="url(#pOrbGrad)">
                <animate attributeName="ry" values="28;35;28" dur="4s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="100" cy="135" rx="26" ry="32" fill="url(#pOrbGrad)">
                <animate attributeName="ry" values="28;35;28" dur="4s" repeatCount="indefinite" />
              </ellipse>
            </g>

            {/* Rotating probability dust */}
            <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="1" strokeDasharray="2 8">
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="15s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(243, 85, 136, 0.15)" strokeWidth="1" strokeDasharray="3 6">
              <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* Central Nucleus */}
            <circle cx="100" cy="100" r="13" fill="url(#nucleusGradQuantum)" filter="drop-shadow(0 0 10px rgba(255, 94, 98, 0.6))" />
            <circle cx="98" cy="98" r="4.2" fill="#ff5e62" />
            <circle cx="102" cy="102" r="4.2" fill="#ff9966" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderNucleusCluster = (protons, neutrons, scale = 1) => {
    // Deterministic points for a nice central sphere cluster
    const clusterPoints = [
      { x: 100, y: 100 },
      { x: 86, y: 100 },
      { x: 114, y: 100 },
      { x: 100, y: 86 },
      { x: 100, y: 114 },
      { x: 90, y: 90 },
      { x: 110, y: 90 },
      { x: 90, y: 110 },
      { x: 110, y: 110 },
      { x: 100, y: 72 },
      { x: 100, y: 128 },
      { x: 72, y: 100 },
      { x: 128, y: 100 },
      { x: 80, y: 88 },
      { x: 120, y: 88 },
      { x: 80, y: 112 },
      { x: 120, y: 112 },
      { x: 92, y: 76 },
      { x: 108, y: 76 },
      { x: 92, y: 124 },
      { x: 108, y: 124 }
    ];

    const totalParticles = protons + neutrons;
    const particles = [];

    // Distribute protons and neutrons
    let pCount = 0;
    let nCount = 0;
    for (let i = 0; i < totalParticles && i < clusterPoints.length; i++) {
      // Alternate protons and neutrons for a mixed look
      const isProton = (i % 2 === 0 && pCount < protons) || (nCount >= neutrons);
      if (isProton) pCount++; else nCount++;

      particles.push({
        ...clusterPoints[i],
        fill: isProton ? 'var(--color-proton)' : 'var(--color-neutron)',
        type: isProton ? 'p' : 'n'
      });
    }

    return (
      <svg width={150 * scale} height={150 * scale} viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
        <defs>
          <filter id="particleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit rings */}
        <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" />

        {/* Cluster particles */}
        {particles.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="12"
            fill={pt.fill}
            stroke="rgba(10,11,16,0.5)"
            strokeWidth="1.5"
            filter="url(#particleGlow)"
            style={{
              transition: 'all 0.5s ease-in-out'
            }}
          />
        ))}
      </svg>
    );
  };

    const renderLKS1 = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* Header Lembar Kerja */}
        <div className="glass-panel-glow" style={{
          padding: '24px 30px',
          borderRadius: '24px',
          border: '1.5px solid var(--glass-border-glow)',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05), rgba(255, 255, 255, 0.02))'
        }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px 0' }}>
            Lembar Kerja Siswa (LKS) &bull; Pertemuan 1
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
            Materi: Evolusi Model Atom & Partikel Penyusunnya. Kerjakan soal-soal latihan ini dengan semaksimal mungkin!
          </p>
        </div>

        {/* Kegiatan 1 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 1 &bull; Orientasi Masalah
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Cermati Permasalahan Berikut:</h4>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            borderLeft: '4px solid var(--accent-teal)',
            padding: '16px',
            borderRadius: '0 12px 12px 0',
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            Sekelompok siswa sedang mempelajari atom. Salah satu siswa berpendapat bahwa model atom Dalton adalah model yang paling benar karena atom dianggap sebagai partikel terkecil yang tidak dapat dibagi lagi. Namun, siswa lain tidak setuju karena terdapat model atom yang lebih modern seperti model atom Rutherford, Bohr, dan mekanika kuantum.
          </div>

          <h5 style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>Pertanyaan Diskusi:</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                1. Mengapa teori dan model atom mengalami perubahan dari waktu ke waktu?
              </p>
              <div style={{
                width: '100%', minHeight: '50px', padding: '12px', borderRadius: '12px',
                border: '1px dashed var(--glass-border)', backgroundColor: 'rgba(255, 255, 255, 0.01)',
                display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12.5px'
              }}>
                [Kerjakan dengan semaksimal mungkin! ✍️]
              </div>
            </div>
            <div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                2. Fakta atau penemuan apa yang menyebabkan perubahan model atom?
              </p>
              <div style={{
                width: '100%', minHeight: '50px', padding: '12px', borderRadius: '12px',
                border: '1px dashed var(--glass-border)', backgroundColor: 'rgba(255, 255, 255, 0.01)',
                display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12.5px'
              }}>
                [Kerjakan dengan semaksimal mungkin! ✍️]
              </div>
            </div>
            <div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                3. Bagaimana penemuan partikel penyusun atom memengaruhi perkembangan teori atom?
              </p>
              <div style={{
                width: '100%', minHeight: '50px', padding: '12px', borderRadius: '12px',
                border: '1px dashed var(--glass-border)', backgroundColor: 'rgba(255, 255, 255, 0.01)',
                display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12.5px'
              }}>
                [Kerjakan dengan semaksimal mungkin! ✍️]
              </div>
            </div>
          </div>
        </div>

        {/* Kegiatan 2 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 2 &bull; Rumusan Masalah
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Merumuskan Masalah:</h4>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <a
              href="https://www.youtube.com/watch?v=pPMhe46Vb3o"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '1 0 240px', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px', borderRadius: '16px', backgroundColor: 'rgba(255, 0, 0, 0.05)',
                border: '1px solid rgba(255, 0, 0, 0.25)', textDecoration: 'none', color: '#ffffff',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 0, 0.25)';
              }}
            >
              <div style={{ padding: '8px', borderRadius: '12px', backgroundColor: '#ff0000', display: 'flex', alignItems: 'center' }}>
                <Play size={16} fill="#ffffff" color="#ff0000" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '13px', fontWeight: 700 }}>Link YouTube 1</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>youtube.com/watch?v=pPMhe46Vb3o</span>
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=xazQRcSCRaY"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '1 0 240px', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px', borderRadius: '16px', backgroundColor: 'rgba(255, 0, 0, 0.05)',
                border: '1px solid rgba(255, 0, 0, 0.25)', textDecoration: 'none', color: '#ffffff',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 0, 0.25)';
              }}
            >
              <div style={{ padding: '8px', borderRadius: '12px', backgroundColor: '#ff0000', display: 'flex', alignItems: 'center' }}>
                <Play size={16} fill="#ffffff" color="#ff0000" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '13px', fontWeight: 700 }}>Link YouTube 2</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>youtube.com/watch?v=xazQRcSCRaY</span>
              </div>
            </a>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.5' }}>
            Berdasarkan fenomena di atas dan video pembelajaran yang telah dipelajari, rumuskan beberapa pertanyaan masalah yang timbul sesuai fenomena tersebut:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '8px' }}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--accent-teal)' }}>{num}.</span>
                <span style={{ fontSize: '13.5px', color: 'var(--text-muted)', fontFamily: 'monospace', wordBreak: 'break-all', lineHeight: '1.5' }}>
                  ..........................................................................................................................................
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tahukah Kamu Info Box */}
        <div className="glass-panel-glow" style={{
          padding: '24px 28px',
          borderRadius: '20px',
          border: '1.5px solid var(--glass-border-glow)',
          background: 'linear-gradient(135deg, rgba(123, 31, 162, 0.1), rgba(0, 242, 254, 0.03))',
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '12px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-teal)',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.15)'
          }}>
            <Sparkles size={22} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Tahukah Kamu?
            </h4>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Atom ditemukan oleh para ilmuwan dari teori paling sederhana hingga modern. Teori atom pada awalnya ditemukan oleh Democritus kemudian berkembang menjadi teori Dalton, Thomson, Rutherford, Bohr hingga mekanika kuantum. Setiap teori yang ditemukan memiliki kelebihan dan kelemahan masing-masing yang mana kelemahan dari teori tersebut akan diperbaiki oleh teori atom berikutnya. Oleh karena itu, mari kita mengulas teori perkembangan atom sekaligus mengenal partikel dasar penyusun atom dan susunan atom.
            </p>
          </div>
        </div>

        {/* Kegiatan 3 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 3 &bull; Menghubungkan Tokoh dan Model Atom
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Tabel Hubungan Penemu dan Model Atom:</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Salin tabel ini dan pasangkan Gambar Ilmuwan, Nama Penemu, dan Gambar Model Atom yang sesuai:
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '30%', textAlign: 'center' }}>Gambar Ilmuwan</th>
                <th style={{ padding: '12px 8px', width: '35%', textAlign: 'center' }}>Nama Penemu</th>
                <th style={{ padding: '12px 8px', width: '35%', textAlign: 'center' }}>Gambar Model Atom</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: John Dalton Photo, Blank Name, Blank Model */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'middle' }}>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                    <img
                      src="/assets/image1.jpeg"
                      alt="John Dalton"
                      style={{ width: '70px', height: '85px', objectFit: 'cover', borderRadius: '10px', border: '1.5px solid var(--accent-teal)' }}
                    />
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Materi 1</span>
                  </div>
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '140px', height: '36px', margin: '0 auto', borderRadius: '8px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '90px', height: '90px', margin: '0 auto', borderRadius: '12px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
              </tr>

              {/* Row 2: Blank Photo, J.J Thomson Name, Blank Model */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'middle' }}>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '70px', height: '85px', margin: '0 auto', borderRadius: '10px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>J.J Thomson</span>
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '90px', height: '90px', margin: '0 auto', borderRadius: '12px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
              </tr>

              {/* Row 3: Blank Photo, Ernest Rutherford Name, Blank Model */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'middle' }}>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '70px', height: '85px', margin: '0 auto', borderRadius: '10px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Ernest Rutherford</span>
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '90px', height: '90px', margin: '0 auto', borderRadius: '12px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
              </tr>

              {/* Row 4: Niels Bohr Photo, Blank Name, Blank Model */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'middle' }}>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                    <img
                      src="/assets/image2.jpeg"
                      alt="Niels Bohr"
                      style={{ width: '70px', height: '85px', objectFit: 'cover', borderRadius: '10px', border: '1.5px solid var(--accent-teal)' }}
                    />
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Materi 2</span>
                  </div>
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '140px', height: '36px', margin: '0 auto', borderRadius: '8px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '90px', height: '90px', margin: '0 auto', borderRadius: '12px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
              </tr>

              {/* Row 5: Blank Photo, Blank Name, Mekanika Kuantum Model Photo */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'middle' }}>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '70px', height: '85px', margin: '0 auto', borderRadius: '10px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ width: '140px', height: '36px', margin: '0 auto', borderRadius: '8px', border: '1.5px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                    <img
                      src="/assets/image3.jpeg"
                      alt="Model Mekanika Kuantum"
                      style={{ width: '90px', height: '90px', objectFit: 'contain', borderRadius: '10px', border: '1.5px solid var(--accent-teal)', backgroundColor: 'rgba(0,0,0,0.2)' }}
                    />
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Materi 3</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Kegiatan 4 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 4 &bull; Tabel Karakteristik Teori Atom
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Lengkapi Tabel Teori Atom Berikut dengan semaksimal mungkin:</h4>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '15%' }}>Teori Atom</th>
                <th style={{ padding: '12px 8px', width: '30%' }}>Definisi Atom</th>
                <th style={{ padding: '12px 8px', width: '27%' }}>Kelebihan Teori Atom</th>
                <th style={{ padding: '12px 8px', width: '28%' }}>Kekurangan Teori Atom</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Dalton' },
                { name: 'Thomson' },
                { name: 'Rutherford' },
                { name: 'Neils Bohr' },
                { name: 'Mekanika Kuantum' }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', height: '70px' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>{row.name}</td>
                  <td style={{ padding: '12px 8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '12px' }}>
                      <span>..................................................</span>
                      <span>..................................................</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '12px' }}>
                      <span>..................................................</span>
                      <span>..................................................</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '12px' }}>
                      <span>..................................................</span>
                      <span>..................................................</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kegiatan 5 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 5 &bull; Kesimpulan Eksperimen & Percobaan Teori Atom
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Tabel Percobaan dan Kesimpulan Teori Atom:</h4>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '750px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '15%' }}>Nama Ilmuwan</th>
                <th style={{ padding: '12px 8px', width: '25%', textAlign: 'center' }}>Percobaan yang Dilakukan</th>
                <th style={{ padding: '12px 8px', width: '60%' }}>Kesimpulan</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: John Dalton */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'top' }}>
                <td style={{ padding: '16px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>
                  John Dalton
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{
                    width: '180px', height: '110px', margin: '0 auto', borderRadius: '10px',
                    border: '1.5px solid var(--glass-border)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', overflow: 'hidden'
                  }}>
                    <div style={{ transform: 'scale(0.5)', transformOrigin: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {renderModel('dalton')}
                    </div>
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Model Atom Bola Pejal</div>
                </td>
                <td style={{ padding: '16px 8px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                      Menurut Dalton, semua materi tersusun atas partikel sangat kecil yang disebut <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Atom suatu unsur memiliki ukuran, massa, and sifat yang <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Senyawa terbentuk dari gabungan atom-atom dengan perbandingan jumlah yang <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> dan sederhana.
                    </li>
                    <li>
                      Dalam reaksi kimia, atom hanya mengalami <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>, <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>, atau penataan ulang.
                    </li>
                    <li>
                      Dalton berpendapat bahwa atom tidak dapat <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> maupun <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Keterbatasan teori Dalton: Dalton menganggap atom sebagai partikel yang <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Teori Dalton belum mampu menjelaskan keberadaan <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> dan partikel penyusun atom.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Row 2: J.J Thomson */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'top' }}>
                <td style={{ padding: '16px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>
                  J.J Thomson
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <img
                    src="/assets/image4.png"
                    alt="Percobaan Tabung Sinar Katode"
                    style={{ width: '180px', height: '110px', objectFit: 'contain', borderRadius: '10px', border: '1.5px solid var(--glass-border)', backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px' }}
                  />
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Percobaan Tabung Sinar Katode</div>
                </td>
                <td style={{ padding: '16px 8px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Kesimpulan Percobaan:</div>
                  <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                      Partikel sinar katoda bermuatan <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> sebab tertarik menuju pelat bermuatan <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Partikel sinar katoda memiliki <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> sebab mampu memutar baling-baling tabung.
                    </li>
                    <li>
                      Partikel sinar katoda dimiliki semua materi karena seluruh bahan menghasilkan sinar katoda yang <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Thomson menyimpulkan bahwa <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> merupakan partikel penyusun atom.
                    </li>
                    <li>
                      Thomson berhasil menentukan perbandingan antara <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> dan <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> elektron.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Row 3: Ernest Rutherford */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'top' }}>
                <td style={{ padding: '16px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>
                  Rutherford
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <img
                    src="/assets/image5.jpeg"
                    alt="Percobaan Hamburan Partikel Alfa"
                    style={{ width: '180px', height: '110px', objectFit: 'contain', borderRadius: '10px', border: '1.5px solid var(--glass-border)', backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px' }}
                  />
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Percobaan Hamburan Partikel Alfa</div>
                </td>
                <td style={{ padding: '16px 8px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Kesimpulan Percobaan:</div>
                  <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                      Sebagian besar partikel alfa <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> lempeng emas tanpa mengalami penyimpangan.
                    </li>
                    <li>
                      Sebagian kecil partikel alfa mengalami <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Sangat sedikit partikel alfa mengalami <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> atau dipantulkan kembali.
                    </li>
                    <li>
                      Rutherford menyimpulkan bahwa atom sebagian besar berupa <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Muatan positif dan sebagian besar massa atom terpusat pada bagian yang disebut <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Elektron bergerak mengelilingi <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Row 4: Niels Bohr */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'top' }}>
                <td style={{ padding: '16px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>
                  Niels Bohr
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{
                    width: '180px', height: '110px', margin: '0 auto', borderRadius: '10px',
                    border: '1.5px solid var(--glass-border)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', overflow: 'hidden'
                  }}>
                    <div style={{ transform: 'scale(0.5)', transformOrigin: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
                        <defs>
                          <radialGradient id="nucleusGradBohrCell" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#ffaa88" />
                            <stop offset="70%" stopColor="#ff5e62" />
                            <stop offset="100%" stopColor="#9e0005" />
                          </radialGradient>
                        </defs>
                        <circle cx="100" cy="100" r="32" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                        <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                        <circle cx="100" cy="100" r="14" fill="url(#nucleusGradBohrCell)" filter="drop-shadow(0 0 10px rgba(255, 94, 98, 0.6))" />
                        <text x="100" y="100" textAnchor="middle" dominantBaseline="central" fill="#ffffff" fontSize="9" fontWeight="800">+</text>
                        <circle
                          cx={100 + 60 * Math.cos(Math.PI / 4)}
                          cy={100 - 60 * Math.sin(Math.PI / 4)}
                          r="6.5"
                          fill="#00f2fe"
                          filter="drop-shadow(0 0 8px #00f2fe)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Model Atom Bohr (Lintasan Elektron)</div>
                </td>
                <td style={{ padding: '16px 8px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                      Elektron bergerak pada lintasan tertentu yang disebut <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Setiap lintasan memiliki <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> tertentu.
                    </li>
                    <li>
                      Selama berada pada lintasannya, elektron <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> energi.
                    </li>
                    <li>
                      Elektron dapat berpindah lintasan dengan <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> atau <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> energi.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Row 5: Mekanika Kuantum */}
              <tr style={{ borderBottom: '1px solid var(--glass-border)', verticalAlign: 'top' }}>
                <td style={{ padding: '16px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>
                  Mekanika Kuantum
                </td>
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{
                    width: '180px', height: '110px', margin: '0 auto', borderRadius: '10px',
                    border: '1.5px solid var(--glass-border)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', overflow: 'hidden'
                  }}>
                    <div style={{ transform: 'scale(0.5)', transformOrigin: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {renderModel('quantum')}
                    </div>
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Model Atom Mekanika Kuantum</div>
                </td>
                <td style={{ padding: '16px 8px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                      Menurut Louis de Broglie, elektron memiliki sifat sebagai <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> dan <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>.
                    </li>
                    <li>
                      Menurut Heisenberg, posisi dan <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong> elektron tidak dapat ditentukan secara bersamaan dengan tepat.
                    </li>
                    <li>
                      Menurut Schrödinger, elektron berada pada daerah peluang yang disebut <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>....................</strong>, bukan lintasan tetap.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    );
  };
;

    const renderLKS2 = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* Header Lembar Kerja */}
        <div className="glass-panel-glow" style={{
          padding: '24px 30px',
          borderRadius: '24px',
          border: '1.5px solid var(--glass-border-glow)',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05), rgba(255, 255, 255, 0.02))'
        }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px 0' }}>
            Lembar Kerja Siswa (LKS) &bull; Pertemuan 2
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
            Materi: Notasi Atom, Isotop, Isobar, dan Isoton. Kerjakan soal-soal latihan ini dengan semaksimal mungkin!
          </p>
        </div>

        {/* Kegiatan 1 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 1 &bull; Orientasi Masalah & Fenomena
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Cermati Fenomena Berikut:</h4>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img
              src="/assets/image7.png"
              alt="Fenomena Aplikasi Isotop"
              style={{ maxWidth: '100%', maxHeight: '220px', objectFit: 'contain', borderRadius: '12px', border: '1px solid var(--glass-border)', backgroundColor: 'rgba(255,255,255,0.02)' }}
            />
          </div>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            borderLeft: '4px solid var(--accent-teal)',
            padding: '16px',
            borderRadius: '0 12px 12px 0',
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            Dalam dunia kesehatan, beberapa isotop digunakan untuk membantu diagnosis dan terapi penyakit. Salah satu contohnya adalah isotop pada unsur tertentu yang memiliki jumlah proton sama, tetapi jumlah neutron berbeda. Di bidang energi, dikenal uranium-235 dan uranium-238 yang berasal dari unsur yang sama namun memiliki perbedaan sifat inti. Selain itu, terdapat atom-atom dari unsur berbeda yang dapat memiliki nomor massa atau jumlah neutron yang sama.
          </div>

          <h5 style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>Pertanyaan Diskusi Fenomena:</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                1. Bagaimana cara membedakan suatu atom dengan atom lainnya?
              </p>
              <div style={{
                width: '100%', minHeight: '50px', padding: '12px', borderRadius: '12px',
                border: '1px dashed var(--glass-border)', backgroundColor: 'rgba(255, 255, 255, 0.01)',
                display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12.5px'
              }}>
                [Kerjakan dengan semaksimal mungkin! ✍️]
              </div>
            </div>
            <div>
              <p style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                2. Mengapa atom dari unsur yang sama dapat memiliki massa berbeda?
              </p>
              <div style={{
                width: '100%', minHeight: '50px', padding: '12px', borderRadius: '12px',
                border: '1px dashed var(--glass-border)', backgroundColor: 'rgba(255, 255, 255, 0.01)',
                display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12.5px'
              }}>
                [Kerjakan dengan semaksimal mungkin! ✍️]
              </div>
            </div>
            <div>
              <p style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                3. Bagaimana hubungan proton, neutron, dan elektron dalam menentukan identitas atom?
              </p>
              <div style={{
                width: '100%', minHeight: '50px', padding: '12px', borderRadius: '12px',
                border: '1px dashed var(--glass-border)', backgroundColor: 'rgba(255, 255, 255, 0.01)',
                display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12.5px'
              }}>
                [Kerjakan dengan semaksimal mungkin! ✍️]
              </div>
            </div>
          </div>
        </div>

        {/* Kegiatan 2 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 2 &bull; Penyelidikan Awal Kelompok
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Penyelidikan Fenomena:</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Lengkapi tabel penyelidikan berdasarkan fenomena dengan semaksimal mungkin:
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '400px', marginBottom: '24px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '50%' }}>Informasi yang Diketahui</th>
                <th style={{ padding: '12px 8px', width: '50%' }}>Informasi yang Perlu Dicari</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', height: '55px' }}>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '12.5px' }}>
                    ......................................................................
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '12.5px' }}>
                    ......................................................................
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Merancang Dugaan Awal (Hipotesis):</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '8px', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13.5px', lineHeight: '1.8' }}>
            <span>......................................................................................................................................................</span>
            <span>......................................................................................................................................................</span>
          </div>
        </div>

        {/* Kegiatan 3 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 3 &bull; Penyelidikan Partikel Penyusun Atom
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Tabel 1 &bull; Nomor Atom & Massa (Lengkapi kolom Atom):</h4>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '400px', marginBottom: '28px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '30%' }}>Atom</th>
                <th style={{ padding: '12px 8px', width: '35%' }}>Nomor Atom (Z)</th>
                <th style={{ padding: '12px 8px', width: '35%' }}>Nomor Massa (A)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { z: 6, a: 12 },
                { z: 6, a: 14 },
                { z: 11, a: 23 },
                { z: 12, a: 24 },
                { z: 7, a: 14 }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', height: '48px' }}>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ....................
                  </td>
                  <td style={{ padding: '12px 8px', color: '#ffffff' }}>{row.z}</td>
                  <td style={{ padding: '12px 8px', color: '#ffffff' }}>{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Tabel 2 &bull; Jumlah Partikel (Lengkapi seluruh baris):</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '500px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '25%' }}>Atom</th>
                <th style={{ padding: '12px 8px', width: '25%', textAlign: 'center' }}>Proton</th>
                <th style={{ padding: '12px 8px', width: '25%', textAlign: 'center' }}>Elektron</th>
                <th style={{ padding: '12px 8px', width: '25%', textAlign: 'center' }}>Neutron</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', height: '48px' }}>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ....................
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'monospace' }}>
                    .........
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'monospace' }}>
                    .........
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'monospace' }}>
                    .........
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "1. Atom manakah yang memiliki jumlah proton sama tetapi neutron berbeda?",
              "2. Atom manakah yang memiliki nomor massa sama tetapi nomor atom berbeda?",
              "3. Atom manakah yang memiliki jumlah neutron sama?",
              "4. Berdasarkan hasil penyelidikan, bagaimana cara membedakan isotop, isobar, dan isoton?"
            ].map((q, idx) => (
              <div key={idx} style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {q}
                </p>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                  ......................................................................................................................................................
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kegiatan 4 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 4 &bull; Analisis Hubungan Antar Atom
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Lengkapi Tabel Klasifikasi Pasangan Atom:</h4>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '550px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '30%' }}>Pasangan Atom</th>
                <th style={{ padding: '12px 8px', width: '25%' }}>Hubungan</th>
                <th style={{ padding: '12px 8px', width: '45%' }}>Alasan Analisis</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', height: '52px' }}>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace', fontWeight: 700 }}>
                    .................... dan ....................
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ....................
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ............................................................
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "1. Apa ciri utama isotop?",
              "2. Apa ciri utama isobar?",
              "3. Apa ciri utama isoton?",
              "4. Mengapa pemahaman mengenai isotop, isobar, dan isoton penting dalam mempelajari struktur atom?"
            ].map((q, idx) => (
              <div key={idx} style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>{q}</p>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                  ......................................................................................................................................................
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kegiatan 5 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 5 &bull; Studi Kasus Analisis Laboratorium
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Kasus Peneliti Laboratorium:</h4>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            Seorang peneliti di laboratorium menemukan data beberapa atom sebagai berikut:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'Atom A', p: 6, n: 6 },
              { label: 'Atom B', p: 6, n: 8 },
              { label: 'Atom C', p: 7, n: 7 },
              { label: 'Atom D', p: 8, n: 8 }
            ].map((card, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '16px', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--accent-teal)', fontWeight: 700 }}>{card.label}</h5>
                <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span>Proton: {card.p}</span>
                  <span>Neutron: {card.n}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.15)' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
                1. Tentukan nomor atom (Z) dan nomor massa (A) masing-masing atom!
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '8px' }}>
                {['Atom A', 'Atom B', 'Atom C', 'Atom D'].map((name, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', width: '60px', fontWeight: 600 }}>{name}:</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>Z = ......, A = ......</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.15)' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                2. Pasangan atom manakah yang termasuk isotop? Jelaskan alasanmu!
              </p>
              <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                ......................................................................................................................................................
              </div>
            </div>

            <div style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.15)' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                3. Adakah pasangan atom yang termasuk isobar atau isoton? Jelaskan!
              </p>
              <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                ......................................................................................................................................................
              </div>
            </div>

            <div style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.15)' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                4. Tuliskan kesimpulan kelompokmu mengenai cara menentukan hubungan antar atom.
              </p>
              <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                ......................................................................................................................................................
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };
;

    const renderLKS3 = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* Header Lembar Kerja */}
        <div className="glass-panel-glow" style={{
          padding: '24px 30px',
          borderRadius: '24px',
          border: '1.5px solid var(--glass-border-glow)',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05), rgba(255, 255, 255, 0.02))'
        }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px 0' }}>
            Lembar Kerja Siswa (LKS) &bull; Pertemuan 3
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
            Materi: Konfigurasi Elektron dan Kaitannya dengan Sifat Kimia. Kerjakan soal-soal latihan ini dengan semaksimal mungkin!
          </p>
        </div>

        {/* Kegiatan 1 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 1 &bull; Orientasi Masalah Kereaktifan Unsur
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Cermati Fenomena Keseharian Berikut:</h4>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img
              src="/assets/image8.png"
              alt="Fenomena Kereaktifan Unsur"
              style={{ maxWidth: '100%', maxHeight: '220px', objectFit: 'contain', borderRadius: '12px', border: '1px solid var(--glass-border)', backgroundColor: 'rgba(255,255,255,0.02)' }}
            />
          </div>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            borderLeft: '4px solid var(--accent-teal)',
            padding: '16px',
            borderRadius: '0 12px 12px 0',
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            Magnesium digunakan dalam kembang api karena menghasilkan cahaya terang saat terbakar. Natrium merupakan logam yang sangat reaktif dan dapat bereaksi cepat dengan air (bahkan menimbulkan ledakan). Sementara itu, neon digunakan dalam lampu reklame karena bersifat sangat stabil (inert) dan tidak mudah bereaksi dengan zat lain. Ketiga unsur tersebut sama-sama tersusun atas atom, namun menunjukkan sifat kimia yang berbeda secara ekstrem.
          </div>

          <h5 style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>Pertanyaan Diskusi:</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "1. Mengapa unsur-unsur tersebut dapat memiliki sifat kimia yang berbeda?",
              "2. Faktor apa yang kemungkinan memengaruhi kereaktifan suatu unsur?",
              "3. Menurut dugaan kalian, apakah susunan elektron dalam atom berkaitan dengan sifat kimia unsur?"
            ].map((q, idx) => (
              <div key={idx}>
                <p style={{ fontSize: '13.5px', color: 'var(--text-primary)', marginBottom: '8px' }}>{q}</p>
                <div style={{
                  width: '100%', minHeight: '50px', padding: '12px', borderRadius: '12px',
                  border: '1px dashed var(--glass-border)', backgroundColor: 'rgba(255, 255, 255, 0.01)',
                  display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '12.5px'
                }}>
                  [Kerjakan dengan semaksimal mungkin! ✍️]
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kegiatan 2 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 2 &bull; Puzzle Subkulit & Tingkat Energi
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Puzzle Subkulit Elektron:</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Elektron menempati ruang subkulit pada tingkat energi (kulit) yang berbeda. Hubungannya adalah:
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {[
              { shell: 'Kulit K (n = 1)', subshells: 's' },
              { shell: 'Kulit L (n = 2)', subshells: 's, p' },
              { shell: 'Kulit M (n = 3)', subshells: 's, p, d' },
              { shell: 'Kulit N (n = 4)', subshells: 's, p, d, f' }
            ].map((k, idx) => (
              <div key={idx} className="glass-panel" style={{ flex: '1 0 120px', padding: '12px', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.15)' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>{k.shell}</span>
                <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--accent-teal)', marginTop: '4px' }}>{k.subshells}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "1. Menurut dugaan kalian, apakah setiap tingkat energi memiliki jumlah ruang elektron (orbital) yang sama? Jelaskan!",
              "2. Mengapa elektron diduga menempati ruang tertentu dan tidak berada secara acak?",
              "3. Menurut dugaan kelompokmu, bagaimana pola pengisian elektron pada orbital dalam atom?",
              "4. Informasi apa yang perlu dicari untuk membuktikan dugaan tersebut?"
            ].map((q, idx) => (
              <div key={idx} style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '8px' }}>{q}</p>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                  ......................................................................................................................................................
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kegiatan 3 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 3 &bull; Menyelidiki Pola Konfigurasi Elektron
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Konfigurasi Subkulit Aufbau:</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Urutan pengisian: 1s &rarr; 2s &rarr; 2p &rarr; 3s &rarr; 3p &rarr; 4s &rarr; 3d. Lengkapi konfigurasi unsur-unsur berikut dengan semaksimal mungkin:
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '450px', marginBottom: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '30%' }}>Unsur</th>
                <th style={{ padding: '12px 8px', width: '30%' }}>Nomor Atom (Z)</th>
                <th style={{ padding: '12px 8px', width: '40%' }}>Konfigurasi Elektron (Kuantum)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Litium (Li)', z: 8 },
                { name: 'Oksigen (O)', z: 3 },
                { name: 'Natrium (Na)', z: 11 },
                { name: 'Klorin (Cl)', z: 17 }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', height: '48px' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>{row.name}</td>
                  <td style={{ padding: '12px 8px', color: '#ffffff' }}>{row.z}</td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ............................................................
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "1. Subkulit manakah yang terisi terlebih dahulu pada setiap unsur?",
              "2. Apakah pengisian elektron mengikuti pola tertentu? Jelaskan berdasarkan hasil penyelidikan!",
              "3. Bagaimana hubungan tingkat energi dengan urutan pengisian elektron?",
              "4. Prinsip apa yang digunakan dalam menentukan konfigurasi elektron tersebut?"
            ].map((q, idx) => (
              <div key={idx} style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '8px' }}>{q}</p>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                  ......................................................................................................................................................
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kegiatan 4 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 4 &bull; Analisis Elektron Valensi & Kestabilan
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Lengkapi Tabel Hubungan Konfigurasi dengan Kestabilan:</h4>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '600px', marginBottom: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', width: '20%' }}>Unsur</th>
                <th style={{ padding: '12px 8px', width: '25%' }}>Konfigurasi Elektron</th>
                <th style={{ padding: '12px 8px', width: '18%' }}>Elektron Valensi</th>
                <th style={{ padding: '12px 8px', width: '17%' }}>Dugaan Kestabilan</th>
                <th style={{ padding: '12px 8px', width: '20%' }}>Alasan Kestabilan</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Litium (Li)', config: '1s² 2s¹' },
                { name: 'Oksigen (O)', config: '1s² 2s² 2p⁴' },
                { name: 'Neon (Ne)', config: '1s² 2s² 2p⁶' },
                { name: 'Natrium (Na)', config: '1s² 2s² 2p⁶ 3s¹' }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', height: '52px' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700, color: 'var(--accent-teal)' }}>{row.name}</td>
                  <td style={{ padding: '12px 8px', color: '#ffffff', fontFamily: 'monospace' }}>
                    {row.config.split(' ').map((part, i) => {
                      const base = part.substring(0, 2);
                      const exp = part.substring(2);
                      return <span key={i}>{base}<sup>{exp}</sup> </span>;
                    })}
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ............
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ............
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    ........................
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "1. Unsur manakah yang memiliki kecenderungan paling stabil? Mengapa?",
              "2. Apa hubungan elektron valensi dengan kecenderungan sifat kimia unsur?",
              "3. Berdasarkan hasil analisis, bagaimana hubungan konfigurasi elektron dengan sifat kimia atom?"
            ].map((q, idx) => (
              <div key={idx} style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '8px' }}>{q}</p>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                  ......................................................................................................................................................
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kegiatan 5 */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-teal)', marginBottom: '14px' }}>
            Kegiatan 5 &bull; Mengungkap Identitas Unsur Misterius
          </span>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Kasus Tiga Unsur Misterius:</h4>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            Seorang peneliti menemukan tiga sampel unsur misterius dengan konfigurasi subkulit sebagai berikut:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'Unsur X', config: '1s² 2s² 2p⁶ 3s¹' },
              { label: 'Unsur Y', config: '1s² 2s² 2p⁶' },
              { label: 'Unsur Z', config: '1s² 2s² 2p⁵' }
            ].map((card, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '16px', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--accent-teal)', fontWeight: 700 }}>{card.label}</h5>
                <div style={{ fontSize: '13px', color: '#ffffff', fontFamily: 'monospace' }}>
                  {card.config.split(' ').map((part, i) => {
                    const base = part.substring(0, 2);
                    const exp = part.substring(2);
                    return <span key={i}>{base}<sup>{exp}</sup> </span>;
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '12px' }}>
                1. Tentukan jumlah elektron valensi masing-masing unsur misterius!
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                {['Unsur X', 'Unsur Y', 'Unsur Z'].map((name, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', width: '60px' }}>{name}:</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>Valensi = ......</span>
                  </div>
                ))}
              </div>
            </div>

            {[
              "2. Unsur manakah yang diperkirakan paling stabil? Jelaskan alasanmu!",
              "3. Unsur manakah yang cenderung mudah bereaksi? Jelaskan!",
              "4. Bagaimana hubungan konfigurasi elektron dengan sifat kimia unsur berdasarkan hasil analisismu?",
              "5. Tuliskan kesimpulan kelompokmu!"
            ].map((q, idx) => (
              <div key={idx} style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '8px' }}>{q}</p>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '13px' }}>
                  ......................................................................................................................................................
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  };
;

  return (
    <div className="container" style={{ padding: '30px 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', gap: '32px' }}>

      {/* Back to Home Button or Overview Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {activePertemuan ? (
          <button
            onClick={() => {
              setActivePertemuan(null);
              setActiveTheoryIdx(0);
              setActiveTheoryIdx2(0);
            }}
            className="btn btn-secondary"
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px'
            }}
          >
            <ArrowLeft size={16} /> Kembali ke Pertemuan
          </button>
        ) : (
          <button
            onClick={() => setActivePage('home')}
            className="btn btn-secondary"
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px'
            }}
          >
            <ArrowLeft size={16} /> Dashboard Utama
          </button>
        )}

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--glass-border)',
          padding: '6px 14px',
          borderRadius: 'var(--radius-full)',
          fontSize: '12px',
          color: 'var(--accent-teal)',
          fontWeight: 700
        }}>
          <BookOpen size={13} />
          <span>Ruang Belajar Mandiri</span>
        </div>
      </div>

      {/* OVERVIEW SCREEN */}
      {activePertemuan === null && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', textAlign: 'center' }}>

          <div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 800,
              background: 'linear-gradient(to right, #ffffff, var(--accent-teal))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Materi Perkembangan & Struktur Atom
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '8px auto 0', fontSize: '15px' }}>
              Silakan pilih modul pertemuan di bawah ini untuk memulai langkah pembelajaran sains kuantum Anda secara terstruktur.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            width: '100%',
            maxWidth: '960px',
            marginTop: '16px'
          }}>
            {pertemuans.map((p) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.id}
                  onClick={() => { setActivePertemuan(p.id); setSubView('materi'); }}
                  className="glass-panel"
                  style={{
                    padding: '40px 24px',
                    borderRadius: '32px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '2px solid var(--glass-border)',
                    transition: 'all var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = p.iconColor;
                    e.currentTarget.style.boxShadow = `0 12px 30px ${p.iconColor}20`;
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  <div style={{
                    backgroundColor: p.bgColor,
                    width: '80px',
                    height: '80px',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 16px ${p.iconColor}15`
                  }}>
                    <IconComponent size={36} color={p.iconColor} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
                      {p.title}
                    </h3>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {p.subtitle}
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* DETAIL LESSON CONTENT: PERTEMUAN 1 */}
      {activePertemuan === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>

          {/* Toggle View: Materi vs Lembar Kerja (LKS) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '6px',
            width: 'fit-content',
            margin: '0 auto 8px auto'
          }}>
            <button
              onClick={() => setSubView('materi')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: subView === 'materi' ? 'var(--accent-teal)' : 'transparent',
                color: subView === 'materi' ? '#0a0b10' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <BookOpen size={14} />
              Materi & Visualisasi
            </button>
            <button
              onClick={() => setSubView('latihan')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: subView === 'latihan' ? 'var(--accent-teal)' : 'transparent',
                color: subView === 'latihan' ? '#0a0b10' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <FileText size={14} />
              Lembar Kerja (LKS)
            </button>
          </div>

          {subView === 'materi' && (
            <>
              {/* Timeline Stepper Navigation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Garis Waktu Evolusi Teori Atom (Klik tahap untuk melihat detail):
                </span>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '12px',
                  width: '100%',
                  overflowX: 'auto',
                  gap: '12px',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}>
                  {theories.map((theory, idx) => {
                    const isTheoryActive = activeTheoryIdx === idx;
                    return (
                      <button
                        key={theory.id}
                        onClick={() => {
                          setActiveTheoryIdx(idx);
                          setBohrOrbit(1);
                          setBohrState('ground');
                          setIsBohrSimulating(false);
                        }}
                        style={{
                          flex: '1 0 auto',
                          padding: '10px 18px',
                          borderRadius: '14px',
                          border: isTheoryActive ? '1.5px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                          backgroundColor: isTheoryActive ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.01)',
                          color: isTheoryActive ? 'var(--accent-teal)' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          fontWeight: 700,
                          textAlign: 'center',
                          fontSize: '13px',
                          transition: 'all var(--transition-fast)',
                          boxShadow: isTheoryActive ? '0 0 10px rgba(0, 242, 254, 0.15)' : 'none'
                        }}
                      >
                        <span style={{ display: 'block', fontSize: '9px', opacity: 0.6, fontWeight: 500, marginBottom: '2px' }}>
                          {theory.period}
                        </span>
                        {theory.scientist}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theory Details and Interactive Model */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>

                <div className="glass-panel" style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '2px solid var(--glass-border)',
                  borderRadius: '24px'
                }}>
                  <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.15)', color: 'var(--accent-teal)' }}>
                    Visualisasi Model Atom
                  </span>

                  <div style={{
                    width: '220px',
                    height: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    {renderModel(theories[activeTheoryIdx].svgType)}
                  </div>

                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
                      Model Atom {theories[activeTheoryIdx].scientist}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '280px', lineHeight: '1.5', margin: 0 }}>
                      {activeTheoryIdx === 4 ? 'Klik tombol di bawah visualisasi untuk memicu perpindahan elektron (eksitasi)!' : 'Animasi di atas menunjukkan visualisasi partikel atom berdasarkan rumusan teori.'}
                    </p>
                  </div>
                </div>

                <div className="glass-panel-glow" style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  borderRadius: '24px',
                  border: '1.5px solid var(--glass-border-glow)'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span className="badge" style={{ backgroundColor: 'rgba(25, 118, 210, 0.2)', color: '#90caf9' }}>Pertemuan 1</span>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>{theories[activeTheoryIdx].period}</span>
                    </div>
                    <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>
                      {theories[activeTheoryIdx].name}
                    </h3>
                    <p style={{ color: 'var(--accent-teal)', fontSize: '14px', fontWeight: 700, marginTop: '4px' }}>
                      Tokoh Pelopor: {theories[activeTheoryIdx].scientist}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                    <div style={{ borderLeft: '3.5px solid var(--accent-teal)', paddingLeft: '14px' }}>
                      <strong style={{ color: '#ffffff', display: 'block', marginBottom: '4px' }}>Gagasan Utama:</strong>
                      {theories[activeTheoryIdx].concept}
                    </div>

                    <div>
                      <strong style={{ color: '#ffffff', display: 'block', marginBottom: '6px' }}>Pokok-Pokok Teori:</strong>
                      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}>
                        {theories[activeTheoryIdx].details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <strong style={{ color: '#ffffff', display: 'block', marginBottom: '4px' }}>Percobaan Kunci / Dasar Teori:</strong>
                      <p style={{ margin: 0 }}>{theories[activeTheoryIdx].experiment}</p>
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(255, 94, 98, 0.05)',
                      border: '1px solid rgba(255, 94, 98, 0.15)',
                      padding: '16px',
                      borderRadius: '16px'
                    }}>
                      <strong style={{ color: 'var(--color-proton)', display: 'block', marginBottom: '4px' }}>Kekurangan & Keterbatasan:</strong>
                      <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>{theories[activeTheoryIdx].limitations}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                    <button
                      disabled={activeTheoryIdx === 0}
                      onClick={() => {
                        setActiveTheoryIdx(activeTheoryIdx - 1);
                        setBohrOrbit(1);
                        setBohrState('ground');
                        setIsBohrSimulating(false);
                      }}
                      className="btn btn-secondary"
                      style={{
                        opacity: activeTheoryIdx === 0 ? 0.3 : 1,
                        cursor: activeTheoryIdx === 0 ? 'not-allowed' : 'pointer',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '13px'
                      }}
                    >
                      &larr; Teori Sebelumnya
                    </button>
                    {activeTheoryIdx === theories.length - 1 ? (
                      <button
                        onClick={() => {
                          setActivePertemuan(2);
                          setActiveTheoryIdx(0);
                          setSubView('materi');
                        }}
                        className="btn btn-primary"
                        style={{
                          padding: '8px 18px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '13px',
                          backgroundColor: 'var(--accent-teal)',
                          color: '#0a0b10',
                          fontWeight: 700
                        }}
                      >
                        Lanjut ke Pertemuan 2 &rarr;
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveTheoryIdx(activeTheoryIdx + 1);
                          setBohrOrbit(1);
                          setBohrState('ground');
                          setIsBohrSimulating(false);
                        }}
                        className="btn btn-secondary"
                        style={{
                          padding: '8px 16px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '13px'
                        }}
                      >
                        Teori Selanjutnya &rarr;
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </>
          )}

          {subView === 'latihan' && renderLKS1()}

        </div>
      )}

      {/* DETAIL LESSON CONTENT: PERTEMUAN 2 (Interactive Tabs) */}
      {activePertemuan === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>

          {/* Toggle View: Materi vs Lembar Kerja (LKS) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '6px',
            width: 'fit-content',
            margin: '0 auto 8px auto'
          }}>
            <button
              onClick={() => setSubView('materi')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: subView === 'materi' ? 'var(--accent-teal)' : 'transparent',
                color: subView === 'materi' ? '#0a0b10' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <BookOpen size={14} />
              Materi & Visualisasi
            </button>
            <button
              onClick={() => setSubView('latihan')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: subView === 'latihan' ? 'var(--accent-teal)' : 'transparent',
                color: subView === 'latihan' ? '#0a0b10' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <FileText size={14} />
              Lembar Kerja (LKS)
            </button>
          </div>

          {subView === 'materi' && (
            <>
              {/* Stepper / Tab Nav */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Pilih Sub-Materi Pertemuan 2:
                </span>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '12px',
                  width: '100%',
                  overflowX: 'auto',
                  gap: '12px',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}>
                  {theories2.map((theory, idx) => {
                    const isTabActive = activeTheoryIdx2 === idx;
                    return (
                      <button
                        key={theory.id}
                        onClick={() => {
                          setActiveTheoryIdx2(idx);
                        }}
                        style={{
                          flex: '1 0 auto',
                          padding: '10px 18px',
                          borderRadius: '14px',
                          border: isTabActive ? '1.5px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                          backgroundColor: isTabActive ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.01)',
                          color: isTabActive ? 'var(--accent-teal)' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          fontWeight: 700,
                          textAlign: 'center',
                          fontSize: '13px',
                          transition: 'all var(--transition-fast)',
                          boxShadow: isTabActive ? '0 0 10px rgba(0, 242, 254, 0.15)' : 'none'
                        }}
                      >
                        <span style={{ display: 'block', fontSize: '9px', opacity: 0.6, fontWeight: 500, marginBottom: '2px' }}>
                          Sub-Bab {idx + 1}
                        </span>
                        {theory.name.split(' & ')[0].split(', ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>

                {/* Visual Column */}
                <div className="glass-panel" style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '2px solid var(--glass-border)',
                  borderRadius: '24px'
                }}>
                  <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.15)', color: 'var(--accent-teal)' }}>
                    Visualisasi Sub-Materi
                  </span>

                  {/* TAB 1: Notasi Atom Visual */}
                  {activeTheoryIdx2 === 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
                      {/* Selector Element */}
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {Object.keys(elementsInfo).map(elKey => (
                          <button
                            key={elKey}
                            onClick={() => setNotasiElement(elKey)}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '8px',
                              border: notasiElement === elKey ? '1px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                              backgroundColor: notasiElement === elKey ? 'rgba(0,242,254,0.1)' : 'transparent',
                              color: notasiElement === elKey ? 'var(--accent-teal)' : 'var(--text-secondary)',
                              cursor: 'pointer',
                              fontWeight: 700,
                              fontSize: '12px'
                            }}
                          >
                            {elementsInfo[elKey].name}
                          </button>
                        ))}
                      </div>

                      {/* Large Notasi Display */}
                      <div style={{
                        position: 'relative',
                        width: '180px',
                        height: '140px',
                        backgroundColor: 'rgba(0,0,0,0.25)',
                        borderRadius: '20px',
                        border: '1.5px dashed var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {/* A (Nomor Massa) */}
                        <div
                          onMouseEnter={() => setHoveredNotasiPart('A')}
                          onMouseLeave={() => setHoveredNotasiPart(null)}
                          style={{
                            position: 'absolute',
                            top: '25px',
                            left: '25px',
                            fontSize: '30px',
                            fontWeight: 800,
                            color: hoveredNotasiPart === 'A' ? '#ffffff' : 'var(--accent-magenta)',
                            textShadow: hoveredNotasiPart === 'A' ? '0 0 10px var(--accent-magenta)' : 'none',
                            cursor: 'help',
                            transition: 'all 0.2s'
                          }}
                        >
                          {elementsInfo[notasiElement].A}
                        </div>

                        {/* Z (Nomor Atom) */}
                        <div
                          onMouseEnter={() => setHoveredNotasiPart('Z')}
                          onMouseLeave={() => setHoveredNotasiPart(null)}
                          style={{
                            position: 'absolute',
                            bottom: '25px',
                            left: '25px',
                            fontSize: '30px',
                            fontWeight: 800,
                            color: hoveredNotasiPart === 'Z' ? '#ffffff' : 'var(--accent-teal)',
                            textShadow: hoveredNotasiPart === 'Z' ? '0 0 10px var(--accent-teal)' : 'none',
                            cursor: 'help',
                            transition: 'all 0.2s'
                          }}
                        >
                          {elementsInfo[notasiElement].Z}
                        </div>

                        {/* X (Lambang Unsur) */}
                        <div
                          onMouseEnter={() => setHoveredNotasiPart('X')}
                          onMouseLeave={() => setHoveredNotasiPart(null)}
                          style={{
                            position: 'absolute',
                            right: '35px',
                            fontSize: '72px',
                            fontWeight: 800,
                            color: hoveredNotasiPart === 'X' ? 'var(--accent-yellow)' : '#ffffff',
                            textShadow: hoveredNotasiPart === 'X' ? '0 0 15px var(--accent-yellow)' : 'none',
                            cursor: 'help',
                            transition: 'all 0.2s'
                          }}
                        >
                          {elementsInfo[notasiElement].symbol}
                        </div>
                      </div>

                      {/* Interactive Hint based on hover */}
                      <div style={{
                        minHeight: '45px',
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        backgroundColor: 'rgba(255,255,255,0.01)',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        width: '100%',
                        border: '1px solid rgba(255,255,255,0.03)'
                      }}>
                        {hoveredNotasiPart === null && 'Arahkan kursor ke simbol angka/huruf di atas notasi untuk penjelasan!'}
                        {hoveredNotasiPart === 'A' && (
                          <span>
                            <strong style={{ color: 'var(--accent-magenta)' }}>A = Nomor Massa ({elementsInfo[notasiElement].A})</strong>. Menunjukkan total jumlah Proton + Neutron di inti atom.
                          </span>
                        )}
                        {hoveredNotasiPart === 'Z' && (
                          <span>
                            <strong style={{ color: 'var(--accent-teal)' }}>Z = Nomor Atom ({elementsInfo[notasiElement].Z})</strong>. Menunjukkan jumlah Proton (atau Elektron dalam kondisi netral).
                          </span>
                        )}
                        {hoveredNotasiPart === 'X' && (
                          <span>
                            <strong style={{ color: 'var(--accent-yellow)' }}>X = Lambang Unsur ({elementsInfo[notasiElement].symbol})</strong>. Lambang kimia atom {elementsInfo[notasiElement].name}.
                          </span>
                        )}
                      </div>

                      {/* Nucleus preview */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--glass-border)', paddingTop: '16px', width: '100%', justifyContent: 'center' }}>
                        {renderNucleusCluster(elementsInfo[notasiElement].protons, elementsInfo[notasiElement].neutrons, 0.8)}
                        <div style={{ textAlign: 'left', fontSize: '12px' }}>
                          <p style={{ margin: 0 }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-proton)', marginRight: '6px' }}></span>Proton (Z): <strong>{elementsInfo[notasiElement].protons}</strong></p>
                          <p style={{ margin: '4px 0 0 0' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-neutron)', marginRight: '6px' }}></span>Neutron (A-Z): <strong>{elementsInfo[notasiElement].neutrons}</strong></p>
                          <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)' }}>{elementsInfo[notasiElement].description}</p>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* TAB 2: Isotop Visual */}
                  {activeTheoryIdx2 === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {Object.keys(hydrogenIsotopes).map(isoKey => (
                          <button
                            key={isoKey}
                            onClick={() => setSelectedHydrogenIsotope(isoKey)}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '8px',
                              border: selectedHydrogenIsotope === isoKey ? '1px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                              backgroundColor: selectedHydrogenIsotope === isoKey ? 'rgba(0,242,254,0.1)' : 'transparent',
                              color: selectedHydrogenIsotope === isoKey ? 'var(--accent-teal)' : 'var(--text-secondary)',
                              cursor: 'pointer',
                              fontWeight: 700,
                              fontSize: '11px'
                            }}
                          >
                            {hydrogenIsotopes[isoKey].name}
                          </button>
                        ))}
                      </div>

                      {/* Nucleus visual representation */}
                      <div style={{ position: 'relative', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {renderNucleusCluster(hydrogenIsotopes[selectedHydrogenIsotope].protons, hydrogenIsotopes[selectedHydrogenIsotope].neutrons, 0.9)}

                        {/* Notation label overlay */}
                        <div style={{
                          position: 'absolute',
                          bottom: '-5px',
                          backgroundColor: 'rgba(10,11,16,0.85)',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          border: '1px solid var(--glass-border)',
                          fontSize: '12px',
                          fontWeight: 700
                        }}>
                          Notasi: <sup>{hydrogenIsotopes[selectedHydrogenIsotope].A}</sup><sub>{hydrogenIsotopes[selectedHydrogenIsotope].Z}</sub>H
                        </div>
                      </div>

                      {/* Details */}
                      <div style={{ textAlign: 'left', fontSize: '13px', width: '100%', borderTop: '1px solid var(--glass-border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <p style={{ margin: 0 }}>Nama Isotop: <strong>{hydrogenIsotopes[selectedHydrogenIsotope].name}</strong></p>
                        <p style={{ margin: 0 }}>Kestabilan: <span style={{ color: selectedHydrogenIsotope === 'tritium' ? 'var(--color-proton)' : '#10b981', fontWeight: 700 }}>{hydrogenIsotopes[selectedHydrogenIsotope].stability}</span></p>
                        <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '12px', lineHeight: '1.4' }}>{hydrogenIsotopes[selectedHydrogenIsotope].desc}</p>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: Isobar Visual */}
                  {activeTheoryIdx2 === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Contoh Isobar: Massa Nuklir Sama (A = 14)</span>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', width: '100%' }}>
                        {/* Karbon 14 */}
                        <div style={{ border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                          <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                            <sup>14</sup><sub>6</sub>C
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>Karbon-14</div>
                          <div style={{ display: 'flex', justifyContent: 'center', height: '90px', alignItems: 'center' }}>
                            {renderNucleusCluster(6, 8, 0.55)}
                          </div>
                          <div style={{ textAlign: 'left', fontSize: '11px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <p style={{ margin: 0 }}>Proton (Z): <strong>6</strong></p>
                            <p style={{ margin: 0 }}>Neutron: <strong>8</strong></p>
                          </div>
                        </div>

                        {/* Nitrogen 14 */}
                        <div style={{ border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                          <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                            <sup>14</sup><sub>7</sub>N
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>Nitrogen-14</div>
                          <div style={{ display: 'flex', justifyContent: 'center', height: '90px', alignItems: 'center' }}>
                            {renderNucleusCluster(7, 7, 0.55)}
                          </div>
                          <div style={{ textAlign: 'left', fontSize: '11px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <p style={{ margin: 0 }}>Proton (Z): <strong>7</strong></p>
                            <p style={{ margin: 0 }}>Neutron: <strong>7</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: Isoton Visual */}
                  {activeTheoryIdx2 === 3 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Contoh Isoton: Jumlah Neutron Sama (N = 8)</span>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', width: '100%' }}>
                        {/* Karbon 14 */}
                        <div style={{ border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                          <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                            <sup>14</sup><sub>6</sub>C
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>Karbon-14 (Neutron = 8)</div>
                          <div style={{ display: 'flex', justifyContent: 'center', height: '90px', alignItems: 'center' }}>
                            {renderNucleusCluster(6, 8, 0.55)}
                          </div>
                          <div style={{ textAlign: 'left', fontSize: '11px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <p style={{ margin: 0 }}>Massa (A): <strong>14</strong></p>
                            <p style={{ margin: 0 }}>Proton (Z): <strong>6</strong></p>
                          </div>
                        </div>

                        {/* Nitrogen 15 */}
                        <div style={{ border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                          <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                            <sup>15</sup><sub>7</sub>N
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>Nitrogen-15 (Neutron = 8)</div>
                          <div style={{ display: 'flex', justifyContent: 'center', height: '90px', alignItems: 'center' }}>
                            {renderNucleusCluster(7, 8, 0.55)}
                          </div>
                          <div style={{ textAlign: 'left', fontSize: '11px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <p style={{ margin: 0 }}>Massa (A): <strong>15</strong></p>
                            <p style={{ margin: 0 }}>Proton (Z): <strong>7</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Explanatory Column */}
                <div className="glass-panel-glow" style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  borderRadius: '24px',
                  border: '1.5px solid var(--glass-border-glow)'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span className="badge" style={{ backgroundColor: 'rgba(46, 125, 50, 0.2)', color: '#a5d6a7' }}>Pertemuan 2</span>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>{theories2[activeTheoryIdx2].subtitle}</span>
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff' }}>
                      {theories2[activeTheoryIdx2].name}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                    <div style={{ borderLeft: '3.5px solid var(--accent-teal)', paddingLeft: '14px' }}>
                      <strong style={{ color: '#ffffff', display: 'block', marginBottom: '4px' }}>Definisi Konsep:</strong>
                      {theories2[activeTheoryIdx2].concept}
                    </div>

                    <div>
                      <strong style={{ color: '#ffffff', display: 'block', marginBottom: '6px' }}>Karakteristik & Detail:</strong>
                      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}>
                        {theories2[activeTheoryIdx2].details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Example box */}
                    <div style={{
                      backgroundColor: 'rgba(0, 242, 254, 0.03)',
                      border: '1.5px solid rgba(0, 242, 254, 0.1)',
                      padding: '16px',
                      borderRadius: '16px'
                    }}>
                      <strong style={{ color: 'var(--accent-teal)', display: 'block', marginBottom: '4px' }}>Contoh Praktis:</strong>
                      <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
                        {theories2[activeTheoryIdx2].example}
                      </p>
                    </div>
                  </div>

                  {/* Stepper Controls */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                    <button
                      disabled={activeTheoryIdx2 === 0}
                      onClick={() => {
                        setActiveTheoryIdx2(activeTheoryIdx2 - 1);
                      }}
                      className="btn btn-secondary"
                      style={{
                        opacity: activeTheoryIdx2 === 0 ? 0.3 : 1,
                        cursor: activeTheoryIdx2 === 0 ? 'not-allowed' : 'pointer',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '13px'
                      }}
                    >
                      &larr; Bab Sebelumnya
                    </button>
                    {activeTheoryIdx2 === theories2.length - 1 ? (
                      <button
                        onClick={() => {
                          setActivePertemuan(3);
                          setActiveTheoryIdx2(0);
                          setSubView('materi');
                        }}
                        className="btn btn-primary"
                        style={{
                          padding: '8px 18px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '13px',
                          backgroundColor: 'var(--accent-teal)',
                          color: '#0a0b10',
                          fontWeight: 700
                        }}
                      >
                        Lanjut ke Pertemuan 3 &rarr;
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveTheoryIdx2(activeTheoryIdx2 + 1);
                        }}
                        className="btn btn-secondary"
                        style={{
                          padding: '8px 16px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '13px'
                        }}
                      >
                        Bab Selanjutnya &rarr;
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </>
          )}

          {subView === 'latihan' && renderLKS2()}

        </div>
      )}

      {/* DETAIL LESSON CONTENT: PERTEMUAN 3 */}
      {activePertemuan === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>

          {/* Toggle View: Materi vs Lembar Kerja (LKS) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '6px',
            width: 'fit-content',
            margin: '0 auto 8px auto'
          }}>
            <button
              onClick={() => setSubView('materi')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: subView === 'materi' ? 'var(--accent-teal)' : 'transparent',
                color: subView === 'materi' ? '#0a0b10' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <BookOpen size={14} />
              Materi & Visualisasi
            </button>
            <button
              onClick={() => setSubView('latihan')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: subView === 'latihan' ? 'var(--accent-teal)' : 'transparent',
                color: subView === 'latihan' ? '#0a0b10' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <FileText size={14} />
              Lembar Kerja (LKS)
            </button>
          </div>

          {subView === 'materi' && (
            <>
              {/* Stepper / Tab Nav for Meeting 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Pilih Sub-Materi Pertemuan 3:
                </span>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '12px',
                  width: '100%',
                  overflowX: 'auto',
                  gap: '12px',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}>
                  {theories3.map((theory, idx) => {
                    const isTabActive = activeTheoryIdx3 === idx;
                    return (
                      <button
                        key={theory.id}
                        onClick={() => {
                          setActiveTheoryIdx3(idx);
                        }}
                        style={{
                          flex: '1 0 auto',
                          padding: '10px 18px',
                          borderRadius: '14px',
                          border: isTabActive ? '1.5px solid var(--accent-purple)' : '1px solid var(--glass-border)',
                          backgroundColor: isTabActive ? 'rgba(138, 43, 226, 0.08)' : 'rgba(255, 255, 255, 0.01)',
                          color: isTabActive ? '#e1bee7' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          fontWeight: 700,
                          textAlign: 'center',
                          fontSize: '13px',
                          transition: 'all var(--transition-fast)',
                          boxShadow: isTabActive ? '0 0 10px rgba(138, 43, 226, 0.15)' : 'none'
                        }}
                      >
                        <span style={{ display: 'block', fontSize: '9px', opacity: 0.6, fontWeight: 500, marginBottom: '2px' }}>
                          Sub-Bab {idx + 1}
                        </span>
                        {theory.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>

                {/* Left Column: Visual/Playground */}
                <div className="glass-panel" style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '2px solid var(--glass-border)',
                  borderRadius: '24px'
                }}>
                  <span className="badge" style={{ backgroundColor: 'rgba(138, 43, 226, 0.15)', color: '#e1bee7' }}>
                    Laboratorium Kuantum &amp; Konfigurasi
                  </span>

                  {/* TAB 0: Bilangan Kuantum Visualizer */}
                  {activeTheoryIdx3 === 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>

                      {/* Selector Controls for n, l, m */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', width: '100%' }}>

                        {/* Utama n */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Kulit (n)</span>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            {[1, 2, 3, 4].map(nVal => (
                              <button
                                key={nVal}
                                onClick={() => handleQNChange(nVal)}
                                style={{
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '8px',
                                  border: qN === nVal ? '1.5px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                                  backgroundColor: qN === nVal ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                                  color: qN === nVal ? 'var(--accent-teal)' : 'var(--text-secondary)',
                                  fontWeight: 700,
                                  fontSize: '13px'
                                }}
                              >
                                {nVal}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Azimut l */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Subkulit (l)</span>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            {Array(qN).fill().map((_, idx) => {
                              const subshellLabels = ['s', 'p', 'd', 'f'];
                              return (
                                <button
                                  key={idx}
                                  onClick={() => handleQLChange(idx)}
                                  style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    border: qL === idx ? '1.5px solid var(--accent-magenta)' : '1px solid var(--glass-border)',
                                    backgroundColor: qL === idx ? 'rgba(243, 85, 136, 0.15)' : 'transparent',
                                    color: qL === idx ? 'var(--accent-magenta)' : 'var(--text-secondary)',
                                    fontWeight: 700,
                                    fontSize: '13px'
                                  }}
                                >
                                  {subshellLabels[idx] || idx}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Magnetik m_l */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Orientasi (ml)</span>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '180px' }}>
                            {Array(2 * qL + 1).fill().map((_, idx) => {
                              const mVal = idx - qL;
                              return (
                                <button
                                  key={mVal}
                                  onClick={() => setQM(mVal)}
                                  style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '6px',
                                    border: qM === mVal ? '1.5px solid var(--accent-yellow)' : '1px solid var(--glass-border)',
                                    backgroundColor: qM === mVal ? 'rgba(255, 223, 0, 0.15)' : 'transparent',
                                    color: qM === mVal ? 'var(--accent-yellow)' : 'var(--text-secondary)',
                                    fontWeight: 700,
                                    fontSize: '11px'
                                  }}
                                >
                                  {mVal > 0 ? `+${mVal}` : mVal}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* SVG Shape Visualizer */}
                      <div style={{
                        position: 'relative',
                        width: '240px',
                        height: '240px',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: '24px',
                        border: '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}>
                        {/* SVG Definitions */}
                        <svg width="220" height="220" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
                          <defs>
                            <radialGradient id="sOrbitalGlow3" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="var(--accent-teal)" stopOpacity="0.8" />
                              <stop offset="60%" stopColor="var(--accent-teal)" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="var(--accent-teal)" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="pOrbitalGlow3" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="var(--accent-magenta)" stopOpacity="0.8" />
                              <stop offset="70%" stopColor="var(--accent-magenta)" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="var(--accent-magenta)" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="dOrbitalGlow3" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.8" />
                              <stop offset="70%" stopColor="var(--accent-purple)" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="fOrbitalGlow3" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="var(--accent-yellow)" stopOpacity="0.8" />
                              <stop offset="70%" stopColor="var(--accent-yellow)" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="var(--accent-yellow)" stopOpacity="0" />
                            </radialGradient>
                            <filter id="shapeGlow" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="3" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>

                          {/* Coordinate Axes */}
                          <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />

                          {/* Render Shape based on L */}
                          {qL === 0 && (
                            <circle cx="100" cy="100" r={40 + qN * 8} fill="url(#sOrbitalGlow3)" filter="url(#shapeGlow)">
                              <animate attributeName="r" values={`${38 + qN * 8};${43 + qN * 8};${38 + qN * 8}`} dur="3.5s" repeatCount="indefinite" />
                            </circle>
                          )}

                          {qL === 1 && (
                            <g transform={`rotate(${qM === -1 ? 0 : qM === 1 ? 90 : 45} 100 100)`}>
                              {/* Two Lobes of p orbital */}
                              <circle cx="62" cy="100" r="26" fill="url(#pOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="138" cy="100" r="26" fill="url(#pOrbitalGlow3)" filter="url(#shapeGlow)" />
                            </g>
                          )}

                          {qL === 2 && (
                            <g transform={`rotate(${qM * 30 + 15} 100 100)`}>
                              {/* Four Lobes of d orbital (Cloverleaf) */}
                              <circle cx="68" cy="68" r="20" fill="url(#dOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="132" cy="68" r="20" fill="url(#dOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="68" cy="132" r="20" fill="url(#dOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="132" cy="132" r="20" fill="url(#dOrbitalGlow3)" filter="url(#shapeGlow)" />
                            </g>
                          )}

                          {qL === 3 && (
                            <g transform="rotate(15 100 100)">
                              {/* Complex 8-lobe f orbital representation */}
                              <circle cx="100" cy="60" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="100" cy="140" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="60" cy="100" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="140" cy="100" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="72" cy="72" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="128" cy="72" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="72" cy="132" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                              <circle cx="128" cy="132" r="15" fill="url(#fOrbitalGlow3)" filter="url(#shapeGlow)" />
                            </g>
                          )}

                          {/* Central Atom Nucleus */}
                          <circle cx="100" cy="100" r="6" fill="#ff5e62" filter="url(#shapeGlow)">
                            <animate attributeName="r" values="5;7;5" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        </svg>

                        {/* Overlay descriptive label */}
                        <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', fontSize: '11px', color: 'var(--text-muted)' }}>
                          Model Awan Kebolehjadian Orbital {qL === 0 ? 's (Bola)' : qL === 1 ? `p (Dumbbell px/py/pz)` : qL === 2 ? 'd (Cloverleaf)' : 'f (Kompleks)'}
                        </div>
                      </div>

                      {/* Orbital Boxes for Elektron Placement */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', width: '100%' }}>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 700 }}>
                          Kotak Orbital Subkulit (Klik untuk tambah &amp; pasangkan elektron):
                        </span>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                          {subshellElectrons.map((box, bIdx) => {
                            const mLabel = bIdx - qL;
                            const isBoxActive = qM === mLabel;
                            return (
                              <div
                                key={bIdx}
                                onClick={() => {
                                  setQM(mLabel);
                                  // Cycle box content: [] -> ['up'] -> ['up', 'down'] -> []
                                  const newSub = [...subshellElectrons];
                                  if (box.length === 0) {
                                    newSub[bIdx] = ['up'];
                                    setQS(0.5);
                                  } else if (box.length === 1) {
                                    newSub[bIdx] = ['up', 'down'];
                                    setQS(-0.5);
                                  } else {
                                    newSub[bIdx] = [];
                                    setQS(0.5);
                                  }
                                  setSubshellElectrons(newSub);
                                }}
                                style={{
                                  width: '46px',
                                  height: '46px',
                                  border: isBoxActive ? '2px solid var(--accent-teal)' : '1.5px solid var(--glass-border)',
                                  borderRadius: '8px',
                                  backgroundColor: isBoxActive ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  position: 'relative',
                                  transition: 'all 0.2s ease',
                                  boxShadow: isBoxActive ? '0 0 12px rgba(0, 242, 254, 0.2)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = 'var(--accent-teal)';
                                  e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.04)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = isBoxActive ? 'var(--accent-teal)' : 'var(--glass-border)';
                                  e.currentTarget.style.backgroundColor = isBoxActive ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)';
                                }}
                              >
                                {/* Electrons arrows */}
                                <div style={{ display: 'flex', gap: '4px', fontSize: '20px', fontWeight: 'bold', color: 'var(--accent-teal)' }}>
                                  {box.includes('up') && <span style={{ color: 'var(--accent-teal)' }}>&uarr;</span>}
                                  {box.includes('down') && <span style={{ color: 'var(--accent-magenta)' }}>&darr;</span>}
                                </div>

                                {/* ml value badge */}
                                <span style={{
                                  position: 'absolute',
                                  bottom: '-16px',
                                  fontSize: '9px',
                                  color: isBoxActive ? 'var(--accent-teal)' : 'var(--text-muted)',
                                  fontWeight: 700
                                }}>
                                  m = {mLabel > 0 ? `+${mLabel}` : mLabel}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Calculated Properties */}
                      {(() => {
                        const totalE = subshellElectrons.reduce((acc, curr) => acc + curr.length, 0);
                        const unpaired = subshellElectrons.filter(b => b.length === 1).length;
                        const isParamagnetic = unpaired > 0;
                        return (
                          <div className="glass-panel" style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            fontSize: '13px',
                            textAlign: 'left',
                            border: '1px solid var(--glass-border)',
                            backgroundColor: 'rgba(0,0,0,0.2)'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Total Elektron di Subkulit:</span>
                              <strong style={{ color: 'var(--accent-teal)' }}>{totalE} e&sup1;</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Elektron Tidak Berpasangan:</span>
                              <strong style={{ color: 'var(--accent-yellow)' }}>{unpaired}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px', marginTop: '4px' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Sifat Magnetik Atom:</span>
                              <strong style={{ color: isParamagnetic ? 'var(--color-neutron)' : totalE > 0 ? 'var(--accent-teal)' : 'var(--text-muted)' }}>
                                {totalE === 0 ? 'Kosong' : isParamagnetic ? 'Paramagnetik (Tertarik Magnet)' : 'Diamagnetik (Ditolak Magnet)'}
                              </strong>
                            </div>
                          </div>
                        );
                      })()}

                    </div>
                  )}

                  {/* TAB 1: Konfigurasi Bohr & Kuantum */}
                  {activeTheoryIdx3 === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>

                      {/* CSS Animations Styles injected inside JSX */}
                      <style>{`
                    @keyframes rotate-clockwise {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes rotate-counter {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(-360deg); }
                    }
                    .shell-rotate-1 { animation: rotate-clockwise 16s infinite linear; transform-origin: 150px 150px; }
                    .shell-rotate-2 { animation: rotate-counter 26s infinite linear; transform-origin: 150px 150px; }
                    .shell-rotate-3 { animation: rotate-clockwise 36s infinite linear; transform-origin: 150px 150px; }
                    .shell-rotate-4 { animation: rotate-counter 46s infinite linear; transform-origin: 150px 150px; }
                  `}</style>

                      {/* Element Picker Buttons Grid */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', width: '100%' }}>
                        {Object.keys(elementsConfig3).map(zKey => {
                          const el = elementsConfig3[zKey];
                          const isSelected = selectedZ3 === el.Z;
                          return (
                            <button
                              key={el.Z}
                              onClick={() => setSelectedZ3(el.Z)}
                              style={{
                                padding: '6px 10px',
                                borderRadius: '8px',
                                border: isSelected ? '1.5px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                                backgroundColor: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                                color: isSelected ? 'var(--accent-teal)' : 'var(--text-secondary)',
                                fontWeight: 700,
                                fontSize: '11px',
                                cursor: 'pointer'
                              }}
                            >
                              {el.symbol} ({el.Z})
                            </button>
                          );
                        })}
                      </div>

                      {/* Bohr Model SVG with concentric spinning orbits */}
                      {(() => {
                        const el = elementsConfig3[selectedZ3];
                        const radii = [32, 58, 84, 110];
                        return (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%' }}>

                            <div style={{
                              position: 'relative',
                              width: '280px',
                              height: '280px',
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              borderRadius: '24px',
                              border: '1px solid var(--glass-border)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <svg width="270" height="270" viewBox="0 0 300 300" style={{ overflow: 'visible' }}>
                                <defs>
                                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                  </filter>
                                </defs>

                                {/* Concentric Shells (Dashed Paths) */}
                                {el.bohr.map((_, sIdx) => (
                                  <circle
                                    key={`ring-${sIdx}`}
                                    cx="150"
                                    cy="150"
                                    r={radii[sIdx]}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="1.5"
                                    strokeDasharray={sIdx === 0 ? "none" : "3 3"}
                                  />
                                ))}

                                {/* Rotating Shell Groups containing Electrons */}
                                {el.bohr.map((count, sIdx) => {
                                  const r = radii[sIdx];
                                  const eCircles = [];
                                  for (let i = 0; i < count; i++) {
                                    const angle = (2 * Math.PI * i) / count;
                                    const cx = 150 + r * Math.cos(angle);
                                    const cy = 150 + r * Math.sin(angle);
                                    eCircles.push(
                                      <circle
                                        key={`e-${sIdx}-${i}`}
                                        cx={cx}
                                        cy={cy}
                                        r="5.5"
                                        fill="var(--accent-teal)"
                                        filter="url(#glowFilter)"
                                        stroke="rgba(10,11,16,0.7)"
                                        strokeWidth="1.5"
                                      />
                                    );
                                  }
                                  return (
                                    <g key={`shell-group-${sIdx}`} className={`shell-rotate-${sIdx + 1}`}>
                                      {eCircles}
                                    </g>
                                  );
                                })}

                                {/* Central Nucleus */}
                                <circle cx="150" cy="150" r="18" fill="#ff5e62" filter="url(#glowFilter)" />
                                <text x="150" y="154" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">
                                  {el.symbol}
                                </text>

                                {/* Nuclear Charge text overlay */}
                                <text x="150" y="130" fill="var(--text-muted)" fontSize="9" fontWeight="bold" textAnchor="middle">
                                  +{el.Z}
                                </text>
                              </svg>

                              {/* Label overlay */}
                              <div style={{ position: 'absolute', top: '10px', right: '12px', fontSize: '10px', color: 'var(--accent-teal)', fontWeight: 700 }}>
                                MODEL EMISI BOHR (BERPUTAR)
                              </div>
                            </div>

                            {/* Text and stats */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', fontSize: '13px', textAlign: 'left' }}>
                              <div className="glass-panel" style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <Sparkles size={16} color="var(--accent-teal)" />
                                  Detail Konfigurasi {el.name}
                                </h4>
                                <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}>
                                  Konfigurasi Bohr: <strong style={{ color: 'var(--accent-teal)' }}>{el.bohr.join(' - ')}</strong> (Kapasitas K, L, M, N)
                                </p>
                                <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}>
                                  Konfigurasi Kuantum: <strong style={{ color: 'var(--accent-magenta)' }}>{el.config}</strong>
                                </p>
                              </div>
                            </div>

                          </div>
                        );
                      })()}

                    </div>
                  )}

                  {/* TAB 2: Aturan Penulisan Config (Aufbau, Pauli, Hund) */}
                  {activeTheoryIdx3 === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>

                      {/* Secondary Tab Bar for Rules */}
                      <div style={{
                        display: 'flex',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        padding: '4px',
                        borderRadius: '10px',
                        width: '100%',
                        gap: '4px',
                        border: '1px solid var(--glass-border)'
                      }}>
                        {['Prinsip Aufbau', 'Larangan Pauli', 'Kaidah Hund'].map((ruleName, rIdx) => {
                          const isRuleActive = activeRuleIdx3 === rIdx;
                          return (
                            <button
                              key={rIdx}
                              onClick={() => setActiveRuleIdx3(rIdx)}
                              style={{
                                flex: 1,
                                padding: '8px 10px',
                                borderRadius: '8px',
                                fontSize: '11px',
                                fontWeight: 700,
                                color: isRuleActive ? 'var(--accent-teal)' : 'var(--text-secondary)',
                                backgroundColor: isRuleActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                                border: isRuleActive ? '1px solid var(--glass-border)' : '1px solid transparent',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              {ruleName}
                            </button>
                          );
                        })}
                      </div>

                      {/* Aufbau Interactive Section */}
                      {activeRuleIdx3 === 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', alignItems: 'center' }}>

                          {/* Aufbau Electron Count Slider */}
                          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                            <div style={{ display: 'flex', justifyValues: 'space-between', justifyContent: 'space-between', fontSize: '13px' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Jumlah Elektron (Nomor Atom Z):</span>
                              <strong style={{ color: 'var(--accent-teal)' }}>{aufbauZ}</strong>
                            </div>
                            <input
                              type="range"
                              min="1"
                              max="20"
                              value={aufbauZ}
                              onChange={(e) => setAufbauZ(parseInt(e.target.value))}
                              style={{
                                width: '100%',
                                accentColor: 'var(--accent-teal)',
                                cursor: 'pointer',
                                background: 'rgba(255,255,255,0.1)'
                              }}
                            />
                          </div>

                          {/* Simulation Button */}
                          <button
                            onClick={() => {
                              if (isAufbauSimulating) return;
                              setIsAufbauSimulating(true);
                              setAufbauZ(1);
                              let currentZ = 1;
                              const interval = setInterval(() => {
                                currentZ++;
                                setAufbauZ(currentZ);
                                if (currentZ >= 20) {
                                  clearInterval(interval);
                                  setIsAufbauSimulating(false);
                                }
                              }, 300);
                            }}
                            disabled={isAufbauSimulating}
                            className="btn btn-secondary"
                            style={{
                              padding: '6px 14px',
                              borderRadius: 'var(--radius-full)',
                              fontSize: '12px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              opacity: isAufbauSimulating ? 0.5 : 1,
                              cursor: isAufbauSimulating ? 'not-allowed' : 'pointer'
                            }}
                          >
                            <Play size={12} /> {isAufbauSimulating ? 'Mensimulasikan...' : 'Mulai Simulasi Pengisian'}
                          </button>

                          {/* Madelung Grid Representation */}
                          {(() => {
                            // Calculate orbital filling amounts for Z=aufbauZ
                            // Orbitals in order: 1s(2), 2s(2), 2p(6), 3s(2), 3p(6), 4s(2)
                            let remaining = aufbauZ;
                            const fillMap = {
                              '1s': 0, '2s': 0, '2p': 0, '3s': 0, '3p': 0, '4s': 0
                            };
                            const order = [
                              { id: '1s', max: 2 },
                              { id: '2s', max: 2 },
                              { id: '2p', max: 6 },
                              { id: '3s', max: 2 },
                              { id: '3p', max: 6 },
                              { id: '4s', max: 2 }
                            ];

                            for (const orb of order) {
                              if (remaining > 0) {
                                const take = Math.min(remaining, orb.max);
                                fillMap[orb.id] = take;
                                remaining -= take;
                              }
                            }

                            // Generate configuration string
                            const configStr = order
                              .filter(orb => fillMap[orb.id] > 0)
                              .map(orb => `${orb.id}<sup>${fillMap[orb.id]}</sup>`)
                              .join(' ');

                            return (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>

                                <div className="glass-panel" style={{
                                  padding: '16px',
                                  borderRadius: '16px',
                                  backgroundColor: 'rgba(0,0,0,0.2)',
                                  border: '1px solid var(--glass-border)',
                                  textAlign: 'left'
                                }}>
                                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Konfigurasi Aufbau Terbentuk:</span>
                                  <div
                                    style={{ fontSize: '18px', fontWeight: 800, color: 'var(--accent-teal)', letterSpacing: '0.5px' }}
                                    dangerouslySetInnerHTML={{ __html: configStr || 'Silakan geser/putar simulasi' }}
                                  />
                                </div>

                                {/* Visual Stairs of Energy Levels */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                                  {order.map((orb) => {
                                    const filledCount = fillMap[orb.id];
                                    const isFilling = filledCount > 0 && filledCount < orb.max;
                                    const isFull = filledCount === orb.max;

                                    return (
                                      <div
                                        key={orb.id}
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '10px',
                                          padding: '8px 12px',
                                          borderRadius: '10px',
                                          backgroundColor: isFull ? 'rgba(0, 242, 254, 0.04)' : isFilling ? 'rgba(243, 85, 136, 0.04)' : 'rgba(255,255,255,0.01)',
                                          border: isFull ? '1.5px solid var(--accent-teal)' : isFilling ? '1.5px solid var(--accent-magenta)' : '1px solid var(--glass-border)',
                                          transition: 'all 0.3s ease'
                                        }}
                                      >
                                        <strong style={{
                                          width: '32px',
                                          color: isFull ? 'var(--accent-teal)' : isFilling ? 'var(--accent-magenta)' : 'var(--text-muted)'
                                        }}>
                                          {orb.id}
                                        </strong>

                                        {/* Progress Bar of Subshell capacity */}
                                        <div style={{ flex: 1, height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                                          <div style={{
                                            width: `${(filledCount / orb.max) * 100}%`,
                                            height: '100%',
                                            backgroundColor: isFull ? 'var(--accent-teal)' : 'var(--accent-magenta)',
                                            transition: 'width 0.3s ease'
                                          }} />
                                        </div>

                                        {/* Electron fraction badge */}
                                        <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                                          {filledCount} / {orb.max} e&sup1;
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>

                              </div>
                            );
                          })()}

                        </div>
                      )}

                      {/* Larangan Pauli Interactive Section */}
                      {activeRuleIdx3 === 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', alignItems: 'center' }}>

                          {/* Spin selectors */}
                          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Spin Elektron 1</span>
                              <div style={{ display: 'flex', gap: '4px' }}>
                                {['up', 'down', 'none'].map(sp => (
                                  <button
                                    key={sp}
                                    onClick={() => setPauliSpin1(sp)}
                                    style={{
                                      flex: 1,
                                      padding: '8px 4px',
                                      borderRadius: '6px',
                                      fontSize: '11px',
                                      border: pauliSpin1 === sp ? '1px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                                      backgroundColor: pauliSpin1 === sp ? 'rgba(0, 242, 254, 0.1)' : 'transparent',
                                      color: pauliSpin1 === sp ? 'var(--accent-teal)' : 'var(--text-secondary)',
                                      fontWeight: 700
                                    }}
                                  >
                                    {sp === 'up' ? '↑ (Up)' : sp === 'down' ? '↓ (Down)' : 'Kosong'}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Spin Elektron 2</span>
                              <div style={{ display: 'flex', gap: '4px' }}>
                                {['up', 'down', 'none'].map(sp => (
                                  <button
                                    key={sp}
                                    onClick={() => setPauliSpin2(sp)}
                                    style={{
                                      flex: 1,
                                      padding: '8px 4px',
                                      borderRadius: '6px',
                                      fontSize: '11px',
                                      border: pauliSpin2 === sp ? '1px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                                      backgroundColor: pauliSpin2 === sp ? 'rgba(0, 242, 254, 0.1)' : 'transparent',
                                      color: pauliSpin2 === sp ? 'var(--accent-teal)' : 'var(--text-secondary)',
                                      fontWeight: 700
                                    }}
                                  >
                                    {sp === 'up' ? '↑ (Up)' : sp === 'down' ? '↓ (Down)' : 'Kosong'}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Interactive Pauli Orbital Box */}
                          {(() => {
                            const isViolated = (pauliSpin1 === 'up' && pauliSpin2 === 'up') || (pauliSpin1 === 'down' && pauliSpin2 === 'down');
                            const isEmpty = pauliSpin1 === 'none' && pauliSpin2 === 'none';
                            const boxGlowColor = isViolated ? 'rgba(255, 94, 98, 0.4)' : isEmpty ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 242, 254, 0.4)';
                            const boxBorderColor = isViolated ? '#ff5e62' : isEmpty ? 'var(--glass-border)' : 'var(--accent-teal)';

                            return (
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%' }}>

                                <div style={{
                                  width: '100px',
                                  height: '100px',
                                  border: `2.5px solid ${boxBorderColor}`,
                                  borderRadius: '16px',
                                  backgroundColor: 'rgba(0,0,0,0.3)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  boxShadow: `0 0 20px ${boxGlowColor}`,
                                  transition: 'all 0.3s ease'
                                }}>
                                  <div style={{ display: 'flex', gap: '12px', fontSize: '44px', fontWeight: 'bold', lineHeight: 1 }}>
                                    {pauliSpin1 === 'up' && <span style={{ color: 'var(--accent-teal)' }}>&uarr;</span>}
                                    {pauliSpin1 === 'down' && <span style={{ color: 'var(--accent-magenta)' }}>&darr;</span>}
                                    {pauliSpin2 === 'up' && <span style={{ color: 'var(--accent-teal)' }}>&uarr;</span>}
                                    {pauliSpin2 === 'down' && <span style={{ color: 'var(--accent-magenta)' }}>&darr;</span>}
                                  </div>
                                </div>

                                {/* Validation Result Box */}
                                <div className="glass-panel" style={{
                                  width: '100%',
                                  padding: '16px',
                                  borderRadius: '16px',
                                  border: `1.5px solid ${isViolated ? 'rgba(255, 94, 98, 0.3)' : 'rgba(0, 242, 254, 0.15)'}`,
                                  backgroundColor: isViolated ? 'rgba(255, 94, 98, 0.04)' : 'rgba(0, 242, 254, 0.01)',
                                  fontSize: '13px',
                                  textAlign: 'left'
                                }}>
                                  {isViolated ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                      <strong style={{ color: '#ff5e62', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <XCircle size={16} /> PELANGGARAN ASAS PAULI!
                                      </strong>
                                      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                        Kedua elektron dalam satu orbital tidak boleh memiliki arah spin yang sama. Hal ini akan membuat keempat bilangan kuantumnya identik (n, l, m, s yang sama).
                                      </p>
                                    </div>
                                  ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                      <strong style={{ color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <CheckCircle size={16} /> VALID &amp; MEMENUHI ASAS!
                                      </strong>
                                      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                        {isEmpty ? 'Orbital kosong. Siap menerima elektron.' : 'Elektron terisi dengan spin berlawanan. Ini sesuai dengan Larangan Pauli di mana dua elektron dalam satu orbital wajib berpasangan dengan spin berlawanan.'}
                                      </p>
                                    </div>
                                  )}
                                </div>

                              </div>
                            );
                          })()}

                        </div>
                      )}

                      {/* Kaidah Hund Interactive Section */}
                      {activeRuleIdx3 === 2 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', alignItems: 'center' }}>

                          <div style={{ textAlign: 'left', width: '100%' }}>
                            <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                              Klik pada masing-masing kotak orbital subkulit 3p untuk mengatur elektron:
                            </span>
                          </div>

                          {/* 3 Orbital Boxes */}
                          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                            {hundBoxes.map((state, idx) => {
                              return (
                                <div
                                  key={idx}
                                  onClick={() => {
                                    // Cycle: 0 (empty) -> 1 (up) -> 2 (double) -> 3 (down) -> 0
                                    const nextState = (state + 1) % 4;
                                    const newH = [...hundBoxes];
                                    newH[idx] = nextState;
                                    setHundBoxes(newH);
                                  }}
                                  style={{
                                    width: '56px',
                                    height: '56px',
                                    border: '2px solid var(--glass-border)',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s ease',
                                    position: 'relative'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                                    e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.04)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                                  }}
                                >
                                  <div style={{ display: 'flex', gap: '6px' }}>
                                    {(state === 1 || state === 2) && <span style={{ color: 'var(--accent-teal)' }}>&uarr;</span>}
                                    {state === 3 && <span style={{ color: 'var(--accent-magenta)' }}>&darr;</span>}
                                    {state === 2 && <span style={{ color: 'var(--accent-magenta)' }}>&darr;</span>}
                                  </div>
                                  <span style={{ position: 'absolute', bottom: '2px', fontSize: '9px', color: 'var(--text-muted)' }}>
                                    px/py/pz
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Reset Button */}
                          <button
                            onClick={() => setHundBoxes([0, 0, 0])}
                            className="btn btn-secondary"
                            style={{
                              padding: '4px 10px',
                              borderRadius: '8px',
                              fontSize: '11px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <RotateCcw size={10} /> Reset Kotak
                          </button>

                          {/* Hund Validation Result Card */}
                          {(() => {
                            // Calculate validation
                            const totalElectrons = hundBoxes.reduce((acc, curr) => acc + (curr === 2 ? 2 : curr > 0 ? 1 : 0), 0);

                            const ups = hundBoxes.filter(s => s === 1).length;
                            const downs = hundBoxes.filter(s => s === 3).length;
                            const doubles = hundBoxes.filter(s => s === 2).length;
                            const empties = hundBoxes.filter(s => s === 0).length;

                            let isViolated = false;
                            let reason = '';

                            if (totalElectrons > 0) {
                              // Rule 1: We cannot have doubles while there are empty boxes
                              if (doubles > 0 && empties > 0) {
                                isViolated = true;
                                reason = 'Elektron mulai dipasangkan di satu kotak orbital, padahal masih ada kotak orbital lain yang kosong di subkulit yang sama.';
                              }
                              // Rule 2: Single spins must be parallel
                              else {
                                const singles = hundBoxes.filter(s => s === 1 || s === 3);
                                const isParallel = singles.every(s => s === singles[0]);
                                if (singles.length > 1 && !isParallel) {
                                  isViolated = true;
                                  reason = 'Elektron tidak berpasangan harus memiliki arah spin yang sejajar (semua up ↑ atau semua down ↓).';
                                }
                              }
                            }

                            return (
                              <div className="glass-panel" style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '16px',
                                border: `1.5px solid ${isViolated ? 'rgba(255, 94, 98, 0.3)' : totalElectrons > 0 ? 'rgba(46, 125, 50, 0.3)' : 'var(--glass-border)'}`,
                                backgroundColor: isViolated ? 'rgba(255, 94, 98, 0.04)' : totalElectrons > 0 ? 'rgba(46, 125, 50, 0.04)' : 'rgba(255,255,255,0.01)',
                                fontSize: '13px',
                                textAlign: 'left'
                              }}>
                                {totalElectrons === 0 ? (
                                  <div style={{ color: 'var(--text-secondary)' }}>
                                    Kotak orbital kosong. Silakan klik kotak di atas untuk mengisi elektron.
                                  </div>
                                ) : isViolated ? (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <strong style={{ color: '#ff5e62', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                      <XCircle size={16} /> MELANGGAR KAIDAH HUND!
                                    </strong>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                      {reason} Sesuai Kaidah Hund, elektron harus menempati orbital secara tunggal dengan spin sejajar terlebih dahulu.
                                    </p>
                                  </div>
                                ) : (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <strong style={{ color: '#a5d6a7', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                      <CheckCircle size={16} /> VALID MENURUT KAIDAH HUND!
                                    </strong>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                      Elektron tersebar dengan tepat secara tunggal dan searah sebelum mulai berpasangan.
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })()}

                        </div>
                      )}

                    </div>
                  )}

                </div>

                {/* Right Column: Detailed Theory Text & Explanations */}
                <div className="glass-panel-glow" style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px'
                }}>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <span className="badge" style={{ backgroundColor: 'rgba(123, 31, 162, 0.2)', color: '#e1bee7', width: 'fit-content' }}>
                      Pertemuan 3 &bull; Sub-Bab {activeTheoryIdx3 + 1}
                    </span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {theories3[activeTheoryIdx3].subtitle}
                      </span>
                      <h3 style={{ fontSize: '26px', fontWeight: 800 }}>
                        {theories3[activeTheoryIdx3].name}
                      </h3>
                    </div>

                    <p style={{ fontSize: '14.5px', color: 'var(--text-primary)', lineHeight: '1.6', fontStyle: 'italic', margin: 0 }}>
                      &ldquo;{theories3[activeTheoryIdx3].concept}&rdquo;
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Poin Pembelajaran Utama:</h4>
                      <ul style={{
                        paddingLeft: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        fontSize: '13.5px',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)'
                      }}>
                        {theories3[activeTheoryIdx3].details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Navigation controls within Meeting 3 */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                    <button
                      disabled={activeTheoryIdx3 === 0}
                      onClick={() => {
                        setActiveTheoryIdx3(activeTheoryIdx3 - 1);
                      }}
                      className="btn btn-secondary"
                      style={{
                        opacity: activeTheoryIdx3 === 0 ? 0.3 : 1,
                        cursor: activeTheoryIdx3 === 0 ? 'not-allowed' : 'pointer',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '13px'
                      }}
                    >
                      &larr; Bab Sebelumnya
                    </button>
                    {activeTheoryIdx3 === theories3.length - 1 ? (
                      <button
                        onClick={() => {
                          setActivePage('quiz');
                        }}
                        className="btn btn-primary"
                        style={{
                          padding: '8px 18px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '13px',
                          backgroundColor: 'var(--accent-teal)',
                          color: '#0a0b10',
                          fontWeight: 700
                        }}
                      >
                        Mulai Kuis Evaluasi (45 Soal) &rarr;
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveTheoryIdx3(activeTheoryIdx3 + 1);
                        }}
                        className="btn btn-secondary"
                        style={{
                          padding: '8px 16px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '13px'
                        }}
                      >
                        Bab Selanjutnya &rarr;
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </>
          )}

          {subView === 'latihan' && renderLKS3()}

          {/* Quick Back to Meeting 2 Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
            <button
              onClick={() => {
                setActivePertemuan(2);
                setActiveTheoryIdx2(theories2.length - 1);
                setSubView('materi');
              }}
              className="btn btn-secondary"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              &larr; Kembali ke Pertemuan 2
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
