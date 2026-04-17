/**
 * Edit this file for your business name, links, and marketing copy.
 */
export const siteConfig = {
	siteTitle: 'Life Coaching',
	businessName: 'DI Lee Coaching',
	tagline: 'Clarity, accountability, and forward motion for the life you want.',
	intro:
		'One-on-one coaching to help you get unstuck, set meaningful goals, and follow through with confidence.',
	primaryCtaLabel: 'Book a free intro call',
	services: [
		{
			title: 'You think and choose with more clarity',
			description:
				'You untangle what matters from the noise. Decisions feel less like guessing and more like alignment—so you move through your week with less second-guessing and more quiet confidence.',
		},
		{
			title: 'You turn intentions into momentum you can feel',
			description:
				'What used to live only in your head becomes concrete steps you can schedule and finish. Each small win proves you can follow through, and that proof stacks until progress feels real, not theoretical.',
		},
		{
			title: 'You keep going when life gets loud',
			description:
				'You build steadier self-honesty and kinder accountability—so you do not fall off the map when work, family, or doubt flare up. You learn to recover faster and treat setbacks as data, not verdicts.',
		},
		{
			title: 'You find your voice',
			description:
				'You say what you mean—at work, at home, in hard conversations—without shrinking or over-explaining. You trust that what you need and believe is worth expressing, and you practice until speaking up feels more like truth than performance.',
		},
	],
	/** Public Calendly scheduling URL (same link you share with clients). */
	calendlyUrl: 'https://calendly.com/dileefromthevip/30min',
	/** Full YouTube channel URL. */
	youtubeChannelUrl: 'https://www.youtube.com/channel/UC695YfckeQ8hrYIWn66S7-g',
	/**
	 * Hand-picked videos (title + id from the watch URL). Only the first three are shown.
	 * Example id from https://www.youtube.com/watch?v=dQw4w9WgXcQ → dQw4w9WgXcQ
	 */
	youtubeVideos: [
		{ title: 'I Tried A Month Of Hinge Premium', videoId: '1CwvSl72eY4' },
		{ title: 'I Tried Hinge X - What Do You Get?', videoId: 'gYd_tof7a4U' },
		{ title: 'iPhone 17 Pro Orange - Unbox and First Impressions', videoId: 'UdPnJ0NyvKI' },
	],
	/**
	 * Optional: show one embedded video above the channel button.
	 * Example: 'dQw4w9WgXcQ' from https://www.youtube.com/watch?v=dQw4w9WgXcQ
	 */
	featuredYoutubeVideoId: '' as string | undefined,
	/** “Background” section between testimonials and YouTube. */
	background: {
		heading: 'My background',
		lede: 'A bit more about my path, in everyday language, so you know who you are talking to.',
		paragraphs: [
			'I am a first-generation immigrant. Growing up, I spent a lot of time translating between family, school, and work, and learning how to stay steady when the rules were not always obvious. I went to Harvard for college and studied Psychology and French. Psychology drew me to how people think and change; French kept me close to language and culture. None of that felt like training to be a coach at the time, but it shaped how I listen today.',
			'After college I changed careers and went into software engineering. The learning curve was steep: new vocabulary, new pace, and a lot of figuring things out in public. It is still the best career decision I have made. I like building things that work, breaking big problems into smaller steps, and getting used to not knowing the answer on day one.',
			'Outside of work I put a lot of hours into endurance training. I have finished two marathons and a half Ironman, and I am training for my first full Ironman in fall 2026. Most weeks that means early mornings, steady repetition, and learning when to push and when to rest. I live in New York City and I own my home here. If your life has some of the same ingredients (a big transition, a new field, or a long goal on top of a full calendar), I understand what that can feel like day to day.',
		],
	},
};
