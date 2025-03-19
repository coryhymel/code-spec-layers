
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "curl", label: "cURL" },
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "response", label: "Response" },
];

const codeExamples = {
  curl: `curl -X POST https://api.codetospec.ai/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "repository": "https://github.com/your-company/repo",
    "layers": ["developer", "architect", "business"],
    "options": {
      "includeMetrics": true
    }
  }'`,
  
  javascript: `import { CodeToSpec } from 'codetospec-sdk';

const codeToSpec = new CodeToSpec('YOUR_API_KEY');

async function analyzeCode() {
  try {
    const result = await codeToSpec.analyze({
      repository: 'https://github.com/your-company/repo',
      layers: ['developer', 'architect', 'business'],
      options: {
        includeMetrics: true
      }
    });
    
    console.log(result);
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}

analyzeCode();`,

  python: `from codetospec import CodeToSpec

# Initialize the client
code_to_spec = CodeToSpec(api_key='YOUR_API_KEY')

# Analyze the repository
result = code_to_spec.analyze(
    repository='https://github.com/your-company/repo',
    layers=['developer', 'architect', 'business'],
    options={
        'include_metrics': True
    }
)

print(result)`,

  response: `{
  "analysis": {
    "developer": {
      "files": 120,
      "functions": 304,
      "classes": 42,
      "metrics": {
        "complexity": 0.73,
        "maintainability": 0.85
      },
      "insights": [
        "Authentication logic in auth/service.js needs refactoring",
        "API endpoints well documented with OpenAPI annotations",
        "Test coverage at 78%, below 80% target"
      ]
    },
    "architect": {
      "patterns": ["Repository", "Factory", "Observer"],
      "components": ["Auth", "API", "Database", "Worker"],
      "dependencies": {
        "external": 12,
        "internal": 8
      },
      "insights": [
        "Clean architecture pattern consistently applied",
        "Microservice boundaries well defined",
        "Potential coupling issues between Auth and User services"
      ]
    },
    "business": {
      "features": ["User Authentication", "Report Generation", "Data Import"],
      "requirements": {
        "covered": 42,
        "total": 50
      },
      "insights": [
        "User authentication implements all security requirements",
        "Report generation meets performance requirements",
        "Data import feature lacks error handling for requirement B-104"
      ]
    }
  },
  "metadata": {
    "analysisId": "a1b2c3d4",
    "timestamp": "2023-10-15T14:30:22Z",
    "executionTime": 45.2
  }
}`
};

const ApiDocsPreview = () => {
  const [activeTab, setActiveTab] = useState("curl");
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="glass-panel border-primary/10 overflow-hidden">
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors", 
              activeTab === tab.id 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        
        <pre className="p-6 overflow-auto text-sm">
          <code className="font-mono">
            {codeExamples[activeTab as keyof typeof codeExamples]}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ApiDocsPreview;
