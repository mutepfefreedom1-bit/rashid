export type SupportedLang = "EN" | "FR" | "AR";

export interface TranslationSchema {
  nav: {
    matrix: string;
    director: string;
    success: string;
    services: string;
    chatLive: string;
    applyBtn: string;
    phone: string;
    whatsapp: string;
  };
  hero: {
    ribbon: string;
    titleStart: string;
    titleDecorated: string;
    titleEnd: string;
    subtitle: string;
    checkPrequalify: string;
    viewMatrix: string;
    tuitionCoverage: string;
    tuitionDesc: string;
    origins: string;
    originsDesc: string;
    placements: string;
    placementsDesc: string;
    badgeTitle: string;
    badgeSubtitle: string;
  };
  matrix: {
    headingBadge: string;
    headingTitle: string;
    headingDesc: string;
    pillsSubtitle: string;
    pillsFully: string;
    pillsPartially: string;
    destinationsLabel: string;
    provisionsLabel: string;
    requestBtn: string;
    preTravelTitle: string;
    preTravelHeading: string;
    preTravelDesc: string;
    estimatedFlight: string;
    tuitionEnrol: string;
    accommodationLabel: string;
    estFlightVisa: string;
    coveredLabel: string;
    calcsNote: string;
    guidanceBtn: string;
    disclaimerFully: string;
    disclaimerPartially: string;
  };
  director: {
    badge: string;
    title: string;
    quote: string;
    authorTitle: string;
    credentialsTitle: string;
    philosophyTitle: string;
    philosophyQuote: string;
    directConsultNote: string;
    verified: string;
    degrees: {
      linguistics: string;
      arabic: string;
      literature: string;
    };
    institutions: {
      khazar: string;
      qatar: string;
      lome: string;
    };
  };
  success: {
    badge: string;
    title: string;
    desc: string;
    allLocations: string;
    footprintSuffix: string;
    cohortBadge: string;
    successTitle: string;
    sucessRate: string;
    publicInstLabel: string;
    empowerScholarsLabel: string;
    saudiDesc: string;
    qatarDesc: string;
    saudiTitle: string;
    qatarTitle: string;
    verifiedMatch: string;
    studentOrigins: string[];
  };
  prep: {
    badge: string;
    title: string;
    desc: string;
    switchNote: string;
    durationLabel: string;
    weeks: string;
    partA: string;
    partB: string;
    partATitle: string;
    partBTitle: string;
    validityLabel: string;
    validityBadge: string;
    examBadge: string;
    examTitle: string;
    examDesc: string;
    examTarget: string;
    testimonialTitle: string;
    testimonialQuote: string;
    testimonialAuthor: string;
    requestCoachingBtn: string;
    enSlogan: string;
    enDesc: string;
    enChecklist: string[];
    enCourse: string[];
    enCoverage: string;
    frSlogan: string;
    frDesc: string;
    frChecklist: string[];
    frCourse: string[];
    frCoverage: string;
    arSlogan: string;
    arDesc: string;
    arChecklist: string[];
    arCourse: string[];
    arCoverage: string;
  };
  intake: {
    contactBadge: string;
    contactTitle: string;
    contactDesc: string;
    hotlinesLabel: string;
    officialComms: string;
    headquartersTitle: string;
    headquartersAddress: string;
    trustBar: string;
    formBadge: string;
    formTitle: string;
    formDesc: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    desiredDegreeLabel: string;
    preferredCountryLabel: string;
    academicBgLabel: string;
    academicBgPlaceholder: string;
    submitBtn: string;
    redirecting: string;
    bachelor: string;
    master: string;
    phd: string;
  };
  footer: {
    brandVision: string;
    shortcutsTitle: string;
    socialTitle: string;
    hqTitle: string;
    notaryDisclaimerTitle: string;
    notaryDisclaimerDesc: string;
    rightsReserved: string;
    terms: string;
    privacy: string;
  };
}

