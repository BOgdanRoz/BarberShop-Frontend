// Formats whole hryvnia amounts as "2 200 ₴" with non-breaking spaces (uk-UA style grouping).
export function formatUah(amount: number): string {
  const grouped = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')
  return `${grouped}\u00A0₴`
}
