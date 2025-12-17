function Timeline() {
    const items = [
        {
            time: 'Mei 2024 - Agu 2024 (Experience)',
            title: 'Intern Web Management',
            place: 'Fakultas Psikologi Ubhara Jaya',
            desc: 'Membuat atau mengupdate web fakultas psikologi.',
            dad: '400'
        },
        {
            time: 'Jan 2025 - Mar 2025 (Experience)',
            title: 'Intern Web Management',
            place: 'Fakultas Psikologi Ubhara Jaya',
            desc: 'Membuat atau mengupdate web fakultas psikologi.',
            dad: '300'
        },
        {
            time: 'Sep 2025 (Education)',
            title: 'S1 Teknik Informatika',
            place: 'Universitas Bhayangkara Jakarta Raya',
            desc: 'Lulus dengan IPK 3.7. Fokus pada Web/Software Development.',
            dad: '200'
        }
    ]

    return (
        <section className=" text-white py-16 px-4">
            <h2 className="text-center text-3xl font-bold mb-12">Education & Experience</h2>


            <div className="relative max-w-4xl mx-auto">
                {/* vertical line */}
                <div className="absolute left-4 sm:left-1/2 top-0 h-full w-px bg-cyan-400" />


                <div className="space-y-12">
                    {items.map((item, i) => (
                        <div key={i} className={` relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''
                            }`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={item.dad} data-aos-once="true">
                            {/* dot */}
                            <div className="absolute left-2 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />


                            <div className="sm:w-1/2" />


                            <div className="bg-[#10192f] rounded-xl p-6 shadow-lg sm:w-1/2">
                                <span className="text-cyan-400 text-sm">{item.time}</span>
                                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.place}</p>
                                <p className="text-sm mt-3 text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
