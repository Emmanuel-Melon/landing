import { CaseStudyLayout } from "@/components/case-study-layout"

export default function CookieClubCaseStudy() {
  return (
    <CaseStudyLayout
      title="Cookie Club"
      location="Kampala, Uganda"
      impact={{
        achievements: [
          {
            title: "Market Growth",
            description: "Expanded delivery radius to cover entire Kampala metropolitan area",
          },
          {
            title: "Sales Impact",
            description: "300% increase in online orders within first 3 months",
          },
          {
            title: "Customer Satisfaction",
            description: "Maintained 4.8/5 star rating with over 1,000 reviews",
          },
        ],
      }}
      team={[
        { name: "David Okello", role: "Frontend Developer" },
        { name: "Grace Namara", role: "Backend Developer" },
        { name: "Patricia Akello", role: "UI/UX Designer" },
      ]}
      inspiration="The need for a premium bakery in Kampala to expand their reach and provide a seamless ordering experience for their growing customer base."
      problem="Limited online presence, manual order processing, and inefficient delivery management were hindering the bakery's growth potential."
      solution="A modern e-commerce platform with real-time order tracking, inventory management, and a dynamic delivery system that optimizes routes for freshness."
      technology="Next.js for the frontend, Stripe for secure payments, and Sanity CMS for easy content management of the product catalog."
      links={[
        {
          title: "Cookie Club Website",
          url: "#",
        },
        {
          title: "Featured in Daily Monitor",
          url: "#",
        },
      ]}
    />
  )
}
