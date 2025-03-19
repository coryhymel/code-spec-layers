
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Code, Blocks, Building2 } from "lucide-react";

const LayersAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const layers = containerRef.current.querySelectorAll('.layer');
      layers.forEach((layer, index) => {
        const depth = (layers.length - index) * 5;
        const moveX = (x - 0.5) * depth;
        const moveY = (y - 0.5) * depth;
        
        (layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[500px] h-[400px] mx-auto perspective-1000"
    >
      {/* Layer 3 - Business */}
      <div className="layer absolute top-0 left-0 w-full h-full transition-transform duration-200 ease-out">
        <div className="glass-panel-dark p-6 absolute right-0 top-0 w-64 transform translate-y-8 z-30">
          <div className="flex items-center mb-3">
            <div className="bg-white/10 p-2 rounded-md mr-3">
              <Building2 size={24} className="text-white" />
            </div>
            <h4 className="font-display font-semibold">Layer 3</h4>
          </div>
          <div className="text-sm opacity-80">
            <p>Business Layer</p>
            <div className="mt-2 bg-white/5 rounded p-2 font-mono text-xs">
              <span className="text-blue-300">{"{"}</span>
              <div className="ml-2">
                <span className="text-green-300">"business_objective"</span>: <span className="text-yellow-300">"increase user engagement"</span>
              </div>
              <span className="text-blue-300">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Layer 2 - Architecture */}
      <div className="layer absolute top-0 left-0 w-full h-full transition-transform duration-200 ease-out">
        <div className="glass-panel-dark p-6 absolute left-5 top-1/2 transform -translate-y-1/2 w-72 z-20">
          <div className="flex items-center mb-3">
            <div className="bg-white/10 p-2 rounded-md mr-3">
              <Blocks size={24} className="text-white" />
            </div>
            <h4 className="font-display font-semibold">Layer 2</h4>
          </div>
          <div className="text-sm opacity-80">
            <p>Architecture Layer</p>
            <div className="mt-2 bg-white/5 rounded p-2 font-mono text-xs">
              <span className="text-blue-300">{"{"}</span>
              <div className="ml-2">
                <span className="text-green-300">"component"</span>: <span className="text-yellow-300">"UserService"</span>,<br />
                <span className="text-green-300">"pattern"</span>: <span className="text-yellow-300">"Repository"</span>
              </div>
              <span className="text-blue-300">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Layer 1 - Development */}
      <div className="layer absolute top-0 left-0 w-full h-full transition-transform duration-200 ease-out">
        <div className="glass-panel-dark p-6 absolute bottom-0 right-10 w-80 z-10">
          <div className="flex items-center mb-3">
            <div className="bg-white/10 p-2 rounded-md mr-3">
              <Code size={24} className="text-white" />
            </div>
            <h4 className="font-display font-semibold">Layer 1</h4>
          </div>
          <div className="text-sm opacity-80">
            <p>Developer Layer</p>
            <div className="mt-2 bg-white/5 rounded p-2 font-mono text-xs overflow-hidden">
              <div className="text-blue-300">function <span className="text-yellow-300">getUserActivity</span>() {`{`}</div>
              <div className="ml-4 text-gray-300">return db.query(</div>
              <div className="ml-6 text-green-300">'SELECT * FROM activities'</div>
              <div className="ml-4 text-gray-300">);</div>
              <div className="text-blue-300">{`}`}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Element */}
      <div className="absolute -z-10 inset-0 flex items-center justify-center opacity-10">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse-subtle"></div>
      </div>
      <div className="absolute -z-5 inset-0 flex items-center justify-center">
        <div className="w-[350px] h-[350px] border-2 border-dashed border-primary/30 rounded-full animate-rotate-slow"></div>
      </div>
    </div>
  );
};

export default LayersAnimation;
