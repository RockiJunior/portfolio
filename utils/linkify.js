export const linkify = (text) => {
	return text.replace(
		/(https?:\/\/[^\s]+)/g,
		(url) =>
			`<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
	);
};
