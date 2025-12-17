'use client'

import CollectionHtml from './shopify-collection-html';

export type ShopifyCollectionProps = {
  handle: string;
};

// My understanding of Shadow DOM is that this component would be encapsulated to use its own styles and ignore anything from global
// using dangerouslysetinnerhtml has security implications - ideally would purify the html to avoid XSS
export default function ShopifyCollection({ handle }: ShopifyCollectionProps) {
  return (<div dangerouslySetInnerHTML={{ __html: CollectionHtml(handle) }}></div>);
}
