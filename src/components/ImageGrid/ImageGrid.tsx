import type { ImageGridProps } from "../../types/image";
import style from "./ImageGrid.module.css";


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
