// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

//For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

str = 'http://github.com/carbonfive/raygun';

function getDomainName(string) {
	rmvBeg = /https?:\/\/(?:www\.)?/;
	rmvEnd = /\..*/;
	if (string.startsWith('www.')) {
		string = string.replace('www.', '');
	}
	string = string = string.replace(rmvBeg, '');
	return string.replace(rmvEnd, '');
}

//Shorter version
function domainName(url) {
	url = url.replace('https://', '');
	url = url.replace('http://', '');
	url = url.replace('www.', '');
	return url.split('.')[0];
}
