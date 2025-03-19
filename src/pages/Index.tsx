
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ApiSection from "@/components/ApiSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest("a")?.getAttribute("href");
      
      if (href?.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for fixed header
            behavior: "smooth"
          });
        }
      }
    };
    
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);
  
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main>
        <Hero />
        <FeatureSection />
        <ApiSection />
        
        {/* Documentation Section Placeholder */}
        <section id="documentation" className="py-20 md:py-32 bg-secondary/50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Documentation
            </div>
            <h2 className="section-heading">
              Comprehensive documentation and tutorials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our detailed documentation, guides, and examples to get the most out of Code to Spec.
            </p>
            <a href="#" className="btn-primary">
              Browse Documentation
            </a>
          </div>
        </section>
        
        {/* Pricing Section Placeholder */}
        <section id="pricing" className="py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Pricing
            </div>
            <h2 className="section-heading">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs, from individual developers to enterprise teams.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className="glass-panel p-8 flex flex-col h-full">
                <h3 className="text-xl font-medium mb-2">Developer</h3>
                <div className="text-3xl font-bold mb-1">$49</div>
                <p className="text-muted-foreground mb-6">per month</p>
                <ul className="space-y-3 mb-8 text-left flex-grow">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      5 repositories
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      100 API requests / month
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      All three abstraction layers
                    </p>
                  </li>
                </ul>
                <a href="#" className="btn-outline w-full">
                  Get Started
                </a>
              </div>
              
              {/* Pro Plan */}
              <div className="glass-panel p-8 flex flex-col h-full border-primary relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                  Popular
                </div>
                <h3 className="text-xl font-medium mb-2">Team</h3>
                <div className="text-3xl font-bold mb-1">$199</div>
                <p className="text-muted-foreground mb-6">per month</p>
                <ul className="space-y-3 mb-8 text-left flex-grow">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      25 repositories
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      Unlimited API requests
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      Advanced query options
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      Priority support
                    </p>
                  </li>
                </ul>
                <a href="#" className="btn-primary w-full">
                  Get Started
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="glass-panel p-8 flex flex-col h-full">
                <h3 className="text-xl font-medium mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-1">Custom</div>
                <p className="text-muted-foreground mb-6">contact for pricing</p>
                <ul className="space-y-3 mb-8 text-left flex-grow">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      Unlimited repositories
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      On-premise deployment
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      Custom integration support
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-muted-foreground">
                      Dedicated account manager
                    </p>
                  </li>
                </ul>
                <a href="#" className="btn-outline w-full">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
