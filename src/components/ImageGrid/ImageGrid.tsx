import type { ImageGridProps } from "../../types/image";
import style from "./ImageGrid.module.css";


function ImageGrid({ images, folderTitle }: ImageGridProps) {

  let folder;
  if (folderTitle){
    folder = "/" + folderTitle + "/";
  } else{
    folder = ""
  }
  return (
    <section className={style.grid}>
      {images.map((image) => {
        return (
          <article className={style[`span${image.span}`]}>
            <img
              key={image.image}
              className={style.image}
              
              src={folder + image.image}
            />
          </article>
        );
      })}
    </section>
  );
}

export default ImageGrid;
