/* تنسيق محتوى السيرة الذاتية للموقع الإلكتروني */
 
// محتوى السيرة الذاتية العربية
const arabicContent = {
  name: "عبد المجيد بن عبدالله حمد القفاري",
  contact: {
    email: "abdulmjeed.alqifary@gmail.com",
    phone: "0583378766",
    address: "المدينة المنورة"
  },
  summary: "مدير تنفيذي ذو خبرة في إدارة المنظمات غير الربحية والقطاع الخيري، مع أكثر من 10 سنوات في المناصب القيادية والإدارية. متخصص في التخطيط الاستراتيجي وإدارة العمليات وتطوير الأداء المؤسسي. خبرة متميزة في إدارة المخزون والخدمات العامة والصيانة وضمان الجودة. ملتزم بتطبيق أعلى معايير الحوكمة والشفافية وأخلاقيات العمل.",
  experience: [
    {
      title: "المدير التنفيذي",
      company: "جمعية وافر لإعادة التدوير",
      period: "1444هـ - حتى الآن",
      responsibilities: [
        "إدارة العمليات التشغيلية وتنفيذ الخطط الاستراتيجية بما يحقق رؤية ورسالة الجمعية.",
        "الإشراف على إدارة الموارد المالية والبشرية وتحسين كفاءة الإنفاق.",
        "تطوير الشراكات الاستراتيجية مع الجهات المانحة والداعمة.",
        "تطبيق معايير الجودة والحوكمة وضمان الامتثال للأنظمة واللوائح.",
        "قيادة فريق العمل وتحفيزهم لتحقيق الأهداف المؤسسية."
      ]
    },
    {
      title: "رئيس قسم الاستلام والصرف",
      company: "جمعية مستودع المدينة المنورة الخيري",
      period: "2019م - 1444هـ",
      responsibilities: [
        "إدارة عمليات استلام وصرف المواد والمستلزمات وفق الإجراءات المعتمدة.",
        "تطوير نظام متكامل لإدارة المخزون وضبط الجودة بدقة تصل إلى 95%.",
        "تدريب فريق العمل على أفضل ممارسات إدارة المخزون والاستلام والصرف.",
        "تنفيذ إجراءات الرقابة الداخلية وتقليل الهدر في الموارد.",
        "إعداد التقارير الدورية لدعم اتخاذ القرارات الإدارية."
      ]
    },
    {
      title: "مدير إدارة الخدمات العامة والصيانة",
      company: "جمعية مستودع المدينة المنورة الخيري",
      period: "1444هـ",
      responsibilities: [
        "إدارة فريق الخدمات العامة والصيانة وضمان جودة الخدمات المقدمة.",
        "تطوير وتنفيذ خطط الصيانة الوقائية والتصحيحية للمرافق والمعدات.",
        "إدارة عقود الخدمات الخارجية والتنسيق مع الموردين.",
        "ترشيد النفقات التشغيلية وتحسين كفاءة استهلاك الموارد.",
        "تطبيق معايير السلامة والأمان في بيئة العمل."
      ]
    },
    {
      title: "مندوب استقبال",
      company: "شركة سحاب للعمرة والسياحة",
      period: "2014م",
      responsibilities: [
        "استقبال العملاء وتقديم خدمات الضيافة بمعايير عالية الجودة.",
        "تنسيق الحجوزات وتلبية احتياجات العملاء بكفاءة.",
        "المساهمة في تحسين تجربة العملاء وزيادة رضاهم.",
        "التنسيق بين الإدارات المختلفة لضمان تكامل الخدمات."
      ]
    }
  ],
  education: {
    degree: "الدبلوم العالي في إدارة المنظمات غير الربحية (٤.٦٢)",
    institution: "جامعة الحدود الشمالية",
    period: "2025م"
  },
    education2: {
    degree: "بكالوريوس في الكيمياء",
    institution: "كلية العلوم - جامعة طيبة",
    period: "2014م - 2018م"
  },
  training: {
    management: [
      {
        title: "الإسناد الحكومي (20 ساعة)",
        provider: "أكاديمية الفوزان",
        year: "2025م"
      },
      {
        title: "تنمية القيادة المضاعفة MLD (16 ساعة)",
        provider: "شركة غراس",
        year: "2025م"
      },            
      {
        title: "إدارة الموارد البشرية (30 ساعة)",
        provider: "معهد تشكيل المستقبل",
        year: "2022م"
      },
      {
        title: "إدارة الحسابات المالية",
        provider: "معهد ريادة الأعمال الوطني",
        year: "2022م"
      },
      {
        title: "إدارة الجودة",
        provider: "معهد ريادة الأعمال الوطني",
        year: "2022م"
      },
      {
        title: "نموذج جائزة التميز المؤسسي للعمل الخيري",
        provider: "مركز نماء التميز",
        year: "2021م"
      }
    ],
    quality: [
      {
        title: "نظام إدارة الجودة ISO 9001:2015",
        provider: "أفكار العولمة للاستشارات الإدارية",
        year: "2020م"
      },
      {
        title: "إدارة المخاطر في المخازن وورش الصيانة",
        provider: "أفكار العولمة للاستشارات الإدارية",
        year: "2020م"
      }
    ],
    technical: [
      {
        title: "إدخال البيانات ومعالجة النصوص (6 أشهر)",
        provider: "معهد قطاف للتدريب",
        year: "1442-1443هـ"
      },
      {
        title: "مايكروسوفت وورد",
        provider: "منصة دروب",
        year: "2019م"
      },
      {
        title: "مايكروسوفت إكسل 2013",
        provider: "منصة دروب",
        year: "2019م"
      },
      {
        title: "مايكروسوفت آوتلوك",
        provider: "منصة دروب",
        year: "2019م"
      }
    ],
    professional: [
      {
        title: "الأخلاقيات المهنية في بيئة العمل",
        provider: "منصة دروب",
        year: "2019م"
      }
    ],
    languages: [
      {
        title: "اللغة الإنجليزية (6 مستويات - 460 ساعة)",
        provider: "معهد الخليج",
        year: "2012م - 2014م"
      }
    ]
  },
  certificates: [
    {
      title: "شهادة تقدير من  جمعية مستودع المدينة المنورة الخيري - إدارة الخدمات العامة والصيانة",
      year: "1444هـ"
    },
    {
      title: "شهادة تقدير من  جمعية مستودع المدينة المنورة الخيري - إدارة الاستلام والصرف",
      year: "1442هـ"
    }
  ],
  skills: {
    professional: [
      "القيادة الإدارية",
      "التخطيط الاستراتيجي",
      "إدارة المخزون",
      "إدارة الخدمات والصيانة",
      "إدارة المخاطر",
      "ضمان الجودة",
      "إدارة الموارد البشرية",
      "إدارة الموارد المالية",
      "تطوير فرق العمل"
    ],
    personal: [
      "حل المشكلات",
      "اتخاذ القرارات",
      "التواصل الفعّال",
      "العمل الجماعي",
      "أخلاقيات العمل",
      "التعلم المستمر"
    ],
    technical: [
      "مايكروسوفت أوفيس",
      "إدارة قواعد البيانات",
      "أنظمة إدارة المخزون"
    ]
  },
  languages: [
    {
      name: "العربية",
      level: "اللغة الأم"
    },
    {
      name: "الإنجليزية",
      level: "68%"
    }
  ]
};

