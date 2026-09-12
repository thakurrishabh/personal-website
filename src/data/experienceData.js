export const experienceData = [
    {
        id: "node-01",
        role: "Senior Site Reliability Engineer",
        company: "Loblaw Companies Limited",
        location: "Toronto, Canada",
        period: "03/2025 – Present",
        status: "Running",
        type: "Node",
        skills: ["Cursor", "Gemini", "Kubernetes", "GitLab CI", "Ansible", "KubeVirt", "FluxCD"],
        pods: [
            {
                id: "pod-01-01",
                title: "K8s Store Platform Rollout for SDM Anthos and Vanilla Kubernetes",
                bullets: [
                    "Engineered Cursor agent workflows, skills, and rules to generate GitLab pipelines and Ansible automation moving SDM from on-prem VMware to vanilla Kubernetes on GCP (~400 stores this year, 1,500+ footprint), including node rebuilds, container/KubeVirt migration, and FluxCD GitOps."
                ]
            },
            {
                id: "pod-01-02",
                title: "AI Engineered DevOps Delivery for Pharmacy Platform Migrations",
                bullets: [
                    "Built a Cursor AI delivery system (Agent Skills, Rules, MCP) that orchestrates tickets, repo changes, docs, and GitLab jobs across pharmacy SRE repos serving 1,500+ stores; applied it to DB2 → Postgres (convert/cutover/rollback pipelines, pilots underway) and IBM MQ → ActiveMQ (side-by-side brokers, dump-driven store-by-store migrate)."
                ]
            },
            {
                id: "pod-01-03",
                title: "AI Engineered K8s Incident Intelligence and Store Recovery",
                bullets: [
                    "Built an AI incident system in Cursor over 10,000+ store incidents (1,500+ estate): RCA playbooks, K8s store-down recovery runbooks, and the first GitLab recovery jobs; during an ~80-store release, traced GitLab/Pub/Sub/Grafana failures and restored ~100 stuck jobs."
                ]
            },
            {
                id: "pod-01-04",
                title: "Medisystem GenAI Assisted Fax Classification",
                bullets: [
                    "Engineered Cursor + Gemini (GenAI Gateway) workflows on GCP to classify fax and digipen documents for LTC pharmacy (~2.5M orders/year), with embeddings duplicate detection and a Document Viewer so staff sort by location/home/type for MVP1."
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
                title: "Web UI to manage and trigger SDM Deployments provisioned using Terraform",
                bullets: [
                    "Developed a Flask web UI (HTML, Bootstrap, JavaScript) with a CloudSQL MySQL backend and Azure AD to manage deployment configs and trigger GitLab deployments; deployed on GKE with internal DNS and Istio."
                ]
            },
            {
                id: "pod-03-02",
                title: "Google Kubernetes Engine runners for 1000+ Store Deployment Framework and event driven monitoring provisioned using Terraform",
                bullets: [
                    "Provisioned a GKE cluster of GitLab runners for 1000+ store Helm deployments (~20k jobs per run, a few times a week) with auto-retry under 1% failure; migrated Prometheus exporters to CloudSQL (2x performance), converted Grafana PROMQL to SQL, and pushed GitLab events to GCP Pub/Sub via Cloud Functions into MySQL."
                ]
            },
            {
                id: "pod-03-03",
                title: "Custom Ansible Framework Development",
                bullets: [
                    "Developed a Rundeck-style Ansible framework to configure SDM stores remotely and modernized the legacy shell deployment onto GCP and Ansible; migrated 10+ processes (file processing, IBM MQ, microservices) and ran 5+ pilots and 10+ rollouts of up to 1200 stores in a single night."
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
                title: "GCP Infra and CI/CD to deploy 20+ apps on Google Kubernetes Engine provisioned using Terraform",
                bullets: [
                    "Created a GitLab CI/CD catalog for 20+ apps deploying Docker artifacts from GAR to GKE with Helm, plus Terraform pipelines for GCP infra; added Workload Identity, Istio, and Secret Manager, and documented the setup in Confluence so devs could run it without SRE."
                ]
            },
            {
                id: "pod-04-02",
                title: "Dynamic Gitlab Pipelines Infra and Monitoring to support 1000+ store deployment",
                bullets: [
                    "Built dynamic nested GitLab pipelines (Python, Jsonnet) for concurrent deployments to 1000+ SDM stores, with MIG runners for 5000+ parallel jobs and a Cloud Function for dynamic runner tags; added auto-scaling Prometheus exporters on GKE with Grafana dashboards and a controller pod to prevent stale/duplicate data."
                ]
            }
        ]
    }
];
