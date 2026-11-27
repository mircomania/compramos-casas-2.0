import { useRef, useState } from 'react';
import type { ReactNode } from 'react';

import IconPlay from '../../assets/images/icons/play';
import styles from '../../styles/modules/videoPlayer.module.css';

interface VideoPlayerProps {
    title: string;
    poster: string;
    webm: string;
    mp4: string;
    className?: string;
    children?: ReactNode;
}

export const VideoPlayer = ({ title, poster, webm, mp4, className, children }: VideoPlayerProps) => {
    const video = useRef<HTMLVideoElement>(null);
    const [started, setStarted] = useState(false);
    const [error, setError] = useState(false);

    function play() {
        const player = video.current;
        if (!player) return;

        if (error) player.load();
        setError(false);
        setStarted(true);
        player.play().catch(() => setError(true));
    }

    return (
        <div className={`${styles.player} ${className ?? ''}`}>
            <video
                ref={video}
                poster={started ? poster : undefined}
                preload="none"
                playsInline
                controls={started}
                tabIndex={started ? 0 : -1}
                aria-label={title}
                onError={() => setError(true)}
                onPlaying={() => {
                    if (document.activeElement === document.body) video.current?.focus({ preventScroll: true });
                }}
            >
                <source src={webm} type="video/webm" />
                <source src={mp4} type="video/mp4" onError={() => setError(true)} />
            </video>
            {!started && (
                <>
                    <img className={styles.poster} src={poster} alt="" width="1280" height="720" loading="lazy" decoding="async" />
                    <div className={styles.overlay}>{children}</div>
                </>
            )}
            {(!started || error) && (
                <button
                    className={styles.play}
                    type="button"
                    onClick={play}
                    aria-label={`${error ? 'Reintentar' : 'Reproducir'} ${title}`}
                >
                    <IconPlay />
                </button>
            )}
            {error && <p className={styles.error} role="status">El video no pudo reproducirse.</p>}
        </div>
    );
};
