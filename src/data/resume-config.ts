import type { ResumeConfig } from './types';

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Clément Jeanjean',
    photoBackEmoji: '🧬',
    title: {
      fr: 'Ingénieur INSA Génie Biologique',
      en: 'Engineer in biological engineering',
    },
    subtitle: {
      fr: 'Spécialisé en bioinformatique',
      en: 'Specialized in bioinformatics',
    },
    location: 'Aubais, Gard (30), France',
  },

  seo: {
    title: 'Clément Jeanjean — Ingénieur INSA Génie Biologique',
    description: 'CV interactif de Clément Jeanjean, ingénieur INSA en génie biologique spécialisé en bioinformatique.', // Chaîne simple
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'linkedin', label: 'Clément Jeanjean', href: 'https://www.linkedin.com/in/clément-jeanjean-14a28b200' },
    { type: 'email', label: 'jeanjean@insa-toulouse.fr' },
    { type: 'phone', label: '+33 6 34 68 21 29' },
    { type: 'location', label: 'Aubais, Gard (30), France' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français - ', en: 'French - ' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais - ', en: 'English - ' }, level: { fr: 'C1 (TOEIC 970/990)', en: 'C1 (TOEIC 970/990)' } },
        { name: { fr: 'Espagnol - ', en: 'Spanish - ' }, level: { fr: 'B2', en: 'B2' } },
      ],
    },
    {
      title: { fr: 'Bioinformatique', en: 'Bioinformatics' },
      type: 'badges',
      items: [
        { name: 'R' },
        { name: 'Python' },
        { name: 'Bash' },
        { name: 'MATLAB' },
        { name: 'Snakemake' },
      ],
    },
    {
      title: { fr: 'Biologie structurale', en: 'Structural Biology' },
      type: 'badges',
      items: [
        { name: 'PyMOL' },
        { name: 'AlphaFold' },
        { name: 'DockRMSD' },
        { name: 'ConSurf' },
      ],
    },
    {
      title: { fr: 'Outils & Méthodologies', en: 'Tools & Methodologies' },
      type: 'badges',
      items: [
        { name: 'GitHub' },
        { name: 'GitLab' },
        { name: 'Zotero' },
        { name: 'Labview' },
        { name: 'ConSurf' },
      ],
    },
    {
      title: { fr: 'Biologie moléculaire', en: 'Molecular Biology' },
      type: 'text',
      items: [
        { name: { fr: 'PCR, CRISPR/Cas9, RNA-Seq', en: 'PCR, CRISPR/Cas9, RNA-Seq' } },
      ],      
    },
    {
      title: { fr: 'Caractérisation de biomolécules', en: 'Biomolecule Characterization' },
      type: 'text',
      items: [
        { name: { fr: 'Chromatographie, Électrophorèse, Spectroscopie, RMN', en: 'Chromatography, Electrophoresis, Spectroscopy, RMN' } },
      ],
    },
    {
      title: { fr: 'Culture cellulaire', en: 'Cell Culture' },
      type: 'text',
      items: [
        { name: { fr: 'Préparation des milieux de culture, Repiquage, Suivi de croissance', en: 'Preparation of culture medium, subculturing, growth monitoring' } },
      ],
    },
    {
      title: { fr: 'Soft Skills', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Analyse, Communication, Organisation, Travail d\'équipe', en: 'Analysis, Communication, Organization, Teamwork' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'cirad',
      company: { fr: 'Cirad', en: 'Cirad' },
      role: { fr: 'Stage — Identification de génomes ancestraux par approche K-mers', en: 'Internship — Identification of ancestral genomes using K-mers' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '2025 (6 mois)', en: '2025 (6 months)' },
      description: {
        fr: 'Nettoyage, analyse et visualisation de données Whole Genome Sequencing (11 espèces d\'ignames).',
        en: 'Cleaning, analysis, and visualization of Whole Genome Sequencing data (11 yam species).',
      },
      techs: ['R', 'Python', 'Bash', 'K-mers'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Projet de recherche sur l\'hybridation entre espèces végétales.',
          en: 'Research project on hybridization between plant species.',
        },
        tasks: {
          fr: [
            'Analyse de données génomiques au format fastq.',
            'Visualisation des résultats pour mise en évidence des hybridations.',
          ],
          en: [
            'Analysis of genomic data in fastq format.',
            'Visualization of results to highlight hybridizations.',
          ],
        },
        env: {
          fr: 'R / Python / Bash / SLURM',
          en: 'R / Python / Bash / SLURM',
        },
      },
    },
    {
      id: 'ird',
      company: { fr: 'IRD', en: 'IRD' },
      role: { fr: 'Stage — Développement de deux applications R Shiny', en: 'Internship — Development of two R Shiny applications' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '2024 (4 mois)', en: '2024 (4 months)' },
      description: {
        fr: 'Création d\'une application d\'harmonisation de données institutionnelles et d\'une application de cartographie des comportements d\'oiseaux marins.',
        en: 'Development of an application for harmonizing institutional data and an application for mapping seabird behavior.',
      },
      techs: ['R', 'R Shiny'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Projet de valorisation des données scientifiques.',
          en: 'Project to enhance scientific data.',
        },
        tasks: {
          fr: [
            'Conception et développement d\'outils interactifs pour la visualisation de données.',
            'Collaboration avec des chercheurs pour répondre aux besoins analytiques.',
          ],
          en: [
            'Design and development of interactive tools for data visualization.',
            'Collaboration with researchers to meet analytical needs.',
          ],
        },
        env: {
          fr: 'R / R Shiny',
          en: 'R / R Shiny',
        },
      },
    },
    {
      id: 'insa-admin',
      company: { fr: 'INSA Toulouse', en: 'INSA Toulouse' },
      role: { fr: 'Agent administratif', en: 'Administrative Agent' },
      type: { fr: 'CDD', en: 'Fixed-term contract' },
      period: { fr: 'Juillet 2023 - Septembre 2023', en: 'July 2023 - September 2023' },
      description: {
        fr: 'Inscription administrative des nouveaux étudiants, gestion des dossiers et communication.',
        en: 'Administrative registration of new students, file management, and communication.',
      },
      techs: [],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Travail en équipe de 10 vacataires.',
          en: 'Work in a team of 10 temporary staff.',
        },
        tasks: {
          fr: [
            'Validation des dossiers étudiants.',
            'Correspondance par email et téléphone.',
          ],
          en: [
            'Validation of student files.',
            'Email and phone correspondence.',
          ],
        },
        env: {
          fr: 'Suite Office / Gestion administrative',
          en: 'Office Suite / Administrative management',
        },
      },
    },
    {
      id: 'club-bd',
      company: { fr: 'Amicale des élèves INSA Toulouse', en: 'INSA Toulouse Student Association' },
      role: { fr: 'Président du club BD', en: 'President of the Comics Club' },
      type: { fr: 'Bénévolat', en: 'Volunteering' },
      period: { fr: 'Juillet 2022 - Février 2024', en: 'July 2022 - February 2024' },
      description: {
        fr: 'Gestion du stock de BD, conception d\'affiches et communication sur les réseaux sociaux.',
        en: 'Management of the comic book stock, poster design, and social media communication.',
      },
      techs: [],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Animation d\'un club étudiant de 50+ membres.',
          en: 'Leadership of a student club with 50+ members.',
        },
        tasks: {
          fr: [
            'Organisation d\'événements et enrichissement du stock.',
            'Création de supports de communication visuelle.',
          ],
          en: [
            'Organization of events and stock enrichment.',
            'Creation of visual communication materials.',
          ],
        },
        env: {
          fr: 'Canva / Réseaux sociaux',
          en: 'Canva / Social media',
        },
      },
    },
  ],

  education: [
    {
      school: { fr: 'INSA Toulouse', en: 'INSA Toulouse' },
      degree: { fr: 'Diplôme d\'ingénieur — Génie Biologique', en: 'Engineering Degree — Biological Engineering' },
      specialty: { fr: 'Spécialité Biologie Computationnelle', en: 'Specialty in Computational Biology' },
      period: '2020 - 2025',
    },
    {
      school: { fr: 'Linköping University (Suède)', en: 'Linköping University (Sweden)' },
      degree: { fr: 'Semestre Erasmus — Science et Ingénierie', en: 'Erasmus Semester — Science and Engineering' },
      specialty: { fr: 'Mathématiques, Biologie Moléculaire, Conception', en: 'Mathematics, Molecular Biology, Design' },
      period: '2022 - 2023',
    },
    {
      school: { fr: 'Lycée Polyvalent Victor Hugo (Lunel)', en: 'Victor Hugo High School (Lunel)' },
      degree: { fr: 'Baccalauréat S SVT, spécialité mathématiques', en: 'High School Diploma in Life Sciences, Math specialty' },
      period: '2019 - 2020',
    },
  ],

  hobbies: [
    {
      title: { fr: 'BD et Illustration', en: 'Comics and Illustration' },
      details: [
        { fr: 'Auto-apprentissage en narration et langage visuel', en: 'Self-taught in storytelling and visual language' },
      ],
    },
    {
      title: { fr: 'Échecs (2009-2021)', en: 'Chess (2009-2021)' },
      details: [
        { fr: 'Club et compétition. Capacités analytiques, stratégiques, d'anticipation, de dépassement de soi, esprit d'équipe', en: 'Club and tournaments. Analytical and strategic mindset, anticipatory skills, team spirit, self improvement.' },
      ],
    },
    {
      title: { fr: 'Poterie (2012-2020)', en: 'Clay modeling (2012-2020)' },
      details: [
        { fr: 'Activité manuelle, créativité, patience et minutie', en: 'Manual activity, creativity, patience and meticulousness' },
      ],
    },
    {
      title: { fr: 'Tennis (2008-2018)', en: 'Tennis (2008-2018)' },
      details: [
        { fr: 'Pratique en club et compétitions locales en équipe', en: 'Club practice and local team tournaments' },
      ]
    }
  ],

  theme: {
    preset: 'forest',
  },

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCES' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'other tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech. env:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences for more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
};
