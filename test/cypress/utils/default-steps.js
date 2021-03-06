export default function(shepherd) {
  return [
    {
      id: 'welcome',
      options: {
        text: [
          `
            Shepherd is a JavaScript library for guiding users through your app.
            It uses <a href="https://atomiks.github.io/tippyjs//">Tippy.js</a>,
            another open source library, to render dialogs for each tour "step".
          `,
          `
            Among many things, Tippy makes sure your steps never end up off screen or cropped by an overflow.
            (Try resizing your browser to see what we mean.)
          `,
          `
            It also offers a robust API for styling animations of steps
            as they enter and exit the view.
          `
        ],
        attachTo: '.hero-welcome bottom',
        classes: 'shepherd-step-element shepherd-transparent-text',
        buttons: [
          {
            action: shepherd.cancel,
            classes: 'shepherd-button-secondary',
            text: 'Exit'
          }, {
            action: shepherd.next,
            classes: 'shepherd-button-example-primary',
            text: 'Next'
          }
        ]
      }
    },
    {
      id: 'including',
      options: {
        title: 'Including',
        text: 'Including Shepherd is easy! Just include tippy.all.min.js, shepherd.js, and a Shepherd theme file.',
        attachTo: '.hero-including bottom',
        buttons: [
          {
            action: shepherd.back,
            classes: 'shepherd-button-secondary',
            text: 'Back'
          }, {
            action: shepherd.next,
            classes: 'shepherd-button-example-primary',
            text: 'Next'
          }
        ],
        classes: 'shepherd-step-element'
      }
    },
    {
      id: 'example',
      options: {
        title: 'Example Shepherd',
        text: 'Creating a Shepherd is easy too! Just create Shepherd and add as many steps as you want. Check out the <a href="https://shipshapecode.github.io/shepherd/">documentation</a> to learn more.',
        attachTo: '.hero-example bottom',
        buttons: [
          {
            action: shepherd.back,
            classes: 'shepherd-button-secondary',
            text: 'Back'
          }, {
            action: shepherd.next,
            classes: 'shepherd-button-example-primary',
            text: 'Next'
          }
        ],
        classes: 'shepherd-step-element'
      }
    },
    {
      id: 'followup',
      options: {
        title: 'Learn more',
        text: 'Star Shepherd on Github so you remember it for your next project',
        attachTo: '.hero-followup left',
        buttons: [
          {
            action: shepherd.back,
            classes: 'shepherd-button-secondary',
            text: 'Back'
          }, {
            action: shepherd.next,
            classes: 'shepherd-button-example-primary',
            text: 'Done'
          }
        ],
        classes: 'shepherd-step-element'
      }
    }
  ];
}
