/**
 * Maastricht Market Insights (MMI)
 * Each interview gets its own article page at /insights/<slug>.
 * Text is taken word-for-word from the published MMI features.
 * To add an interview: add an entry to `interviews` (in series order).
 */

export const MMI_LINKEDIN = 'https://www.linkedin.com/company/maastricht-student-consulting/posts/';

export interface Section {
  label: string;
  question: string;
  answer: string[];
  pullQuote?: string;
}

export interface Interview {
  slug: string;
  number: number;
  name: string;
  role: string;
  organisation: string;
  perspective: string;
  headline: string;
  readTime: string;
  quote: string;
  sections: Section[];
  /** Direct link to the LinkedIn post, if available */
  url?: string;
}

export const currentSeries = {
  title: "Europe's Competitiveness Test",
  question: 'What is preventing Europe from building, scaling and competing globally?',
  intro:
    'Our founding series brings together four leading perspectives on Europe’s competitiveness – from consulting, economics, politics and academia – to explore why European companies struggle to obtain the scale, capital and integrated market access required to compete globally.',
};

export const mmiPrinciples = [
  {
    title: 'One topic. Multiple perspectives.',
    text: 'Each series focuses on one important financial, economic or business topic and brings different perspectives together around one central debate.',
  },
  {
    title: 'Questions worth answering',
    text: 'We speak with executives, industry experts, financial professionals, consultants and political decision-makers, so every topic is explored from several viewpoints.',
  },
  {
    title: 'From conversation to insight',
    text: 'We conduct focused interviews and turn the most valuable ideas into concise, professionally written features that are accessible and worth sharing.',
  },
];

