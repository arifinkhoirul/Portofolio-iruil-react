import { motion } from 'framer-motion'



function About() {
    return (
        <section className="bg-black text-white py-3 px-6">
            <div className="mx-auto grid grid-cols-12 gap-8 items-stretch">
                {/* Left Big Card (6 Columns) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="col-span-12 lg:col-span-6 rounded-3xl p-10 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-500 shadow-xl"
                >
                    <div className="flex flex-col gap-6">
                        <h2 className="text-9xl font-extrabold text-cyan-400">2+</h2>
                        <h3 className="text-3xl font-bold leading-tight">
                            Years Of <br /> Experience
                        </h3>
                        <p className="text-gray-300 max-w-md leading-relaxed">
                            Selama lebih dari 2 tahun saya mempelajari dan membangun aplikasi berbasis web, dengan fokus pada pengembangan sistem dan implementasi proyek nyata.
                        </p>
                    </div>
                </motion.div>


                {/* Right Stats (6 Columns) */}
                <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { value: "3+ Web Projects", label: "Personal Projects", animasi: "wiggle-2" },
                        { value: "5+ Technologies", label: "Laravel, Reat, Vue, Xampp, Php, Javascript", animasi: "wiggle-4" },
                        { value: "2+ Years Learning", label: "Software Development", animasi: "wiggle-6" },
                        { value: "100%", label: "Commitment", animasi: "wiggle-8" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`${item.animasi} hover:border rounded-2xl bg-neutral-900 p-8 flex flex-col justify-center shadow-lg  hover:bg-gradient-to-br hover:from-slate-900 hover:via-cyan-900 hover:to-blue-500 hover:border-cyan-400 transition-transform`}
                        >
                            <h4 className="text-4xl font-bold mb-2">{item.value}</h4>
                            <p className="text-gray-400 text-sm">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About