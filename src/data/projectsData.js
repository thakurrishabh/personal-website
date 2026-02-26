export const projectsData = [
    {
        id: "project-01",
        role: "Personal Projects",
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
    }
];
