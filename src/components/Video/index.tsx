import styles from "./index.module.css";

type Props = {
  videoId: string;
  title: string;
};
export function Video({ videoId, title }: Props) {
  return (
    <div class={styles.root}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&title=0&byline=0&portrait=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
}
