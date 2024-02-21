export const formattedWhatsAppMsg = ({
  message,
  name,
}: {
  message: string
  name?: string
}) =>
  encodeURIComponent(`Olá ${name ? 'me chamo '.concat(name) : ''}, ${message}`)
