#### [wix.catalog.api.v1.CatalogReadApi.QueryProducts](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v1/catalog/query-products)

# Package: catalogV1
# Namespace: catalog
# Method: Query Products
# Method link: https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v1/catalog/query-products
# Method API Endpoint: POST https://www.wixapis.com/stores-reader/v1/products/query
## Method Code Examples

--- Code Example: QueryProducts ---

### QueryProducts
```javascript
```cURL
curl -X POST \
   'https://www.wixapis.com/stores/v1/products/query' \
    --data-binary '{}' \
   -H 'Content-Type: application/json' \
   -H 'Authorization: <AUTH>'
```
```
--- Method Response Shape ---

## Method Response Shape

```json
{
  "products": [
    "object"
  ],
  "metadata": {
    "items": "integer",
    "offset": "integer"
  },
  "totalResults": "integer"
}
```
--- Code Example: QueryProducts ---

### QueryProducts
```javascript
```cURL
curl -X POST \
   'https://www.wixapis.com/stores/v1/products/query' \
    --data-binary '{
                     "query": {
                       "filter": "{\"brand\": \"Nice\"}"
                     }
                   }' \
   -H 'Content-Type: application/json' \
   -H 'Authorization: <AUTH>'
```
```
--- Method Description ---
## Method Description:
::::tabs
:::REST_TAB
:::
:::SDK_TAB
> **Note**: This query method uses the new Wix API Query Language syntax. If you're still using the old query syntax with chained query builder methods, see [Migrate from SDK Query Builders to Wix API Query Language](https://dev.wix.com/docs/sdk/articles/work-with-the-sdk/migrate-from-sdk-query-builders-to-wix-api-query-language ) for guidance. The old query builder methods continue to work.
:::
::::

Returns a list of up to 100 products, given the provided paging, sorting and filtering.
See [Stores Pagination](https://dev.wix.com/api/rest/wix-stores/pagination) for more information.
## Method Permissions:
WIX_STORES.READ_PRODUCTS
## Method Permissions Scopes:
Read Products: SCOPE.DC-STORES.READ-PRODUCTS
## Additional Method Code Examples

--- Code Example: QueryProducts ---

### QueryProducts
```javascript
```cURL
curl 'https://www.wixapis.com/stores/v1/products/query' \
--data-binary '{
                 "query": {"sort":"[{\"price\": \"desc\"}]"}}' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>'
```
```

--- Code Example: QueryProducts ---

### QueryProducts
```javascript
```cURL
curl 'https://www.wixapis.com/stores/v1/products/query' \
--data-binary '{
                 "query": {
                   "filter": "{\"collections.id\": { \"$hasSome\": [\"32fd0b3a-2d38-2235-7754-78a3f819274a\"]} }"
                 }
               }' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>'
```
```

--- Code Example: QueryProducts ---

### QueryProducts
```javascript
```cURL
curl -X POST \
   'https://www.wixapis.com/stores/v1/products/query' \
    --data-binary '{
                     "query": {
                       "filter": "{\"price\": \"20\"}"
                     }
                   }' \
   -H 'Content-Type: application/json' \
   -H 'Authorization: <AUTH>'
```
```

--- Code Example: QueryProducts ---

### QueryProducts
```javascript
```cURL
curl -X POST \
   'https://www.wixapis.com/stores/v1/products/query' \
    --data-binary '{
                     "includeVariants": true
                   }' \
   -H 'Content-Type: application/json' \
   -H 'Authorization: <AUTH>'
```
```

--- Code Example: HTTP request example ---

### HTTP request example
```javascript
(async () => {
      const response = await fetch("https://www.wixapis.com/stores-reader/v1/products/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cookie": "automation=true",
          "authorization": "memberToken..."
        },
        body: JSON.stringify({})
      });
      const result = await response.json();
      return result;
    })();
```
## Method Schema Summary:
The `queryProducts` method allows you to retrieve a list of products with options for pagination, sorting, and filtering.

**Method Parameters:**

*   `includeHiddenProducts` (boolean): Determines whether hidden products should be included in the response. Requires product management permissions.
*   `includeMerchantSpecificData` (boolean): Determines whether merchant-specific data should be included in the response. Requires product management permissions.
*   `includeVariants` (boolean): Determines whether product variants should be included in the response.
*   `query` (object): An object containing query parameters:
    *   `paging` (object): Specifies pagination details.
        *   `limit` (integer): The maximum number of items to return per page (0-100).
        *   `offset` (integer): The number of items to skip from the beginning (0 or greater).
    *   `filter` (string): A string used to filter the products based on specific criteria.
    *   `sort` (string): A string used to define the sorting order of the products.

**Return Type:** `QueryProductsResponse`

The response includes a list of `products`, each with details such as `id`, `name`, `slug`, `visible`, `productType`, `description`, `sku`, `weight`, `productDimensions`, `packageDimensions`, `stock` information, `priceData`, `convertedPriceData`, `costAndProfitData`, `pricePerUnitData`, `additionalInfoSections`, `media`, `customTextFields`, `manageVariants`, `productOptions`, `productPageUrl`, `numericId`, `inventoryItemId`, `discount`, `collectionIds`, `variants` (if requested), `lastUpdated`, `createdDate`, `seoData`, `ribbon`, and `brand`. It also includes `metadata` for pagination and `totalResults`.

---

**Questions and Answers:**

1.  **Q: How can I retrieve only visible products?**
    A: Set the `visible` field to `true` within the `filter` parameter of the `query` object.
2.  **Q: What is the maximum number of products I can fetch in a single request?**
    A: You can fetch a maximum of 100 products per page by setting the `limit` parameter to 100.
3.  **Q: Can I include product variants in the query results?**
    A: Yes, set the `includeVariants` parameter to `true` to include product variants.
4.  **Q: How do I filter products by their price?**
    A: Use the `filter` parameter with appropriate syntax to specify price criteria.
5.  **Q: Is it possible to retrieve hidden products?**
    A: Yes, you can retrieve hidden products by setting the `includeHiddenProducts` parameter to `true`, provided you have the necessary permissions.

---

#### [wix.stores.catalog.v3.CatalogApi.QueryProducts](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/query-products)

# Package: catalogV3
# Namespace: productsV3
# Method: Query Products
# Method link: https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/query-products
# Method API Endpoint: POST https://www.wixapis.com/stores/v3/products/query
## Method Code Examples

--- Code Example: Query Products ---

### Query Products
Query Products with filter by ids and sort by creation date

```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/query' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>' \
-d '{
      "fields": [],
      "query": {
        "sort": [
          {
            "order": "ASC",
            "fieldName": "createdDate"
          }
        ],
        "filter": {
          "id": {
            "$in": [
              "dd093852-35c6-4e09-a22c-4a5f175b2b1c",
              "35bb39e5-83aa-4930-b5c4-54db7b886a6e"
            ]
          }
        }
      }
    }'
```
--- Method Response Shape ---

## Method Response Shape

```json
{
  "products": [
    {
      "oneOf": [
        "typedProperties"
      ]
    }
  ],
  "pagingMetadata": {
    "count": "integer<int32>",
    "cursors": "object",
    "hasNext": "boolean"
  }
}
```

--- Method Description ---
## Method Description:
Retrieves a list of up to 100 products, given the provided filtering, sorting, and cursor paging.
Pass supported values to the `fields` array in the request to include those fields in the response.

To learn about working with _Query_ endpoints, see
[API Query Language](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language),
and [Sorting and Paging](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-sorting-and-paging).

Learn more about the differences between [_Query_ and _Search_](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-search-query-and-list-methods) methods.

> **Notes:**
> + To retrieve a non-visible product (`visible: false`), your app must have the 'Product v3 read admin' (`SCOPE.STORES.PRODUCT_READ_ADMIN`) permission scope.
> + This method does not return variant data. To retrieve variant data, call [Get Product](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/get-product) or [Get Product By Slug](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/get-product-by-slug) for each product individually, or use the [Read-Only Variants API](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/read-only-variants-v3/introduction) for variant-centric queries.

> **Note:** Query Products supports a narrow set of filterable and sortable fields. Unsupported fields return a `Field '<fieldName>' is not declared as filterable` error. To look up products by name or brand, call [Search Products](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/search-products) instead. For the full list of supported fields and per-field operators, see [Supported Filters and Sorting](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/supported-filters-and-sorting).
## Method Permissions:
WIX_STORES.PRODUCT_READ,WIX_STORES.PRODUCT_READ_NON_VISIBLE,WIX_STORES.PRODUCT_MERCHANT_DATA_READ
## Method Permissions Scopes:
Read products in v3 catalog: SCOPE.STORES.PRODUCT_READ
Product v3 read admin: SCOPE.STORES.PRODUCT_READ_ADMIN
Product v3 read admin: SCOPE.STORES.PRODUCT_READ_ADMIN
## Additional Method Code Examples

--- Code Example: HTTP request example ---

