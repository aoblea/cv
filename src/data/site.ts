import type { ImageMetadata } from 'astro';

import diaryImage from '../assets/diary-create.png';
import hatawSetImage from '../assets/hs-home.png';
import hatawSetWatchImage from '../assets/hs-watch.png';
import movieNightImage from '../assets/movienight-home.png';
import nasaImage from '../assets/nasa-home.png';
import porkSliderIcon from '../assets/ps-icon.png';
import porkSliderImage from '../assets/ps-gameplay.png';
import proximityImage from '../assets/pr-create.png';
import starWarsImage from '../assets/starwars-home.png';

export const profile = {
  name: 'Arwin Oblea',
  role: 'Software Engineer',
  focus: 'iOS',
  email: 'arwinoblea@gmail.com',
  github: 'https://github.com/aoblea',
  linkedin: 'https://www.linkedin.com/in/arwinoblea/',
  certificate: 'https://www.credential.net/94c30f42-c2f5-4ea1-8762-46db0f756110',
} as const;

export type Project = {
  name: string;
  tagline: string;
  status: string;
  blurb: string;
  highlights: string[];
  built: string[];
  art: 'hatawset' | 'porkslider';
  icon?: ImageMetadata;
  image?: { src: ImageMetadata; alt: string };
  /* A second screenshot, tucked in front of the first as a companion device. */
  inset?: { src: ImageMetadata; alt: string };
  link?: { href: string; label: string };
  /* Legal pages an App Store listing has to point at. */
  docs?: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    name: 'HatawSet',
    tagline: 'A workout app for iPhone and Apple Watch',
    status: 'In development',
    blurb:
      'A training companion for people who lift. Build the routines you actually follow, then tick off each set as you go — on your phone or straight from your wrist. Over time it turns all that logging into something useful: charts of how much you are lifting, which weeks you showed up, and every personal best you have hit.',
    highlights: [
      'Log a set by saying it out loud — no typing between reps',
      'Charts, personal records and streaks that show real progress',
      'Start on your watch, finish on your phone, stay in sync',
    ],
    built: ['Swift', 'SwiftUI', 'iOS', 'watchOS', 'Cloud sync'],
    art: 'hatawset',
    image: {
      src: hatawSetImage,
      alt: "HatawSet's home screen on iPhone, showing personal bests and training charts",
    },
    inset: { src: hatawSetWatchImage, alt: 'A set being logged on Apple Watch' },
  },
  {
    name: 'Pork Sliders',
    tagline: 'A tilt-to-dodge arcade game for iPhone',
    status: 'In development',
    blurb:
      'A small game with one rule: do not get hit. Bricks fall from the top of the screen and you steer a pig out of the way by tilting your phone left and right. It gets faster the longer you survive, which is exactly as stressful as it sounds.',
    highlights: [
      'Tilt your phone to move — no buttons, nothing to learn',
      'Gets quicker the longer you last',
      'Keeps your high score so you can chase it',
    ],
    built: ['Swift', 'SpriteKit', 'Motion sensors'],
    art: 'porkslider',
    icon: porkSliderIcon,
    image: { src: porkSliderImage, alt: 'Pork Sliders running on an iPhone' },
    docs: [
      { href: '/pork-sliders/privacy', label: 'Privacy policy' },
      { href: '/pork-sliders/terms', label: 'Terms and conditions' },
    ],
  },
];

export type EarlierProject = {
  name: string;
  blurb: string;
  image: ImageMetadata;
  repo: string;
};

export const earlierProjects: EarlierProject[] = [
  {
    name: 'NASA App',
    blurb:
      'Browse real photographs sent back by the Mars rovers, turn one into a postcard with your own caption, and email it. A second tool pulls up the most recent satellite image of any place on Earth you search for.',
    image: nasaImage,
    repo: 'https://github.com/aoblea/treehouse-project-10',
  },
  {
    name: 'Proximity Reminders',
    blurb:
      'Reminders that go off based on where you are rather than what time it is — a nudge when you arrive somewhere, or as you are heading out the door.',
    image: proximityImage,
    repo: 'https://github.com/aoblea/treehouse-project-9',
  },
  {
    name: 'Diary App',
    blurb:
      'A daily journal that keeps a photo and the place you wrote it alongside each entry, so looking back gives you more than just the words.',
    image: diaryImage,
    repo: 'https://github.com/aoblea/treehouse-project-8',
  },
  {
    name: 'Movie Night',
    blurb:
      'Settles the "what should we watch?" argument. Two people pass one phone back and forth, each picks what they like, and the app finds the overlap.',
    image: movieNightImage,
    repo: 'https://github.com/aoblea/treehouse-project-7',
  },
  {
    name: 'The API Awakens',
    blurb:
      'A pocket reference for the Star Wars universe — look up characters, vehicles and starships, and compare their stats side by side.',
    image: starWarsImage,
    repo: 'https://github.com/aoblea/treehouse-project-6',
  },
];
