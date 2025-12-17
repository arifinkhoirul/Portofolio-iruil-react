import About from "./components/About"
import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Proyek from "./components/Proyek"
import Timeline from "./components/Timeline"
import dataImg from "./data"
import { listTools } from "./data"
import { Typewriter } from 'react-simple-typewriter'
import { Analytics } from '@vercel/analytics'


function App() {


    return (
        <>
            <Analytics />
            <div className='hero grid md:grid-cols-2 lg:pt-20 sm:pt-10 items-center xl:gap-0 gap-6 grid-cols-1' id="beranda">
                <div className="animate__animated animate__fadeInUp animate__delay-1s">
                    {/* <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                <img src={dataImg.HeroImage} alt="" className="w-10 rounded-md" />
                <q>Kode yang indah lahir dari ketekunan</q>
            </div> */}
                    <h1 className="text-xl/tight text-cyan-400 font-bold mb-6">I AM</h1>
                    <h1 className="text-5xl/tight font-bold mb-6">Muhammad Khoirul Arifin <br /> <span className="text-5xl text-cyan-400"> <Typewriter
                        words={[
                            "Web Developer",
                            "Frontend Developer",
                            "Backend Developer",
                            "Laravel Developer",
                        ]}
                        loop={0} // 0 = infinite
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    /></span></h1>
                    <p className="text-base/loose mb-6 opacity-50">Saya adalah seorang full stack web developer dengan pengalaman belajar dan membangun aplikasi web selama lebih dari 2 tahun.
                        Fokus pada pengembangan sistem yang rapi, scalable, dan mudah digunakan untuk kebutuhan nyata.</p>
                    <div className="flex items-center sm:gap-4 gap-2">
                        <a href="" className="animate-soft-bounce bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90 transition p-4 rounded-2xl hover:shadow-lg hover:shadow-cyan-500">
                            Downlaod CV <i className="ri-download-line ri-lg"></i>
                        </a>
                        <a href="#proyek" className="border border-white/20 hover:bg-white/5 transition p-4 rounded-2xl hover:border-cyan-400">
                            Lihat Proyek
                        </a>
                    </div>
                    <div className="flex gap-4 mt-10">
                        <a href="https://github.com/arifinkhoirul" target="blank" className="border border-white/20 p-3 rounded-lg bg-[#10192f] hover:border-cyan-400 transition"><i className="ri-github-fill"></i></a>
                        <a href="https://www.linkedin.com/in/khoirularifin" target="blank" className="border border-white/20 p-3 rounded-lg bg-[#10192f] hover:border-cyan-400 transition"><i className="ri-linkedin-box-fill"></i></a>
                        <a className="border border-white/20 p-3 rounded-lg bg-[#10192f] hover:border-cyan-400 transition"><i className="ri-mail-fill"></i></a>
                    </div>
                </div>
                <img src={dataImg.HeroImage} alt="hero image"
                    className="w-[500px] md:ml-auto animate-soft-bounce" loading="lazy" />
            </div>

            {/* <Hero/> */}



            {/* tentang */}
            <div className="tentang mt-10 py-10" id="tentang">
                <About />

                <div className="tools mt-10">
                    <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-once="true"
                        data-aos-duration="1000">Tools Yang Dipakai</h1>
                    <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up"
                        data-aos-once="true" data-aos-duration="1000" data-aos-delay="300">Beriut Ini Beberapa Tools Yang Biasa
                        Saya Pakai Untuk
                        Pembuatan Website Ataupun Design</p>
                    <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {listTools.map(tool => (
                            <div className="flex hover:bg-gradient-to-br hover:from-slate-900 hover:via-cyan-900 hover:to-blue-500 items-center pointer gap-2 p-3 border border-zinc-600/20 rounded-xl transition group"
                                data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay={tool.dad}
                                key={tool.id}>
                                <img src={tool.gambar} alt="asdasdasd" className="w-14 grayscale group-hover:grayscale-0 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                                <div>
                                    <h4 className="font-bold">{tool.nama}</h4>
                                    <p className="opacity-50">{tool.ket}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* tentang */}


            {/* proyek */}
            <div className="proyek mt-32 py-10" id="proyek">
                <Proyek />
                {/* <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-once="true"
            data-aos-duration="100" data-aos-delay="300">proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-once="true"
            data-aos-duration="100" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-once="true"
                data-aos-duration="1000" data-aos-delay={proyek.dad}>
                <img src={proyek.gambar} alt="" loading="lazy" />
                <div>
                    <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                    <p className="text-base/loose mb-4 ">{proyek.desk}</p>
                    <div className="flex flex-wrap gap-2">
                        {proyek.tools.map((tool, index) => (
                        <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                            key={index}>
                            {tool}</p>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <a className="bg-violet-700 p-3 rounded-lg block border border-zinc-700 hover:bg-violet-600"
                            href="">Lihat website</a>
                    </div>
                </div>
            </div>
            ))}
        </div> */}
            </div>


            {/* timeline */}
            <Timeline />

            {/* kontak */}
            {/* <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-once="true"
            data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-once="true"
            data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/irul30582@gmail.com"
            method="POST"className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"
            data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Nama Lengkap</label>
                    <input type="name" name="nama" placeholder="Masukkan Nama..."
                        className="border border-zinc-500 p-2 rounded-md" required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Nama Email</label>
                    <input type="email" name="email" placeholder="Masukkan Email..."
                        className="border border-zinc-500 p-2 rounded-md" required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="pesan">Pesan</label>
                    <textarea name="pesan" rows="7" cols="45" id="pesan" placeholder="Pesan..."
                        className="border border-zinc-500 p-2 rounded-md" required></textarea>
                </div>
                <div className="text-center">
                    <button
                        className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim
                        Pesan</button>
                </div>
            </div>
        </form>
    </div> */}

            <Contacts />
        </>
    )
}

export default App
