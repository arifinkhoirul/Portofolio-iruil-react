import InfoCard from "./ui/InfoCard"
import Input from "./ui/Input"

function Contacts() {
    return (
        <>
            <section className="min-h-screen text-white px-4 py-16" id="contact">
                <div className=" mx-auto">

                    {/* Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Hubungi Saya</h2>
                        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded"></div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Left Info */}
                        <div data-aos="fade-right" data-aos-once="true" data-aos-duration="600">
                            <h3 className="text-xl font-semibold mb-4">
                                Mari Bekerja Sama
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Tertarik untuk berkolaborasi atau memiliki pertanyaan?
                                Jangan ragu untuk menghubungi saya. Saya terbuka untuk
                                diskusi proyek dan peluang baru.
                            </p>

                            <div className="space-y-4">
                                <InfoCard icon="📧" title="Email" value="irul30582@email.com" />
                                <InfoCard icon="📞" title="Phone" value="+62 857 7124 7535" />
                                <InfoCard icon="📍" title="Location" value="Bekasi, Indonesia" />
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="bg-slate-900/70 backdrop-blur rounded-xl p-6 md:p-8 shadow-lg" data-aos="fade-left" data-aos-once="true" data-aos-duration="600">
                            <form className="space-y-4" action="https://formsubmit.co/irul30582@gmail.com" method="POST">
                                <div>
                                    <label className="text-sm text-gray-300">Nama</label>
                                    <input type="text" name="nama" placeholder="Masukkan Nama"
                                        className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-300">Email</label>
                                    <input type="email" name="email" placeholder="Masukkan Email"
                                        className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-300">Pesan</label>
                                    <textarea rows="4" name="pesan" placeholder="Tulis pesan Anda di sini..."
                                        className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>

                                <button type="submit"
                                    className="w-full animate-soft-bounce flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
                                    ✈️ Kirim Pesan
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts
