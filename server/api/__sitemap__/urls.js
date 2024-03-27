const languageCodes = process.env.LANGUAGE_CODES.split(',')
export default defineSitemapEventHandler(async () => {
  const pageSlugs = [
    '',
    'about',
    'experience',
    'imprint',
    'projects',
    'contact',
    'contact/success',
  ]

  const sitemapEntries = []

  for (const slug of pageSlugs) {
    for (const lang of languageCodes) {
      sitemapEntries.push({
        loc: `${lang}/${slug}`,
      })
    }
  }

  return sitemapEntries
})
