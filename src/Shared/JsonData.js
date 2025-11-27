import {
  Award,
  Globe,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const stats = [
  {
    number: "500+",
    label: "Happy Clients",
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: "1200+",
    label: "Projects Completed",
    icon: <Award className="w-6 h-6" />,
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: <Star className="w-6 h-6" />,
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export const services = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive real results and ROI",
    features: [
      "SEO Optimization",
      "PPC Campaigns",
      "Social Media Marketing",
      "Content Strategy",
    ],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Brand Strategy",
    description: "Build a memorable brand that resonates with your audience",
    features: [
      "Brand Identity",
      "Market Research",
      "Positioning",
      "Visual Design",
    ],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Modern, responsive websites that convert visitors to customers",
    features: [
      "Custom Development",
      "E-commerce",
      "UI/UX Design",
      "Maintenance",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Growth Marketing",
    description: "Data-driven strategies to scale your business exponentially",
    features: [
      "Analytics",
      "A/B Testing",
      "Conversion Rate",
      "Email Marketing",
    ],
  },
];
