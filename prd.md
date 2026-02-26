I want to design exactly like bruno simon theme visually but in 2d while connecting the elements logically as mentioned. 

I dont want a GAME. just visuals and animations it takes two theme styled while conveying the actual components as mentioned.

Below is the **complete architecture spec for your cloud-themed resume website**

---

# 🧱 SYSTEM NAME

`rishabh-resume-platform`

---

# 🌐 NETWORK LAYER

### VPC — `career-network`

| Subnet              | Purpose                     |
| ------------------- | --------------------------- |
| `bio-subnet`        | Monitoring Dashboard        |
| `experience-subnet` | Kubernetes Cluster          |
| `education-subnet`  | Database                    |
| `storage-subnet`    | Buckets                     |
| `cdn-subnet`        | Static Web App + CDN        |
| `skills-subnet`     | Skill Engine                |
| `edge-subnet`       | NAT Gateways (Social Links) |

Everything lives inside this one VPC.

---

# 📡 COMMUNICATION FABRIC

### Signal Pulses (Event Bus)

**Visual:** thin animated directional lines between all components
**Meaning:** growth, interaction, career evolution

---

# 📊 BIO SECTION

### Monitoring Dashboard (Control Plane)

```
Monitoring Dashboard
- Profile summary
- Career metrics
- Key highlights
```

**Receives pulses from:** all internal components.

data

Rishabh Singh Thakur
Date of birth: 1997/04/28 | Address: Toronto, ON. | Phone number: +15148032804
Email address: rishabh.4082@gmail.com | Github: https://github.com/thakurrishabh
LinkedIn: https://linkedin.com/in/rishabh-singh-thakur-ba3bb4168 | Blog: https://dev.to/thakurrishabh
Summary
Helping businesses leverage AI and cloud infrastructure to automate workflows, reduce operational costs, and accelerate time-to-market.
Cloud Engineer & SRE with 4+ years of hands-on experience building scalable GCP infrastructure for 1000+ SDM stores across Canada.
Currently available for projects involving AI integration, cloud engineering, automation, and full-stack AI applications.

---

# 💼 WORK EXPERIENCE

### Kubernetes Cluster — `experience-cluster`

| Resume Concept               | Cloud Component |
| ---------------------------- | --------------- |
| Job Role                     | Node            |
| Responsibility / Achievement | Pod             |

```
Node: Software Engineer @ Company A
 ├─ Pod: Built CI/CD pipelines
 ├─ Pod: Optimized infra cost
 └─ Pod: Migrated workloads
```

data:

Work experience
Senior Site Reliability Engineer
Loblaw Companies Limited
TORONTO, CANADA                                    									        03/2025 – Present

SDM On-Prem VMWARE to Vanilla Kubernetes Migration
Developed ansible playbooks to migrate vmware workloads to vanilla Kubernetes containers & VMs using kubevirt for each store.
Developed gitlab CI/CD pipelines with monitoring to deploy new workloads through ansible.
Participated in pilots to migrate on prem vmware instances of 15 stores as part of an initiative to cover 400 stores across ontario.

AI & Cloud Products 
Freelance / Independent
TORONTO, CANADA                                    									        09/2024 – Present

RenderMuseAI – Text-to-Explainer Animation Platform 
Built and launched RenderMuseAI, an AI-powered platform that converts text prompts into educational Manim animations.  
Used GitHub Copilot & Claude to generate concept-aware Manim code with supervised sub-agents
Features: Lovable.dev frontend, Supabase backend, Daytona containerized hosting, Stripe payments, Google auth
Demo: Fourier Transform explainer text to explainer animation platform - RenderMuseAI Demo	 

AI Video Reel Generator
Built a tool to create 1-minute reels from text prompts.  
Integrated Gemini for script generation, Imagen for images, GPT-4o-mini TTS for narration, FFmpeg for video + subtitles.
Frontend: Lovable.dev; Backend: GCP Firebase + Cloud Run.

AI Meal Planning & Recipe App
Built a conversational app for meal planning and grocery management. 
Flutter frontend mobile app + GCP Firebase backend; GPT-4o for grocery bill image scanning & recipe generation.
Gemini multimodal voice-to-voice for recipe CRUD via natural conversation

Skills: Python, React, Flutter, GCP (Firebase, Cloud Run, OAUTH login), Supabase, Stripe, FFmpeg, GitHub Copilot, Claude Code, OpenAI and Gemini API (text, image, tts, voice), Microsoft Playwright MCP, lovable.dev, vercel, daytona. 

Site Reliability Engineer 2
Loblaw Companies Limited
TORONTO, CANADA                                    									        11/2022 – 03/2025

