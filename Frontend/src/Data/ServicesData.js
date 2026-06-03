import {
  FaPassport,
  FaPlane,
  FaUserGraduate,
} from "react-icons/fa";

import { MdWork } from "react-icons/md";

const ServicesData = [
  {
    id: 1,
    title: "Study Visa",
    icon: FaPassport,
    description:
      "Expert guidance for students seeking international education opportunities through study visas and university admissions.",
    whatsappMessage:
      "Hello, I would like to know more about Study Visa and University Admissions.",
    link: "/study-visa",
  },

  {
    id: 2,
    title: "Work Visa",
    icon: MdWork,
    description:
      "Professional assistance for obtaining work permits and work visas to build your career abroad.",
    whatsappMessage:
      "Hello, I am interested in Work Visa opportunities. Please provide more details.",
    link: "/work-visa",
  },

  {
    id: 3,
    title: "Visitor Visa",
    icon: FaPlane,
    description:
      "Hassle-free visitor visa for family visits, business trips, and short-term international travel.",
    whatsappMessage:
      "Hello, I would like information regarding Visitor Visa.",
    link: "/visitor-visa",
  },

  {
    id: 4,
    title: "Tourist Visa",
    icon: FaPlane,
    description:
      "Complete support for tourist visa applications to help you explore destinations around the world.",
    whatsappMessage:
      "Hello, I am interested in Tourist Visa. Please guide me through the process.",
    link: "/tourist-visa",
  },

//   {
//     id: 5,
//     title: "University Admission",
//     icon: FaUniversity,
//     description:
//       "Get assistance with selecting universities, courses, application processes, and admission requirements.",
//     whatsappMessage:
//       "Hello, I would like assistance with University Admissions and course selection.",
//     link: "/university-admission",
//   },

  {
    id: 6,
    title: "Student Counseling",
    icon: FaUserGraduate,
    description:
      "Personalized counseling sessions to help students choose the right country, course, and career path.",
    whatsappMessage:
      "Hello, I would like to schedule a Student Counseling session.",
    link: "/student-counseling",
  },

  {
    id: 7,
    title: "Air Tickets",
    icon: FaPlane,
    description:
      "Affordable and reliable air ticket booking for students, tourists, and professionals.",
    whatsappMessage:
      "Hello, I need assistance with Air Ticket booking.",
    link: "/air-tickets",
  },
];

export default ServicesData;