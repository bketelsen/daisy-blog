import { Collection } from '@lib/collections'
import { GhostPostOrPage } from '@lib/ghost'

export const collections: Collection<GhostPostOrPage>[] = []

// export const collections: Collection<GhostPostOrPage>[] = [{
//  path: `meta`,
//  selector: node => node.primary_tag && node.primary_tag.slug === `meta`
// }]

// export const collections: Collection<GhostPostOrPage>[] = [{
//   path: `ketelsen`,
//   selector: node => node.authors && node.authors.filter(a => a.slug === `brian`).length > 0,
// }]
