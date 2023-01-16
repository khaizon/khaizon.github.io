import './ProjectMedia.css';

interface ProjectMediaProps {
  media: {
    isLocal: boolean;
    isVideo: boolean;
    src: string;
    description: string;
    thumbnail: string;
  };
}

export default function ProjectMedia({ media }: ProjectMediaProps) {
  let mediaElement: any;
  if (!media.isLocal && media.isVideo) {
    mediaElement = <iframe width="100%" height="100%" src={media.src} allowFullScreen />;
  } else if (media.isLocal && media.isVideo) {
    mediaElement = (
      <video width="100%" height="100%" controls autoPlay muted>
        <source src={import.meta.env.BASE_URL + media.src} type="video/mp4" />
      </video>
    );
  } else {
    mediaElement = <img src={import.meta.env.BASE_URL + media.src} alt={media.description} />;
  }

  return (
    <div className="project-media">
      <div className="project-media-container">{mediaElement}</div>
      <div className="project-media-description">{media.description}</div>
    </div>
  );
}
