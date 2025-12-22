export interface RenderImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  purchaseUrl: string;
  priceEstimate?: string;
  description?: string;
}

export interface ClientInfo {
  name: string;
  city: string;
  state: string;
  projectTitle: string;
}