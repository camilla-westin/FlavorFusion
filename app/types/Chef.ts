import { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Chef {
  _id: string;
  _type: "chef";
  _createdAt: string;
  name?: string;
  slug: Slug;
  mainImage?: ImageAsset;
  imageAlt?: string;
  body: PortableTextBlock[];
}
