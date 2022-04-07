/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'link',
      label: 'Home',
      href: 'https://sqaaas.eosc-synergy.eu'
    },
    {
      type: 'doc',
      id: 'intro',
      label: 'What is SQAaaS?'
    },
    {
      type: 'category',
      label: 'Pipeline as a Service',
      items: [
          'pipeline_as_a_service/intro',
          'pipeline_as_a_service/the_3_step_process',
          {
              type: 'category',
              label: 'Pipeline composition steps',
              items: [
                  'pipeline_as_a_service/step_1_repositories',
                  'pipeline_as_a_service/step_2_tooling',
                  'pipeline_as_a_service/step_3_criteria'
              ]
          }
      ]
    },
    {
      type: 'category',
      label: 'Quality Assessment & Awarding',
      items: [
          'quality_assessment_and_awarding/intro'
      ]
    }
  ]
};
