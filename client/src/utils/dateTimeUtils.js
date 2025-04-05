export const fromIsoDate = (isodate) => {
    const date = new Date(isodate);

    const formattedDate = date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});

    return formattedDate;
}