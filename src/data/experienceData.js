export const experienceData = [
    {
        id: "node-01",
        role: "Senior Site Reliability Engineer",
        company: "Loblaw Companies Limited",
        location: "Toronto, Canada",
        period: "03/2025 – Present",
        status: "Running",
        type: "Node",
        skills: ["Ansible", "GitLab CI", "Kubernetes", "Kubevirt"],
        pods: [
            {
                id: "pod-01-01",
                title: "SDM On-Prem VMWARE to Vanilla Kubernetes Migration",
                bullets: [
                    "Participated in pilots to migrate on prem vmware instances of 15 stores to vanilla kubernetes as part of an initiative to cover 700 stores across ontario",
                    "Rebuilt entire store from ground up including Dell hardware, kubernetes node config, OS install.",
                    "Developed ansible playbooks to migrate vmware workloads to vanilla Kubernetes containers & VMs using kubevirt for each store.",
                    "Configured FLUXCD gitops to enable seamless deployment of microservices using Kustomization from a central management gke cluster"
                ]
            }
        ]
    },
    {
        id: "node-02",
        role: "AI & Cloud Products (Freelance)",
        company: "Independent",
        location: "Toronto, Canada",
        period: "09/2024 – Present",
        status: "Scaling",
        type: "Node",
        skills: [
            "Claude Code", "Daytona", "FFmpeg", "Flutter",
            "GCP", "Gemini API", "GitHub Copilot", "Lovable.dev",
            "Microsoft Playwright", "OpenAI API", "Python", "React",
            "Stripe", "Supabase", "Vercel"
        ],
        pods: [
            {
                id: "pod-02-01",
                title: "RenderMuseAI – Text-to-Explainer Animation Platform",
                bullets: [
                    "RenderMuseAI is an AI-powered platform I built to convert text prompts into educational Manim animations, inspired by 3Blue1Brown.",
                    "It leverages GitHub Copilot & Claude to generate concept-aware Manim code through supervised sub-agents.",
                    "The platform features a Lovable.dev frontend, Supabase backend, Daytona containerized hosting, Stripe payments, and Google Auth.",
                    "Check out the demo to see it explaining the Fourier Transform!"
                ],
                video: "https://www.youtube.com/embed/DSLrlUCjsSA?si=Hq43-4Jq8y3M_1j-"
            },
            {
                id: "pod-02-02",
                title: "AI Video Reel Generator",
                bullets: [
                    "Built a tool to create 1-minute reels from text prompts.",
                    "Integrated Gemini for script generation, Imagen for images, GPT-4o-mini TTS for narration, FFmpeg for video + subtitles.",
                    "Frontend: Lovable.dev; Backend: GCP Firebase + Cloud Run."
                ]
            },
            {
                id: "pod-02-03",
                title: "AI Meal Planning & Recipe App",
                bullets: [
                    "Built a conversational app for meal planning and grocery management.",
                    "Flutter frontend mobile app + GCP Firebase backend; GPT-4o for grocery bill image scanning & recipe generation.",
                    "Gemini multimodal voice-to-voice for recipe CRUD via natural conversation"
                ]
            }
        ]
    },
    {
        id: "node-03",
        role: "Site Reliability Engineer 2",
        company: "Loblaw Companies Limited",
        location: "Toronto, Canada",
        period: "11/2022 – 03/2025",
        status: "Completed",
        type: "Node",
        skills: [
            "Ansible", "API", "Bootstrap", "CICD", "Cloud Functions",
            "DNS", "Docker", "Flask", "GCP", "Gitlab",
            "GKE", "Grafana", "Helm", "HTML", "IBM MQ",
            "Istio", "JavaScript", "Linux", "MySQL", "Prometheus",
            "PubSub", "Python", "Terraform", "VPC"
        ],
        pods: [
            {
                id: "pod-03-01",
                title: "Custom Ansible Framework Development",
                bullets: [
                    "Developed a custom ansible framework inspired by rundeck to enable users to configure SDM stores remotely.",
                    "Played a key role in modernizing existing legacy shell based deployment framework by re-architecting the solution to leverage GCP and ansible.",
                    "Migrated 10+ complex processes as part of the modernization involving sequential file processing, IBM MQ configurations, microservice deployment etc.",
                    "Participated in 5+ pilots and 10+ rollouts that involved up to 1200 SDM stores across multiple provinces in a single night."
                ]
            },
            {
                id: "pod-03-02",
                title: "GKE Runners for 1000+ Store Deployment & Monitoring",
                bullets: [
                    "Provisioned Gitlab GKE runners to support deployments to 1000+ stores using helm involving 20k plus gitlab jobs.",
                    "Implemented job auto retry and adjusted concurrency to achieve a failure rate of less than 1%.",
                    "Migrated auto-scaling Prometheus based gitlab pipeline exporters to CloudSQL, achieving 2x performance and efficiency. Converted PROMQL queries in Grafana dashboards to SQL.",
                    "Implemented gitlab webhooks to push pipeline and job events to GCP PubSub via cloud functions which are inserted into mysql via autoscaling python exporter pods."
                ]
            },
            {
                id: "pod-03-03",
                title: "Web UI to manage and trigger SDM Deployments",
                bullets: [
                    "Developed a web UI using HTML, bootstrap, javascript and python flask to manage deployment configurations and trigger deployments in gitlab using API.",
                    "Employed a CloudSQL mysql backend DB for data storage and integrated Azure AD of the org to only allow authenticated access.",
                    "Deployed the app on GKE cluster and enabled access via internally managed DNS and istio.",
                    "Managed the IAC for all the above using terraform."
                ]
            }
        ]
    },
    {
        id: "node-04",
        role: "Site Reliability Engineer 1",
        company: "Loblaw Companies Limited",
        location: "Toronto, Canada",
        period: "05/2021 – 10/2022",
        status: "Archived",
        type: "Node",
        skills: [
            "Docker", "GCP", "Gitlab", "GKE", "Grafana",
            "Helm", "Istio", "Jsonnet", "Prometheus", "Python",
            "Secret Manager", "Terraform"
        ],
        pods: [
            {
                id: "pod-04-01",
                title: "GCP Infra and CI/CD for GKE Apps",
                bullets: [
                    "Created a common CI/CD catalog for 20+ apps in Gitlab to support deployments of docker artifacts from GAR to GKE using helm and built pipelines for infrastructure management in GCP using terraform.",
                    "Implemented security through workload identity for keyless auth to GCP services for the deployed apps, Istio to enable external connections and secret manager for storing sensitive keys and parameters.",
                    "Documented the end-to-end setup in confluence to enable devs in implementing above without SRE intervention"
                ]
            },
            {
                id: "pod-04-02",
                title: "Dynamic Gitlab Pipelines & Monitoring",
                bullets: [
                    "Created dynamic nested pipelines in Gitlab using python and jsonnet for concurrent deployments to 1000+ SDM stores.",
                    "Created MIG (managed instance group) based Gitlab runners to support 5000+ parallel Gitlab job execution. and a cloud function to create dynamic runner tags for each pipeline.",
                    "Developed auto scaling prometheus exporter pods using python on GKE to monitor the above Gitlab pipelines through Grafana dashboards.",
                    "Implemented a controller pod for auto scaling based on load and performed memory invalidation and segmentation to prevent errors relating to stale and duplicate data."
                ]
            }
        ]
    }
];
