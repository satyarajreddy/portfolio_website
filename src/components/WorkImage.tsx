import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  fallbackImage?: string;
  alt?: string;
  video?: string;
  link?: string;
  fallbackTitle?: string;
}

const WorkImage = (props: Props) => {
  const [imageError, setImageError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const effectiveImage =
    props.image && props.image.length > 0 && !imageError && !useFallback
      ? props.image
      : props.fallbackImage;
  const hasImage = Boolean(effectiveImage);

  const handleError = () => {
    if (props.fallbackImage && !useFallback) {
      setUseFallback(true);
    } else {
      setImageError(true);
    }
  };

  const href = props.link ?? "#";

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={href}
        target={props.link ? "_blank" : undefined}
        rel={props.link ? "noopener noreferrer" : undefined}
        data-cursor="disable"
      >
        <div className="work-image-preview">
          {hasImage ? (
            <>
              <img
                src={effectiveImage}
                alt={props.alt ?? "Project preview"}
                className="work-preview-img"
                onError={handleError}
              />
              <div className="work-preview-gradient" aria-hidden />
            </>
          ) : (
            <div className="work-image-placeholder">
              <div className="work-image-placeholder-dots" aria-hidden />
              {props.fallbackTitle && (
                <h4 className="work-image-placeholder-title">
                  {props.fallbackTitle.toUpperCase()}
                </h4>
              )}
            </div>
          )}
        </div>
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
