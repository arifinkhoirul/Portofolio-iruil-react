import {motion} from "framer-motion"
import {ArrowRight, Instagram, Linkedin, Twitter, Facebook} from "lucide-react"

function Hero() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl w-full items-center">
{/* Left Content */}
<motion.div
initial={{ opacity: 0, x: -40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
className="space-y-6"
>
<p className="text-sm tracking-widest text-gray-400">HELLO I'M</p>
<h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
Brooklyn <br /> Simmons
</h1>
<button className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-full font-medium">
View Portfolio <ArrowRight size={18} />
</button>
</motion.div>


{/* Center Image */}
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
className="flex justify-center"
>
<img
src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
alt="Profile"
className="w-[320px] lg:w-[380px] rounded-2xl shadow-2xl"
/>
</motion.div>


{/* Right Content */}
<motion.div
initial={{ opacity: 0, x: 40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
className="space-y-6"
>
<h3 className="text-lg font-semibold">About Me</h3>
<p className="text-gray-400 leading-relaxed">
A personal <span className="text-red-500">portfolio</span> is a collection of
your work, achievements, and skills that <span className="text-red-500">web design</span>
highlights in your career.
</p>


<div>
<p className="mb-3 text-sm text-gray-400">Find me on</p>
<div className="flex gap-3">
{[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
<button
key={i}
className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-red-500 transition flex items-center justify-center"
>
<Icon size={18} />
</button>
))}
</div>
</div>
</motion.div>
</div>


{/* Background Text */}
<div className="absolute bottom-10 text-[120px] font-extrabold tracking-widest text-transparent stroke-white opacity-10 select-none hidden lg:block">
WEB DESIGN
</div>
</div>
    );
}

export default Hero