export const interviews: Interview[] = [
  {
    slug: 'wolfgang-bernhart',
    number: 1,
    name: 'Dr. Wolfgang Bernhart',
    role: 'Senior Partner, Automotive & Industrials',
    organisation: 'Roland Berger',
    perspective: 'Consulting perspective',
    headline: 'Strategy, capital, and the next generation: what it will take for Europe to compete in EVs and batteries.',
    readTime: '5-minute read',
    quote: 'If the strategy is flawed, no amount of good execution will save you.',
    sections: [
      {
        label: 'Strategy',
        question: 'Should Europe fight to close the gap with China in EVs and batteries, or focus on a niche it can defend?',
        answer: [
          "I think it's a matter of catching up, not carving out a niche. A niche strategy doesn't really work as a long-term answer, because any niche interesting enough to be worth defending gets occupied by other players sooner or later; retreating into one usually just means scaling down, not solving the underlying problem. That said, there are structural cost gaps, particularly in batteries, that are genuinely difficult to close without more far-reaching measures. Our own home market is stagnating, already saturated, and won't grow much further for demographic reasons. Add a US market closed to exports and other markets where we're priced out, and the options narrow fast.",
        ],
        pullQuote: 'Whatever growth is left has to come from actively competing, not from hiding in a corner of the market.',
      },
      {
        label: 'Capital',
        question: "Is Europe's biggest obstacle on batteries a lack of capital, or an inability to execute fast enough?",
        answer: [
          "It's not simply capital versus execution; underneath both is a structural cost disadvantage against China: capital expenditure runs roughly three times higher for a gigafactory here, and equipment costs 150 to 200 percent more. We're also late followers, still catching up on learning-curve experience others built a decade ago, often at a cost well beyond half a billion euros per gigafactory. So is capital the problem? Yes and no: nobody wants to invest when the cost gap makes the business case difficult, and carmakers face a real dilemma sourcing a meaningful share from outside Europe just to stay cost-competitive. In my view, the only way through is targeted market protection combined with serious R&D investment, plus carmakers actually committing to long-term off-take agreements, which many are still reluctant to do.",
        ],
      },
      {
        label: 'Strategy & Execution',
        question: "Is Europe's auto industry held back more by the wrong strategy, or by slow execution?",
        answer: [
          "Both play a role, but in different ways. Part of it is fair market conditions, guarding against unfair subsidies. Part of it is regulatory: we need a clear, stable environment; constantly relitigating when combustion engines get phased out just creates uncertainty. Then there's strategy: thinking in scenarios, understanding the real financial impact of your choices, and grasping that you can't sell an electric car for a few thousand euros more without giving customers a real, tangible benefit in return. Is it dramatically better once you factor in things like charging? Often not, so you have to be much closer on cost than the industry assumed. On top of that, parts of our industry got used to high margins made outside Europe, which took pressure off becoming leaner at home.",
        ],
        pullQuote:
          "If the strategy has real flaws, good execution won't rescue it. You can execute it perfectly and still end up exactly where everyone else does, just a little later.",
      },
      {
        label: 'Next Generation',
        question: "What skill or mindset will the next generation need that past generations didn't have to think about?",
        answer: [
          "For me, this comes down to reinvention. Historically, our industry has been a one-product industry, and that product is now mature. There's very little growth left in Europe, shrinking room to differentiate, and rising competition even on our home turf, to the point where market protection alone won't solve it forever. What's necessary is a real shift in thinking: looking seriously at other products, not just defending the car as we know it. One thing some of the newer, more disruptive entrants get right is offering an actual vision, not just a product roadmap, in some cases pointing toward genuinely complex adjacent products, like humanoid robots, which share much of the same complexity and production scale as vehicles while promising real long-term volume. Some competitors, including several Asian players, are already moving that way. European companies, by and large, are not, and I think that's a real risk; retreating into the luxury segment alone isn't a viable long-term answer either.",
        ],
      },
    ],
  },
  {
    slug: 'carsten-brzeski',
    number: 2,
    name: 'Carsten Brzeski',
    role: 'Global Head of Macro Research & Chief Eurozone Economist',
    organisation: 'ING Group',
    perspective: 'Economic perspective',
    headline: "Twenty Years in the Making: Why Germany's 'National Depression' Needs Structural Reform, Not Just a Cyclical Rebound.",
    readTime: '5-minute read',
    quote: 'The general problem of Europe remains that member states most of the time will put national interests first.',
    sections: [
      {
        label: 'Structural Reform',
        question: "You've called Germany's downturn a 'national depression.' What's the one structural reform the country keeps avoiding?",
        answer: [
          "This is exactly Germany's current problem: there is no single silver bullet, no one reform that changes everything. Germany's current economic situation is the result of almost 20 years of underinvestment, a decade of complacency without reform, geopolitical shifts, and the rise of China from a welcome export destination to a fierce competitor. The one thing Germany probably keeps avoiding is accepting that something needs to change, and that the country is facing a structural, not merely cyclical, crisis. If you really push me for one reform, it would currently be modernising bureaucracy. Bureaucracy is holding back investment, and it's holding back the agreed and announced investments at the federal level from actually reaching the real economy. Germany is currently even having a hard time spending the money it has.",
        ],
      },
      {
        label: 'Decision-Making',
        question: "It took until late last year to approve the 2026 budget. Is Germany's problem economic, or just being too slow to decide?",
        answer: [
          'Weaker competitiveness doesn\'t come overnight. It\'s the result of complacency, the idea of "never change a winning team." Both German governments and German companies have for too long thought that the export-driven model was unbeatable. The rise of China, together with a few German reforms in the early 2000s, actually revived this model, this belief. The underinvestment of the last 20 years, however, has now left German infrastructure and education behind in international comparisons. Germany\'s federal structure once provided very good checks and balances, a consensus-based system. In the current situation, however, that same structure has contributed to slow decision-making, as well as to the fact that Germans, like many other Europeans, don\'t really like change in general and would rather live in an eternal present.',
        ],
      },
      {
        label: 'European Convergence',
        question: 'France raises taxes, Italy tightens fiscally, Germany spends. Is the eurozone converging on one strategy, or just improvising?',
        answer: [
          "We have a blueprint: the Draghi report. Europe's problem, however, is nicely illustrated by the fact that, two years after its release, we're still debating how to implement its policy recommendations. Before the war in the Middle East started, Europe actually seemed to be moving in the right direction, together. The announcements on deregulation, less bureaucracy, a stronger internal market, and more common energy policies were all steps in the right direction. It's now a matter of actually implementing these good intentions. In general, you're touching on the right point: we're still struggling to really work together. At times, we do: think of the European Recovery Fund and many other examples.",
        ],
        pullQuote: 'The general problem of Europe remains that member states most of the time will put national interests first.',
      },
      {
        label: 'Next Generation',
        question: "If Germany's fiscal push succeeds, what's the one assumption about its economy the next generation will still need to unlearn?",
        answer: [
          'Just before the summer, the German government announced a reform package aimed at making the healthcare and pension systems financially sound in light of an ageing society. It also announced a package to reduce bureaucracy. This is an enormous step, and it shows that the government has finally woken up. The fiscal stimulus package for infrastructure and defence is already at work. If the government now also decides on tax cuts and a clear energy strategy, Germany could not only enjoy a cyclical recovery but actually enter a longer period of sound growth. There are still a lot of ifs. But if all of this succeeds, the one lesson to unlearn would be that Germany is unable to change.',
        ],
      },
    ],
  },
  {
    slug: 'anouk-van-brug',
    number: 3,
    name: 'Anouk van Brug',
    role: 'Member of the European Parliament, Renew Europe (VVD)',
    organisation: 'European Parliament',
    perspective: 'Policy perspective',
    headline: "Regulation, capital, and the scale-up gap: what it will take to keep Europe's most successful companies at home.",
    readTime: '2-minute read',
    quote: 'Europe needs to retain the value it creates.',
    sections: [
      {
        label: 'Regulation',
        question: 'Would EU-wide rules help companies scale across borders, or do capital and implementation remain the bigger barriers?',
        answer: [
          'A more unified European corporate framework would certainly help, particularly by reducing the legal and administrative costs of operating across multiple Member States. However, harmonisation alone will not solve Europe’s scale-up problem. Companies can already face very different insolvency regimes and capital-market conditions when expanding across borders. Financing remains a major constraint, especially for innovative companies entering the growth phase. The real challenge is therefore to combine greater regulatory coherence with deeper European capital markets. Europe should make it easier to operate across borders while ensuring that successful companies can access the capital they need to grow here rather than elsewhere.',
        ],
      },
      {
        label: 'Capital',
        question: 'Why do many promising European companies still seek late-stage capital, listings, or expansion outside Europe?',
        answer: [
          'The fundamental problem is that Europe has excellent entrepreneurs and research, but a less developed ecosystem for scaling companies. European firms often encounter a fragmented capital market, with fewer large pools of growth and institutional capital than in the United States. As companies become larger, this can make American markets and investors more attractive. There is also a cultural dimension: Europe has historically been more cautious towards risk and equity investment. The result is a paradox.',
        ],
        pullQuote:
          'We generate innovative companies in Europe, but some of the most successful eventually find better conditions for financing, listing and expansion elsewhere. Europe needs to retain the value it creates.',
      },
      {
        label: 'Reform',
        question: 'Which reform would most effectively direct more European private capital toward innovative European businesses?',
        answer: [
          'I would prioritise greater harmonisation of European insolvency law. Investors are much more willing to provide capital when they have confidence that, if a company fails, the rules for restructuring, recovery and liquidation are predictable and efficient. Today, significant differences between national insolvency regimes create uncertainty and make cross-border investment more difficult. This particularly affects innovative companies, where higher risk is inherent to the business model. A more coherent European insolvency framework would reduce that uncertainty, improve the pricing and allocation of capital, and make investors more comfortable financing ambitious European companies. It would therefore strengthen the conditions for private capital to support innovation and growth across Europe.',
        ],
      },
    ],
  },
  {
    slug: 'jesper-rangvid',
    number: 4,
    name: 'Jesper Rangvid',
    role: 'Professor of Finance & Associate Dean of the E-MBA',
    organisation: 'Copenhagen Business School (CBS)',
    perspective: 'Academic perspective',
    headline: 'After 40 Years of Cheap Money: Rethinking Strategy, Capital, and Growth in Europe.',
    readTime: '5-minute read',
    quote: 'Cheap refinancing can no longer be treated as a background condition.',
    sections: [
      {
        label: 'Capital',
        question: "If forty years of falling rates are over, what's the first thing European companies need to rethink about funding growth?",
        answer: [
          "The first thing to rethink is the assumption that capital will keep getting cheaper with time. One of the central arguments in my book is that forty years of declining rates fundamentally changed the financial system, encouraging leverage and risk-taking, perhaps too much of both. For European companies, that implies three things: more attention to cash generation, more resilient funding mixes and maturities, and much greater discipline on return on invested capital. Debt is still useful, but cheap refinancing can no longer be treated as a background condition. There's a broader European issue too: Europe needs enormous investment in digitalisation, AI, energy infrastructure, the green transition, and defence, and that need, together with rising public debt, is itself a force pushing rates higher.",
        ],
        pullQuote: 'Europe may need to invest far more at exactly the moment financing that investment becomes more expensive.',
      },
      {
        label: 'Strategy',
        question: "Which force pushing on interest rates do you think Europe's leaders are most underestimating right now?",
        answer: [
          "It's the extraordinary investment demands Europe faces, and how they interact with high public debt in some countries. There are forces that could keep rates low: weak population growth, longer lives, sluggish growth, and greater precautionary saving. But other forces are harder to avoid: already-high public debt, the green transition, defence spending, and potentially stronger productivity growth from technologies like AI. I'm particularly concerned about the trajectory of public debt in countries like France, the UK, and Italy, where demographics are shifting but retirement ages aren't adjusting enough to keep public finances sustainable. What policymakers underestimate is that these demands are arriving simultaneously: decarbonise, rearm, digitalise, support ageing populations, and maintain the welfare state. Each is defensible alone; together they place an enormous claim on savings and capital. Europe's problem may increasingly be how to prioritise scarce capital.",
        ],
      },
      {
        label: 'Strategy & Execution',
        question: "When it comes to Europe's competitiveness gap, where's the real fault line: capital, strategy, or execution?",
        answer: [
          "Based on my book's premises, I'd say execution, or more precisely, the ability to turn available capital into productive investment. The story of the past forty years isn't one of scarce capital; declining rates made financing extraordinarily cheap, pushed investors toward risk, and raised valuations. Yet Europe didn't convert that unusually favourable financing environment into a decisive productivity or technology advantage. I wouldn't diagnose Europe's problem as simply not enough money, and I don't think there's a shortage of strategies either; we've produced plenty for green technology, digitalisation, and capital markets. The real fault line is between capital and the productive deployment of capital: scaling companies, reallocating resources toward more productive uses, accepting entrepreneurial risk, and completing cross-border capital markets. If cheap capital alone created competitiveness, Europe should have done exceptionally well during the era of zero and negative rates.",
        ],
      },
      {
        label: 'Next Generation',
        question: "What's one assumption from the last 40 years of falling rates that this generation should stop taking for granted?",
        answer: [
          "That asset prices and financing conditions will naturally become more favourable with time. Anyone who entered adulthood over the past forty years experienced something historically remarkable: the fall in global yields from 1980 to 2020 was the largest forty-year decline in roughly seven centuries of data. That decline had enormous consequences. Falling discount rates supported house prices and stock valuations, cheap borrowing encouraged debt, and investors searching for returns took greater risks. An entire generation benefited from a macroeconomic tailwind that was easy to mistake for a permanent feature of capitalism. Someone starting today shouldn't build a career, a company, or a personal balance sheet on the assumption that this tailwind will repeat.",
        ],
        pullQuote: 'For an entrepreneur, that means building a business that works when capital has a real price.',
      },
    ],
  },
];

export function getInterview(slug: string) {
  return interviews.find((i) => i.slug === slug);
}

/** MMI contact (shown on the Insights pages only, not in the board hover) */
export const MMI_CONTACT = {
  name: 'Jona Weber',
  title: 'Head of Public Relations',
  email: 'jona.weber@maastrichtconsulting.com',
  phone: '+49 176 20635125',
  linkedin: 'https://www.linkedin.com/in/jona-weber/',
};
