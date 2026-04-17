export type Testimonial = {
	name: string;
	quote: string;
	/** Optional subtitle, e.g. "Product manager, NYC" */
	role?: string;
	/** Client headshot URL. Omit to show the initials placeholder until you have a photo. */
	photoSrc?: string;
	/** Alt text when `photoSrc` is set. Defaults to a sensible description from `name`. */
	photoAlt?: string;
};

/**
 * Add or edit testimonials here—no component changes needed.
 */
export const testimonials: Testimonial[] = [
	{
		name: 'Alex M.',
		role: 'Placeholder client',
		quote:
			'Replace this with a real testimonial when you have one. Short, specific quotes work best.',
	},
	{
		name: 'Jordan P.',
		role: 'Placeholder client',
		quote:
			'Second example testimonial. Swap these out anytime; the page updates on the next deploy.',
	},
];
