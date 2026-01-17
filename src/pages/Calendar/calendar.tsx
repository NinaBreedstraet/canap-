import styles from "./calendar.module.scss";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/daygrid";
import EventModal from "../../components/EventModal/Eventmodal";
import { useTranslation } from "react-i18next";

const supabase = createClient(
  "https://ysaqusibxonxsvickupw.supabase.co",
  "sb_publishable_OKdmw0105EaZTWCUm-cpeA_UZVaJAob"
);

export default function Calendar() {
  const { t } = useTranslation();
  const [modalData, setModalData] = useState<any>(null);

  const fetchEvents = async (info: any) => {
    const { data, error } = await supabase
      .from("events")
      .select("id, title, description, start_time, end_time, location")
      .gte("start_time", info.startStr)
      .lte("end_time", info.endStr);

    if (error) {
      console.error(error);
      return [];
    }

    return data.map((e) => ({
      id: e.id,
      title: e.title || t("calendar.event"),
      start: e.start_time,
      end: e.end_time,
      extendedProps: {
        description: e.description,
        location: e.location,
      },
    }));
  };

  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p id={styles.left}>
            <a href="/home">{t("navigation.home")} </a> {">"}{" "}
            {t("navigation.calendar")}
          </p>
          <p id={styles.right}>4 - {t("navigation.calendar")}</p>
        </div>
        <div className={styles.pages}>
          <div className={styles.leftPage}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              locale={t("calendar.locale", "nl")}
              firstDay={1}
              height={500}
              editable
              events={fetchEvents}
              headerToolbar={{
                left: "prev today next",
                center: "title",
                right: "",
              }}
              eventClick={(info) =>
                setModalData({
                  title: info.event.title,
                  start: info.event.start!,
                  end: info.event.end!,
                  description: info.event.extendedProps.description,
                  location: info.event.extendedProps.location,
                })
              }
            />
          </div>
          <div className={styles.rightPage}>
            <img
              className={styles.blinkje9}
              src="/Images/blinkje8.png"
              alt=""
            />
            <img className={styles.disco} src="/Images/mannetjes2.png" alt="" />
            <img
              className={styles.blinkje2}
              src="/Images/blinkje1.png"
              alt=""
            />
          </div>
        </div>

        {modalData && (
          <EventModal data={modalData} onClose={() => setModalData(null)} />
        )}
      </div>
    </div>
  );
}
