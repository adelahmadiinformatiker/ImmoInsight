export function initCalendar(elementId: string) {
  const elem = document.getElementById(elementId) as HTMLElement | null
  // @ts-expect-error flatpickr is not defined in the global scope
  if (!elem || !window.flatpickr) return

  const now = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  const yyyy = now.getUTCFullYear()
  const mm = String(now.getUTCMonth() + 1).padStart(2, '0')
  const dd = String(now.getUTCDate()).padStart(2, '0')
  const defaultDate = `${yyyy}-${mm}-${dd}`

  // @ts-expect-error flatpickr is not defined in the global scope
  window.flatpickr(elem, {
    inline: true,
    defaultDate: defaultDate,
    prevArrow: '<span title="Previous month">&laquo;</span>',
    nextArrow: '<span title="Next month">&raquo;</span>',
  })
}
