// The Hashtag Generator
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    if (!str || str.length === 0) {
      return false;
    }
    const string = str.replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\s/g, '');
    if (string.length >= 140 || !string) {
      return false;
    }
    return '#' + string;
  }
  