import { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Recipe {
  _id: string;
  _type: "recipe";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
