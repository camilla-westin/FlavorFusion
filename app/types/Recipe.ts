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
  categories?: string[];
  cookingTime?: string;
  ingredients?: PortableTextBlock[];
  instructions?: string[];
  complexity?: "enkel" | "medel" | "avancerad";
}
