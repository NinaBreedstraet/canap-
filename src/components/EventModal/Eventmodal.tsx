import styles from "./eventModal.module.scss";
import { useTranslation } from "react-i18next";

type EventModalProps = {
  data: {
    title: string;
    start: Date;
    end: Date;
    description?: string;
    location?: string;
  };
  onClose: () => void;
};

const EventModal = ({ data, onClose }: EventModalProps) => {
  const { t, i18n } = useTranslation();

  const isSameDay = data.start.toDateString() === data.end.toDateString();

  return (
    <div className={styles.eventModal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>{data.title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>

        <div className={styles.body}>
          <div>
            <strong>📅 {t("modal.date")}:</strong>{" "}
            {isSameDay
              ? data.start.toLocaleDateString(i18n.language, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : `${data.start.toLocaleDateString()} - ${data.end.toLocaleDateString()}`}
          </div>

          <div>
            <strong>⏰ {t("modal.time")}:</strong>{" "}
            {data.start.toLocaleTimeString(i18n.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            –{" "}
            {data.end.toLocaleTimeString(i18n.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>

          {data.location && (
            <div>
              <strong>📍 {t("modal.location")}:</strong> {data.location}
            </div>
          )}

          {data.description && (
            <div>
              <strong>📝 {t("modal.description")}:</strong> {data.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
