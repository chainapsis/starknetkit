export const isInKeplrMobileAppBrowser = (): boolean => {
  if (typeof window === "undefined") {
    return false
  }

  const isKeplrMobileApp = window.keplr !== undefined

  if (!isKeplrMobileApp) {
    return false
  }

  return isKeplrMobileApp
}
