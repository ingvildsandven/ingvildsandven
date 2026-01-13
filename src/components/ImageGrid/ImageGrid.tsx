import style from "./ImageGrid.module.css";

type ImageGridProps = {
  images: imagesArray[];
  folderTitle: string;
};

interface imagesArray {
    image: string,
    span: number,
}

function ImageGrid({ images, folderTitle }: ImageGridProps) {
  return (
    <section className={style.grid}>
      {images.map((image) => {
        return (
          <article className={style[`span${image.span}`]}>
            <img
              key={image.image}
              className={style.image}
              src={"/" + folderTitle + "/" + image.image}
            />
          </article>
        );
      })}
    </section>
  );
}

export default ImageGrid;
