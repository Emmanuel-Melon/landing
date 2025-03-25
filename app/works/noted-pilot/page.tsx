import { CaseStudyLayout } from "@/components/case-study-layout"

export default function NotedPilotCaseStudy() {
  return (
    <CaseStudyLayout
      title="NotedPilot"
      location="East Africa"
      impact={{
        achievements: [
          {
            title: "Hackathon Success",
            description: "Won the MTN Momo Hackathon 2023 in South Sudan",
          },
          {
            title: "Media Coverage",
            description: "Featured in News Articles and was Nominated for the East African Startup Awards",
          },
          {
            title: "National Recognition",
            description: "Second place at a National Competition",
          },
        ],
      }}
      team={[
        { name: "Maged Faiz", role: "Technical Lead" },
        { name: "Lokosang Wani", role: "UX Designer" },
        { name: "Mabior Duom", role: "Product Manager" },
      ]}
      inspiration="The challenges faced by businesses and suppliers in Africa in managing supplies, finding reliable couriers, and streamlining operations."
      problem="Fragmented supply chains, inefficiencies in delivery processes, and lack of data-driven decision-making tools for businesses and suppliers."
      solution="A unified platform that matches businesses with suppliers and couriers based on dynamic metrics like price, availability, and Sahil Score, while also offering tools like composite orders and delivery tracking."
      technology="Advanced matching algorithms, Sahil Score metrics, and user-friendly interfaces built with React and Node.js."
      links={[
        {
          title: "Meet 28-year-old software engineer bridging digital divide in East Africa",
          url: "#",
        },
        {
          title: "Sahil on Crunchbase",
          url: "#",
        },
        {
          title: "VC4A",
          url: "#",
        },
      ]}
    />
  )
}
