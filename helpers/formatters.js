export default function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-CA', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(dateString));
}