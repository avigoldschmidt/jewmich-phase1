/**
 * Central registry for every form, RSVP, payment, and embed.
 * Pages refer to actions by id — never by raw URL in templates.
 * kind "form" is reserved for a later built-in / RSVP phase.
 */

export type ActionKind = 'link' | 'embed' | 'form';

export type Action = {
  kind: ActionKind;
  /** For link: destination URL. For embed: iframe src. */
  href?: string;
  src?: string;
  label: string;
  /** Short note shown near the CTA (e.g. opens registration form). */
  note?: string;
  /** Embed iframe title / accessible name */
  title?: string;
  height?: string;
};

export const actions = {
  'student-shabbat-rsvp': {
    kind: 'link',
    href: 'https://www.jewmich.com/shabbat/',
    label: 'Reserve Shabbat dinner',
    note: 'Opens our registration form',
  },
  'student-hh-rsvp': {
    kind: 'link',
    href: 'https://www.jewmich.com/highholidayregister/',
    label: 'Reserve High Holidays (students)',
    note: 'Opens our registration form',
  },
  'community-hh-rsvp': {
    kind: 'link',
    href: 'https://www.jewmich.com/highholidayregistercom/',
    label: 'Reserve High Holidays (community)',
    note: 'Opens our registration form',
  },
  'student-sukkot-rsvp': {
    kind: 'link',
    href: 'https://www.jewmich.com/sukkot/',
    label: 'Reserve dinner in the sukkah',
    note: 'Opens our registration form',
  },
  'sukkah-dinner-2nd': {
    kind: 'link',
    href: 'https://www.jewmich.com/dinner-in-the-sukkah-2nd-night/',
    label: 'Second-night sukkah dinner',
    note: 'Opens our registration form',
  },
  'student-passover-seder': {
    kind: 'embed',
    src: 'https://www.zeffy.com/embed/ticketing/student-passover-at-chabad-5786--2026',
    label: 'Student Passover seder',
    title: 'Student Passover seder registration',
    height: '900px',
  },
  'community-passover-seder': {
    kind: 'link',
    href: 'https://www.jewmich.com/passovercom/',
    label: 'Community Passover seder',
    note: 'Opens our registration form',
  },
  'sell-chometz': {
    kind: 'embed',
    src: 'https://www.zeffy.com/embed/donation-form/78ffc6a6-5674-4752-9693-ce52132e1043',
    label: 'Sell chometz',
    title: 'Sell chometz online',
    height: '900px',
  },
  'sell-chometz-cc': {
    kind: 'embed',
    src: 'https://forms.chabadms.com/payment.aspx?serialnumber=4111-1189-6338&formid=20366',
    label: 'Sell chometz (card)',
    title: 'Sell chometz — card form',
    height: '820px',
  },
  'lulav-set': {
    kind: 'embed',
    src: 'https://www.zeffy.com/embed/ticketing/1a61592b-3d50-4fb3-8feb-b94a08baac49',
    label: 'Order lulav and etrog',
    title: 'Lulav and etrog order form',
    height: '900px',
  },
  'latke-fest': {
    kind: 'link',
    href: 'https://www.jewmich.com/latkefest/',
    label: 'Latke Fest',
    note: 'Opens our registration form',
  },
  'mega-challah-bake': {
    kind: 'link',
    href: 'https://www.jewmich.com/mega-challah-bake-form/',
    label: 'Mega Challah Bake',
    note: 'Opens our registration form',
  },
  'purim-gift': {
    kind: 'link',
    href: 'https://www.jewmich.com/purimgift/',
    label: 'Purim gift service',
    note: 'Opens our registration form',
  },
  'donate-chabadms': {
    kind: 'embed',
    src: 'https://forms.chabadms.com/payment.aspx?serialnumber=4111-1189-6338&formid=8080',
    label: 'Give online',
    title: 'Chabad of Ann Arbor donation form',
    height: '820px',
  },
  'donate-zeffy': {
    kind: 'embed',
    src: 'https://www.zeffy.com/en-US/embed/donation-form/8aef2ddb-4496-401c-be91-d04b7eca6263',
    label: 'Donate with Zeffy',
    title: 'Donate with Zeffy',
    height: '900px',
  },
  'donate-paypal': {
    kind: 'link',
    href: 'https://www.paypal.com/fundraiser/charity/1619170',
    label: 'Donate with PayPal',
  },
  'sponsor-shabbat': {
    kind: 'link',
    href: 'https://www.jewmich.com/sponsorshabbat/',
    label: 'Sponsor a Shabbat dinner',
    note: 'Opens our sponsorship form',
  },
  'sponsor-kiddush': {
    kind: 'link',
    href: 'https://www.jewmich.com/kiddushmain/',
    label: 'Sponsor a kiddush',
    note: 'Opens our sponsorship form',
  },
  'life-and-legacy': {
    kind: 'link',
    href: 'https://www.jewmich.com/lifeandlegacy/',
    label: 'Life & Legacy',
    note: 'Opens our registration form',
  },
  'donate-car': {
    kind: 'link',
    href: 'https://www.jewmich.com/donateyourcar/',
    label: 'Donate a car',
    note: 'Opens our registration form',
  },
  'donate-miles': {
    kind: 'link',
    href: 'https://www.jewmich.com/donatemiles/',
    label: 'Donate airline miles',
    note: 'Opens our registration form',
  },
  'charity-box': {
    kind: 'link',
    href: 'https://www.jewmich.com/charitybox/',
    label: 'Request a charity box',
    note: 'Opens our registration form',
  },
  'pay-invoice': {
    kind: 'link',
    href: 'https://www.jewmich.com/payment/',
    label: 'Make a payment',
    note: 'Opens our payment form',
  },
  'events-zeffy': {
    kind: 'embed',
    src: 'https://www.zeffy.com/embed/ticketing/chabad-community-seder-april-1-2026-700pm',
    label: 'Upcoming ticketed event',
    title: 'Event registration',
    height: '900px',
  },
  'event-register-zeffy': {
    kind: 'embed',
    src: 'https://www.zeffy.com/en-US/embed/ticketing/51217ee1-e7f9-45c7-b1dc-fa153ae26071',
    label: 'Event registration',
    title: 'Event registration via Zeffy',
    height: '900px',
  },
  'early-move-in': {
    kind: 'embed',
    src: 'https://www.zeffy.com/embed/ticketing/early-move-in',
    label: 'Early move-in',
    title: 'Early move-in payment',
    height: '900px',
  },
  'event-register-cardpointe': {
    kind: 'link',
    href: 'https://www.jewmich.com/eventregister/',
    label: 'Event payment',
    note: 'Opens our payment form',
  },
  'newsletter-signup': {
    kind: 'link',
    href: 'https://www.jewmich.com/signup/',
    label: 'Join the mailing list',
    note: 'Opens our signup form',
  },
  'newsletter-unsubscribe': {
    kind: 'link',
    href: 'https://www.jewmich.com/remove/',
    label: 'Unsubscribe',
    note: 'Opens our unsubscribe form',
  },
  'visitor-form': {
    kind: 'link',
    href: 'https://www.jewmich.com/visitingform/',
    label: 'Visiting Ann Arbor form',
    note: 'Opens our registration form',
  },
  'contact-form': {
    kind: 'link',
    href: 'https://www.jewmich.com/contact/',
    label: 'Contact us',
    note: 'Opens our contact form',
  },
  'mezuzah-request': {
    kind: 'link',
    href: 'https://www.jewmich.com/mezuzah/',
    label: 'Request a mezuzah check',
    note: 'Opens our registration form',
  },
  'mikvah-inquiry': {
    kind: 'link',
    href: 'https://www.jewmich.com/mikvah/',
    label: 'Mikvah inquiry',
    note: 'Opens our registration form',
  },
  'membership-inquiry': {
    kind: 'link',
    href: 'https://www.jewmich.com/membership/',
    label: 'Congregation membership',
    note: 'Opens our registration form',
  },
  'chs-application': {
    kind: 'link',
    href: 'https://www.jewmich.com/chabad-hebrew-school-student-application/',
    label: 'Hebrew School application',
    note: 'Opens our registration form',
  },
  'camp-gan-israel': {
    kind: 'link',
    href: 'https://www.mycampganisrael.com/',
    label: 'Camp Gan Israel',
  },
  'birthright-interest': {
    kind: 'link',
    href: 'https://www.jewmich.com/birthright/',
    label: 'Birthright interest',
    note: 'Opens our registration form',
  },
  'sinai-scholars-apply': {
    kind: 'link',
    href: 'https://www.jewmich.com/sinaischolars/',
    label: 'Sinai Scholars',
    note: 'Opens our registration form',
  },
  'your-israel-interest': {
    kind: 'link',
    href: 'https://www.jewmich.com/yourisrael/',
    label: 'Your Israel',
    note: 'Opens our registration form',
  },
  'study-center-signup': {
    kind: 'link',
    href: 'https://www.jewmich.com/studycenter/',
    label: 'Study Center',
    note: 'Opens our registration form',
  },
  'culinary-workshop': {
    kind: 'link',
    href: 'https://www.jewmich.com/culinary/',
    label: 'Culinary workshop',
    note: 'Opens our registration form',
  },
  'challah-list': {
    kind: 'link',
    href: 'https://www.jewmich.com/challahlist/',
    label: 'Challah list',
    note: 'Opens our registration form',
  },
  'jwc-signup': {
    kind: 'embed',
    src: 'https://docs.google.com/spreadsheet/embeddedform?formkey=dEtuMUx1aEI5TVVKenlrNFdyTXlGOHc6MQ',
    label: "Jewish Women's Circle",
    title: "Jewish Women's Circle signup",
    height: '720px',
  },
  'happiness-course': {
    kind: 'link',
    href: 'https://www.jewmich.com/happiness/',
    label: 'How Happiness Thinks',
    note: 'Opens our registration form',
  },
  'send-soup': {
    kind: 'link',
    href: 'https://www.jewmich.com/soup/',
    label: 'Send soup',
    note: 'Opens our registration form',
  },
  'help-cook-calendar': {
    kind: 'embed',
    src: 'https://calendar.google.com/calendar/embed?src=7b24fda519420450d8cc51888493bd04660fb9fcfee6b17aa9e3c738d780d2bf%40group.calendar.google.com&ctz=America%2FDetroit',
    label: 'Kitchen help schedule',
    title: 'Help cook calendar',
    height: '600px',
  },
  'visit-map': {
    kind: 'embed',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.0727934615245!2d-83.74006030935907!3d42.27230746658021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae48056bf0b1%3A0x2f5007ff3c0b6da3!2sChabad+House+of+Ann+Arbor+-+Jewish+Student+and+Community+Center!5e0!3m2!1sen!2sus!4v1521559052219',
    label: 'Map',
    title: 'Map to Chabad House of Ann Arbor',
    height: '420px',
  },
  'candle-lighting': {
    kind: 'link',
    href: 'https://www.chabad.org/calendar/candlelighting_cdo/aid/6226/jewish/Candle-Lighting.htm',
    label: 'Candle lighting times',
  },
} as const satisfies Record<string, Action>;

export type ActionId = keyof typeof actions;

export function getAction(id: ActionId | string): Action {
  const action = (actions as Record<string, Action>)[id];
  if (!action) {
    throw new Error(`Unknown action id: ${id}`);
  }
  return action;
}