### HTTP request example
```javascript
(async () => {
      const response = await fetch("https://www.wixapis.com/stores/v3/products/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cookie": "automation=true",
          "authorization": "appToken..."
        },
        body: JSON.stringify({
          "fields": [
            "THUMBNAIL"
          ],
          "query": {
            "filter": {
              "id": {
                "$in": [
                  "1ee08fa4-5e24-4474-a8ce-3971ebed62ef"
                ]
              }
            },
            "sort": [
              {
                "fieldName": "createdDate",
                "order": "ASC"
              }
            ],
            "cursorPaging": {
              "limit": 100
            }
          }
        })
      });
      const result = await response.json();
      return result;
    })();
```


---

#### [business-solutions/stores/catalog-v1/catalog/filter-and-sort](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v1/catalog/filter-and-sort)

## Resource: Filter and Sort

## Article: Filter and Sort

## Article Link: https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v1/catalog/filter-and-sort

## Article Content:

# Filter and sort

## Query Language

Endpoints that allow querying follow these format [guidelines](https://dev.wix.com/api/rest/getting-started/api-query-language).

## Query Products

### Fields That Allow Filtering

| Field                     | Operators                                        | Sorting Allowed |
|---------------------------|--------------------------------------------------|-----------------|
| `name`                    | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` | Allowed         |
| `description`             | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` |                 |
| `sku`                     | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` | Allowed         |
| `id`                      | `$eq`,`$ne`,`$hasSome`                           | Allowed         |
| `price`                   | `$eq`,`$ne`,`$hasSome`,`$lt`,`$lte`,`$gt`,`$gte` | Allowed         |
| `numericId`               | `$eq`,`$ne`,`$hasSome`,`$lt`,`$lte`,`$gt`,`$gte` | Allowed         |
| `productType`             | `$eq`,`$ne`,`$hasSome`                           | Allowed         |
| `slug`                    | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` | Allowed         |
| `collections.id`          | `$eq`,`$ne`,`$hasSome`,`$hasAll`                 |                 |
| `options.\<option name\>` | `$eq`,`$ne`,`$hasSome`,`$hasAll`                 |                 |
| `inventoryStatus`         | `$eq`,`$ne`,`$hasSome`                           |                 |        
| `lastUpdated`             | `$eq`,`$ne`,`$hasSome`,`$lt`,`$lte`,`$gt`,`$gte` | Allowed         |
| `createdDate`             | `$eq`,`$ne`,`$hasSome`,`$lt`,`$lte`,`$gt`,`$gte` | Allowed         |

** Note that "hasSome" is same as the operator "IN" in SQL

### Examples

**Query products where price = 10**

```
curl 'https://www.wixapis.com/stores/v1/products/query' --data-binary '{"query":{"filter":"{\"price\": \"10\"}"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
``` 

**Query products, order by price descending**

```
curl 'https://www.wixapis.com/stores/v1/products/query' --data-binary '{"query":{"sort":"[{\"price\": \"desc\"}]"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
``` 

**Getting all products for a given collection**

```
curl 'https://www.wixapis.com/stores/v1/products/query' --data-binary '{"query":{"filter":"{\"collections.id\": { \"$hasSome\": [\"your_collection_id_here\"]} }"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
```

**Getting multiple products by IDs**

```
curl 'https://www.wixapis.com/stores/v1/products/query' --data-binary '{"query":{"filter":"{\"id\": {\"$hasSome\": [\"YOUR_PRODUCT_ID_HERE\", \"YOUR_PRODUCT_ID_HERE\"]}}"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
```

**Getting all products with a specific choice**

```
curl 'https://www.wixapis.com/stores/v1/products/query' --data-binary '{"query":{"filter":"{\"productOptions.size\": \"L\"}}"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
```

**Getting all products in a store**

1. Get the first page:
```
curl 'https://www.wixapis.com/stores/v1/products/query' --data-binary '{"query":{"sort":"[{\"numericId\": \"asc\"}]"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
``` 

2. Take the numericId of the last returned item and run the following query:
```
curl 'https://www.wixapis.com/stores/v1/products/query' --data-binary '{"query":{"sort":"[{\"numericId\": \"asc\"}]","filter":"{\"numericId\": {\"$gt\": LAST_NUMERIC_ID}}"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
```

3. Continue until no more records are returned.

## Query Collections

### Fields That Allow Filtering

| Field | Operators                                        | Sorting Allowed |
|-------|--------------------------------------------------|-----------------|
| name  | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` | Allowed         |
| id    | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` | Allowed         |

** Note that "hasSome" is same as the operator "IN" in SQL

### Examples

**Query collections where name = my collection**

```
curl 'https://www.wixapis.com/stores/v1/collections/query' --data-binary '{"query":{"filter":"{\"name\": \"my collection\"}}"}}' -H 'Content-Type: application/json' -H 'Authorization: XXX'
```

---

#### [business-solutions/cms/collection-management/wix-app-collections/wix-stores-collections](https://dev.wix.com/docs/api-reference/business-solutions/cms/collection-management/wix-app-collections/wix-stores-collections)

## Resource: Wix Stores Collections

## Article: Wix Stores Collections

## Article Link: https://dev.wix.com/docs/api-reference/business-solutions/cms/collection-management/wix-app-collections/wix-stores-collections

## Article Content:

# Wix Stores Collections

This article explains the fixed permissions and field structure for the following Wix Stores collections:

- [AbandonedCarts](#abandonedcarts)
- [Collections](#collections)
- [InventoryItems](#inventoryitems)
- [Orders](#orders)
- [Products](#products)
- [Variants](#variants)

> **Note:** These collections are system collections, so you can't change their permissions in the CMS.

<blockquote class="tip">

**Tip:**
Before continuing, make sure you've read [Working with Wix App Collections](https://dev.wix.com/docs/develop-websites/articles/databases/wix-data/collections/working-with-wix-app-collections-and-code).

</blockquote>

## AbandonedCarts

This section explains the permissions and fields available in the AbandonedCarts collection.

To use the AbandonedCarts collection in code, refer to it as `Stores/AbandonedCarts`.

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/AbandonedCarts",
    "query": {}
  }'
```
:::
:::SDK_TAB
```js
import { items } from "@wix/data";

items.query("Stores/AbandonedCarts")
  .find()
  .then((results) => {
    // handle the results
  });
```
:::
::::

<blockquote class="important">

**Important:**
You can query up to 100 items from the AbandonedCarts collection. Trying to query more than 100 items by raising the query [limit](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language#paging) will result in an error.

</blockquote>

### Permissions

The AbandonedCarts collection has the following [permissions](https://support.wix.com/en/article/cms-collection-permissions-overview):

- `read`: `ADMIN`
- `create`: None
- `update`: None
- `remove`: None

### Fields

> **Note:** This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

This section describes each field in this collection and its properties.

Each field heading shows the field name followed by the field ID in parentheses, in the format "fieldName (`fieldId`)".

The fields are listed in the same order as the collection's default order in the CMS.

#### ID (`_id`)

**Description:** The ID of the abandoned cart. This is a system field and is hidden by default.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** Yes

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `contains`, `startsWith`

**Read-only:** Yes

#### Buyer Info (`buyerInfo`)

**Description:** Buyer information as a JSON object.

**Type:** Object

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the example below, the `buyerInfo` object includes an `identityType` field. Its value is one of the following:
>
> - `MEMBER`: Buyer is a logged-in site member.
> - `CONTACT`: A contact has been created for the buyer.

```json
{
  "id": "4kf9ka09-4e9f-a02d-972f-9a5844d9d9a2",
  "identityType": "CONTACT",
  "firstName": "John",
  "lastName":"Doe",
  "phone": "5555555555",
  "email": "john.doe@somedomain.com"
}
```

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/AbandonedCarts",
    "query": {
      "filter": {
        "buyerInfo.id": "5ceea2d0-a537-41dc-a51e-51fc8645afd9"
      }
    }
  }'
```
:::
:::SDK_TAB
```js
// filter a dataset by Buyer Info ID

import wixData from 'wix-data';

$w("#myDataset").setFilter(wixData.filter()
  .eq("buyerInfo.id", ["5ceea2d0-a537-41dc-a51e-51fc8645afd9"]))
```
:::
::::

#### Date Abandoned (`abandonTime`)

**Description:** Time the cart was abandoned.

**Type:** Date

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** Yes

**Read-only:** Yes

#### Status (`status`)

**Description:** Status of the abandoned cart.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** Yes

**Sortable:** Yes

**Filter Support:** `eq`, `ne`

**Read-only:** Yes

> **Note:** The `status` field has one of the following values:
>
> - `ABANDONED`
> - `RECOVERED`

#### Activities (`activities`)

**Description:** List of activities for this order in an array of JSON objects.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the example below, each activity object includes a `type` field. Its value is one of the following:
>
> - `UNRECOGNIZED_TYPE`
> - `SCHEDULED`
> - `EMAIL_SENT`
> - `EMAIL_NOT_SENT`
> - `NOTIFICATION_SENT`
> - `TASK_CREATED`
> - `CUSTOM_ACTIVITY`

```json
[
  {
    "type": "SCHEDULED",
    "timestamp": "2019-01-28T15:43:28.986Z"
  },
  {
    "type": "EMAIL_SENT",
    "timestamp": "2019-01-28T15:53:24.347Z"
  }
]
```

#### Total (`total`)

**Description:** The order total.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

## Collections

This section explains the permissions and fields available in the Collections collection.

To use the Collections collection in code, refer to it as `Stores/Collections`.

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/Collections",
    "query": {}
  }'
```
:::
:::SDK_TAB
```js
import { items } from "@wix/data";

items.query("Stores/Collections")
  .find()
  .then((results) => {
    // handle the results
  });
```
:::
::::

<blockquote class="important">

**Important:** 
You can query up to 100 items from the Collections collection. Trying to query more than 100 items by raising the query [limit](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language#paging) will result in an error.

</blockquote>

### Permissions

The Collections collection has the following [permissions](https://support.wix.com/en/article/cms-collection-permissions-overview):

- `read`: `ANYONE`
- `create`: None
- `update`: None
- `remove`: None

### Fields

> **Note:** This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

This section describes each field in this collection and its properties.

Each field heading shows the field name followed by the field ID in parentheses, in the format "fieldName (`fieldId`)".

#### ID (`_id`)

**Description:** The collection ID that was created by the server. This is a system field and is hidden by default. This information also appears in the Products collection in a hidden field called "collections.id". You can copy the ID from here and then use it to query the Products collection by the collection ID.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** Yes

**Sortable:** Yes

**Filter Support:** Yes

**Read-only:** Yes

#### Name (`name`)

**Description:** The name of the collection.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** Yes

**Sortable:** Yes 

**Filter Support:** Yes

**Read-only:** Yes

#### Main Media (`mainMedia`)

**Description:** Displays the main media item (image or video) for this collection as it appears in the Store Manager.

**Type:** Image

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

## InventoryItems

This section explains the permissions and fields available in the InventoryItems collection.

To use the InventoryItems collection in code, refer to it as `Stores/InventoryItems`.

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/InventoryItems",
    "query": {}
  }'
```
:::
:::SDK_TAB
```js
import { items } from "@wix/data";

items.query("Stores/InventoryItems")
  .find()
  .then((results) => {
    // handle the results
  });
```
:::
::::

<blockquote class="important">

**Important:** 
You can query up to 100 items from the InventoryItems collection. Trying to query more than 100 items by raising the query [limit](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language#paging) will result in an error.

</blockquote>

### Permissions

The InventoryItems collection has the following [permissions](https://support.wix.com/en/article/cms-collection-permissions-overview):

- `read`: `ANYONE`
- `create`: None
- `update`: None
- `remove`: None

### Fields

> **Note:** This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

This section describes each field in this collection and its properties.

Each field heading shows the field name followed by the field ID in parentheses, in the format "fieldName (`fieldId`)".

#### ID (`_id`)

**Description:** The inventory item ID (GUID) that was created by the server. This is a system field and is hidden by default.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Updated Date (`_updatedDate`)

**Description:** Date and time the inventory item was last changed.

**Type:** Date and Time

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `lt`, `lte`, `gt`, `gte`, `hasSome`

**Read-only:** Yes

#### External ID (`externalId`)

**Description:** An external ID for the inventory ID in some other system.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Product ID (`productId`)

**Description:** Unique identifier of the shopping cart.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:**

**Sortable:** No

**Filter Support:** `eq`

**Read-only:** Yes

#### Track Quantity (`trackQuantity`)

**Description:** Indicates whether inventory is tracked for this item.

**Type:** Boolean

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Variants (`variants`)

**Description:** Displays the defined inventory item's variants and its inventory tracking information as a complex JSON object.

**Type:** Text

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

Format of the JSON object:

```json
{
  "variantId" : "abc-123-456",
  "inStock" : true,
  "quantity" : 30
},
{
  "variantId" : "def-456-789",
  "inStock" : false
},
{
  "variantId" : "ghi-789-000",
  "inStock" : true,
  "quantity" : 1
}
```

## Orders

This section explains the permissions and fields available in the Orders collection.

To use the Orders collection in code, refer to it as `Stores/Orders`.

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/Orders",
    "query": {}
  }'
```
:::
:::SDK_TAB
```js
import { items } from "@wix/data";

items.query("Stores/Orders")
  .find()
  .then((results) => {
    // handle the results
  });
```
:::
::::

<blockquote class="important">

**Important:** 
You can query up to 100 items from the Orders collection. Trying to query more than 100 items by raising the query [limit](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language#paging) will result in an error.

</blockquote>

### Permissions

The Orders collection has the following [permissions](https://support.wix.com/en/article/cms-collection-permissions-overview):

- `read`: `ADMIN`
- `create`: None
- `update`: None
- `remove`: None

### Fields

> **Note:** This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

This section describes each field in this collection and its properties.

Each field heading shows the field name followed by the field ID in parentheses, in the format "fieldName (`fieldId`)".

#### Number (`number`)

**Description:** Running order number.

**Type:** Number

**Can connect to data:** Yes

**Can use in dynamic page URL:** Yes

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `le`, `lt`, `gt`, `ge`

**Read-only:** Yes

#### ID (`_id`)

**Description:** The ID of the order. This is a system field and is hidden by default.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Updated Date (`_updatedDate`)

**Description:** The date and time the order was last updated. This is a system field and is hidden by default.

**Type:** Date

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `lt`, `le`, `gt`, `ge`

**Read-only:** Yes

#### Billing Info (`billingInfo`)

**Description:** Billing information as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
{
  "address": {
    "formatted": "235 W 23rd St, NYC, New York 10011, USA",
    "city": "NYC",
    "country": "USA",
    "addressLine": "235 W 23rd St",
    "addressLine2": "Apt 3",
    "postalCode": "10011",
    "subdivision": "NY"
  }
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@somedomain.com",
  "phone": "5555555555",
  "company" : "Company Name",
  "vatId": {
    "number": "452.765.395-39",
    "type": "CPF"
  },
  "paidDate": "2000-05-24T21:00:00.000Z",
  "paymentMethod": "VISA",
  "paymentGatewayTransactionId": "29A06193U6234935D",
  "paymentProviderTransactionId": "7c03ca74-eaf5-4541-8678-9b857634fdcb"
}
```

#### Buyer Info (`buyerInfo`)

**Description:** Buyer information as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the example below, the `buyerInfo` object includes an `identityType` field. Its value is one of the following:
>
> - `MEMBER`: A logged-in site member.
> - `CONTACT`: A Wix contact.

```json
{
  "id": "4kf9ka09-4e9f-a02d-972f-9a5844d9d9a2",
  "identityType": "CONTACT",
  "firstName": "John",
  "lastName":"Doe",
  "phone": "5555555555",
  "email": "john.doe@somedomain.com"
}
```

#### Buyer Note (`buyerNote`)

**Description:** A note added by the buyer on the cart page when creating the order.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Date Created (`_dateCreated`)

**Description:** Date and time the order was created.

**Type:** Date

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `lt`, `le`, `gt`, `ge`

**Read-only:** Yes

#### Currency (`currency`)

**Description:** Currency of the order.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Fulfillment Status (`fulfillmentStatus`)

**Description:** The status of the order's fulfillment.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** The `fulfillmentStatus` field has one of the following values:
>
> - `FULFILLED`: Order was fulfilled successfully.
> - `NOT_FULFILLED`: Order is not yet fulfilled.
> - `CANCELLED`: Order was cancelled.
> - `PARTIALLY_FULFILLED`: Order was partially fulfilled.

#### Archived (`archived`)

**Description:** Whether the order is archived.

**Type:** Boolean

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`

**Read-only:** Yes

#### Line Items (`lineItems`)

**Description:** Lists all the line items for this order in an array of JSON objects.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** The `lineItemType` field has one of the following values:
>
> - `PHYSICAL`
> - `DIGITAL`
> - `CUSTOM_AMOUNT_ITEM`: Item with a custom price.

```json
[
  {
    "index": 1,
    "quantity": 1,
    "discount": 0,
    "tax": 5,
    "taxGroupId": "4",
    "name": "Black T-Shirt",
    "translatedName": "Nombre traducido",
    "productId": "28e0d578-64ac-7c12-b675-d1944d1c4155",
    "sku": "364215376135191",
    "weight": 5.2,
    "lineItemType": "PHYSICAL",
    "notes": "Some notes here",
    "variantId": "0042-0005-a316f7c67df7",
    "fulfillerId": "0000-0420-0005-a3dcfd7e6930",
    "priceData": {
      "price": 35,
      "totalPrice": 40,
      "taxIncludedInPrice": true
    },
    "options": [
      {
        "option": "Color",
        "selection": "Red"
      },
      {
        "option": "Size",
        "selection": "Small"
      }
    ],
    "customTextFields": [
      {
        "title": "Notes for delivery",
        "value": "Please leave at front door"
      }
    ],
    "mediaItem": {
      "altText": "A description of the image",
      "id": "nsplsh_5386255~mv2_d_2977_3951_s_4_2.jpg",
      "externalImageUrl": "http://static.wixstatic...al_c,q_90/file.jpg",
      "src": "wix:image://v1/.../jpg#originWidth=1000&originHeight=1000",
      "type": "IMAGE"
    }
  }, ...
]
```

#### Activities (`activities`)

**Description:** List of activities for this order in an array of JSON objects.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the example below, each activity object includes a `type` field. Its value is one of the following:
>
> - `MERCHANT_COMMENT`: A merchant comment.
> - `ORDER_PLACED`: Order placed.
> - `ORDER_PAID`: Order marked as paid, either by the store owner (for offline orders) or when an online transaction is confirmed.
> - `ORDER_FULFILLED`: Order shipping status set as fulfilled.
> - `ORDER_NOT_FULFILLED`: Order shipping status set as not fulfilled.
> - `DOWNLOAD_LINK_SENT`: Download link was sent (relevant for orders with digital line items).
> - `PICKUP_READY_EMAIL_SENT`: Email notification for pickup was sent.
> - `TRACKING_NUMBER_ADDED`: Shipping tracking number was set.
> - `TRACKING_NUMBER_EDITED`: Shipping tracking number was edited.
> - `TRACKING_LINK_WAS_SET`: Shipping tracking link was set.
> - `SHIPPING_CONFIRMATION_EMAIL_SENT`: Email confirmation of the order shipment was sent.
> - `INVOICE_WAS_SET`: Invoice was added to the order.
> - `INVOICE_WAS_REMOVED`: Invoice was removed from the order.
> - `INVOICE_WAS_SENT`: Invoice was sent to the customer via email.

```json
[
  {
    "type": "ORDER_PLACED",
    "timestamp": "2019-01-28T15:43:28.986Z"
  },
  {
    "type": "MERCHANT_COMMENT",
    "author": "jane.doe@somedomain.com",
    "message": "Enjoy your purchase!",
    "timestamp": "2019-01-28T15:53:24.347Z"
  }
]
```

#### Payment Status (`paymentStatus`)

**Description:** Status of the order's payment.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

> **Note:** The `paymentStatus` field has one of the following values:
>
> - `PAID`
> - `NOT_PAID`
> - `PARTIALLY_REFUNDED`
> - `FULLY_REFUNDED`
>
> The `NOT_PAID` status is only for manual payment orders. Other non-paid orders, such as declined payments, do not appear in the Orders collection.

#### Shipping Info (`shippingInfo`)

**Description:** The order's shipping information as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the `shippingInfo` object, either the `shipmentDetails` field or the `pickupDetails` field is present, but not both. The JSON example below shows both for illustration.

```json
{      
  "deliveryOption": "PPP",
  "estimatedDeliveryTime": "1 day",
  "shippingRegion": "Domestic",
  "shipmentDetails": {
    "address": {
      "formatted": "235 W 23rd St, NYC, New York 10011, USA",
      "city": "NYC",
      "country": "USA",
      "addressLine": "235 W 23rd St",
      "addressLine2": "Apt 3",
      "postalCode": "10011",
      "subdivision": "NY"
    },
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@somedomain.com",
    "phoneNumber": "55555555555",
    "company" : "Some Company",
    "vatId": {
      "number": "294.593.590-21",
      "type": "CPF"
    },
  },
  "pickupDetails": {
    "buyerDetails": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@somedomain.com",
      "phoneNumber": "55555555555"
    },
    "pickupInstructions": "Some instructions",
    "pickupAddress": { 
      "formatted": "235 W 23rd St, NYC, New York 10011, USA"
      "city": "New York",
      "country": "USA",
      "addressLine": "235 W 23rd St",
      "postalCode": "10011",
      "subdivision": "NY"
    }
  }
}
```

#### Totals (`totals`)

**Description:** The order's total information as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
{
  "discount": 0.0,
  "quantity": 1,
  "shipping": 0.0,
  "subtotal": 1.0,
  "tax": 0.0,
  "total": 1.0,
  "weight": 0.0
}
```

#### Weight Unit (`weightUnit`)

**Description:** The unit in which the order's weight is measured ("KG" or "LB").

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Custom Field (`customField`)

**Description:** Information about a custom field added to the checkout process as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
{
  "title": "Notes for delivery",
  "translatedTitle": "Notas de entrega",
  "value": "Please call when outside"
}
```

#### Fulfillments (`fulfillments`)

**Description:** Lists of fulfillments for this order in an array of JSON objects.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
[
  {
    "id": "8",
    "dateCreated": "2020-04-20T21:00:00.000Z",
    "lineItems": [
      {
        "index": 1,
        "quantity": 1
      }
    ],
    "trackingInfo": {
      "trackingNumber": "449044304137821",
      "shippingProvider": "FEDEX",
      "trackingLink": "https://www.fedex.com/...trackingnumber=449044304137821",
    }
  }
]
```

#### Buyer Language (`buyerLanguage`)

**Description:** The site's displayed language.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Cart ID (`cartId`)

**Description:** The shopping cart's unique ID.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Channel Info (`channelInfo`)

**Description:** Information about the sales channel that submitted the order, as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
{
  "externalOrderId": "03-04896-40604",
  "externalOrderUrl": "http://www.eBay.com/sh/ord/details?orderid=03-04896-40604",
  "type": "EBAY"
}
```

#### Entered By (`enteredBy`)

**Description:** Information about the identity of the order's operator as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the example below, the `enteredBy` object includes an `identityType` field. Its value is one of the following:
>
> - `USER`: Wix user who performed a POS transaction on behalf of the buyer.
> - `MEMBER`: Logged-in site member.
> - `CONTACT`: A Wix contact.

```json
{
  "id": "f6c2c0f9-4e9f-a58d-a02d-9af2497294d9",
  "identityType": "MEMBER"
}
```

#### Refunds (`refunds`)

**Description:** Information about order refunds in an array of JSON objects.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the example below, each refund object includes an `externalRefund` field:
>
> - `true`: The refund was processed by the payment provider and reported to the Wix Orders system.
> - `false`: The refund was reported to the Wix Orders system but was not processed by the payment provider.

```json
[
  {
    "id": "caa2918c-6d38-08df-b484-09b702099e2b",
    "dateCreated": "2021-01-13T08:20:31.638Z",
    "amount": "26.4",
    "reason": "returned",
    "externalRefund": true,
    "paymentProviderTransactionId": "19615318-2134-4160-b886-cdde9c7ae88e"
  },
  {
    "id": "7079923b-1c65-1c7a-37c9-3733de32ea1d",
    "dateCreated": "2021-01-13T08:26:09.419Z",
    "amount": "60.0",
    "externalRefund": false
  }
]
```

#### Subscription Information (`subscriptionInfo`)

**Description:** Information about an order's subscription as a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

> **Note:** In the example below, the `subscriptionSettings` object inside `subscriptionInfo` includes a `frequency` field. Its value is one of the following:
>
> - `DAY`: Daily.
> - `WEEK`: Weekly.
> - `MONTH`: Monthly.
> - `YEAR`: Yearly.

```json
{
  "subscriptionInfo": {
    "id": "9275fb37-5377-434e-a484-6b6933896bc3",
    "cycleNumber": 3,
    "subscriptionSettings": {
      "frequency": "WEEK",
      "autoRenewal": true,
      "billingCycles": 1
    },
    "subscriptionOptionInfo": {
      "id": "0a7c4732-09c8-430c-b94e-f189cc0ce25a",
      "title": "Weekly",
      "description": "Weekly subscription"
    }
  }
}
```

## Products

This section explains the permissions and fields available in the Products collection.

To use the Products collection in code, refer to it as `Stores/Products`.

::::tabs
:::REST_TAB
```
// Query all products
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/Products",
    "query": {}
  }'

// Query all products, including variants
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/Products",
    "query": {
      "appOptions": {
        "includeVariants": true
      }
    }
  }'
```
:::
:::SDK_TAB
```js
import { items } from "@wix/data";

// Query all products
items
  .query("Stores/Products")
  .find()
  .then((results) => {
    // handle the results
  });

// Query all products, including variants
items
  .query("Stores/Products")
  .find({
    appOptions: {
      // Include product variants in the query. Defaults to `false`.
      includeVariants: true,
    },
  })
  .then((results) => {
    // handle the results
  });
```
:::
::::

<blockquote class="important">

**Important:**

- You can query up to 100 items from the Products collection. Trying to query more than 100 items by raising the query [limit](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language#paging) will result in an error.
- You can use up to 5 filters in one query. This limit can be extended by using the 'and' operator to combine queries.

</blockquote>

By default, querying hidden products requires the appropriate permissions. To include hidden products in your query, set the `includeHiddenProducts` option to `true`.

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/Products",
    "query": {
      "appOptions": {
        "includeVariants": true,
        "includeHiddenProducts": true
      }
    }
  }'
```
:::
:::SDK_TAB
```js
import { items } from "@wix/data";

// Query all products, including variants and hidden products
items.query("Stores/Products")
  .find({
    appOptions: {
      // Include product variants in the query. Defaults to `false`.
      includeVariants: true,
      // Include hidden products in the query. Defaults to `false`.
      includeHiddenProducts: true
    }
  })
  .then((results) => {
    // handle the results
  });
```
:::
::::

### Permissions

The Products collection has the following [permissions](https://support.wix.com/en/article/cms-collection-permissions-overview):

- `read`: `ANYONE`
- `create`: None
- `update`: None
- `remove`: None

### Fields

> **Note:** This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

This section describes each field in this collection and its properties.

Each field heading shows the field name followed by the field ID in parentheses, in the format "fieldName (`fieldId`)".

#### ID (`_id`)

**Description:** The product ID (GUID) that was created by the server. This is a system field and is hidden by default.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `contains`, `startsWith`

**Read-only:** Yes

#### Name (`name`)

**Description:** The name of the product.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `contains`, `startsWith`

**Read-only:** Yes

#### Updated Date (`_updatedDate`)

**Description:** Date and time the product was last changed.

**Type:** Date

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `lt`, `lte`, `gt`, `gte`

**Read-only:** Yes

#### Description (`description`)

**Description:** The product description in rich text.

**Type:** Rich text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`, `hasSome`, `contains`, `startsWith`

**Read-only:** Yes

#### Main Media (`mainMedia`)

**Description:** Displays the main media item (image or video) for this product as it appears in the Store Manager.

**Type:** Image

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Media Items (`mediaItems`)

**Description:** Lists all the media items available for this product in an array of JSON objects.

**Type:** Media Gallery

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
[
  {
    type: "Image",
    src: "wix:image://v1/68d3a9_1de7529c444b4c9eb38401f8efe0cad2.jpg/flowers.jpg/#originWidth=1970&originHeight=1120",
    title: "title",
    description: "whatever first line\nthe second line.",
    link: "https://www.whatever.com",
  },
  {
    type: "Video",
    src: "wix:video://v1/11062b_03c50f8fe4a34cc297a984e483a282ef/simpsons.mov#posterUri=96fbec_52cd5b00f7fd48e0a83bc1fb1dfb06ea.jpg &posterWidth=1920&posterHeight=1080",
    title: "title",
    description: "whatever first line\nthe second line.",
    link: "https://www.whatever.com",
    thumbnail:
      "wix:image://v1/68d3a9_1de7529c444b4c9eb38401f8efe0cad2.jpg/flowers.jpg/#originWidth=1970&originHeight=1120",
  },
];
```

#### SKU (`sku`)

**Description:** The product's stock-keeping unit number.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** Yes

**Read-only:** Yes

#### Ribbon (`ribbon`)

**Description:** The product's ribbon. Used to highlight relevant information about a product. For example, `"New Arrival"` or `"5 items left"`.

> **Note:** The `ribbon` field replaces the deprecated `ribbons` field.

**Type:** Text

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** No

#### Currency (`currency`)

**Description:** The product's currency. Because stores only have one currency, this value is the same for all products.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Price (`price`)

**Description:** The product's price.

**Type:** Number

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `lt`, `lte`, `gt`, `gte`

**Read-only:** Yes

#### Discounted Price (`discountedPrice`)

**Description:** The discounted price, if any. If no discount is configured, the full price is displayed.

**Type:** Number

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Formatted Price (`formattedPrice`)

**Description:** The price formatted with the currency (e.g., $20).

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Formatted Discounted Price (`formattedDiscountedPrice`)

**Description:** The discounted price formatted with the currency (e.g., $15).

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Price Per Unit (`pricePerUnit`)

**Description:** The product's base price per unit, automatically calculated based on provided pricePerUnitData (e.g., 0.3).

**Type:** Number

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** No

**Read-only:** Yes

#### Formatted Price Per Unit (`formattedPricePerUnit`)

**Description:** The product's base price per unit, formatted with the currency (e.g., $0.30)

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Price Per Unit Data (`pricePerUnitData`)

**Description:** Price per unit quantities and measurement units.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** No

```json
{
  "totalQuantity": 1,
  "totalMeasurementUnit": "KG",
  "baseQuantity": 100,
  "baseMeasurementUnit": "G"
}
```

#### Track Inventory (`trackInventory`)

**Description:** Indicates whether inventory is tracked for this product.

**Type:** Boolean

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### In Stock (`inStock`)

**Description:** Indicates whether the product is in stock.

**Type:** Boolean

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Quantity In Stock (`quantityInStock`)

**Description:** The number of items currently in stock. Only relevant for products whose "TrackInventory" field is "True".

**Type:** Number

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Additional Info Sections (`additionalInfoSections`)

**Description:** Displays the Additional Info sections you have in your store in an array of JSON objects.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
[
  {
    "title": "PRODUCT INFO",
    "description": "I'm a product detail."
  },
  ...
]
```

#### Product Options (`productOptions`)

**Description:** Displays the defined product options and choices as a complex JSON object. Also supports easy querying and filtering.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

You can query the Products collection and filter datasets connected to the collection based on the product options you have defined in your store. The product options are stored in a complex JSON object, with the choices for each option stored as an array of objects (see below). Rather than searching through each choice, you can use special syntax that only requires the product option name and the values of choices available for that option. You can filter this field using these functions: eq, ne, hasSome, hasAll.

For example, if you have a product option called "Size," you can use `productOptions.size.value` in your code (note that the case of the name doesn't matter). If you have a product option called "Color," you use `productOptions.color.value`. You can also use any custom options you may have defined. The name you use is the name of the option in your store.

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/Products",
    "query": {
      "filter": {
        "productOptions.color.value": {
          "$hasSome": ["#0000ff"]
        }
      }
    }
  }'
```
:::
:::SDK_TAB
```js
// filter a dataset by color

import wixData from 'wix-data';

$w("#myDataset").setFilter(wixData.filter()
  .hasSome('productOptions.color.value', ['#0000ff', ...])
)

// query the "Stores/Products" collection by color

import { items } from "@wix/data";

items.query("Stores/Products")
  .hasSome('productOptions.color.value', ['#0000ff', ...])
  .find()
  .then(console.log)
```
:::
::::

Format of the JSON object:

```json
{
  "Option1":
  {
    "optionType": "color",
    "name": "Option1",
    "choices":
    [
      {
        "value": "#0000ff",
        "mainMedia": "missing-media.png",
        "mediaItems": [],
        "inStock": true,
        "visible": true
      }
    ]
    ...
  },
  "Option2":
  {
    "optionType": "drop_down",
    "name": "Size",
    "choices":
    [
      {
        "value": "Large",
        "mainMedia": "wix:image://v1/anImage.jpg/file.jpg#originWidth=1000&originHeight=1000",
        "mediaItems":
        [
          {
            "id": "anImage.jpg",
            "src": "wix:image://v1/anImage.jpg/file.jpg#originWidth=1000&originHeight=1000",
            "description": "",
            "title": "title",
            "type": "Image"
          },
          ...
        ]
        "inStock": true,
        "visible": true
      },
      ...
    ]
  }
}
```

#### Product Page Url (`productPageUrl`)

**Description:** Displays the URL for the product's page on your site.

**Type:** URL

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Manage Variants (`manageVariants`)

**Description:** Indicates whether product variants are managed for this store.

**Type:** Boolean

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Custom Text Fields (`customTextFields`)

**Description:** Displays any custom fields you may have set up in an array of JSON objects.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
[
  {
    "title": "custom text",
    "maxLength": 500,
    "mandatory": true
  }
  ...
]
```

#### Product Type (`productType`)

**Description:**The type of product (physical or digital).

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `contains`, `startsWith`

**Read-only:** Yes

#### Slug (`slug`)

**Description:** The product's slug, which is its URL-friendly name that is unique across the store.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** Yes

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`, `contains`, `startsWith`

**Read-only:** Yes

#### Weight (`weight`)

**Description:** The product's weight.

**Type:** Number

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Collections (`collections`)

**Description:** The collections the product belongs to.

**Type:** Reference (Multiple Items)

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `hasSome`

**Read-only:** Yes

#### Inventory Item (`inventoryItemId`)

**Description:** The item's ID in the Stores/InventoryItems collection that corresponds to the product.

**Type:** Text

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Discount (`discount`)

**Description:** Discount deducted from the product's original price.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** No

> **Note:** In the example below, the `discount` object includes a `type` field. Its value is one of the following:
>
> - `NONE`: Pass this value to remove a discount.
> - `AMOUNT`: Discount amount. In the example below, the discount is 5 ($ / € / £ / ¥ / etc.), depending on the product's [currency](#currency-currency-1).
> - `PERCENT`: Discount is a percentage.

```json
{
  "type": "AMOUNT",
  "value": 5
}
```

#### Seo Data (`seoData`)

**Description:** Lists any custom SEO data for the product as an array of SEO tag JSON objects. [Learn more.](https://support.wix.com/en/search?term=seo)

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** No

```json
{
  "tags": [
    {
      "type": "title",
      "children": "Indonesian Blend",
      "custom": false,
      "disabled": false
    },
    {
      "type": "meta",
      "props": {
        "name": "description",
        "content": "Half Java Arabica, half Bali Robusta - big flavor with a biggish kick."
      },
      "children": "",
      "custom": false,
      "disabled": false
    },
    {
      "type": "meta",
      "props": {
        "name": "robots",
        "content": "index"
      },
      "children": "",
      "custom": false,
      "disabled": false
    }
    ...
  ]
}
```

#### Brand (`brand`)

**Description:** Product brand.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** Yes

**Read-only:** Yes

## Variants

This section explains the permissions and fields available in the Variants collection.

To use the Variants collection in code, refer to it as `Stores/Variants`.

::::tabs
:::REST_TAB
```
curl -X POST \
  'https://www.wixapis.com/wix-data/v2/items/query' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: <AUTH>' \
  -d '{
    "dataCollectionId": "Stores/Variants",
    "query": {}
  }'
```
:::
:::SDK_TAB
```js
import { items } from "@wix/data";

items.query("Stores/Variants")
  .find()
  .then((results) => {
    // handle the results
  });
```
:::
::::

<blockquote class="important">

**Important:** 
You can query up to 100 items from the Variants collection. Trying to query more than 100 items by raising the query [limit](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language#paging) will result in an error.

</blockquote>

### Permissions

The Variants collection has the following [permissions](https://support.wix.com/en/article/cms-collection-permissions-overview):

- `read`: `ANYONE`
- `create`: None
- `update`: None
- `remove`: None

### Fields

> **Note:** This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

This section describes each field in this collection and its properties.

Each field heading shows the field name followed by the field ID in parentheses, in the format "fieldName (`fieldId`)".

#### ID (`_id`)

**Description:** The store variant ID (GUID) created by the server. It is a system field comprised of the product ID and the product variant ID, separated by a hyphen.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** Yes

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Variant ID (`variantId`)

**Description:** The variant ID (GUID) that was created by the server.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** Yes

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Full Variant Name (`fullVariantName`)

**Description:** The full name of the variant.

**Type:** Text 

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Product ID (`productId`)

**Description:** The product ID (GUID) that was created by the server.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Variant Name (`variantName`)

**Description:** The name of the variant.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Product Name (`productName`)

**Description:** The name of the product.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Managed Variant (`managedVariant`)

**Description:** Indicates whether the variant is being managed for the product - enables unique SKU, price, and weight per variant. Also affects inventory data.

**Type:** Boolean

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`

**Read-only:** Yes

#### SKU (`sku`)

**Description:** Variant stock-keeping unit number.

**Type:** Text

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** `eq`, `ne`, `hasSome`

**Read-only:** Yes

#### Stock (`stock`)

**Description:** Stock data for this variable in a JSON object.

**Type:** JSON

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
"stock": {
  "trackQuantity": true,
  "quantity": 50,
  "inStock": true
}
```

#### Choices (`choices`)

**Description:** Displays the defined product options and choices as a JSON object.

**Type:** JSON

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

```json
{
  "Size": "Medium",
  "Color": "Black"
}
```

#### Media (`media`)

**Description:** Displays the main media item (image or video) for this product as it appears in the Store Manager.

**Type:** Image

**Can connect to data:** Yes

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** No

**Read-only:** Yes

#### Collections (`collections`)

**Description:** The collections the variant belongs to.

**Type:** Reference (Multiple Items)

**Can connect to data:** No

**Can use in dynamic page URL:** No

**Sortable:** No

**Filter Support:** Yes

**Read-only:** Yes

---

#### [wix.stores.catalog.v3.CatalogApi.SearchProducts](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/search-products)

# Package: catalogV3
# Namespace: productsV3
# Method: Search Products
# Method link: https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/search-products
# Method API Endpoint: POST https://www.wixapis.com/stores/v3/products/search
## Method Code Examples

--- Code Example: SearchProducts with filters ---

### SearchProducts with filters
Shows examples of supported filters. Pay attention that when filtering by  `allCategoriesInfo.categories`, `directCategoriesInfo.categories` or `variantsInfo.variants` you have to use `$matchItems` operator. `$matchAll` is not supported for any other fields.

```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Authorization: <AUTH>' \
--data-binary '{
                  "fields": [
                      "ALL_CATEGORIES_INFO",
                      "WEIGHT_MEASUREMENT_UNIT_INFO",
                      "CURRENCY"
                  ],
                  "search": {
                      "filter": {
                          "$and": [
                              {
                                  "allCategoriesInfo.categories": {
                                      "$matchItems": [
                                          {
                                              "id": {
                                                  "$eq": "1aecdc65-176f-4f07-a846-77a8d5079eb5"
                                              }
                                          }
                                      ]
                                  }
                              },
                              {
                                  "productType": {
                                      "$eq": "PHYSICAL"
                                  }
                              },
                              {
                                  "visible": {
                                      "$eq": true
                                  }
                              },
                              {
                                  "brand.id": {
                                      "$eq": "c0d3bf32-45bb-47ea-a3fe-668242bbba6c"
                                  }
                              },
                              {
                                  "actualPriceRange.minValue.amount": {
                                      "$gt": 3
                                  }
                              },
                              {
                                  "actualPriceRange.minValue.amount": {
                                      "$lt": 120
                                  }
                              },
                              {
                                  "inventory.availabilityStatus": {
                                      "$in": [
                                          "OUT_OF_STOCK",
                                          "PARTIALLY_OUT_OF_STOCK"
                                      ]
                                  }
                              }
                          ]
                      }
                  }
              }'
```
--- Method Response Shape ---

## Method Response Shape

```json
{
  "products": [
    {
      "oneOf": [
        "typedProperties"
      ]
    }
  ],
  "pagingMetadata": {
    "count": "integer<int32>",
    "cursors": "object",
    "hasNext": "boolean"
  },
  "aggregationData": {
    "results": [
      "AggregationResults"
    ]
  }
}
```
--- Code Example: Find a product by exact name ---

### Find a product by exact name
Constrain `search.expression` to the `name` field and disable fuzzy matching. The search ranker still may return near-matches, so enforce exact equality on `product.name` client-side.

```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>' \
-d '{
  "search": {
    "search": {
      "expression": "Premium Coffee",
      "fields": ["name"],
      "fuzzy": false
    }
  }
}'
```
--- Method Description ---
## Method Description:
Retrieves a list of up to 100 products, given the provided filtering, search expression, sorting, and cursor paging.
Pass supported values to the `fields` array in the request to include those fields in the response.

To learn about working with _Search_ endpoints, see
[API Query Language](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-the-wix-api-query-language),
and [Sorting and Paging](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-sorting-and-paging).

Learn more about the differences between [_Query_ and _Search_](https://dev.wix.com/docs/api-reference/articles/work-with-wix-apis/data-retrieval/about-search-query-and-list-methods) methods.

> **Notes:**
> + When using free-text search, you must specify which fields to search using the `search.fields` parameter.
> + To retrieve a non-visible product (`visible: false`), your app must have the 'Product v3 read admin' (`SCOPE.STORES.PRODUCT_READ_ADMIN`) permission scope.
> + This method does not return variant data. To retrieve variant data, call [Get Product](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/get-product) or [Get Product By Slug](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/get-product-by-slug) for each product individually, or use the [Read-Only Variants API](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/read-only-variants-v3/introduction) for variant-centric queries.
## Method Permissions:
WIX_STORES.PRODUCT_READ,WIX_STORES.PRODUCT_READ_NON_VISIBLE,WIX_STORES.PRODUCT_MERCHANT_DATA_READ
## Method Permissions Scopes:
Read products in v3 catalog: SCOPE.STORES.PRODUCT_READ
Product v3 read admin: SCOPE.STORES.PRODUCT_READ_ADMIN
Product v3 read admin: SCOPE.STORES.PRODUCT_READ_ADMIN
## Additional Method Code Examples

--- Code Example: Search Products ---

### Search Products
Searches for products in a specific category, sorted by manual order

```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>' \
-d '{
  "fields": [
    "DIRECT_CATEGORIES_INFO"
  ],
  "search": {
    "filter": {
      "directCategoriesInfo.categories": {
        "$matchItems": [
          {
            "id": {
              "$eq": "f2b91faf-fd47-465a-ab45-52bf82cd9a3b"
            }
          }
        ]
      }
    },
    "sort": [
      {
        "selectItemsBy": [
          {
            "directCategoriesInfo.categories.id": "f2b91faf-fd47-465a-ab45-52bf82cd9a3b"
          }
        ],
        "fieldName": "directCategoriesInfo.categories.index",
        "order": "ASC"
      }
    ],
    "cursorPaging": {
      "limit": 50
    }
  }
}'
```

--- Code Example: SearchProducts: count aggregation ---

### SearchProducts: count aggregation
Returns number of products assigned to info sections

```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Authorization: <AUTH>' \
-d '{
                 "search": {
                   "aggregations": [
                     {
                       "name": "count per info section",
                       "type": "VALUE",
                       "fieldPath": "infoSections.id",
                       "value": {}
                     }
                   ],
                   "cursorPaging": {
                     "limit": 0
                   }
                 }
               }'
```

--- Code Example: SearchProducts: min and max aggregations ---

### SearchProducts: min and max aggregations
Returns min and max variant prices across all products

```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>' \
-d '{
                     "search": {
                       "aggregations": [
                         {
                           "type": "SCALAR",
                           "name": "min_price",
                           "fieldPath": "variantsInfo.variants.price.actualPrice.amount",
                           "scalar": {
                             "type": "MIN"
                           }
                         },
                         {
                           "type": "SCALAR",
                           "name": "max_price",
                           "fieldPath": "variantsInfo.variants.price.actualPrice.amount",
                           "scalar": {
                             "type": "MAX"
                           }
                         }
                       ],
                       "sort": [],
                       "cursorPaging": {
                         "limit": 0
                       }
                     },
                     "fields": []
                   }'
```

--- Code Example: SearchProducts: filter and sort by createdDate ---

### SearchProducts: filter and sort by createdDate
```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>' \
-d '{
    "fields": [
        "WEIGHT_MEASUREMENT_UNIT_INFO",
        "CURRENCY"
    ],
    "search": {
      "sort": [
        {
          "fieldName": "createdDate",
          "order": "DESC"
        }
      ],
      "filter": {
        "createdDate": {
          "$gt": "2024-07-22T13:22:45"
        }
      },
      "cursorPaging": {
        "limit": 2
      }
    }
  }'
```

--- Code Example: SearchProducts by free text ---

### SearchProducts by free text
Enter search expression and find it in `name`, `description` or `variants.sku`

```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>' \
-d '{
            "fields": [
                "WEIGHT_MEASUREMENT_UNIT_INFO",
                "CURRENCY"
            ],
          "search": {
            "search": {
              "expression": "tea"
            }
          }
        }'
```

--- Code Example: SearchProducts with filter by variants ---

### SearchProducts with filter by variants
```javascript
curl -X POST 'https://www.wixapis.com/stores/v3/products/search' \
-H 'Content-Type: application/json' \
-H 'Authorization: <AUTH>' \
-d '{
        "fields": [
            "WEIGHT_MEASUREMENT_UNIT_INFO",
            "CURRENCY"
        ],
        "search": {
            "filter": {
                "variantsInfo.variants": {
                    "$matchItems": [
                        {
                            "visible": {
                                "$eq": true
                            }
                        },
                        {
                            "price.actualPrice.amount": {
                                "$gt": 1
                            }
                        },
                        {
                            "price.actualPrice.amount": {
                                "$lt": 100
                            }
                        },
                        {
                            "sku": {
                                "$eq": "5555"
                            }
                        },
                        {
                            "barcode": {
                                "$eq": "987"
                            }
                        },
                        {
                            "choices.optionChoiceIds.optionId": {
                                "$hasSome": [
                                    "3e85ff44-3763-4946-b9f3-993fd4c5c771"
                                ]
                            }
                        },
                        {
                            "choices.optionChoiceIds.choiceId": {
                                "$hasSome": [
                                    "0b649a04-b73b-492e-b3c9-315c621b5bd8"
                                ]
                            }
                        }
                    ]
                }
            }
        }
    }'
```

--- Code Example: HTTP request example ---

### HTTP request example
```javascript
(async () => {
      const response = await fetch("https://www.wixapis.com/stores/v3/products/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cookie": "automation=true",
          "authorization": "appToken..."
        },
        body: JSON.stringify({
          "search": {
            "search": {
              "expression": "Minimal Physical Product",
              "fields": [
                "name"
              ]
            }
          },
          "fields": [
            "CURRENCY"
          ]
        })
      });
      const result = await response.json();
      return result;
    })();
```


---

#### [wix.suppliershub.marketplace.product.v1.MarketplaceProduct.QueryProducts](https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/query-products)

# Package: suppliersHub
# Namespace: products
# Method: Query Products
# Method link: https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/query-products
# Method API Endpoint: POST https://www.wixapis.com/suppliers-hub/v1/products/query
## Method Code Examples

--- Code Example: Query products ---

### Query products
Finds products using WQL filters

```javascript
curl -X POST \
'https://www.wixapis.com/suppliers-hub/v1/products/query' \
-H 'Authorization: <AUTH>' \
-H 'Content-Type: application/json' \
-d '{
  "query": {
    "filter": {
      "minimumPrice": {
        "$gt": 24.99
      }
    },
    "sort": [
      {
        "fieldName": "minimumPrice",
        "order": "ASC"
      }
    ],
    "cursorPaging": {
      "limit": 3
    }
  }
}'
```
--- Method Response Shape ---

## Method Response Shape

```json
{
  "products": [
    "object"
  ],
  "pagingMetadata": {
    "count": "integer<int32>",
    "cursors": "object",
    "hasNext": "boolean"
  }
}
```

--- Method Description ---
## Method Description:
Retrieves a list of products with filtering, sorting, and cursor-based pagination.

Provides real-time, strongly consistent results with filtering, sorting, and pagination.

Use Query Products when you need accurate, up-to-date data such as for operational tasks or inventory checks.
For product discovery and browsing with full-text search capabilities, use [Search Products](https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/search-products) instead.
## Method Permissions:
SUPPLIERS_HUB.PRODUCT_READ
## Method Permissions Scopes:
Read Marketplace: SCOPE.SUPPLIERS_HUB.READ_MARKETPLACE
## Additional Method Code Examples

--- Code Example: HTTP request example ---

### HTTP request example
```javascript
(async () => {
      const response = await fetch("https://www.wixapis.com/suppliers-hub/v1/products/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cookie": "automation=true",
          "authorization": "appToken..."
        },
        body: JSON.stringify({
          "query": {
            "filter": {
              "minimumPrice": {
                "$gt": 24.99
              }
            },
            "sort": [
              {
                "fieldName": "minimumPrice",
                "order": "ASC"
              }
            ],
            "cursorPaging": {
              "limit": 3
            }
          }
        })
      });
      const result = await response.json();
      return result;
    })();
```
## Method Schema Summary:
The `queryProducts` method allows retrieval of products with filtering, sorting, and cursor-based pagination. It is designed for operational tasks and inventory checks requiring accurate, up-to-date data.

**Method Parameters:**

*   **`query`** (CursorQuery): An object containing parameters for querying products.
    *   **`cursorPaging`** (CursorPaging): Specifies pagination details.
        *   **`limit`** (integer): Maximum number of items to return (0-100).
        *   **`cursor`** (string): Pointer to the next or previous page of results (used in subsequent requests).
    *   **`filter`** (object): An object for filtering products. It accepts field names and values, with support for operators like `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
    *   **`sort`** (array<Sorting>): An array of objects to define sorting order.
        *   **`fieldName`** (string): The name of the field to sort by.
        *   **`order`** (SortOrder): The sort order, either `ASC` or `DESC`.
        *   **`selectItemsBy`** (array): Filters to specify which element to use for sorting when `fieldName` refers to a repeated field marked as `MATCH_ITEMS`.

**Return Type:**

*   **`QueryProductsResponse`**: Contains a list of products and pagination metadata.
    *   **`products`** (array<Product>): A list of products matching the query.
    *   **`pagingMetadata`** (CursorPagingMetadata): Information for retrieving additional results.

---

**Questions and Answers:**

1.  **Q: How can I retrieve a list of products?**
    A: Use the `queryProducts` method with optional filtering, sorting, and pagination parameters.
2.  **Q: What is the maximum number of products I can retrieve per page?**
    A: You can retrieve a maximum of 100 products per page using the `limit` parameter.
3.  **Q: How do I filter products by their name?**
    A: Use the `filter` parameter with the `name` field and an appropriate operator like `$eq` or `$startsWith`.
4.  **Q: Can I sort products by their creation date in descending order?**
    A: Yes, you can sort by `createdDate` in `DESC` order within the `sort` parameter.
5.  **Q: How do I get the next page of results after the first request?**
    A: Use the `cursor` value from the `pagingMetadata.cursors.next` field in your subsequent `queryProducts` request.

---

#### [business-solutions/suppliers-hub/products/introduction](https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/introduction)

## Resource: Introduction

## Article: Introduction

## Article Link: https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/introduction

## Article Content:

# About the Marketplace Products API

Use the Marketplace Products API to offer products in the Wix Marketplace as dropshipping, wholesale, or both. This API enables approved business partners to publish products to the Marketplace, where Wix users can discover and add them to their stores.

With the Marketplace Products API, you can:

+ Create and manage products with rich media, pricing, and inventory information.
+ Support both dropshipping and wholesale business models with flexible pricing tiers.
+ Organize products using category assignment and tagging.
+ Perform bulk operations for efficient catalog management.
+ Search and query products with full-text search or real-time accuracy.

## Applying for partnership

This API is available only to approved Wix business partners and requires a signed business agreement with Wix. To apply for partnership, contact suppliershub@wix.com with a short description of your product and integration goals.

Access to this API is limited to ensure that integrations meet Wix's product quality, data security, and user experience standards. Each request is reviewed individually based on the partner's product characteristics, technical capabilities, and alignment with Wix's ecosystem.

If your application does not meet the criteria for partnership, consider [publishing your integration via the Wix App Market](https://www.wix.com/studio/developers/build-wix-apps), which provides a public route for developers to make their products available to Wix users.

## How it works

As a business partner, you create a provider app that manages products on behalf of one or more suppliers. Here's how the components work together:

1. **Your Provider App**: Integrates with the Marketplace Products API to create and manage product catalogs.
2. **Suppliers**: The actual businesses that own and fulfill the products. Each product can optionally be associated with a supplier to display supplier information like name, rating, and verification status in the Marketplace.
3. **Products**: The items you publish to the Marketplace. Each product must include core information like name, media, pricing, and business model type for either dropshipping, wholesale, or both.
4. **Wix Store Owners**: Browse the Marketplace, discover your products, and add them to their stores.

Your provider app serves as the connection point between your suppliers' product catalogs and the Wix Marketplace. You maintain synchronization by linking each Marketplace product to its source using `providerInfo.productId`.

## Business models

The Marketplace supports 2 business models, and products can support one or both:

**Dropshipping**: Store owners add your products to their stores without holding inventory. When a customer places an order, the supplier ships directly to the customer. Dropshipping products require `minimumPrice`, shipping information, and `dropshippingOptions`.

**Wholesale**: Store owners purchase products in bulk at volume-based pricing tiers. Wholesale products require `wholesaleOptions` with:
+ **Price tiers**: Quantity-based pricing that must be continuous, with no gaps between tiers. For example, tier 1 for quantities 1-100, tier 2 for 101+.
+ **Minimum order quantity**: The smallest quantity a store owner can purchase.

Products can support both models simultaneously by setting `types` to both `DROPSHIPPING` and `WHOLESALE`. This allows store owners to choose their preferred business model for each product.

## Inventory

Products include an `inventory` field with two values: `inventory.quantity` (the total stock across all product variants) and `inventory.tier`, a coarse stock-level bucket derived from `quantity`. Use `tier` when you only need a low/medium/high signal — for example, to render badges or trigger restock alerts — without tracking exact counts.

Providers report stock by calling [Update Product](https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/update-product) with `inventory.quantity`. `inventory.tier` is computed automatically using these thresholds:

| Tier         | Quantity   |
|--------------|------------|
| `EMPTY`      | 0          |
| `VERY_LOW`   | 1–10       |
| `LOW`        | 11–25      |
| `MEDIUM`     | 26–50      |
| `HIGH`       | 51–100     |
| `VERY_HIGH`  | 101+       |

If inventory hasn't been reported yet, `quantity` is null and `tier` is `UNKNOWN_INVENTORY_TIER`.

A Product Updated webhook fires when `tier` transitions, with `inventory.tier` listed in the modified fields, so you can react to stock-level changes without polling.

## Product options

Product options describe the variations a product comes in, such as size or color. Each option has a `name` and a list of `values`. All values within a single option must be the same type.

There are 2 predefined option types:

+ **`color`**: Set `values.color` with a color `name`, an optional `hex` code, and an optional `sortIndex`. Use `"Multicolor"` for mixed colors, and omit `hex` in that case.
+ **`size`**, and any other non-color option: Set `values.text` with a display `name` and an optional `sortIndex`. For example, `"S"`, `"M"`, or `"L"`.

Use `sortIndex` to control the display order of an option's values. For best results, use contiguous numbers starting at `0` with no gaps. When you omit `sortIndex`, the client decides the order.

Options are currently informational only. They display available variations to help buyers make purchase decisions, but they don't create separate inventory items or variants.

## Before you begin

It's important to note the following points before starting to code:

+ **Business partner agreement required:** Access to this API requires a signed business agreement and implementation plan with Wix.
+ **Bulk operation limits:** Maximum 100 products per bulk request and 100 products per query request. For operations on more than 100 products, split them into multiple batches.
+ **Product media:** Limited to 15 images per product. The first image becomes the main image.
+ **Categories**: Limited to 100 categories per product. Category namespaces must match the product's type, either dropshipping or wholesale.
+ **Immutable fields**: You can't change `providerInfo.productId` and `providerInfo.productCreatedDate` after creating a product. These fields link to your external system and prevent duplicates.
+ **Product options**: Options are currently informational only and don't create separate inventory items. Variant inventory tracking is planned for a future release.
+ **Search vs Query**: Use Query Products for real-time accuracy in operational tasks. Use Search Products for product discovery and browsing with eventual consistency.
+ **Supplier association**: Associating a product with a supplier is optional. When you provide `supplierInfo.id`, the system automatically retrieves the supplier's name, rating, and verification status.

## Use cases


+ [Create and manage product catalogs](https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/sample-flows).
+ [Organize products with categories and search for better discoverability](https://dev.wix.com/docs/api-reference/business-solutions/suppliers-hub/products/sample-flows).

## Terminology

+ **Marketplace**: The platform where suppliers publish products and Wix store owners discover them.
+ **Provider**: A business partner app that manages products on behalf of suppliers. One provider can manage products for multiple suppliers.
+ **Supplier**: The actual business entity that owns and fulfills the products.
+ **Dropshipping**: A business model where suppliers fulfill orders directly to customers without Wix store owners handling inventory.
+ **Wholesale**: A business model where Wix store owners purchase products in bulk at tiered pricing.
+ **Direct categories**: Categories explicitly assigned to a product.
+ **All categories**: All categories a product belongs to, including parent and ancestor categories.
+ **Price tier**: Quantity-based pricing levels for wholesale products. Tiers must be continuous with no gaps.
+ **Verified supplier**: A supplier that has completed the Marketplace verification process.

@sdk_package_setup

---

#### [business-solutions/stores/catalog-v1/catalog/introduction](https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v1/catalog/introduction)

## Resource: Introduction

## Article: Introduction

## Article Link: https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v1/catalog/introduction

## Article Content:

# About the Wix Stores Catalog API

Wix Stores creates a catalog of store owners’ items for purchase and allows store owners to create smaller collections of products by type or theme. A catalog organizes the store’s products and collections and facilitates inventory management. With the Wix Stores Catalog API you can query individual products, collections or the entire catalog, as well as create products and add their media.

Querying the products and collections in the catalog enables you to coordinate a store’s inventory across other sales platforms (e.g., Facebook marketplace), or inventory management tools (e.g., NetSuite, TradeGecko), among other uses.

<blockquote class="important">
  <strong>Catalog V3</strong>

Wix Stores is introducing **Catalog V3**, a new set of APIs for the Wix Stores product catalog, set to roll out in **Q2 2025**.
The new catalog will initially be rolled out to new users only, and over time, Catalog V3 will fully replace Catalog V1.

This upgraded catalog will provide Wix Stores owners with enhanced tools to build more comprehensive
product catalogs and streamline store management.

To remain compatible with all Wix Stores users, your app must be able to support both versions of the catalog:
+ Learn more about how to integrate with the [Catalog V3 APIs](https://dev.wix.com/docs/rest/business-solutions/stores/catalog-v3/introduction).
+ Use the [Catalog Versioning API](https://dev.wix.com/docs/rest/business-solutions/stores/catalog-versioning/introduction) to determine which version of the Wix Stores Catalog a site is using.

</blockquote>

## Terminology
- **The catalog** is a complete list of all the store’s products.
- **Collections** are themed groupings of items for purchase that a store owner can create to organize their products (e.g., Spring 2019, Running shoes, etc.). Products can belong to multiple collections.
- **Options** are property types that customers can select within the specific product - e.g., color and size.
- **Choices** are the available selections within each option - e.g., red and green choices under the Color option.
- **Variants** are combinations of different product options and choices - e.g., a red shirt in size large.
A variant can override the following values from the parent product:
  - Price
  - SKU
  - Weight
  - Inventory

## Error handling
| Status code | Description                                                                                                                         |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------|
| 200         | Success                                                                                                                             |
| 400         | Invalid input (e.g., when the filter format is not valid or when providing invalid options when calling productOptionsAvailability) |
| 401         | Invalid authorization token, or Wix stores is not installed                                                                         |
| 404         | Requested product or collection is not found                                                                                        |
| 500         | Unexpected error                                                                                                                    |

@sdk_package_setup