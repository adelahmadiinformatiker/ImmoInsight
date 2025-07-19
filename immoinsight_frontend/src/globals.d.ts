export {}

declare global {
  interface Window {
    theme?: {
      primary?: string
      warning?: string
      danger?: string
    }
    MSInputMethodContext?: unknown
  }
}
