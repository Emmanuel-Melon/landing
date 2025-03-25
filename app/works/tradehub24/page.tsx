import { CaseStudyLayout } from "@/components/case-study-layout"

export default function TradeHub24CaseStudy() {
  return (
    <CaseStudyLayout
      title="TradeHub24"
      location="United Kingdom"
      impact={{
        achievements: [
          {
            title: "Platform Growth",
            description: "Over 5,000 registered trade professionals and 15,000 homeowners",
          },
          {
            title: "Transaction Volume",
            description: "Facilitated £2M+ in service bookings in first year",
          },
          {
            title: "Service Quality",
            description: "95% positive feedback rate from completed jobs",
          },
        ],
      }}
      team={[
        { name: "James Wilson", role: "Project Lead" },
        { name: "Emma Thompson", role: "Full-stack Developer" },
        { name: "Oliver Wright", role: "DevOps Engineer" },
      ]}
      inspiration="The frustration homeowners face in finding reliable trade professionals, and the challenges skilled traders face in building their online presence."
      problem="Lack of trust, transparency, and efficiency in connecting UK homeowners with qualified trade professionals, leading to poor experiences and wasted time on both sides."
      solution="A comprehensive platform that vets trade professionals, enables transparent pricing, facilitates secure payments, and provides a review system that builds trust in the marketplace."
      technology="React for the frontend, Node.js for the backend API, and MongoDB for flexible data storage. Integrated with various UK trade certification APIs for verification."
      links={[
        {
          title: "TradeHub24 Platform",
          url: "#",
        },
        {
          title: "Featured in Property Week",
          url: "#",
        },
      ]}
    />
  )
}
