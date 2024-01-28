function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

// helper function to replace leading elements
function removeLeadingElements(title) {
  return title.replace(/^(An |A )/i, '');
}

function sortByTitle(movies) {
  return movies.sort((a, b) => {
    const titleA = removeLeadingElements(a.title).toLowerCase();
    const titleB = removeLeadingElements(b.title).toLowerCase();
    return titleA.localeCompare(titleB);
  });
}

module.exports = { sortByYear, sortByTitle };
