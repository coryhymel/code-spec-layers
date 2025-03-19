
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import ApiDocsPreview from "./ApiDocsPreview";

const ApiSection = () => {
  return (
    <section id="api" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="slide-right">
            <div className="max-w-lg">
              <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Developer API
              </div>
              <h2 className="section-heading">
                Simple, powerful API for codebase analysis
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our RESTful API provides easy access to all three abstraction layers, 
                giving you complete flexibility to integrate Code to Spec into your 
                workflows and tools.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Complete SDK packages</span> for 
                    JavaScript, Python, Go, and Java
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Webhooks support</span> for 
                    asynchronous processing and notifications
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Rich query options</span> to 
                    filter and customize analysis results
                  </p>
                </li>
              </ul>
              
              <a href="#documentation" className="btn-primary group inline-flex items-center">
                Explore API Documentation
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-left" delay={100}>
            <ApiDocsPreview />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
