import React from "react";
import preloader from "../../assets/images/preloader.svg";
import styles from "./List.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const List = (props) => {
  debugger;
  if (props.error) {
    return <div className={styles.error}>ERROR</div>;
  }
  let id = -1;
  let flag = true;
  if (props.list.isFetching)
    return (
      <div className={styles.preloader}>
        <img src={preloader} alt="preloader" />
      </div>
    );
  return (
    <div>
      <a name="top" />
      <div className={styles.link}>
        {" "}
        <Link
          activeClass="active"
          to="bottom"
          spy={true}
          smooth="easeInOutQuint"
          offset={-70}
          duration={500}
        >
          <span className={styles.Link}>To Bottom</span>
        </Link>
      </div>

      {props.list.users.map((m) => {
        id += 1;
        props.list.toggleInfo.map((ID) => {
          if (ID === m.id) {
            flag = false;
          }
        });
        if (flag) {
          return (
            <div
              className={styles.item}
              onClick={() => props.toggleInfo(m.id)}
              key={id}
            >
              <div className={styles.row}>
                <span className={styles.name}>
                  {m.firstName} {m.lastName}
                </span>
                <div>{m.timestamp}</div>
              </div>
              <div className={styles.message}>{m.message}</div>
            </div>
          );
        } else {
          flag = true;
          return (
            <div
              className={styles.item}
              onClick={() => props.toggleInfo(m.id)}
              key={id}
            >
              <div className={styles.row}>
                <span className={styles.name}>
                  {m.firstName} {m.lastName}
                </span>
                <div>{m.timestamp}</div>
              </div>
              <div className={styles.message}>{m.message}</div>
              <div> email - {m.email}</div>
              <div> phone - {m.phone}</div>
            </div>
          );
        }
      })}
      <a name="bottom" />
      <div className={styles.link}>
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className={styles.Link}>To Top</span>
        </Link>
      </div>
    </div>
  );
};

export default List;
