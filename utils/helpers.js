module.exports = {
  format_date: (date) => {
    const theDate = new Date(date).getMonth() + 1;
    const theMonth = new Date(date).getDate();
    const theYear = new Date(date).getFullYear();
    return `${theDate}/${theMonth}/${theYear}`;
  },

  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },

  format_url: (url) =>
    url.replace('http://', '').replace('https://', '').replace('www.', '').split('/')[0].split('?')[0],
};