export const translations: Record<SupportedLang, TranslationSchema> = {
  EN: {
    nav: {
      matrix: "Scholarship Matrix",
      director: "Meet the Director",
      success: "Proven Success",
      services: "Academic Services",
      chatLive: "Chat Live",
      applyBtn: "Apply Assistance",
      phone: "Global Phone",
      whatsapp: "WhatsApp Support",
    },
    hero: {
      ribbon: "Official Scholarship Guide 2026/2027 Registration Intake Open",
      titleStart: "Turn Dreams of ",
      titleDecorated: "Global Education",
      titleEnd: " Into Reality.",
      subtitle: "Seamless scholarship assistance for Bachelor, Master, and PhD programs. We guide you toward fully and partially funded opportunities across Saudi Arabia, Qatar, UAE, Malaysia, Brunei, and Turkey.",
      checkPrequalify: "Verify Pre-Qualification",
      viewMatrix: "Review Funding Matrix",
      tuitionCoverage: "100%",
      tuitionDesc: "Tuition Coverage",
      origins: "10+",
      originsDesc: "Student Origins",
      placements: "150+",
      placementsDesc: "Successful Placements",
      badgeTitle: "Office Abdou Rachid",
      badgeSubtitle: "Validated Government Scholarship Registry",
    },
    matrix: {
      headingBadge: "Comprehensive Program Options",
      headingTitle: "Inspect The Funding Matrix",
      headingDesc: "We believe in establishing transparent out-of-pocket expectations so students can prepare accurately before international relocation. Use our comparison below to master the parameters of your scholarship.",
      pillsSubtitle: "Click a tab below to inspect scholarship provisions instantly",
      pillsFully: "Fully Funded Programs",
      pillsPartially: "Partially Funded Programs",
      destinationsLabel: "Available Destinations:",
      provisionsLabel: "Guaranteed Provisions & Coverage:",
      requestBtn: "Request Assistance",
      preTravelTitle: "Pre-Travel Advisor",
      preTravelHeading: "Transparent Out-of-Pocket Expectation",
      preTravelDesc: "We prepare our students financially prior to departure. Use this interactive estimate table to forecast potential initial budgets.",
      estimatedFlight: "Estimated Roundtrip Flight",
      tuitionEnrol: "Tuition & Enrollment Cost",
      accommodationLabel: "On-Campus Accommodation",
      estFlightVisa: "Your Est. Flight & Visa",
      coveredLabel: "100% COVERED",
      calcsNote: "*The above calculations serve as dynamic academic projections. Visa assistance is completely bundled into all our professional student services.",
      guidanceBtn: "Get Guidance Syllabus",
      disclaimerFully: "Absolutely zero out-of-pocket tuition or flight expenses required.",
      disclaimerPartially: "*Note: Overseas roundtrip flight tickets and entry visa costs are self-funded.",
    },
    director: {
      badge: "Advisory Bio & Vision",
      title: "Meet Your Global Education Guide",
      quote: "Education opened doors for me across borders, and my mission is to open those exact same doors for you. Having successfully navigated international academic systems myself, I provide firsthand expertise to ensure your application stands out to top-tier university boards.",
      authorTitle: "Founding Director",
      credentialsTitle: "Director Credentials & Academic Record:",
      philosophyTitle: "Core Philosophy",
      philosophyQuote: "“A better world for each and every one of us.”",
      directConsultNote: "Direct consultation validated under verified academic boards.",
      verified: "Verified",
      degrees: {
        linguistics: "Master’s in English Linguistics",
        arabic: "Graduate in Arabic Language",
        literature: "Bachelor’s in English Literature",
      },
      institutions: {
        khazar: "Khazar University, Azerbaijan",
        qatar: "Qatar University",
        lome: "University of Lomé",
      },
    },
    success: {
      badge: "Historic Admission Registries",
      title: "Our Proven Academic Footprint",
      desc: "Review verified placements and accomplishments across prestigious global institutions. We bridge promising West African and Sub-Saharan origins cleanly into verified university portals.",
      allLocations: "All Locations",
      footprintSuffix: "Success Footprint",
      cohortBadge: "Country Cohort Match",
      successTitle: "Successful Footprint",
      sucessRate: "100% SUCCESS RATE",
      publicInstLabel: "Secured Public Institutions:",
      empowerScholarsLabel: "Empowered Scholar Origins:",
      saudiDesc: "Secured multiple fully funded direct placements across elite public universities. Covered items include complete tuition waivers, flight routing grants, and monthly living awards.",
      qatarDesc: "Assisted promising scholars from diverse West African and Sub-Saharan origins to register, qualify, and excel under prestigious fully funded Arabic language acquisition programs.",
      saudiTitle: "Saudi Arabia Successful Footprint",
      qatarTitle: "Qatar Successful Footprint",
      verifiedMatch: "Verified academic contract boards Match",
      studentOrigins: ["Togo", "Benin", "Chad", "Burkina Faso", "Guinea-Bissau", "Mali", "Comoros", "Ivory Coast", "Gambia"]
    },
    prep: {
      badge: "Essential Prep Syllabus",
      title: "Certified Academic & Linguistic Services",
      desc: "Successful scholarship applications depend heavily on compliant documentation and linguistic fluency. Our dedicated language and notary offices take care of the heavy lifting.",
      switchNote: "Click a language above to dynamically view its academic training and translation packages",
      durationLabel: "Duration",
      weeks: "Weeks",
      partA: "Part A",
      partB: "Part B",
      partATitle: "Sworn Legal Translations",
      partBTitle: "Interactive Academic Prep",
      validityLabel: "Legal Framework Validation",
      validityBadge: "100% Legal Validity",
      examBadge: "Prep Admission Rules",
      examTitle: "Examinations Covered & Validated",
      examDesc: "Top-ranking universities require specific accredited proofs. Our training center guides your registration for:",
      examTarget: "Target Curriculum Exams:",
      testimonialTitle: "Office Abdou Rachid Advantage",
      testimonialQuote: "My transcripts translated by Sworn Office Abdou Rachid were processed in less than 48 hours and certified for admission to Saudi Arabia!",
      testimonialAuthor: "— Diallo M., Graduate Placement",
      requestCoachingBtn: "Request Exam Coaching",
      enSlogan: "Prepare for Prestigious Programs in UAE, Malaysia, and Global Research Hubs",
      enDesc: "Our comprehensive English syllabus is engineered specifically for scholars transitioning into international academic settings. We combine rigorous test preparations (IELTS, TOEFL, DET) with certified translation protocols to make your application stand out to university boards.",
      enChecklist: [
        "Certified professional translations of high-school & university transcripts",
        "Official translation of birth certificates and police clearance reports",
        "Verification statements of academic equivalence mapped to international systems",
        "Dual-signature certified legal notary stamps accepted globally"
      ],
      enCourse: [
        "Targeted IELTS/TOEFL Academic intensive vocabulary training",
        "Advanced writing modules for personal statements & Research Proposals",
        "Simulated mock interviews modeled directly on university review boards",
        "Cultural integration & academic style guide lectures for new relocations"
      ],
      enCoverage: "Accepted in USA, UAE, Malaysia, Brunei, Turkey, and UK",
      frSlogan: "Certified Document Support & Academic Alignment for European Systems",
      frDesc: "Ensure your credentials are fully accredited and translated for French-speaking systems, European institutions, or international joint-degree programs. We deliver professional translations with certified notary certifications under high-standard deadlines.",
      frChecklist: [
        "Certified transcripts translation matching European ECTS standards",
        "Professional diploma and master thesis summary translations",
        "Notarized legal document preparation for administrative visa portals",
        "Certified stamps approved by sworn judicial translators"
      ],
      frCourse: [
        "Specialized TCF / DELF / DALF university preparation modules",
        "Academic reading comprehension with interactive grammar coaching",
        "Professional CV mapping aligning cleanly with Western European standards",
        "Live speech development to excel during European visa consult interviews"
      ],
      frCoverage: "Sworn Swahili/French certification accepted by all Consulates",
      arSlogan: "Elite Scholarship Pathways for Saudi Arabia, Qatar, and Gulf Public Universities",
      arDesc: "As deep specialists in Middle Eastern fully-funded placements, our professional Arabic suite equips Sub-Saharan and West African scholars with necessary native classical linguistic foundations (A1 to C2) and sworn bilingual translations.",
      arChecklist: [
        "Sworn Arabic translations of certificates, diplomas, and grades",
        "Full legalization coordination matching Saudi and Qatari consulate protocols",
        "Accurate bilingual transcript harmonization for theology & engineering colleges",
        "Certified seals officially recognized inside Gulf Education Ministries"
      ],
      arCourse: [
        "Classical Arabic (Fusha) grammar, vocabulary, and linguistic training",
        "Exclusive preparatory modules targeting Saudi University admission panels",
        "Direct tutoring on academic terminology used in Islamic & scientific programs",
        "Complete structural guidance for Gulf administration registration software"
      ],
      arCoverage: "Directly recognized in KSA (Saudi), Qatar, Kuwait, Oman, & UAE"
    },
    intake: {
      contactBadge: "Direct Contact",
      contactTitle: "Connect With Us Directly",
      contactDesc: "Skip the queue. Drop us an email, dial our direct lines, or visit our administration headquarters in Lomé, Togo.",
      hotlinesLabel: "WhatsApp & Support Hotlines",
      officialComms: "Official Communications",
      headquartersTitle: "Adéwi Headquarters",
      headquartersAddress: "Tokoin Doumassessé, near Baptist Church in Adéwi — Lomé, Togo.",
      trustBar: "Independent academic registry assistance. SOC-2 secure processing.",
      formBadge: "Interactive Pre-Qualification Form",
      formTitle: "Ready to Start Your Journey?",
      formDesc: "Provide your details below to instantly pre-filter your application profile before routing directly to Abdou Rachid's WhatsApp workspace.",
      fullNameLabel: "Your Full Name",
      fullNamePlaceholder: "e.g. Yao Mawuena",
      emailLabel: "Your Email Address",
      emailPlaceholder: "name@gmail.com",
      desiredDegreeLabel: "Desired Degree",
      preferredCountryLabel: "Preferred Country",
      academicBgLabel: "Academic Background (Optional)",
      academicBgPlaceholder: "e.g. Bachelor's in English from University of Lomé with honors...",
      submitBtn: "Submit & Connect on WhatsApp",
      redirecting: "Redirecting to WhatsApp...",
      bachelor: "Bachelor Program",
      master: "Master Program",
      phd: "PhD Doctorate"
    },
    footer: {
      brandVision: "We empower scholars by providing certified application assistance, fast translation turnarounds, and robust language preparation for fully and partially funded programs worldwide.",
      shortcutsTitle: "Quick Shortcuts",
      socialTitle: "Social Media",
      hqTitle: "Advising HQ",
      notaryDisclaimerTitle: "Disclaimer Notice:",
      notaryDisclaimerDesc: "Office Abdou Rachid is an independent consultancy. While we maintain a stellar success track record, scholarship awards are ultimately at the sole discretion of the hosting universities and governments.",
      rightsReserved: "Office Abdou Rachid Consultancy. All Rights Reserved.",
      terms: "Terms of Registration",
      privacy: "Privacy Regulation",
    }
  },
  FR: {
    nav: {
      matrix: "Critères des Bourses",
      director: "Rencontrez le Directeur",
      success: "Succès Confirmés",
      services: "Services Académiques",
      chatLive: "Discuter en Direct",
      applyBtn: "Demander de l'Aide",
      phone: "Téléphone Global",
      whatsapp: "Support WhatsApp",
    },
    hero: {
      ribbon: "Guide Officiel des Bourses d'Études Étrangères 2026/2027 Ouvert",
      titleStart: "Transformez vos rêves d' ",
      titleDecorated: "Éducation Globale",
      titleEnd: " en Réalité.",
      subtitle: "Accompagnement rigoureux pour les admissions en Licence, Master et Doctorat (PhD). Nous vous guidons vers des bourses entièrement et partiellement financées d'Arabe Saoudite, du Qatar, des Émirats, de Malaisie, du Brunei et de Turquie.",
      checkPrequalify: "Vérifier mon Éligibilité",
      viewMatrix: "Consulter la Matrice de Financement",
      tuitionCoverage: "100%",
      tuitionDesc: "Exonération Scolaire",
      origins: "10+",
      originsDesc: "Nationalités Accompagnées",
      placements: "150+",
      placementsDesc: "Admissions Réussies",
      badgeTitle: "Cabinet Abdou Rachid",
      badgeSubtitle: "Accompagnement Officiel Agréé pour les Bourses Gouvernementales",
    },
    matrix: {
      headingBadge: "Options Complètes des Programmes",
      headingTitle: "Consultez la Matrice des Financements",
      headingDesc: "Nous croyons à la transparence financière totale. Prenez connaissance des dépenses résiduelles afin de planifier au mieux votre relocalisation à l'international. Comparez les avantages garantis.",
      pillsSubtitle: "Cliquez sur un onglet ci-dessous pour inspecter immédiatement les couvertures",
      pillsFully: "Programmes Entièrement Financés",
      pillsPartially: "Programmes Partiellement Financés",
      destinationsLabel: "Destinations Disponibles :",
      provisionsLabel: "Avantages Directs & Couverture :",
      requestBtn: "Demander de l'Assistance",
      preTravelTitle: "Conseiller de Voyage",
      preTravelHeading: "Estimation Transparente des Coûts",
      preTravelDesc: "Nous préparons financièrement nos étudiants avant leur départ. Ajustez cette table interactive pour prévoir vos budgets initiaux.",
      estimatedFlight: "Estimation Billet d'Avion A/R",
      tuitionEnrol: "Frais de Scolarité & d’Inscription",
      accommodationLabel: "Hébergement Universitaire",
      estFlightVisa: "Vol & Visa Estimés",
      coveredLabel: "100% PRIS EN CHARGE",
      calcsNote: "*Les calculs ci-dessus constituent des projections académiques interactives. L'assistance visa est entièrement incluse dans nos forfaits professionnels.",
      guidanceBtn: "Recevoir le Programme complet",
      disclaimerFully: "Absolument aucun frais de scolarité ou de billet d'avion résiduel requis.",
      disclaimerPartially: "*Note : Le billet d'avion international et les frais de visa d'entrée restent à la charge de l'étudiant.",
    },
    director: {
      badge: "Biographie & Vision du Directeur",
      title: "Votre Guide d'Éducation Internationale",
      quote: "L'éducation m'a ouvert des portes à travers le monde, et ma mission quotidienne est de vous ouvrir exactement les mêmes opportunités. Ayant moi-même navigué à travers les méandres académiques internationaux, je vous apporte une expertise vécue de l'intérieur.",
      authorTitle: "Directeur Fondateur",
      credentialsTitle: "Diplômes & Parcours Académique du Directeur :",
      philosophyTitle: "Philosophie Centrale",
      philosophyQuote: "« Un monde meilleur pour chacun d'entre nous. »",
      directConsultNote: "Consultation directe certifiée et conforme aux exigences des jurys académiques.",
      verified: "Agréé",
      degrees: {
        linguistics: "Master en Linguistique Anglaise",
        arabic: "Diplômé du Programme de Langue Arabe",
        literature: "Licence en Littérature Anglaise",
      },
      institutions: {
        khazar: "Université Khazar, Azerbaïdjan",
        qatar: "Université du Qatar",
        lome: "Université de Lomé",
      },
    },
    success: {
      badge: "Registres de Placement Historiques",
      title: "Notre Empreinte Académique Établie",
      desc: "Consultez les admissions vérifiées et réussies dans les plus grandes universités du monde. Nous propulsons avec rigueur les dossiers d'Afrique de l'Ouest et subsaharienne vers les portails universitaires officiels.",
      allLocations: "Toutes les Destinations",
      footprintSuffix: "Empreinte",
      cohortBadge: "Admissions par Pays",
      successTitle: "Placements Réussis",
      sucessRate: "100% REUSSITE ADMISSION",
      publicInstLabel: "Universités Publiques Intégrées :",
      empowerScholarsLabel: "Origine des Étudiants Accompagnés :",
      saudiDesc: "Obtention de multiples bourses complètes régulières au sein des plus grandes universités publiques. Couverture totale : frais de scolarité, billet d'avion de rapatriement annuel et versement mensuel d'indemnité de vie.",
      qatarDesc: "Accompagnement ciblé d'étudiants issus du Togo, Bénin, Tchad, etc., pour s'inscrire, se qualifier et exceller dans les programmes d'apprentissage linguistique intense financés par l'État du Qatar.",
      saudiTitle: "Placements en Arabie Saoudite",
      qatarTitle: "Bourses d'Apprentissage au Qatar",
      verifiedMatch: "Validations conformes aux accords des jurys ministériels",
      studentOrigins: ["Togo", "Bénin", "Tchad", "Burkina Faso", "Guinée-Bissau", "Mali", "Comores", "Côte d'Ivoire", "Gambie"]
    },
    prep: {
      badge: "Syllabus de Préparation Essentiel",
      title: "Coaching Universitaire & Traductions Assermentées",
      desc: "Une admission internationale dépend de la conformité de vos diplômes et de vos compétences linguistiques. Notre cabinet assure vos traductions certifiées et votre entraînement.",
      switchNote: "Cliquez sur une langue ci-dessus pour afficher ses cours académiques et services de traduction",
      durationLabel: "Durée",
      weeks: "Semaines",
      partA: "Partie A",
      partB: "Partie B",
      partATitle: "Traductions Légales Assermentées",
      partBTitle: "Préparation Académique Interactive",
      validityLabel: "Conformité Légale Internationale",
      validityBadge: "100% Validité Légale",
      examBadge: "Règles Critères Admission",
      examTitle: "Examens Préparés & Validés",
      examDesc: "Les meilleures facultés exigent des équivalences précises. Notre centre de formation assure votre accompagnement pour :",
      examTarget: "Examens Requis par les Universités :",
      testimonialTitle: "L'Avantage Privilégié Abdou Rachid",
      testimonialQuote: "Mes relevés traduits par le bureau assermenté Office Abdou Rachid ont été livrés en moins de 48 heures et d'ores et déjà enregistrés en Arabie Saoudite !",
      testimonialAuthor: "— Diallo M., Étudiant admis",
      requestCoachingBtn: "S'inscrire au Coaching",
      enSlogan: "Préparez vos admissions vers les Émirats, la Malaisie et l'Europe britannique",
      enDesc: "Un encadrement d'anglais intensif développé pour l'intégration universitaire en milieu anglophone. Nous associons une préparation intensive aux examens (IELTS, TOEFL, DET) et des traductions professionnelles rigoureuses.",
      enChecklist: [
        "Traduction assermentée professionnelle des bulletins et relevés scolaires",
        "Traduction officielle des casiers judiciaires et actes de naissance",
        "Établissement des correspondances d'équivalence académique",
        "Cachet légal certifiant la conformité du secrétaire traducteur"
      ],
      enCourse: [
        "Spécificités lexicales académiques pour préparation intense à l'IELTS",
        "Rédaction de lettres de motivation, de projets de recherche et CV",
        "Simulations régulières d'entretiens devant les comités de bourse",
        "Acclimatation culturelle et standards de rédaction britanniques / américains"
      ],
      enCoverage: "Directement validé aux USA, Émirats (EAU), Malaisie, Brunei et UK",
      frSlogan: "Conformité Administrative & Insertion Académique Européenne",
      frDesc: "Pour des études en pays francophones ou programmes conjoints d'universités occidentales, faites traduire officiellement votre dossier avec notre équipe habilitée sous délais garantis.",
      frChecklist: [
        "Traduction de diplômes et bulletins alignés au barème ECTS européen",
        "Traduction certifiée de mémoires professionnels et lettres académiques",
        "Constitution certifiée des dossiers pour portails administratifs nationaux",
        "Sceau officiel délivré par nos traducteurs certifiés"
      ],
      frCourse: [
        "Entraînements complets aux tests obligatoires TCF / DELF / DALF",
        "Amélioration de la prononciation et corrections grammaticales régulières",
        "Mise aux normes occidentales du CV d'études supérieures",
        "Entretiens blancs pour débloquer les examens de visa consulaires"
      ],
      frCoverage: "Certification bilingue agréée déposée auprès des Ambassades",
      arSlogan: "Filières d'Excellence pour l'Arabie Saoudite et les Facultés Publiques du Golfe",
      arDesc: "Spécialistes reconnus de l'intégration au Moyen-Orient, nous formons les étudiants d'Afrique de l'Ouest aux bases linguistiques de la langue classique (arabe littéraire Fusha, niveaux A1 à C2) avec traductions certifiées.",
      arChecklist: [
        "Traductions en arabe classique des diplômes et relevés académiques",
        "Légalisation coordonnée auprès des ambassades d'Arabie et du Qatar",
        "Ajustement bilingue transcrit fidèlement pour facultés d'ingénierie et de théologie",
        "Sceaux certifiés de traducteurs directement reconnus par les ministères du Moyen-Orient"
      ],
      arCourse: [
        "Enseignement complet de la grammaire, éloquence et rhétorique arabe",
        "Entraînement direct aux questions des jurys de sélection des Émirats/KSA",
        "Vocabulaire théologique, scientifique et littéraire de l'arabe classique",
        "Prise en main guidée des logiciels officiels d'admission de chaque pays"
      ],
      arCoverage: "Directement accepté en Arabie (KSA), Qatar, Koweït, Oman, EAU"
    },
    intake: {
      contactBadge: "Contact Direct",
      contactTitle: "Échangez Immédiatement",
      contactDesc: "Évitez l'attente administrative. Écrivez-nous par e-mail, téléphonez-nous, ou passez nous voir à notre siège de Lomé, au Togo.",
      hotlinesLabel: "Lignes WhatsApp & Téléphones",
      officialComms: "Communications Officielles",
      headquartersTitle: "Siège Social Adéwi",
      headquartersAddress: "Tokoin Doumassessé, près de l'Église Baptiste à Adéwi — Lomé, Togo.",
      trustBar: "Aide à l'inscription indépendante agréée. Traitement conforme et sécurisé.",
      formBadge: "Formulaire de Pré-sélection Interactif",
      formTitle: "Prêt à Commencer l'Aventure ?",
      formDesc: "Saisissez vos informations ci-dessous pour analyser votre profil académique avant d'être redirigé instantanément vers la ligne WhatsApp exclusive d'Abdou Rachid.",
      fullNameLabel: "Votre Nom Complet",
      fullNamePlaceholder: "ex. Yao Mawuena",
      emailLabel: "Votre Adresse Email",
      emailPlaceholder: "nom@gmail.com",
      desiredDegreeLabel: "Diplôme visé",
      preferredCountryLabel: "Pays préféré",
      academicBgLabel: "Parcours Scolaire (Optionnel)",
      academicBgPlaceholder: "ex. Licence en Anglais à l'Université de Lomé avec mention majeure...",
      submitBtn: "Soumettre & Ouvrir WhatsApp",
      redirecting: "Redirection vers WhatsApp en cours...",
      bachelor: "Licence (Bachelor)",
      master: "Master",
      phd: "Classe Doctorale (PhD)"
    },
    footer: {
      brandVision: "Nous propulsons le parcours de nos étudiants via des conseils certifiés, des traductions ultra-rapides et des cours linguistiques rigoureux pour l'admission aux bourses mondiales.",
      shortcutsTitle: "Raccourcis Utiles",
      socialTitle: "Réseaux Sociaux",
      hqTitle: "Cabinet de Lomé",
      notaryDisclaimerTitle: "Note Importante :",
      notaryDisclaimerDesc: "Le Cabinet Office Abdou Rachid est un cabinet de conseil indépendant. Malgré un excellent taux de réussite, l'octroi des bourses d'études reste à la seule appréciation des jurys souverains des pays d'accueil.",
      rightsReserved: "Cabinet Office Abdou Rachid. Tous droits réservés.",
      terms: "Conditions de Service",
      privacy: "Confidentialité & Données",
    }
  },
  AR: {
    nav: {
      matrix: "جدول المنح الدراسية",
      director: "المستشار العام",
      success: "سجلات القبول",
      services: "الخدمات الأكاديمية",
      chatLive: "المحادثة الفورية",
      applyBtn: "تقديم طلب المساعدة",
      phone: "الاتصال الدولي",
      whatsapp: "دعم واتساب",
    },
    hero: {
      ribbon: "فتح باب التسجيل الرسمي لتوجيه المنح الدراسية الدولية لعام 2026/2027",
      titleStart: "حول أحلام ",
      titleDecorated: "التعليم العالمي",
      titleEnd: " إلى واقع ملموس.",
      subtitle: "مساعدة شاملة خالية من التعقيد للتقديم على برامج البكالوريوس، الماجستير، والدكتوراه. نوجهك بمهنية نحو الفرص الممولة بالكامل والجزئية في المملكة العربية السعودية، قطر، الإمارات، ماليزيا، بروناي، وتركيا.",
      checkPrequalify: "التحقق من التأهيل المسبق",
      viewMatrix: "مراجعة مصفوفة التمويل والرسوم",
      tuitionCoverage: "100%",
      tuitionDesc: "تغطية الرسوم الدراسية",
      origins: "10+",
      originsDesc: "جنسيات الطلاب",
      placements: "150+",
      placementsDesc: "قبول جامعي ناجح",
      badgeTitle: "مكتب عبد الرشيد",
      badgeSubtitle: "السجل المعتمد لتوجيه المنح الحكومية المتميزة",
    },
    matrix: {
      headingBadge: "خيارات البرنامج الشاملة",
      headingTitle: "تصفح مصفوفة التمويل والمنح",
      headingDesc: "نؤمن بأهمية الشفافية ووضع التوقعات بوضوح قبل مغادرتك دولتك. استخدم جدول المقارنة التفاعلي أدناه لمعرفة معايير منحتك الدراسية بدقة.",
      pillsSubtitle: "انقر فوق أحد الأقسام أعلاه لمراجعة المخصصات والضمانات فورًا",
      pillsFully: "برامج ممولة بالكامل",
      pillsPartially: "برامج ممولة جزئيًا",
      destinationsLabel: "الوجهات المتاحة للاختيار:",
      provisionsLabel: "المخصصات والضمانات الشاملة:",
      requestBtn: "طلب المساعدة الأكاديمية",
      preTravelTitle: "مستشار ما قبل السفر",
      preTravelHeading: "توقع الشفافية المالية التامة",
      preTravelDesc: "تأهيل الطلاب ماليًا قبل المغادرة. استخدم هذا المحاكي التفاعلي لتقدير وضبط ميزانيتك الأولية.",
      estimatedFlight: "تكلفة تذكرة الطائرة المقدرة الذهاب والعودة",
      tuitionEnrol: "تكاليف الدراسة والتسجيل",
      accommodationLabel: "السكن الجامعي المجاني",
      estFlightVisa: "الطيران والتأشيرة التقديرية",
      coveredLabel: "مغطى بنسبة 100%",
      calcsNote: "*الحسابات أعلاه تخدم كإسقاط أكاديمي مرن وتفاعلي. خدمات تيسير تأشيرات الدخول مدمجة بالكامل في جميع باقاتنا.",
      guidanceBtn: "الحصول على خطة التوجيه",
      disclaimerFully: "لا يتطلب دفع أي رسوم دراسية أو تكاليف طيران من جيبك الخاص نهائيًا.",
      disclaimerPartially: "*ملاحظة: تذاكر الطيران وتكاليف تأشيرة الدخول تكون ممولة ذاتيًا من الطالب.",
    },
    director: {
      badge: "السيرة الذاتية ورؤية المستشار",
      title: "تعرف على مرشدك الأكاديمي الدولي",
      quote: "لقد فتح لي التعليم آفاقًا واسعة عبر دول العالم، ورسالتي في هذا المكتب هي فتح تلك الأبواب الثمينة أمامك. بصفتي خبيراً بالمؤسسات الدولية، أضمن تميز وجودة ملفك الأكاديمي أمام لجان القبول الجامعية.",
      authorTitle: "المدير العام والتنفيذي",
      credentialsTitle: "سجل المؤهلات الأكاديمية للمدير العام:",
      philosophyTitle: "فلسفتنا الجوهرية",
      philosophyQuote: "«عالم أفضل بكل جهد لكل فرد منا.»",
      directConsultNote: "تواصل مباشر متوافق تماماً مع متطلبات مجالس الجامعات المعتمدة.",
      verified: "معتمد",
      degrees: {
        linguistics: "ماجستير في اللسانيات الإنجليزية",
        arabic: "خريج برنامج اللغة العربية لغير الناطقين بها",
        literature: "بكالوريوس في الأدب الإنجليزي",
      },
      institutions: {
        khazar: "جامعة خزار، أذربيجان",
        qatar: "جامعة قطر، الدوحة",
        lome: "جامعة لومي، توغو",
      },
    },
    success: {
      badge: "سجلات القبول والنجاح التاريخية",
      title: "بصمتنا الأكاديمية الراسخة عبر العالم",
      desc: "راجع سجل المقبولين الموثق في كبريات الجامعات الحكومية. نحن نوفر جسراً متيناً لطلاب دول غرب إفريقيا وإفريقيا جنوب الصحراء بنجاح وشفافية.",
      allLocations: "جميع الوجهات الجامعية",
      footprintSuffix: "بصمة النجاح",
      cohortBadge: "توزيع المقبولين بالدولة",
      successTitle: "القبولات الموثقة الناجحة",
      sucessRate: "نسبة قبول 100%",
      publicInstLabel: "مؤسسات حكومية تم تيسر القبول بها:",
      empowerScholarsLabel: "مواطن الطلاب المقبولين الموثقة:",
      saudiDesc: "تأمين قبولات كاملة وتغطية تامة في أرقى الجامعات السعودية العامة. تشتمل على الإعفاء الكامل من الرسوم، تذاكر السفر وتخصيص رواتب معيشية شهرية منتظمة.",
      qatarDesc: "تسيير ودعم المتقدمين من دول الساحل الإفريقي كتوغو وبنين وغيرها للتسجيل والقبول ببرنامج دراسة اللغة العربية التنافسي الممول بالكامل بدولة قطر بامتياز.",
      saudiTitle: "القبولات في المملكة العربية السعودية",
      qatarTitle: "برامج المنحة اللغوية بدولة قطر",
      verifiedMatch: "تأهيل وتوجيه رسمي مستند إلى العقود الوزارية الأكاديمية",
      studentOrigins: ["توغو", "بنين", "تشاد", "بوركينا فاسو", "غينيا بيساو", "مالي", "جزر القمر", "ساحل العاج", "غامبيا"]
    },
    prep: {
      badge: "دليل التأهيل والمواد التدريبية",
      title: "التطوير الأكاديمي والترجمة المحلفة المعتمدة",
      desc: "يعتمد قبول طلب ترشحك للجامعات الكبرى على دقة وصحة ترجمة أوراقك ومعرفتك اللغوية. مكتب عبد الرشيد يتكفل بكافة المعاملات القانونية والتطويرية.",
      switchNote: "انقر فوق اللغة أعلاه لمشاهدة التفاصيل المخصصة لدورات التدريب والترجمة المحلفة لها بوضوح",
      durationLabel: "المدة",
      weeks: "أسابيع",
      partA: "الجزء أ",
      partB: "الجزء ب",
      partATitle: "الترجمة الرسمية المحلفة والتوثيق",
      partBTitle: "التأهيل الأكاديمي التفاعلي المباشر",
      validityLabel: "المعايير المعتمدة دولياً",
      validityBadge: "ترجمة رسمية وتوثيق معتمد قانونياً 100%",
      examBadge: "شروط وضوابط اختبارات القبول",
      examTitle: "الاختبارات الدولية المغطاة والموثقة",
      examDesc: "تشترط الجامعات الرائدة مستندات إثبات جدارية محددة. يقدم المركز تأهيلاً مكثفاً للامتحانات التالية :",
      examTarget: "الاختبارات والمعايير المطلوبة بالجامعات:",
      testimonialTitle: "امتياز حاسم من مكتب عبد الرشيد",
      testimonialQuote: "تمت ترجمة ملفي الأكاديمي بالكامل وترشيحه للمنحة السعودية خلال أقل من 48 ساعة بواسطة مكتب عبد الرشيد المعتمد بنجاح!",
      testimonialAuthor: "— دياب م.، طالب مقبول بالمنحة",
      requestCoachingBtn: "التسجيل في التدريب الأكاديمي",
      enSlogan: "تأهيل متميز للجامعات الكبرى بالإمارات، ماليزيا والمراكز البحثية العالمية",
      enDesc: "منهاج لغوي إنجليزي مكثف تم تصميمه خصيصاً للطلاب كخطوة انتقال أكاديمية وسلسة. نجمع بين الإعداد لاختبارات (IELTS, TOEFL, DET) مع التوثيق المحلف لملفك الجامعي.",
      enChecklist: [
        "ترجمة محلفة رسمية لكافة كشوف النقاط والشهادات الدراسية",
        "الترجمة المعتمدة لشهادات الميلاد والتقارير الجنائية (الفيش والتشبيه)",
        "إعداد ومراجعة خطابات مطابقة المعادلات الأكاديمية للدول والمؤسسات",
        "الأختام الرسمية المزدوجة والتوقيعات المعترف بها في السفارات دولياً"
      ],
      enCourse: [
        "تعليم مكثف وموجه للمصطلحات الأكاديمية لاختبار IELTS بامتياز",
        "محاضرات متقدمة في كتابة السيرة الذاتية الأكاديمية وخطط البحث العلمي المقبولة",
        "إجراء مقابلات تجريبية تحاكي مقابلات لجان فحص واختيار الطلاب بالجامعات",
        "التوجيه الثقافي وفهم متطلبات المعايير الغربية والبريطانية الحديثة"
      ],
      enCoverage: "مقبول بالولايات المتحدة، الإمارات، ماليزيا، بروناي، تركيا، والمملكة المتحدة",
      frSlogan: "الدعم الإداري والترجمة القانونية المعتمدة للمؤسسات الأوروبية",
      frDesc: "لضمان تصفح واعتماد ملفك الأكاديمي بالدول الناطقة بالفرنسية أو البرامج المشتركة، ترجم مستنداتك باحترافية تامة تحت إشراف نخبة من المختصين في شروط القبول الجامعي الأوروبي.",
      frChecklist: [
        "إعداد الملفات والشهادات وفقاً لنظام المعادلة وحساب الساعات الأوروبية ECTS",
        "ترجمة الأطروحات العلمية، ملخصات البحوث والرسائل الأكاديمية المرجعية",
        "توثيق المستندات والخطابات لمنصات تقديم وتنسيق التأشيرات (الفيزا) الرسمية",
        "إصدار الأختام المصدّقة والمعترف بها من لجان المحلفين بالخارج"
      ],
      frCourse: [
        "دورات تحضيرية مكثفة واختبارات تجريبية لامتحانات TCF / DELF / DALF",
        "مهارات القراءة الأكاديمية والتدريب على التصحيح النحوي الفوري",
        "إعادة هيكلة وتصميم السيرة الذاتية بما يطابق نظام التبادل والتوظيف الأوروبي",
        "التدريب اللفظي المحاكي لمقابلات الحصول على التأشيرة بسفارات دول شنغن"
      ],
      frCoverage: "ترجمة معتمدة معترف بها لدى القنصليات والممثليات الدبلوماسية للأجانب",
      arSlogan: "مسارات نخبة متميزة للقبول والمطابقة بالمملكة العربية السعودية، قطر وجامعات الخليج",
      arDesc: "بصفتنا خبراء متخصصين في الشراكات الشرق أوسطية الممولة تماً، يمنحك قسمنا اللغوي الأسس اللازمة للفصحى (تأهيل من A1 إلى C2) مع الترجمة الثنائية المعتمدة لضمان القبول المباشر.",
      arChecklist: [
        "ترجمة ثنائية دقيقة معتمدة للشهادات والتقارير الدراسية للغة العربية الفصحى",
        "إجراء عمليات مطابقة كاملة للملفات وفقاً لمتطلبات سفارات السعودية وقطر",
        "تنظيم ملفات وكشوف النقاط لتلائم كليات الشريعة والدراسات الإسلامية والهندسة والعلوم",
        "أختام محلفة موثقة رسمياً ومقبولة فوراً داخل وزارات التعليم بالدول الخليجية"
      ],
      arCourse: [
        "تعليم النحو والصرف والبلاغة العربية والتدرب على المحادثة السليمة",
        "شرح تدريبي مخصص لأسئلة ومحاور لجان القول بجامعات السعودية (جامعة المدينة وغيرها)",
        "تعليم مصطلحات البحث العلمي، الفقهي والأدبي المناسب لكل تخصص أكاديمي",
        "التدريب والدعم الفني الكامل لكيفية استخدام وأنظمة بوابات التقديم والقبول الحكومية"
      ],
      arCoverage: "معترف به ومقبول فوراً في السعودية، قطر، الكويت، عمان، والإمارات"
    },
    intake: {
      contactBadge: "اتصال مباشر",
      contactTitle: "تواصل معنا فوراً دون انتظار",
      contactDesc: "تجنب قائمة الانتظار الطويلة. أرسل لنا بريدًا إلكترونيًا، أو اتصل بهواتفنا المباشرة، أو تفضل بزيارة المقر الإداري لخدمات التوجيه والترجمة بلومي، توغو.",
      hotlinesLabel: "الخطوط الساخنة الفورية وواتساب",
      officialComms: "المراسلات الرسمية والاتفاقات",
      headquartersTitle: "المقر الإداري - أديوي",
      headquartersAddress: "توكوين دوماسي، بالقرب من الكنيسة المعمدانية في أديوي — لومي، جمهورية توغو.",
      trustBar: "خدمة توجيه أكاديمية مستقلة وموثقة. معالجة آمنة وسريعة لكافة الطلبات.",
      formBadge: "استمارة الترشيح والتأهيل التفاعلية المباشرة",
      formTitle: "هل أنت مستعد لبدء مسيرتك الدولية؟",
      formDesc: "أدخل بياناتك الأكاديمية الأساسية أدناه لتصفية طلبك وتنسيقه فوراً قبل إعادة توجيهك بأمان لخط واتساب المباشر للمستشار عبد الرشيد.",
      fullNameLabel: "الاسم الكامل للطلب",
      fullNamePlaceholder: "مثال: ياو ماوينا",
      emailLabel: "عنوان بريدك الإلكتروني",
      emailPlaceholder: "name@gmail.com",
      desiredDegreeLabel: "الدرجة العلمية المطلوبة",
      preferredCountryLabel: "الدولة الجامعية المفضلة",
      academicBgLabel: "مؤهلاتك وتخصصك الدراسي الحالي (اختياري)",
      academicBgPlaceholder: "مثال: بكالوريوس آداب لغة إنجليزية من جامعة لومي بتقدير ممتاز...",
      submitBtn: "إرسال البيانات والتواصل عبر واتساب",
      redirecting: "جاري إعادة توجيهك لخط واتساب...",
      bachelor: "برنامج البكالوريوس",
      master: "برنامج الماجستير",
      phd: "أبحاث الدكتوراه (PhD)"
    },
    footer: {
      brandVision: "نحن نمكن الطلاب والطامحين من خلال تيسير القبول المعتمد وتوفير الترجمات الفورية والتحضير اللغوي المتماسك للمنح المتميزة.",
      shortcutsTitle: "روابط سريعة ومختصرات",
      socialTitle: "حسابات التواصل الاجتماعي",
      hqTitle: "المقر الإداري بلومي",
      notaryDisclaimerTitle: "إخلاء المسؤولية القانونية:",
      notaryDisclaimerDesc: "مكتب عبد الرشيد للاستشارات الأكاديمية هو جهة استشارية مستقلة. على الرغم من سجل نجاحاتنا الباهر والموثق، فإن منح القبول وتخصيص الب scholarships يبقى خاضعاً بالكامل لتقدير وقرار الجامعات واللجان الحكومية المستضيفة.",
      rightsReserved: "مكتب عبد الرشيد للاستشارات والتوجيه الدولي. جميع الحقوق محفوظة.",
      terms: "شروط التسجيل والاستخدام",
      privacy: "سياسة الخصوصية وحماية البيانات والأوراق",
    }
  }
};
