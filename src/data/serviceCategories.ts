import { Globe, Megaphone, Lightbulb, Shield, Wrench, BarChart3, Layers, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceOffering {
  title: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  heroDescription: string;
  offerings: ServiceOffering[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "web-development",
    title: "Web & Application Development",
    shortTitle: "Web Development",
    icon: Globe,
    description: "Build stunning, high-performance web and mobile applications tailored to your business needs.",
    heroDescription: "From responsive websites to complex web applications and mobile apps, we deliver scalable digital products that drive growth and engagement.",
    offerings: [
      { title: "Website Design & Development", description: "Custom websites built with modern frameworks, optimized for speed, SEO, and conversions." },
      { title: "UI/UX Design", description: "User-centered design that creates intuitive, engaging experiences across all devices." },
      { title: "Custom Web Applications", description: "Bespoke web apps with robust backends, real-time features, and seamless integrations." },
      { title: "Mobile App Development", description: "Native and cross-platform mobile apps for iOS and Android with exceptional performance." },
      { title: "CRM Development", description: "Custom CRM solutions that streamline customer relationships and boost sales efficiency." },
      { title: "System Integration", description: "Connect your tools and platforms for a unified, automated workflow ecosystem." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    icon: Megaphone,
    description: "Drive traffic, generate leads, and grow your brand with data-driven digital marketing strategies.",
    heroDescription: "Our comprehensive digital marketing services combine SEO, paid advertising, social media, and content strategy to maximize your online presence and ROI.",
    offerings: [
      { title: "SEO, SEM & CRO", description: "Boost organic rankings, run high-converting paid campaigns, and optimize conversion rates." },
      { title: "Social Media Marketing", description: "Strategic social media management across all platforms to build brand awareness and engagement." },
      { title: "Content Creation & Marketing", description: "Compelling content strategies including blogs, videos, and infographics that drive results." },
      { title: "Online Advertising", description: "Targeted PPC, display, and retargeting campaigns that maximize your advertising budget." },
      { title: "Keyword Research", description: "In-depth keyword analysis to identify high-value search opportunities in your niche." },
      { title: "Link Building", description: "White-hat link building strategies to increase domain authority and search rankings." },
      { title: "Technical SEO", description: "Site architecture, speed optimization, schema markup, and crawlability improvements." },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Strategy",
    shortTitle: "IT Consulting",
    icon: Lightbulb,
    description: "Strategic IT consulting to align technology with your business objectives and drive innovation.",
    heroDescription: "Our experienced consultants help you navigate the complex technology landscape, develop IT strategies, and implement solutions that create competitive advantages.",
    offerings: [
      { title: "IT Strategy Planning", description: "Comprehensive technology roadmaps aligned with your business goals and growth targets." },
      { title: "Business Process Mapping", description: "Analyze and optimize workflows to eliminate inefficiencies and reduce operational costs." },
      { title: "CRM Strategy Alignment", description: "Align your CRM strategy with sales, marketing, and customer service objectives." },
      { title: "IT Infrastructure Planning", description: "Design scalable, secure infrastructure architectures that grow with your business." },
      { title: "Managed IT Services", description: "Proactive monitoring, maintenance, and support to keep your systems running smoothly." },
    ],
  },
  {
    slug: "it-support",
    title: "IT Support & Infrastructure",
    shortTitle: "IT Support",
    icon: Shield,
    description: "Reliable IT support and infrastructure management to keep your business running smoothly.",
    heroDescription: "From day-to-day support to complex infrastructure projects, we ensure your technology stack is secure, efficient, and always available.",
    offerings: [
      { title: "Infrastructure Management", description: "End-to-end management of servers, networks, and cloud resources for peak performance." },
      { title: "Security & Antivirus", description: "Multi-layered security solutions to protect your business from cyber threats." },
      { title: "Backup & Recovery", description: "Automated backup systems and disaster recovery plans to safeguard your data." },
      { title: "Cloud Migration", description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency." },
      { title: "Monitoring & Maintenance", description: "24/7 system monitoring and proactive maintenance to prevent issues before they arise." },
      { title: "Microsoft 365 Setup", description: "Complete Microsoft 365 deployment, configuration, and ongoing management." },
    ],
  },
  {
    slug: "hardware-services",
    title: "Hardware & Technical Services",
    shortTitle: "Hardware Services",
    icon: Wrench,
    description: "Professional hardware repair, upgrades, and custom builds for all your technical needs.",
    heroDescription: "Our certified technicians provide expert hardware services from repairs and upgrades to custom builds, ensuring your equipment performs at its best.",
    offerings: [
      { title: "PC / Mac Repair", description: "Fast, reliable repair services for desktops and laptops of all makes and models." },
      { title: "System Upgrades", description: "Hardware upgrades including RAM, storage, and GPU to extend the life of your equipment." },
      { title: "Custom PC Builds", description: "Purpose-built workstations and gaming PCs tailored to your exact specifications." },
      { title: "Hardware Maintenance", description: "Preventive maintenance programs to keep your hardware running at peak performance." },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    icon: BarChart3,
    description: "Transform raw data into actionable insights that drive smarter business decisions.",
    heroDescription: "We help you harness the power of data through advanced analytics, custom dashboards, and meaningful visualizations that reveal opportunities and guide strategy.",
    offerings: [
      { title: "Data Analytics", description: "Advanced data analysis to uncover patterns, trends, and opportunities in your business data." },
      { title: "KPI Reporting", description: "Custom KPI dashboards and automated reports that track what matters most." },
      { title: "Visualization", description: "Interactive data visualizations that make complex information easy to understand and act on." },
      { title: "Business Insights", description: "Strategic insights derived from data analysis to inform decision-making and planning." },
    ],
  },
  {
    slug: "system-integration",
    title: "System Integration & Automation",
    shortTitle: "Integration",
    icon: Layers,
    description: "Connect your tools and automate workflows for maximum efficiency and productivity.",
    heroDescription: "We specialize in connecting disparate systems and automating repetitive processes, creating seamless workflows that save time and reduce errors.",
    offerings: [
      { title: "Email Integrations", description: "Connect email platforms with your CRM, helpdesk, and marketing tools for unified communications." },
      { title: "Social Platforms", description: "Integrate social media management tools with your marketing and analytics stack." },
      { title: "Customer Service Tools", description: "Unify helpdesk, chat, and ticketing systems for a seamless customer support experience." },
      { title: "Financial Systems", description: "Connect accounting, invoicing, and payment platforms for automated financial workflows." },
      { title: "Workflow Automation", description: "Design and implement automated workflows that eliminate manual tasks and boost productivity." },
    ],
  },
  {
    slug: "additional-services",
    title: "Additional Services",
    shortTitle: "More Services",
    icon: Briefcase,
    description: "Complementary services to support your complete digital transformation journey.",
    heroDescription: "Beyond our core offerings, we provide specialized services in content strategy, media management, customer support systems, and IT security compliance.",
    offerings: [
      { title: "Content Strategy", description: "Develop comprehensive content plans that align with your brand voice and business goals." },
      { title: "Media Management", description: "Professional management of digital media assets, campaigns, and distribution channels." },
      { title: "Customer Support Systems", description: "Design and implement customer support infrastructure including helpdesk and knowledge bases." },
      { title: "IT Security & Compliance", description: "Ensure your systems meet industry security standards and regulatory compliance requirements." },
      { title: "Network Protection", description: "Advanced network security solutions including firewalls, VPNs, and intrusion detection." },
    ],
  },
];
