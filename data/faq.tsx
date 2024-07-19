import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'Does it work on internet connectivity?',
      a: (
        <>
          No, once downloaded, the application functions offline,
          allowing you to code anywhere without
          needing an internet connection.
        </>
      ),
    },
    {
      q: 'Can I collaborate with others using this application?',
      a: "Currently, the application is designed for individual use,but you can share your project files manually with collaborators.",
    },
    {
      q: ' How can I report a bug or request a feature?',
      a: 'You can report bugs or request new features by opening an issue on our GitHub repository.',
    },
    {
      q: 'Does the application support extensions or plugins?',
      a: 'At this time, the application does not support third-party extensions or plugins, but we are considering it for future updates.',
    },
  ],
}

export default faq
