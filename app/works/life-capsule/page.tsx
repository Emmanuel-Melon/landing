import { CaseStudyLayout } from "@/components/case-study-layout"

export default function LifeCapsuleCaseStudy() {
  return (
    <CaseStudyLayout
      title="Life Capsule"
      location="Utah, USA"
      impact={{
        achievements: [
          {
            title: "User Growth",
            description: "Over 10,000 active users within first 6 months of launch",
          },
          {
            title: "Media Recognition",
            description: "Featured in TechCrunch and selected for Y Combinator's Startup School",
          },
          {
            title: "Data Milestone",
            description: "Successfully preserved over 100,000 digital memories",
          },
        ],
      }}
      team={[
        { name: "Sarah Chen", role: "Lead Developer" },
        { name: "Marcus Thompson", role: "Cloud Architecture" },
        { name: "Elena Rodriguez", role: "UI/UX Designer" },
      ]}
      inspiration="The desire to create a meaningful way for people to preserve their digital legacy and share memories with future generations."
      problem="Traditional methods of preserving memories are fragmented, and digital content is often lost or scattered across multiple platforms without proper context or organization."
      solution="A digital time capsule application that allows users to curate, preserve, and schedule the sharing of memories, messages, and media with future generations, complete with context and personal narratives."
      technology="React Native for cross-platform mobile development, Firebase for real-time data and authentication, and Cloud Storage for secure media preservation."
      links={[
        {
          title: "Life Capsule on the App Store",
          url: "#",
        },
        {
          title: "Featured in TechCrunch",
          url: "#",
        },
      ]}
    />
  )
}
