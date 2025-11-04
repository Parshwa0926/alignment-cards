export const categories = [

{
  "code": "AP", 
  "name": "Alignment Principles", 
  "pathology": "normative void", 
  "color": "#E6FFE9",
  "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
}
];


export const cards = [
  
  {
  "category": "AP",
  "name": "Beneficence",
  "definition": "Act to promote the well-being of others.",
  "human": "Seeking to improve others' conditions, not just avoid harm.",
  "organizational": "Pursuing mission outcomes that serve societal good.",
  "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
  "machine": "Designing systems that anticipate and promote human flourishing.",
  "failureModes": {
    "human": "A person drives in a manner that causes traffic backups for others.",
    "organizational": "The classic movie plot where a rapacious billionaire threatens civilation to enrich his company.",
    "professional": "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
    "machine": "The machine consumes all the world's resources to create as many paperclips as it can."
  }
  },
  { 
    "category": "AP", 
    "name": "Justice", 
    "definition": "Act to ensure fairness, equity, and impartiality", 
    "human": "Treating others without bias or favoritism, ensuring all people have equal access to opportunities.", 
    "organizational": "Implementing policies that distribute resources and responsibilities fairly across stakeholders", 
    "professional": "Making judgments based on merit and need rather than personal interest.", 
    "machine": "Ensuring algorithms make equitable decisions and do not reinforce discrimination or bias.",
    "failureModes": {
      "human": "A manager promotes a friend over a more qualified candidate.",
      "organizational": "A company’s hiring algorithm disproportionately rejects applicants from minority groups.",
      "professional": "An expert allocates resources to wealthier clients while neglecting underserved communities.",
      "machine": "A predictive policing system targets certain neighborhoods unfairly due to biased data."
    }
  },
  { 
    "category": "AP", 
    "name": "Non-maleficence", 
    "definition": "Avoid causing harm or unnecessary risk to others.", 
    "human": "Refraining from actions that could injure or disadvantage others, even when there is personal gain.", 
    "organizational": "Designing products and policies that minimize negative social or environmental impacts.", 
    "professional": "Avoiding professional actions that could harm clients or other workers.", 
    "machine": "Preventing systems from causing physical, psychological, or societal harm through malfunction or misuse.", 
    "failureModes": { 
      "human": "A driver texts while driving, endangering others.",
      "organizational": "A company releases an untested product that causes harm to users.",
      "professional": "A scientist publishes misleading results to gain recognition.",
      "machine": "An autonomous vehicle misinterprets data and causes an accident."
    }
  },
  { 
    "category": "AP", 
    "name": "Transparency", 
    "definition": "Ensure clarity and accessibility of information relevant to decisions and actions.", 
    "human": "Being honest about intentions when interacting with others.", 
    "organizational": "Making internal processes and decision rationales visible to employees and stakeholders.", 
    "professional": "Disclosing potential conflicts of interest or uncertainties in expert opinions.", 
    "machine": "Providing interpretable explanations for algorithmic decisions and data use.", 
    "failureModes": { 
      "human": "A person hides mistakes to protect their reputation.",
      "organizational": "A corporation conceals product defects from customers.",
      "professional": "A consultant withholds crucial data that challenges their conclusion.",
      "machine": "A deep learning model produces outcomes that even developers can’t explain."
    }
  },
  { 
    "category": "AP", 
    "name": "Accountability", 
    "definition": "Accept responsibility for actions, decisions, and their consequences.", 
    "human": "Owning up to mistakes and making amends for harms caused.", 
    "organizational": "Creating systems of oversight where decisions and impacts can be traced and corrected.", 
    "professional": "Standing behind one’s work and being answerable to ethical and legal standards.", 
    "machine": "Embedding mechanisms that allow tracking, auditing, and attribution of automated decisions.", 
    "failureModes": { 
      "human": "A person blames coworkers for their own errors.",
      "organizational": "A company shifts blame to a third party contractor for data breaches.",
      "professional": "An engineer disclaims responsibility for unsafe designs, citing client pressure.",
      "machine": "A ML system makes a harmful decision with no clear accountability"
    }
  },
  { 
    "category": "AP", 
    "name": "Privacy", 
    "definition": "Respect individual control over their personal information and boundaries.", 
    "human": "Protecting others personal information and respecting their autonomy", 
    "organizational": "Safeguarding user data and ensuring informed consent in data collection.", 
    "professional": "Maintaining confidentiality of client and participant information.", 
    "machine": "Minimizing unnecessary data collection and preserving user anonymity where possible.", 
    "failureModes": { 
      "human": "A friend shares another person’s private message without consent.",
      "organizational": "A social media company sells user data without transparent consent.",
      "professional": "A doctor reveals patient details in casual conversation.",
      "machine": "A smart home device records and transmits private conversations to external servers."
    }
  },
  /*{ 
    "category": "AB", 
    "name": "Education (scores vs. learning)", 
    "definition": "Hoped for: Critical thinking with actual understanding. Rewarded for: Teaching to the test. Short-term correctedness: optimizing for easy grades that distort true learning goals. Reward durable learning and conceptual transfer, design metrics that reward synthesis, application, and retention over time", 
    "human": "People learn best when effort, reflection, and curiosity are encouraged instead of rote accuracy.", 
    "organizational": "Educational institutions align when policies and incentives support deep learning, interdisciplinary thinking, and creativity rather than test results.", 
    "professional": "Educators and curriculum designers uphold alignment by emphasizing critical reasoning, exploration, and feedback-based improvement.", 
    "machine": "Learning technologies stay aligned when they teach conceptual mastery and adaptability instead of optimizing for immediate right answers.", 
    "failureModes": { 
      "human": "A student studies only what’s on the test, forgetting it the next day",
      "organizational": "Districts cut art or project-based classes because they don’t raise standardized metric",
      "professional": "Professors use multiple-choice exams over open problems to make grading efficient.",
      "machine": "A tutoring model learns to hint at correct answers rather than teaching reasoning, inflating its success score."
    }
  },
  { 
    "category": "AB", 
    "name": "Healthcare (productivity vs. healing)", 
    "definition": "Hoped for: Compassionate, patient-centered healing and long-term wellness. Rewarded for: Bbilling metrics, and speed of care. Throughput over care: efficiency metrics replace patient outcomes, leading to burnout and lower quality of treatment. Measure care by recovery, not paperwork; reward systems that improve patient well-being, follow up consistency, and prevention.", 
    "human": "Clinicians align when they can spend time understanding patient needs, building trust, and focusing on recovery rather than daily quotas.",
    "organizational": "Healthcare institutions align when they design incentives and policies around sustained patient outcomes and holistic well-being.",
    "professional": "Medical experts uphold alignment by integrating preventive care, collaboration, and ethical decision making into their work.",
    "machine": "AI health systems remain aligned when they optimize for long term patient outcomes and transparency rather than short term efficiency.",
    "failureModes": { 
      "human": "Doctors rush visits or order unnecessary tests to meet daily targets.",
      "organizational": "Hospitals reward volume and billing, leading to staff fatigue and readmissions.",
      "professional": "Healthcare leaders evaluate performance based on procedure counts instead of recovery rates.",
      "machine": "A scheduling AI maximizes efficiency by deferring complex cases, worsening patient outcomes."
    }
  },
  {
    "category": "AB",
    "name": "Sports (teamwork vs. individual performance)",
    "definition": "Hoped for: Teamwork, selflessness, and collective spirit. Rewarded for: Individual performance, scoring statistics, and personal accolades.Individualized incentives: systems publicly praise teamwork but materially reward personal achievement, encouraging self-interest over cooperation. Reward team contribution and unselfish play; structure incentives to recognize assists, leadership, and collective outcomes as much as individual statistics.",
    "human": "Athletes align when collaboration, support, and situational intelligence are recognized as central to success not just visible scoring.",
    "organizational": "Teams align when contracts, bonuses, and recognition systems reflect contributions to group success and culture rather than individual numbers.",
    "professional": "Coaches and sports experts align when evaluation emphasizes decision-making, leadership, and teamwork under pressure instead of raw performance data.",
    "machine": "Sports analytics systems align when they measure off ball movement, assists, defensive coordination, and other subtle team first behaviors alongside individual stats.",
    "failureModes": {
      "human": "Players prioritize personal stats over teamwork, passing up smart plays to boost their visibility.",
      "organizational": "Teams reward individual scorers with larger contracts even when they harm overall cohesion.",
      "professional": "Coaches publicly promote teamwork but bench players who take low visibility supporting roles.",
      "machine": "Analytics models overvalue scoring metrics and ignore off-ball actions or defensive synergy, reinforcing selfish play."
    }
  }*/
  {
    "category": "AT",
    "name": "Empathy",
    "definition": "loremipsum",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "organizationalref": "OPTIONAL",
    "professionals": "loremipsum",
    "professionalref": "OPTIONAL",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
      "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  }
  
       
];
