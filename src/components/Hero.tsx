
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <ScrollReveal>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Introducing Code to Spec
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
              Understand your codebase across{" "}
              <span className="text-gradient">all layers</span> of abstraction
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              An AI-powered tool that translates code into meaningful insights for developers,
              architects, and business stakeholders, all through a powerful API suite.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#api" className="btn-primary group flex items-center">
                Explore API
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#documentation" className="btn-outline">
                View Documentation
              </a>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={400} animation="slide-up">
          <div className="glass-panel p-4 md:p-6 max-w-[900px] mx-auto overflow-hidden">
            <div className="bg-secondary/80 rounded-lg p-2 md:p-3 text-xs md:text-sm font-mono text-foreground/90 overflow-auto">
              <pre>
                <code>
                  {`// Access all three abstraction layers with a single API call
const result = await codeToSpec.analyze({
  repository: "https://github.com/your-company/your-project",
  layers: ["developer", "architect", "business"]
});

// Each layer provides different insights
console.log(result.developer);  // Code-level details
console.log(result.architect);  // Architectural patterns & components
console.log(result.business);   // Business objectives & requirements`}
                </code>
              </pre>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
