export type ImageGridProps = {
  images: imagesArray[];
  folderTitle: string;
};

export interface imagesArray {
    image: string,
    span: number,
    alt: string,
}

export type Experience = {
  title: string;
  images: imagesArray[];
  description: string;
};