// محتوى السيرة الذاتية الإنجليزية
const englishContent = {
  name: "AbdulMajeed bin Abdullah Hamad Al-Qafari",
  contact: {
    email: "abdulmjeed.alqifary@gmail.com",
    phone: "0583378766",
    address: "Al-Madinah al-Munawwarah - Medina"
  },
  summary: "Experienced Executive Director in non-profit and charitable sector management with over 10 years in leadership and administrative positions. Specialized in strategic planning, operations management, and institutional performance development. Distinguished expertise in inventory management, general services, maintenance, and quality assurance. Committed to implementing the highest standards of governance, transparency, and work ethics.",
  experience: [
    {
      title: "Executive Director",
      company: "Wafer Association for Recycling",
      period: "1444 AH - Present",
      responsibilities: [
        "Manage operational processes and implement strategic plans to achieve the association's vision and mission.",
        "Supervise financial and human resources management and improve spending efficiency.",
        "Develop strategic partnerships with donors and supporting entities.",
        "Apply quality and governance standards and ensure compliance with regulations.",
        "Lead and motivate the work team to achieve institutional goals."
      ]
    },
    {
      title: "Head of Receiving and Disbursement Department",
      company: "Madinah Charity Warehouse Association",
      period: "2019 - 1444 AH",
      responsibilities: [
        "Manage receiving and disbursement operations of materials and supplies according to approved procedures.",
        "Develop an integrated inventory management and quality control system with 95% accuracy.",
        "Train the work team on best practices in inventory management, receiving, and disbursement.",
        "Implement internal control procedures and reduce resource waste.",
        "Prepare periodic reports to support administrative decision-making."
      ]
    },
    {
      title: "General Services and Maintenance Department Manager",
      company: "Madinah Charity Warehouse Association",
      period: "1444 AH",
      responsibilities: [
        "Manage the general services and maintenance team and ensure quality of services provided.",
        "Develop and implement preventive and corrective maintenance plans for facilities and equipment.",
        "Manage external service contracts and coordinate with suppliers.",
        "Rationalize operational expenses and improve resource consumption efficiency.",
        "Apply safety and security standards in the work environment."
      ]
    },
    {
      title: "Reception Representative",
      company: "Sahab Umrah and Tourism Company",
      period: "2014",
      responsibilities: [
        "Receive customers and provide high-quality hospitality services.",
        "Coordinate reservations and meet customer needs efficiently.",
        "Contribute to improving customer experience and increasing satisfaction.",
        "Coordinate between different departments to ensure integrated services."
      ]
    }
  ],
  education: {
    degree: "High Diploma in Nonprofit Organization Management (4.62)",
    institution: "Northern Border University",
    period: "2025"
  },
   education2: {
    degree: "Bachelor of Science in Chemistry",
    institution: "Faculty of Science - Taibah University",
    period: "2014 - 2018"
  },
  training: {
    management: [
       {
        title: "Governmental Outsourcing (20 Hours)",
        provider: "Al Fozan Academy",
        year: "2025"
      },
       {
        title: "Multiplying Leadership Development (MLD) Program - (16 hours)",
        provider: "Gheras Company",
        year: "2025"
      },
      {
        title: "Human Resources Management (30 hours)",
        provider: "Future Shaping Institute",
        year: "2022"
      },
      {
        title: "Financial Accounting Management",
        provider: "National Entrepreneurship Institute",
        year: "2022"
      },
      {
        title: "Quality Management",
        provider: "National Entrepreneurship Institute",
        year: "2022"
      },
      {
        title: "Institutional Excellence Award Model for Charitable Work",
        provider: "Namaa Excellence Center",
        year: "2021"
      }
    ],
    quality: [
      {
        title: "Quality Management System ISO 9001:2015",
        provider: "Globalization Ideas for Management Consulting",
        year: "2020"
      },
      {
        title: "Risk Management in Warehouses and Maintenance Workshops",
        provider: "Globalization Ideas for Management Consulting",
        year: "2020"
      }
    ],
    technical: [
      {
        title: "Data Entry and Word Processing",
        provider: "Qitaf Training Institute",
        year: "1442-1443H"
      },
      {
        title: "Microsoft Word",
        provider: "Doroob Platform",
        year: "2019"
      },
      {
        title: "Microsoft Excel 2013",
        provider: "Doroob Platform",
        year: "2019"
      },
      {
        title: "Microsoft Outlook",
        provider: "Doroob Platform",
        year: "2019"
      }
    ],
    professional: [
      {
        title: "Professional Ethics in Work Environment",
        provider: "Doroob Platform",
        year: "2019"
      }
    ],
    languages: [
      {
        title: "English Language (6 levels - 460 hours)",
        provider: "Gulf Institute",
        year: "2012 - 2014"
      }
    ]
  },
  certificates: [
    {
      title: "Certificate of Appreciation from Madinah Charity Warehouse Association - General Services and Maintenance Department",
      year: "1444 AH"
    },
    {
      title: "Certificate of Appreciation from Madinah Charity Warehouse Association - Receiving and Disbursement Department",
      year: "1442 AH"
    }
  ],
  skills: {
    professional: [
      "Administrative Leadership",
      "Strategic Planning",
      "Inventory Management",
      "Services and Maintenance Management",
      "Risk Management",
      "Quality Assurance",
      "Human Resources Management",
      "Financial Resources Management",
      "Team Development"
    ],
    personal: [
      "Problem Solving",
      "Decision Making",
      "Effective Communication",
      "Teamwork",
      "Work Ethics",
      "Continuous Learning"
    ],
    technical: [
      "Microsoft Office",
      "Database Management",
      "Inventory Management Systems"
    ]
  },
  languages: [
    {
      name: "Arabic",
      level: "Native"
    },
    {
      name: "English",
      level: "68%"
    }
  ]
};