Custom Ansible Framework Development
Developed a custom ansible framework inspired by rundeck to enable users to configure SDM stores remotely.
Played a key role in modernizing existing legacy shell based deployment framework by re-architecting the solution to leverage GCP and ansible.
Migrated 10+ complex processes as part of the modernization involving sequential file processing, IBM MQ configurations, microservice deployment etc.
Participated in 5+ pilots and 10+ rollouts that involved up to 1200 SDM stores across multiple provinces in a single night.
                  
Google Kubernetes Engine runners for 1000+ Store Deployment Framework and event driven monitoring
Provisioned Gitlab GKE runners to support deployments to 1000+ stores using helm involving 20k plus gitlab jobs.
Implemented job auto retry and adjusted concurrency to achieve a failure rate of less than 1%.
Migrated auto-scaling Prometheus based gitlab pipeline exporters to CloudSQL, achieving 2x performance and efficiency. Converted PROMQL queries in Grafana dashboards to SQL.
Implemented gitlab webhooks to push pipeline and job events to GCP PubSub via cloud functions which are inserted into mysql via autoscaling python exporter pods. 

Web UI to manage and trigger SDM Deployments
Developed a web UI using HTML, bootstrap, javascript and python flask to manage deployment configurations and trigger deployments in gitlab using API.
Employed a CloudSQL mysql backend DB for data storage and integrated Azure AD of the org to only allow authenticated access.
Deployed the app on GKE cluster and enabled access via internally managed DNS and istio.
Managed the IAC for all the above using terraform. 
Skills: Python, GCP, Google Kubernetes Engine (GKE), Docker, Ansible, Terraform, Gitlab, CICD, MySQL, Prometheus.io, Grafana, Helm (Software), Flask, JavaScript, Bootstrap (Framework), HTML, Istio, DNS, VPC, API, IBM MQ, cloud function, GCP PubSub, Linux, Scripting, Containerization

Site Reliability Engineer 1
Loblaw Companies Limited
TORONTO, CANADA                                     									       05/2021 – 10/2022

GCP Infra and CI/CD to deploy 20+ apps on Google Kubernetes Engine
Created a common CI/CD catalog for 20+ apps in Gitlab to support deployments of docker artifacts from GAR to GKE using helm and built pipelines for infrastructure management in GCP using terraform.
Implemented security through workload identity for keyless auth to GCP services for the deployed apps, Istio to enable external connections and secret manager for storing sensitive keys and parameters.
Documented the end-to-end setup in confluence to enable devs in implementing above without SRE intervention

Dynamic Gitlab Pipelines Infra and Monitoring to support 1000+ store deployment
Created dynamic nested pipelines in Gitlab using python and jsonnet for concurrent deployments to 1000+ SDM stores.
Created MIG (managed instance group) based Gitlab runners to support 5000+ parallel Gitlab job execution. and a cloud function to create dynamic runner tags for each pipeline.
Developed auto scaling prometheus exporter pods using python on GKE to monitor the above Gitlab pipelines through Grafana dashboards.
Implemented a controller pod for auto scaling based on load and performed memory invalidation and segmentation to prevent errors relating to stale and duplicate data.

---

# 🛠 SKILLS

### Skill Engine (Single SVG Anchor)

```
Skill Engine
- Cloud Architecture
- DevOps & Automation
- Backend Systems
- Data Engineering
```

---

# 🎓 EDUCATION

### Relational Database

```
Education DB
- Degree
- University
- Core subjects
```

---

# 🪣 SOFT SKILLS • LANGUAGES • HOBBIES

### Object Storage Buckets

```
Bucket: soft-skills
Bucket: languages
Bucket: hobbies
```

---

# ✍️ BLOG

### Static Web App + CDN

```
Blog Platform
- Articles
- Tutorials
- Case studies
```

Read-optimized, globally distributed.

---

# 📬 CONTACT

### IAM — Identity & Access Management

```
IAM
- Email
- Professional identity
```

---

# 🌍 SOCIAL LINKS (Edge of VPC)

### NAT Gateways — Outbound Only

| Gateway        | Routes To    |
| -------------- | ------------ |
| NAT – LinkedIn | linkedin.com |
| NAT – GitHub   | github.com   |
| NAT – X        | x.com        |
| NAT – YouTube  | youtube.com  |

```
Monitoring Dashboard
        │
        ▼
   Internal VPC
        │
        ▼
 NAT Gateways (Social)
        │
        ▼
 External Platforms
```

---

# 🔗 CONNECTION MAP

All components:

* Are inside `career-network`
* Exchange **Signal Pulses**
* Feed insights into **Monitoring Dashboard**
* Derive capability from **Skill Engine**
* Export presence through **NAT Gateways**

---

This is now a **complete production-grade cloud system representing your entire career.**

