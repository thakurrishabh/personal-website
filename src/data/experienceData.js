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
                title: "Built and Architected HL7 FHIR Compliant GCP based Services",
                bullets: [
                    "Collaborated with the teams to onboard new province integration to SDM stores ensuring HL7 FHIR compliance with provincial systems and successfully led control GAP TRA assessments.",
                    "Collaborated with teams to drive business decisions in Eprescription, EHealth, Interactive voice response (IVR) to ensure HL7 FHIR compliance with external systems while seamless integration between GCP and on prem edge devices."
                ]
            },
            {
                id: "pod-01-02",
                title: "SDM On-Prem VMWARE to Vanilla Kubernetes Migration With GCP Integration",
                bullets: [
                    "Participated in pilots to migrate on prem vmware instances of 15 stores to vanilla kubernetes as part of an initiative to cover 700 stores across ontario. Rebuilt entire store from ground up including Dell hardware, kubernetes node config, OS install.",
                    "Developed ansible playbooks that run on GKE to migrate vmware workloads to vanilla Kubernetes containers & VMs using kubevirt for each store.",
                    "Configured FLUXCD gitops to enable seamless deployment of microservices using Kustomization from a central management gke cluster"
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
                    "Developed a web UI using HTML, bootstrap, javascript and python flask to manage deployment configurations and trigger deployments in gitlab using API.",
                    "Employed a CloudSQL mysql backend DB for data storage and integrated Azure AD of the org to only allow authenticated access.",
                    "Deployed the app on GKE cluster and enabled access via internally managed DNS and istio."
                ]
            },
            {
                id: "pod-03-02",
                title: "Google Kubernetes Engine runners for 1000+ Store Deployment Framework and event driven monitoring provisioned using Terraform",
                bullets: [
                    "Provisioned GKE Cluster hosting gitlab runners to support deployments to 1000+ stores using helm involving 20k plus gitlab jobs per deployment happening few times a week.",
                    "Implemented job auto retry and adjusted concurrency to achieve a failure rate of less than 1%.",
                    "Migrated auto-scaling Prometheus based gitlab pipeline exporters to CloudSQL, achieving 2x performance and efficiency. Converted PROMQL queries in Grafana dashboards to SQL.",
                    "Implemented gitlab webhooks to push pipeline and job events to GCP PubSub via cloud functions which are inserted into mysql via autoscaling python exporter pods."
                ]
            },
            {
                id: "pod-03-03",
                title: "Custom Ansible Framework Development",
                bullets: [
                    "Developed a custom ansible framework inspired by rundeck to enable users to configure SDM stores remotely.",
                    "Played a key role in modernizing existing legacy shell based deployment framework by re-architecting the solution to leverage GCP and ansible.",
                    "Migrated 10+ complex processes as part of the modernization involving sequential file processing, IBM MQ configurations, microservice deployment etc.",
                    "Participated in 5+ pilots and 10+ rollouts that involved up to 1200 SDM stores across multiple provinces in a single night."
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
                    "Created a common CI/CD catalog for 20+ apps in Gitlab to support deployments of docker artifacts from GAR to GKE using helm and built pipelines for infrastructure management in GCP using terraform.",
                    "Implemented security through workload identity for keyless auth to GCP services for the deployed apps, Istio to enable external connections and secret manager for storing sensitive keys and parameters.",
                    "Documented the end-to-end setup in confluence to enable devs in implementing above without SRE intervention"
                ]
            },
            {
                id: "pod-04-02",
                title: "Dynamic Gitlab Pipelines Infra and Monitoring to support 1000+ store deployment",
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
