
import { Brain, Layers, Zap, Users, Lock, Webhook } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import LayersAnimation from "./LayersAnimation";

const features = [
  {
    icon: <Brain />,
    title: "AI-Powered Analysis",
    description: "Advanced AI model that understands context and semantics of your entire codebase, not just syntax."
  },
  {
    icon: <Layers />,
    title: "3-Layer Abstraction",
    description: "View your code through developer, architect, and business lenses with specialized insights for each."
  },
  {
    icon: <Zap />,
    title: "Lightning Fast",
    description: "Process even the largest codebases in minutes with our distributed computing infrastructure."
  },
  {
    icon: <Users />,
    title: "Cross-Team Collaboration",
    description: "Bridge the gap between technical and non-technical stakeholders with tailored outputs."
  },
  {
    icon: <Lock />,
    title: "Secure Analysis",
    description: "Your code never leaves your environment. Our models can run on-premise for maximum security."
  },
  {
    icon: <Webhook />,
    title: "Flexible Integration",
    description: "Integrate with your existing tools via our comprehensive API and webhooks system."
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <h2 className="section-heading">
              Three Layers, One Powerful API
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground">
              Our AI model breaks down your codebase into meaningful abstractions,
              making it accessible to everyone in your organization.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
          <ScrollReveal animation="slide-right">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Multi-Layer Analysis
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Understand code at every level
              </h3>
              <p className="text-muted-foreground mb-6">
                Code to Spec's unique three-layer approach provides insights that are 
                tailored to different roles in your organization:
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary font-medium text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Developer Layer</h4>
                    <p className="text-sm text-muted-foreground">
                      Code-level insights, function purposes, dependencies, and optimization opportunities.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary font-medium text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Architect Layer</h4>
                    <p className="text-sm text-muted-foreground">
                      Design patterns, component relationships, system architecture, and technical debt analysis.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary font-medium text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Business Layer</h4>
                    <p className="text-sm text-muted-foreground">
                      Feature mapping, requirement traceability, impact analysis, and business value assessment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="order-1 md:order-2" animation="slide-left">
            <LayersAnimation />
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100}
              className="layer-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
