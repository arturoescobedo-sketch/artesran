// Full write-up for the Description tab on Iron Valkyrie's project page.
// Each section has a `heading` plus either `text` (a paragraph) or `items` (a bullet list;
// `label` is shown in bold before the text).
export default {
  title: 'Iron Valkyrie: Mobile Match-3 Tactical RPG',
  subtitle: 'Solo-developed iOS game, shipped under Artesran',
  sections: [
    {
      heading: 'Overview',
      text:
        'Iron Valkyrie is a story-driven mech match-3 RPG for iPad and iPhone. Players match gems to charge pilot ' +
        'abilities and fight through two campaigns: 10 chapters and 65 battles. I designed, built, and shipped it end ' +
        'to end as a solo developer, using AI-assisted development (Claude Code) for implementation and generative ' +
        'tools for art.',
    },
    {
      heading: 'The challenge',
      text:
        'Match-3 games usually reduce to a score loop. The goal was a mid-core design where board play drives real ' +
        'tactical decisions: resource management per color, front-line risk, enemy AI that plays the same board, and ' +
        'boss mechanics that change how you match.',
    },
    {
      heading: 'My role',
      text:
        'Game designer, engineer, technical artist, and release manager: systems design, narrative, art direction, ' +
        'UI/UX, build pipeline, App Store submission, and backend setup.',
    },
    {
      heading: 'Technology',
      items: [
        { label: 'Engine and language', text: 'Unity 6 LTS, C#, Universal Render Pipeline' },
        {
          label: 'Platform',
          text: 'iOS (iPad and iPhone), built via Xcode, distributed through TestFlight and App Store Connect',
        },
        { label: 'Backend', text: 'Unity Gaming Services (anonymous authentication, leaderboards)' },
        {
          label: 'Tooling',
          text: 'Claude Code with MCP for Unity, Git/GitHub, GIMP, Midjourney for concept and asset generation',
        },
        {
          label: 'Content pipeline',
          text: 'ScriptableObject-driven data (mechs, pilots, enemies, nodes), auto-generated at editor load',
        },
      ],
    },
    {
      heading: 'Key engineering work',
      items: [
        {
          label: 'Match-3 engine',
          text: '8x8 board with cascades, special matches, wildcards, and a per-color action-point system that powers abilities',
        },
        {
          label: 'Enemy AI',
          text: 'enemies scan the board for matches, prefer larger combos by difficulty, and build toward their own abilities',
        },
        {
          label: 'Gimmick framework',
          text:
            'more than 15 modular board mechanics (frozen and locked gems, minefields, chain locks, gravity flips, ' +
            'corrupted gems, a “Rising Threat” mechanic where marked gems climb the board and explode, wave spawns, ' +
            'turn-limited Last Stand fights)',
        },
        {
          label: 'Combat systems',
          text: 'front-of-line mech rotation, armor, shields, multi-target abilities, consumables',
        },
        {
          label: 'Scoring and leaderboards',
          text:
            'performance-based scoring (chip damage, combos, efficiency, survival), separate Normal and Hard boards ' +
            'per chapter, clean vs. assisted run badges',
        },
        {
          label: 'Adaptive difficulty',
          text: 'supply airdrops and a defeat-screen shop to reduce frustration after repeated losses',
        },
        {
          label: 'UI and onboarding',
          text:
            'guided tutorial, comic-style pilot briefings, contextual strategy hints, Apple Pencil support, phone and ' +
            'tablet layouts',
        },
        {
          label: 'iOS delivery',
          text: 'Resources-based asset loading, texture import tuning, signing, TestFlight, and App Store submission',
        },
      ],
    },
    {
      heading: 'Outcome',
      text:
        'Two complete campaigns with a full narrative arc, released on the App Store under a one-time purchase ' +
        'model with no accounts or loot boxes.',
    },
  ],
};
