'use client'

import { CollectionHtml } from './shopify-collection-html';

export type ShopifyCollectionProps = {
  handle: string;
};

// My understanding of Shadow DOM is that this component would be encapsulated to use its own stykles

export const ShopifyCollection = ({ handle }: ShopifyCollectionProps) => {
  return (<div dangerouslySetInnerHTML={{ __html: CollectionHtml(handle) }}></div>);
}
