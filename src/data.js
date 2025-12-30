import HeroImage from "/assets/irul-hero.svg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/vue.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/laravel.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/PHP.png";
import Tools10 from "/assets/tools/xampp.png";   
// import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Vue JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Laravel",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "PHP",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "xampp",
    ket: "Database",
    dad: "1000",
  },
  // {
  //   id: 10,
  //   gambar: Tools10,
  //   nama: "Canva",
  //   ket: "Design App",
  //   dad: "1000",
  // },
  // {
  //   id: 11,
  //   gambar: Tools11,
  //   nama: "Figma",
  //   ket: "Design App",
  //   dad: "1100",
  // },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Karang Taruna",
    desk: "Website profil dan informasi kegiatan Karang Taruna untuk publikasi program, struktur organisasi, dan dokumentasi aktivitas pemuda.",
    tools: ["Laravel", "XAMPP"],
    dad: "200",
    link: "http://karangtaruna.online/"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Apllication HRIS",
    desk: "Aplikasi Human Resource Information System untuk mengelola data karyawan, absensi, cuti, dan administrasi kepegawaian.",
    tools: ["Laravel", "XAMPP"],
    dad: "300",
    link: "#"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "E-Commerce",
    desk: "Platform e-commerce sederhana untuk menampilkan produk, melakukan pemesanan, dan mengelola transaksi tanpa payment gateway.",
    tools: ["Laravel", "XAMPP", "Livewire", "Filament"],
    dad: "400",
    link: "https://github.com/arifinkhoirul/ecommerce-not-payment-gateway"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "App Management Keuangan Personal",
    desk: "Aplikasi pengelolaan keuangan pribadi untuk mencatat pemasukan, pengeluaran, tabungan, dan investasi secara terstruktur.",
    tools: ["Laravel", "XAMPP", "Vue"],
    dad: "400",
    link: "https://myfinance.my.id"
  },
];
