const baseHtml = `
  <script src="https://cdn.shopify.com/storefront/web-components.js">
  </script>

  <shopify-store
    store-domain="https://natchthestore.myshopify.com/"
    country="AU"
    language="en"
    public-access-token="794f2dae555a76b844c5f79787f4fa09"
  />`;

export default function ShopifyBaseHtml() {
  return (<div dangerouslySetInnerHTML={{ __html: baseHtml }}></div>);
}