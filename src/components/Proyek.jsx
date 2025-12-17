import { listProyek } from "../data"

function Proyek() {
    return (
        <div className="mx-auto" >
            <p className="text-cyan-400 text-center mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {listProyek.map((project) => (
                    <a href={project.link} target="blank">
                        <div key={project.id} className="bg-[#10192f] rounded-2xl overflow-hidden shadow-lg hover:border hover:border-cyan-400 transition" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad} data-aos-once="true">
                            <img src={project.gambar} alt={project.nama} className="h-75 w-full object-cover" loading="lazy" />


                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.nama}</h3>
                                <p className="text-sm text-gray-400 mb-4">{project.desk}</p>


                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, index) => (
                                        <span key={index} className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Proyek



