// Full write-up for the Description tab on Movesmith for CiviCRM's project page.
// Same format as ironValkyrie.js: sections with `text` (a paragraph) or `items` (a bullet list).
export default {
  title: 'Movesmith for CiviCRM: AI Tool Layer for Donor CRM',
  subtitle: 'In development under Artesran',
  sections: [
    {
      heading: 'Overview',
      text:
        'This project is building a reusable AI tool layer for donor CRM work. It combines CiviCRM-specific ' +
        'mappings and schemas with an MCP (Model Context Protocol) server that exposes CRM actions, such as ' +
        'searching contacts and managing tasks, to AI assistants.',
    },
    {
      heading: "What's being built",
      items: [
        { label: 'AI tool layer', text: 'reusable tools for everyday donor CRM work' },
        { label: 'CiviCRM mappings and schemas', text: "how CiviCRM's data fits together, described for the tools to use" },
        { label: 'MCP server', text: 'exposes CRM actions such as searching contacts and managing tasks' },
      ],
    },
    {
      heading: 'Technology',
      items: [
        { label: 'MCP server', text: 'Python' },
        { label: 'CiviCRM API client', text: 'Python wrapper around CiviCRM API v4, using httpx' },
        { label: 'Frontend', text: 'framework still being decided' },
      ],
    },
  ],
};
