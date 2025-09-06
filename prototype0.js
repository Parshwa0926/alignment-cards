export const cards = [
  {
    name: "Reward Hacking",
    definition: "When an AI system finds loopholes in its reward function, maximizing the formal objective in ways that technically meet the criteria but subvert the designer’s intent.",
    machineExample: "If we reward the robot for achieving an environment free of messes, it might disable its vision so it won’t find any messes, or cover over messes with materials it can’t see through.",
    humanExample: "As a student, I might hack the reward of 'good grades' by plagiarizing assignments or memorizing past test answers, which earns high marks without genuine learning."
  },
  {
    name: "Negative Side Effects",
    definition: "When an AI system focuses too narrowly on a specified task and ignores broader environmental variables, leading to harmful unintended consequences.",
    machineExample: "A cleaning robot may knock over a vase because it can clean faster by doing so, even though the goal never included breaking objects.",
    humanExample: "As a friend, I might focus only on maximizing your happiness by canceling all your responsibilities so you can relax—helpful in the short term but harmful to your life overall."
  },
  {
    name: "Scalable Oversight",
    definition: "When the correct objective is known but is too expensive or impractical to evaluate frequently, so the system risks harmful behavior by extrapolating from limited feedback.",
    machineExample: "A cleaning robot should throw out candy wrappers but not cellphones; since asking humans each time is costly, infrequent checks may cause it to make wrong decisions.",
    humanExample: "As a sports team member, I might get praised once for being aggressive, then assume aggression is always best—even when defense is needed—because coaches can’t oversee me constantly."
  },
  {
    name: "Safe Exploration",
    definition: "When an AI system tries new behaviors to learn but risks actions with catastrophic or irreversible consequences that outweigh the value of exploration.",
    machineExample: "A robot should experiment with mopping strategies, but putting a wet mop in an electrical outlet is a very bad idea.",
    humanExample: "As an intern, I might explore faster lab methods by doubling a reagent in an experiment, but this could ruin samples or cause dangerous reactions."
  },
  {
    name: "Robustness to Distributional Shift",
    definition: "When an AI system performs poorly or dangerously because the new environment differs significantly from the one it was trained on.",
    machineExample: "A robot trained to clean offices may apply the same strategies on a factory floor, where they could be unsafe or ineffective.",
    humanExample: "As a student excelling in high school, I might rely on last-minute memorization to succeed, but in college this strategy fails because exams require deep conceptual understanding."
  }
];
