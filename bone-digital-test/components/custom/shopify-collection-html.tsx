// The raw HTML for the Shopify collection component is kept seperate to keep things tidy

export const CollectionHtml = (handle: string) => {
  return (`<div>
    <div style="display: flex; align-items: center; padding: 16px; gap: 16px;">
      <div style="width: 80%">
        <hr>
      </div>
      <div style="width: 20%">
        <a onclick="document.querySelector('shopify-cart').showModal()">
          <div class="navigation__view-cart">
            <shopify-context type="cart">
              <template>
                <shopify-data query="cart.totalQuantity" class="navigation__view-cart__quantity"></shopify-data>
              </template>
            </shopify-context>
            <span> View Cart </span>
          </div>
        </a>
      </div>
    </div>

    <shopify-context type="collection" handle="${handle}">
        <template>
          <div class="collection-layout">
            <div class="collection-grid">
              <shopify-list-context type="product" query="collection.products" first="12">
                <template>
                  <div shopify-attr--disabled="!product.availableForSale" class="product-card">
                    <div class="product-card__image-container">
                      <button
                        shopify-attr--disabled="!product.availableForSale"
                        class="product-card__hover-button"
                        onclick="getElementById('cart').addLine(event).showModal();"
                      >
                        <span class="product-card__hover-button__button__text">Quick Add</span>
                      </button>
                      <a
                        shopify-attr--disabled="!product.availableForSale"
                        class="product__link"
                        onclick="getElementById('product-modal').showModal(); getElementById('product-modal-context').update(event);"
                        ><shopify-media
                          max-images="1"
                          width="320"
                          height="320"
                          query="product.selectedOrFirstAvailableVariant.image"
                        ></shopify-media
                      ></a>
                    </div>
                    <a
                      shopify-attr--disabled="!product.availableForSale"
                      class="product__link"
                      onclick="getElementById('product-modal').showModal(); getElementById('product-modal-context').update(event);"
                    >

                      <div class="product-card__details">
                        <div class="product-card__info">
                          <p class="product-card__category">
                            <shopify-data query="product.selectedOrFirstAvailableVariant.product.category.name"></shopify-data>
                          </p>
                          <h3 class="product-card__title">
                            <span>
                              <shopify-data query="product.title"></shopify-data>
                            </span>
                          </h3>
                        </div>
                        <p class="product-card__price">
                          <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                        </p>
                      </div>
                    </a>
                  </div>
                </template>
              </shopify-list-context>
            </div>
          </div>
        </template>
      </shopify-context>

      <shopify-cart id="cart"></shopify-cart>

      <dialog id="product-modal" class="product-modal">
        <shopify-context id="product-modal-context" type="product" wait-for-update>
          <template>
            <div class="product-modal__container">
              <div class="product-modal__close-container">
                <button class="product-modal__close" onclick="getElementById('product-modal').close();">&#10005;</button>
              </div>
              <div class="product-modal__content">
                <div class="product-modal__layout">
                  <div class="product-modal__media">
                    <shopify-media max-images="1" width="400" height="500" query="product.selectedOrFirstAvailableVariant.image"></shopify-media>
                  </div>
                  <div class="product-modal__details">
                    <div class="product-modal__header">
                      <div>
                        <span class="product-modal__vendor">
                          <shopify-data query="product.vendor"></shopify-data>
                        </span>
                      </div>
                      <h1 class="product-modal__title">
                        <shopify-data query="product.title"></shopify-data>
                      </h1>
                      <div class="product-modal__price-container">
                        <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                        <shopify-money
                          class="product-modal__compare-price"
                          query="product.selectedOrFirstAvailableVariant.compareAtPrice"
                        ></shopify-money>
                      </div>
                      <div class="product-modal__description">
                        <span class="product-modal__description-text">
                          <shopify-data query="product.descriptionHtml"></shopify-data>
                        </span>
                      </div>
                    </div>
                    <shopify-variant-selector></shopify-variant-selector>

                    <div class="product-modal__buttons">
                      <button
                        class="product-modal__add-button"
                        onclick="getElementById('cart').addLine(event).showModal();getElementById('product-modal').close();"
                        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                      >
                        Add to cart
                      </button>
                      <button
                        class="product-modal__buy-button"
                        onclick="document.querySelector('shopify-store').buyNow(event)"
                        class="product-buy-now__button"
                        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </shopify-context>
      </dialog>
    </div>
    `)
}