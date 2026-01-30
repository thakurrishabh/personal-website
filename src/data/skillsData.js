export const skillsData = [
    {
        id: "cloud-sre",
        title: "Cloud & SRE",
        description: "Cloud Infrastructure & Site Reliability",
        color: "blue",
        icon: "cloud",
        skills: [
            { name: "GCP", slug: "googlecloud" },
            { name: "GKE", slug: "googlecloud" },
            { name: "Cloud Run", slug: "googlecloud" },
            { name: "Cloud Functions", slug: "googlecloud" },
            { name: "PubSub", slug: "googlecloud" },
            { name: "VPC", slug: "googlecloud" },
            { name: "DNS", slug: "googlecloud" },
            { name: "Secret Manager", slug: "googlecloud" },
            { name: "Linux", slug: "linux" },
            { name: "Istio", slug: "istio" },
            { name: "Firebase", slug: "firebase" },
            { name: "Vercel", slug: "vercel" },
            { name: "IBM MQ", slug: "ibm" }
        ]
    },
    {
        id: "devops-automation",
        title: "DevOps & Automation",
        description: "CI/CD, IaC & Containerization",
        color: "emerald",
        icon: "terminal",
        skills: [
            { name: "Kubernetes", slug: "kubernetes" },
            { name: "Docker", slug: "docker" },
            { name: "Ansible", slug: "ansible" },
            { name: "Terraform", slug: "terraform" },
            { name: "GitLab CI", slug: "gitlab" },
            { name: "Helm", slug: "helm" },
            { name: "Kubevirt", slug: "kubernetes" }, // Using k8s icon as fallback/related
            { name: "Jsonnet", slug: "json" },
            { name: "Prometheus", slug: "prometheus" },
            { name: "Grafana", slug: "grafana" },
            { name: "Playwright", slug: "playwright" },
            { name: "Scripting", slug: "gnubash" },
            { name: "Containerization", slug: "docker" }
        ]
    },
    {
        id: "app-development",
        title: "App Development",
        description: "Fullstack Engineering (Web & Mobile)",
        color: "amber",
        icon: "code",
        skills: [
            { name: "Python", slug: "python" },
            { name: "React", slug: "react" },
            { name: "Flutter", slug: "flutter" },
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML", slug: "html5" },
            { name: "Flask", slug: "flask" },
            { name: "Bootstrap", slug: "bootstrap" },
            { name: "Supabase", slug: "supabase" },
            { name: "MySQL", slug: "mysql" },
            { name: "Stripe", slug: "stripe" },
            { name: "OAuth", slug: "auth0" }
        ]
    },
    {
        id: "ai-modern-tech",
        title: "AI & Modern Tech",
        description: "Generative AI, Agents & Innovation",
        color: "indigo",
        icon: "brain",
        skills: [
            { name: "OpenAI API", slug: "openai" },
            { name: "Gemini API", slug: "googlegemini" },
            { name: "Claude Code", slug: "anthropic" },
            { name: "GitHub Copilot", slug: "githubcopilot" },
            { name: "FFmpeg", slug: "ffmpeg" },
            { name: "Lovable.dev", slug: "react" },
            { name: "Daytona", slug: "docker" }, // Proxy: Dev Envs
            { name: "TTS & Voice", slug: "openai" }, // Proxy: AI Voice
            { name: "Image Gen", slug: "stabilityai" } // Proxy: Gen AI
        ]
    }
];
